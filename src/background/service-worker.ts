import { getValue, setValue } from '../lib/storage/store';
import { matchUrl } from '../lib/blocking/matcher';
import {
  activeDomains,
  createToken,
  upsertToken,
} from '../lib/unlock/tokens';
import { recordFail, recordSolve } from '../lib/streak/streak';
import { RECONCILE_ALARM, reconcile } from './reconcile';
import type { SolvedProblemRecord, UnlockToken } from '../lib/types';
import { isSupportedLanguage } from '../lib/types';
import type {
  FailChallengeRequest,
  GrantUnlockRequest,
  OpenChallengeRequest,
  RuntimeMessage,
  RuntimeResponse,
} from '../lib/messaging/runtime';

// LeetMeow background service worker — a thin shell of event listeners that
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
  return typeof type === 'string' && type.startsWith('leetmeow/');
}

async function handleMessage(
  message: RuntimeMessage,
  sender: chrome.runtime.MessageSender,
): Promise<RuntimeResponse> {
  switch (message.type) {
    case 'leetmeow/grant-unlock':
      return grantUnlock(message);
    case 'leetmeow/fail-challenge':
      return failChallenge(message, sender);
    case 'leetmeow/open-challenge':
      return openChallenge(message, sender);
  }
}

async function grantUnlock(request: GrantUnlockRequest): Promise<RuntimeResponse> {
  const now = Date.now();
  // Default true: a missing flag means "solved and entering the site", the
  // original behaviour. `false` records the solve without unlocking — the user
  // solved but chose to keep practicing / back out at the confirmation gate.
  const grantAccess = request.grantAccess !== false;
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
    language: isSupportedLanguage(request.language) ? request.language : 'javascript',
    domain: request.domain,
  };
  const nextSolved = [...solvedHistory, record].slice(-MAX_SOLVED_HISTORY);
  const streak = recordSolve(streakSummary, streakHistory, { at: new Date(now) });

  // The solve always earns streak + stats credit, regardless of whether the
  // user enters the site.
  const writes: Array<Promise<void>> = [
    setValue('solvedProblems', nextSolved),
    setValue('streakSummary', streak.summary),
    setValue('streakHistory', streak.history),
  ];

  let token: UnlockToken | undefined;
  if (grantAccess) {
    token = createToken({
      domain: request.domain,
      problemId: request.problemId,
      durationMs: request.durationMs,
      now,
    });
    writes.push(setValue('unlockTokens', upsertToken(tokens, token, now)));
  }
  await Promise.all(writes);

  if (grantAccess) {
    // Critical: synchronously reconcile here so the DNR rule for the unlocked
    // domain is definitively removed before the caller (the challenge page)
    // navigates to the target URL. Without this await, the storage.onChanged
    // -> reconcile() path is async and the challenge page's navigation races
    // the stale rule, bouncing back into a fresh challenge.
    await reconcile(now);
  }
  void updateBadge(nextSolved, now);
  return token ? { ok: true, token } : { ok: true };
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
  let url: string;
  if (request.redirectUrl && request.redirectUrl.trim().length > 0) {
    url = request.redirectUrl;
  } else {
    const base = chrome.runtime.getURL('src/pages/blocked/index.html');
    const q = new URLSearchParams();
    if (request.domain) q.set('domain', request.domain);
    if (request.targetUrl) q.set('target', request.targetUrl);
    const qs = q.toString();
    url = qs ? `${base}?${qs}` : base;
  }
  await chrome.tabs.update(tabId, { url });
  return { ok: true };
}

const CHALLENGE_PAGE_PREFIX = chrome.runtime.getURL('src/pages/challenge/index.html');

async function openChallenge(
  request: OpenChallengeRequest,
  sender: chrome.runtime.MessageSender,
): Promise<RuntimeResponse> {
  const tabId = request.tabId ?? sender.tab?.id;
  if (tabId === undefined) {
    return { ok: false, error: 'no-tab-id' };
  }

  // Never yank a tab that is already showing a challenge. A SPA (e.g. YouTube)
  // can fire a second history change right as the DNR/first redirect lands,
  // delivering a late open-challenge message; redirecting again would reload
  // the challenge page, roll a fresh random problem, and wipe the user's
  // in-progress work. If the tab is already on the challenge page, the user is
  // mid-solve — leave them be.
  try {
    const tab = await chrome.tabs.get(tabId);
    const currentUrl = tab.url ?? tab.pendingUrl;
    if (currentUrl && currentUrl.startsWith(CHALLENGE_PAGE_PREFIX)) {
      return { ok: true };
    }
  } catch {
    // Tab gone — fall through; the chrome.tabs.update below will fail safely.
  }

  // Debounce repeat redirects of the same tab to the same target (shared with
  // the onHistoryStateUpdated path) so duplicate/near-simultaneous signals
  // don't double-navigate.
  const now = Date.now();
  const last = recentRedirects.get(tabId);
  if (last && last.url === request.blockedUrl && now - last.at < HISTORY_REDIRECT_DEBOUNCE_MS) {
    return { ok: true };
  }

  // Re-check: an unlock may have been granted between detection and this
  // message, in which case we should not redirect.
  const [blockRules, keywordRules, tokens] = await Promise.all([
    getValue('blockedRules'),
    getValue('keywordRules'),
    getValue('unlockTokens'),
  ]);
  const unlocked = activeDomains(tokens, now);
  const match = matchUrl(request.blockedUrl, { blockRules, keywordRules });
  if (match === null || unlocked.has(match.domain)) {
    return { ok: true };
  }

  recentRedirects.set(tabId, { url: request.blockedUrl, at: now });
  const challengeUrl = `${CHALLENGE_PAGE_PREFIX}?target=${encodeURIComponent(request.blockedUrl)}`;
  await chrome.tabs.update(tabId, { url: challengeUrl });
  return { ok: true };
}

// --- Badge: show today's solve count on the extension icon ---------------

async function updateBadge(
  solved: readonly SolvedProblemRecord[] = [],
  now = Date.now(),
): Promise<void> {
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const count = solved.filter((r) => r.solvedAt >= todayStart.getTime()).length;
  const text = count > 0 ? String(count > 99 ? '99+' : count) : '';
  try {
    await chrome.action.setBadgeBackgroundColor({ color: '#4A4A4A' });
    await chrome.action.setBadgeText({ text });
  } catch {
    // Badge API unavailable (e.g. in test environments).
  }
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
  const unlocked = activeDomains(tokens, now);
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
  console.info('[LeetMeow] installed / updated');
  void reconcile();
  void getValue('solvedProblems').then((s) => updateBadge(s));
});

chrome.runtime.onStartup.addListener(() => {
  void reconcile();
  void getValue('solvedProblems').then((s) => updateBadge(s));
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
  if (Object.prototype.hasOwnProperty.call(changes, 'solvedProblems')) {
    const next = changes['solvedProblems']?.newValue as readonly SolvedProblemRecord[] | undefined;
    void updateBadge(next ?? []);
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
