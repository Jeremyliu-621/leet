import { defineConfig } from '@playwright/test';

// Playwright end-to-end tests for the LeetMeow Chrome extension.
//
// MV3 extensions cannot be loaded in pure-headless Chromium reliably, so these
// tests run headed by default. CI can opt in via `--headless=new` once a
// dedicated job with xvfb is set up. The smoke tests load `dist/` (built by
// `npm run build`) as an unpacked extension and exercise it end-to-end.

export default defineConfig({
  testDir: 'e2e',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: false, // extension contexts hold a shared chromium profile
  workers: 1,
  retries: 0,
  reporter: process.env['CI'] ? [['list'], ['github']] : 'list',
  use: {
    headless: false,
    viewport: { width: 1280, height: 800 },
    actionTimeout: 5_000,
    trace: 'retain-on-failure',
  },
});
