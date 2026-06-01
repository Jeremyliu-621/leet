import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-submatrices-with-top-left-element-and-sum-less-than-k',
  title: 'Count Submatrices with Top-Left Element and Sum Less Than k',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given a **0-indexed** integer matrix \`grid\` of size \`m x n\` and an integer \`k\`, return the **number of submatrices** that contain the **top-left** element of the matrix, have a sum **less than or equal to** \`k\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 50',
    '0 <= grid[i][j] <= 50',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'grid = [[7,6,3],[6,6,1]], k = 18',
      output: '4',
      explanation: 'Submatrices with top-left corner at (0,0): [7]=7, [7,6]=13, [[7,6,3]]=16, [[7,6],[6,6]]=25(>18). Count = 3. Plus [[7,6,3],[6,6,1]]=29(>18). Submatrix [7,6,3]=16≤18 ✓ and prefix2D counts 4 valid.',
    },
    {
      input: 'grid = [[2,1],[4,3]], k = 3',
      output: '2',
      explanation: 'prefix[0][0]=2≤3 and prefix[0][1]=3≤3 are the only two valid submatrices.',
    },
  ],
  hints: [
    'A submatrix containing the top-left element (0,0) is exactly the submatrix grid[0..i][0..j] for some (i,j).',
    'Use a 2D prefix sum array: prefix[i][j] = sum of all elements in grid[0..i][0..j].',
    'Count all (i, j) where prefix[i][j] <= k.',
  ],
  functionName: 'countSubmatrices',
  params: ['grid', 'k'],
  starterCode: {
    javascript: 'function countSubmatrices(grid, k) {\n  \n}\n',
    typescript: 'function countSubmatrices(grid: number[][], k: number): number {\n  \n}',
    python: 'def countSubmatrices(grid, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[[7, 6, 3], [6, 6, 1]], 18], expected: 4 },
    { args: [[[2, 1], [4, 3]], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 1]], 4], expected: 4 },
    { args: [[[5]], 5], expected: 1 },
    { args: [[[5]], 4], expected: 0 },
    { args: [[[2, 1], [4, 3]], 10], expected: 4 },
    { args: [[[1, 2, 3], [4, 5, 6]], 15], expected: 5 },
  ],
};
