import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query-2d',
  title: 'Range Sum Query 2D — Immutable',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a 2D matrix \`matrix\`, handle multiple queries of the following type:

Calculate the **sum** of the elements of \`matrix\` inside the rectangle defined by its **upper left corner** \`(row1, col1)\` and **lower right corner** \`(row2, col2)\`.

Implement a function \`sumRegion(matrix, row1, col1, row2, col2)\` that returns the sum of elements in the rectangle.`,
  constraints: [
    '`m == matrix.length`',
    '`n == matrix[i].length`',
    '`1 <= m, n <= 200`',
    '`-10^4 <= matrix[i][j] <= 10^4`',
    '`0 <= row1 <= row2 < m`',
    '`0 <= col1 <= col2 < n`',
  ],
  examples: [
    {
      input: 'matrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]], row1=2, col1=1, row2=4, col2=3',
      output: '8',
      explanation: 'Sum of the rectangle from (2,1) to (4,3) is 2+0+1+1+0+1+0+3+0 = 8.',
    },
    {
      input: 'row1=1, col1=1, row2=2, col2=2',
      output: '11',
    },
    {
      input: 'row1=1, col1=2, row2=2, col2=4',
      output: '12',
    },
  ],
  hints: [
    'Build a 2D prefix sum array where `prefix[i][j]` is the sum of all elements from (0,0) to (i-1,j-1). Then the region sum is `prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]`.',
  ],
  functionName: 'sumRegion',
  params: ['matrix', 'row1', 'col1', 'row2', 'col2'],
  starterCode: {
    javascript: `function sumRegion(matrix, row1, col1, row2, col2) {

}`,
    python: `def sumRegion(matrix, row1, col1, row2, col2):
    pass`,
  },
  visibleTests: [
    {
      args: [[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]], 2, 1, 4, 3],
      expected: 8,
    },
    {
      args: [[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]], 1, 1, 2, 2],
      expected: 11,
    },
    {
      args: [[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]], 1, 2, 2, 4],
      expected: 12,
    },
  ],
  hiddenTests: [
    { args: [[[1]], 0, 0, 0, 0], expected: 1 },
    { args: [[[1, 2], [3, 4]], 0, 0, 1, 1], expected: 10 },
    { args: [[[1, 2], [3, 4]], 0, 0, 0, 0], expected: 1 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 0, 2, 2], expected: 45 },
    {
      args: [[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]], 0, 0, 4, 4],
      expected: 58,
    },
  ],
};
