import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-boundary-sum',
  title: 'Matrix Boundary Sum',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given an \`m x n\` integer matrix \`grid\`, return the **sum of all boundary elements**.

The boundary consists of every element in the **first row**, **last row**, **first column**, and **last column**. No element is counted more than once (corner elements belong to both a row and a column, but are summed only once).

For example, in a 3×3 matrix the center element is the only non-boundary element:
\`\`\`
1 2 3   ← entire row is boundary
4 5 6   ← only 4 and 6 are boundary
7 8 9   ← entire row is boundary
\`\`\`
Boundary sum = 1+2+3+4+6+7+8+9 = **40**.`,
  constraints: [
    '1 <= m, n <= 100',
    '-1000 <= grid[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '40',
      explanation: 'All elements except the center (5) are on the boundary. 1+2+3+4+6+7+8+9 = 40.',
    },
    {
      input: 'grid = [[5]]',
      output: '5',
      explanation: 'A single element is always on the boundary.',
    },
    {
      input: 'grid = [[1,2,3]]',
      output: '6',
      explanation: 'A single-row matrix has every element on the boundary.',
    },
  ],
  functionName: 'matrixBoundarySum',
  params: ['grid'],
  starterCode: {
    javascript: `function matrixBoundarySum(grid) {
  const m = grid.length, n = grid[0].length;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) sum += grid[i][j];
    }
  }
  return sum;
}`,
    typescript: `function matrixBoundarySum(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) sum += grid[i]![j]!;
    }
  }
  return sum;
}`,
    python: `def matrixBoundarySum(grid):
    grid = [list(r.to_py() if hasattr(r, 'to_py') else r) for r in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    m, n = len(grid), len(grid[0])
    return sum(grid[i][j] for i in range(m) for j in range(n)
               if i == 0 or i == m - 1 or j == 0 or j == n - 1)`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 40 },
    { args: [[[5]]], expected: 5 },
    { args: [[[1, 2, 3]]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[1], [2], [3]]], expected: 6 },
    { args: [[[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]], expected: -40 },
    { args: [[[2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12, 13]]], expected: 75 },
    { args: [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]], expected: 102 },
    { args: [[[0, 0, 0], [0, 100, 0], [0, 0, 0]]], expected: 0 },
    { args: [[[10, 20], [30, 40], [50, 60]]], expected: 210 },
  ],
  hints: [
    'An element at row `i`, column `j` is on the boundary if `i === 0`, `i === m-1`, `j === 0`, or `j === n-1`.',
    'Iterate over every element with two nested loops and accumulate the sum when any boundary condition is true. This is O(m×n) time and O(1) extra space.',
    'You can also sum the top row, bottom row, then add the leftmost and rightmost elements of the middle rows only (to avoid double-counting corners).',
  ],
};
