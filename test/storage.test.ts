import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { installFakeChrome, uninstallFakeChrome } from './helpers/fake-chrome';
import type { FakeChrome } from './helpers/fake-chrome';
import { getValue, setValue, updateValue, removeValue } from '../src/lib/storage/store';
import { DEFAULT_PREFERENCES } from '../src/lib/storage/defaults';
import { STORAGE_AREAS } from '../src/lib/storage/schema';
import type { BlockRule } from '../src/lib/types';

function makeRule(id: string): BlockRule {
  return { id, kind: 'domain', pattern: `${id}.com`, enabled: true, createdAt: 1 };
}

describe('storage store', () => {
  let fake: FakeChrome;

  beforeEach(() => {
    fake = installFakeChrome();
  });
  afterEach(() => {
    uninstallFakeChrome();
  });

  it('returns the default when a key is unset', async () => {
    expect(await getValue('blockedRules')).toEqual([]);
    expect(await getValue('userPreferences')).toEqual(DEFAULT_PREFERENCES);
    expect(await getValue('streakSummary')).toEqual({
      current: 0,
      longest: 0,
      lastSolvedDate: null,
      damaged: false,
    });
  });

  it('returns a fresh, independent copy of the default each call', async () => {
    const first = await getValue('blockedRules');
    const second = await getValue('blockedRules');
    expect(first).not.toBe(second);
    first.push(makeRule('mutated'));
    expect(await getValue('blockedRules')).toEqual([]);
  });

  it('round-trips a written value', async () => {
    const rules = [makeRule('youtube'), makeRule('reddit')];
    await setValue('blockedRules', rules);
    expect(await getValue('blockedRules')).toEqual(rules);
  });

  it('updateValue applies the updater and returns the next value', async () => {
    await setValue('blockedRules', [makeRule('youtube')]);
    const next = await updateValue('blockedRules', (current) => [...current, makeRule('reddit')]);
    expect(next.map((r) => r.id)).toEqual(['youtube', 'reddit']);
    expect(await getValue('blockedRules')).toEqual(next);
  });

  it('updateValue starts from the default for an unset key', async () => {
    const next = await updateValue('keywordRules', (current) => {
      expect(current).toEqual([]);
      return [{ id: 'k1', keyword: 'shorts', enabled: true, createdAt: 1 }];
    });
    expect(next).toHaveLength(1);
  });

  it('removeValue reverts a key to its default', async () => {
    await setValue('unlockTokens', [
      { domain: 'youtube.com', grantedAt: 0, expiresAt: 1, problemId: 'p', durationMs: 1 },
    ]);
    await removeValue('unlockTokens');
    expect(await getValue('unlockTokens')).toEqual([]);
  });

  it('routes each key to its configured storage area', async () => {
    await setValue('userPreferences', DEFAULT_PREFERENCES);
    await setValue('unlockTokens', []);

    const syncKeys = Object.keys(await fake.storage.sync.get(null));
    const localKeys = Object.keys(await fake.storage.local.get(null));

    expect(STORAGE_AREAS.userPreferences).toBe('sync');
    expect(STORAGE_AREAS.unlockTokens).toBe('local');
    expect(syncKeys).toContain('userPreferences');
    expect(syncKeys).not.toContain('unlockTokens');
    expect(localKeys).toContain('unlockTokens');
    expect(localKeys).not.toContain('userPreferences');
  });

  it('submissionHistory defaults to empty record and routes to local', async () => {
    expect(await getValue('submissionHistory')).toEqual({});
    expect(STORAGE_AREAS.submissionHistory).toBe('local');
  });

  it('submissionHistory can be updated per problem id', async () => {
    const record = {
      attempt: 1,
      timestamp: 1000,
      outcome: 'wrong-answer' as const,
      passCount: 2,
      totalTests: 5,
    };
    await updateValue('submissionHistory', (history) => ({ ...history, 'two-sum': [record] }));
    const stored = await getValue('submissionHistory');
    expect(stored['two-sum']).toEqual([record]);
    expect(stored['other-problem']).toBeUndefined();
  });

  it('submissionHistory persists optional code field', async () => {
    const record = {
      attempt: 1,
      timestamp: 1000,
      outcome: 'wrong-answer' as const,
      passCount: 0,
      totalTests: 3,
      code: 'return null;',
    };
    await updateValue('submissionHistory', (h) => ({ ...h, 'two-sum': [record] }));
    const stored = await getValue('submissionHistory');
    expect(stored['two-sum']?.[0]?.code).toBe('return null;');
  });

  it('submissionHistory can be cleared per problem id on solve', async () => {
    const record = { attempt: 1, timestamp: 1000, outcome: 'wrong-answer' as const, passCount: 1, totalTests: 3 };
    await setValue('submissionHistory', { 'two-sum': [record], 'fizz-buzz': [record] });
    await updateValue('submissionHistory', (history) => {
      const { 'two-sum': _, ...rest } = history;
      return rest;
    });
    const stored = await getValue('submissionHistory');
    expect(stored['two-sum']).toBeUndefined();
    expect(stored['fizz-buzz']).toEqual([record]);
  });

  it('backfills missing userPreferences keys from defaults (forward-compat)', async () => {
    // Simulate preferences written by an older release that predates newer
    // fields like `lists`. Writing the partial object directly bypasses the
    // store so it lands in storage exactly as a stale client would have left it.
    const { lists: _omitted, ...legacyPrefs } = DEFAULT_PREFERENCES;
    await fake.storage.sync.set({ userPreferences: { ...legacyPrefs, difficulties: ['hard'] } });

    const loaded = await getValue('userPreferences');
    // Missing key is backfilled from defaults...
    expect(loaded.lists).toEqual([]);
    // ...while values present in storage are preserved, not reset to default.
    expect(loaded.difficulties).toEqual(['hard']);
  });

  it('lets stored userPreferences values override defaults', async () => {
    await setValue('userPreferences', { ...DEFAULT_PREFERENCES, lists: ['blind-75'], theme: 'dracula' });
    const loaded = await getValue('userPreferences');
    expect(loaded.lists).toEqual(['blind-75']);
    expect(loaded.theme).toBe('dracula');
  });

  it('feedback defaults to an empty array, routes to local, and appends', async () => {
    expect(await getValue('feedback')).toEqual([]);
    expect(STORAGE_AREAS.feedback).toBe('local');
    const entry = { message: 'great app', email: 'a@b.com', createdAt: 1000 };
    await updateValue('feedback', (curr) => [...curr, entry]);
    const anon = { message: 'no email here', email: null, createdAt: 2000 };
    await updateValue('feedback', (curr) => [...curr, anon]);
    expect(await getValue('feedback')).toEqual([entry, anon]);
  });

  it('throws a clear error when chrome.storage is unavailable', async () => {
    uninstallFakeChrome();
    await expect(getValue('blockedRules')).rejects.toThrow(/chrome\.storage is unavailable/);
  });
});
