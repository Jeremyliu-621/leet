/**
 * Edge-case sweep across all src/lib pure modules.
 *
 * Covers inputs that the primary test files don't exercise: empty collections,
 * boundary expiry values, case-normalisation, history cap overflow, same-day
 * multi-solve, zero-duration tokens, and malformed URL inputs.
 */

import { describe, it, expect } from 'vitest';

// --- unlock/tokens ---
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

function tok(domain: string, grantedAt: number, durationMs: number): UnlockToken {
  return {
    domain: domain.toLowerCase(),
    grantedAt,
    expiresAt: grantedAt + durationMs,
    problemId: 'p',
    durationMs,
  };
}

describe('unlock/tokens — edge cases', () => {
  it('pruneTokens returns [] for an empty input', () => {
    expect(pruneTokens([], 0)).toEqual([]);
  });

  it('createToken with durationMs=0 expires immediately at grant time', () => {
    const t = createToken({ domain: 'x.com', problemId: 'p', durationMs: 0, now: 100 });
    // expiresAt === grantedAt === 100; isActive requires expiresAt > now
    expect(isActive(t, 100)).toBe(false);  // at grant time: expired
    expect(isActive(t, 101)).toBe(false);  // after: still expired
    expect(isActive(t, 99)).toBe(true);    // before grant time: technically "active"
  });

  it('nextExpiry returns null when all tokens are expired', () => {
    const tokens = [tok('a.com', 0, 5), tok('b.com', 0, 10)];
    expect(nextExpiry(tokens, 20)).toBeNull();
  });

  it('nextExpiry returns null for an empty array', () => {
    expect(nextExpiry([], 0)).toBeNull();
  });

  it('upsertToken lowercases the domain of the new token', () => {
    const result = upsertToken([], tok('Reddit.COM', 0, 1000), 0);
    expect(result[0]?.domain).toBe('reddit.com');
  });

  it('activeDomains returns empty set when all expired', () => {
    const tokens = [tok('a.com', 0, 5)];
    expect(activeDomains(tokens, 100).size).toBe(0);
  });

  it('findToken returns null when tokens list is empty', () => {
    expect(findToken([], 'any.com', 0)).toBeNull();
  });

  it('pruneTokens normalises domain case on input tokens', () => {
    const t: UnlockToken = {
      domain: 'UPPER.COM',
      grantedAt: 0,
      expiresAt: 1000,
      problemId: 'p',
      durationMs: 1000,
    };
    const pruned = pruneTokens([t], 0);
    expect(pruned[0]?.domain).toBe('upper.com');
  });

  it('isActive is false exactly at the expiry boundary', () => {
    const t = tok('y.com', 0, 100);
    expect(isActive(t, 99)).toBe(true);
    expect(isActive(t, 100)).toBe(false);
  });
});

// --- blocking/matcher ---
import { extractDomain, matchUrl } from '../src/lib/blocking/matcher';
import type { BlockRule, KeywordRule } from '../src/lib/types';

function domainRule(pattern: string): BlockRule {
  return { id: 'r1', kind: 'domain', pattern, enabled: true, createdAt: 0 };
}
function keyRule(keyword: string, enabled = true): KeywordRule {
  return { id: 'k1', keyword, enabled, createdAt: 0 };
}

describe('blocking/matcher — edge cases', () => {
  it('extractDomain returns null for an empty string', () => {
    expect(extractDomain('')).toBeNull();
  });

  it('extractDomain returns null for a non-http(s) scheme', () => {
    expect(extractDomain('ftp://files.example.com/f.zip')).toBeNull();
    expect(extractDomain('chrome-extension://abc/popup.html')).toBeNull();
  });

  it('extractDomain returns null for garbage input', () => {
    expect(extractDomain('not a url at all')).toBeNull();
  });

  it('matchUrl returns null for an empty URL string', () => {
    const rules = { blockRules: [domainRule('youtube.com')], keywordRules: [] };
    expect(matchUrl('', rules)).toBeNull();
  });

  it('matchUrl returns null when there are no rules', () => {
    expect(matchUrl('https://youtube.com/', { blockRules: [], keywordRules: [] })).toBeNull();
  });

  it('keyword rule with empty string does not match anything', () => {
    const rules = { blockRules: [], keywordRules: [keyRule('')] };
    expect(matchUrl('https://example.com/anything', rules)).toBeNull();
  });

  it('keyword rule with whitespace-only string does not match', () => {
    const rules = { blockRules: [], keywordRules: [keyRule('   ')] };
    expect(matchUrl('https://example.com/', rules)).toBeNull();
  });

  it('domain rule with empty pattern does not match', () => {
    const rules = { blockRules: [domainRule('')], keywordRules: [] };
    expect(matchUrl('https://example.com/', rules)).toBeNull();
  });

  it('disabled domain rule is skipped even if pattern matches', () => {
    const rule: BlockRule = { id: 'r', kind: 'domain', pattern: 'youtube.com', enabled: false, createdAt: 0 };
    expect(matchUrl('https://youtube.com/', { blockRules: [rule], keywordRules: [] })).toBeNull();
  });

  it('URL-prefix rule requires non-empty pattern', () => {
    const rule: BlockRule = { id: 'r', kind: 'url', pattern: '', enabled: true, createdAt: 0 };
    expect(matchUrl('https://example.com/', { blockRules: [rule], keywordRules: [] })).toBeNull();
  });
});

// --- streak/streak ---
import {
  EMPTY_SUMMARY,
  MAX_HISTORY_DAYS,
  damageStreak,
  daysBetween,
  recordFail,
  recordSolve,
} from '../src/lib/streak/streak';
import type { StreakSummary } from '../src/lib/types';

describe('streak/streak — edge cases', () => {
  it('recordSolve on the same day twice keeps current unchanged after first', () => {
    const first = recordSolve(EMPTY_SUMMARY, [], { today: '2026-05-23' });
    const second = recordSolve(first.summary, first.history, { today: '2026-05-23' });
    // Same day: current stays 1, not 2
    expect(second.summary.current).toBe(1);
    expect(second.summary.longest).toBe(1);
    // history should accumulate solved count
    expect(second.history.find((d) => d.date === '2026-05-23')?.solved).toBe(2);
  });

  it('recordSolve clears the damaged flag', () => {
    const damagedSummary: StreakSummary = {
      current: 0,
      longest: 5,
      lastSolvedDate: '2026-05-20',
      damaged: true,
    };
    const next = recordSolve(damagedSummary, [], { today: '2026-05-23' });
    expect(next.summary.damaged).toBe(false);
  });

  it('recordSolve with a gap > 1 day resets current streak to 1', () => {
    const start: StreakSummary = {
      current: 5,
      longest: 7,
      lastSolvedDate: '2026-05-20',
      damaged: false,
    };
    // Skipped 2 days → reset
    const next = recordSolve(start, [], { today: '2026-05-23' });
    expect(next.summary.current).toBe(1);
    expect(next.summary.longest).toBe(7); // longest preserved
  });

  it('recordSolve preserves longest when current does not exceed it', () => {
    const start: StreakSummary = {
      current: 3,
      longest: 10,
      lastSolvedDate: '2026-05-22',
      damaged: false,
    };
    const next = recordSolve(start, [], { today: '2026-05-23' });
    expect(next.summary.current).toBe(4);
    expect(next.summary.longest).toBe(10);
  });

  it('history is capped at MAX_HISTORY_DAYS entries', () => {
    const history = Array.from({ length: MAX_HISTORY_DAYS }, (_, i) => ({
      date: `2023-01-${String(i + 1).padStart(2, '0')}`,
      solved: 1,
      failed: 0,
    }));
    const next = recordSolve(EMPTY_SUMMARY, history, { today: '2026-05-23' });
    expect(next.history).toHaveLength(MAX_HISTORY_DAYS);
    // Newest entry must be the current solve day
    expect(next.history[next.history.length - 1]?.date).toBe('2026-05-23');
  });

  it('recordFail increments failed count for the day', () => {
    const first = recordFail(EMPTY_SUMMARY, [], { today: '2026-05-23' });
    const second = recordFail(first.summary, first.history, { today: '2026-05-23' });
    expect(second.history.find((d) => d.date === '2026-05-23')?.failed).toBe(2);
  });

  it('damageStreak on an already-damaged summary is idempotent', () => {
    const already: StreakSummary = {
      current: 0,
      longest: 5,
      lastSolvedDate: '2026-05-20',
      damaged: true,
    };
    const next = damageStreak(already);
    expect(next.current).toBe(0);
    expect(next.damaged).toBe(true);
  });

  it('daysBetween returns 0 for the same date', () => {
    expect(daysBetween('2026-05-23', '2026-05-23')).toBe(0);
  });

  it('daysBetween handles month boundary', () => {
    expect(daysBetween('2026-06-01', '2026-05-31')).toBe(1);
    expect(daysBetween('2026-01-01', '2025-12-31')).toBe(1);
  });
});
