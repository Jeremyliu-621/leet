import type { Problem } from '../types';

export const problem: Problem = {
  id: 'substring-with-largest-variance',
  title: 'Substring With Largest Variance',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `The **variance** of a string is defined as the largest difference between the number of occurrences of **any two** characters present in the string. Note the difference between two characters is defined as the absolute value of the difference of their frequencies.

Given a string \`s\` consisting of lowercase English letters, return the **largest variance** possible among all substrings of \`s\`.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aababbb"',
      output: '3',
      explanation: 'The substring "babbb" has 4 occurrences of \'b\' and 1 occurrence of \'a\', giving a variance of 3.',
    },
    {
      input: 's = "abcde"',
      output: '0',
      explanation: 'Each character appears exactly once in every substring that contains it, so the variance is 0.',
    },
    {
      input: 's = "aab"',
      output: '1',
      explanation: '"aab" has 2 occurrences of \'a\' and 1 of \'b\', variance = 2 - 1 = 1.',
    },
  ],
  hints: [
    'For each pair of distinct characters (ca, cb), find the subarray maximizing count(ca) - count(cb) where cb appears at least once.',
    'Treat ca as +1 and cb as -1. Use a modified Kadane\'s algorithm with two DP states:',
    '  dp: best sum ending here (no constraint on cb)',
    '  dpB: best sum ending here where cb has appeared at least once',
    'When you see ca: dp++, dpB++. When you see cb: dpB = max(dpB, dp) - 1; dp = max(dp - 1, 0).',
    'There are only 26×25 = 650 pairs to try.',
  ],
  functionName: 'largestVariance',
  params: ['s'],
  starterCode: {
    javascript: 'function largestVariance(s) {\n  \n}\n',
    python: 'def largestVariance(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aababbb'], expected: 3 },
    { args: ['abcde'], expected: 0 },
    { args: ['aab'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aaaa'], expected: 0 },
    { args: ['aaab'], expected: 2 },
    { args: ['ab'], expected: 0 },
    { args: ['aaaaaab'], expected: 5 },
  ],
};
