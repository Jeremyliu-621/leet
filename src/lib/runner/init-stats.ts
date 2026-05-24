// Lightweight observability ring buffer for the Python runner.
//
// Goal: a user reporting "Python feels slow" should be able to read a
// concrete first-boot number off the Options page. We keep the schema
// boring on purpose — one bucket, written in `chrome.storage.local`,
// strictly local-only (no sync, no telemetry).
//
// The runner reports `recordPythonBoot(durationMs)` once per session — on
// the FIRST successful Pyodide boot of the session. We persist:
//   - `firstBootMs` — the most-recent first-boot measurement
//   - `runs` — a running count of Python submissions (incremented by
//     `recordPythonRun()` once per successful submit)
//
// Anything richer (per-problem timings, percentiles) is overkill for the
// MVP and is intentionally not collected.

const STORAGE_KEY = '_pyodideInitStats';

export interface InitStats {
  /** Wall-clock ms for the most recent first-Pyodide-boot of a session. */
  firstBootMs: number | null;
  /** Total number of Python runs ever executed on this device. */
  runs: number;
  /** Last update epoch ms, for debugging. */
  updatedAt: number;
}

const EMPTY_STATS: InitStats = {
  firstBootMs: null,
  runs: 0,
  updatedAt: 0,
};

function localStorageAvailable(): boolean {
  return (
    typeof chrome !== 'undefined' &&
    typeof chrome.storage !== 'undefined' &&
    typeof chrome.storage.local !== 'undefined'
  );
}

/** Reads the current stats; resolves to `EMPTY_STATS` on first run or on error. */
export async function readInitStats(): Promise<InitStats> {
  if (!localStorageAvailable()) return { ...EMPTY_STATS };
  try {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const stored = result[STORAGE_KEY] as Partial<InitStats> | undefined;
    if (!stored) return { ...EMPTY_STATS };
    return {
      firstBootMs:
        typeof stored.firstBootMs === 'number' && Number.isFinite(stored.firstBootMs)
          ? stored.firstBootMs
          : null,
      runs: typeof stored.runs === 'number' && Number.isFinite(stored.runs) ? stored.runs : 0,
      updatedAt: typeof stored.updatedAt === 'number' ? stored.updatedAt : 0,
    };
  } catch {
    return { ...EMPTY_STATS };
  }
}

async function writeInitStats(next: InitStats): Promise<void> {
  if (!localStorageAvailable()) return;
  try {
    await chrome.storage.local.set({ [STORAGE_KEY]: next });
  } catch {
    /* storage quota or permission issue — non-fatal */
  }
}

/** Record the wall-clock duration of a Pyodide cold boot. Best-effort. */
export async function recordPythonBoot(durationMs: number): Promise<void> {
  if (!Number.isFinite(durationMs) || durationMs < 0) return;
  const current = await readInitStats();
  await writeInitStats({
    ...current,
    firstBootMs: Math.round(durationMs),
    updatedAt: Date.now(),
  });
}

/** Increment the lifetime Python-run counter. Best-effort. */
export async function recordPythonRun(): Promise<void> {
  const current = await readInitStats();
  await writeInitStats({
    ...current,
    runs: current.runs + 1,
    updatedAt: Date.now(),
  });
}
