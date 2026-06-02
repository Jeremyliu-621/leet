/**
 * Pure helpers for the Options page.
 * No React, no chrome.storage — all functions are testable in Node/Vitest.
 */

import type { CooldownPendingChange, UserPreferences } from '../../lib/types';

// ---------------------------------------------------------------------------
// Time formatting
// ---------------------------------------------------------------------------

/** Formats a duration in milliseconds as a compact human string, e.g. "10m", "1h", "24h". */
export function formatCooldownMs(ms: number): string {
  if (ms <= 0) return '0m';
  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  if (totalMinutes < 60) return `${totalMinutes}m`;
  const hours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
}

/** Formats a future epoch timestamp as a countdown like "applies in 23m 14s". */
export function formatTimeUntil(appliesAt: number, now: number = Date.now()): string {
  const ms = appliesAt - now;
  if (ms <= 0) return 'applying now';
  const totalSeconds = Math.ceil(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);
  return `applies in ${parts.join(' ')}`;
}

/** Formats a unix epoch (ms) as a short local time string like "14:32" or "Yesterday". */
export function formatSyncTime(epochMs: number): string {
  const date = new Date(epochMs);
  const now = new Date();
  const diffMs = now.getTime() - epochMs;
  const diffMin = Math.floor(diffMs / 60_000);

  if (diffMin < 1) return 'just now';
  if (diffMin < 60) return `${diffMin}m ago`;

  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  // Different calendar day
  const todayStr = now.toDateString();
  const thenStr = date.toDateString();
  if (todayStr !== thenStr) {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (yesterday.toDateString() === thenStr) return 'yesterday';
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  }

  return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

/** Formats seconds as "Xm" or "Xh Ym" for time-limit display. */
export function formatTimeLimitSec(sec: number): string {
  if (sec < 60) return `${sec}s`;
  const minutes = Math.floor(sec / 60);
  const remaining = sec % 60;
  if (remaining === 0) return `${minutes}m`;
  return `${minutes}m ${remaining}s`;
}

// ---------------------------------------------------------------------------
// Cooldown / pending changes
// ---------------------------------------------------------------------------

/** Human-readable label for a CooldownChangeKind. */
export function describePendingChange(change: CooldownPendingChange): string {
  return change.description;
}

/**
 * Returns true if the given preferences change represents a "strictness-reducing"
 * action that must be deferred under strict mode.
 *
 * Used to decide at the call site whether to apply immediately or schedule.
 */
export function isReducingUnlockDuration(
  prev: UserPreferences,
  next: Partial<UserPreferences>,
): boolean {
  if (next.unlockDurationMin === undefined) return false;
  // Increasing the unlock duration is strictness-reducing (user gets more
  // browsing time per solve). Decreasing is strictness-increasing and does
  // NOT need deferral.
  return next.unlockDurationMin > prev.unlockDurationMin;
}

export function isReducingTimeLimitSec(
  prev: UserPreferences,
  next: Partial<UserPreferences>,
): boolean {
  if (next.challengeTimeLimitSec === undefined) return false;
  // Increasing the time limit is strictness-reducing (user gets more time to
  // solve). Decreasing makes it harder, which is strictness-increasing and
  // does NOT need deferral.
  return next.challengeTimeLimitSec > prev.challengeTimeLimitSec;
}

export function isIncreasingMaxAttempts(
  prev: UserPreferences,
  next: Partial<UserPreferences>,
): boolean {
  if (next.maxSubmissionAttempts === undefined) return false;
  return next.maxSubmissionAttempts > prev.maxSubmissionAttempts;
}

export function isReducingCooldownMs(
  prev: UserPreferences,
  next: Partial<UserPreferences>,
): boolean {
  if (next.settingsCooldownMs === undefined) return false;
  return next.settingsCooldownMs < prev.settingsCooldownMs;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

/** Validates a block-rule pattern string. Returns an error message or null. */
export function validateBlockPattern(pattern: string, kind: 'domain' | 'url'): string | null {
  const trimmed = pattern.trim();
  if (trimmed.length === 0) return 'Pattern cannot be empty.';

  if (kind === 'domain') {
    // Very loose hostname check — must contain at least one dot and no spaces.
    if (/\s/.test(trimmed)) return 'Domain must not contain spaces.';
    if (!trimmed.includes('.')) return 'Domain must contain at least one dot (e.g. youtube.com).';
    if (trimmed.startsWith('http')) return 'Enter just the hostname, not a full URL.';
    return null;
  }

  // kind === 'url' — must be a valid URL prefix
  try {
    new URL(trimmed);
    return null;
  } catch {
    return 'Enter a valid URL (e.g. https://reddit.com/r/all).';
  }
}

/** Validates a keyword string. Returns an error message or null. */
export function validateKeyword(keyword: string): string | null {
  const trimmed = keyword.trim();
  if (trimmed.length === 0) return 'Keyword cannot be empty.';
  if (trimmed.length > 100) return 'Keyword must be 100 characters or fewer.';
  if (/\s/.test(trimmed)) return 'Keywords must not contain spaces.';
  return null;
}

/** Validates a redirect URL. Returns an error message or null. */
export function validateRedirectUrl(url: string): string | null {
  if (url.trim().length === 0) return 'Redirect URL cannot be empty.';
  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return 'URL must start with http:// or https://';
    }
    return null;
  } catch {
    return 'Enter a valid URL (e.g. https://example.com).';
  }
}

/** Validates a new password. Returns an error message or null. */
export function validatePassword(password: string): string | null {
  if (password.length === 0) return 'Password cannot be empty.';
  if (password.length < 4) return 'Password must be at least 4 characters.';
  return null;
}

/** Returns true when two password strings match. */
export function passwordsMatch(a: string, b: string): boolean {
  return a === b && a.length > 0;
}

// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------

/** Capitalises first letter, lowercases rest. */
export function capitalise(s: string): string {
  if (s.length === 0) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/** Formats a tag name for display: replaces hyphens with spaces and capitalises. */
export function formatTag(tag: string): string {
  return tag
    .split('-')
    .map(capitalise)
    .join(' ');
}

/**
 * The cooldown preset options available in the UI.
 * Each has a label and a duration in milliseconds.
 */
export const COOLDOWN_PRESETS = [
  { label: '10 min', ms: 10 * 60 * 1000 },
  { label: '1 hour', ms: 60 * 60 * 1000 },
  { label: '24 hours', ms: 24 * 60 * 60 * 1000 },
] as const;

/** Finds the nearest preset for a given ms value, or returns null. */
export function matchCooldownPreset(ms: number): (typeof COOLDOWN_PRESETS)[number] | null {
  return COOLDOWN_PRESETS.find((p) => p.ms === ms) ?? null;
}
