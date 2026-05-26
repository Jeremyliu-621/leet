import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-k-coins-from-piles',
  title: 'Maximum Value of K Coins From Piles',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `There are \`n\` **piles** of coins on a table. Each pile consists of a **positive** number of coins of assorted denominations.

In one move, you can choose any coin on **top** of any pile, remove it, and add it to your wallet.

Given a list \`piles\`, where \`piles[i]\` is a list of integers denoting the composition of the \`i\`th pile from **top to bottom**, and a positive integer \`k\`, return the **maximum total value** of coins you can have in your wallet if you choose exactly \`k\` coins optimally.`,
  constraints: [
    '`n == piles.length`',
    '`1 <= n <= 1000`',
    '`1 <= piles[i].length <= 2000`',
    '`1 <= piles[i][j] <= 10^5`',
    '`1 <= k <= sum(piles[i].length)`',
  ],
  examples: [
    {
      input: 'piles = [[1,100,3],[7,8,9]], k = 2',
      output: '101',
      explanation: 'Take 2 coins from pile 0 (top two are 1 and 100, sum = 101). This beats taking 1 from each pile (1 + 7 = 8).',
    },
    {
      input: 'piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7',
      output: '706',
      explanation: 'Take 1 coin from each of the first 6 piles (6 × 100 = 600) and the last coin (700) from pile 6. Total = 706.',
    },
  ],
  hints: [
    'Think of this as a bounded knapsack: for each pile, you can take 0, 1, 2, … up to min(pile.length, remaining_budget) coins.',
    'Let dp[j] = maximum value achievable by picking exactly j coins from the piles processed so far.',
    'For each pile, compute prefix sums, then iterate j from k down to 0 and try taking x coins from this pile.',
    'Iterating j in reverse prevents reusing the same pile twice in the same update pass.',
  ],
  functionName: 'maxValueOfCoins',
  params: ['piles', 'k'],
  starterCode: {
    javascript: `function maxValueOfCoins(piles, k) {

}`,
    python: `def maxValueOfCoins(piles, k):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 100, 3], [7, 8, 9]], 2], expected: 101 },
    { args: [[[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]], 7], expected: 706 },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: 1 },
    { args: [[[5, 3, 1], [2, 4, 6]], 3], expected: 12 },
    // Take 3 from pile2: 2+4+6=12. Taking 0,1,2,3 from pile1 gives max 12.
    { args: [[[1, 2, 3]], 2], expected: 3 },
    { args: [[[10, 1], [1, 10]], 2], expected: 11 },
    // Take 2 from either pile: pile1=10+1=11, pile2=1+10=11, or 1+1=10+1=11. Max=11.
    { args: [[[3, 2, 1], [4, 5, 6]], 4], expected: 18 },
    { args: [[[1, 2], [3, 4], [5, 6]], 6], expected: 21 },
  ],
};
