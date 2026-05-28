import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-matrix-is-x-matrix',
  title: 'Check if Matrix Is X-Matrix',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `A square matrix is called an **X-Matrix** if **both** of the following conditions hold:

1. All the elements in the diagonals of the matrix are **non-zero**.
2. All other elements are **0**.

Given a 2D integer array \`grid\` of size \`n x n\` representing a square matrix, return \`true\` if \`grid\` is an X-Matrix. Otherwise, return \`false\`.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '3 <= n <= 100',
    '0 <= grid[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]',
      output: 'true',
      explanation: 'All diagonal elements are non-zero, and all off-diagonal elements are 0.',
    },
    {
      input: 'grid = [[5,7,0],[0,3,1],[0,5,0]]',
      output: 'false',
      explanation: 'The element at [0][1]=7 is not on a diagonal but is non-zero.',
    },
  ],
  hints: [
    'For each position (i, j), check if it is on a diagonal (i==j or i+j==n-1).',
    'If on a diagonal, the element must be non-zero. If not on a diagonal, it must be zero.',
    'Return false if any element violates these conditions.',
  ],
  functionName: 'checkXMatrix',
  params: ['grid'],
  starterCode: {
    javascript: `function checkXMatrix(grid) {

}`,
    typescript: "function checkXMatrix(grid: number[][]): boolean {\n\n}",

    python: `def checkXMatrix(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]], expected: true },
    { args: [[[5, 7, 0], [0, 3, 1], [0, 5, 0]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[1, 0, 1], [0, 1, 0], [1, 0, 1]]], expected: true },
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: false },
    { args: [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]], expected: false },
  ],
};
