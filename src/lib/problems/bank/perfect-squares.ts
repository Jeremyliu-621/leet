import type { Problem } from '../types';

export const problem: Problem = {
  id: 'perfect-squares',
  title: 'Perfect Squares',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `Given an integer \`n\`, return the **least number of perfect square numbers** that sum to \`n\`.

A **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself (e.g., 1, 4, 9, 16, ...).

**DP approach:** Let \`dp[i]\` = minimum number of perfect squares summing to \`i\`. Initialize \`dp[0] = 0\` and all others to \`Infinity\`. For each \`i\`, try every perfect square \`j² ≤ i\`: \`dp[i] = min(dp[i], dp[i - j²] + 1)\`.`,
  constraints: [
    '1 <= n <= 10000',
  ],
  examples: [
    {
      input: 'n = 12',
      output: '3',
      explanation: '12 = 4 + 4 + 4 (three perfect squares).',
    },
    {
      input: 'n = 13',
      output: '2',
      explanation: '13 = 4 + 9 (two perfect squares).',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: '1 is itself a perfect square.',
    },
  ],
  hints: [
    'Build a DP array where `dp[i]` = minimum number of perfect squares summing to `i`. Initialise all entries to `Infinity` except `dp[0] = 0`. For each `i`, try all squares `j*j <= i` and take the min.',
    'For each `i` from 1 to n: `for (let j = 1; j * j <= i; j++) dp[i] = Math.min(dp[i], dp[i - j * j] + 1)`. The answer is `dp[n]`.',
    '`const dp = new Array(n + 1).fill(Infinity); dp[0] = 0; for (let i = 1; i <= n; i++) for (let j = 1; j * j <= i; j++) dp[i] = Math.min(dp[i], dp[i - j * j] + 1); return dp[n];`',
  ],
  functionName: 'numSquares',
  params: ['n'] as readonly string[],
  starterCode: {
    javascript: 'function numSquares(n) {\n  // your code here\n}\n',
    python: 'def numSquares(n: int) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [12], expected: 3 },
    { args: [13], expected: 2 },
    { args: [1], expected: 1 },
    { args: [4], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [9], expected: 1 },
    { args: [100], expected: 1 },
    { args: [7], expected: 4 },
    { args: [999], expected: 4 },
  ],
};
