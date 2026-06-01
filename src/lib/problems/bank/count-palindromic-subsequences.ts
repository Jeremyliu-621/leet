import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-palindromic-subsequences',
  title: 'Count Palindromic Subsequences',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a string \`s\`, return the number of **distinct** palindromic subsequences of length 5. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

A **subsequence** is a string derived from another by deleting some (or no) characters without changing the order of the remaining characters.

Two subsequences are considered **different** if they have different characters at the same position.

A string is **palindromic** if it reads the same forward and backward.`,
  constraints: [
    '`1 <= s.length <= 10^4`',
    '`s` consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "aaaaa"',
      output: '1',
      explanation: 'The only distinct palindromic subsequence of length 5 is "aaaaa".',
    },
    {
      input: 's = "aabcbaa"',
      output: '3',
      explanation: 'The three distinct palindromic subsequences are "aabaa", "aacaa", and "abcba".',
    },
  ],
  hints: [
    'A 5-character palindrome has the form c1 c2 c3 c2 c1. Iterate over all 26×26 = 676 (c1, c2) pairs.',
    'For a fixed pair (c1, c2): find l1 = leftmost c1, l2 = leftmost c2 after l1, r1 = rightmost c1, r2 = rightmost c2 before r1. If l2 < r2, then any distinct character strictly between l2 and r2 is a valid middle.',
    'The greedy boundaries are optimal: the leftmost inner c2 and rightmost inner c2 maximise the window, ensuring all reachable middle characters are counted.',
  ],
  functionName: 'countPalindromes',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromes(s) {

}`,
    typescript: `function countPalindromes(s: string): number {

}`,
    python: `def countPalindromes(s):
    pass`,
  },
  visibleTests: [
    { args: ['aaaaa'], expected: 1 },
    { args: ['aabcbaa'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: 0 },
    { args: ['abcba'], expected: 1 },
    { args: ['aabaa'], expected: 1 },
    { args: ['abacaba'], expected: 4 },
    { args: ['abcaabca'], expected: 4 },
  ],
};
