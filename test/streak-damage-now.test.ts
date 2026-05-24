import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { installFakeChrome, uninstallFakeChrome } from './helpers/fake-chrome';
import { damageStreakNow } from '../src/lib/streak/damage-now';
import { getValue, setValue } from '../src/lib/storage/store';

describe('damageStreakNow', () => {
  beforeEach(() => {
    installFakeChrome();
  });
  afterEach(() => {
    uninstallFakeChrome();
  });

  it('zeroes the current streak, preserves longest, flags damaged', async () => {
    await setValue('streakSummary', {
      current: 7,
      longest: 10,
      lastSolvedDate: '2026-05-20',
      damaged: false,
    });
    await damageStreakNow();
    const after = await getValue('streakSummary');
    expect(after.current).toBe(0);
    expect(after.longest).toBe(10);
    expect(after.damaged).toBe(true);
    expect(after.lastSolvedDate).toBe('2026-05-20');
  });

  it('is idempotent for an already-zeroed streak', async () => {
    await damageStreakNow();
    await damageStreakNow();
    const after = await getValue('streakSummary');
    expect(after.current).toBe(0);
    expect(after.damaged).toBe(true);
  });
});
