import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-ways-to-place-houses',
  title: 'Count Number of Ways to Place Houses',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `There is a street with \`n * 2\` **plots**, where there are \`n\` plots on each side of the street. The plots on each side are numbered from \`1\` to \`n\`. On each plot, at most one house can be placed.

Return the number of ways houses can be placed such that **no two houses on the same side of the street are adjacent**. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Note that if a house is placed on the \`i\`th plot on one side of the street, a house can also be placed on the \`i\`th plot on the other side of the street.`,
  constraints: [
    '1 <= n <= 10^4',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '4',
      explanation: 'Each side independently has 2 options (house or no house): 2 × 2 = 4.',
    },
    {
      input: 'n = 2',
      output: '9',
      explanation: 'Each side has 3 valid placements (NN, HN, NH): 3 × 3 = 9.',
    },
    {
      input: 'n = 3',
      output: '25',
      explanation: 'Each side has 5 valid placements: 5 × 5 = 25.',
    },
  ],
  hints: [
    'Each side of the street is independent — count valid arrangements for one side, then square it.',
    'Let dp[i] = number of valid house placements for i plots.',
    'dp[0] = 1 (empty side), dp[1] = 2, dp[i] = dp[i-1] + dp[i-2] (Fibonacci recurrence).',
    'Answer = dp[n]^2 mod (10^9 + 7).',
  ],
  functionName: 'countHousePlacements',
  params: ['n'],
  starterCode: {
    javascript: `function countHousePlacements(n) {
  const MOD = 1_000_000_007;
  let a = 1, b = 2;
  for (let i = 2; i <= n; i++) [a, b] = [b, (a + b) % MOD];
  return b * b % MOD;
}`,
    typescript: `function countHousePlacements(n: number): number {
  const MOD = 1_000_000_007;
  let a = 1, b = 2;
  for (let i = 2; i <= n; i++) [a, b] = [b, (a + b) % MOD];
  return b * b % MOD;
}`,
    python: `def countHousePlacements(n):
    MOD = 10**9 + 7
    a, b = 1, 2
    for _ in range(2, n + 1):
        a, b = b, (a + b) % MOD
    return b * b % MOD`,
  },
  visibleTests: [
    { args: [1], expected: 4 },
    { args: [2], expected: 9 },
    { args: [3], expected: 25 },
  ],
  hiddenTests: [
    { args: [4], expected: 64 },
    { args: [5], expected: 169 },
    { args: [10], expected: 20736 },
    { args: [100], expected: 20522904 },
    { args: [1], expected: 4 },
  ],
};
