#!/usr/bin/env node
/**
 * Renders every Quarto document in `docs-source/` into `public/docs/`, which
 * Vite then copies into `dist/` verbatim. Run automatically before `npm run
 * build`; pass `--if-missing` to skip the (~30s) render when output already
 * exists, which is what `npm run dev` does.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { resolveQuarto } from "./ensure-quarto.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(projectRoot, "docs-source");
const outputDir = path.join(projectRoot, "public", "docs");
const onlyIfMissing = process.argv.includes("--if-missing");

if (!existsSync(sourceDir)) {
  console.error(`✖ No Quarto sources found at ${path.relative(projectRoot, sourceDir)}`);
  process.exit(1);
}

if (onlyIfMissing && existsSync(outputDir) && readdirSync(outputDir).length > 0) {
  console.log("• Rendered docs already present — skipping Quarto render.");
  console.log("  Run `npm run render:docs` to rebuild them.");
  process.exit(0);
}

const quarto = await resolveQuarto();

if (!quarto) {
  console.error(
    [
      "✖ Quarto is required to build this site but was not found on your PATH.",
      "",
      "  Locally:        install it from https://quarto.org/docs/get-started/",
      "  GitHub Actions: use the quarto-dev/quarto-actions/setup@v2 action",
      "  Hosted CI that cannot install system packages (e.g. Cloudflare):",
      "                  build with `npm run build:cloudflare`, or set",
      "                  QUARTO_AUTO_INSTALL=1 to fetch Quarto into .quarto-cli/",
    ].join("\n")
  );
  process.exit(1);
}

console.log("• Rendering Quarto documents from docs-source/ …");
const render = spawnSync(quarto, ["render"], { cwd: sourceDir, stdio: "inherit" });

if (render.status !== 0) {
  console.error("✖ Quarto render failed.");
  process.exit(render.status ?? 1);
}

console.log(`✔ Rendered docs written to ${path.relative(projectRoot, outputDir)}/`);
