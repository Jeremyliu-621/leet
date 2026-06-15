// 1) Verify playable editor at phone width post-fix.
// 2) Capture a 1200x630 OG image of the gate intercept beat.
import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';

const SITE = 'C:/Users/jerem/code2026/personal-projects/leetlock-site';
const ROOT = `${SITE}/out`;
const OUT = `${SITE}/docs/shots`;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  let p = req.url.split('?')[0];
  if (p === '/') p = '/index.html';
  if (!extname(p)) p += '.html';
  try {
    const data = await readFile(join(ROOT, p));
    res.writeHead(200, { 'content-type': MIME[extname(p)] ?? 'application/octet-stream' });
    res.end(data);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((r) => server.listen(3179, r));

const browser = await chromium.launch();

// Playable editor, phone width.
const m = await browser.newPage({ viewport: { width: 375, height: 812 } });
await m.goto('http://localhost:3179', { waitUntil: 'load' });
await m.getByText('Your turn').scrollIntoViewIfNeeded();
await m.waitForTimeout(2500);
await m.locator('section', { hasText: 'Your turn' }).first().screenshot({ path: `${OUT}/playable-mobile2.png` });
console.log('shot playable-mobile2');
await m.close();

// OG image: crop the hero film at a rich beat (typed code, ~20s) to 1200x630.
const d = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
await d.goto('http://localhost:3179', { waitUntil: 'load' });
await d.waitForTimeout(21_000);
const frame = d.locator('.ll-editor[role="img"]');
const box = await frame.boundingBox();
// Center a 1200x630-proportioned crop on the browser window.
const cropW = Math.min(box.width, 1200 / 2); // CSS px at DPR 2 → 1200 device px
const cropH = cropW * (630 / 1200);
await d.screenshot({
  path: `${SITE}/public/og.png`,
  clip: { x: box.x + (box.width - cropW) / 2, y: box.y + 8, width: cropW, height: cropH },
});
console.log('og captured');
await browser.close();
server.close();
