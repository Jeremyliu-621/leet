import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-negative-numbers-in-a-sorted-matrix',
  title: 'Count Negative Numbers in a Sorted Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given a \`m x n\` matrix \`grid\` which is sorted in **non-increasing order** both **row-wise** and **column-wise**, return the *number of **negative** numbers in* \`grid\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 100',
    '-100 <= grid[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]',
      output: '8',
      explanation: 'There are 8 negative numbers: -1, -1, -1, -2, -1, -1, -2, -3.',
    },
    {
      input: 'grid = [[3,2],[1,0]]',
      output: '0',
      explanation: 'There are no negative numbers.',
    },
  ],
  hints: [
    'Brute force: scan every cell and count negatives — O(m*n).',
    'Efficient approach: start at the top-right corner. If grid[r][c] < 0, all cells below (r+1..m-1) in column c are also negative — add (m-r) to count and move left.',
    'If grid[r][c] >= 0, move down (r++).',
    'This staircase approach runs in O(m+n).',
  ],
  functionName: 'countNegatives',
  params: ['grid'],
  starterCode: {
    javascript: `function countNegatives(grid) {

}`,
    typescript: `function countNegatives(grid: number[][]): number {

}`,
    python: `def countNegatives(grid: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]], expected: 8 },
    { args: [[[3, 2], [1, 0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[-1]]], expected: 1 },
    { args: [[[0, -1]]], expected: 1 },
    { args: [[[-1, -1, -1]]], expected: 3 },
    { args: [[[5, 1, 0], [0, 0, -1], [-1, -2, -3]]], expected: 4 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
    { args: [[[-1, -1], [-1, -1]]], expected: 4 },
    { args: [[[2, 0, -1], [1, -1, -2]]], expected: 3 },
  ],
};
