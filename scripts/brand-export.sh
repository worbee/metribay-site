#!/bin/sh
# Renders the public brand assets from the SVG masters in brand/.
# Requires rsvg-convert (librsvg) and ImageMagick (magick). Rerun after changing a master.
set -eu
cd "$(dirname "$0")/.."

out=public/assets
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

cp brand/metribay-mark.svg brand/metribay-lockup.svg brand/metribay-favicon.svg "$out/"

rsvg-convert -w 180 -h 180 brand/metribay-icon.svg -o "$out/apple-touch-icon.png"
rsvg-convert -w 512 -h 512 brand/metribay-icon.svg -o "$out/metribay-icon-512.png"
for size in 16 32 48; do
  rsvg-convert -w "$size" -h "$size" brand/metribay-favicon.svg -o "$tmp/favicon-$size.png"
done
magick "$tmp/favicon-16.png" "$tmp/favicon-32.png" "$tmp/favicon-48.png" public/favicon.ico

for locale in en de; do
  rsvg-convert -w 1200 -h 630 "brand/metribay-share-$locale.svg" -o "$out/metribay-share-$locale.png"
done

echo "Brand assets written to $out/ and public/favicon.ico"
