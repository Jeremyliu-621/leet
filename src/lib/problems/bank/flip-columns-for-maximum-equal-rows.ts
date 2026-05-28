import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flip-columns-for-maximum-equal-rows',
  title: 'Flip Columns For Maximum Number of Equal Rows',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an \`m x n\` binary matrix \`matrix\`.

You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from \`0\` to \`1\` or vice versa).

Return the maximum number of rows that have all values equal after some (possibly zero) number of flips.`,
  constraints: [
    '`m == matrix.length`',
    '`n == matrix[i].length`',
    '`1 <= m, n <= 300`',
    '`matrix[i][j]` is either `0` or `1`.',
  ],
  examples: [
    { input: 'matrix = [[0,1],[1,1]]', output: '1' },
    { input: 'matrix = [[0,1],[1,0]]', output: '2' },
    { input: 'matrix = [[0,0,0],[0,0,1],[1,1,0]]', output: '2' },
  ],
  hints: [
    'Two rows are "equivalent" if one is the bitwise complement of the other (since we can flip any subset of columns).',
    'Normalize each row: if it starts with 1, flip it. Count normalized patterns.',
    'The max count across all patterns is the answer.',
  ],
  functionName: 'maxEqualRowsAfterFlips',
  params: ['matrix'],
  starterCode: {
    javascript: 'function maxEqualRowsAfterFlips(matrix) {\n  \n}\n',
    typescript: "function maxEqualRowsAfterFlips(matrix: number[][]): number {\n  \n}",

    python: 'def maxEqualRowsAfterFlips(matrix):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1], [1, 1]]], expected: 1 },
    { args: [[[0, 1], [1, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 0, 1], [1, 1, 0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 1 },
    { args: [[[0, 0], [0, 0], [0, 0]]], expected: 3 },
    { args: [[[1, 0], [0, 1], [1, 1]]], expected: 2 },
  ],
};
