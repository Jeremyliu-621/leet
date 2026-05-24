// LeetLock content script — runs at document_start on every http/https top
// frame. Its job is to catch single-page-app navigations that fire no network
// request (e.g. youtube.com -> youtube.com/shorts), which declarativeNetRequest
// alone cannot see.
//
// On any pushState / replaceState / popstate, it tells the service worker the
// new URL; the service worker re-evaluates against the current rule + unlock
// state and redirects the tab if needed. The service worker is also subscribed
// to chrome.webNavigation.onHistoryStateUpdated, so this is a belt-and-braces
// signal — duplicate messages are de-duplicated below and on the worker side.

const DEDUPE_WINDOW_MS = 500;
const lastSent = { url: '', at: 0 };

function notify(url: string): void {
  const now = Date.now();
  if (url === lastSent.url && now - lastSent.at < DEDUPE_WINDOW_MS) {
    return;
  }
  lastSent.url = url;
  lastSent.at = now;
  try {
    chrome.runtime.sendMessage({ type: 'leetlock/open-challenge', blockedUrl: url });
  } catch {
    // Service worker may be momentarily unavailable (just-restarted) — drop.
  }
}

interface HookFlag {
  __leetlockHistoryHooked?: boolean;
}

function hookHistory(): void {
  const win = window as unknown as Window & HookFlag;
  if (win.__leetlockHistoryHooked) {
    return;
  }
  win.__leetlockHistoryHooked = true;

  const originalPush = history.pushState.bind(history);
  const originalReplace = history.replaceState.bind(history);

  history.pushState = function patchedPush(...args: Parameters<typeof history.pushState>) {
    const result = originalPush(...args);
    notify(location.href);
    return result;
  };

  history.replaceState = function patchedReplace(...args: Parameters<typeof history.replaceState>) {
    const result = originalReplace(...args);
    notify(location.href);
    return result;
  };
}

window.addEventListener('popstate', () => notify(location.href));
hookHistory();

// First check, covering pages where the SPA shell loaded before this script ran.
notify(location.href);

export {};
