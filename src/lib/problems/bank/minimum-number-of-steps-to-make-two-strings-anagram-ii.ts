import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-steps-to-make-two-strings-anagram-ii',
  title: 'Minimum Number of Steps to Make Two Strings Anagram II',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`s\` and \`t\`. In one step, you can append **any** character to either \`s\` or \`t\`.

Return the minimum number of steps to make \`s\` and \`t\` **anagrams** of each other.

An **anagram** of a string is a string that contains the same characters with the same frequencies.`,
  constraints: [
    '1 <= s.length, t.length <= 2 * 10^5',
    's and t consist of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "leetcode", t = "coats"',
      output: '7',
      explanation: 'We need to add "lete" (4 chars) to t and "as" (3 chars) to s to make them anagrams. Total = 7.',
    },
    {
      input: 's = "night", t = "thing"',
      output: '0',
      explanation: 'Both strings are already anagrams of each other.',
    },
  ],
  hints: [
    'Count the frequency of each character in both strings.',
    'For each character, the number of steps needed is the absolute difference of its frequency in s vs t.',
    'Sum these absolute differences across all 26 letters.',
  ],
  functionName: 'minSteps',
  params: ['s', 't'],
  starterCode: {
    javascript: `function minSteps(s, t) {
  const cnt = new Array(26).fill(0);
  for (const c of s) cnt[c.charCodeAt(0) - 97]++;
  for (const c of t) cnt[c.charCodeAt(0) - 97]--;
  return cnt.reduce((sum, v) => sum + Math.abs(v), 0);
}`,
    typescript: `function minSteps(s: string, t: string): number {
  const cnt = new Array<number>(26).fill(0);
  for (const c of s) cnt[c.charCodeAt(0) - 97]!++;
  for (const c of t) cnt[c.charCodeAt(0) - 97]!--;
  return cnt.reduce((sum, v) => sum + Math.abs(v), 0);
}`,
    python: `def minSteps(s, t):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    cnt = [0] * 26
    for c in s: cnt[ord(c) - 97] += 1
    for c in t: cnt[ord(c) - 97] -= 1
    return sum(abs(v) for v in cnt)`,
  },
  visibleTests: [
    { args: ['leetcode', 'coats'], expected: 7 },
    { args: ['night', 'thing'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 2 },
    { args: ['abc', 'abc'], expected: 0 },
    { args: ['abc', 'def'], expected: 6 },
    { args: ['aab', 'bab'], expected: 2 },
    { args: ['zzzzz', 'zz'], expected: 3 },
  ],
};
