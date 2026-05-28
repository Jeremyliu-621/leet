import type { UnlockToken } from '../types';

// Runtime messages exchanged via chrome.runtime.sendMessage / onMessage,
// between the challenge page / content script / popup and the service worker.
//
// Every type is namespaced with a "leetlock/" prefix so the message handler
// can ignore traffic from unrelated extensions or page injections.

/** Sent by the challenge page when the user has solved a problem. */
export interface GrantUnlockRequest {
  type: 'leetlock/grant-unlock';
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
}

export interface GrantUnlockResponse {
  ok: true;
  token: UnlockToken;
}

export type ChallengeFailureReason = 'timeout' | 'gave-up' | 'attempts-exhausted';

/** Sent by the challenge page when the user has failed or abandoned. */
export interface FailChallengeRequest {
  type: 'leetlock/fail-challenge';
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
  type: 'leetlock/open-challenge';
  blockedUrl: string;
  tabId?: number;
}

export interface OpenChallengeResponse {
  ok: true;
}

/** Discriminated union of every runtime message LeetLock sends. */
export type RuntimeMessage =
  | GrantUnlockRequest
  | FailChallengeRequest
  | OpenChallengeRequest;

/** Discriminated union of every runtime response LeetLock returns. */
export type RuntimeResponse =
  | GrantUnlockResponse
  | FailChallengeResponse
  | OpenChallengeResponse
  | { ok: false; error: string };
