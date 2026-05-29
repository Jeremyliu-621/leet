import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query-2d-immutable',
  title: 'Range Sum Query 2D - Immutable',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'design'],
  description: `Given a 2D matrix \`matrix\`, handle multiple queries of the following type:

- \`sumRegion(row1, col1, row2, col2)\`: return the sum of the elements of \`matrix\` inside the rectangle defined by its upper left corner \`(row1, col1)\` and lower right corner \`(row2, col2)\`.

Implement the \`NumMatrix\` class. The function \`numMatrixRunner(ops, args)\` is used for testing.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 200',
    '-10^4 <= matrix[i][j] <= 10^4',
    '0 <= row1 <= row2 < m',
    '0 <= col1 <= col2 < n',
    'At most 10^4 calls to sumRegion.',
  ],
  examples: [
    {
      input: 'ops = ["NumMatrix","sumRegion","sumRegion","sumRegion"], matrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]',
      output: '[null,8,11,12]',
      explanation: 'sumRegion(2,1,4,3) = 8; sumRegion(1,1,2,2) = 11; sumRegion(1,2,2,4) = 12.',
    },
  ],
  hints: [
    'Precompute a 2D prefix sum table: prefix[i][j] = sum of all elements in the rectangle [0..i-1][0..j-1].',
    'prefix[i][j] = matrix[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1].',
    'sumRegion(r1,c1,r2,c2) = prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1].',
  ],
  functionName: 'numMatrixRunner',
  params: ['ops', 'args'],
  starterCode: {
    javascript: 'function numMatrixRunner(ops, args) {\n  \n}\n',
    typescript: 'function numMatrixRunner(ops: string[], args: (number[][] | number[])[]): (null | number)[] {\n  \n}\n',
    python: 'def numMatrixRunner(ops, args):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['NumMatrix', 'sumRegion', 'sumRegion', 'sumRegion'],
        [[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]],
      ],
      expected: [null, 8, 11, 12],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['NumMatrix', 'sumRegion'],
        [[[1, 2], [3, 4]], [0, 0, 1, 1]],
      ],
      expected: [null, 10],
    },
    {
      args: [
        ['NumMatrix', 'sumRegion', 'sumRegion'],
        [[[1]], [0, 0, 0, 0], [0, 0, 0, 0]],
      ],
      expected: [null, 1, 1],
    },
    {
      args: [
        ['NumMatrix', 'sumRegion', 'sumRegion'],
        [[[-1, 2, 3], [4, -5, 6], [7, 8, -9]], [0, 0, 2, 2], [1, 1, 2, 2]],
      ],
      expected: [null, 15, 0],
    },
  ],
};
