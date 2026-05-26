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

  it('submissionHistory defaults to an empty array and routes to local storage', async () => {
    expect(await getValue('submissionHistory')).toEqual([]);
    expect(STORAGE_AREAS.submissionHistory).toBe('local');
  });

  it('submissionHistory can be updated with updateValue', async () => {
    const record = {
      submittedAt: 1000,
      problemId: 'two-sum',
      problemTitle: 'Two Sum',
      outcome: 'accepted' as const,
      passed: 5,
      total: 5,
      durationMs: 120,
      language: 'javascript' as const,
    };
    await updateValue('submissionHistory', () => [record]);
    expect(await getValue('submissionHistory')).toEqual([record]);
  });

  it('throws a clear error when chrome.storage is unavailable', async () => {
    uninstallFakeChrome();
    await expect(getValue('blockedRules')).rejects.toThrow(/chrome\.storage is unavailable/);
  });
});
