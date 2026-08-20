/**
 * Registry of the Quarto-rendered documentation that ships with this app.
 *
 * Sources live in `docs-source/<slug>/index.qmd` and are rendered into
 * `public/docs/<slug>/` by `npm run render:docs`, which runs ahead of every
 * Vite build. Each document renders to a self-contained `index.html` (CSS, JS
 * and images inlined via `embed-resources`) plus a typst-generated PDF, so the
 * files can be served from any base path and embedded directly in an iframe.
 */

export interface QuartoDoc {
  /** Stable key, also used as the folder name under `public/docs`. */
  id: string;
  title: string;
  subtitle: string;
  /** Rendered HTML, relative to `public/docs` — or an absolute URL if `external`. */
  html: string;
  /** Rendered PDF, relative to `public/docs` — or an absolute URL if `external`. */
  pdf: string;
  /** Filename offered to the browser when the PDF is downloaded. */
  pdfFileName: string;
  /**
   * True for documents still hosted outside this repository. Their PDFs open
   * in a new tab instead of downloading, because the `download` attribute is
   * ignored on cross-origin URLs.
   */
  external?: boolean;
}

/**
 * Resolve a path under `public/docs` against the app's deploy base, so the same
 * code works on GitHub Pages (served from `/statistical-documentation/`) and on
 * Cloudflare Pages (served from `/`). Absolute URLs are passed through.
 */
export function docAssetUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/docs/${path.replace(/^\//, "")}`;
}

export const QUARTO_DOCS = {
  kspm: {
    id: "kspm",
    title: "Kenya Statistical Production Model",
    subtitle: "KSPM • Digital Edition • Kenya National Bureau of Statistics",
    html: "kspm/index.html",
    pdf: "kspm/kspm.pdf",
    pdfFileName: "KSPM.pdf",
  },
  kescop: {
    id: "kescop",
    title: "Kenya Statistics Code of Practice",
    subtitle: "KeSCoP • Digital Edition • Kenya National Bureau of Statistics",
    html: "kescop/index.html",
    pdf: "kescop/kescop.pdf",
    pdfFileName: "KeSCoP.pdf",
  },
  cpi: {
    id: "cpi",
    title: "Quality Report for Consumer Price Index",
    subtitle: "CPI • Quality Report • Kenya National Bureau of Statistics",
    html: "quality-reports/cpi/index.html",
    pdf: "quality-reports/cpi/cpi-quality-report.pdf",
    pdfFileName: "CPI-Quality-Report.pdf",
  },
  kesqaf: {
    id: "kesqaf",
    title: "Kenya Statistical Quality Assurance Framework",
    subtitle: "KeSQAF • Digital Edition • Kenya National Bureau of Statistics",
    html: "https://gacherudaniel.github.io/KESQAF/",
    pdf: "https://www.knbs.or.ke/wp-content/uploads/2023/09/Kenya-Statistical-Quality-Assurance-Framework-Booklet.pdf",
    pdfFileName: "KeSQAF.pdf",
    external: true,
  },
} satisfies Record<string, QuartoDoc>;

/**
 * Quality reports that have been migrated to Quarto, keyed by the product id
 * used in `products.ts`. Products absent from this map still render from their
 * React section components.
 */
export const QUALITY_REPORT_DOCS: Record<string, QuartoDoc> = {
  cpi: QUARTO_DOCS.cpi,
};
