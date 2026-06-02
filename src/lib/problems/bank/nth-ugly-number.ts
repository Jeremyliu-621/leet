import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nth-ugly-number',
  title: 'Nth Ugly Number',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math', 'heap'],
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
    javascript: 'function nthUglyNumber(n) {\n  const dp = [1];\n  let i2 = 0, i3 = 0, i5 = 0;\n  for (let i = 1; i < n; i++) {\n    const next = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);\n    dp.push(next);\n    if (next === dp[i2] * 2) i2++;\n    if (next === dp[i3] * 3) i3++;\n    if (next === dp[i5] * 5) i5++;\n  }\n  return dp[n - 1];\n}\n',
    typescript: "function nthUglyNumber(n: number): number {\n  const dp: number[] = [1];\n  let i2 = 0, i3 = 0, i5 = 0;\n  for (let i = 1; i < n; i++) {\n    const next = Math.min(dp[i2]! * 2, dp[i3]! * 3, dp[i5]! * 5);\n    dp.push(next);\n    if (next === dp[i2]! * 2) i2++;\n    if (next === dp[i3]! * 3) i3++;\n    if (next === dp[i5]! * 5) i5++;\n  }\n  return dp[n - 1]!;\n}",

    python: 'def nthUglyNumber(n: int) -> int:\n    dp = [1]; i2 = i3 = i5 = 0\n    for _ in range(n - 1):\n        nxt = min(dp[i2]*2, dp[i3]*3, dp[i5]*5)\n        dp.append(nxt)\n        if nxt == dp[i2]*2: i2 += 1\n        if nxt == dp[i3]*3: i3 += 1\n        if nxt == dp[i5]*5: i5 += 1\n    return dp[n - 1]\n',
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
