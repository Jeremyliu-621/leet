import type { Problem } from '../types';

export const problem: Problem = {
  id: 'anagram-check',
  title: 'Anagram Check',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Two strings are **anagrams** of each other if one can be rearranged into the other — meaning they contain exactly the same characters with the same frequencies, just in a different order.

Given two strings \`s\` and \`t\`, return \`true\` if they are anagrams and \`false\` otherwise. The comparison is case-sensitive: "Listen" and "Silent" are not anagrams by this definition.

An empty string is an anagram of itself but not of any non-empty string.`,
  constraints: [
    '0 <= s.length, t.length <= 1000',
    's and t contain only printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "anagram", t = "nagaram"',
      output: 'true',
      explanation: 'Both strings contain exactly a×3, n×1, g×1, r×1, m×1.',
    },
    {
      input: 's = "rat", t = "car"',
      output: 'false',
      explanation: '"rat" has no "c" and "car" has no "t".',
    },
    {
      input: 's = "ab", t = "a"',
      output: 'false',
      explanation: 'Different lengths means different character totals.',
    },
  ],
  hints: [
    'If the two strings have different lengths, you can return false immediately — anagrams must be the same length.',
    'Build a frequency map for one string, then decrement the count for each character in the other. If any count goes below zero or any character is missing, they are not anagrams.',
    'Alternative: sort both strings and compare them — two sorted anagrams are identical. `s.split(\'\').sort().join(\'\') === t.split(\'\').sort().join(\'\')`. The frequency-map approach is O(n); sort is O(n log n).',
  ],
  functionName: 'areAnagrams',
  params: ['s', 't'],
  starterCode: {
    javascript: `function areAnagrams(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}`,
    typescript: `function areAnagrams(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}`,
    python: `def areAnagrams(s, t):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    return sorted(s) == sorted(t)`,
  },
  visibleTests: [
    { args: ['anagram', 'nagaram'], expected: true },
    { args: ['rat', 'car'], expected: false },
    { args: ['ab', 'a'], expected: false },
  ],
  hiddenTests: [
    { args: ['', ''], expected: true },
    { args: ['a', 'a'], expected: true },
    { args: ['abc', 'cba'], expected: true },
    { args: ['hello', 'world'], expected: false },
    { args: ['aab', 'baa'], expected: true },
    { args: ['Listen', 'silent'], expected: false },
  ],
};
