import type { UnlockToken } from '../types';

// Pure helpers for managing the per-domain unlock tokens that gate access to
// blocked sites. The service worker persists tokens via the storage layer and
// reconciles DNR rules whenever this module produces a new set.

export interface CreateTokenInput {
  domain: string;
  problemId: string;
  durationMs: number;
  /** Defaults to Date.now() — injectable for deterministic tests. */
  now?: number;
}

/** Minimum meaningful token lifetime — 1 minute in ms. */
const MIN_DURATION_MS = 60_000;

/** Creates a token that expires `durationMs` after the given clock value. */
export function createToken(input: CreateTokenInput): UnlockToken {
  const now = input.now ?? Date.now();
  // Guard against zero, negative, NaN, or Infinity — clamp to at least 1 minute.
  const durationMs =
    typeof input.durationMs === 'number' && isFinite(input.durationMs) && input.durationMs > 0
      ? input.durationMs
      : MIN_DURATION_MS;
  return {
    domain: input.domain.toLowerCase(),
    problemId: input.problemId,
    durationMs,
    grantedAt: now,
    expiresAt: now + durationMs,
  };
}

/** True if the token has not yet expired at the given clock value. */
export function isActive(token: UnlockToken, now: number = Date.now()): boolean {
  return token.expiresAt > now;
}

/**
 * Returns only the still-active tokens, deduplicated per domain. When two
 * tokens cover the same domain the one that expires later wins.
 */
export function pruneTokens(
  tokens: readonly UnlockToken[],
  now: number = Date.now(),
): UnlockToken[] {
  const byDomain = new Map<string, UnlockToken>();
  for (const token of tokens) {
    if (!isActive(token, now)) continue;
    const key = token.domain.toLowerCase();
    const existing = byDomain.get(key);
    if (!existing || token.expiresAt > existing.expiresAt) {
      byDomain.set(key, { ...token, domain: key });
    }
  }
  return [...byDomain.values()];
}

/**
 * Inserts a token for its domain (replacing any prior token for the same
 * domain) and returns the pruned, normalised set.
 */
export function upsertToken(
  tokens: readonly UnlockToken[],
  next: UnlockToken,
  now: number = Date.now(),
): UnlockToken[] {
  const key = next.domain.toLowerCase();
  const without = tokens.filter((t) => t.domain.toLowerCase() !== key);
  return pruneTokens([...without, next], now);
}

/** Returns the lowercase set of domains that have an active unlock. */
export function activeDomains(
  tokens: readonly UnlockToken[],
  now: number = Date.now(),
): Set<string> {
  return new Set(pruneTokens(tokens, now).map((t) => t.domain));
}

/** Finds the active token for a domain (lowercase compared), or null. */
export function findToken(
  tokens: readonly UnlockToken[],
  domain: string,
  now: number = Date.now(),
): UnlockToken | null {
  const key = domain.toLowerCase();
  for (const token of pruneTokens(tokens, now)) {
    if (token.domain === key) return token;
  }
  return null;
}

/**
 * Earliest expiry across the active set, or null if no tokens are active.
 * The service worker uses this to schedule the next reconciliation alarm.
 */
export function nextExpiry(
  tokens: readonly UnlockToken[],
  now: number = Date.now(),
): number | null {
  let min: number | null = null;
  for (const token of tokens) {
    if (!isActive(token, now)) continue;
    if (min === null || token.expiresAt < min) {
      min = token.expiresAt;
    }
  }
  return min;
}
