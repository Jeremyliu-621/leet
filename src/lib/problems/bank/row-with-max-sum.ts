import type { Problem } from '../types';

export const problem: Problem = {
  id: 'row-with-max-sum',
  title: 'Row With Max Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a 2D integer matrix, return the **index** of the row whose elements have the **largest sum**. If multiple rows share the maximum sum, return the **smallest index**.`,
  constraints: [
    '1 <= matrix.length <= 100',
    '1 <= matrix[i].length <= 100',
    '-10^4 <= matrix[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[10,0,1],[2,2,2]]',
      output: '1',
      explanation: 'Row sums: [6, 11, 6]. Row 1 has the maximum sum of 11.',
    },
    {
      input: 'matrix = [[5,5],[3,3]]',
      output: '0',
      explanation: 'Row sums: [10, 6]. Row 0 has the larger sum.',
    },
    {
      input: 'matrix = [[1,2],[3,4]]',
      output: '1',
      explanation: 'Row sums: [3, 7]. Row 1 has the larger sum.',
    },
  ],
  hints: [
    'Compute the sum of each row.',
    'Track the maximum sum and its index, updating only when a strictly larger sum is found.',
    'In Python, max(range(len(matrix)), key=lambda i: sum(matrix[i])) does this concisely.',
  ],
  functionName: 'rowWithMaxSum',
  params: ['matrix'],
  starterCode: {
    javascript: `function rowWithMaxSum(matrix) {

}`,
    typescript: `function rowWithMaxSum(matrix: number[][]): number {

}`,
    python: `def rowWithMaxSum(matrix: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [10, 0, 1], [2, 2, 2]]], expected: 1 },
    { args: [[[5, 5], [3, 3]]], expected: 0 },
    { args: [[[1, 2], [3, 4]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1, 2], [2, 1]]], expected: 0 },
    { args: [[[0, 0], [0, 1]]], expected: 1 },
    { args: [[[-1, -2], [-3, -4]]], expected: 0 },
    { args: [[[5, 5, 5], [4, 4, 4]]], expected: 0 },
    { args: [[[1, 0, 0], [0, 0, 1], [0, 5, 0]]], expected: 2 },
    { args: [[[10, -5], [3, 3], [6, 1]]], expected: 2 },
    { args: [[[1, 2, 3], [6, 0, 0]]], expected: 0 },
  ],
};
