// LeetLock content script — runs at document_start on every http/https page.
//
// Phase 5 implements: detect single-page-app route changes on blocked sites
// (e.g. youtube.com -> youtube.com/shorts) that fire no network request and so
// are invisible to declarativeNetRequest, and ask the service worker to
// redirect the tab to the challenge page.

export {};
