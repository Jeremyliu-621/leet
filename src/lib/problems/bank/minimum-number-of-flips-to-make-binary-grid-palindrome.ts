import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-make-binary-grid-palindrome',
  title: 'Minimum Number of Flips to Make Binary Grid Palindrome',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`m x n\` binary matrix \`grid\`.

A row or column is considered **palindromic** if its values read the same forward and backward.

At every step, you can select any cell and flip its value (i.e., changing \`0\` to \`1\` or \`1\` to \`0\`).

Return the **minimum** number of flips needed to make all rows and columns of \`grid\` palindromic, and the total number of \`1\`s in grid **minimized**.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10^2',
    '0 <= grid[i][j] <= 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '2',
      explanation: 'Flip (0,0) and (2,2) to get [[0,0,0],[0,1,0],[0,0,0]]. All rows and columns are palindromes with minimum 1s.',
    },
    {
      input: 'grid = [[0,1],[0,1],[0,0]]',
      output: '2',
      explanation: 'Flip (0,1) and (1,1). Result [[0,0],[0,0],[0,0]] makes all rows and columns palindromes.',
    },
  ],
  hints: [
    'Consider 4-cell groups: each (r, c), (r, n-1-c), (m-1-r, c), (m-1-r, n-1-c) must all be equal. Cost = min(ones_in_group, 4 - ones_in_group).',
    'For the middle row (if m is odd), each pair (mid, c) and (mid, n-1-c) must match. If different, 1 flip.',
    'For the middle column (if n is odd), each pair (r, mid) and (m-1-r, mid) must match. If different, 1 flip.',
  ],
  functionName: 'minFlips',
  params: ['grid'],
  starterCode: {
    javascript: 'function minFlips(grid) {\n  \n}\n',
    typescript: 'function minFlips(grid: number[][]): number {\n  \n}',
    python: 'def minFlips(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[0, 1], [0, 1], [0, 0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
  ],
};
