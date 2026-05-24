import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { problems } from '../src/lib/problems/bank';
import { solutions } from '../test/bank-solutions';
import type { Problem } from '../src/lib/problems/types';

// The crown-jewel e2e: load the extension into real Chromium, navigate to the
// challenge page, identify which problem the bank rendered, inject the
// matching reference solution into the CodeMirror editor, hit Submit, and
// verify the service worker wrote an unlock token to chrome.storage.local.
//
// Proves the entire vertical slice — bank → judge → sandbox Worker → SW
// grant-unlock handler → storage — works end-to-end inside a real browser.

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');
const TARGET = 'https://example.com/';

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

function findProblemByTitle(title: string): Problem | undefined {
  return problems.find((problem) => problem.title === title);
}

/**
 * Wrap the bank's `(...args) => unknown` reference solution in a named
 * function matching the problem's `functionName` and `params` so the
 * sandbox Worker can locate it by name.
 */
function buildSolutionScript(problem: Problem): string {
  const fn = solutions[problem.id];
  if (typeof fn !== 'function') {
    throw new Error(`No reference solution registered for "${problem.id}"`);
  }
  const refSource = fn.toString();
  const paramList = problem.params.join(', ');
  return `function ${problem.functionName}(${paramList}) {\n  return (${refSource})(${paramList});\n}\n`;
}

test.describe('LeetLock solve-and-unlock @e2e', () => {
  test('solving a problem writes an unlock token for the target domain', async () => {
    const context = await launch();
    try {
      const sw = await getServiceWorker(context);

      // Seed a block rule so the unlock token has something to unlock.
      await sw.evaluate(async () => {
        await chrome.storage.sync.set({
          blockedRules: [
            {
              id: 'e2e-solve-rule',
              kind: 'domain',
              pattern: 'example.com',
              enabled: true,
              createdAt: Date.now(),
            },
          ],
        });
      });

      const match = /^chrome-extension:\/\/([a-z0-9]+)\//i.exec(sw.url());
      const id = match?.[1];
      if (!id) {
        throw new Error(`Could not parse extension id from ${sw.url()}`);
      }

      const page = await context.newPage();
      await page.goto(
        `chrome-extension://${id}/src/pages/challenge/index.html?target=${encodeURIComponent(TARGET)}`,
      );

      // Identify which problem the bank picked.
      const titleLocator = page.locator('h1').first();
      await expect(titleLocator).toBeVisible({ timeout: 10_000 });
      const title = (await titleLocator.textContent())?.trim() ?? '';
      const problem = findProblemByTitle(title);
      if (!problem) {
        throw new Error(
          `Page rendered an unknown problem title "${title}" — bank/test mismatch?`,
        );
      }

      const solution = buildSolutionScript(problem);

      // Replace the starter code with the reference solution. `insertText`
      // bypasses CodeMirror's auto-indent / auto-close keybindings.
      const editor = page.locator('.cm-content');
      await editor.click();
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Delete');
      await page.keyboard.insertText(solution);

      // Click Submit and wait for the runner + judge to grant the unlock.
      await page.getByRole('button', { name: /submit/i }).click();

      // Poll chrome.storage.local.unlockTokens for the example.com entry.
      let token: { domain: string; expiresAt: number; problemId: string } | null = null;
      for (let attempt = 0; attempt < 100; attempt++) {
        token = await sw.evaluate(async () => {
          const result = await chrome.storage.local.get('unlockTokens');
          const list = (result['unlockTokens'] ?? []) as Array<{
            domain: string;
            expiresAt: number;
            problemId: string;
          }>;
          return list.find((t) => t.domain === 'example.com') ?? null;
        });
        if (token !== null) break;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      expect(
        token,
        `Expected an unlock token for example.com after solving ${problem.id}`,
      ).not.toBeNull();
      expect(token?.problemId).toBe(problem.id);
      expect(token?.expiresAt).toBeGreaterThan(Date.now());

      // Regression guard for the SW-reconcile race: the challenge page does
      // `window.location.href = target` immediately after grant-unlock; the
      // DNR rule MUST be gone by then, otherwise the navigation gets
      // intercepted and the tab bounces back into a fresh challenge.
      await page.waitForURL(/^https?:\/\/(www\.)?example\.com/, { timeout: 10_000 });
      expect(page.url()).not.toContain('chrome-extension://');
    } finally {
      await context.close();
    }
  });
});
