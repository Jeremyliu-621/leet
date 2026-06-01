import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-columns-strictly-increasing',
  title: 'Minimum Operations to Make Columns Strictly Increasing',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a \`m x n\` matrix \`grid\` consisting of **non-negative** integers.

In one operation, you can increment the value in any cell by 1.

Return the **minimum** number of operations needed to make **all columns** of \`grid\` **strictly increasing**.`,
  constraints: [
    '1 <= m <= 50',
    '1 <= n <= 50',
    '0 <= grid[i][j] < m * n',
  ],
  examples: [
    {
      input: 'grid = [[3,2],[1,3],[3,4],[0,1]]',
      output: '15',
      explanation: 'To make column 0 strictly increasing: [3,1,3,0] → need to change 1→4, 3→5, 0→6. That is (4-1)+(5-3)+(6-0)=3+2+6=11. Column 1: [2,3,4,1] → need 1→5: 4 ops. Total=15.',
    },
    {
      input: 'grid = [[3,2,1],[2,1,0],[1,2,3]]',
      output: '12',
      explanation: 'Each column needs to be made strictly increasing from top to bottom.',
    },
    {
      input: 'grid = [[1],[2],[3]]',
      output: '0',
      explanation: 'Column [1,2,3] is already strictly increasing.',
    },
  ],
  hints: [
    'For each column, process top-to-bottom. If grid[i][j] <= grid[i-1][j], set grid[i][j] = grid[i-1][j] + 1.',
    'The number of operations for a cell update is the new value minus the old value.',
    'Sum up all operations across all columns.',
  ],
  functionName: 'minimumOperations',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumOperations(grid) {

}`,
    typescript: `function minimumOperations(grid: number[][]): number {

}`,
    python: `def minimumOperations(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[3, 2], [1, 3], [3, 4], [0, 1]]], expected: 15 },
    { args: [[[3, 2, 1], [2, 1, 0], [1, 2, 3]]], expected: 12 },
    { args: [[[1], [2], [3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[1, 1], [1, 1]]], expected: 2 },
    { args: [[[0]]], expected: 0 },
    { args: [[[5, 3], [2, 4]]], expected: 4 },
    { args: [[[1, 2, 3], [1, 2, 3]]], expected: 3 },
    { args: [[[3, 1], [2, 2], [1, 3]]], expected: 6 },
  ],
};
