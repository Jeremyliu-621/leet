import type { UnlockToken } from '../types';

// Runtime messages exchanged via chrome.runtime.sendMessage / onMessage,
// between the challenge page / content script / popup and the service worker.
//
// Every type is namespaced with a "leetmeow/" prefix so the message handler
// can ignore traffic from unrelated extensions or page injections.

/** Sent by the challenge page when the user has solved a problem. */
export interface GrantUnlockRequest {
  type: 'leetmeow/grant-unlock';
  domain: string;
  problemId: string;
  /** Length of the unlock to grant, in milliseconds. */
  durationMs: number;
  /** Wall-clock time the user spent on the challenge, ms; optional. */
  solveDurationMs?: number;
  /** Number of failed submissions before the passing one; optional. */
  attempts?: number;
  /** The language the user solved in; validated by the SW before persisting. */
  language?: string;
  /**
   * Whether to actually unlock the site. Defaults to `true`. When `false`, the
   * solve is still recorded (streak + stats credit) but no unlock token is
   * created — used when the user solves but then chooses to keep practicing or
   * back out at the post-solve confirmation gate instead of entering the site.
   */
  grantAccess?: boolean;
}

export interface GrantUnlockResponse {
  ok: true;
  /** The minted unlock token; omitted when `grantAccess` was `false`. */
  token?: UnlockToken;
}

export type ChallengeFailureReason = 'timeout' | 'gave-up' | 'attempts-exhausted';

/** Sent by the challenge page when the user has failed or abandoned. */
export interface FailChallengeRequest {
  type: 'leetmeow/fail-challenge';
  domain: string;
  reason: ChallengeFailureReason;
  failureAction: 'close' | 'redirect';
  /** Used when failureAction is "redirect". */
  redirectUrl?: string;
  /** The original blocked URL; passed to the blocked page so it can offer a retry. */
  targetUrl?: string;
  /** The challenge tab id; the SW closes or redirects it as configured. */
  tabId?: number;
}

export interface FailChallengeResponse {
  ok: true;
}

/**
 * Sent by the content script when SPA navigation lands on a blocked URL that
 * declarativeNetRequest could not catch (no network request was made).
 */
export interface OpenChallengeRequest {
  type: 'leetmeow/open-challenge';
  blockedUrl: string;
  tabId?: number;
}

export interface OpenChallengeResponse {
  ok: true;
}

/** Discriminated union of every runtime message LeetMeow sends. */
export type RuntimeMessage =
  | GrantUnlockRequest
  | FailChallengeRequest
  | OpenChallengeRequest;

/** Discriminated union of every runtime response LeetMeow returns. */
export type RuntimeResponse =
  | GrantUnlockResponse
  | FailChallengeResponse
  | OpenChallengeResponse
  | { ok: false; error: string };
