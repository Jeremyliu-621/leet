import { defineManifest } from '@crxjs/vite-plugin';
import pkg from '../package.json';

// Manifest V3 definition for LeetMeow. CRXJS rewrites the source paths
// below to their built locations during `vite build`.
//
// Surfaces:
//  - action popup      toolbar status + quick actions
//  - options page      full settings
//  - challenge page    the coding-interview gate (reached via redirect)
//  - blocked page      calm blocked-state page (reached on failure)
//  - sandbox page      CSP-isolated host for running user-submitted code
//  - service worker    blocking decisions, DNR rules, unlock tokens, alarms
//  - content script    catches SPA route changes that fire no network request
export default defineManifest({
  manifest_version: 3,
  name: 'LeetMeow',
  version: pkg.version,
  description: pkg.description,
  icons: {
    16: 'icons/icon-16.png',
    32: 'icons/icon-32.png',
    48: 'icons/icon-48.png',
    128: 'icons/icon-128.png',
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_title: 'LeetMeow',
  },
  options_page: 'src/pages/options/index.html',
  background: {
    service_worker: 'src/background/service-worker.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content/content-script.ts'],
      run_at: 'document_start',
      all_frames: false,
    },
  ],
  permissions: ['storage', 'tabs', 'declarativeNetRequest', 'webNavigation', 'alarms'],
  host_permissions: ['<all_urls>'],
  web_accessible_resources: [
    {
      resources: [
        'src/pages/challenge/index.html',
        'src/pages/blocked/index.html',
        'src/pages/sandbox/index.html',
        'icons/*',
        // Pyodide runtime bundled in the extension (no remote code — see
        // docs/PYODIDE_PLAN.md §2). The sandbox host fetches these on demand.
        'pyodide/*',
      ],
      matches: ['<all_urls>'],
    },
  ],
  sandbox: {
    pages: ['src/pages/sandbox/index.html'],
  },
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self';",
    // Pyodide instantiates WASM; Chrome MV3 requires 'wasm-unsafe-eval' in
    // script-src for any context that runs a WebAssembly module.
    sandbox:
      "sandbox allow-scripts allow-forms allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob:; worker-src 'self' blob:; object-src 'self';",
  },
});
