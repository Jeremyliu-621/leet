import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-place-houses',
  title: 'Count Ways To Place Houses',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `There is a street with \`n * 2\` plots, where there are \`n\` plots on **each side** of the street. The plots on each side are numbered from \`1\` to \`n\`. On each plot, at most one house can be placed.

Return the **number of ways** to place houses such that no two houses are adjacent to each other on the **same side** of the street. Since the answer may be very large, return it modulo \`10^9 + 7\`.

Note that houses on **opposite sides** of the street are not considered adjacent.`,
  constraints: [
    '1 <= n <= 10^4',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '4',
      explanation: 'Each side can independently be house (H) or empty (N): NN, NH, HN, HH — 4 ways.',
    },
    {
      input: 'n = 2',
      output: '9',
      explanation: 'Each side has 3 valid placements (NN, NH, HN), and 3*3 = 9.',
    },
  ],
  hints: [
    'The two sides of the street are independent. Compute ways for one side, then square it.',
    'For one side with n plots: let a = ways ending with no house, b = ways ending with a house. Transition: a, b = a + b, a.',
    'Initialize a=1, b=0 (empty street). After n steps the answer for one side is (a+b)^2 % MOD.',
  ],
  functionName: 'countWays',
  params: ['n'],
  starterCode: {
    javascript: `function countWays(n) {
  const MOD = 1000000007;
  let a = 1, b = 0;
  for (let i = 0; i < n; i++) [a, b] = [(a + b) % MOD, a % MOD];
  const side = (a + b) % MOD;
  return side * side % MOD;
}`,
    typescript: `function countWays(n: number): number {
  const MOD = 1000000007;
  let a = 1, b = 0;
  for (let i = 0; i < n; i++) [a, b] = [(a + b) % MOD, a % MOD];
  const side = (a + b) % MOD;
  return side * side % MOD;
}`,
    python: `def countWays(n):
    MOD = 10**9 + 7
    a, b = 1, 0
    for _ in range(n):
        a, b = (a + b) % MOD, a % MOD
    side = (a + b) % MOD
    return side * side % MOD`,
  },
  visibleTests: [
    { args: [1], expected: 4 },
    { args: [2], expected: 9 },
  ],
  hiddenTests: [
    { args: [3], expected: 25 },
    { args: [4], expected: 64 },
    { args: [5], expected: 169 },
    { args: [10], expected: 20736 },
  ],
};
