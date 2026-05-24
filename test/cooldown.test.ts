import { describe, it, expect } from 'vitest';
import {
  cancelPending,
  nextApply,
  pickApplicable,
  remainingPending,
  schedulePending,
} from '../src/lib/cooldown/cooldown';

describe('schedulePending', () => {
  it('sets appliesAt to now + cooldownMs', () => {
    const c = schedulePending({
      kind: 'remove-block-rule',
      payload: { ruleId: 'r1' },
      description: 'Remove youtube.com',
      cooldownMs: 1000,
      now: 100,
      id: 'fixed-id',
    });
    expect(c.id).toBe('fixed-id');
    expect(c.requestedAt).toBe(100);
    expect(c.appliesAt).toBe(1100);
  });

  it('treats a negative cooldown as 0 (apply immediately)', () => {
    const c = schedulePending({
      kind: 'disable-strict-mode',
      payload: null,
      description: 'Disable strict mode',
      cooldownMs: -5,
      now: 50,
      id: 'x',
    });
    expect(c.appliesAt).toBe(50);
  });

  it('generates an id when none is provided', () => {
    const c = schedulePending({
      kind: 'reduce-friction',
      payload: null,
      description: 'Lower unlock duration',
      cooldownMs: 1000,
    });
    expect(c.id.length).toBeGreaterThan(0);
  });
});

function fixture(now: number) {
  return [
    schedulePending({ kind: 'remove-block-rule', payload: 1, description: 'a', cooldownMs: 100, now, id: 'a' }),
    schedulePending({ kind: 'remove-block-rule', payload: 2, description: 'b', cooldownMs: 500, now, id: 'b' }),
    schedulePending({ kind: 'remove-block-rule', payload: 3, description: 'c', cooldownMs: 1000, now, id: 'c' }),
  ];
}

describe('pickApplicable / remainingPending', () => {
  it('splits the set by appliesAt vs now', () => {
    const pending = fixture(0);
    expect(pickApplicable(pending, 99).map((c) => c.id)).toEqual([]);
    expect(pickApplicable(pending, 600).map((c) => c.id)).toEqual(['a', 'b']);
    expect(remainingPending(pending, 600).map((c) => c.id)).toEqual(['c']);
  });
});

describe('cancelPending', () => {
  it('removes changes by id', () => {
    const pending = fixture(0);
    expect(cancelPending(pending, ['b']).map((c) => c.id)).toEqual(['a', 'c']);
  });
});

describe('nextApply', () => {
  it('returns the earliest appliesAt not yet reached', () => {
    const pending = fixture(0);
    expect(nextApply(pending, 0)).toBe(100);
    expect(nextApply(pending, 200)).toBe(500);
    expect(nextApply(pending, 1500)).toBeNull();
    expect(nextApply([], 0)).toBeNull();
  });
});
