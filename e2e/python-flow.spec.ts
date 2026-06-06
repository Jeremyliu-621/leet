import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext, Page } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_PREFERENCES } from '../src/lib/storage/defaults';

// Proves Python end-to-end in real Chromium: vendored Pyodide loads from
// chrome-extension://, the Python worker boots, Python code runs against the
// problem's hidden tests, and the SW writes an unlock token on accept.
//
// Only one bank problem ships a Python starter today (`two-sum-indices`).
// `pickChallengeProblem` is random, so this test narrows the selection by
// setting `tags: ['hash-map']` (3 problems total) and retries the page load
// until that one problem is rendered.

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');
const SW_SETTLE_MS = 1500;
const TARGET_PROBLEM_TITLE = 'Pair That Sums To Target';

const PYTHON_REFERENCE = `def pairSumIndices(nums, target):
    seen = {}
    for i, v in enumerate(nums):
        complement = target - v
        if complement in seen:
            return [seen[complement], i]
        seen[v] = i
    return []
`;

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
  if (!match || !match[1]) {
    throw new Error(`Could not parse extension id from ${swUrl}`);
  }
  return match[1];
}

async function loadUntilTargetProblem(
  context: BrowserContext,
  extensionId: string,
): Promise<Page> {
  const targetUrl = encodeURIComponent('https://example.com/');
  for (let attempt = 0; attempt < 20; attempt++) {
    const page = await context.newPage();
    await page.goto(
      `chrome-extension://${extensionId}/src/pages/challenge/index.html?target=${targetUrl}`,
    );
    const titleLocator = page.locator('h1').first();
    try {
      await expect(titleLocator).toBeVisible({ timeout: 5_000 });
    } catch {
      await page.close();
      continue;
    }
    const title = (await titleLocator.textContent())?.trim() ?? '';
    if (title === TARGET_PROBLEM_TITLE) {
      return page;
    }
    await page.close();
  }
  throw new Error(
    `Could not land on "${TARGET_PROBLEM_TITLE}" after 20 attempts; expand the hash-map bank or hard-code the picker.`,
  );
}

test.describe('LeetMeow Python end-to-end @e2e @python', () => {
  test('solving two-sum-indices in Python writes an unlock token', async () => {
    // Python's cold-start cost + the retry loop until pickChallengeProblem
    // lands on two-sum-indices push us past the default 30 s budget.
    test.setTimeout(90_000);
    const context = await launch();
    try {
      const sw = await getServiceWorker(context);

      // Bias the random problem picker toward the hash-map tag (3 problems —
      // one of which is two-sum-indices, the only Python-capable problem) and
      // tell the challenge UI to open in Python.
      //
      // CRITICAL: seed the FULL preferences object, not just the fields we
      // care about. A partial userPreferences leaves `unlockDurationMin`
      // undefined, which makes grant-unlock compute `expiresAt: NaN`, which
      // makes the SW reject the token, which makes the post-solve redirect
      // bounce back into a fresh challenge — silently.
      await sw.evaluate(async (defaults: typeof DEFAULT_PREFERENCES) => {
        const existing = await chrome.storage.sync.get('userPreferences');
        const prev = (existing['userPreferences'] ?? {}) as Partial<typeof defaults>;
        await chrome.storage.sync.set({
          userPreferences: {
            ...defaults,
            ...prev,
            tags: ['hash-map'],
            preferredLanguage: 'python',
          },
          blockedRules: [
            {
              id: 'e2e-py-rule',
              kind: 'domain',
              pattern: 'example.com',
              enabled: true,
              createdAt: Date.now(),
            },
          ],
        });
      }, DEFAULT_PREFERENCES);
      await new Promise((r) => setTimeout(r, SW_SETTLE_MS));

      const extensionId = extractExtensionId(sw.url());
      const page = await loadUntilTargetProblem(context, extensionId);

      // Capture console errors so a Pyodide / worker issue is diagnosable.
      const consoleErrors: string[] = [];
      page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(`console.error: ${msg.text()}`);
      });

      // Confirm the editor opened in Python — the Python starter contains
      // `def pairSumIndices(`, the JS starter contains `function pairSumIndices(`.
      const editorText = await page.locator('.cm-content').innerText();
      expect(editorText).toContain('def pairSumIndices');

      // Replace starter with the Python reference solution.
      const editor = page.locator('.cm-content');
      await editor.click();
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Delete');
      await page.keyboard.insertText(PYTHON_REFERENCE);

      // Submit. Python's first run pays the Pyodide cold-start cost (~1–3 s),
      // so we give the unlock-token poll a generous timeout.
      await page.getByRole('button', { name: /submit/i }).click();

      let token: { domain: string; problemId: string; expiresAt: number } | null = null;
      for (let attempt = 0; attempt < 250; attempt++) {
        token = await sw.evaluate(async () => {
          const result = await chrome.storage.local.get('unlockTokens');
          const list = (result['unlockTokens'] ?? []) as Array<{
            domain: string;
            problemId: string;
            expiresAt: number;
          }>;
          return list.find((t) => t.domain === 'example.com') ?? null;
        });
        if (token !== null) break;
        await new Promise((r) => setTimeout(r, 100));
      }

      if (token === null) {
        // eslint-disable-next-line no-console
        console.log(`[python] no token after 25s. Console errors:`);
        for (const err of consoleErrors) {
          // eslint-disable-next-line no-console
          console.log(`  - ${err}`);
        }
        const bodyText = await page.locator('body').innerText().catch(() => '<unreadable>');
        // eslint-disable-next-line no-console
        console.log(`[python] body slice: ${bodyText.replace(/\s+/g, ' ').slice(0, 300)}`);
      }

      expect(token, 'Expected an unlock token after solving in Python').not.toBeNull();
      expect(token?.problemId).toBe('two-sum-indices');
    } finally {
      await context.close();
    }
  });
});
