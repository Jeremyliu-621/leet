// Sandboxed code-runner host page.
//
// Phase 3 implements: receive { code, tests } via postMessage from the
// challenge page, execute user code inside a Web Worker with a hard timeout,
// and post structured results back. The sandbox page's relaxed CSP permits the
// `eval` the worker needs; a normal extension page could not run this safely.
window.addEventListener('message', () => {
  // TODO(Phase 3): wire up the Web Worker runner.
});

export {};
