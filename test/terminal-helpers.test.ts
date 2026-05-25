import { describe, it, expect } from 'vitest';
import { computeStringDiff } from '../src/pages/challenge/components/TerminalPanel';

describe('computeStringDiff', () => {
  it('returns null for non-string inputs', () => {
    expect(computeStringDiff(42, 42)).toBeNull();
    expect(computeStringDiff(['a'], ['b'])).toBeNull();
    expect(computeStringDiff(null, null)).toBeNull();
  });

  it('returns null when strings are equal', () => {
    expect(computeStringDiff('abc', 'abc')).toBeNull();
    expect(computeStringDiff('', '')).toBeNull();
  });

  it('handles char diff at index 0', () => {
    const result = computeStringDiff('abc', 'xbc');
    expect(result).not.toBeNull();
    expect(result?.type).toBe('char-diff');
    if (result?.type === 'char-diff') {
      expect(result.charIndex).toBe(0);
      expect(result.expectedChar).toBe('a');
      expect(result.actualChar).toBe('x');
      expect(result.lenNote).toBe('');
    }
  });

  it('handles char diff at a middle index', () => {
    const result = computeStringDiff('hello', 'helXo');
    expect(result?.type).toBe('char-diff');
    if (result?.type === 'char-diff') {
      expect(result.charIndex).toBe(3);
      expect(result.expectedChar).toBe('l');
      expect(result.actualChar).toBe('X');
    }
  });

  it('includes lenNote when strings differ in length with char diff', () => {
    const result = computeStringDiff('abc', 'abXYZ');
    expect(result?.type).toBe('char-diff');
    if (result?.type === 'char-diff') {
      expect(result.charIndex).toBe(2);
      expect(result.lenNote).toBe(' · length 5 vs 3');
    }
  });

  it('reports length-only when one string is a prefix of the other', () => {
    const result = computeStringDiff('abc', 'abcd');
    expect(result?.type).toBe('length-only');
    if (result?.type === 'length-only') {
      expect(result.label).toBe('actual is 1 char longer');
    }
  });

  it('reports length-only (longer → shorter)', () => {
    const result = computeStringDiff('abcde', 'abc');
    expect(result?.type).toBe('length-only');
    if (result?.type === 'length-only') {
      expect(result.label).toBe('actual is 2 chars shorter');
    }
  });

  it('singular "char" vs plural "chars"', () => {
    const result1 = computeStringDiff('a', 'ab');
    if (result1?.type === 'length-only') expect(result1.label).toContain('1 char longer');

    const result2 = computeStringDiff('abc', 'a');
    if (result2?.type === 'length-only') expect(result2.label).toContain('2 chars shorter');
  });

  it('handles empty vs non-empty string (length-only)', () => {
    const result = computeStringDiff('', 'abc');
    expect(result?.type).toBe('length-only');
    if (result?.type === 'length-only') {
      expect(result.label).toBe('actual is 3 chars longer');
    }
  });

  it('handles non-empty vs empty string (length-only)', () => {
    const result = computeStringDiff('abc', '');
    expect(result?.type).toBe('length-only');
    if (result?.type === 'length-only') {
      expect(result.label).toBe('actual is 3 chars shorter');
    }
  });

  it('returns null when one value is not a string', () => {
    expect(computeStringDiff('abc', 123)).toBeNull();
    expect(computeStringDiff(null, 'abc')).toBeNull();
  });
});
