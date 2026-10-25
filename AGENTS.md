# Metribay holding site

This independent repository is intended to be public. It contains the static marketing site for https://metribay.com, hosted by GitHub Pages.

## Boundaries
- Deploy only public/. Keep operational notes, credentials, real project data, and private SaaS code out of this repository.
- No framework, build step, remote fonts, analytics, or runtime dependencies are needed for the holding page.
- Preserve supplied logo geometry and colours. Theme-specific SVGs are the source assets; small raster icons are derived from the supplied PNG.
- Use honest development-status copy. Do not add a signup form, release date, working app link, or product claims without an actual destination and verified support.
- Maintain keyboard access, contrast, reduced-motion behaviour, responsive layout, and a useful page with JavaScript disabled.
- No commits, staging, pushes, publication, or coauthor attribution unless Rob explicitly requests the corresponding action.

## Local development
Run `python3 -m http.server 4175 --bind 127.0.0.1 --directory public` from this repository, then open http://127.0.0.1:4175. Stop it with Ctrl-C when finished.

Run `node --check public/assets/theme.js`. Verify desktop/mobile, both themes, keyboard focus, the 404 document, and the page without JavaScript. No dependency installation is required.

## Deployment
Read docs/deployment.md before changing hosting. The Actions workflow uploads public/ only. Actions-based Pages ignores CNAME files; custom domain must be configured in repository Settings → Pages. Do not treat a local CNAME as evidence that production is configured.

## Progress
Record meaningful changes and exact verification in docs/progress.md. Workspace-wide integration progress lives outside this repository.
