import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-coins-for-fruits-i',
  title: 'Minimum Number of Coins for Fruits I',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are at a fruit market with fruits indexed from **1 to n**. The \`i\`-th fruit (1-indexed) costs \`prices[i-1]\` coins.

The market has the following offer: if you **purchase** the \`i\`-th fruit, you get the **next \`i\` fruits for free** (i.e., fruits \`i+1\`, \`i+2\`, ..., \`2i\` are free). You may use any purchased fruit's offer (even one you received for free, if you choose to also pay for it).

Return the **minimum number of coins** needed to acquire **all** \`n\` fruits.`,
  constraints: [
    '1 <= prices.length <= 1000',
    '1 <= prices[i] <= 10^5',
  ],
  examples: [
    {
      input: 'prices = [3,1,2]',
      output: '4',
      explanation:
        'Buy fruit 1 (cost 3); fruit 2 is free. Buy fruit 2 (cost 1); fruits 3, 4 are free. All 3 fruits acquired for 3+1=4.',
    },
    {
      input: 'prices = [1,10,1,1]',
      output: '2',
      explanation:
        'Buy fruit 1 (cost 1); fruit 2 is free. Buy fruit 3 (cost 1); fruits 4, 5, 6 are free. Total cost = 2.',
    },
    {
      input: 'prices = [26,18,6,12,49,7,45,45]',
      output: '39',
      explanation:
        'Buy fruit 1 (26); fruit 2 free. Buy fruit 3 (6); fruits 4–6 free. Buy fruit 6 (7); fruits 7–12 free. Total = 39.',
    },
  ],
  hints: [
    'Level 1: Define dp[i] = minimum cost to acquire all fruits starting from fruit i (1-indexed). After buying fruit i, you get fruits i+1..2i for free. You may then choose to also buy any fruit j in [i+1..2i] to extend coverage.',
    'Level 2: Recurrence: dp[i] = prices[i-1] + min(dp[j]) for j in [i+1, 2i+1]. Specifically, you always buy fruit i; the next fruit you buy is some j where i < j ≤ 2i+1. dp[j] covers everything from j onward. dp[n+1] = 0.',
    'Level 3: Fill dp from right to left (from n down to 1). For each i, iterate j from i+1 to min(2i+1, n+1) and take the minimum. Time: O(n^2) which is fine for n ≤ 1000.',
  ],
  functionName: 'minimumCoins',
  params: ['prices'],
  starterCode: {
    javascript: `function minimumCoins(prices) {

}`,
    typescript: `function minimumCoins(prices: number[]): number {

}`,
    python: `def minimumCoins(prices):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 4 },
    { args: [[1, 10, 1, 1]], expected: 2 },
    { args: [[26, 18, 6, 12, 49, 7, 45, 45]], expected: 39 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 3]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[7, 7, 7, 7, 7, 7, 7]], expected: 21 },
    { args: [[5, 1, 1, 1, 1, 1, 1, 1, 1, 1]], expected: 7 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
    { args: [[10, 1, 1]], expected: 11 },
  ],
};
