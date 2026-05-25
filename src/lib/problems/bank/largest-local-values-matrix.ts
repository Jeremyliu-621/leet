import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-local-values-matrix',
  title: 'Largest Local Values in a Matrix',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an \`n x n\` integer matrix \`grid\`.

Generate an integer matrix \`maxLocal\` of size \`(n - 2) x (n - 2)\` such that:

- \`maxLocal[i][j]\` is equal to the **largest** value of the \`3 x 3\` matrix in \`grid\` centered around row \`i + 1\` and column \`j + 1\`.

In other words, we want to find the largest value in every contiguous \`3 x 3\` matrix in \`grid\`.

Return the generated matrix.`,
  constraints: [
    '`n == grid.length == grid[i].length`',
    '`3 <= n <= 100`',
    '`1 <= grid[i][j] <= 100`',
  ],
  examples: [
    {
      input: 'grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]',
      output: '[[9,9],[8,6]]',
      explanation: 'Top-left 3x3 max is 9; top-right 3x3 max is 9; bottom-left 3x3 max is 8; bottom-right 3x3 max is 6.',
    },
    {
      input: 'grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]',
      output: '[[2,2,2],[2,2,2],[2,2,2]]',
      explanation: 'Every 3x3 sub-grid contains the element 2.',
    },
  ],
  hints: [
    'For each valid (i, j), iterate over the 3x3 window starting at (i, j) and find the maximum.',
  ],
  functionName: 'largestLocal',
  params: ['grid'],
  starterCode: {
    javascript: 'function largestLocal(grid) {\n  \n}\n',
    python: 'def largestLocal(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]], expected: [[9, 9], [8, 6]] },
    { args: [[[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]], expected: [[2, 2, 2], [2, 2, 2], [2, 2, 2]] },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [[9]] },
    { args: [[[100, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: [[100]] },
  ],
};
