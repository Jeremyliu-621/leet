import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nth-ugly-number',
  title: 'Nth Ugly Number',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `An **ugly number** is a positive integer whose prime factors are limited to \`2\`, \`3\`, and \`5\`.

Given an integer \`n\`, return the \`n\`th ugly number.

The sequence of ugly numbers starts: **1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ...**

Note: \`1\` is considered an ugly number by convention.`,
  constraints: ['1 <= n <= 1690'],
  examples: [
    {
      input: 'n = 10',
      output: '12',
      explanation: 'The 10th ugly number in the sequence [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is 12.',
    },
    { input: 'n = 1', output: '1', explanation: '1 is always the first ugly number.' },
  ],
  hints: [
    'Generating all numbers and checking each one for prime factors is too slow. Think about building the sequence directly, in order.',
    'Every ugly number is produced by multiplying a previous ugly number by 2, 3, or 5. Maintain three pointers into the sequence — one for each multiplier — tracking which ugly number to multiply next.',
    'Use a DP array: dp[0] = 1. At each step, the next ugly number is min(dp[i2]*2, dp[i3]*3, dp[i5]*5). Advance whichever pointer(s) generated the minimum (advance all tied pointers to avoid duplicates).',
  ],
  functionName: 'nthUglyNumber',
  params: ['n'],
  starterCode: {
    javascript: 'function nthUglyNumber(n) {\n  // your code here\n}\n',
    python: 'def nthUglyNumber(n: int) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [10], expected: 12 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [5], expected: 5 },
    { args: [11], expected: 15 },
    { args: [15], expected: 24 },
    { args: [1690], expected: 2123366400 },
  ],
};
