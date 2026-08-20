<div align="center">

# KNBS Dashboard

### Kenya National Bureau of Statistics

#### Quality Assurance & Metadata Management Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Features](#features) • [Installation](#installation) • [Documentation](#documentation) • [Contact](#contact)

</div>

---

## Overview

A comprehensive, modern web application providing unified access to Kenya's National Statistical System (NSS) quality frameworks, statistical reports, classifications, and documentation. Built with cutting-edge technologies for optimal performance and user experience.

## Features

### Quality Frameworks

<table>
<tr>
<td width="33%">

**KeSQAF**
<br>
Kenya Statistical Quality Assurance Framework

- 19 Principles
- 4 Levels (A, B, C, D)
- Implementation Tools

</td>
<td width="33%">

**KeSCoP**
<br>
Kenya Statistical Code of Practice

- 3 Pillars
- 12 Principles
- Best Practices

</td>
<td width="33%">

**KSPM**
<br>
Kenya Statistical Planning Manual

- Planning Guidelines
- Methodologies
- Standards

</td>
</tr>
</table>

### Metadata Management

- **Quality Reports** - Comprehensive quality assessments (Poverty & Inequality, CPI)
- **Classifications** - National & international statistical classifications
- **Codelists** - Standardized code lists for statistical operations
- **Statistical Dictionary** - Integrated Quarto-based reference documentation

### Key Capabilities

- Dynamic product switching for quality reports
- Smart compact navigation for enhanced readability
- Modular component architecture
- Professional KNBS brand styling
- Fully responsive design
- Fast loading with Vite

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Quarto** - Renders the statistical documentation shipped with the app

## Project Structure

```bash
docs-source/                  # Quarto sources — the single home for long-form content
├── _quarto.yml               # Project config (renders into ../public/docs)
├── kspm/index.qmd            # Kenya Statistical Production Model
├── kescop/index.qmd          # Kenya Statistics Code of Practice
└── quality-reports/
    └── cpi/index.qmd         # CPI quality report

public/docs/                  # Rendered HTML + PDF (generated, git-ignored)
scripts/render-docs.mjs       # Runs Quarto ahead of the Vite build

src/
├── components/
│   ├── docs/QuartoDocument.tsx  # Shared viewer for rendered Quarto documents
│   └── layout/               # Header, navigation, breadcrumb, footer
├── lib/docs.ts               # Registry of every document + base-aware URLs
├── pages/                    # Page components
└── App.tsx                   # Main app component
```

## Getting Started

Requires Node 20+ and [Quarto](https://quarto.org/docs/get-started/) 1.4+ on
your PATH. The documents contain no executable code chunks, so no R or Python
installation is needed.

```bash
npm install
npm run dev      # renders the docs once if public/docs/ is empty, then starts Vite
```

## Build

```bash
npm run build          # renders every Quarto document, then builds the React app
npm run render:docs    # re-render the documents only (after editing a .qmd)
```

`npm run dev` skips the render when `public/docs/` already exists, so restarting
the dev server stays fast; run `npm run render:docs` after changing a `.qmd`.

### Building in Docker

If you would rather not install Quarto locally, the included `Dockerfile` does
the whole pipeline (Quarto render → Vite build → nginx) in one image:

```bash
docker compose up --build   # http://localhost:8080
```

## Documentation content

Long-form content lives in `docs-source/` as Quarto documents and is rendered
into `public/docs/`, which Vite copies verbatim into `dist/`. Each document
renders twice:

- a self-contained `index.html` (`embed-resources: true` inlines all CSS, JS and
  images) that React embeds in an iframe via `QuartoDocument`, and
- a typst-generated PDF served behind the page's **Download PDF** button.

Because the HTML is self-contained, it works from any deploy base and needs no
sibling asset directories.

### Adding a document

1. Create `docs-source/<slug>/index.qmd`. Copy the `format:` block from an
   existing document to inherit the KNBS styling, and set
   `output-file: index.html` for HTML and `output-file: <slug>.pdf` for typst.
2. Register it in `src/lib/docs.ts` (`QUARTO_DOCS`), and — for a quality
   report — map the product id to it in `QUALITY_REPORT_DOCS`.
3. Render and check it: `npm run render:docs && npm run dev`.

# Configuration

KNBS Brand Colors
The dashboard uses KNBS official colors defined in tailwind.config.js:

Primary: #b06443 (knbs-500)
Full palette: knbs-50 through knbs-900
Compact Navigation
Certain pages automatically switch to compact navigation mode for better readability:

Quality Reports (/metadata/quality-reports)
Dictionary (/metadata/dictionary)
KeSQAF (/quality/kesqaf)
Code of Practice (/quality/code-of-practice)
Quality Frameworks
KeSQAF Structure
Level A: Managing Statistical System (3 principles)
Level B: Managing Institutional Environment (6 principles)
Level C: Managing Statistical Processes (4 principles)
Level D: Managing Statistical Outputs (6 principles)
Implementation: Tools, roadmap, and resources

KeSCoP Structure
Pillar 1: Professionalism (4 principles)
Pillar 2: Impartiality (4 principles)
Pillar 3: Progressiveness (4 principles)
Previewing a single document
While editing a `.qmd`, Quarto's own live preview is the fastest loop:

```bash
quarto preview docs-source/kspm/index.qmd
```

Contributing
When adding new quality reports or framework sections:

Write the content as a Quarto document under docs-source/ and register it in src/lib/docs.ts
Add a navigation entry in src/types/navigation.ts
Use KNBS color scheme consistently
Ensure TypeScript types are properly defined

Reports that still render from React section components (Poverty & Inequality)
follow the existing component patterns under src/pages/metadata/quality-reports/.
License
© 2024 Kenya National Bureau of Statistics. All rights reserved.

Contact
Kenya National Bureau of Statistics

Website: https://www.knbs.or.ke
Email: info@knbs.or.ke
