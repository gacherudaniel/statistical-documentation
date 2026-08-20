/**
 * Resolves a Quarto binary for the build.
 *
 * Most environments already have Quarto installed (developer machines, the
 * GitHub Actions workflow, the Dockerfile). Hosted build images that cannot
 * install system packages fall back to a root-free install that downloads the
 * official tarball into `.quarto-cli/` and uses it from there. That fallback is
 * on by default on Cloudflare (Pages and Workers Builds, which set CF_PAGES and
 * WORKERS_CI respectively) and can be forced anywhere with QUARTO_AUTO_INSTALL=1
 * or suppressed with QUARTO_AUTO_INSTALL=0.
 */
import { spawnSync } from "node:child_process";
import { createWriteStream } from "node:fs";
import { mkdir, rm, stat } from "node:fs/promises";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Keep in step with the version pinned in the Dockerfile. */
const QUARTO_VERSION = process.env.QUARTO_VERSION ?? "1.8.27";

const ARCHIVE_ARCH = { x64: "amd64", arm64: "arm64" };

/**
 * Cloudflare's build images have no Quarto and no way to install system
 * packages, so they get the tarball fallback without any extra configuration.
 */
export function onCloudflare() {
  return Boolean(process.env.CF_PAGES || process.env.WORKERS_CI);
}

function works(binary) {
  return spawnSync(binary, ["--version"], { stdio: "ignore" }).status === 0;
}

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function download(url, destination) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok || !response.body) {
    throw new Error(`Download failed (${response.status}) for ${url}`);
  }
  await pipeline(Readable.fromWeb(response.body), createWriteStream(destination));
}

async function install() {
  if (os.platform() !== "linux") {
    throw new Error(
      `Automatic Quarto install only supports Linux build images (this is ${os.platform()}).`
    );
  }

  const arch = ARCHIVE_ARCH[os.arch()];
  if (!arch) {
    throw new Error(`Unsupported CPU architecture for automatic install: ${os.arch()}`);
  }

  const installRoot = path.join(projectRoot, ".quarto-cli");
  const binary = path.join(installRoot, `quarto-${QUARTO_VERSION}`, "bin", "quarto");

  if (await exists(binary)) {
    if (works(binary)) return binary;
    await rm(installRoot, { recursive: true, force: true });
  }

  const archiveName = `quarto-${QUARTO_VERSION}-linux-${arch}.tar.gz`;
  const url = `https://github.com/quarto-dev/quarto-cli/releases/download/v${QUARTO_VERSION}/${archiveName}`;
  const archivePath = path.join(os.tmpdir(), archiveName);

  console.log(`• Quarto ${QUARTO_VERSION} not found — downloading ${archiveName} …`);
  await mkdir(installRoot, { recursive: true });
  await download(url, archivePath);

  const extract = spawnSync("tar", ["-xzf", archivePath, "-C", installRoot], {
    stdio: "inherit",
  });
  await rm(archivePath, { force: true });

  if (extract.status !== 0) {
    throw new Error("Failed to extract the Quarto archive.");
  }
  if (!works(binary)) {
    throw new Error(`Quarto was extracted but ${binary} is not runnable.`);
  }

  console.log(`✔ Quarto ${QUARTO_VERSION} installed at ${path.relative(projectRoot, binary)}`);
  return binary;
}

/**
 * Returns the path of a usable Quarto binary, or null when none is available
 * and automatic installation has not been enabled.
 */
export async function resolveQuarto({ autoInstall = false } = {}) {
  const configured = process.env.QUARTO_PATH;
  if (configured && works(configured)) return configured;

  if (works("quarto")) return "quarto";

  const cached = path.join(projectRoot, ".quarto-cli", `quarto-${QUARTO_VERSION}`, "bin", "quarto");
  if ((await exists(cached)) && works(cached)) return cached;

  const flag = (process.env.QUARTO_AUTO_INSTALL ?? "").toLowerCase();
  if (["0", "false", "no"].includes(flag)) return null;

  const enabled = autoInstall || ["1", "true", "yes"].includes(flag) || onCloudflare();

  return enabled ? install() : null;
}

// Allow running this directly: `node scripts/ensure-quarto.mjs --install`
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const binary = await resolveQuarto({ autoInstall: process.argv.includes("--install") });
  if (!binary) {
    console.error("✖ Quarto not found. Re-run with --install to fetch it automatically.");
    process.exit(1);
  }
  console.log(binary);
}
