import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-make-binary-grid-palindrome',
  title: 'Minimum Number of Flips to Make Binary Grid Palindrome',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a 0-indexed \`m x n\` binary matrix \`grid\`.

A row or column is considered a **palindrome** if its values, when read left-to-right or top-to-bottom, are the same as when read right-to-left or bottom-to-top.

In one operation you can flip any cell in \`grid\` (changing 0 to 1 or 1 to 0).

Return the **minimum** number of flips needed to make **all** rows and columns palindromes, and ensure the **total number of 1s in grid is divisible by 4**.`,
  constraints: [
    '`m == grid.length`',
    '`n == grid[i].length`',
    '`1 <= m, n <= 10^2`',
    '`0 <= grid[i][j] <= 1`',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '3',
      explanation: 'Flip (0,1), (1,0), (2,1) to make all rows and columns palindromes with total 1s divisible by 4.',
    },
    {
      input: 'grid = [[0,1],[0,1],[0,0]]',
      output: '2',
      explanation: 'Flip (0,1) and (1,1) so rows become palindromes and total 1s = 0.',
    },
    {
      input: 'grid = [[1]]',
      output: '1',
      explanation: 'The single cell must be 0 to have 0 ones (divisible by 4). Flip it.',
    },
  ],
  hints: [
    'To make all rows palindromes, for each row enforce grid[r][c] == grid[r][n-1-c]. For each symmetric pair that differs, cost 1 flip.',
    'Similarly for columns: enforce grid[r][c] == grid[m-1-r][c] for each symmetric pair.',
    'Handle rows and columns independently, then handle the center row/column if m or n is odd.',
    'For a center row (odd m), count 1s remaining and add cost to make it 0 mod 4. For a center column (odd n), same idea.',
  ],
  functionName: 'minFlips',
  params: ['grid'],
  starterCode: {
    javascript: `function minFlips(grid) {
  // Return minimum flips so all rows and columns are palindromes
  // and the total number of 1s is divisible by 4
}`,
    typescript: `function minFlips(grid: number[][]): number {
  // Return minimum flips so all rows and columns are palindromes
  // and the total number of 1s is divisible by 4
}`,
    python: `def minFlips(grid):
    # Return minimum flips so all rows and columns are palindromes
    # and the total number of 1s is divisible by 4
    pass`,
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
    { args: [[[0, 1], [0, 1], [0, 0]]], expected: 2 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 1 },
    { args: [[[0, 1, 0], [1, 0, 1], [0, 1, 0]]], expected: 0 },
    { args: [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]], expected: 0 },
    { args: [[[1, 1], [0, 0]]], expected: 2 },
  ],
};
