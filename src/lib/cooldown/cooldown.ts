import type { CooldownPendingChange, CooldownChangeKind } from '../types';

// Cooldown pipeline — the heart of LeetMeow's anti-bypass story.
//
// When a user makes a "strictness-reducing" change (e.g. remove a block rule
// while strict mode is on), the change is not applied immediately. A
// CooldownPendingChange is created with `appliesAt = now + settingsCooldownMs`,
// and the service worker reconciles applicable changes on every wake.

export interface ScheduleInput {
  kind: CooldownChangeKind;
  payload: unknown;
  description: string;
  cooldownMs: number;
  now?: number;
  /** Stable id; defaults to a fresh UUID. Injectable for tests. */
  id?: string;
}

/** Generate a new pending change. */
export function schedulePending(input: ScheduleInput): CooldownPendingChange {
  const now = input.now ?? Date.now();
  return {
    id: input.id ?? newId(),
    kind: input.kind,
    payload: input.payload,
    description: input.description,
    requestedAt: now,
    appliesAt: now + Math.max(0, input.cooldownMs),
  };
}

/** Changes that have reached their appliesAt time at `now`. */
export function pickApplicable(
  pending: readonly CooldownPendingChange[],
  now: number = Date.now(),
): CooldownPendingChange[] {
  return pending.filter((change) => change.appliesAt <= now);
}

/** Changes that have NOT yet reached their appliesAt time at `now`. */
export function remainingPending(
  pending: readonly CooldownPendingChange[],
  now: number = Date.now(),
): CooldownPendingChange[] {
  return pending.filter((change) => change.appliesAt > now);
}

/**
 * Remove pending changes by id (e.g. user cancelled them in the UI). Returns
 * the remaining set.
 */
export function cancelPending(
  pending: readonly CooldownPendingChange[],
  ids: readonly string[],
): CooldownPendingChange[] {
  const cancel = new Set(ids);
  return pending.filter((change) => !cancel.has(change.id));
}

/** Earliest appliesAt across pending, or null if none remain. */
export function nextApply(
  pending: readonly CooldownPendingChange[],
  now: number = Date.now(),
): number | null {
  let min: number | null = null;
  for (const change of pending) {
    if (change.appliesAt <= now) continue;
    if (min === null || change.appliesAt < min) {
      min = change.appliesAt;
    }
  }
  return min;
}

function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
