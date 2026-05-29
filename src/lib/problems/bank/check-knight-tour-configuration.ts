import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-knight-tour-configuration',
  title: 'Check Knight Tour Configuration',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `There is a knight on an \`n x n\` chessboard. In a valid configuration, the knight starts at some cell and visits every cell on the board **exactly once**.

You are given an \`n x n\` integer matrix \`grid\` consisting of distinct integers from the range \`[0, n * n - 1]\` where \`grid[r][c]\` indicates that the cell \`(r, c)\` is the \`grid[r][c]th\` cell that the knight visited. The knight's **moves** are numbered from \`0\` to \`n * n - 1\`.

Return \`true\` if \`grid\` represents a valid knight tour configuration or \`false\` otherwise.

**Note** that a valid knight tour means the knight visits every cell **exactly once** and each subsequent move is a valid knight move (±1 row and ±2 columns, or ±2 rows and ±1 column).`,
  constraints: [
    'n == grid.length == grid[i].length',
    '3 <= n <= 7',
    '0 <= grid[r][c] < n * n',
    'All integers in grid are unique.',
  ],
  examples: [
    {
      input: 'grid = [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]',
      output: 'true',
      explanation: 'Every cell is visited exactly once and each step is a valid knight move.',
    },
    {
      input: 'grid = [[0,3,6],[5,8,1],[2,7,4]]',
      output: 'false',
      explanation: 'The move from cell 0 (0,0) to cell 1 (2,2) is not a valid knight move.',
    },
  ],
  hints: [
    'Build a position array: pos[k] = (r, c) where grid[r][c] == k.',
    'For each consecutive pair (k, k+1), check that |pos[k].r - pos[k+1].r| and |pos[k].c - pos[k+1].c| form a valid knight move ({1,2} or {2,1}).',
    'The knight must start at some cell (grid value 0) and each move must be exactly one of the 8 valid L-shaped moves.',
  ],
  functionName: 'checkValidGrid',
  params: ['grid'],
  starterCode: {
    javascript: `function checkValidGrid(grid) {

}`,
    typescript: `function checkValidGrid(grid: number[][]): boolean {

}`,
    python: `def checkValidGrid(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]], expected: true },
    { args: [[[0,3,6],[5,8,1],[2,7,4]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[0,3,6],[5,8,1],[2,7,4]]], expected: false },
    { args: [[[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]], expected: true },
    { args: [[[0,1,4],[5,2,7],[8,3,6]]], expected: false },
    { args: [[[0,1,2],[3,4,5],[6,7,8]]], expected: false },
  ],
};
