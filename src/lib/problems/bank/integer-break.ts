import type { Problem } from '../types';

export const problem: Problem = {
  id: 'integer-break',
  title: 'Integer Break',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `Given an integer \`n\`, break it into the sum of \`k\` **positive integers**, where \`k >= 2\`, and maximize the product of those integers.

Return the *maximum product you can get*.`,
  constraints: ['`2 <= n <= 58`'],
  examples: [
    {
      input: 'n = 2',
      output: '1',
      explanation: '2 = 1 + 1, 1 × 1 = 1.',
    },
    {
      input: 'n = 10',
      output: '36',
      explanation: '10 = 3 + 3 + 4, 3 × 3 × 4 = 36.',
    },
  ],
  hints: [
    'DP: dp[i] = max product when breaking i. For each i, try all splits j and (i-j), taking max(j, dp[j]) * max(i-j, dp[i-j]).',
  ],
  functionName: 'integerBreak',
  params: ['n'],
  starterCode: {
    javascript: 'function integerBreak(n) {\n  \n}\n',
    python: 'def integerBreak(n):\n    pass\n',
  },
  visibleTests: [
    { args: [2], expected: 1 },
    { args: [10], expected: 36 },
    { args: [3], expected: 2 },
  ],
  hiddenTests: [
    { args: [4], expected: 4 },
    { args: [5], expected: 6 },
    { args: [6], expected: 9 },
    { args: [58], expected: 1549681956 },
  ],
};
