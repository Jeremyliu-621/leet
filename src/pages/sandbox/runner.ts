import jsWorkerSource from '../../runner/worker.js?raw';
import pythonWorkerSource from '../../runner/python-worker.js?raw';
import type { RunRequest, RunResponse } from '../../lib/messaging/messages';

// Sandbox host page. Runs under the relaxed sandbox CSP. Spawns the right
// runner worker for the request's language and enforces a hard wall-clock
// timeout by terminating the worker if it overruns.
//
//  * JavaScript — short-lived Blob worker, recreated per request. Cheap to
//    spin up (~1 ms), so we use it as a clean-slate sandbox.
//  * Python   — long-lived Blob worker, kept warm across requests because
//    Pyodide's WebAssembly boot is ~1–2 s. Terminated only on a timeout (or
//    on init failure); the next request re-pays the boot cost.

// Path within the extension where Pyodide's runtime assets live (M2).
//
// Sandboxed pages (`manifest.sandbox.pages`) deliberately have NO access to
// chrome.* APIs — referencing `chrome.runtime.getURL` here throws and breaks
// the whole sandbox at module init. Instead, derive the absolute pyodide URL
// from the sandbox's own location: this file is loaded at
// `chrome-extension://EXT_ID/src/pages/sandbox/index.html`, so resolving
// `../../../pyodide/` against it lands on `chrome-extension://EXT_ID/pyodide/`.
const PYODIDE_BASE_URL = new URL('../../../pyodide/', window.location.href).href;

const jsWorkerBlob = new Blob([jsWorkerSource], { type: 'text/javascript' });
const jsWorkerUrl = URL.createObjectURL(jsWorkerBlob);

// Inject PYODIDE_BASE_URL as a leading const so the worker can importScripts
// the absolute extension URL. Blob workers have a `blob:null/...` origin and
// can't resolve relative paths against the extension's chrome-extension://
// origin, so this absolute URL is how the worker finds Pyodide.
const pythonWorkerBlob = new Blob(
  [`const PYODIDE_BASE_URL = ${JSON.stringify(PYODIDE_BASE_URL)};\n${pythonWorkerSource}`],
  { type: 'text/javascript' },
);
const pythonWorkerUrl = URL.createObjectURL(pythonWorkerBlob);

function reply(message: RunResponse): void {
  window.parent.postMessage(message, '*');
}

// ---------------------------------------------------------------------------
// JavaScript path — fresh worker per request, single-shot.
// ---------------------------------------------------------------------------

function executeJsRun(request: RunRequest): void {
  const worker = new Worker(jsWorkerUrl);
  let settled = false;

  function finish(response: RunResponse): void {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    worker.terminate();
    reply(response);
  }

  const timer = setTimeout(() => {
    finish({
      type: 'result',
      requestId: request.requestId,
      ok: false,
      reason: 'timeout',
      error: `Execution exceeded the ${request.timeoutMs} ms limit (possible infinite loop).`,
    });
  }, request.timeoutMs);

  worker.onmessage = (event: MessageEvent): void => {
    finish(event.data as RunResponse);
  };
  worker.onerror = (event: ErrorEvent): void => {
    finish({
      type: 'result',
      requestId: request.requestId,
      ok: false,
      reason: 'worker-error',
      error: event.message || 'The code runner crashed.',
    });
  };

  worker.postMessage({
    requestId: request.requestId,
    code: request.code,
    functionName: request.functionName,
    tests: request.tests,
    ...(request.preamble ? { preamble: request.preamble } : {}),
  });
}

// ---------------------------------------------------------------------------
// Python path — shared warm worker, terminated only on timeout / init error.
// ---------------------------------------------------------------------------

interface PythonWorkerSlot {
  worker: Worker;
  ready: Promise<void>;
  pending: Map<string, (response: RunResponse) => void>;
}

let pythonSlot: PythonWorkerSlot | null = null;

function getOrCreatePythonWorker(): PythonWorkerSlot {
  if (pythonSlot) return pythonSlot;

  const worker = new Worker(pythonWorkerUrl);
  const pending = new Map<string, (response: RunResponse) => void>();
  // Capture how long Pyodide takes to boot for observability — surfaced
  // verbatim in the Options "About" section so a user reporting "Python
  // feels slow" can read the number off the page.
  const bootStartedAt = performance.now();

  const ready = new Promise<void>((resolve, reject) => {
    function onInit(event: MessageEvent): void {
      const data = event.data as { type?: string; error?: string } | undefined;
      if (data?.type === 'init-ack') {
        worker.removeEventListener('message', onInit);
        const durationMs = performance.now() - bootStartedAt;
        // Forward to the challenge page; the sandbox has no chrome.* access.
        window.parent.postMessage(
          { type: 'python-boot', durationMs },
          '*',
        );
        resolve();
      } else if (data?.type === 'init-error') {
        worker.removeEventListener('message', onInit);
        reject(new Error(data.error ?? 'unknown init error'));
      }
    }
    worker.addEventListener('message', onInit);
  });

  worker.addEventListener('message', (event: MessageEvent) => {
    const data = event.data as RunResponse | undefined;
    if (data?.type === 'result') {
      const handler = pending.get(data.requestId);
      if (handler) {
        pending.delete(data.requestId);
        handler(data);
      }
    }
  });

  worker.addEventListener('error', () => {
    // Worker died mid-flight; fail every pending request and discard the slot.
    for (const [requestId, handler] of pending) {
      handler({
        type: 'result',
        requestId,
        ok: false,
        reason: 'worker-error',
        error: 'The Python runner crashed.',
      });
    }
    pending.clear();
    pythonSlot = null;
  });

  pythonSlot = { worker, ready, pending };
  return pythonSlot;
}

function discardPythonWorker(slot: PythonWorkerSlot): void {
  try {
    slot.worker.terminate();
  } catch {
    /* already gone */
  }
  if (pythonSlot === slot) {
    pythonSlot = null;
  }
}

async function executePythonRun(request: RunRequest): Promise<void> {
  const slot = getOrCreatePythonWorker();
  let settled = false;

  function finish(response: RunResponse): void {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    slot.pending.delete(request.requestId);
    reply(response);
  }

  const timer = setTimeout(() => {
    finish({
      type: 'result',
      requestId: request.requestId,
      ok: false,
      reason: 'timeout',
      error: `Python execution exceeded the ${request.timeoutMs} ms limit (possible infinite loop).`,
    });
    // Python can't be interrupted from JS mid-execution. Discard the warm
    // worker so the runaway interpreter doesn't keep eating CPU; the next
    // request pays the ~1–2 s Pyodide boot cost again.
    discardPythonWorker(slot);
  }, request.timeoutMs);

  slot.pending.set(request.requestId, finish);

  try {
    await slot.ready;
  } catch (err) {
    finish({
      type: 'result',
      requestId: request.requestId,
      ok: false,
      reason: 'worker-error',
      error:
        'Pyodide failed to initialise: ' + (err instanceof Error ? err.message : String(err)),
    });
    discardPythonWorker(slot);
    return;
  }

  slot.worker.postMessage({
    type: 'run',
    requestId: request.requestId,
    code: request.code,
    functionName: request.functionName,
    tests: request.tests,
    ...(request.preamble ? { preamble: request.preamble } : {}),
  });
}

// ---------------------------------------------------------------------------
// Dispatch
// ---------------------------------------------------------------------------

function executeRun(request: RunRequest): void {
  const language = request.language ?? 'javascript';
  if (language === 'python') {
    void executePythonRun(request);
  } else {
    executeJsRun(request);
  }
}

window.addEventListener('message', (event: MessageEvent) => {
  const data = event.data as { type?: string } | undefined;
  if (data?.type === 'run') {
    executeRun(event.data as RunRequest);
  } else if (data?.type === 'warm-python') {
    // Fire-and-forget Pyodide pre-init. The challenge page sends this on
    // mount when the user's preferredLanguage is python so the first
    // Run/Submit doesn't have to wait the ~1–2 s cold boot.
    getOrCreatePythonWorker();
  }
});

// Announce readiness so the challenge page knows it can send run requests.
window.parent.postMessage({ type: 'sandbox-ready' }, '*');
