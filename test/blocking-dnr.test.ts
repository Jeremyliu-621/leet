import { describe, it, expect } from 'vitest';
import { buildDynamicRules } from '../src/lib/blocking/dnr';
import type { BlockRule, KeywordRule } from '../src/lib/types';

const CHALLENGE = 'chrome-extension://fakeid/src/pages/challenge/index.html';

function domainRule(pattern: string, enabled = true): BlockRule {
  return { id: `b-${pattern}`, kind: 'domain', pattern, enabled, createdAt: 0 };
}
function urlRule(pattern: string, enabled = true): BlockRule {
  return { id: `u-${pattern}`, kind: 'url', pattern, enabled, createdAt: 0 };
}
function keywordRule(keyword: string, enabled = true): KeywordRule {
  return { id: `k-${keyword}`, keyword, enabled, createdAt: 0 };
}

function build(opts: {
  block?: BlockRule[];
  keyword?: KeywordRule[];
  unlocked?: string[];
}) {
  return buildDynamicRules({
    blockRules: opts.block ?? [],
    keywordRules: opts.keyword ?? [],
    unlockedDomains: new Set(opts.unlocked ?? []),
    challengeUrl: CHALLENGE,
  });
}

describe('buildDynamicRules', () => {
  it('produces one rule per enabled block rule plus one per enabled keyword', () => {
    const rules = build({
      block: [domainRule('youtube.com'), domainRule('reddit.com')],
      keyword: [keywordRule('shorts')],
    });
    expect(rules).toHaveLength(3);
  });

  it('assigns sequential ids starting at 1', () => {
    const rules = build({ block: [domainRule('a.com'), domainRule('b.com')] });
    expect(rules.map((r) => r.id)).toEqual([1, 2]);
  });

  it('skips disabled rules and empty patterns', () => {
    const rules = build({
      block: [domainRule('youtube.com', false), domainRule('')],
      keyword: [keywordRule('', true), keywordRule(' ', true)],
    });
    expect(rules).toHaveLength(0);
  });

  it('skips a domain rule when that domain has an active unlock', () => {
    const rules = build({
      block: [domainRule('youtube.com'), domainRule('reddit.com')],
      unlocked: ['youtube.com'],
    });
    expect(rules).toHaveLength(1);
    // The surviving rule's regex must reference reddit.com.
    expect(rules[0]?.condition.regexFilter).toContain('reddit\\.com');
  });

  it('keeps keyword rules even when a domain is unlocked', () => {
    const rules = build({
      block: [domainRule('youtube.com')],
      keyword: [keywordRule('shorts')],
      unlocked: ['youtube.com'],
    });
    expect(rules).toHaveLength(1);
    expect(rules[0]?.condition.regexFilter).toContain('shorts');
  });

  it('skips a block-domain rule when an unlocked domain is its subdomain', () => {
    // User blocks "youtube.com" but lands on "www.youtube.com" — the token is
    // for the subdomain; the rule for the root must still be skipped.
    const rules = build({
      block: [domainRule('youtube.com')],
      unlocked: ['www.youtube.com'],
    });
    expect(rules).toHaveLength(0);
  });

  it('skips a block-domain rule when the unlocked domain is its parent', () => {
    const rules = build({
      block: [domainRule('m.youtube.com')],
      unlocked: ['youtube.com'],
    });
    expect(rules).toHaveLength(0);
  });

  it('does NOT skip a block-domain rule for an unrelated unlock', () => {
    const rules = build({
      block: [domainRule('youtube.com')],
      unlocked: ['reddit.com'],
    });
    expect(rules).toHaveLength(1);
  });

  it('keyword rule excludes unlocked domains AND their parent', () => {
    const rules = build({
      keyword: [keywordRule('instagram')],
      unlocked: ['www.instagram.com'],
    });
    expect(rules).toHaveLength(1);
    const excluded = rules[0]?.condition.excludedRequestDomains ?? [];
    expect(excluded).toEqual(expect.arrayContaining(['www.instagram.com', 'instagram.com']));
  });

  it('keyword rule omits excludedRequestDomains when nothing is unlocked', () => {
    const rules = build({ keyword: [keywordRule('shorts')] });
    expect(rules[0]?.condition.excludedRequestDomains).toBeUndefined();
  });

  it('expanded excluded domains do not collapse 2-part hosts into a TLD', () => {
    const rules = build({
      keyword: [keywordRule('foo')],
      unlocked: ['example.com'],
    });
    const excluded = rules[0]?.condition.excludedRequestDomains ?? [];
    expect(excluded).toEqual(['example.com']); // not also "com"
  });

  it('builds a domain regex that matches the host and its subdomains', () => {
    const [rule] = build({ block: [domainRule('youtube.com')] });
    const regex = new RegExp(rule!.condition.regexFilter!);
    expect(regex.test('https://youtube.com/')).toBe(true);
    expect(regex.test('https://m.youtube.com/watch?v=1')).toBe(true);
    expect(regex.test('http://youtube.com:8080/')).toBe(true);
    expect(regex.test('https://notyoutube.com/')).toBe(false);
    expect(regex.test('https://youtube.com.evil.example/')).toBe(false);
  });

  it('builds a URL-prefix regex that matches starts-with', () => {
    const [rule] = build({ block: [urlRule('https://x.com/explore')] });
    const regex = new RegExp(rule!.condition.regexFilter!);
    expect(regex.test('https://x.com/explore')).toBe(true);
    expect(regex.test('https://x.com/explore/foo?q=1')).toBe(true);
    expect(regex.test('https://x.com/home')).toBe(false);
  });

  it('builds a keyword regex that matches anywhere in an http(s) URL', () => {
    const [rule] = build({ keyword: [keywordRule('shorts')] });
    const regex = new RegExp(rule!.condition.regexFilter!);
    expect(regex.test('https://youtube.com/shorts/abc')).toBe(true);
    expect(regex.test('http://example.com/feed/shorts')).toBe(true);
    expect(regex.test('chrome://extensions')).toBe(false);
  });

  it('sets the redirect substitution to the challenge URL with ?target=\\0', () => {
    const [rule] = build({ block: [domainRule('youtube.com')] });
    expect(rule!.action.type).toBe('redirect');
    expect(rule!.action.redirect?.regexSubstitution).toBe(`${CHALLENGE}?target=\\0`);
  });

  it('restricts matches to main_frame resources', () => {
    const [rule] = build({ block: [domainRule('youtube.com')] });
    expect(rule!.condition.resourceTypes).toEqual(['main_frame']);
  });

  it('produces zero rules when all block and keyword lists are empty', () => {
    expect(build({})).toHaveLength(0);
  });

  it('skips domain rules whose normalised host is empty', () => {
    const rules = build({ block: [domainRule('')] });
    expect(rules).toHaveLength(0);
  });

  it('expandUnlockedDomains: single-part host (localhost) is not collapsed further', () => {
    const rules = build({ block: [domainRule('localhost')], unlocked: ['localhost'] });
    // Domain is in the unlock set → rule is skipped
    expect(rules).toHaveLength(0);
  });

  it('skips keyword rules whose keyword is blank after trimming', () => {
    const rules = build({ keyword: [keywordRule('   ')] });
    expect(rules).toHaveLength(0);
  });
});
