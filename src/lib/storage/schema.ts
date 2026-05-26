import type {
  AccountabilityPartner,
  BlockRule,
  CooldownPendingChange,
  KeywordRule,
  SettingsLock,
  SolvedProblemRecord,
  StreakDay,
  StreakSummary,
  SubmissionRecord,
  UnlockToken,
  UserPreferences,
} from '../types';

/** The full shape of LeetLock's persisted state, keyed by storage key. */
export interface StorageSchema {
  blockedRules: BlockRule[];
  keywordRules: KeywordRule[];
  userPreferences: UserPreferences;
  settingsLock: SettingsLock;
  accountabilityPartner: AccountabilityPartner;
  cooldownPendingChanges: CooldownPendingChange[];
  streakSummary: StreakSummary;
  unlockTokens: UnlockToken[];
  solvedProblems: SolvedProblemRecord[];
  streakHistory: StreakDay[];
  /** Per-submit attempt log, capped at 500 entries (local storage only). */
  submissionHistory: SubmissionRecord[];
}

export type StorageKey = keyof StorageSchema;

export type StorageAreaName = 'sync' | 'local';

/**
 * Which chrome.storage area backs each key. Settings and rules sync across a
 * user's devices; volatile or potentially large data stays local to avoid the
 * sync write-rate and size quotas. See docs/DATA_MODEL.md.
 */
export const STORAGE_AREAS: Readonly<Record<StorageKey, StorageAreaName>> = {
  blockedRules: 'sync',
  keywordRules: 'sync',
  userPreferences: 'sync',
  settingsLock: 'sync',
  accountabilityPartner: 'sync',
  cooldownPendingChanges: 'sync',
  streakSummary: 'sync',
  unlockTokens: 'local',
  solvedProblems: 'local',
  streakHistory: 'local',
  submissionHistory: 'local',
};
