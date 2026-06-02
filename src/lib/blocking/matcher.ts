import type { BlockRule, KeywordRule } from '../types';

/** Why an URL was matched, surfaced to UI for explanation/debugging. */
export type MatchKind = 'block-domain' | 'block-url' | 'keyword';

export interface BlockMatch {
  ruleId: string;
  ruleKind: MatchKind;
  /** The pattern from the rule that matched, for display. */
  pattern: string;
  /** The host extracted from the URL, used as the unlock-token key. */
  domain: string;
}

export interface RuleSet {
  blockRules: readonly BlockRule[];
  keywordRules: readonly KeywordRule[];
}

/** Extracts the lowercase hostname; returns null for non-http(s) URLs or junk. */
export function extractDomain(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }
    return parsed.hostname.toLowerCase();
  } catch {
    return null;
  }
}

/** True if `host` equals `pattern` or is a sub-domain of it. */
function hostMatches(host: string, pattern: string): boolean {
  const h = host.toLowerCase();
  const p = pattern.toLowerCase().replace(/^\./, '').replace(/^https?:\/\//, '');
  if (p.length === 0) return false;
  return h === p || h.endsWith('.' + p);
}

/**
 * Finds the first matching rule for a URL, or null. Rules are evaluated in
 * a deterministic order: URL-prefix blocks → domain blocks → keyword rules.
 */
export function matchUrl(url: string, rules: RuleSet): BlockMatch | null {
  const domain = extractDomain(url);
  if (domain === null) {
    return null;
  }

  const lowerUrl = url.toLowerCase();

  for (const rule of rules.blockRules) {
    if (!rule.enabled) continue;
    if (rule.kind === 'url' && rule.pattern.length > 0 && lowerUrl.startsWith(rule.pattern.toLowerCase())) {
      return { ruleId: rule.id, ruleKind: 'block-url', pattern: rule.pattern, domain };
    }
  }

  for (const rule of rules.blockRules) {
    if (!rule.enabled) continue;
    if (rule.kind === 'domain' && hostMatches(domain, rule.pattern)) {
      return { ruleId: rule.id, ruleKind: 'block-domain', pattern: rule.pattern, domain };
    }
  }

  for (const rule of rules.keywordRules) {
    if (!rule.enabled) continue;
    const keyword = rule.keyword.toLowerCase().trim();
    if (keyword.length > 0 && lowerUrl.includes(keyword)) {
      return { ruleId: rule.id, ruleKind: 'keyword', pattern: rule.keyword, domain };
    }
  }

  return null;
}
