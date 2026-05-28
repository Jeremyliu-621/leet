import type { Problem } from '../types';

export const problem: Problem = {
  id: 'paint-house-ii',
  title: 'Paint House II',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There are a row of \`n\` houses, each house can be painted with one of the \`k\` colors. The cost of painting each house with a certain color is represented by an \`n × k\` cost matrix \`costs\`.

Return the **minimum cost** to paint all houses such that **no two adjacent houses have the same color**.`,
  constraints: [
    'costs.length == n',
    'costs[i].length == k',
    '1 <= n <= 100',
    '1 <= k <= 20',
    '1 <= costs[i][j] <= 20',
  ],
  examples: [
    {
      input: 'costs = [[1,5,3],[2,9,4]]',
      output: '5',
      explanation: 'Paint house 0 red (1) and house 1 blue (4). Min cost = 1 + 4 = 5.',
    },
    {
      input: 'costs = [[1,3],[2,4]]',
      output: '5',
      explanation: 'Paint house 0 red (1) and house 1 green (4). Min cost = 1 + 4 = 5.',
    },
  ],
  hints: [
    'For each house, track the two smallest costs from the previous row (along with their color indices). Keeping only the two minimums is sufficient to update any color in the next row.',
    'If the current color equals the index of the previous minimum, use the second minimum; otherwise use the first minimum.',
    'This gives an O(nk) algorithm instead of O(nk²).',
  ],
  functionName: 'minCostII',
  params: ['costs'],
  starterCode: {
    javascript: 'function minCostII(costs) {\n\n}\n',
    typescript: "function minCostII(costs: number[][]): number {\n\n}",

    python: 'def minCostII(costs):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 5, 3], [2, 9, 4]]], expected: 5 },
    { args: [[[1, 3], [2, 4]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[5]]], expected: 5 },
    { args: [[[1, 2, 3], [3, 2, 1], [4, 5, 6]]], expected: 6 },
    { args: [[[10, 1, 5], [7, 3, 6], [8, 2, 4]]], expected: 9 },
  ],
};
