import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_PREFERENCES } from '../src/lib/storage/defaults';

// Smoke-tests the dashboard page in real Chromium: seeds solve history,
// streak history, blocked rules, and submission history, opens the page, and
// asserts the key sections render with no console errors.

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');

test.setTimeout(60_000);

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

async function getServiceWorker(context: BrowserContext) {
  const existing = context.serviceWorkers();
  if (existing[0]) return existing[0];
  return context.waitForEvent('serviceworker', { timeout: 10_000 });
}

function extractExtensionId(swUrl: string): string {
  const match = /^chrome-extension:\/\/([a-z0-9]+)\//i.exec(swUrl);
  if (!match || !match[1]) throw new Error(`Could not parse extension id from ${swUrl}`);
  return match[1];
}

test('dashboard renders seeded stats without console errors', async () => {
  const context = await launch();
  try {
    const sw = await getServiceWorker(context);
    const extensionId = extractExtensionId(sw.url());

    const today = new Date();
    const iso = (d: Date) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const days = Array.from({ length: 10 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      return { date: iso(d), solved: (i % 3) + 1, failed: i % 2 };
    });

    await sw.evaluate(
      async ([defaults, streakDays]) => {
        await chrome.storage.sync.set({
          userPreferences: { ...(defaults as object), preferredLanguage: 'python' },
          blockedRules: [
            { id: 'd1', kind: 'domain', pattern: 'youtube.com', enabled: true, createdAt: Date.now() },
          ],
        });
        await chrome.storage.local.set({
          streakHistory: streakDays,
          solvedProblems: [],
          streakSummary: { current: 4, longest: 9, lastSolvedDate: null, damaged: false },
          submissionHistory: {},
          unlockTokens: [],
        });
      },
      [DEFAULT_PREFERENCES, days] as const,
    );

    const page = await context.newPage();
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`chrome-extension://${extensionId}/src/pages/dashboard/index.html`);

    // Core sections must render.
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByText('Contributions')).toBeVisible();
    await expect(page.getByText('By difficulty')).toBeVisible();
    await expect(page.getByText('Settings overview')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Problems attempted' })).toBeVisible();

    // The seeded streak history should surface in the contributions tally
    // (10 seeded days summing to 19 solves).
    await expect(page.getByText(/solves · \d+ active days/)).toBeVisible();

    // No console errors or uncaught exceptions.
    expect(errors, `console errors: ${errors.join(' | ')}`).toEqual([]);
  } finally {
    await context.close();
  }
});
