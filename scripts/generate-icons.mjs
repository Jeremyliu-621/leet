// Renders assets/logo.svg into the PNG icon sizes Chrome expects.
// Run with `npm run icons` after changing the logo.
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(resolve(root, 'assets/logo.svg'), 'utf8');
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
