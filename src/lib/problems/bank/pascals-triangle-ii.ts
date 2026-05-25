import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pascals-triangle-ii',
  title: "Pascal's Triangle II",
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer \`rowIndex\`, return the \`rowIndex\`th (0-indexed) row of **Pascal's triangle**.

In Pascal's triangle, each number is the sum of the two numbers directly above it.`,
  constraints: ['0 <= rowIndex <= 33'],
  examples: [
    {
      input: 'rowIndex = 3',
      output: '[1,3,3,1]',
    },
    {
      input: 'rowIndex = 0',
      output: '[1]',
    },
    {
      input: 'rowIndex = 1',
      output: '[1,1]',
    },
  ],
  hints: [
    'Build each row iteratively from the previous. Start with `[1]` and repeat `rowIndex` times.',
    'To update a row in-place: iterate right to left and add `row[j] += row[j-1]`.',
    'Use bigint / large integers if needed — but for rowIndex ≤ 33, regular integers fit in a 64-bit float.',
  ],
  functionName: 'getRow',
  params: ['rowIndex'],
  starterCode: {
    javascript: 'function getRow(rowIndex) {\n  \n}\n',
    python: 'def getRow(rowIndex):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: [1, 3, 3, 1] },
    { args: [0], expected: [1] },
    { args: [1], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [2], expected: [1, 2, 1] },
    { args: [4], expected: [1, 4, 6, 4, 1] },
    { args: [5], expected: [1, 5, 10, 10, 5, 1] },
    { args: [10], expected: [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1] },
  ],
};
