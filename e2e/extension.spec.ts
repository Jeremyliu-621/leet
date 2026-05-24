import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// LeetLock end-to-end smoke tests.
//
// Each test launches a fresh persistent Chromium profile with `dist/` loaded
// as an unpacked extension, asserts something observable, then closes the
// context. The dist/ folder must exist — run `npm run build` first.

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');

async function launchWithExtension(): Promise<BrowserContext> {
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

async function getServiceWorker(context: BrowserContext) {
  const existing = context.serviceWorkers();
  if (existing.length > 0 && existing[0]) {
    return existing[0];
  }
  return context.waitForEvent('serviceworker', { timeout: 10_000 });
}

function extensionIdFromUrl(swUrl: string): string {
  // chrome-extension://<id>/service-worker-loader.js → <id>
  const match = /^chrome-extension:\/\/([a-z0-9]+)\//i.exec(swUrl);
  if (!match || !match[1]) {
    throw new Error(`Could not extract extension id from ${swUrl}`);
  }
  return match[1];
}

test.describe('LeetLock extension @e2e', () => {
  test('the service worker registers on load', async () => {
    const context = await launchWithExtension();
    try {
      const sw = await getServiceWorker(context);
      const id = extensionIdFromUrl(sw.url());
      expect(id.length).toBeGreaterThan(8);
    } finally {
      await context.close();
    }
  });

  test('the popup renders the LeetLock wordmark', async () => {
    const context = await launchWithExtension();
    try {
      const sw = await getServiceWorker(context);
      const id = extensionIdFromUrl(sw.url());
      const page = await context.newPage();
      await page.goto(`chrome-extension://${id}/src/pages/popup/index.html`);
      await expect(page.locator('h1').first()).toContainText('LeetLock');
    } finally {
      await context.close();
    }
  });

  test('the options page renders with the LeetLock wordmark', async () => {
    const context = await launchWithExtension();
    try {
      const sw = await getServiceWorker(context);
      const id = extensionIdFromUrl(sw.url());
      const page = await context.newPage();
      await page.goto(`chrome-extension://${id}/src/pages/options/index.html`);
      await expect(page).toHaveTitle(/LeetLock/);
      // Wordmark appears as a microlabel; tolerate either an h1 or other element.
      await expect(page.getByText('LeetLock').first()).toBeVisible({ timeout: 5_000 });
    } finally {
      await context.close();
    }
  });

  test('the challenge page mounts when given a target', async () => {
    const context = await launchWithExtension();
    try {
      const sw = await getServiceWorker(context);
      const id = extensionIdFromUrl(sw.url());
      const page = await context.newPage();

      // Capture browser console + page errors so a mount failure is diagnosable.
      const errors: string[] = [];
      page.on('pageerror', (err) => {
        errors.push(`pageerror: ${err.message}`);
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(`console.error: ${msg.text()}`);
        }
      });

      const target = encodeURIComponent('https://example.com/');
      await page.goto(`chrome-extension://${id}/src/pages/challenge/index.html?target=${target}`);
      await expect(page).toHaveTitle(/LeetLock/);

      // React mounted iff #root has at least one element child.
      try {
        await expect(page.locator('#root > *').first()).toBeVisible({ timeout: 10_000 });
      } catch (err) {
        const html = await page.locator('#root').innerHTML().catch(() => '<unreadable>');
        throw new Error(
          `Challenge #root never rendered children.\n` +
            `Errors: ${errors.join(' | ') || '(none captured)'}\n` +
            `#root innerHTML (first 500 chars): ${html.slice(0, 500)}`,
        );
      }
    } finally {
      await context.close();
    }
  });
});
