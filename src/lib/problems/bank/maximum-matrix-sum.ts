import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-matrix-sum',
  title: 'Maximum Matrix Sum',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an \`n x n\` integer matrix \`matrix\`. You can do the following operation **any number of times**:

Choose any two **adjacent** elements of \`matrix\` and **multiply each of them by \`-1\`**.

Two elements are considered **adjacent** if and only if they share a **border**.

Your goal is to **maximize** the summation of the matrix's elements. Return the **maximum** sum of the matrix's elements using the operation mentioned above.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '2 <= n <= 250',
    '-10^5 <= matrix[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'matrix = [[1,-1],[-1,1]]',
      output: '4',
      explanation: 'Flip both negatives: all elements become 1, sum = 4.',
    },
    {
      input: 'matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]',
      output: '16',
      explanation: 'Flip negative elements by moving them together. Sum of all abs values = 16.',
    },
  ],
  hints: [
    'You can always move any negative number to be adjacent to another negative, then flip both.',
    'If the count of negative numbers is even, the answer is the sum of all absolute values.',
    'If the count of negative numbers is odd, you must leave one negative — choose the one with the smallest absolute value.',
  ],
  functionName: 'maxMatrixSum',
  params: ['matrix'],
  starterCode: {
    javascript: `function maxMatrixSum(matrix) {

}`,
    python: `def maxMatrixSum(matrix):
    pass`,
  },
  visibleTests: [
    { args: [[[1, -1], [-1, 1]]], expected: 4 },
    { args: [[[1, 2, 3], [-1, -2, -3], [1, 2, 3]]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 1]]], expected: 4 },
    { args: [[[-1, -1], [-1, -1]]], expected: 4 },
    { args: [[[1, -1, 1], [1, 1, 1], [1, 1, 1]]], expected: 7 },
    { args: [[[2, -3], [1, 4]]], expected: 8 },
  ],
};
