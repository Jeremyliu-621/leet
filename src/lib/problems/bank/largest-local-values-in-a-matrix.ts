import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-local-values-in-a-matrix',
  title: 'Largest Local Values in a Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given an \`n x n\` integer matrix \`grid\`.

Generate an integer matrix \`maxLocal\` of size \`(n - 2) x (n - 2)\` such that:
- \`maxLocal[i][j]\` is equal to the **largest** value of the \`3 x 3\` matrix in \`grid\` centered around row \`i + 1\` and column \`j + 1\`.

In other words, find the largest value in every contiguous \`3 x 3\` matrix in \`grid\`.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '3 <= n <= 100',
    '1 <= grid[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]',
      output: '[[9,9],[8,6]]',
      explanation: 'Top-left 3×3: max=9. Top-right 3×3: max=9. Bottom-left 3×3: max=8. Bottom-right 3×3: max=6.',
    },
    {
      input: 'grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]',
      output: '[[2,2,2],[2,2,2],[2,2,2]]',
      explanation: 'Every 3×3 window contains the 2 at the center.',
    },
  ],
  hints: [
    'Iterate over all valid center positions (i, j) where i and j range from 1 to n-2.',
    'For each center (i, j), check all 9 cells in the 3×3 neighborhood (i-1 to i+1, j-1 to j+1) and take the max.',
    'Build the result matrix row by row.',
  ],
  functionName: 'largestLocal',
  params: ['grid'],
  starterCode: {
    javascript: `function largestLocal(grid) {
  const n = grid.length;
  return Array.from({ length: n - 2 }, (_, i) =>
    Array.from({ length: n - 2 }, (_, j) => {
      let max = 0;
      for (let di = 0; di < 3; di++) for (let dj = 0; dj < 3; dj++)
        max = Math.max(max, grid[i + di][j + dj]);
      return max;
    })
  );
}`,
    typescript: `function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  return Array.from({ length: n - 2 }, (_, i) =>
    Array.from({ length: n - 2 }, (_, j) => {
      let max = 0;
      for (let di = 0; di < 3; di++) for (let dj = 0; dj < 3; dj++)
        max = Math.max(max, grid[i + di]![j + dj]!);
      return max;
    })
  );
}`,
    python: `def largestLocal(grid):
    grid = [list(r.to_py() if hasattr(r, 'to_py') else r) for r in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    n = len(grid)
    return [[max(grid[i+di][j+dj] for di in range(3) for dj in range(3))
             for j in range(n - 2)] for i in range(n - 2)]`,
  },
  visibleTests: [
    { args: [[[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]], expected: [[9, 9], [8, 6]] },
    {
      args: [[[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]],
      expected: [[2, 2, 2], [2, 2, 2], [2, 2, 2]],
    },
  ],
  hiddenTests: [
    { args: [[[9, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: [[9]] },
    { args: [[[1, 1, 5], [1, 1, 1], [1, 1, 1]]], expected: [[5]] },
    {
      args: [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]],
      expected: [[11, 12], [15, 16]],
    },
  ],
};
