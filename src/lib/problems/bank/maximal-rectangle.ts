import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximal-rectangle',
  title: 'Maximal Rectangle',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `Given a \`rows x cols\` binary matrix filled with \`'0'\`s and \`'1'\`s, find the largest rectangle containing only \`'1'\`s and return *its area*.`,
  constraints: [
    '`rows == matrix.length`',
    '`cols == matrix[i].length`',
    '`1 <= rows, cols <= 200`',
    '`matrix[i][j]` is `\'0\'` or `\'1\'`',
  ],
  examples: [
    {
      input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
      output: '6',
      explanation: 'The maximal rectangle is shown in the above picture.',
    },
    {
      input: 'matrix = [["0"]]',
      output: '0',
    },
    {
      input: 'matrix = [["1"]]',
      output: '1',
    },
  ],
  hints: [
    'Build a heights array row by row: heights[j] = consecutive 1s ending at current row in column j.',
    'For each row, compute the largest rectangle in histogram using a stack (same as problem "Largest Rectangle in Histogram").',
    'The stack approach runs in O(cols) per row, giving O(rows×cols) total.',
  ],
  functionName: 'maximalRectangle',
  params: ['matrix'],
  starterCode: {
    javascript: 'function maximalRectangle(matrix) {\n  \n}\n',
    python: 'def maximalRectangle(matrix):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]],
      expected: 6,
    },
    { args: [[['0']]], expected: 0 },
    { args: [[['1']]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[['1','1'],['1','1']]], expected: 4 },
    { args: [[['0','1'],['1','0']]], expected: 1 },
    { args: [[['1','0','1'],['1','1','1'],['0','1','1']]], expected: 4 },
    { args: [[['1','1','1','1'],['1','1','1','1']]], expected: 8 },
  ],
};
