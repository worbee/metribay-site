# Metribay website

A small holding page for [metribay.com](https://metribay.com/). Metribay is a project metrics dashboard in development.

This is an independent, public-ready static site. The dashboard and hosted service live in separate repositories. Only `public/` is deployed.

## Run locally

No packages or build tools are required. From this repository:

```sh
python3 -m http.server 4175 --bind 127.0.0.1 --directory public
```

Open http://127.0.0.1:4175. Assets use root-relative paths for the custom domain; serve `public/` as the web root. Stop the server with Ctrl-C.

```sh
node --check public/assets/theme.js
```

Verify the layout at desktop and mobile widths, light/dark themes, keyboard focus, reduced motion, and `/404.html`. Without JavaScript, the page follows the system theme and hides its theme button.

## Files

- `public/index.html`: the holding page and sharing/search metadata.
- `public/404.html`: GitHub Pages error document.
- `public/assets/`: supplied light/dark SVG marks, derived PNG icons, CSS and theme script.
- `public/CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`: domain intent and crawler files.
- `.github/workflows/pages.yml`: syntax check, public-only artifact upload and Pages deployment.
- `docs/deployment.md`: GitHub settings, DNS and HTTPS setup.
- `docs/progress.md`: implementation and verification log.

## Privacy and accessibility

There are no forms, analytics, cookies, remote fonts, or third-party scripts. The optional theme control stores only a light/dark preference in local storage. All assets are served by the same host. The design respects system colour and reduced-motion preferences; content remains available without JavaScript.

## Publish

GitHub Pages and DNS still need to be configured for the chosen GitHub owner. Follow [deployment instructions](docs/deployment.md) when publication is authorized. A `CNAME` file alone does **not** configure an Actions-based Pages custom domain.

## Rights

Website source and Metribay branding are copyright Worbee EOOD, all rights reserved; see [LICENSE](LICENSE). Public hosting does not grant reuse rights. The separate dashboard product will have its own licence.
