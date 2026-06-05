import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_PREFERENCES } from '../src/lib/storage/defaults';

// Regression test for the AI hint "Add your key in Settings" button: it must
// open Settings in a NEW tab (deep-linked to #ai) and leave the challenge tab
// open — previously it navigated the gate tab in place and got cancelled.

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

test('AI hint "Add your key" opens Settings in a new tab', async () => {
  const context = await launch();
  try {
    const sw = context.serviceWorkers()[0] ?? (await context.waitForEvent('serviceworker'));
    const id = /chrome-extension:\/\/([a-z0-9]+)\//i.exec(sw.url())![1];

    // Default prefs, no AI key configured → panel shows the "add key" CTA.
    await sw.evaluate(async ([defaults]) => {
      await chrome.storage.sync.set({ userPreferences: defaults });
    }, [DEFAULT_PREFERENCES] as const);

    const page = await context.newPage();
    await page.goto(`chrome-extension://${id}/src/pages/challenge/index.html`);

    // Open the AI panel.
    await page.getByRole('button', { name: /AI hint assistant/i }).click();

    const cta = page.getByRole('button', { name: /Add your key in Settings|Enable in Settings/ });
    await expect(cta).toBeVisible();

    // Clicking must spawn a new tab, not navigate this one.
    const [opened] = await Promise.all([context.waitForEvent('page'), cta.click()]);
    await opened.waitForLoadState('domcontentloaded');

    expect(opened.url()).toContain('src/pages/options/index.html');
    expect(opened.url()).toContain('#ai');

    // The challenge tab must still be open and on the challenge page.
    expect(page.isClosed()).toBe(false);
    expect(page.url()).toContain('src/pages/challenge/index.html');
  } finally {
    await context.close();
  }
});
