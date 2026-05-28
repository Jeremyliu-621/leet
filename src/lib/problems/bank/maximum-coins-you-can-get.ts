import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-coins-you-can-get',
  title: 'Maximum Coins You Can Get',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There are \`3n\` piles of coins of varying size. You and your friends will take piles of coins as follows:

- In each step, you will choose **any** 3 piles of coins (not necessarily consecutive).
- Of your chosen piles, Alice will pick the pile with the **maximum** number of coins.
- You will pick the pile with the **second maximum** number of coins.
- Your friend Bob will pick the pile with the **minimum** number of coins.

Repeat until there are no more piles of coins. Return the **maximum** number of coins you can get.`,
  constraints: [
    '3 <= piles.length <= 10^5',
    'piles.length % 3 == 0',
    '1 <= piles[i] <= 10^4',
  ],
  examples: [
    {
      input: 'piles = [2,4,1,2,7,8]',
      output: '9',
      explanation: 'Choose [2,7,8]: Alice takes 8, you take 7, Bob takes 2. Then choose [1,2,4]: Alice takes 4, you take 2, Bob takes 1. Total = 7+2 = 9.',
    },
    {
      input: 'piles = [2,4,5]',
      output: '4',
      explanation: 'Choose [2,4,5]: you take 4.',
    },
    {
      input: 'piles = [9,8,7,6,5,1,2,3,4]',
      output: '18',
      explanation: 'Sort descending: 9,8,7,6,5,4,3,2,1. Pick indices 1,3,5 (0-indexed): 8+6+4=18.',
    },
  ],
  hints: [
    'Sort the piles in descending order.',
    'In the optimal strategy, pair each of your picks with the maximum (Alice\'s pick) and the smallest possible (Bob\'s pick).',
    'After sorting descending, you get every other element starting at index 1, skipping every third element (the Bob picks at the end).',
    'Specifically: take piles[1], piles[3], piles[5], ..., piles[2k-1] where k = n/3.',
  ],
  functionName: 'maxCoins',
  params: ['piles'],
  starterCode: {
    javascript: `function maxCoins(piles) {

}`,
    typescript: "function maxCoins(piles: number[]): number {\n\n}",

    python: `def maxCoins(piles):
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 1, 2, 7, 8]], expected: 9 },
    { args: [[2, 4, 5]], expected: 4 },
    { args: [[9, 8, 7, 6, 5, 1, 2, 3, 4]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 2 },
    { args: [[10000, 9999, 1, 2, 3, 10000]], expected: 10003 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: 18 },
  ],
};
