import type { Problem } from '../types';

export const problem: Problem = {
  id: 'paint-house-iii',
  title: 'Paint House III',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There is a row of \`m\` houses in a small city, each house must be painted with one of the \`n\` colors (labeled from \`1\` to \`n\`). Some houses that have been painted last summer should not be painted again.

A neighborhood is a maximal group of **consecutive** houses painted with the same color.

Given an array \`houses\`, an array \`cost\`, an integer \`m\`, an integer \`n\`, and an integer \`target\`:
- \`houses[i]\`: the color of house \`i\` (\`0\` if not yet painted).
- \`cost[i][j]\`: the cost of painting house \`i\` with color \`j+1\`.
- \`m\`: number of houses.
- \`n\`: number of colors.
- \`target\`: desired number of neighborhoods.

Return the **minimum cost** of painting all the remaining houses such that exactly \`target\` neighborhoods are formed. If it is not possible, return \`-1\`.`,
  constraints: [
    'm == houses.length == cost.length',
    'n == cost[i].length',
    '1 <= m <= 100',
    '1 <= n <= 20',
    '1 <= target <= m',
    '0 <= houses[i] <= n',
    '1 <= cost[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3',
      output: '9',
    },
    {
      input: 'houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3',
      output: '11',
    },
    {
      input: 'houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n = 3, target = 3',
      output: '-1',
    },
  ],
  hints: [
    'dp[i][j][k] = min cost to paint houses 0..i such that house i has color j and there are k neighborhoods.',
    'If houses[i] != 0, only one color is allowed for house i — skip others.',
    'Transition: dp[i][j][k] = min over all prev colors p: (cost of coloring i with j) + dp[i-1][p][k - (p!=j ? 1 : 0)].',
    'Initialize INF for all states; base case: i=0 with 1 neighborhood. Return min over j of dp[m-1][j][target], or -1.',
  ],
  functionName: 'minCost',
  params: ['houses', 'cost', 'm', 'n', 'target'],
  starterCode: {
    javascript: 'function minCost(houses, cost, m, n, target) {\n\n}\n',
    typescript: "function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {\n\n}",

    python: 'def minCost(houses, cost, m, n, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,0,0,0,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3], expected: 9 },
    { args: [[0,2,1,2,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3], expected: 11 },
    { args: [[3,1,2,3], [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], 4, 3, 3], expected: -1 },
  ],
  hiddenTests: [
    { args: [[0], [[5,10]], 1, 2, 1], expected: 5 },
    { args: [[1,0], [[5,10],[1,2]], 2, 2, 1], expected: 1 },
    { args: [[1,0], [[5,10],[1,2]], 2, 2, 2], expected: 2 },
    { args: [[0,0,0], [[1,2,3],[4,5,6],[7,8,9]], 3, 3, 2], expected: 13 },
  ],
};
