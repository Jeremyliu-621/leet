import { describe, it, expect } from 'vitest';
import { applyAll, applyChange } from '../src/lib/cooldown/apply';
import type {
  BlockRule,
  CooldownChangeKind,
  CooldownPendingChange,
  KeywordRule,
  UserPreferences,
} from '../src/lib/types';
import { DEFAULT_PREFERENCES } from '../src/lib/storage/defaults';

const blockedRules: BlockRule[] = [
  { id: 'b1', kind: 'domain', pattern: 'youtube.com', enabled: true, createdAt: 0 },
  { id: 'b2', kind: 'domain', pattern: 'reddit.com', enabled: true, createdAt: 0 },
];
const keywordRules: KeywordRule[] = [
  { id: 'k1', keyword: 'shorts', enabled: true, createdAt: 0 },
];
const userPreferences: UserPreferences = { ...DEFAULT_PREFERENCES, strictMode: true };
const initial = { blockedRules, keywordRules, userPreferences };

function pending(
  kind: CooldownChangeKind,
  payload: unknown,
  id = 'p1',
  appliesAt = 0,
): CooldownPendingChange {
  return { id, kind, payload, description: kind, requestedAt: 0, appliesAt };
}

describe('applyChange', () => {
  it('removes a block rule and damages the streak', () => {
    const out = applyChange(initial, pending('remove-block-rule', { ruleId: 'b1' }));
    expect(out.state.blockedRules.map((r) => r.id)).toEqual(['b2']);
    expect(out.damagedStreak).toBe(true);
  });

  it('is a no-op when the block-rule payload is missing or malformed', () => {
    expect(applyChange(initial, pending('remove-block-rule', null)).state.blockedRules).toEqual(blockedRules);
    expect(applyChange(initial, pending('remove-block-rule', { foo: 'bar' })).damagedStreak).toBe(false);
  });

  it('removes a keyword rule', () => {
    const out = applyChange(initial, pending('remove-keyword-rule', { ruleId: 'k1' }));
    expect(out.state.keywordRules).toEqual([]);
    expect(out.damagedStreak).toBe(true);
  });

  it('disables strict mode', () => {
    const out = applyChange(initial, pending('disable-strict-mode', null));
    expect(out.state.userPreferences.strictMode).toBe(false);
    expect(out.damagedStreak).toBe(true);
  });

  it('reduces friction by merging the payload into preferences', () => {
    const out = applyChange(
      initial,
      pending('reduce-friction', { unlockDurationMin: 30, challengeTimeLimitSec: 300 }),
    );
    expect(out.state.userPreferences.unlockDurationMin).toBe(30);
    expect(out.state.userPreferences.challengeTimeLimitSec).toBe(300);
  });

  it('ignores a non-object reduce-friction payload', () => {
    const out = applyChange(initial, pending('reduce-friction', null));
    expect(out.state.userPreferences).toEqual(userPreferences);
    expect(out.damagedStreak).toBe(true); // still applied (empty patch)
  });

  it('disables a block rule via reduce-friction { ruleId, enabled: false }', () => {
    const out = applyChange(initial, pending('reduce-friction', { ruleId: 'b1', enabled: false }));
    const rule = out.state.blockedRules.find((r) => r.id === 'b1');
    expect(rule?.enabled).toBe(false);
    // Other rules remain unchanged
    expect(out.state.blockedRules.find((r) => r.id === 'b2')?.enabled).toBe(true);
    expect(out.damagedStreak).toBe(true);
    // Preferences should NOT have ruleId/enabled keys injected
    expect('ruleId' in out.state.userPreferences).toBe(false);
  });

  it('disables a keyword rule via reduce-friction { ruleId, enabled: false }', () => {
    const out = applyChange(initial, pending('reduce-friction', { ruleId: 'k1', enabled: false }));
    const rule = out.state.keywordRules.find((r) => r.id === 'k1');
    expect(rule?.enabled).toBe(false);
    expect(out.damagedStreak).toBe(true);
  });

  it('is a no-op when reduce-friction targets a non-existent rule', () => {
    const out = applyChange(initial, pending('reduce-friction', { ruleId: 'nonexistent', enabled: false }));
    expect(out.state.blockedRules).toEqual(blockedRules);
    expect(out.state.keywordRules).toEqual(keywordRules);
    expect(out.damagedStreak).toBe(true);
  });

  it('resets preferences to defaults via reduce-friction { reset: true }', () => {
    const out = applyChange(initial, pending('reduce-friction', { reset: true }));
    expect(out.state.userPreferences).toEqual(DEFAULT_PREFERENCES);
    expect(out.damagedStreak).toBe(true);
    // Rules should be unaffected
    expect(out.state.blockedRules).toEqual(blockedRules);
    expect(out.state.keywordRules).toEqual(keywordRules);
  });
});

describe('applyAll', () => {
  it('applies a batch in order and OR-combines the damage flag', () => {
    const out = applyAll(initial, [
      pending('remove-block-rule', { ruleId: 'b1' }, 'a'),
      pending('disable-strict-mode', null, 'b'),
    ]);
    expect(out.state.blockedRules.map((r) => r.id)).toEqual(['b2']);
    expect(out.state.userPreferences.strictMode).toBe(false);
    expect(out.damagedStreak).toBe(true);
  });

  it('returns the input state and damagedStreak=false when given no changes', () => {
    const out = applyAll(initial, []);
    expect(out.state).toBe(initial);
    expect(out.damagedStreak).toBe(false);
  });
});
