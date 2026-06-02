import { transform as sucraseTransform } from 'sucrase';
import type { Problem, TestCase } from '../problems/types';
import { JS_SYNTAX_ONLY_LANGUAGES } from '../types';
import type { SupportedLanguage } from '../types';
import type { RunRequest, RunResponse } from '../messaging/messages';
import { buildVerdict } from './verdict';
import type { JudgeResult } from './verdict';
import { recordPythonBoot, recordPythonRun } from '../runner/init-stats';

// Challenge-page side of the code runner. Owns a hidden sandbox iframe, sends
// run requests to it, and turns the raw response into a judged result.

/** Path to the sandbox host page within the extension. */
const SANDBOX_PATH = 'src/pages/sandbox/index.html';

/** Default per-run hard timeout, in milliseconds. */
const DEFAULT_TIMEOUT_MS = 4000;

/** Extra time the judge waits beyond the sandbox's own timeout before giving up. */
const SANDBOX_GRACE_MS = 2000;

let sandboxReady: Promise<HTMLIFrameElement> | null = null;
let pythonBootListenerInstalled = false;

/**
 * Subscribes once to `python-boot` messages emitted by the sandbox runner
 * the moment Pyodide finishes its first boot. Idempotent.
 */
function ensurePythonBootListener(): void {
  if (pythonBootListenerInstalled) return;
  pythonBootListenerInstalled = true;
  window.addEventListener('message', (event: MessageEvent) => {
    const data = event.data as { type?: string; durationMs?: number } | undefined;
    if (data?.type === 'python-boot' && typeof data.durationMs === 'number') {
      void recordPythonBoot(data.durationMs);
    }
  });
}

/** Lazily creates the hidden sandbox iframe and resolves once it reports ready. */
function ensureSandbox(): Promise<HTMLIFrameElement> {
  if (sandboxReady) {
    return sandboxReady;
  }
  ensurePythonBootListener();
  sandboxReady = new Promise<HTMLIFrameElement>((resolve, reject) => {
    const frame = document.createElement('iframe');
    frame.setAttribute('aria-hidden', 'true');
    frame.style.display = 'none';
    frame.src = chrome.runtime.getURL(SANDBOX_PATH);

    function onMessage(event: MessageEvent): void {
      if (event.source === frame.contentWindow && event.data?.type === 'sandbox-ready') {
        window.removeEventListener('message', onMessage);
        resolve(frame);
      }
    }
    window.addEventListener('message', onMessage);
    frame.addEventListener('error', () => {
      window.removeEventListener('message', onMessage);
      sandboxReady = null;
      reject(new Error('LeetLock: failed to load the code sandbox.'));
    });
    document.body.appendChild(frame);
  });
  return sandboxReady;
}

let requestCounter = 0;

export interface RunTestsOptions {
  code: string;
  problem: Problem;
  tests: readonly TestCase[];
  /** Per-run hard timeout in ms; defaults to 4000. */
  timeoutMs?: number;
  /** Language the code is written in; defaults to JavaScript. */
  language?: SupportedLanguage;
}


/**
 * Transpiles TypeScript to JavaScript using sucrase.
 * Returns { ok: true, code } on success, or { ok: false, message } on error.
 */
function transpileTypeScript(
  code: string,
): { ok: true; code: string } | { ok: false; message: string } {
  try {
    const result = sucraseTransform(code, { transforms: ['typescript'] });
    return { ok: true, code: result.code };
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : 'TypeScript compilation failed.',
    };
  }
}

/**
 * Runs the user's code against the given tests inside the sandbox and returns a
 * judged result. Used by the challenge page for both "Run" and "Submit".
 */
export async function runTests(options: RunTestsOptions): Promise<JudgeResult> {
  const frame = await ensureSandbox();
  const target = frame.contentWindow;
  if (!target) {
    throw new Error('LeetLock: the code sandbox is not available.');
  }

  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const requestId = `run-${++requestCounter}-${Date.now()}`;
  const rawLang = options.language ?? 'javascript';

  // TypeScript is transpiled to JavaScript here before hitting the sandbox;
  // the worker only ever sees plain JS. A transpile failure surfaces as a
  // compile-error result immediately, without touching the sandbox at all.
  let execCode = options.code;
  if (rawLang === 'typescript') {
    const transpiled = transpileTypeScript(options.code);
    if (!transpiled.ok) {
      return {
        outcome: 'compile-error',
        passed: 0,
        total: options.tests.length,
        verdicts: [],
        message: transpiled.message,
      };
    }
    execCode = transpiled.code;
  }

  // For JS-syntax-only languages (Java, C++, etc.), the auto-generated starters
  // are valid JavaScript with a comment showing the target language's signature.
  // The user fills in the JavaScript function body; execution passes their code
  // directly to the JavaScript sandbox. This gives syntax-practice value (syntax
  // highlighting, language-specific snippets) while keeping tests runnable.
  const isJsCompiled = JS_SYNTAX_ONLY_LANGUAGES.has(rawLang);
  if (isJsCompiled) {
    execCode = options.code;
  }

  const lang: 'javascript' | 'python' = rawLang === 'python' ? 'python' : 'javascript';
  const preamble =
    lang === 'python' ? options.problem.preamble?.python : options.problem.preamble?.javascript;
  const request: RunRequest = {
    type: 'run',
    requestId,
    code: execCode,
    functionName: options.problem.functionName,
    tests: options.tests.map((test) => ({ args: test.args })),
    timeoutMs,
    language: lang,
    ...(preamble ? { preamble } : {}),
  };

  const response = await new Promise<RunResponse>((resolve) => {
    function cleanup(): void {
      clearTimeout(safety);
      window.removeEventListener('message', onMessage);
    }
    function onMessage(event: MessageEvent): void {
      if (event.source !== target) return;
      const data = event.data as RunResponse | undefined;
      if (data?.type === 'result' && data.requestId === requestId) {
        cleanup();
        resolve(data);
      }
    }
    const safety = setTimeout(() => {
      cleanup();
      resolve({
        type: 'result',
        requestId,
        ok: false,
        reason: 'worker-error',
        error: 'The code sandbox did not respond in time.',
      });
    }, timeoutMs + SANDBOX_GRACE_MS);

    window.addEventListener('message', onMessage);
    target.postMessage(request, '*');
  });

  // Lifetime counter — useful only on the Options "About" panel.
  if (request.language === 'python' && response.ok) {
    void recordPythonRun();
  }

  return buildVerdict(options.tests, response);
}

export type CustomTestStatus =
  | { status: 'idle' }
  | { status: 'running' }
  | { status: 'ok'; output: string; durationMs?: number }
  | { status: 'error'; message: string }
  | { status: 'timeout' };

/**
 * Runs the user's code against a single custom set of args and returns the
 * raw output (no expected-value comparison). Used by the Custom Test drawer.
 */
export async function runCustomArgs(options: {
  code: string;
  functionName: string;
  args: readonly unknown[];
  language: SupportedLanguage;
  timeoutMs?: number;
}): Promise<CustomTestStatus> {
  const frame = await ensureSandbox();
  const target = frame.contentWindow;
  if (!target) return { status: 'error', message: 'Code sandbox is not available.' };

  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const requestId = `custom-${++requestCounter}-${Date.now()}`;

  // Same TypeScript → JavaScript transpilation as in runTests.
  let execCode = options.code;
  if (options.language === 'typescript') {
    const transpiled = transpileTypeScript(options.code);
    if (!transpiled.ok) {
      return { status: 'error', message: transpiled.message };
    }
    execCode = transpiled.code;
  }

  const execLang: 'javascript' | 'python' = options.language === 'python' ? 'python' : 'javascript';
  const request: RunRequest = {
    type: 'run',
    requestId,
    code: execCode,
    functionName: options.functionName,
    tests: [{ args: options.args }],
    timeoutMs,
    language: execLang,
  };

  const response = await new Promise<RunResponse>((resolve) => {
    function cleanup(): void {
      clearTimeout(safety);
      window.removeEventListener('message', onMessage);
    }
    function onMessage(event: MessageEvent): void {
      if (event.source !== target) return;
      const data = event.data as RunResponse | undefined;
      if (data?.type === 'result' && data.requestId === requestId) {
        cleanup();
        resolve(data);
      }
    }
    const safety = setTimeout(() => {
      cleanup();
      resolve({
        type: 'result',
        requestId,
        ok: false,
        reason: 'worker-error',
        error: 'The code sandbox did not respond in time.',
      });
    }, timeoutMs + SANDBOX_GRACE_MS);

    window.addEventListener('message', onMessage);
    target.postMessage(request, '*');
  });

  if (!response.ok) {
    if (response.reason === 'timeout') return { status: 'timeout' };
    return { status: 'error', message: response.error };
  }

  const outcome = response.outcomes[0];
  if (!outcome) return { status: 'error', message: 'No result returned.' };

  if (outcome.status === 'threw') {
    return { status: 'error', message: outcome.error };
  }

  let output: string;
  try {
    output = JSON.stringify(outcome.value);
  } catch {
    output = String(outcome.value);
  }
  return { status: 'ok', output, durationMs: outcome.durationMs };
}

/**
 * Eagerly initialise the Pyodide worker without sending any run, so the
 * user's first Submit doesn't pay the ~1–2 s Pyodide cold-boot. Called
 * by the challenge page on mount when `preferredLanguage === 'python'`.
 * Fire-and-forget; safe to call repeatedly (the warm worker is shared).
 */
export async function warmPython(): Promise<void> {
  try {
    const frame = await ensureSandbox();
    frame.contentWindow?.postMessage({ type: 'warm-python' }, '*');
  } catch {
    // Sandbox failed to load — the next runTests call will report it.
  }
}
