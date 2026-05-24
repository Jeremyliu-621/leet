import { chromium, expect, test } from '@playwright/test';
import type { BrowserContext, Page } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { problems } from '../src/lib/problems/bank';
import { solutions } from '../test/bank-solutions';
import type { Problem } from '../src/lib/problems/types';

// Replicates the EXACT user-reported scenario:
//   block rule: domain "youtube.com"
//   keyword rule: "instagram"
// After solving correctly + Submit, the tab must land on the unlocked site
// (not bounce back into a fresh challenge).

const HERE = dirname(fileURLToPath(import.meta.url));
const EXTENSION_PATH = resolve(HERE, '..', 'dist');
const SW_SETTLE_MS = 1500;

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

async function seedRules(context: BrowserContext): Promise<void> {
  const sw = await getServiceWorker(context);
  await sw.evaluate(async () => {
    const now = Date.now();
    await chrome.storage.sync.set({
      blockedRules: [
        { id: 'yt', kind: 'domain', pattern: 'youtube.com', enabled: true, createdAt: now },
      ],
      keywordRules: [{ id: 'ig', keyword: 'instagram', enabled: true, createdAt: now }],
    });
  });
  await new Promise((r) => setTimeout(r, SW_SETTLE_MS));
}

function findProblemByTitle(title: string): Problem | undefined {
  return problems.find((p) => p.title === title);
}

function buildSolutionScript(problem: Problem): string {
  const fn = solutions[problem.id];
  if (typeof fn !== 'function') throw new Error(`No reference solution for ${problem.id}`);
  return `function ${problem.functionName}(${problem.params.join(', ')}) {\n  return (${fn.toString()})(${problem.params.join(', ')});\n}\n`;
}

interface Diagnostics {
  log: string[];
  pageErrors: string[];
  consoleErrors: string[];
}

function attachDiagnostics(page: Page, label: string): Diagnostics {
  const d: Diagnostics = { log: [], pageErrors: [], consoleErrors: [] };
  page.on('framenavigated', (frame) => {
    if (frame === page.mainFrame()) d.log.push(`[${label}] nav → ${frame.url()}`);
  });
  page.on('pageerror', (err) => {
    d.pageErrors.push(`${err.name}: ${err.message}`);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') d.consoleErrors.push(msg.text());
  });
  return d;
}

async function solveAndSubmit(page: Page): Promise<{ problemId: string; verdictText: string }> {
  await page.waitForURL(/chrome-extension:\/\/.+\/src\/pages\/challenge/, { timeout: 8_000 });
  const titleLocator = page.locator('h1').first();
  await expect(titleLocator).toBeVisible({ timeout: 10_000 });
  const title = (await titleLocator.textContent())?.trim() ?? '';
  const problem = findProblemByTitle(title);
  if (!problem) throw new Error(`Unknown problem title: "${title}"`);

  const solution = buildSolutionScript(problem);
  await page.locator('.cm-content').click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Delete');
  await page.keyboard.insertText(solution);
  await page.getByRole('button', { name: /submit/i }).click();

  // Give the verdict region a moment to render.
  await page.waitForTimeout(800);
  const verdictText = (await page.locator('body').innerText()).slice(0, 500);
  return { problemId: problem.id, verdictText };
}

function isOnHost(currentUrl: string, host: string): boolean {
  return new RegExp(`^https?://([^/]+\\.)?${host.replace('.', '\\.')}(/|$)`).test(currentUrl);
}

test.describe('User-reported bug: solve does not unlock @e2e', () => {
  test('youtube.com (domain) — submit must navigate to youtube', async () => {
    const context = await launch();
    try {
      await context.route('**/*.youtube.com/**', (route) =>
        route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<!doctype html><html><body><h1>YouTube (test stub)</h1></body></html>',
        }),
      );
      await context.route('**/youtube.com/**', (route) =>
        route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<!doctype html><html><body><h1>YouTube (test stub)</h1></body></html>',
        }),
      );

      await seedRules(context);

      const page = await context.newPage();
      const diag = attachDiagnostics(page, 'youtube');

      await page.goto('https://www.youtube.com/').catch(() => undefined);

      const result = await solveAndSubmit(page);
      console.log(`[youtube] solved: ${result.problemId}`);
      console.log(`[youtube] verdict body slice: ${result.verdictText.replace(/\s+/g, ' ').slice(0, 200)}`);

      // Wait up to 8s for the page URL to actually be a youtube host.
      const deadline = Date.now() + 8_000;
      let finalUrl = page.url();
      while (Date.now() < deadline && !isOnHost(finalUrl, 'youtube.com')) {
        await page.waitForTimeout(150);
        finalUrl = page.url();
      }

      console.log(`[youtube] final URL: ${finalUrl}`);
      console.log(`[youtube] nav log:\n  ${diag.log.join('\n  ')}`);
      if (diag.pageErrors.length) console.log(`[youtube] pageerrors:\n  ${diag.pageErrors.join('\n  ')}`);
      if (diag.consoleErrors.length)
        console.log(`[youtube] console errors:\n  ${diag.consoleErrors.join('\n  ')}`);

      expect(isOnHost(finalUrl, 'youtube.com'), `final URL should be on youtube, was: ${finalUrl}`).toBe(true);
    } finally {
      await context.close();
    }
  });

  test('instagram.com (keyword) — submit must navigate to instagram', async () => {
    const context = await launch();
    try {
      await context.route('**/*.instagram.com/**', (route) =>
        route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<!doctype html><html><body><h1>Instagram (test stub)</h1></body></html>',
        }),
      );
      await context.route('**/instagram.com/**', (route) =>
        route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: '<!doctype html><html><body><h1>Instagram (test stub)</h1></body></html>',
        }),
      );

      await seedRules(context);

      const page = await context.newPage();
      const diag = attachDiagnostics(page, 'instagram');

      await page.goto('https://www.instagram.com/').catch(() => undefined);

      const result = await solveAndSubmit(page);
      console.log(`[instagram] solved: ${result.problemId}`);
      console.log(`[instagram] verdict body slice: ${result.verdictText.replace(/\s+/g, ' ').slice(0, 200)}`);

      const deadline = Date.now() + 8_000;
      let finalUrl = page.url();
      while (Date.now() < deadline && !isOnHost(finalUrl, 'instagram.com')) {
        await page.waitForTimeout(150);
        finalUrl = page.url();
      }

      console.log(`[instagram] final URL: ${finalUrl}`);
      console.log(`[instagram] nav log:\n  ${diag.log.join('\n  ')}`);
      if (diag.pageErrors.length) console.log(`[instagram] pageerrors:\n  ${diag.pageErrors.join('\n  ')}`);
      if (diag.consoleErrors.length)
        console.log(`[instagram] console errors:\n  ${diag.consoleErrors.join('\n  ')}`);

      expect(isOnHost(finalUrl, 'instagram.com'), `final URL should be on instagram, was: ${finalUrl}`).toBe(true);
    } finally {
      await context.close();
    }
  });
});
