# Metribay website

A small English/German Astro marketing site and user documentation for [Metribay](https://metribay.com/), separate from the Laravel app. English lives at `/`, German at `/de/`; the docs at `/docs/` and `/de/docs/`. Everything is rendered at build time and readable without JavaScript.

## Development

Use Node 24 (minimum 22.23.4) and npm:

```sh
npm ci
npm run dev
npm run check
npm run build
npm test
npm run preview
```

The build goes into `dist/`. Deploy that directory only. `public/` contains brand assets; it is not a complete website.

## Content and design

- `src/i18n/copy.ts`: all English/German copy, including the illustrative dashboard.
- `src/components/Home.astro`: page sections and integrations.
- `src/components/Dashboard.astro`: static product illustration using fictional `.example` projects.
- `src/styles/global.css`: the app's cream, navy, berry and lime palette, responsive layout, reduced-motion support.
- `src/layouts/Page.astro`: page metadata and language alternates.
- `src/lib/structured-data.ts`: linked Organization, WebSite, SoftwareApplication and localized WebPage JSON-LD.
- `src/pages/`: language routes, bilingual 404, sitemap (including every docs page with its translation) and robots.
- `src/content/docs/`: the user documentation, built with [Starlight](https://starlight.astro.build/). English pages are in `docs/`, German in `de/docs/`, with the same file names. The sidebar and both languages' labels are in `astro.config.mjs`; Starlight UI strings in `src/content/i18n/`. `src/components/docs/` overrides Starlight's head (share cards), theme (light only, like the site) and header links; `src/styles/docs.css` applies the brand palette.
- `scripts/content-security-policy.mjs`: runs after the build and writes a strict Content-Security-Policy into `dist/_headers`, allowing the docs' own scripts and the exact hashes of their inline scripts and styles. `npm run preview:headers` serves `dist/` with those headers to check it locally.

The logo is the "soft tray" mark approved on 2026-10-26. Its SVG masters live in `brand/` (see brand/README.md); `scripts/brand-export.sh` (needs rsvg-convert and ImageMagick) regenerates the web SVGs, favicons, apple-touch icon and the 1200×630 English/German share cards in `public/`. The wordmark is outlined Gabarito, so the site still loads no fonts. No external fonts, analytics, cookies or forms. Marketing pages run no JavaScript; the docs use Starlight's own scripts for search (Pagefind, built at build time, no external service), the mobile menu and the table of contents, and stay readable without them. The website and docs are intentionally light themed. App signup and login link to the existing hosted app, which is currently in English. Core source stays private; copy describes open source and self-hosting as planned, with no inaccessible GitHub link.

Both language pages include descriptive titles, meta descriptions, robots directives, canonical/hreflang links, complete Open Graph and Twitter summary-card metadata, translated image descriptions, and the real sharing image dimensions. JSON-LD is an inert data block; it does not execute JavaScript. It describes the actual publisher and app, with English as the app language and current free access; it makes no rating, review, price or public-source claims. This is semantic markup, not a claim of Google software-app rich-result eligibility (which requires genuine reviews/ratings and offer details).

The sample-data caption precedes the dashboard, whose fictional content carries Google's `data-nosnippet` control. This controls Google snippets and related AI search previews; other engines may handle it differently. The 404 is noindex, has its own metadata and carries no product JSON-LD. `npm test` validates generated metadata, JSON-LD references, actual PNG dimensions, sample controls and base-aware URLs. Live indexing, redirects and Core Web Vitals still require checks on the published domain.

## Hosting

Production runs on Cloudflare Pages at `https://metribay.com/`, with `www` redirected to the bare domain. `npm run deploy` checks, builds, tests and uploads `dist/`; `npm run cf:setup` and `npm run cf:status` manage and inspect the project, domain and redirect. Credentials go in the ignored `.env` (see `.env.example`). Details: [deployment instructions](docs/deployment.md).

### GitHub Pages alternative

The default build targets `https://metribay.com/`. For a repository Pages URL:

```sh
SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm run build
SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm test
```

The build generates a `CNAME` for custom domains, and omits it for `*.github.io`. All internal links, assets, metadata and sitemap URLs respect the base path. Rebuild with the default settings before previewing at `/` again.

The workflow checks and builds on pushes and PRs. Its GitHub Pages deploy stays gated by `METRIBAY_PAGES_ENABLED` and must remain disabled while Cloudflare Pages serves the domain.

## Rights

Website source and branding are copyright Worbee EOOD, all rights reserved; see [LICENSE](LICENSE). Dashboard licensing is separate.
