// LeetLock background service worker.
//
// Owns blocking decisions, declarativeNetRequest rule reconciliation, unlock
// tokens, and alarms. The MV3 service worker is ephemeral (terminated after
// ~30s idle), so all durable state lives in chrome.storage and time-based work
// is driven by chrome.alarms plus reconciliation on every wake.
//
// Implemented from Phase 5 onward.
chrome.runtime.onInstalled.addListener(() => {
  console.info('[LeetLock] service worker installed');
});

export {};
