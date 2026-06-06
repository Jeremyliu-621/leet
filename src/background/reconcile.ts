import { getValue, setValue } from '../lib/storage/store';
import { buildDynamicRules, challengePageUrl } from '../lib/blocking/dnr';
import { nextExpiry, pruneTokens } from '../lib/unlock/tokens';
import { nextApply, pickApplicable } from '../lib/cooldown/cooldown';
import { applyAll } from '../lib/cooldown/apply';
import { damageStreak } from '../lib/streak/streak';

// The single piece of LeetMeow's runtime state machine — extracted from the
// service worker so it can be exercised by integration tests against an
// in-memory chrome. The SW imports `reconcile` and `RECONCILE_ALARM` and wires
// them to runtime events; it does no decision-making of its own.

export const RECONCILE_ALARM = 'leetmeow/reconcile';

/**
 * Bring the live DNR rule set and the next reconcile-alarm into agreement
 * with current storage. Idempotent — safe to call on every SW wake, on every
 * `storage.onChanged`, and on every alarm fire.
 *
 * Order matters: pending settings changes are applied FIRST so the rebuilt
 * DNR rule set reflects post-change state, and expired tokens are pruned
 * SECOND so the unlocked-domain set is accurate.
 */
export async function reconcile(now: number = Date.now()): Promise<void> {
  // 1. Apply any pending cooldown-deferred settings changes whose timer has
  //    elapsed; may mutate blockedRules / keywordRules / userPreferences and
  //    damage the streak.
  await applyPendingChanges(now);

  // 2. Read the (possibly mutated) state.
  const [blockRules, keywordRules, rawTokens, pending] = await Promise.all([
    getValue('blockedRules'),
    getValue('keywordRules'),
    getValue('unlockTokens'),
    getValue('cooldownPendingChanges'),
  ]);

  // 3. Prune expired unlock tokens.
  const pruned = pruneTokens(rawTokens, now);
  if (pruned.length !== rawTokens.length) {
    await setValue('unlockTokens', pruned);
  }

  // 4. Rebuild the live DNR dynamic rule set.
  const unlockedDomains = new Set(pruned.map((t) => t.domain));
  const desiredRules = buildDynamicRules({
    blockRules,
    keywordRules,
    unlockedDomains,
    challengeUrl: challengePageUrl(),
  });
  const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: existingRules.map((rule) => rule.id),
    addRules: desiredRules,
  });

  // 5. Schedule the next alarm at the earliest of any token-expiry and any
  //    upcoming pending-change apply time. Clear it when nothing's upcoming.
  const nextTokenExpiry = nextExpiry(pruned, now);
  const nextPendingApply = nextApply(pending, now);
  const nextWake = earliest(nextTokenExpiry, nextPendingApply);
  if (nextWake !== null) {
    chrome.alarms.create(RECONCILE_ALARM, { when: nextWake });
  } else {
    await chrome.alarms.clear(RECONCILE_ALARM);
  }
}

/** Pick the earlier of two optional timestamps. */
export function earliest(a: number | null, b: number | null): number | null {
  if (a === null) return b;
  if (b === null) return a;
  return Math.min(a, b);
}

/**
 * Apply every cooldown-pending change whose `appliesAt` has elapsed. Every
 * applied change is strictness-reducing → if any apply, the streak is damaged.
 */
export async function applyPendingChanges(now: number = Date.now()): Promise<void> {
  const pending = await getValue('cooldownPendingChanges');
  const applicable = pickApplicable(pending, now);
  if (applicable.length === 0) {
    return;
  }

  const [blockedRules, keywordRules, userPreferences] = await Promise.all([
    getValue('blockedRules'),
    getValue('keywordRules'),
    getValue('userPreferences'),
  ]);

  const result = applyAll({ blockedRules, keywordRules, userPreferences }, applicable);
  const remaining = pending.filter((change) => change.appliesAt > now);

  await Promise.all([
    setValue('blockedRules', result.state.blockedRules),
    setValue('keywordRules', result.state.keywordRules),
    setValue('userPreferences', result.state.userPreferences),
    setValue('cooldownPendingChanges', remaining),
  ]);

  if (result.damagedStreak) {
    const summary = await getValue('streakSummary');
    await setValue('streakSummary', damageStreak(summary));
  }
}
