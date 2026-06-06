'use strict';

// LeetMeow Python code-runner worker.
//
// Loaded as a Blob worker created by the sandbox host so it inherits the
// sandbox page's permissive CSP (which already includes `'wasm-unsafe-eval'`
// for Pyodide as of M2). The host prepends a `PYODIDE_BASE_URL` constant
// pointing at the bundled `chrome-extension://EXT_ID/pyodide/` directory
// before this file's contents — that lets `importScripts` and `indexURL`
// use an absolute extension URL even though the worker itself runs from a
// Blob URL with a null origin.
//
// The worker is kept warm across runs (Pyodide boot is ~1–2 s) and is only
// terminated by the host on a timeout, so each `RunRequest` re-uses the
// initialised interpreter. User code runs in a fresh Python namespace per
// request to avoid state leak.

// eslint-disable-next-line no-undef
importScripts(PYODIDE_BASE_URL + 'pyodide.js');

let pyodide = null;

const ready = (async () => {
  try {
    // eslint-disable-next-line no-undef
    pyodide = await loadPyodide({ indexURL: PYODIDE_BASE_URL });
    self.postMessage({ type: 'init-ack' });
  } catch (err) {
    self.postMessage({ type: 'init-error', error: errorMessage(err) });
    throw err;
  }
})();

self.onmessage = async function handleMessage(event) {
  const data = event.data || {};
  if (data.type !== 'run') {
    return;
  }
  const requestId = data.requestId;
  const preamble = typeof data.preamble === 'string' ? data.preamble + '\n' : '';
  const code = typeof data.code === 'string' ? data.code : '';
  const functionName = typeof data.functionName === 'string' ? data.functionName : '';
  const tests = Array.isArray(data.tests) ? data.tests : [];

  try {
    await ready;
  } catch (err) {
    self.postMessage({
      type: 'result',
      requestId: requestId,
      ok: false,
      reason: 'worker-error',
      error: 'Pyodide failed to initialise: ' + errorMessage(err),
    });
    return;
  }

  // Fresh per-run globals — user code from one Run/Submit must not see names
  // declared by a previous Run/Submit on the same warm worker.
  let userGlobals;
  try {
    userGlobals = pyodide.toPy({});
  } catch (err) {
    self.postMessage({
      type: 'result',
      requestId: requestId,
      ok: false,
      reason: 'worker-error',
      error: errorMessage(err),
    });
    return;
  }

  let userFn;
  try {
    await pyodide.runPythonAsync(preamble + code, { globals: userGlobals });
    userFn = userGlobals.get(functionName);
  } catch (err) {
    destroy(userGlobals);
    self.postMessage({
      type: 'result',
      requestId: requestId,
      ok: false,
      reason: 'compile-error',
      error: errorMessage(err),
    });
    return;
  }

  if (typeof userFn !== 'function') {
    destroy(userFn);
    destroy(userGlobals);
    self.postMessage({
      type: 'result',
      requestId: requestId,
      ok: false,
      reason: 'no-function',
      error: 'Could not find a function named "' + functionName + '".',
    });
    return;
  }

  const outcomes = [];
  for (let i = 0; i < tests.length; i++) {
    outcomes.push(await runOne(userFn, tests[i], i));
  }

  destroy(userFn);
  destroy(userGlobals);

  postResult(requestId, outcomes);
};

async function runOne(userFn, test, index) {
  const logs = [];
  pyodide.setStdout({ batched: function captureOut(line) { logs.push(line); } });
  pyodide.setStderr({ batched: function captureErr(line) { logs.push(line); } });

  try {
    const args = test && Array.isArray(test.args) ? test.args : [];
    const result = userFn.apply(null, args);
    let value;
    if (result && typeof result.toJs === 'function') {
      value = result.toJs({ create_proxies: false, dict_converter: Object.fromEntries });
      destroy(result);
    } else {
      value = result;
    }
    return { index: index, status: 'returned', value: value, logs: logs };
  } catch (err) {
    return { index: index, status: 'threw', error: errorMessage(err), logs: logs };
  } finally {
    pyodide.setStdout({});
    pyodide.setStderr({});
  }
}

function postResult(requestId, outcomes) {
  const message = { type: 'result', requestId: requestId, ok: true, outcomes: outcomes };
  try {
    self.postMessage(message);
  } catch (cloneError) {
    // Returned value was not structured-cloneable; downgrade gracefully.
    const safe = outcomes.map(function sanitize(outcome) {
      if (outcome.status === 'returned') {
        return {
          index: outcome.index,
          status: 'returned',
          value: stringifyValue(outcome.value),
          logs: outcome.logs,
        };
      }
      return outcome;
    });
    self.postMessage({ type: 'result', requestId: requestId, ok: true, outcomes: safe });
  }
}

function destroy(proxy) {
  if (proxy && typeof proxy.destroy === 'function') {
    try { proxy.destroy(); } catch (e) { /* already destroyed */ }
  }
}

function errorMessage(err) {
  if (err && typeof err.message === 'string') {
    const raw = err.name ? err.name + ': ' + err.message : err.message;
    return cleanPythonTraceback(raw);
  }
  return String(err);
}

/**
 * Strips Pyodide-internal file references from Python tracebacks so users
 * only see their own code's context. Lines like:
 *   File "/lib/python3.11/pyodide/...", line X, in Y
 * are removed together with their following code-context lines.
 */
function cleanPythonTraceback(message) {
  const lines = message.split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Detect internal File references: pyodide paths and site-packages internals
    if (/^\s+File\s+"(?:\/lib\/python|\/pyodide\/|\<frozen )/.test(line)) {
      // Skip the File line and any immediately following code/caret context
      i++;
      while (i < lines.length && /^\s/.test(lines[i]) && !/^\s+File\s+"/.test(lines[i])) {
        i++;
      }
      continue;
    }
    out.push(line);
    i++;
  }
  // Collapse consecutive blank lines introduced by the stripping
  return out
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function stringifyValue(value) {
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch (e) {
    return String(value);
  }
}
