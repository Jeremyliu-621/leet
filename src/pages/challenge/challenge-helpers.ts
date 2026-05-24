/**
 * Pure helper functions for the Challenge page.
 * Extracted here so they can be unit-tested independently of React.
 */

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
 * Extracts the hostname from a URL string. Returns null if the URL is invalid.
 *
 * @example
 * extractDomain('https://www.youtube.com/watch?v=abc') // 'www.youtube.com'
 * extractDomain('not a url')                           // null
 */
export function extractDomain(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
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
