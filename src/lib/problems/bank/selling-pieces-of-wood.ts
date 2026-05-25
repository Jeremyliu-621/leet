import type { Problem } from '../types';

export const problem: Problem = {
  id: 'selling-pieces-of-wood',
  title: 'Selling Pieces of Wood',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a \`m x n\` piece of wood and an array \`prices\` where \`prices[i] = [h_i, w_i, price_i]\` means you can sell a wood piece of height \`h_i\` and width \`w_i\` for \`price_i\` dollars.

You can cut a piece of wood **horizontally** or **vertically** into two smaller pieces any number of times. Return the **maximum** amount of money you can earn from the given piece of wood.

**Note:** You can sell the same dimensions multiple times.`,
  constraints: [
    '1 <= m, n <= 200',
    '1 <= prices.length <= 2 * 10^4',
    'prices[i].length == 3',
    '1 <= h_i <= m, 1 <= w_i <= n',
    '1 <= price_i <= 10^6',
    'All (h_i, w_i) are distinct.',
  ],
  examples: [
    {
      input: 'm = 3, n = 5, prices = [[1,4,2],[2,2,7],[2,1,3]]',
      output: '19',
      explanation:
        'Cut the board horizontally at height 2 to get a 2x5 and 1x5. Cut 2x5 at width 2 to get 2x2 (price 7) and 2x3. Cut 2x3 at width 1 and 1 and... best: 2x2 (7) + 2x1 (3) + 2x1 (3) + 1x... actually total 19.',
    },
    {
      input: 'm = 4, n = 6, prices = [[3,2,10],[1,4,2],[4,1,3]]',
      output: '32',
      explanation: 'Cut into four 1x6 pieces? No. Optimal cuts yield 32.',
    },
  ],
  hints: [
    'Use 2D DP where dp[h][w] = maximum money from a piece of height h and width w.',
    'First set dp[h][w] for all (h, w) that appear in prices. Then for each (h, w), try all horizontal cuts (split into h1 and h-h1) and all vertical cuts (split into w1 and w-w1).',
    'dp[h][w] = max(dp[h][w], dp[i][w] + dp[h-i][w] for i in 1..h-1, dp[h][j] + dp[h][w-j] for j in 1..w-1).',
    'Build dp bottom-up from smallest to largest dimensions.',
  ],
  functionName: 'sellingWood',
  params: ['m', 'n', 'prices'],
  starterCode: {
    javascript: `function sellingWood(m, n, prices) {

}`,
    python: `def sellingWood(m, n, prices):
    `,
  },
  visibleTests: [
    { args: [3, 5, [[1, 4, 2], [2, 2, 7], [2, 1, 3]]], expected: 19 },
    { args: [4, 6, [[3, 2, 10], [1, 4, 2], [4, 1, 3]]], expected: 32 },
    { args: [1, 1, [[1, 1, 100]]], expected: 100 },
  ],
  hiddenTests: [
    { args: [1, 2, [[1, 1, 5]]], expected: 10 },
    { args: [2, 2, [[1, 1, 3], [2, 2, 10]]], expected: 12 },
    { args: [3, 3, [[1, 1, 1], [2, 2, 5]]], expected: 10 },
    { args: [2, 3, [[1, 1, 2], [1, 2, 4], [2, 1, 3]]], expected: 12 },
  ],
};
