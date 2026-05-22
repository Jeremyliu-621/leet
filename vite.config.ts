import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.config';

// LeetLock is a Manifest V3 Chrome extension built with Vite + CRXJS.
// CRXJS reads `manifest` and wires the HTML pages, service worker, and
// content script into the build, emitting a loadable extension to `dist/`.
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build: {
    target: 'esnext',
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    // CRXJS HMR needs a stable websocket port.
    hmr: { port: 5173 },
  },
});
