import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-coins-for-fruits',
  title: 'Minimum Number of Coins for Fruits',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are at a fruit market with fruits labeled from \`1\` to \`n\`. The \`i\`th fruit costs \`prices[i - 1]\` coins.

The fruit market has a special offer: if you **purchase** the \`i\`th fruit at \`prices[i - 1]\` coins, you can get the **next** \`i\` fruits **for free**.

Note that even if you can get fruit \`j\` for free, you can still purchase it for \`prices[j - 1]\` coins to extend your free range further.

Return the **minimum** number of coins needed to acquire all \`n\` fruits.`,
  constraints: [
    '1 <= prices.length <= 1000',
    '1 <= prices[i] <= 10^5',
  ],
  examples: [
    {
      input: 'prices = [3,1,2]',
      output: '4',
      explanation: 'Purchase fruit 1 for 3 coins. Fruit 2 is free. Then purchase fruit 2 for 1 coin. Fruits 3 and 4 are free. Total: 4.',
    },
    {
      input: 'prices = [1,10,1,1]',
      output: '2',
      explanation: 'Purchase fruit 1 (cost 1), fruits 2,3 are free. Purchase fruit 4 (cost 1). Total: 2.',
    },
    {
      input: 'prices = [26,18,6,12,49,7,45,45]',
      output: '39',
      explanation: 'One optimal strategy: buy fruit 1 (26, fruits 2 free), buy fruit 3 (6, fruits 4,5,6 free), buy fruit 7 (45, fruit 8 free). Wait — buy fruits 2 (18, fruits 3,4 free), then fruit 5 (49, fruits 6-10 free). Optimal is buy fruit 1(26)+fruit 3(6)+fruit 7(7)=39.',
    },
  ],
  hints: [
    'Let dp[i] = minimum coins to acquire fruits i through n (1-indexed). Base: dp[n+1] = 0.',
    'dp[i] = prices[i-1] + min(dp[i+1], dp[i+2], ..., dp[i+i+1]). Buying fruit i gives the next i fruits free.',
    'Compute dp from right to left. The answer is dp[1].',
  ],
  functionName: 'minimumCoins',
  params: ['prices'],
  starterCode: {
    javascript: 'function minimumCoins(prices) {\n\n}',
    typescript: "function minimumCoins(prices: number[]): number {\n\n}",

    python: 'def minimumCoins(prices):\n    pass',
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 4 },
    { args: [[1, 10, 1, 1]], expected: 2 },
    { args: [[26, 18, 6, 12, 49, 7, 45, 45]], expected: 39 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[10, 1, 1]], expected: 11 },
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[5, 5, 5, 5, 5]], expected: 10 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
    { args: [[3, 5, 1, 2]], expected: 4 },
  ],
};
