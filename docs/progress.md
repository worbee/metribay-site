# Site progress

Updated 2026-10-25. Current scope: English/German Astro marketing site and GitHub Pages preparation; see the latest closeout below. Earlier holding-page/Cloudflare entries are historical. Rob authorized committing and pushing the completed website source; Pages publication remains disabled.

## Direction

- Visual thesis: a quiet cream/navy poster, bold Metribay wordmark, and the supplied two-colour icon as the visual anchor.
- Content plan: honest development status, product name, one-sentence project-metrics description, check-back note, copyright. No form or unverified app/source-code links.
- Interaction thesis: staggered content entrance; logo settles into position; the accessible theme control reacts on hover and stores a local preference. Reduced motion disables animation and transitions.

## Implemented

- Buildless static HTML/CSS/JavaScript in public/; no remote scripts, fonts, or runtime packages.
- Supplied light/dark SVG artwork copied without changes. Touch icon and 32px fallback derived from supplied light PNG; social metadata uses the supplied 1024px light image.
- System and manual light/dark themes, keyboard skip link and focus styles, no-JavaScript fallback, reduced-motion support.
- Branded 404, canonical and sharing metadata, robots, sitemap, CNAME intent and .nojekyll.
- Pages workflow checks JavaScript. Packaging/deployment of public/ additionally requires METRIBAY_PAGES_ENABLED=true on main/manual runs; pull requests cannot deploy.
- Deployment guide explains required repository Pages settings, Actions CNAME semantics, domain verification, DNS, HTTPS and post-publication checks.
- Website and branding rights reserved to Worbee EOOD. Dashboard licensing is separate.

## Verification

2026-10-25: node --check passed. Browser verification at1280×720,1440×1000 and390×844: no page overflow, supplied assets load, light/dark themes and persisted preference work, keyboard skip link focuses main, no console errors. No-JS/reduced-motion fallbacks were inspected in source; runtime emulation was unavailable and is not claimed. Parent saved representative screenshots in the workspace Cloud ignored docs/qa folder.

## Outstanding external setup

Public GitHub repository worbee/metribay-site exists and origin is connected. Initial source push is authorized. Pages settings, DNS and public deployment remain deferred; deployment jobs are gated off by default. Deployment guide has actual owner and current Actions/CNAME details. Main local preview is127.0.0.1:8002.

## Hosting decision, 2026-10-25

Rob selected Cloudflare Pages for marketing and deferred its setup/publication. Updated README, AGENTS and deployment guide. The old GitHub Pages workflow stays disabled. Cloud runs separately on the existing Hetzner VPS. No website content or runtime assets changed; no website publication or Git actions performed.

## Astro marketing website, 2026-10-25

Latest user direction: a small, focused English/German Astro website prepared for standalone GitHub Pages, taking OpenSEO's value-first presentation as a reference and using existing app branding. This supersedes the earlier buildless/Cloudflare-only plan; publication remains deferred. Existing deployment documentation changes were carried forward into the new build instructions. No Git staging, commits, pushes, repository settings, DNS or production changes.

Design thesis: warm cream, navy typography, app berry/lime accents, generous space and a readable product illustration. Content: clear project-overview promise, sample dashboard, seven current integrations, three practical benefits, a short future-open-source section and signup CTA. Interaction: staggered hero entrance, restrained link/button feedback and a CSS scroll-linked logo settle; reduced motion removes these. Used frontend-skill and human-writing guidance. OpenSEO was inspected in browser and via web; no source/assets copied. App signup returned HTTP200. Provider labels and supported behavior were checked against current Core README, app CSS and overview template. No graph connector was exposed, so relevant source files supplied the evidence directly.

Implementation:
- Astro7.4.2, @astrojs/check0.9.12 and compatible TypeScript6.0.3; pinned npm lockfile. TypeScript7 was rejected by check's peer range before installation, then corrected; no forced peer resolution.
- Static English `/`, German `/de/`, and bilingual404. All visible copy, preview labels, numbers, metadata and language links localized. German page states that the app is currently English.
- Dashboard is an HTML/SVG illustration with fictional `.example` projects, labelled sample data. No real fixtures, screenshots or customer claims. Original supplied logos/icons retained.
- Zero client JavaScript, remote fonts, analytics, cookies or forms. Light theme matches the app's default. Keyboard skip/focus, reduced motion and no-JS access supported.
- Canonical/hreflang/Open Graph, generated localized sitemap/robots, build-time CNAME and .nojekyll. All URLs support repository subpaths. Removed superseded public HTML/theme/CSS/crawler files so only Astro generates the site.
- Workflow installs/checks/builds/tests, uploads only dist/, and retains METRIBAY_PAGES_ENABLED gating for package/deploy. Supports custom-domain and repository URL variables. Documentation now describes Astro/GitHub Pages with Cloudflare as an alternative.

Verification:
- `npm ci --no-fund && npm run check && npm run build && npm test`: clean lockfile install passed, audit0 vulnerabilities; Astro check15files,0errors/0warnings/0hints; build3pages;124 static output checks pass. npm emitted an existing user-config deprecation and an optional macOS fsevents install-script notice; neither prevented checks/build.
- `SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm run build && SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm test`:123checks pass, repository links/assets/metadata prefixed, CNAME omitted. Default build restored afterward.
- `git diff --check`: passed. Human-writing linter reports only the TypeScript dictionary key `features` twice (not displayed prose), reviewed as false positives.
- Actual browser: EN/DE each at320×812,390×844,768×1024,1280×720; document width equals viewport, all images loaded. Both language switches and bilingual404 recovery links work. Keyboard Tab focuses skip link; Return focuses main. Reduced-motion emulation yields animation-name:none and scroll-behavior:auto. Page content and screenshot passed with JavaScript disabled. Console warnings/errors empty. Emulation/viewport reset after testing.
- Built static output about112KiB. Ignored evidence: docs/qa/desktop-en.png, preview-en.png, mobile-de.png. No CI/deployment run is claimed for local edits.

Preview: `npm run preview -- --port 4321` running at http://127.0.0.1:4321/ (PID87831; Astro7 detached preview service). German http://127.0.0.1:4321/de/. Opened English in Codex for review. `npx astro preview stop` from site/ stops this preview. No listener remains on the old8002 holding preview (`lsof -nP -iTCP:8002 -sTCP:LISTEN` returned no matches); output now lives in dist/. No dependency/build sessions remain running.

Next: review content/design; publish only on explicit request. Core remains private, Cloud changes from the earlier deployment remain untouched, and all website edits are uncommitted.

## SEO/AEO audit, 2026-10-25

Informational review requested; no page/code changes. Parsed generated EN/DE/404 HTML and checked source metadata, crawl files, headings and URLs against current Google Search Central SEO, multilingual, structured-data and AI-feature guidance. Verified unique localized titles/descriptions, self-canonicals, reciprocal en/de/x-default hreflang, one H1, complete static text, no scripts, XML sitemap/robots crawl allowance and noindex on404. Local HTTP home200 and unknown path404. Static payload80,055bytes (about112KiB filesystem allocation in prior closeout); no production speed/Core Web Vitals measurement claimed.

Remaining recommended polish: explicitly name the product category in title/intro; add accurate Organization/WebSite/SoftwareApplication JSON-LD as optional semantic enrichment; mark the fictional dashboard data-nosnippet and label it visibly before the example to reduce risk of Google quoting sample numbers. data-nosnippet is a Google preview control, not a cross-engine exclusion guarantee. No ratings, public-source claims or planned prices should be invented. Google says AI features need the same SEO fundamentals, with no special schema or AI text file required. Deployment checks still need actual public HTTPS/redirect/crawl access, performance and indexing verification. No deployment, Search Console access, keyword research or rankings/citation guarantee claimed.

Sources: https://developers.google.com/search/docs/appearance/ai-features ; https://developers.google.com/search/docs/fundamentals/seo-starter-guide ; https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data ; https://developers.google.com/search/docs/specialty/international/localized-versions .

## SEO/AEO improvements implemented, 2026-10-25

Rob approved the three audit recommendations and requested JSON-LD and complete relevant metadata. Updated localized titles/meta descriptions and hero introductions to explicitly identify the project metrics dashboard and intended users. Headline/design retained. Sample caption now precedes the illustration; the entire fictional dashboard div carries data-nosnippet. Added translated sharing-image alt text, OG image MIME/actual1024×1024dimensions, explicit Twitter title/description/image/alt, application-name, index/follow/large-image-preview directives. Existing viewport/theme/referrer, canonical/hreflang, OG site/type/url/locales, icons, sitemap and robots retained. No irrelevant keywords, fake social handles, or unissued search-verification tokens added.

Added linked Organization(Worbee EOOD), WebSite, SoftwareApplication and localized WebPage JSON-LD in src/lib/structured-data.ts. IDs and images respect site/base configuration; WebSite supports en/de while the app remains inLanguage:en. App free access reflects current runtime/copy. No invented offers/prices/ratings/reviews/public source link. Data serialization escapes opening HTML brackets; JSON-LD is inert, not executable client JavaScript. 404 has its own description/sharing URL, remains noindex and gets no app graph/canonical. Initial new test caught Astro's /404/ route versus exported404.html mismatch; explicit404metadata path corrected it.

Verification: `npm run check && npm run build && npm test` final passes16files/0errors/0warnings/0hints,3pages and272checks. `SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm run build && SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm test` passes271checks; then default output restored. Tests parse JSON-LD, resolve entity references, compare social/schema/page metadata, read real PNG dimensions, check sample-label ordering/data-nosnippet and confirm404isolation. These are local semantic/structural checks; no external Rich Results Test or Google rich-result eligibility is claimed. Genuine reviews/ratings and offer details would be required for Google's software-app rich result; current markup supplies entity information only.

Browser EN/DE at320/390/768/1280px: no horizontal overflow; all four schema types present and caption above protected dashboard. German mobile and English desktop visually reviewed; console warning/errors empty. Viewport reset. Evidence: ignored docs/qa/seo-mobile-de.png and seo-preview-en.png. Human-writing check findings remain only two internal `features` keys, reviewed as false positives. `git diff --check` passes. Preview stays at4321/PID87831; no new server/install sessions. README documents metadata/schema and limitations. No stage/commit/push/publication or app changes; live crawl/index/CWV checks remain for publication.

## Source commit/push preparation, 2026-10-25

Rob explicitly requested committing and pushing the website. Scope is this repository only; no app/Core/workspace-parent commit and no marketing publication. Fetched origin: main matches origin/main before commit (0ahead/0behind). GitHub Actions variable query returned no METRIBAY_PAGES_ENABLED, METRIBAY_SITE_URL or METRIBAY_SITE_BASE values: deployment remains gated off, with default metribay.com build settings. Reviewed source, workflow, documentation and secret-pattern scan; no actionable review finding or credential-pattern match, all lockfile download hosts registry.npmjs.org. No external comments, PR creation, version bump or unrelated changes needed for the requested direct source commit/push.

Fresh `npm run check && npm run build && npm test && git diff --check` passes (16files,0errors/warnings/hints;3pages;272checks). Prior repository-base checks and responsive browser evidence remain recorded above; no code changed during commit preparation. Commit contains the complete Astro migration, translations, sample illustration, SEO/JSON-LD, CI and updated website documentation. Source commit must have no coauthor attribution. Generated build/node_modules/.astro/QA screenshots remain ignored. Push/remote/CI result will be recorded in workspace PROGRESS.md after completion.

## Cloudflare Pages deployment, 2026-10-25

Rob requested Cloudflare Pages hosting for metribay.com with www → bare domain and a reusable deploy script. Added scripts/cloudflare-pages.mjs (`npm run deploy`, `cf:setup`, `cf:status`), .env.example and public/_headers; rewrote docs/deployment.md. Created Pages project `metribay`, apex custom domain/CNAME, www AAAA 100:: and 301 Single Redirect rule. Production deployment d0839052 after check/build/272 checks; live HTTPS, redirects, 404, headers and pages.dev noindex verified with curl and the browser. Details in workspace PROGRESS.md. No commit/push.
