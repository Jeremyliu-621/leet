import { describe, it, expect } from 'vitest';
import {
  parseTargetParam,
  extractDomain,
  formatCountdown,
} from '../src/pages/challenge/challenge-helpers';

// ---------------------------------------------------------------------------
// parseTargetParam
// ---------------------------------------------------------------------------

describe('parseTargetParam', () => {
  it('returns null for an empty string', () => {
    expect(parseTargetParam('')).toBeNull();
  });

  it('returns null when the target param is absent', () => {
    expect(parseTargetParam('?foo=bar')).toBeNull();
  });

  it('decodes and returns a valid URL', () => {
    const encoded = encodeURIComponent('https://youtube.com/watch?v=abc');
    expect(parseTargetParam(`?target=${encoded}`)).toBe('https://youtube.com/watch?v=abc');
  });

  it('returns null when the decoded value is not a valid URL', () => {
    expect(parseTargetParam('?target=not-a-url')).toBeNull();
  });

  it('handles a bare hostname as an invalid URL', () => {
    expect(parseTargetParam('?target=youtube.com')).toBeNull();
  });

  it('works with other params present', () => {
    const encoded = encodeURIComponent('https://twitter.com/home');
    expect(parseTargetParam(`?foo=1&target=${encoded}&bar=2`)).toBe('https://twitter.com/home');
  });

  it('returns null for a target param with an empty value', () => {
    expect(parseTargetParam('?target=')).toBeNull();
  });

  it('handles HTTPS URLs with paths and query strings', () => {
    const url = 'https://reddit.com/r/programming?sort=new';
    expect(parseTargetParam(`?target=${encodeURIComponent(url)}`)).toBe(url);
  });
});

// ---------------------------------------------------------------------------
// extractDomain
// ---------------------------------------------------------------------------

describe('extractDomain', () => {
  it('returns the hostname for a simple HTTPS URL', () => {
    expect(extractDomain('https://youtube.com/')).toBe('youtube.com');
  });

  it('returns the hostname including www', () => {
    expect(extractDomain('https://www.twitter.com/home')).toBe('www.twitter.com');
  });

  it('returns null for an invalid URL', () => {
    expect(extractDomain('not-a-url')).toBeNull();
  });

  it('returns null for an empty string', () => {
    expect(extractDomain('')).toBeNull();
  });

  it('handles ports correctly', () => {
    expect(extractDomain('http://localhost:3000/path')).toBe('localhost');
  });

  it('returns null for a plain hostname without scheme', () => {
    expect(extractDomain('reddit.com')).toBeNull();
  });

  it('handles URLs with query strings', () => {
    expect(extractDomain('https://reddit.com/r/programming?sort=new')).toBe('reddit.com');
  });
});

// ---------------------------------------------------------------------------
// formatCountdown
// ---------------------------------------------------------------------------

describe('formatCountdown', () => {
  it('formats zero as 00:00', () => {
    expect(formatCountdown(0)).toBe('00:00');
  });

  it('clamps negative values to 00:00', () => {
    expect(formatCountdown(-10)).toBe('00:00');
    expect(formatCountdown(-1)).toBe('00:00');
  });

  it('formats sub-minute seconds with leading zero minutes', () => {
    expect(formatCountdown(9)).toBe('00:09');
    expect(formatCountdown(59)).toBe('00:59');
  });

  it('formats exactly one minute', () => {
    expect(formatCountdown(60)).toBe('01:00');
  });

  it('formats 90 seconds as 01:30', () => {
    expect(formatCountdown(90)).toBe('01:30');
  });

  it('formats 600 seconds (10 minutes) as 10:00', () => {
    expect(formatCountdown(600)).toBe('10:00');
  });

  it('formats 3599 seconds as 59:59', () => {
    expect(formatCountdown(3599)).toBe('59:59');
  });

  it('floors fractional seconds', () => {
    expect(formatCountdown(61.9)).toBe('01:01');
  });
});
