import { describe, it, expect } from 'vitest';
import { extractDomain, matchUrl } from '../src/lib/blocking/matcher';
import type { BlockRule, KeywordRule } from '../src/lib/types';

function domainRule(pattern: string, enabled = true): BlockRule {
  return { id: `b-${pattern}`, kind: 'domain', pattern, enabled, createdAt: 0 };
}
function urlRule(pattern: string, enabled = true): BlockRule {
  return { id: `u-${pattern}`, kind: 'url', pattern, enabled, createdAt: 0 };
}
function keywordRule(keyword: string, enabled = true): KeywordRule {
  return { id: `k-${keyword}`, keyword, enabled, createdAt: 0 };
}

describe('extractDomain', () => {
  it('returns lowercase hostname for http(s) URLs', () => {
    expect(extractDomain('https://Youtube.com/watch')).toBe('youtube.com');
    expect(extractDomain('http://www.reddit.com/')).toBe('www.reddit.com');
  });
  it('returns null for non-http(s) or malformed URLs', () => {
    expect(extractDomain('chrome://extensions')).toBeNull();
    expect(extractDomain('ftp://example.com')).toBeNull();
    expect(extractDomain('not a url')).toBeNull();
  });
});

describe('matchUrl', () => {
  const rules = {
    blockRules: [
      domainRule('youtube.com'),
      domainRule('reddit.com'),
      urlRule('https://x.com/explore'),
      domainRule('disabled.example', false),
    ],
    keywordRules: [keywordRule('shorts'), keywordRule('SiLeNt-DiScO', true)],
  };

  it('matches a bare domain', () => {
    const m = matchUrl('https://youtube.com/', rules);
    expect(m?.ruleKind).toBe('block-domain');
    expect(m?.domain).toBe('youtube.com');
    expect(m?.pattern).toBe('youtube.com');
  });

  it('matches sub-domains of a blocked domain', () => {
    const m = matchUrl('https://m.youtube.com/watch?v=1', rules);
    expect(m?.ruleKind).toBe('block-domain');
    expect(m?.domain).toBe('m.youtube.com');
  });

  it('does not falsely match unrelated domains', () => {
    expect(matchUrl('https://notyoutube.com/', rules)).toBeNull();
    expect(matchUrl('https://youtube.com.evil.example/', rules)).toBeNull();
  });

  it('matches a URL-prefix rule before the domain rule', () => {
    const m = matchUrl('https://x.com/explore/foo', rules);
    expect(m?.ruleKind).toBe('block-url');
  });

  it('matches a keyword anywhere in the URL, case-insensitively', () => {
    const m = matchUrl('https://example.com/feed/SHORTS/abc', rules);
    expect(m?.ruleKind).toBe('keyword');
    expect(m?.pattern).toBe('shorts');

    const m2 = matchUrl('https://example.com/silent-disco', rules);
    expect(m2?.ruleKind).toBe('keyword');
    expect(m2?.pattern).toBe('SiLeNt-DiScO');
  });

  it('ignores disabled rules', () => {
    expect(matchUrl('https://disabled.example/', rules)).toBeNull();
  });

  it('returns null for non-http(s) URLs', () => {
    expect(matchUrl('chrome://extensions', rules)).toBeNull();
    expect(matchUrl('file:///tmp/page.html', rules)).toBeNull();
  });

  it('returns null when no rules match', () => {
    expect(matchUrl('https://wikipedia.org/wiki/A', rules)).toBeNull();
  });

  it('returns null when both rule arrays are empty', () => {
    expect(matchUrl('https://youtube.com/', { blockRules: [], keywordRules: [] })).toBeNull();
  });
});

describe('extractDomain edge cases', () => {
  it('returns lowercase hostname for mixed-case URL', () => {
    expect(extractDomain('HTTPS://YOUTUBE.COM/watch')).toBe('youtube.com');
  });

  it('returns null for a bare domain without protocol', () => {
    expect(extractDomain('youtube.com')).toBeNull();
  });
});
