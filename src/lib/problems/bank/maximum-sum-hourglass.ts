import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-hourglass',
  title: 'Maximum Sum of an Hourglass',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`m x n\` integer matrix \`grid\` where \`m >= 3\` and \`n >= 3\`.

An **hourglass** is a subset of the matrix with the following shape, centered at row \`r\`, column \`c\`:
\`\`\`
grid[r-1][c-1]  grid[r-1][c]  grid[r-1][c+1]
                grid[r][c]
grid[r+1][c-1]  grid[r+1][c]  grid[r+1][c+1]
\`\`\`

Return the **maximum** sum of the elements of any hourglass.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '3 <= m, n <= 150',
    '0 <= grid[i][j] <= 10^6',
  ],
  examples: [
    {
      input: 'grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]',
      output: '30',
      explanation: 'The best hourglass is centered at (1,1): 6+2+1+2+9+2+8 = 30.',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '35',
      explanation: 'Only one valid hourglass (center (1,1)): 1+2+3+5+7+8+9 = 35.',
    },
  ],
  hints: [
    'Iterate over all valid center positions (row in [1, m-2], col in [1, n-2]).',
    'For each center compute the 7-element hourglass sum: top row + center + bottom row.',
    'Track the running maximum.',
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
    { args: [[[0,0,0],[0,9,0],[0,0,0]]], expected: 9 },
    { args: [[[1,1,1,1],[1,1,1,1],[1,1,1,1]]], expected: 7 },
    { args: [[[2,3,4],[1,5,1],[2,1,2]]], expected: 19 },
    { args: [[[1,0,0],[0,0,0],[0,0,1]]], expected: 2 },
  ],
};
