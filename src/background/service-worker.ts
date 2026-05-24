import { getValue, setValue } from '../lib/storage/store';
import { matchUrl } from '../lib/blocking/matcher';
import {
  activeDomains,
  createToken,
  pruneTokens,
  upsertToken,
} from '../lib/unlock/tokens';
import { recordFail, recordSolve } from '../lib/streak/streak';
import { RECONCILE_ALARM, reconcile } from './reconcile';
import type { SolvedProblemRecord, UnlockToken } from '../lib/types';
import type {
  FailChallengeRequest,
  GrantUnlockRequest,
  OpenChallengeRequest,
  RuntimeMessage,
  RuntimeResponse,
} from '../lib/messaging/runtime';

// LeetLock background service worker — a thin shell of event listeners that
// delegate all decision-making to `reconcile()` (see `./reconcile.ts`) and the
// message handlers below. The SW is ephemeral (Chrome terminates it after
// ~30 s idle), so no state lives at module scope.

const HISTORY_REDIRECT_DEBOUNCE_MS = 750;
/** Cap on persisted solve records to keep storage.local bounded. */
const MAX_SOLVED_HISTORY = 1000;

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
