# Site progress

Updated 2026-10-25. Scope: local static holding site and deployment preparation. Rob authorized source commits and pushes on 2026-10-25. Pages publication remains disabled while testing.

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
