import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-the-matrix-diagonally',
  title: 'Sort the Matrix Diagonally',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `A **matrix diagonal** is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until it reaches the matrix's right or bottom edge.

For example, in a matrix \`mat\` with 3 rows and 4 columns, the diagonal starting at \`mat[0][1]\` contains cells \`mat[0][1]\`, \`mat[1][2]\`, and \`mat[2][3]\`.

Given an \`m × n\` integer matrix \`mat\`, sort **each** matrix diagonal in **ascending order** and return the resulting matrix.`,
  constraints: [
    'm == mat.length',
    'n == mat[0].length',
    '1 <= m, n <= 100',
    '1 <= mat[i][j] <= 100',
  ],
  examples: [
    {
      input: 'mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]',
      output: '[[1,1,1,1],[1,2,2,2],[1,2,3,3]]',
      explanation:
        'Each diagonal is sorted in ascending order. The main diagonal [3,2,1] becomes [1,2,3], etc.',
    },
    {
      input: 'mat = [[5,2],[3,1]]',
      output: '[[1,2],[3,5]]',
      explanation:
        'Main diagonal [5,1] → [1,5]. Anti-diagonals [2] and [3] stay unchanged.',
    },
    {
      input: 'mat = [[1]]',
      output: '[[1]]',
      explanation: 'A single-cell matrix is already sorted.',
    },
  ],
  hints: [
    'Level 1: Cells on the same diagonal share the same value of (row - col). Use this as a key to group them.',
    'Level 2: For each unique key, collect the values, sort ascending, then write them back to the matrix cells in top-to-bottom order (i.e., smallest row index first).',
    'Level 3: Collect all cells into a Map keyed by (r - c). After sorting each group, iterate r from 0 to m-1 and c from 0 to n-1, popping from the front of the sorted group for key (r - c).',
  ],
  functionName: 'diagonalSort',
  params: ['mat'],
  starterCode: {
    javascript: `function diagonalSort(mat) {

}`,
    typescript: `function diagonalSort(mat: number[][]): number[][] {

}`,
    python: `def diagonalSort(mat):
    pass`,
  },
  visibleTests: [
    {
      args: [[[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]],
      expected: [[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3]],
    },
    {
      args: [[[5, 2], [3, 1]]],
      expected: [[1, 2], [3, 5]],
    },
    {
      args: [[[1]]],
      expected: [[1]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 2], [3, 4]]],
      expected: [[1, 2], [3, 4]],
    },
    {
      args: [[[4, 2], [3, 1]]],
      expected: [[1, 2], [3, 4]],
    },
    {
      args: [[[5, 2, 1], [3, 4, 6], [8, 7, 9]]],
      expected: [[4, 2, 1], [3, 5, 6], [8, 7, 9]],
    },
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
      expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    },
    {
      args: [[[9, 8, 7], [6, 5, 4], [3, 2, 1]]],
      expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
    },
    {
      args: [[[3, 1, 2], [9, 8, 7], [5, 4, 6]]],
      expected: [[3, 1, 2], [4, 6, 7], [5, 9, 8]],
    },
  ],
};
