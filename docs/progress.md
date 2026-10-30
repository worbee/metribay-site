# Site progress

Updated 2026-10-25. Current scope: English/German Astro marketing site and GitHub Pages preparation; see the latest closeout below. Earlier holding-page/Cloudflare entries are historical. Rob authorized committing and pushing the completed website source; Pages publication remains disabled.

## Overview docs for the compact project table (2026-10-31)

EN/DE `overview.md` now describe the one-row-per-project table from Core (uncommitted): totals row, the five columns and how several data sources of a kind are added, dot vs dash, attention-first order, sorting, row opens the project page; the status table now says to open the project before **Review data source**. German labels match core/lang/de.json. `npm run check` 0 errors/warnings/hints. Shipped with production release 20261031-02 (Core v0.2.2).

## User documentation added (2026-10-29)

Rob approved building /docs/ in site/ with Starlight, covering the whole product from the user's point of view, English then German. Not committed, pushed or deployed.

- Starlight 0.42.7 (pinned, `npm audit` 0) on the existing Astro 7.4.2 project, using the Astro i18n config (en root, de). 27 pages per language under `src/content/docs/docs/` and `src/content/docs/de/docs/`: start here, everyday use, sources and projects, seven integration guides, workspaces and team, account and billing, self-hosting, troubleshooting, security. Every claim was checked against Core/Cloud source (roles, limits, cooldowns, status rules, import matching by connection name, field labels). Desktop is left out while it is a private prototype; self-hosting says the source is available by email.
- Branding: Metribay palette and lockup, light only (theme switcher removed), header links to the website and app, localized share cards in the head. Starlight's own 404 and sitemap are off; `src/pages/sitemap.xml.ts` now lists all 54 docs URLs with hreflang pairs. Site header and footer link to Docs/Doku.
- Astro prefetch disabled: Starlight enables it site-wide, which would have added a script to the script-free marketing pages.
- CSP: production `_headers` had no `script-src`, which would have blocked docs search and menus. The build now writes one strict policy into `dist/_headers` (`scripts/content-security-policy.mjs`): `script-src 'self' 'wasm-unsafe-eval'` plus hashes of every inline script, `style-src 'self' 'unsafe-hashes'` plus hashes of inline styles and style attributes, `img-src 'self' data:`, `connect-src 'self'`; no `'unsafe-inline'`. `npm run preview:headers` (port 4322, also `site-headers` in the workspace launch config) serves dist/ with those headers.

Verification: `npm run check` 0 errors/warnings/hints; `npm run build`; `npm test` passed 6156 checks (now also docs pairs, lang, single h1, canonical/hreflang, share card, real translations, every local link and cross-page anchor, sitemap entries, no sitemap-index, CSP equals the hashes in the build). Subdirectory build `SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/` passed 6155 checks; default build restored afterwards. Browser, under the enforced CSP: theme script, custom elements, German Pagefind search (“Dienstkonto”, 8 results) and the mobile menu work with no console errors; no horizontal overflow at 375px; marketing /de/ has no console errors and both Doku links.

Rob's review the same day: the privacy policy (EN/DE) now names Cloudflare as the app's email sender instead of Zoho, matching production since 2026-10-27, with `legalUpdated` bumped to 2026-10-29; the docs security pages say the same. The 12-character password hints were fixed in Core. The German docs stay at `/de/docs/` (there was never a `/du/` path) and keep the informal “du” of the marketing site. Remaining small follow-up: credential fields read “Api Key”/“Client Id” (Str::headline). Rob authorized commit and deploy.

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

## Soft tray rebrand, 2026-10-26

Rob chose the "soft tray" direction from the brand canvas (https://claude.ai/artifact/YJbkdb5Cz7fpkCvPAxcEZW) and asked for final SVG masters, favicons, apple-touch and share images, and updated site branding. Added `brand/` with outlined SVG masters (mark light/dark/mono, lockup light/dark, full-bleed app icon, small-size favicon tile, EN/DE 1200×630 share cards), a README covering geometry, colours (navy #0f1a2e, berry #b83c7a, lime #8db51a; dark-ground #f6f4ec/#d9659f/#a3cc2a) and usage, and the Gabarito OFL licence. The wordmark is lowercase Gabarito Bold, outlined with fontTools/HarfBuzz in a scratch environment, so no font ships. `scripts/brand-export.sh` renders `public/assets/{apple-touch-icon.png,metribay-icon-512.png,metribay-share-en.png,metribay-share-de.png}`, `public/favicon.ico` (16/32/48) and copies `metribay-{mark,lockup,favicon}.svg`.

Site: Brand.astro now renders the lockup image (alt "Metribay") in place of icon + text + berry period, with heights per breakpoint; the footer tagline lines up with the wordmark. The "open" section uses the new mark. Head links favicon.ico plus SVG favicon and apple-touch; sharing uses the locale's 1200×630 card with `summary_large_image`, updated EN/DE alt text, and JSON-LD SoftwareApplication image points to the 512 icon. Removed metribay-light.svg, metribay-dark.svg, metribay-share.png and favicon-32.png. check-build expects `summary_large_image`.

Verification: `npm run check` 0 errors/warnings/hints; `npm run build`; `npm test` 281 checks; repository-subdirectory build (`SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/`) 280 checks, then default build restored; `git diff --check` clean. Browser preview (npm preview on 4321 via workspace .claude/launch.json): EN desktop 1280, DE 375 and 320, 404 at 320: lockup renders, no horizontal overflow, correct per-locale og:image/alt, no console errors. Some screenshots caught the hero mid entrance animation (blank until it ran); unrelated to this change. Not deployed, not committed. Core/Cloud app logos (core/resources/views/partials/brand.blade.php, head.blade.php and vendor/metribay SVGs) still use the old mark.

## Trust, pricing and legal pages, 2026-10-26

Rob asked to make the site more trust-building and less "coming soon", add pricing (free self-hosted, Metribay Cloud €19/month or €190/year), and approved claiming self-hosting while the core stays private. He asked not to state setup downsides (OAuth work is in progress) and to hold screenshots until core changes land. Changes stay local; Rob will deploy them together with Paddle live.

Home page now: hero with trial CTA and "See pricing"; sample dashboard (GitHub "stars" replaced by commits, which the app actually collects); How it works (3 steps); integrations with the metrics each provider supplies (from core MetricRegistry/connectors); benefits; Security and your data (read-only collection, encrypted credentials, Hetzner Finland, renewable power, nightly backups, 2FA and roles, no deletion on cancel, no tracking on the site); Pricing (Cloud card with limits from PADDLE_AND_SUPERADMIN_PLAN.md, 14-day card-required trial; self-hosted card from PersonalEntitlements: unlimited projects/sources, one user and workspace); founder section; 12-question FAQ with `<details>`; final CTA; new footer with Product/Company/Legal links. The "open future" section and "free during early development" notes are gone. New legal pages: /terms, /privacy, /refunds, /imprint and /de/agb, /de/datenschutz, /de/erstattung, /de/impressum, with Paddle's Merchant of Record sentence, 14-day refunds and Paddle as recipient. Shared SiteHeader/SiteFooter/Legal components; facts in src/lib/company.ts; legal text in src/i18n/legal.ts. Page layout accepts per-page alternates; sitemap lists all ten URLs; JSON-LD now carries the two real offers (net of VAT) instead of isAccessibleForFree.

VAT: prices shown excluding VAT, matching Paddle's tax-exclusive prices; the German page and German terms also show 22,61 €/226,10 € including 19 % VAT for consumers.

Verification: `npm run check` 30 files, 0 errors/warnings/hints; `npm run build` 11 pages; `npm test` 1280 checks (new: pricing/VAT basis, German gross prices, trust sections, footer legal links, legal canonicals/alternates/language switch, company details, MoR disclosure, sitemap entries, offers). Subdirectory build (`SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/`) passes 1279 checks; default build restored. No inline styles in output (CSP `style-src 'self'`). Browser preview (site-preview, port 4321): EN desktop all sections, DE pricing with gross note, DE terms page, EN mobile 375px with no horizontal overflow. Human-writing linter flags only the two pre-existing em-dashes in page titles.

Open before publication: full street address in company.address, confirm UIC/representative/contact email, legal review, Paddle live domain approval. See docs/deployment.md. Not committed, not deployed.

## Pricing switched to USD, tax-inclusive, 2026-10-26

Rob changed the Cloud offer to USD 29/month and USD 190/year (annual deliberately cheap), tax-inclusive everywhere (Paddle tax_mode internal), so nobody pays more than the shown price. Updated src/lib/company.ts (removed the German gross helper), pricing card ("$29 / month", "or $190 a year, save 45%", "Prices in US dollars, taxes included"; German "29 USD", "45 % gespart", "inkl. MwSt."), hero notes, meta descriptions, VAT FAQ (taxes included; VAT-ID businesses may pay less; possible bank conversion fee), EN/DE terms billing paragraph, and JSON-LD offers (USD, valueAddedTaxIncluded true). Tests now expect tax-inclusive USD pricing and offers 29/190 USD.

Verification: `npm run check` 0 errors/warnings/hints; `npm run build` 11 pages; `npm test` 1279 checks; subdirectory build 1278 checks, default build restored; `git diff --check` clean. Browser (site-preview restarted on 4321): EN and DE pricing cards render, no horizontal overflow. Cloud still validates the old EUR 19/190 tax-exclusive catalogue (cloud/app/Console/Commands/PaddleCheck.php and checkout catalogue validation), so it must change together with the Paddle prices. Not committed, not deployed.


Live Paddle setup, 2026-10-26: Rob confirmed registered company details and supplied full address. Updated company.ts to Alexander Stamboliyski street 7, Bankya 1320, Sofia District, Bulgaria. Check0errors, build11pages and1279checks pass. Local/uncommitted, not deployed. Live Paddle domain approval needs the policies/pricing published; credentials/webhook setup in progress in workspace PROGRESS.md.


Rob approved publication during live Paddle setup. Published the site/pricing/policies/full address with npm run deploy: initial213692a9, final7868292b after fixing Cloudflare email obfuscation conflicting with script-free CSP. Added scoped email_off comments around page content; browser verified public rob@worbee.com/mailto and registered address. Both runs check0errors/build11pages/1279checks. English/German policy URLs return200. Source edits remain uncommitted. Live Paddle domains are In review; paid app activation awaits approval.


Closeout, 2026-10-27: company address/contact details and the Cloudflare email-off layout fix are committed with the publication notes. Fresh `npm run check` (0 errors), `npm run build` (11 pages), `npm test` (1,279 checks) and diff check pass. Publication remains7868292b; this closeout does not redeploy. Paddle domains still await approval in the last verified state; follow Cloud's LIVE_PADDLE.md.
