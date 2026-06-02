import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-of-minimum-values',
  title: 'Maximum of Minimum Values',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a 2D integer matrix, return the **maximum** of the minimum value of each row.

More formally, for each row compute the minimum element in that row, then return the largest of those minimums.`,
  constraints: [
    '1 <= matrix.length <= 100',
    '1 <= matrix[i].length <= 100',
    '0 <= matrix[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '7',
      explanation: 'Row minimums are [1, 4, 7]. The maximum of [1, 4, 7] is 7.',
    },
    {
      input: 'matrix = [[3,1],[5,2]]',
      output: '2',
      explanation: 'Row minimums are [1, 2]. The maximum of [1, 2] is 2.',
    },
    {
      input: 'matrix = [[5]]',
      output: '5',
      explanation: 'There is only one row with one element, so the answer is 5.',
    },
  ],
  hints: [
    'For each row, find its minimum element.',
    'Collect all row minimums into a list, then return the maximum of that list.',
    'This can be done in one pass: track the running maximum of each row\'s minimum.',
  ],
  functionName: 'maximumOfMinimumValues',
  params: ['matrix'],
  starterCode: {
    javascript: `function maximumOfMinimumValues(matrix) {
  let result = -Infinity;
  for (const row of matrix) {
    let rowMin = Infinity;
    for (const val of row) {
      if (val < rowMin) rowMin = val;
    }
    if (rowMin > result) result = rowMin;
  }
  return result;
}`,
    typescript: `function maximumOfMinimumValues(matrix: number[][]): number {
  let result = -Infinity;
  for (const row of matrix) {
    let rowMin = Infinity;
    for (const val of row) {
      if (val < rowMin) rowMin = val;
    }
    if (rowMin > result) result = rowMin;
  }
  return result;
}`,
    python: `def maximumOfMinimumValues(matrix: list[list[int]]) -> int:
    result = float('-inf')
    for row in matrix:
        row_min = min(row)
        if row_min > result:
            result = row_min
    return result`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 7 },
    { args: [[[3, 1], [5, 2]]], expected: 2 },
    { args: [[[5]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1, 3, 2], [4, 6, 5]]], expected: 4 },
    { args: [[[10, 1, 2], [3, 4, 5]]], expected: 3 },
    { args: [[[2, 2, 2], [1, 1, 1], [3, 3, 3]]], expected: 3 },
    { args: [[[9, 8, 7], [6, 5, 4], [3, 2, 1]]], expected: 7 },
    { args: [[[0, 5, 10], [2, 3, 4]]], expected: 2 },
    { args: [[[100, 200], [300, 400]]], expected: 300 },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: 5 },
    { args: [[[7, 3, 5], [2, 8, 4]]], expected: 3 },
  ],
};
