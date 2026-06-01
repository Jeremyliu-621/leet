import type { Problem } from '../types';

export const problem: Problem = {
  id: 'difference-of-number-of-distinct-values-on-diagonals',
  title: 'Difference of Number of Distinct Values on Diagonals',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** 2D \`grid\` of size \`m x n\`, you should find the matrix \`answer\` of size \`m x n\`.

The value of each cell \`(r, c)\` of the matrix \`answer\` is calculated in the following way:

1. Let \`topLeft[r][c]\` be the number of **distinct** values in the top-left diagonal of the cell \`(r, c)\` in the matrix \`grid\`.
2. Let \`bottomRight[r][c]\` be the number of **distinct** values in the bottom-right diagonal of the cell \`(r, c)\` in the matrix \`grid\`.

Then \`answer[r][c] = |topLeft[r][c] - bottomRight[r][c]|\`.

The top-left diagonal of \`(r, c)\` includes all cells \`(r-i, c-i)\` for \`i >= 1\`. The bottom-right diagonal includes all cells \`(r+i, c+i)\` for \`i >= 1\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 100',
    '1 <= grid[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[3,1,5],[3,2,1]]',
      output: '[[1,1,0],[1,0,1],[0,1,1]]',
      explanation:
        'For (0,0): topLeft=0 (no cells), bottomRight=|{1,1}|=1 → |0-1|=1. For (1,1): topLeft=|{1}|=1, bottomRight=|{1}|=1 → 0. For (2,2): topLeft=|{1,1}|=1, bottomRight=0 → 1.',
    },
    {
      input: 'grid = [[1]]',
      output: '[[0]]',
      explanation: 'Single cell: topLeft=0, bottomRight=0 → |0-0|=0.',
    },
  ],
  hints: [
    'For each cell (r,c), scan upper-left along the diagonal to count distinct values.',
    'For each cell (r,c), scan lower-right along the diagonal to count distinct values.',
    'Use a Set to count distinct values for each direction.',
  ],
  functionName: 'differenceOfDistinctValues',
  params: ['grid'],
  starterCode: {
    javascript: 'function differenceOfDistinctValues(grid) {\n\n}\n',
    typescript: 'function differenceOfDistinctValues(grid: number[][]): number[][] {\n\n}\n',
    python: 'def differenceOfDistinctValues(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2,3],[3,1,5],[3,2,1]]], expected: [[1,1,0],[1,0,1],[0,1,1]] },
    { args: [[[1]]], expected: [[0]] },
  ],
  hiddenTests: [
    { args: [[[1,1],[1,1]]], expected: [[1,0],[0,1]] },
    { args: [[[1,2],[3,4]]], expected: [[1,0],[0,1]] },
    { args: [[[1,2,3]]], expected: [[0,0,0]] },
    { args: [[[1],[2],[3]]], expected: [[0],[0],[0]] },
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [[2,1,0],[1,0,1],[0,1,2]] },
    { args: [[[1,1,1],[1,1,1],[1,1,1]]], expected: [[1,1,0],[1,0,1],[0,1,1]] },
  ],
};
