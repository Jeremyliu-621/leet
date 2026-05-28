import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-make-binary-grid-palindromic-ii',
  title: 'Minimum Number of Flips to Make Binary Grid Palindromic II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`m x n\` binary matrix \`grid\`. A flip changes a cell value from \`0\` to \`1\` or vice versa.

Return the **minimum number of flips** to make \`grid\` satisfy both:
1. Every **row** is a palindrome (\`grid[i][j] == grid[i][n-1-j]\` for all valid \`i, j\`).
2. Every **column** is a palindrome (\`grid[i][j] == grid[m-1-i][j]\` for all valid \`i, j\`).`,
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 512',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '2',
      explanation: 'The four corners form a group that must all match. Currently two are 1 and two are 0 — flip two to make them all 0 (cost 2).',
    },
    {
      input: 'grid = [[0,1],[0,1]]',
      output: '2',
      explanation: 'All four cells must be equal. Currently two 0s and two 1s — 2 flips to make all 0 or all 1.',
    },
    {
      input: 'grid = [[1,1],[1,1]]',
      output: '0',
      explanation: 'Already satisfies both conditions.',
    },
  ],
  hints: [
    'Both constraints together mean grid[i][j] = grid[i][n-1-j] = grid[m-1-i][j] = grid[m-1-i][n-1-j]. For each such group of four cells, flip the minority to match the majority.',
    'Handle the middle row (when m is odd) and middle column (when n is odd) separately — these form groups of 2 that only need to satisfy one palindrome constraint. Flip if the pair differs.',
    'Iterate i < m/2 and j < n/2 for groups of four. Then check the middle row (if m is odd) for pairs, and the middle column (if n is odd) for pairs. The center cell (if both m and n are odd) needs no flips.',
  ],
  functionName: 'minFlips',
  params: ['grid'],
  starterCode: {
    javascript: `function minFlips(grid) {

}`,
    typescript: `function minFlips(grid: number[][]): number {

}`,
    python: `def minFlips(grid):
    pass
`,
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[0, 1], [0, 1]]], expected: 2 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 0, 1], [0, 1, 0], [1, 0, 1]]], expected: 0 },
    { args: [[[1, 1, 0, 0]]], expected: 2 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
    { args: [[[1]]], expected: 0 },
    { args: [[[0, 1, 0], [1, 1, 1], [0, 1, 0]]], expected: 0 },
    { args: [[[0, 0, 1], [0, 1, 0], [1, 0, 0]]], expected: 2 },
    { args: [[[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 1]]], expected: 1 },
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 1, 1], [0, 0, 0], [1, 1, 1]]], expected: 0 },
    { args: [[[1, 0], [1, 0]]], expected: 2 },
  ],
};
