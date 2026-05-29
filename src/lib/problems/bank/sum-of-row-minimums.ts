import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-row-minimums',
  title: 'Sum of Row Minimums',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D integer array \`grid\`, return the **sum of the minimum element** in each row.`,
  constraints: [
    '1 <= grid.length <= 100',
    '1 <= grid[i].length <= 100',
    '-10^4 <= grid[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '12',
      explanation: 'Row minimums: min(1,2,3)=1, min(4,5,6)=4, min(7,8,9)=7. Sum = 1+4+7 = 12.',
    },
    {
      input: 'grid = [[3,1],[9,2],[5,7]]',
      output: '8',
      explanation: 'Row minimums: 1, 2, 5. Sum = 8.',
    },
    {
      input: 'grid = [[-1,-2,-3]]',
      output: '-3',
      explanation: 'Single row. Minimum is -3.',
    },
  ],
  hints: [
    'Iterate over each row and find its minimum using Math.min(...row).',
    'Accumulate the minimum of each row into a running total.',
    'Handle negative numbers — Math.min works correctly with them.',
  ],
  functionName: 'sumOfRowMinimums',
  params: ['grid'],
  starterCode: {
    javascript: `function sumOfRowMinimums(grid) {

}`,
    typescript: `function sumOfRowMinimums(grid: number[][]): number {

}`,
    python: `def sumOfRowMinimums(grid: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 12 },
    { args: [[[3, 1], [9, 2], [5, 7]]], expected: 8 },
    { args: [[[-1, -2, -3]]], expected: -3 },
  ],
  hiddenTests: [
    { args: [[[5]]], expected: 5 },
    { args: [[[0, 0, 0]]], expected: 0 },
    { args: [[[10, 20], [30, 40]]], expected: 40 },
    { args: [[[-5, -3, -1], [2, 4, 6]]], expected: -3 },
    { args: [[[1, 1, 1], [2, 2, 2], [3, 3, 3]]], expected: 6 },
    { args: [[[100, -100], [50, 50]]], expected: -50 },
    { args: [[[7, 3, 9, 1, 5]]], expected: 1 },
    { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expected: 16 },
  ],
};
