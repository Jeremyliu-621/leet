import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-an-hourglass',
  title: 'Maximum Sum of an Hourglass',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`m x n\` integer matrix \`grid\`.

We define an **hourglass** as a part of the matrix with the following form:

\`\`\`
a b c
  d
e f g
\`\`\`

Return the **maximum** sum of the elements of an hourglass.

**Note:** There will be at least one hourglass in the grid.`,
  constraints: [
    '`m == grid.length`',
    '`n == grid[0].length`',
    '`3 <= m, n <= 150`',
    '`0 <= grid[i][j] <= 10^6`',
  ],
  examples: [
    {
      input: 'grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]',
      output: '30',
      explanation: 'The hourglass at top-left (0,0): 6+2+1+2+9+2+8=30. All other hourglasses sum to less.',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '35',
      explanation: 'Only one hourglass: 1+2+3+5+7+8+9=35.',
    },
  ],
  hints: [
    'For each valid top-left corner (i, j) of an hourglass (i.e., 0 <= i <= m-3, 0 <= j <= n-3), compute the hourglass sum.',
    'Hourglass sum = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2].',
    'Track the maximum across all valid hourglasses.',
  ],
  functionName: 'maxSum',
  params: ['grid'],
  starterCode: {
    javascript: `function maxSum(grid) {

}`,
    python: `def maxSum(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]], expected: 30 },
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: 35 },
  ],
  hiddenTests: [
    { args: [[[1,1,1],[1,1,1],[1,1,1]]], expected: 7 },
    { args: [[[0,0,0],[0,9,0],[0,0,0]]], expected: 9 },
    { args: [[[1,0,0,0],[0,0,0,0],[0,0,0,1],[0,0,0,0]]], expected: 1 },
    { args: [[[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]], expected: 35 },
    { args: [[[1,2,1],[0,5,0],[1,2,1]]], expected: 13 },
  ],
};
