// Builds the LeetMeow toolbar icons: the cat mark centered on a warm rounded
// square. Run with `npm run icons` after changing the logo.
// Resvg renders SVG; the transparent cat PNG is embedded and composited onto a
// rounded tile (the cat fills ~78% so it reads clearly at 16px).
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const b64 = readFileSync(resolve(root, 'assets/leetmeow.png')).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <defs><clipPath id="r"><rect width="128" height="128" rx="28"/></clipPath></defs>
  <g clip-path="url(#r)">
    <rect width="128" height="128" fill="#faf7f0"/>
    <image href="data:image/png;base64,${b64}" x="-20" y="-23" width="168" height="168" preserveAspectRatio="xMidYMid meet"/>
  </g>
</svg>`;
const outDir = resolve(root, 'public/icons');
mkdirSync(outDir, { recursive: true });

const SIZES = [16, 32, 48, 128];
for (const size of SIZES) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  const png = resvg.render().asPng();
  writeFileSync(resolve(outDir, `icon-${size}.png`), png);
  console.log(`  icons/icon-${size}.png`);
}
console.log(`Generated ${SIZES.length} icons.`);
