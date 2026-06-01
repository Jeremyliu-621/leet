import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-make-binary-grid-palindromic-i',
  title: 'Minimum Number of Flips to Make Binary Grid Palindromic I',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`m x n\` binary matrix \`grid\`.

A row or column is considered **palindromic** if its values read the same forwards and backwards.

You can **flip** any cell of \`grid\` from \`0\` to \`1\` or from \`1\` to \`0\`.

Return the **minimum** number of flips required to make **either** all rows palindromic **or** all columns palindromic.`,
  constraints: [
    '1 <= m, n <= 5',
    'grid[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0],[0,0,0],[0,0,1]]',
      output: '2',
      explanation: 'To make all rows palindromic: flip grid[0][1]=0→1 and grid[2][1]=0→1. Cost=2. To make all columns palindromic would cost more.',
    },
    {
      input: 'grid = [[0,1],[0,1],[0,0]]',
      output: '1',
      explanation: 'Flipping grid[2][1]=0→1 makes all columns palindromic (each column is [0,0,0] or [1,1,1]).',
    },
    {
      input: 'grid = [[1,0],[0,0]]',
      output: '1',
      explanation: 'Row cost: [1,0] has 1 mismatch, [0,0] has 0. Total=1. Col cost: [1,0] has 1, [0,0] has 0. Total=1. min(1,1)=1.',
    },
  ],
  hints: [
    'For rows: for each row, count mismatched mirror pairs (grid[r][c] != grid[r][n-1-c] for c < n/2).',
    'For columns: for each column, count mismatched mirror pairs (grid[r][c] != grid[m-1-r][c] for r < m/2).',
    'Return min(sum of row mismatches, sum of column mismatches).',
  ],
  functionName: 'minFlips',
  params: ['grid'],
  starterCode: {
    javascript: `function minFlips(grid) {

}`,
    typescript: `function minFlips(grid: number[][]): number {

}`,
    python: `def minFlips(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[0, 1], [0, 1], [0, 0]]], expected: 1 },
    { args: [[[1, 0], [0, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 0 },
    { args: [[[1, 1], [0, 0]]], expected: 0 },
    { args: [[[1, 0], [1, 0]]], expected: 0 },
    { args: [[[0, 1], [1, 0]]], expected: 2 },
    { args: [[[1, 0, 1], [0, 1, 0]]], expected: 0 },
    { args: [[[1, 0, 0, 1], [1, 0, 0, 1]]], expected: 0 },
  ],
};
