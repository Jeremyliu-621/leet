import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-different-palindromic-subsequences',
  title: 'Count Different Palindromic Subsequences',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`, return the number of different non-empty palindromic subsequences in \`s\`. Since the answer may be very large, return it **modulo 10^9 + 7**.

A subsequence is obtained by deleting some characters from \`s\` without changing the relative order. A palindromic subsequence reads the same forwards and backwards. Two sequences are different if they have different contents or differ at some position.

**Interval DP:** For \`dp[i][j]\` (# distinct palindromic subseqs in \`s[i..j]\`), consider all 4 characters ('a','b','c','d'). For each character \`c\` that appears in \`s[i..j]\`, find its leftmost and rightmost positions \`l\` and \`r\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] is in {"a", "b", "c", "d"}',
  ],
  examples: [
    {
      input: 's = "bccb"',
      output: '6',
      explanation: 'The 6 different palindromic subsequences are: "b", "c", "bb", "cc", "bcb", "bccb".',
    },
    {
      input: 's = "abcdabcdabcdabcdabcdabcdabcdabcda"',
      output: '46245',
    },
    {
      input: 's = "abcba"',
      output: '10',
      explanation: '"a","b","c","aa","bb","aba","aaa"... carefully: a,b,c,aa,bb,aba,aca,abcba,abba,bab = 10.',
    },
  ],
  hints: [
    'Use interval DP. For each substring s[i..j], sum contributions of each of the 4 characters.',
    'For character c in s[i..j], let l = leftmost occurrence, r = rightmost occurrence. If l == r: add 1 (just "c"). If l+1 == r: add 2 ("c" and "cc"). Otherwise: add dp[l+1][r-1] + 2.',
    'The "+2" accounts for wrapping each palindrome in s[l+1..r-1] with two c\'s, plus "c" and "cc" themselves. Add results for all 4 characters.',
  ],
  functionName: 'countPalindromicSubsequences',
  params: ['s'],
  starterCode: {
    javascript: 'function countPalindromicSubsequences(s) {\n\n}\n',
    python: 'def countPalindromicSubsequences(s: str) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: ['bccb'], expected: 6 },
    { args: ['abcdabcdabcdabcdabcdabcdabcdabcda'], expected: 46245 },
    { args: ['abcba'], expected: 10 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 2 },
    { args: ['ab'], expected: 2 },
    { args: ['abc'], expected: 3 },
    { args: ['abcb'], expected: 5 },
  ],
};
