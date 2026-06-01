import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-anagram',
  title: 'Valid Anagram',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.`,
  constraints: [
    '`1 <= s.length, t.length <= 5 * 10^4`',
    '`s` and `t` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "anagram", t = "nagaram"',
      output: 'true',
    },
    {
      input: 's = "rat", t = "car"',
      output: 'false',
    },
  ],
  hints: [
    'Count the frequency of each character in s, then subtract the frequency for each character in t.',
    'If all frequencies are zero at the end, the strings are anagrams. Also check they have the same length.',
    'Alternatively, sort both strings and compare.',
  ],
  functionName: 'isAnagram',
  params: ['s', 't'],
  starterCode: {
    javascript: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (const c of s) count[c] = (count[c] ?? 0) + 1;
  for (const c of t) {
    if (!count[c]) return false;
    count[c]--;
  }
  return true;
}`,
    typescript: `function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const count: Record<string, number> = {};
  for (const c of s) count[c] = (count[c] ?? 0) + 1;
  for (const c of t) {
    if (!count[c]) return false;
    count[c]!--;
  }
  return true;
}`,
    python: `def isAnagram(s, t):
    from collections import Counter
    return Counter(s) == Counter(t)`,
  },
  visibleTests: [
    { args: ['anagram', 'nagaram'], expected: true },
    { args: ['rat', 'car'], expected: false },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['a', 'ab'], expected: false },
    { args: ['ab', 'a'], expected: false },
    { args: ['listen', 'silent'], expected: true },
    { args: ['hello', 'world'], expected: false },
    { args: ['aab', 'baa'], expected: true },
    { args: ['aacc', 'ccac'], expected: false },
  ],
};
