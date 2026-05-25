import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-falling-path-sum-ii',
  title: 'Minimum Falling Path Sum II',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an \`n x n\` integer matrix \`grid\`, return the **minimum sum** of a **falling path with non-zero shifts**.

A **falling path with non-zero shifts** is a choice of exactly one element from each row of \`grid\` such that no two elements chosen in adjacent rows are in the **same** column.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 200',
    '-99 <= grid[i][j] <= 99',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '13',
      explanation: 'The falling path is (0,0)=1 → (1,1)=5 → (2,0)=7. Sum = 13.',
    },
    {
      input: 'grid = [[7]]',
      output: '7',
    },
  ],
  hints: [
    'Track the two smallest values (and their column indices) from the previous row.',
    'For each cell in the current row, add the smallest previous value if the column differs, otherwise the second smallest.',
  ],
  functionName: 'minFallingPathSumII',
  params: ['grid'],
  starterCode: {
    javascript: 'function minFallingPathSumII(grid) {\n\n}\n',
    python: 'def minFallingPathSumII(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 13 },
    { args: [[[7]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 2], [3, 4]]], expected: 5 },
    { args: [[[2, 1, 3], [6, 5, 4], [7, 8, 9]]], expected: 12 },
    { args: [[[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [5, 6, 7, 8]]], expected: 14 },
  ],
};
