import { chromium, test } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Captures screenshots of each extension surface for the README. Treated as a
// test so it benefits from Playwright's setup / teardown, but the only
// assertion is "the file got written". Run alongside the rest of the e2e
// suite; the artefacts land under `docs/screenshots/`.

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');
const SCREENSHOTS_DIR = resolve(HERE, '..', 'docs', 'screenshots');

async function launch(): Promise<BrowserContext> {
  return chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${EXTENSION_PATH}`,
      `--load-extension=${EXTENSION_PATH}`,
      '--no-first-run',
      '--no-default-browser-check',
    ],
  });
}

async function getExtensionId(context: BrowserContext): Promise<string> {
  const existing = context.serviceWorkers();
  const sw =
    existing[0] ?? (await context.waitForEvent('serviceworker', { timeout: 10_000 }));
  const match = /^chrome-extension:\/\/([a-z0-9]+)\//i.exec(sw.url());
  if (!match || !match[1]) {
    throw new Error(`Could not extract extension id from ${sw.url()}`);
  }
  return match[1];
}

test.describe('LeetLock screenshots @screenshots', () => {
  test.skip(
    process.env['CI'] === 'true',
    'screenshots run locally to avoid headed-chromium in CI',
  );

  test('capture popup', async () => {
    const context = await launch();
    try {
      const id = await getExtensionId(context);
      const page = await context.newPage();
      await page.setViewportSize({ width: 360, height: 360 });
      await page.goto(`chrome-extension://${id}/src/pages/popup/index.html`);
      await page.waitForLoadState('networkidle');
      await page.screenshot({
        path: resolve(SCREENSHOTS_DIR, 'popup.png'),
        fullPage: true,
      });
    } finally {
      await context.close();
    }
  });

  test('capture options', async () => {
    const context = await launch();
    try {
      const id = await getExtensionId(context);
      const page = await context.newPage();
      await page.setViewportSize({ width: 1024, height: 1400 });
      await page.goto(`chrome-extension://${id}/src/pages/options/index.html`);
      await page.waitForLoadState('networkidle');
      await page.screenshot({
        path: resolve(SCREENSHOTS_DIR, 'options.png'),
        fullPage: true,
      });
    } finally {
      await context.close();
    }
  });

  test('capture challenge', async () => {
    const context = await launch();
    try {
      const id = await getExtensionId(context);
      const page = await context.newPage();
      await page.setViewportSize({ width: 1440, height: 900 });
      const target = encodeURIComponent('https://example.com/');
      await page.goto(
        `chrome-extension://${id}/src/pages/challenge/index.html?target=${target}`,
      );
      await page.waitForLoadState('networkidle');
      await page.screenshot({
        path: resolve(SCREENSHOTS_DIR, 'challenge.png'),
        fullPage: true,
      });
    } finally {
      await context.close();
    }
  });

  test('capture blocked', async () => {
    const context = await launch();
    try {
      const id = await getExtensionId(context);
      const page = await context.newPage();
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(`chrome-extension://${id}/src/pages/blocked/index.html`);
      await page.waitForLoadState('networkidle');
      await page.screenshot({
        path: resolve(SCREENSHOTS_DIR, 'blocked.png'),
        fullPage: true,
      });
    } finally {
      await context.close();
    }
  });
});
