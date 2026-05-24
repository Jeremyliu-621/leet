import { describe, it, expect } from 'vitest';
import {
  createToken,
  isActive,
  pruneTokens,
  upsertToken,
  activeDomains,
  findToken,
  nextExpiry,
} from '../src/lib/unlock/tokens';
import type { UnlockToken } from '../src/lib/types';

function token(
  domain: string,
  grantedAt: number,
  durationMs: number,
  problemId = 'p1',
): UnlockToken {
  return {
    domain: domain.toLowerCase(),
    grantedAt,
    expiresAt: grantedAt + durationMs,
    problemId,
    durationMs,
  };
}

describe('createToken', () => {
  it('lowercases the domain and sets expiresAt = now + durationMs', () => {
    const t = createToken({
      domain: 'Youtube.Com',
      problemId: 'two-sum',
      durationMs: 60_000,
      now: 1_000,
    });
    expect(t.domain).toBe('youtube.com');
    expect(t.grantedAt).toBe(1_000);
    expect(t.expiresAt).toBe(61_000);
    expect(t.problemId).toBe('two-sum');
  });
});

describe('isActive', () => {
  const t = token('youtube.com', 0, 100);
  it('true while expiry is in the future', () => {
    expect(isActive(t, 50)).toBe(true);
  });
  it('false at and after expiry', () => {
    expect(isActive(t, 100)).toBe(false);
    expect(isActive(t, 999)).toBe(false);
  });
});

describe('pruneTokens', () => {
  it('drops expired tokens and dedupes per domain, keeping the latest expiry', () => {
    const a = token('youtube.com', 0, 100);
    const b = token('youtube.com', 50, 100); // expires at 150 — wins
    const c = token('reddit.com', 0, 50); // expired at now=80
    const d = token('reddit.com', 0, 200); // active
    const pruned = pruneTokens([a, b, c, d], 80);
    const domains = pruned.map((t) => t.domain).sort();
    expect(domains).toEqual(['reddit.com', 'youtube.com']);
    const yt = pruned.find((t) => t.domain === 'youtube.com');
    expect(yt?.expiresAt).toBe(150);
    const rd = pruned.find((t) => t.domain === 'reddit.com');
    expect(rd?.expiresAt).toBe(200);
  });
});

describe('upsertToken', () => {
  it('replaces any prior token for the same domain', () => {
    const a = token('youtube.com', 0, 100);
    const b = token('YOUTUBE.com', 200, 100);
    const next = upsertToken([a], b, 200);
    expect(next).toHaveLength(1);
    expect(next[0]?.grantedAt).toBe(200);
  });
  it('keeps tokens for other domains', () => {
    const a = token('youtube.com', 0, 1000);
    const b = token('reddit.com', 0, 1000);
    const next = upsertToken([a], b, 0);
    expect(next.map((t) => t.domain).sort()).toEqual(['reddit.com', 'youtube.com']);
  });
});

describe('activeDomains and findToken', () => {
  const tokens = [token('youtube.com', 0, 100), token('reddit.com', 0, 10)];
  it('returns active domains', () => {
    expect(activeDomains(tokens, 5)).toEqual(new Set(['youtube.com', 'reddit.com']));
    expect(activeDomains(tokens, 20)).toEqual(new Set(['youtube.com']));
    expect(activeDomains(tokens, 200)).toEqual(new Set());
  });
  it('finds a token for a domain (case-insensitive), or null', () => {
    expect(findToken(tokens, 'YouTube.com', 5)?.domain).toBe('youtube.com');
    expect(findToken(tokens, 'reddit.com', 200)).toBeNull();
    expect(findToken(tokens, 'absent.com', 5)).toBeNull();
  });
});

describe('nextExpiry', () => {
  it('returns the earliest active expiry, or null when none', () => {
    const tokens = [token('a.com', 0, 100), token('b.com', 0, 50)];
    expect(nextExpiry(tokens, 0)).toBe(50);
    expect(nextExpiry(tokens, 60)).toBe(100); // b expired
    expect(nextExpiry(tokens, 200)).toBeNull();
    expect(nextExpiry([], 0)).toBeNull();
  });
});

describe('createToken edge cases', () => {
  it('clamps non-positive durationMs to MIN_DURATION_MS', () => {
    const t0 = createToken({ domain: 'test.com', problemId: 'p1', durationMs: 0, now: 1000 });
    expect(t0.durationMs).toBe(60_000);
    expect(t0.expiresAt).toBe(1000 + 60_000);

    const tNeg = createToken({ domain: 'test.com', problemId: 'p1', durationMs: -500, now: 1000 });
    expect(tNeg.durationMs).toBe(60_000);
  });

  it('clamps Infinity and NaN durationMs to MIN_DURATION_MS', () => {
    const tInf = createToken({ domain: 'test.com', problemId: 'p1', durationMs: Infinity, now: 1000 });
    expect(tInf.durationMs).toBe(60_000);

    const tNaN = createToken({ domain: 'test.com', problemId: 'p1', durationMs: NaN, now: 1000 });
    expect(tNaN.durationMs).toBe(60_000);
  });

  it('accepts a valid positive durationMs', () => {
    const t = createToken({ domain: 'test.com', problemId: 'p1', durationMs: 300_000, now: 0 });
    expect(t.durationMs).toBe(300_000);
    expect(t.expiresAt).toBe(300_000);
  });
});
