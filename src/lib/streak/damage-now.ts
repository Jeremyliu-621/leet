import { getValue, setValue } from '../storage/store';
import { damageStreak } from './streak';

// Apply streak damage immediately and persist it. Used by the settings UI
// when a strictness-reducing change is applied outside the cooldown pipeline
// (i.e. strict mode is off and the change takes effect at once).
//
// When a change goes through the cooldown pipeline the service-worker's
// `applyPendingChanges` already damages the streak on apply; this helper
// covers the no-cooldown path.

export async function damageStreakNow(): Promise<void> {
  const summary = await getValue('streakSummary');
  await setValue('streakSummary', damageStreak(summary));
}
