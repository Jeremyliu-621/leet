import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.config';

// LeetLock is a Manifest V3 Chrome extension built with Vite + CRXJS.
// CRXJS reads `manifest` and wires the HTML pages, service worker, and
// content script into the build, emitting a loadable extension to `dist/`.
//
// CRXJS auto-transforms HTML for `action.default_popup` and `options_page`,
// but ships the HTML referenced from `web_accessible_resources` and
// `sandbox.pages` RAW (with the source `./main.tsx` / `./runner.ts` script
// references that Chrome cannot resolve). Listing those pages explicitly as
// Rollup inputs forces them through the normal HTML transform.

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build: {
    target: 'esnext',
    sourcemap: true,
    emptyOutDir: true,
    // The challenge page bundles CodeMirror, the full problem bank, Pyodide
    // warm-up code, and syntax-highlight grammars. 1 MB+ is expected for a
    // bundled Chrome extension (local, not over-the-wire). Raise the
    // warning threshold so CI/build output stays noise-free.
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: {
        challenge: resolve(root, 'src/pages/challenge/index.html'),
        blocked: resolve(root, 'src/pages/blocked/index.html'),
        sandbox: resolve(root, 'src/pages/sandbox/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    // CRXJS HMR needs a stable websocket port.
    hmr: { port: 5173 },
  },
});
