import workerSource from '../../runner/worker.js?raw';
import type { RunRequest, RunResponse } from '../../lib/messaging/messages';

// Sandbox host page. Runs under the relaxed sandbox CSP, which lets it spin up
// a Blob Worker that executes user code. It relays run requests from the
// challenge page to that Worker and enforces the wall-clock timeout by
// terminating the Worker if it overruns.

const workerBlob = new Blob([workerSource], { type: 'text/javascript' });
const workerUrl = URL.createObjectURL(workerBlob);

function reply(message: RunResponse): void {
  window.parent.postMessage(message, '*');
}

function executeRun(request: RunRequest): void {
  const worker = new Worker(workerUrl);
  let settled = false;

  function finish(response: RunResponse): void {
    if (settled) {
      return;
    }
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
  });
}

window.addEventListener('message', (event: MessageEvent) => {
  const request = event.data as RunRequest | undefined;
  if (request?.type === 'run') {
    executeRun(request);
  }
});

// Announce readiness so the challenge page knows it can send run requests.
window.parent.postMessage({ type: 'sandbox-ready' }, '*');
