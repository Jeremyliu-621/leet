import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-length-three-palindromic-subsequences',
  title: 'Unique Length-3 Palindromic Subsequences',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, return the number of **unique palindromes of length three** that are a **subsequence** of \`s\`.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted **once**.

A **palindrome** is a string that reads the same forwards and backwards.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.`,
  constraints: [
    '3 <= s.length <= 10^5',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aabca"',
      output: '3',
      explanation: 'The 3 palindromic subsequences are "aba", "aaa", "aca".',
    },
    {
      input: 's = "adc"',
      output: '0',
      explanation: 'No length-3 palindromic subsequences exist.',
    },
    {
      input: 's = "bbcbaba"',
      output: '4',
      explanation: 'The 4 palindromic subsequences are "bbb", "bcb", "bab", "aba".',
    },
  ],
  hints: [
    'For each character c, find its first and last occurrence in s.',
    'Any distinct character between them can be the middle of a palindrome with c as the outer character.',
    'Sum the count of distinct characters between each pair of first/last occurrences.',
  ],
  functionName: 'countPalindromicSubsequence',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromicSubsequence(s) {

}`,
    typescript: "function countPalindromicSubsequence(s: string): number {\n\n}",

    python: `def countPalindromicSubsequence(s):
    pass`,
  },
  visibleTests: [
    { args: ['aabca'], expected: 3 },
    { args: ['adc'], expected: 0 },
    { args: ['bbcbaba'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 0 },
    { args: ['aaa'], expected: 1 },
    { args: ['aba'], expected: 1 },
    { args: ['aaaa'], expected: 1 },
  ],
};
