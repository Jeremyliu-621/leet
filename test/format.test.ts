import { describe, it, expect } from 'vitest';
import { capitalise, formatTag } from '../src/lib/format';

describe('capitalise', () => {
  it('capitalises the first letter and lowercases the rest', () => {
    expect(capitalise('easy')).toBe('Easy');
    expect(capitalise('HARD')).toBe('Hard');
    expect(capitalise('mEdIuM')).toBe('Medium');
  });

  it('returns the empty string unchanged', () => {
    expect(capitalise('')).toBe('');
  });

  it('handles single characters', () => {
    expect(capitalise('a')).toBe('A');
  });
});

describe('formatTag', () => {
  it('replaces hyphens with spaces and title-cases each word', () => {
    expect(formatTag('hash-map')).toBe('Hash Map');
    expect(formatTag('sliding-window')).toBe('Sliding Window');
    expect(formatTag('dynamic-programming')).toBe('Dynamic Programming');
  });

  it('handles single-word tags', () => {
    expect(formatTag('arrays')).toBe('Arrays');
    expect(formatTag('math')).toBe('Math');
  });

  it('handles multi-hyphen tags', () => {
    expect(formatTag('binary-indexed-tree')).toBe('Binary Indexed Tree');
  });
});
