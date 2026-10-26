# Metribay brand masters

The "soft tray" mark, approved by Rob on 2026-10-26: a small berry dot and a larger lime dot (two data points, also eyes) above a round-cornered container whose right wall rises higher than the left. The exploration lives on the private canvas https://claude.ai/artifact/YJbkdb5Cz7fpkCvPAxcEZW.

These SVGs are the source of truth. Use them as they are; don't redraw or recolour the mark. Every shape is a filled outline (no strokes or live text), so the files scale and import into design tools unchanged.

| File | Use |
| --- | --- |
| `metribay-mark.svg` | Mark on light grounds. 200×200 box, artwork optically centred. |
| `metribay-mark-dark.svg` | Mark on dark grounds. |
| `metribay-mark-mono.svg` | One-colour mark using `currentColor`. |
| `metribay-lockup.svg` | Mark + wordmark on light grounds, cropped to the artwork. |
| `metribay-lockup-dark.svg` | Lockup on dark grounds. |
| `metribay-icon.svg` | Full-bleed square app icon (platforms apply their own corner mask). |
| `metribay-favicon.svg` | Rounded tile with heavier small-size geometry for 16–48 px. |
| `metribay-share-en.svg`, `metribay-share-de.svg` | 1200×630 sharing cards. |

## Colours

| Role | Light ground | Dark ground |
| --- | --- | --- |
| Tray / wordmark | navy `#0f1a2e` | paper `#f6f4ec` |
| Small dot | berry `#b83c7a` | berry `#d9659f` |
| Large dot | lime `#8db51a` | lime `#a3cc2a` |

Lime is a graphic colour only; it is not dark enough for text on paper.

## Geometry

On the 200-unit grid: berry dot r17 at (74, 73); lime dot r26 at (124, 61); tray centreline from (42, 113) down to a 36-unit corner, floor at y 157, right wall up to y 91, stroke 16 with round ends. Below 64 px use the favicon geometry (dots r22/r32, stroke 26), which keeps the gaps open.

## Wordmark

Lowercase "metribay" in Gabarito Bold (700), tracking −0.03 em, converted to outlines. Set at 122 units on the mark's grid, its baseline sits on the tray floor (y 165) with a 30-unit gap after the tray's right edge. Gabarito is © The Gabarito Project Authors under the SIL Open Font License 1.1 (`Gabarito-OFL.txt`). The share cards use Gabarito Bold for the headline and SemiBold for the URL, also outlined.

## Exports

`scripts/brand-export.sh` (needs `rsvg-convert` and ImageMagick) copies the web SVGs and renders `public/assets/apple-touch-icon.png` (180), `metribay-icon-512.png`, `metribay-share-{en,de}.png` (1200×630) and `public/favicon.ico` (16/32/48).
