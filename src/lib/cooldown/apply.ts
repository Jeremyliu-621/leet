import type {
  BlockRule,
  CooldownPendingChange,
  KeywordRule,
  UserPreferences,
} from '../types';

// Pure application of cooldown-deferred settings changes. The service worker
// reads current state, calls `applyAll` with the applicable pending changes,
// and writes the resulting state back. Every applied change is considered
// strictness-reducing → returns `damagedStreak: true`.

export interface SettingsState {
  blockedRules: BlockRule[];
  keywordRules: KeywordRule[];
  userPreferences: UserPreferences;
}

export interface ApplyResult {
  state: SettingsState;
  /** True if any change in the batch should damage the user's streak. */
  damagedStreak: boolean;
}

function ruleIdFrom(payload: unknown): string | null {
  if (payload === null || typeof payload !== 'object') return null;
  const id = (payload as { ruleId?: unknown }).ruleId;
  return typeof id === 'string' ? id : null;
}

/** Applies one pending change to the supplied state, returning the next state. */
export function applyChange(state: SettingsState, change: CooldownPendingChange): ApplyResult {
  switch (change.kind) {
    case 'remove-block-rule': {
      const id = ruleIdFrom(change.payload);
      if (id === null) return { state, damagedStreak: false };
      return {
        state: { ...state, blockedRules: state.blockedRules.filter((rule) => rule.id !== id) },
        damagedStreak: true,
      };
    }
    case 'remove-keyword-rule': {
      const id = ruleIdFrom(change.payload);
      if (id === null) return { state, damagedStreak: false };
      return {
        state: { ...state, keywordRules: state.keywordRules.filter((rule) => rule.id !== id) },
        damagedStreak: true,
      };
    }
    case 'disable-strict-mode': {
      return {
        state: {
          ...state,
          userPreferences: { ...state.userPreferences, strictMode: false },
        },
        damagedStreak: true,
      };
    }
    case 'reduce-friction': {
      const patch =
        change.payload !== null && typeof change.payload === 'object'
          ? (change.payload as Partial<UserPreferences>)
          : {};
      return {
        state: { ...state, userPreferences: { ...state.userPreferences, ...patch } },
        damagedStreak: true,
      };
    }
  }
}

/** Apply every change in order, accumulating into one final state. */
export function applyAll(
  state: SettingsState,
  changes: readonly CooldownPendingChange[],
): ApplyResult {
  let current = state;
  let damaged = false;
  for (const change of changes) {
    const result = applyChange(current, change);
    current = result.state;
    if (result.damagedStreak) damaged = true;
  }
  return { state: current, damagedStreak: damaged };
}
