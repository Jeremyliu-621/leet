import type { Problem } from '../types';

export const problem: Problem = {
  id: 'right-triangles',
  title: 'Right Triangles',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D boolean matrix \`grid\`.

Return *the number of **right triangles** that can be formed with three elements of* \`grid\` *such that **all of them have a value of 1***.

A set of 3 elements of \`grid\` forms a right triangle if one element is in the **same row** with exactly one of the other two elements and **same column** with the third element. The 3 elements do not have to be adjacent.`,
  constraints: [
    '1 <= grid.length, grid[0].length <= 1000',
    '0 <= grid[i][j] <= 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1,0],[0,1,1],[0,1,0]]',
      output: '2',
      explanation: 'The two right triangles both use the center cell (1,1) as the right-angle vertex, paired with cells in the same row and column.',
    },
    {
      input: 'grid = [[1,0,1],[1,0,0],[1,0,1]]',
      output: '6',
      explanation: 'Six right triangles can be formed using the 1-cells in columns 0 and 2 with the corner cells.',
    },
  ],
  hints: [
    'Count the number of 1s in each row (row_sum[r]) and each column (col_sum[c]).',
    'Each 1-cell (r, c) can be the right-angle vertex: pair any other 1 in row r with any other 1 in col c.',
    'Contribution of cell (r, c) = (row_sum[r] - 1) * (col_sum[c] - 1). Sum over all 1-cells.',
  ],
  functionName: 'numberOfRightTriangles',
  params: ['grid'],
  starterCode: {
    javascript: 'function numberOfRightTriangles(grid) {\n\n}\n',
    typescript: 'function numberOfRightTriangles(grid: number[][]): number {\n\n}\n',
    python: 'def numberOfRightTriangles(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0,1,0],[0,1,1],[0,1,0]]], expected: 2 },
    { args: [[[1,0,1],[1,0,0],[1,0,1]]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1,1],[1,1]]], expected: 4 },
    { args: [[[1,0],[0,1]]], expected: 0 },
    { args: [[[1,1,1],[1,1,1]]], expected: 12 },
    { args: [[[0,1,1],[1,1,0]]], expected: 2 },
    { args: [[[1,1],[0,1]]], expected: 1 },
    { args: [[[1,1,0],[1,0,1],[0,1,1]]], expected: 6 },
  ],
};
