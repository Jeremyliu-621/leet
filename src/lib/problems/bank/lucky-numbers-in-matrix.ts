import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lucky-numbers-in-matrix',
  title: 'Lucky Numbers in a Matrix',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an \`m x n\` matrix of **distinct** numbers, return all **lucky numbers** in the matrix in **any order**.

A **lucky number** is an element of the matrix such that it is the **minimum element in its row** and the **maximum element in its column**.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= n, m <= 50',
    '1 <= matrix[i][j] <= 10^5',
    'All elements in the matrix are distinct',
  ],
  examples: [
    {
      input: 'matrix = [[3,7,8],[9,11,13],[15,16,17]]',
      output: '[15]',
      explanation: '15 is the minimum in its row (row 2) and maximum in its column (col 0).',
    },
    {
      input: 'matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]',
      output: '[12]',
    },
    {
      input: 'matrix = [[7,8],[1,2]]',
      output: '[7]',
    },
  ],
  hints: [
    'For each row, find the minimum element and its column index.',
    'Then check if that element is the maximum in its column.',
    'Collect all such elements.',
  ],
  functionName: 'luckyNumbers',
  params: ['matrix'],
  starterCode: {
    javascript: `function luckyNumbers(matrix) {
  // Return all lucky numbers (min in row, max in column)
}`,
    python: `def luckyNumbers(matrix):
    # Return all lucky numbers (min in row, max in column)
    pass`,
  },
  visibleTests: [
    { args: [[[3,7,8],[9,11,13],[15,16,17]]], expected: [15] },
    { args: [[[1,10,4,2],[9,3,8,7],[15,16,17,12]]], expected: [12] },
    { args: [[[7,8],[1,2]]], expected: [7] },
  ],
  hiddenTests: [
    { args: [[[3,6],[7,4]]], expected: [] },
    { args: [[[1,2],[3,4]]], expected: [3] },
    { args: [[[5]]], expected: [5] },
    { args: [[[1,3],[3,2]]], expected: [] },
  ],
};
