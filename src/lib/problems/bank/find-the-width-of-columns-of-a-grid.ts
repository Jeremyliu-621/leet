import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-width-of-columns-of-a-grid',
  title: 'Find the Width of Columns of a Grid',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** \`m x n\` integer matrix \`grid\`. The **width** of a column is the maximum **length** among all integers in the column.

- The length of an integer \`x\` with \`p\` digits is \`p\` if \`x\` is non-negative, and \`p + 1\` if \`x\` is negative (to account for the minus sign).

Return an integer array \`ans\` of size \`n\` where \`ans[i]\` is the width of the \`i\`th column.`,
  constraints: [
    '`m == grid.length`',
    '`n == grid[i].length`',
    '`1 <= m, n <= 100`',
    '`-10^9 <= grid[i][j] <= 10^9`',
  ],
  examples: [
    {
      input: 'grid = [[1],[22],[333]]',
      output: '[3]',
      explanation: 'Column 0 contains 1 (width 1), 22 (width 2), 333 (width 3). Maximum width is 3.',
    },
    {
      input: 'grid = [[-15,1,3],[15,7,12],[5,6,-2]]',
      output: '[3,1,2]',
      explanation: 'Column 0: -15(3), 15(2), 5(1) → max 3. Column 1: 1,7,6 → max 1. Column 2: 3(1), 12(2), -2(2) → max 2.',
    },
  ],
  hints: [
    'The width of a number equals the number of characters in its string representation — negative numbers include the minus sign.',
    'Iterate over every cell, convert it to a string, and keep a running maximum per column.',
    '```js\nfunction findColumnWidth(grid) {\n  const n = grid[0].length;\n  const res = new Array(n).fill(0);\n  for (const row of grid)\n    for (let j = 0; j < n; j++)\n      res[j] = Math.max(res[j], String(row[j]).length);\n  return res;\n}\n```',
  ],
  functionName: 'findColumnWidth',
  params: ['grid'],
  starterCode: {
    javascript: `function findColumnWidth(grid) {
  const n = grid[0].length, res = new Array(n).fill(0);
  for (const row of grid)
    for (let j = 0; j < n; j++)
      res[j] = Math.max(res[j], String(row[j]).length);
  return res;
}`,
    typescript: `function findColumnWidth(grid: number[][]): number[] {
  const n = grid[0].length, res = new Array(n).fill(0);
  for (const row of grid)
    for (let j = 0; j < n; j++)
      res[j] = Math.max(res[j], String(row[j]).length);
  return res;
}`,
    python: `def findColumnWidth(grid):
    n = len(grid[0])
    res = [0] * n
    for row in grid:
        for j in range(n):
            res[j] = max(res[j], len(str(row[j])))
    return res`,
  },
  visibleTests: [
    { args: [[[1], [22], [333]]], expected: [3] },
    { args: [[[-15, 1, 3], [15, 7, 12], [5, 6, -2]]], expected: [3, 1, 2] },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: [1] },
    { args: [[[-1]]], expected: [2] },
    { args: [[[1, 2, 3]]], expected: [1, 1, 1] },
    { args: [[[100, -1], [-999, 99]]], expected: [4, 2] },
    { args: [[[1000000000], [-1], [0]]], expected: [10] },
    { args: [[[-1, -22, -333]]], expected: [2, 3, 4] },
  ],
};
