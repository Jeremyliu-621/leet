import type { Problem } from '../types';

export const problem: Problem = {
  id: 'row-with-maximum-ones',
  title: 'Row With Maximum Ones',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a **0-indexed** \`m x n\` binary matrix \`mat\`, return an array containing the row index and column count of the row with the **maximum number** of ones. In case of ties, return the row with the **smaller** index.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 100',
    'mat[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'mat = [[0,1],[1,0]]',
      output: '[0,1]',
      explanation: 'Both rows have 1 one each. The smaller index is 0, which has 1 one at index 1.',
    },
    {
      input: 'mat = [[0,0,0],[0,1,1]]',
      output: '[1,2]',
      explanation: 'Row 1 has 2 ones (at indices 1 and 2), which is the maximum.',
    },
    {
      input: 'mat = [[0,0],[1,1],[0,0]]',
      output: '[1,2]',
      explanation: 'Row 1 has 2 ones, more than any other row.',
    },
  ],
  hints: [
    'For each row, count the number of 1s.',
    'Track the row index with the highest count. In case of a tie, keep the smaller index.',
    'Return [bestRowIndex, count].',
  ],
  functionName: 'rowAndMaximumOnes',
  params: ['mat'],
  starterCode: {
    javascript: 'function rowAndMaximumOnes(mat) {\n  \n}\n',
    typescript: 'function rowAndMaximumOnes(mat: number[][]): number[] {\n  \n}',
    python: 'def rowAndMaximumOnes(mat):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: [0, 1] },
    { args: [[[0, 0, 0], [0, 1, 1]]], expected: [1, 2] },
    { args: [[[0, 0], [1, 1], [0, 0]]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [0, 1] },
    { args: [[[0]]], expected: [0, 0] },
    { args: [[[1, 1], [1, 1]]], expected: [0, 2] },
    { args: [[[0, 0, 1], [1, 1, 1], [0, 1, 0]]], expected: [1, 3] },
  ],
};
