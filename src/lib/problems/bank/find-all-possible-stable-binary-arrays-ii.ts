import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-possible-stable-binary-arrays-ii',
  title: 'Find All Possible Stable Binary Arrays II',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given 3 positive integers \`zero\`, \`one\`, and \`limit\`.

A binary array \`arr\` is called **stable** if:

- The number of occurrences of 0 in \`arr\` is **exactly** \`zero\`.
- The number of occurrences of 1 in \`arr\` is **exactly** \`one\`.
- Each subarray of \`arr\` with a size greater than \`limit\` must contain **both** 0 and 1.

Return *the total number of **stable** binary arrays*, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= zero, one, limit <= 1000',
  ],
  examples: [
    {
      input: 'zero = 1, one = 1, limit = 2',
      output: '2',
      explanation: 'Both [0,1] and [1,0] are stable.',
    },
    {
      input: 'zero = 1, one = 2, limit = 1',
      output: '1',
      explanation: 'Only [1,0,1] is stable with limit=1.',
    },
  ],
  hints: [
    'Same DP as Part I: dp[i][j][v] = arrangements of i zeros and j ones ending with v, no run > limit.',
    'Naive O(n²·limit) is too slow for limit=1000; speed up with prefix sums along each axis.',
    'Let P1[i][j] = Σ dp1[0..i][j]. Then dp0[i][j] = P1[i−1][j] − P1[i−limit−1][j] (clamped). O(n²) total.',
  ],
  functionName: 'numberOfStableArrays',
  params: ['zero', 'one', 'limit'],
  starterCode: {
    javascript: 'function numberOfStableArrays(zero, one, limit) {\n\n}\n',
    typescript: 'function numberOfStableArrays(zero: number, one: number, limit: number): number {\n\n}\n',
    python: 'def numberOfStableArrays(zero, one, limit):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 1, 2], expected: 2 },
    { args: [1, 2, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 2 },
    { args: [2, 1, 1], expected: 1 },
    { args: [2, 2, 2], expected: 6 },
    { args: [3, 3, 2], expected: 14 },
    { args: [2, 2, 1], expected: 2 },
    { args: [1, 2, 2], expected: 3 },
    { args: [5, 5, 2], expected: 84 },
  ],
};
