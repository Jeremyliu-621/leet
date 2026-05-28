import type { Problem } from '../types';

export const problem: Problem = {
  id: 'paint-house',
  title: 'Paint House',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `There is a row of \`n\` houses, each house can be painted with one of three colors: **red**, **blue**, or **green**. The cost of painting each house with a certain color is represented by an \`n × 3\` cost matrix \`costs\`.

For example, \`costs[0][0]\` is the cost of painting house 0 with red; \`costs[1][2]\` is the cost of painting house 1 with green, and so on.

Return the **minimum cost** to paint all houses such that **no two adjacent houses have the same color**.`,
  constraints: [
    'costs.length == n',
    'costs[i].length == 3',
    '1 <= n <= 100',
    '1 <= costs[i][j] <= 20',
  ],
  examples: [
    {
      input: 'costs = [[17,2,17],[16,16,5],[14,3,19]]',
      output: '10',
      explanation: 'Paint house 0 blue (2), house 1 green (5), house 2 blue (3). Minimum cost = 2 + 5 + 3 = 10.',
    },
    {
      input: 'costs = [[7,6,2]]',
      output: '2',
    },
  ],
  hints: [
    'Define dp[i][c] as the minimum cost to paint houses 0..i where house i uses color c (0=red,1=blue,2=green).',
    'dp[i][c] = costs[i][c] + min(dp[i-1][c1], dp[i-1][c2]) where c1,c2 are the two colors that are not c.',
    'You can do this in-place by modifying the costs array or using only O(1) extra space by keeping the previous row.',
  ],
  functionName: 'minCostPaintHouse',
  params: ['costs'],
  starterCode: {
    javascript: 'function minCostPaintHouse(costs) {\n\n}\n',
    python: 'def minCostPaintHouse(costs):\n    pass\n',
  },
  visibleTests: [
    { args: [[[17, 2, 17], [16, 16, 5], [14, 3, 19]]], expected: 10 },
    { args: [[[7, 6, 2]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 100, 1], [100, 1, 100], [1, 100, 1]]], expected: 3 },
    { args: [[[5, 8, 6], [19, 14, 13], [7, 5, 12], [14, 15, 17]]], expected: 37 },
    { args: [[[3, 5, 3]]], expected: 3 },
  ],
};
