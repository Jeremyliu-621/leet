// Zips the built dist/ into leetmeow-<version>.zip for Chrome Web Store upload.
// Run with `npm run package` after `npm run build`.

import { statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const AdmZip = require('adm-zip');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const distDir = resolve(root, 'dist');
const outFile = resolve(root, `leetmeow-${pkg.version}.zip`);

const distStat = statSync(distDir, { throwIfNoEntry: false });
if (!distStat?.isDirectory()) {
  console.error('dist/ does not exist — run `npm run build` first.');
  process.exit(1);
}

const zip = new AdmZip();
zip.addLocalFolder(distDir);
zip.writeZip(outFile);

const sizeBytes = statSync(outFile).size;
console.log(`Packaged ${outFile.replace(root, '.')} (${(sizeBytes / 1024).toFixed(1)} kB)`);
