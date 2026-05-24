import type { BlockRule, KeywordRule } from '../types';

// declarativeNetRequest dynamic-rule construction.
//
// Each block / keyword rule becomes a single DNR rule that REDIRECTS the
// matching main-frame navigation to the challenge page, embedding the original
// URL in `?target=<encoded>` via regex substitution. The set is rebuilt from
// scratch on every reconcile — DNR rule ids are assigned sequentially here, so
// they have no meaning outside one build.

/** Path within the extension to the challenge page. */
const CHALLENGE_PAGE_PATH = 'src/pages/challenge/index.html';

/** Chrome's documented limit for dynamic rules in MV3 (kept comfortably below). */
export const MAX_DYNAMIC_RULES = 4900;

/** Resolves the absolute extension URL of the challenge page. */
export function challengePageUrl(): string {
  return chrome.runtime.getURL(CHALLENGE_PAGE_PATH);
}

/** Escapes a literal string for safe inclusion inside a regular expression. */
function escapeRegex(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Normalises a domain pattern (strip protocol + leading dot, lowercase). */
function normaliseDomain(pattern: string): string {
  return pattern.toLowerCase().replace(/^https?:\/\//, '').replace(/^\./, '');
}

/** Builds the redirect substitution that carries the original URL through. */
function makeRedirect(challengeUrl: string): chrome.declarativeNetRequest.Rule['action']['redirect'] {
  return { regexSubstitution: `${challengeUrl}?target=\\0` };
}

function domainRule(id: number, host: string, challengeUrl: string): chrome.declarativeNetRequest.Rule {
  const safe = escapeRegex(host);
  // ^https?://(any.subdomain.)?<host>(end-of-host[:/?#] or eos)
  const regexFilter = `^https?://(?:[^/]+\\.)?${safe}(?:[:/?#].*)?$`;
  return {
    id,
    priority: 1,
    action: { type: 'redirect', redirect: makeRedirect(challengeUrl) },
    condition: {
      regexFilter,
      resourceTypes: ['main_frame'],
      isUrlFilterCaseSensitive: false,
    },
  } as chrome.declarativeNetRequest.Rule;
}

function urlRule(id: number, prefix: string, challengeUrl: string): chrome.declarativeNetRequest.Rule {
  const safe = escapeRegex(prefix);
  const regexFilter = `^${safe}.*$`;
  return {
    id,
    priority: 1,
    action: { type: 'redirect', redirect: makeRedirect(challengeUrl) },
    condition: {
      regexFilter,
      resourceTypes: ['main_frame'],
      isUrlFilterCaseSensitive: false,
    },
  } as chrome.declarativeNetRequest.Rule;
}

function keywordRule(
  id: number,
  keyword: string,
  challengeUrl: string,
  excludedRequestDomains: readonly string[],
): chrome.declarativeNetRequest.Rule {
  const safe = escapeRegex(keyword);
  // ^https?://(anything not whitespace)*<keyword>(anything not whitespace)*$
  const regexFilter = `^https?://[^\\s]*${safe}[^\\s]*$`;
  const condition: Record<string, unknown> = {
    regexFilter,
    resourceTypes: ['main_frame'],
    isUrlFilterCaseSensitive: false,
  };
  if (excludedRequestDomains.length > 0) {
    condition['excludedRequestDomains'] = [...excludedRequestDomains];
  }
  return {
    id,
    priority: 1,
    action: { type: 'redirect', redirect: makeRedirect(challengeUrl) },
    condition,
  } as chrome.declarativeNetRequest.Rule;
}

/**
 * True if rule `host` and any of `unlockedDomains` are in the same domain
 * family — either equal, or one is a subdomain of the other. This catches
 * the common case of blocking `youtube.com` while the user lands on
 * `www.youtube.com` and earns an unlock for that subdomain.
 */
function isInDomainFamily(host: string, unlockedDomains: ReadonlySet<string>): boolean {
  const h = host.toLowerCase();
  for (const raw of unlockedDomains) {
    const d = raw.toLowerCase();
    if (d === h) return true;
    if (d.endsWith('.' + h)) return true; // unlocked is a subdomain of host
    if (h.endsWith('.' + d)) return true; // host is a subdomain of unlocked
  }
  return false;
}

/**
 * Expands the unlocked-domain set so DNR `excludedRequestDomains` covers both
 * the exact host and its parent (stripping the leftmost subdomain). Chrome's
 * `excludedRequestDomains` "matches subdomains as well", so adding the parent
 * also covers root-domain navigations. The 3+-part guard avoids collapsing
 * `example.com` into the bogus parent `com`.
 */
function expandUnlockedDomains(domains: ReadonlySet<string>): string[] {
  const out = new Set<string>();
  for (const raw of domains) {
    const host = raw.toLowerCase();
    out.add(host);
    const parts = host.split('.');
    if (parts.length > 2) {
      out.add(parts.slice(1).join('.'));
    }
  }
  return [...out];
}

export interface BuildRulesInput {
  blockRules: readonly BlockRule[];
  keywordRules: readonly KeywordRule[];
  /** Lowercase hosts that currently have an active unlock token. */
  unlockedDomains: ReadonlySet<string>;
  /** Absolute extension URL of the challenge page. */
  challengeUrl: string;
}

/**
 * Build the full DNR dynamic-rule set from current state. Pure — easy to test
 * and to reason about. A domain or URL rule is skipped when its host has an
 * active unlock. Keyword rules are not tied to a single host and are always
 * applied (a user who wants a keyword exempted should disable that keyword).
 */
export function buildDynamicRules(input: BuildRulesInput): chrome.declarativeNetRequest.Rule[] {
  const out: chrome.declarativeNetRequest.Rule[] = [];
  let nextId = 1;
  const excludedForKeywords = expandUnlockedDomains(input.unlockedDomains);

  for (const rule of input.blockRules) {
    if (out.length >= MAX_DYNAMIC_RULES) break;
    if (!rule.enabled) continue;
    if (rule.kind === 'domain') {
      const host = normaliseDomain(rule.pattern);
      if (host.length === 0) continue;
      if (isInDomainFamily(host, input.unlockedDomains)) continue;
      out.push(domainRule(nextId++, host, input.challengeUrl));
    } else {
      const prefix = rule.pattern;
      if (prefix.length === 0) continue;
      let host: string | null = null;
      try {
        host = new URL(prefix).hostname.toLowerCase();
      } catch {
        host = null;
      }
      if (host !== null && isInDomainFamily(host, input.unlockedDomains)) continue;
      out.push(urlRule(nextId++, prefix, input.challengeUrl));
    }
  }

  for (const rule of input.keywordRules) {
    if (out.length >= MAX_DYNAMIC_RULES) break;
    if (!rule.enabled) continue;
    const keyword = rule.keyword.trim();
    if (keyword.length === 0) continue;
    out.push(keywordRule(nextId++, keyword, input.challengeUrl, excludedForKeywords));
  }

  return out;
}
