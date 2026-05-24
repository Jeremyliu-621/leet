import { getValue, setValue } from '../lib/storage/store';
import { buildDynamicRules, challengePageUrl } from '../lib/blocking/dnr';
import { matchUrl } from '../lib/blocking/matcher';
import {
  activeDomains,
  createToken,
  nextExpiry,
  pruneTokens,
  upsertToken,
} from '../lib/unlock/tokens';
import { nextApply, pickApplicable } from '../lib/cooldown/cooldown';
import { applyAll } from '../lib/cooldown/apply';
import { damageStreak, recordFail, recordSolve } from '../lib/streak/streak';
import type { SolvedProblemRecord, UnlockToken } from '../lib/types';
import type {
  FailChallengeRequest,
  GrantUnlockRequest,
  OpenChallengeRequest,
  RuntimeMessage,
  RuntimeResponse,
} from '../lib/messaging/runtime';

// LeetLock background service worker.
//
// Owns all blocking decisions. The MV3 service worker is ephemeral (Chrome
// terminates it after ~30 s idle), so:
//   * all state lives in chrome.storage, never in module-level variables;
//   * `reconcile()` is the single function that brings live DNR rules and the
//     next alarm into agreement with current storage; it is called on every
//     wake, on every storage change, and on every alarm — idempotent.

const RECONCILE_ALARM = 'leetlock/reconcile';
const HISTORY_REDIRECT_DEBOUNCE_MS = 750;
/** Cap on persisted solve records to keep storage.local bounded. */
const MAX_SOLVED_HISTORY = 1000;

// --- Reconciliation -------------------------------------------------------

async function reconcile(): Promise<void> {
  const now = Date.now();

  // 1. Apply any pending cooldown-deferred settings changes whose timer has
  //    elapsed; this may mutate blockedRules / keywordRules / userPreferences.
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
  const unlockedDomains = activeDomains(pruned, now);
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

  // 5. Schedule the next alarm at the earliest of any token expiry and any
  //    upcoming pending-change apply time.
  const nextTokenExpiry = nextExpiry(pruned, now);
  const nextPendingApply = nextApply(pending, now);
  const nextWake = earliest(nextTokenExpiry, nextPendingApply);
  if (nextWake !== null) {
    chrome.alarms.create(RECONCILE_ALARM, { when: nextWake });
  } else {
    await chrome.alarms.clear(RECONCILE_ALARM);
  }
}

function earliest(a: number | null, b: number | null): number | null {
  if (a === null) return b;
  if (b === null) return a;
  return Math.min(a, b);
}

async function applyPendingChanges(now: number): Promise<void> {
  const pending = await getValue('cooldownPendingChanges');
  const applicable = pickApplicable(pending, now);
  if (applicable.length === 0) return;

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

// --- Runtime message handlers --------------------------------------------

function isRuntimeMessage(value: unknown): value is RuntimeMessage {
  if (value === null || typeof value !== 'object') return false;
  const type = (value as { type?: unknown }).type;
  return typeof type === 'string' && type.startsWith('leetlock/');
}

async function handleMessage(
  message: RuntimeMessage,
  sender: chrome.runtime.MessageSender,
): Promise<RuntimeResponse> {
  switch (message.type) {
    case 'leetlock/grant-unlock':
      return grantUnlock(message);
    case 'leetlock/fail-challenge':
      return failChallenge(message, sender);
    case 'leetlock/open-challenge':
      return openChallenge(message, sender);
  }
}

async function grantUnlock(request: GrantUnlockRequest): Promise<RuntimeResponse> {
  const now = Date.now();
  const token: UnlockToken = createToken({
    domain: request.domain,
    problemId: request.problemId,
    durationMs: request.durationMs,
    now,
  });
  const [tokens, solvedHistory, streakSummary, streakHistory] = await Promise.all([
    getValue('unlockTokens'),
    getValue('solvedProblems'),
    getValue('streakSummary'),
    getValue('streakHistory'),
  ]);
  const record: SolvedProblemRecord = {
    problemId: request.problemId,
    solvedAt: now,
    durationMs: request.solveDurationMs ?? 0,
    attempts: request.attempts ?? 0,
    language: 'javascript',
    domain: token.domain,
  };
  const nextSolved = [...solvedHistory, record].slice(-MAX_SOLVED_HISTORY);
  const streak = recordSolve(streakSummary, streakHistory, { at: new Date(now) });
  await Promise.all([
    setValue('unlockTokens', upsertToken(tokens, token, now)),
    setValue('solvedProblems', nextSolved),
    setValue('streakSummary', streak.summary),
    setValue('streakHistory', streak.history),
  ]);
  // storage.onChanged triggers reconcile(); the DNR rule for the unlocked
  // domain disappears before this response returns to the caller.
  return { ok: true, token };
}

async function failChallenge(
  request: FailChallengeRequest,
  sender: chrome.runtime.MessageSender,
): Promise<RuntimeResponse> {
  const tabId = request.tabId ?? sender.tab?.id;
  if (tabId === undefined) {
    return { ok: false, error: 'no-tab-id' };
  }

  // Streak first — recording a fail flags damaged for today. Done before the
  // tab action so a same-tick redirect doesn't race the write.
  const [streakSummary, streakHistory] = await Promise.all([
    getValue('streakSummary'),
    getValue('streakHistory'),
  ]);
  const streak = recordFail(streakSummary, streakHistory);
  await Promise.all([
    setValue('streakSummary', streak.summary),
    setValue('streakHistory', streak.history),
  ]);

  if (request.failureAction === 'close') {
    try {
      await chrome.tabs.remove(tabId);
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : 'tab-remove-failed' };
    }
    return { ok: true };
  }
  const url =
    request.redirectUrl && request.redirectUrl.trim().length > 0
      ? request.redirectUrl
      : chrome.runtime.getURL('src/pages/blocked/index.html');
  await chrome.tabs.update(tabId, { url });
  return { ok: true };
}

async function openChallenge(
  request: OpenChallengeRequest,
  sender: chrome.runtime.MessageSender,
): Promise<RuntimeResponse> {
  const tabId = request.tabId ?? sender.tab?.id;
  if (tabId === undefined) {
    return { ok: false, error: 'no-tab-id' };
  }

  // Re-check: an unlock may have been granted between detection and this
  // message, in which case we should not redirect.
  const [blockRules, keywordRules, tokens] = await Promise.all([
    getValue('blockedRules'),
    getValue('keywordRules'),
    getValue('unlockTokens'),
  ]);
  const now = Date.now();
  const unlocked = activeDomains(pruneTokens(tokens, now), now);
  const match = matchUrl(request.blockedUrl, { blockRules, keywordRules });
  if (match === null || unlocked.has(match.domain)) {
    return { ok: true };
  }

  const challengeUrl = `${chrome.runtime.getURL('src/pages/challenge/index.html')}?target=${encodeURIComponent(request.blockedUrl)}`;
  await chrome.tabs.update(tabId, { url: challengeUrl });
  return { ok: true };
}

// --- webNavigation: catch SPA history-state changes ----------------------
//
// declarativeNetRequest only fires for network requests. Sites like YouTube
// transition between routes entirely client-side. The webNavigation API fires
// onHistoryStateUpdated for those transitions; we re-evaluate the URL ourselves
// and redirect the tab if it now matches.

const recentRedirects = new Map<number, { url: string; at: number }>();

chrome.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
  if (details.frameId !== 0) return; // top frame only

  const last = recentRedirects.get(details.tabId);
  const now = Date.now();
  if (last && last.url === details.url && now - last.at < HISTORY_REDIRECT_DEBOUNCE_MS) {
    return;
  }

  const [blockRules, keywordRules, tokens] = await Promise.all([
    getValue('blockedRules'),
    getValue('keywordRules'),
    getValue('unlockTokens'),
  ]);
  const unlocked = activeDomains(pruneTokens(tokens, now), now);
  const match = matchUrl(details.url, { blockRules, keywordRules });
  if (match === null || unlocked.has(match.domain)) return;

  recentRedirects.set(details.tabId, { url: details.url, at: now });
  const challengeUrl = `${chrome.runtime.getURL('src/pages/challenge/index.html')}?target=${encodeURIComponent(details.url)}`;
  await chrome.tabs.update(details.tabId, { url: challengeUrl });
});

chrome.tabs.onRemoved.addListener((tabId) => {
  recentRedirects.delete(tabId);
});

// --- Lifecycle wiring -----------------------------------------------------

chrome.runtime.onInstalled.addListener(() => {
  console.info('[LeetLock] installed / updated');
  void reconcile();
});

chrome.runtime.onStartup.addListener(() => {
  void reconcile();
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === RECONCILE_ALARM) {
    void reconcile();
  }
});

chrome.storage.onChanged.addListener((changes, _area) => {
  const triggers = [
    'blockedRules',
    'keywordRules',
    'unlockTokens',
    'cooldownPendingChanges',
    'userPreferences',
  ];
  if (triggers.some((key) => Object.prototype.hasOwnProperty.call(changes, key))) {
    void reconcile();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!isRuntimeMessage(message)) {
    return false;
  }
  handleMessage(message, sender)
    .then(sendResponse)
    .catch((err: unknown) => {
      sendResponse({ ok: false, error: err instanceof Error ? err.message : String(err) });
    });
  return true;
});

// Bring DNR + alarm into agreement on every SW wake.
void reconcile();
