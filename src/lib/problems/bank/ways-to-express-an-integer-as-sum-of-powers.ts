import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-express-an-integer-as-sum-of-powers',
  title: 'Ways to Express an Integer as Sum of Powers',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `Given two **positive** integers \`n\` and \`x\`, return the number of ways \`n\` can be expressed as the sum of the \`x\`th powers of **unique** positive integers, in other words, the number of sets of unique integers \`[n1, n2, ..., nk]\` where:

- \`n = n1^x + n2^x + ... + nk^x\`
- \`n1, n2, ..., nk\` are distinct positive integers

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 300',
    '1 <= x <= 5',
  ],
  examples: [
    {
      input: 'n = 10, x = 2',
      output: '1',
      explanation: 'The only way: 1^2 + 3^2 = 1 + 9 = 10.',
    },
    {
      input: 'n = 4, x = 1',
      output: '2',
      explanation: '4 = 1+3 = 4. Two ways.',
    },
    {
      input: 'n = 1, x = 1',
      output: '1',
      explanation: '1 = 1. One way.',
    },
  ],
  hints: [
    'This is a 0/1 knapsack: items are 1^x, 2^x, 3^x, ... (each used at most once).',
    'Let dp[j] = number of ways to form sum j. Initialize dp[0] = 1.',
    'For each base i where i^x <= n, iterate j from n down to i^x and do dp[j] += dp[j - i^x].',
    'Return dp[n] mod 10^9+7.',
  ],
  functionName: 'numberOfWays',
  params: ['n', 'x'],
  starterCode: {
    javascript: `function numberOfWays(n, x) {\n  \n}`,
    typescript: `function numberOfWays(n: number, x: number): number {\n  \n}`,
    python: `def numberOfWays(n, x):\n    `,
  },
  visibleTests: [
    { args: [10, 2], expected: 1 },
    { args: [4, 1], expected: 2 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [10, 2], expected: 1 },
    { args: [4, 1], expected: 2 },
    { args: [1, 1], expected: 1 },
    { args: [1, 5], expected: 1 },
    { args: [300, 5], expected: 0 },
    { args: [3, 1], expected: 2 },
    { args: [25, 2], expected: 2 },
    { args: [5, 1], expected: 3 },
  ],
};
