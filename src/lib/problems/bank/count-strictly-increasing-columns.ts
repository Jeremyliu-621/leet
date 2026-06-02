import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-strictly-increasing-columns',
  title: 'Count Strictly Increasing Columns',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given an \`m x n\` integer matrix, return the number of columns that are **strictly increasing** from top to bottom.

A column is strictly increasing if every element is strictly greater than the element directly above it.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[0].length',
    '1 ≤ m, n ≤ 50',
    '0 ≤ matrix[i][j] ≤ 100',
  ],
  examples: [
    {
      input: 'matrix = [[3,2,1],[6,5,4],[9,8,7]]',
      output: '3',
      explanation: 'All three columns ([3,6,9], [2,5,8], [1,4,7]) are strictly increasing.',
    },
    {
      input: 'matrix = [[5,3,1],[6,2,4],[7,8,3]]',
      output: '1',
      explanation: 'Only column 0 ([5,6,7]) is strictly increasing. Column 1 decreases (3→2) and column 2 decreases (4→3).',
    },
    {
      input: 'matrix = [[1,2,3],[1,2,3]]',
      output: '0',
      explanation: 'Each column has equal consecutive elements (1=1, 2=2, 3=3), so none are strictly increasing.',
    },
  ],
  hints: [
    'Iterate over each column index j from 0 to n−1.',
    'For each column, compare consecutive row pairs: if matrix[i][j] ≤ matrix[i−1][j] for any row i, the column fails.',
    'Count how many columns pass. A 1-row matrix always has all columns trivially increasing.',
  ],
  functionName: 'countIncreasingColumns',
  params: ['matrix'],
  starterCode: {
    javascript: `function countIncreasingColumns(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let count = 0;
  for (let j = 0; j < n; j++) {
    let increasing = true;
    for (let i = 1; i < m; i++) {
      if (matrix[i][j] <= matrix[i - 1][j]) { increasing = false; break; }
    }
    if (increasing) count++;
  }
  return count;
}`,
    typescript: `function countIncreasingColumns(matrix: number[][]): number {
  const m = matrix.length, n = matrix[0]!.length;
  let count = 0;
  for (let j = 0; j < n; j++) {
    let increasing = true;
    for (let i = 1; i < m; i++) {
      if (matrix[i]![j]! <= matrix[i - 1]![j]!) { increasing = false; break; }
    }
    if (increasing) count++;
  }
  return count;
}`,
    python: `def countIncreasingColumns(matrix):
    m, n = len(matrix), len(matrix[0])
    count = 0
    for j in range(n):
        if all(matrix[i][j] > matrix[i-1][j] for i in range(1, m)):
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [[[3,2,1],[6,5,4],[9,8,7]]], expected: 3 },
    { args: [[[5,3,1],[6,2,4],[7,8,3]]], expected: 1 },
    { args: [[[1,2,3],[1,2,3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1,2],[3,4]]], expected: 2 },
    { args: [[[5,1,3],[4,0,4],[3,3,5]]], expected: 1 },
    { args: [[[10,5],[20,5],[30,5]]], expected: 1 },
    { args: [[[1,2],[3,4],[5,6],[7,8]]], expected: 2 },
    { args: [[[1,1,1],[2,2,2],[3,3,3]]], expected: 3 },
    { args: [[[3,2],[2,3],[1,4]]], expected: 1 },
  ],
};
