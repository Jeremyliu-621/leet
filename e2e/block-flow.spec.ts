import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// End-to-end tests for the core block / unlock flow. These exercise the live
// declarativeNetRequest pipeline: write a rule into chrome.storage from the
// service worker, then navigate to the host and assert the tab is redirected
// to the challenge page (or not, if an unlock token covers it).

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');
const SW_RECONCILE_WAIT_MS = 1500;

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

async function waitForServiceWorker(context: BrowserContext) {
  const existing = context.serviceWorkers();
  if (existing.length > 0 && existing[0]) {
    return existing[0];
  }
  return context.waitForEvent('serviceworker', { timeout: 10_000 });
}

async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

test.describe('LeetLock block-and-redirect flow @e2e', () => {
  test('navigating to a blocked site redirects to the challenge page', async () => {
    const context = await launch();
    try {
      const sw = await waitForServiceWorker(context);

      // Seed a block rule for example.com in chrome.storage.sync from inside
      // the service worker. The SW's onChanged listener triggers reconcile()
      // which registers a DNR redirect rule for the host.
      await sw.evaluate(async () => {
        await chrome.storage.sync.set({
          blockedRules: [
            {
              id: 'e2e-rule',
              kind: 'domain',
              pattern: 'example.com',
              enabled: true,
              createdAt: Date.now(),
            },
          ],
        });
      });
      await sleep(SW_RECONCILE_WAIT_MS);

      const page = await context.newPage();
      await page.goto('https://example.com/').catch(() => {
        // DNR redirect cancels the original navigation; the goto promise may
        // reject. The final URL check below is what actually matters.
      });
      await page.waitForURL(/chrome-extension:\/\/.+\/src\/pages\/challenge\/index\.html/, {
        timeout: 5_000,
      });
      expect(page.url()).toContain('?target=');
      expect(decodeURIComponent(page.url())).toContain('example.com');
    } finally {
      await context.close();
    }
  });

  test('a domain with an active unlock token is NOT redirected', async () => {
    const context = await launch();
    try {
      const sw = await waitForServiceWorker(context);

      // Seed a block rule AND an active unlock token covering it.
      await sw.evaluate(async () => {
        const now = Date.now();
        await chrome.storage.sync.set({
          blockedRules: [
            {
              id: 'e2e-rule',
              kind: 'domain',
              pattern: 'example.com',
              enabled: true,
              createdAt: now,
            },
          ],
        });
        await chrome.storage.local.set({
          unlockTokens: [
            {
              domain: 'example.com',
              problemId: 'e2e-problem',
              durationMs: 60_000,
              grantedAt: now,
              expiresAt: now + 60_000,
            },
          ],
        });
      });
      await sleep(SW_RECONCILE_WAIT_MS);

      const page = await context.newPage();
      const response = await page.goto('https://example.com/', { timeout: 10_000 });
      // The unlock means no redirect: final URL is still example.com.
      expect(page.url()).toMatch(/^https?:\/\/(www\.)?example\.com/);
      // A real fetch succeeded (status 2xx), proving DNR did not intercept.
      expect(response?.status() ?? 0).toBeGreaterThanOrEqual(200);
      expect(response?.status() ?? 0).toBeLessThan(400);
    } finally {
      await context.close();
    }
  });
});
