import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-column-maximums',
  title: 'Sum of Column Maximums',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D integer array \`grid\`, return the **sum of the maximum element** in each column.`,
  constraints: [
    '1 <= grid.length <= 100',
    '1 <= grid[0].length <= 100',
    '-10^4 <= grid[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '24',
      explanation: 'Column maximums: max(1,4,7)=7, max(2,5,8)=8, max(3,6,9)=9. Sum = 7+8+9 = 24.',
    },
    {
      input: 'grid = [[3,1],[9,2],[5,7]]',
      output: '16',
      explanation: 'Column maximums: max(3,9,5)=9, max(1,2,7)=7. Sum = 9+7 = 16.',
    },
    {
      input: 'grid = [[-1,-2,-3]]',
      output: '-6',
      explanation: 'Single row. Column maxes are the elements themselves: -1+-2+-3 = -6.',
    },
  ],
  hints: [
    'Iterate over each column index j from 0 to (number of columns - 1).',
    'For each column, collect all values grid[i][j] and take the maximum.',
    'Sum the column maxima — be mindful of grids with negative values.',
  ],
  functionName: 'sumOfColumnMaximums',
  params: ['grid'],
  starterCode: {
    javascript: `function sumOfColumnMaximums(grid) {

}`,
    typescript: `function sumOfColumnMaximums(grid: number[][]): number {

}`,
    python: `def sumOfColumnMaximums(grid: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 24 },
    { args: [[[3, 1], [9, 2], [5, 7]]], expected: 16 },
    { args: [[[-1, -2, -3]]], expected: -6 },
  ],
  hiddenTests: [
    { args: [[[5]]], expected: 5 },
    { args: [[[0, 0, 0]]], expected: 0 },
    { args: [[[10, 20], [30, 40]]], expected: 70 },
    { args: [[[-5, -3, -1], [2, 4, 6]]], expected: 12 },
    { args: [[[1, 1, 1], [2, 2, 2], [3, 3, 3]]], expected: 9 },
    { args: [[[100, -100], [50, 50]]], expected: 150 },
    { args: [[[7, 3, 9, 1, 5]]], expected: 25 },
    { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expected: 15 },
  ],
};
