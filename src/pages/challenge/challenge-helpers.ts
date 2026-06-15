/**
 * Pure helper functions for the Challenge page.
 * Extracted here so they can be unit-tested independently of React.
 */

// Re-export the canonical extractDomain from blocking/matcher so the challenge
// page doesn't have its own subtly-different copy.
export { extractDomain } from '../../lib/blocking/matcher';

/**
 * Parses the `?target=` query parameter from a URL search string and returns
 * the decoded target URL, or null if absent or malformed.
 *
 * @example
 * parseTargetParam('?target=https%3A%2F%2Fyoutube.com%2F') // 'https://youtube.com/'
 * parseTargetParam('')                                      // null
 */
export function parseTargetParam(search: string): string | null {
  try {
    const params = new URLSearchParams(search);
    const raw = params.get('target');
    if (!raw) return null;
    // Validate it is a real URL before returning.
    new URL(raw);
    return raw;
  } catch {
    return null;
  }
}

/**
 * Parses a `?problem=<id>` param for deep-linking to a specific problem.
 * Returns the id string, or null if absent or empty.
 */
export function parseProblemIdParam(search: string): string | null {
  const id = new URLSearchParams(search).get('problem');
  return id && id.trim().length > 0 ? id.trim() : null;
}

/**
 * Returns a new search string (with leading `?`) that pins `problem=<id>`,
 * preserving every other parameter (notably `target`).
 *
 * The challenge page picks a *random* problem on each fresh mount. Without an
 * explicit problem in the URL, any reload — Vite HMR, an accidental refresh, a
 * stray service-worker redirect — rolls a new random problem and orphans the
 * in-progress draft (which is keyed by problem id). Pinning the selected id
 * into the URL via `history.replaceState` makes reloads restore *this* problem
 * so the existing draft-restore path brings the user's code back.
 *
 * Idempotent: pinning an id already present in `search` yields the same string.
 *
 * @example
 * withPinnedProblemId('?target=https%3A%2F%2Fyoutube.com%2F', 'two-sum')
 * // '?target=https%3A%2F%2Fyoutube.com%2F&problem=two-sum'
 */
export function withPinnedProblemId(search: string, id: string): string {
  const params = new URLSearchParams(search);
  params.set('problem', id);
  return `?${params.toString()}`;
}

/**
 * Formats a seconds count as MM:SS (zero-padded).
 * Clamps negative input to zero.
 *
 * @example
 * formatCountdown(90)  // '01:30'
 * formatCountdown(0)   // '00:00'
 * formatCountdown(-5)  // '00:00'
 */
export function formatCountdown(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}
