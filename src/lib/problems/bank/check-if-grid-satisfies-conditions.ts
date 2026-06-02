import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-grid-satisfies-conditions',
  title: 'Check if Grid Satisfies Conditions',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **2D** matrix \`grid\` of size \`m x n\`. You need to check if every cell \`grid[i][j]\` satisfies **both** of the following conditions:

- \`grid[i][j]\` equals \`grid[i + 1][j]\` for all valid positions where \`i + 1 < m\` (same value going down each column).
- \`grid[i][j]\` does not equal \`grid[i][j + 1]\` for all valid positions where \`j + 1 < n\` (adjacent columns have different values).

Return \`true\` if the grid satisfies all the conditions. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= n, m <= 10',
    '0 <= grid[i][j] <= 9',
  ],
  examples: [
    {
      input: 'grid = [[1,0,2],[1,0,2]]',
      output: 'true',
      explanation: 'Every column has the same value (1, 0, 2 repeated), and adjacent columns have different values.',
    },
    {
      input: 'grid = [[1,1,1],[0,0,0]]',
      output: 'false',
      explanation: 'grid[0][0] = 1 equals grid[0][1] = 1, violating the second condition.',
    },
    {
      input: 'grid = [[1],[2],[3]]',
      output: 'false',
      explanation: 'grid[0][0] = 1 does not equal grid[1][0] = 2, violating the first condition.',
    },
  ],
  hints: [
    'Iterate through every cell (i, j). For each cell, check both conditions: does it equal the cell below, and is it different from the cell to the right?',
    'The first condition requires grid[i][j] === grid[i+1][j] for all rows except the last. The second requires grid[i][j] !== grid[i][j+1] for all columns except the last.',
    'Return false the moment any violation is found; otherwise return true after checking all cells.',
  ],
  functionName: 'satisfiesConditions',
  params: ['grid'],
  starterCode: {
    javascript: `function satisfiesConditions(grid) {
  const m = grid.length, n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m && grid[i][j] !== grid[i + 1][j]) return false;
      if (j + 1 < n && grid[i][j] === grid[i][j + 1]) return false;
    }
  }
  return true;
}`,
    typescript: `function satisfiesConditions(grid: number[][]): boolean {
  const m = grid.length, n = grid[0]!.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m && grid[i]![j] !== grid[i + 1]![j]) return false;
      if (j + 1 < n && grid[i]![j] === grid[i]![j + 1]) return false;
    }
  }
  return true;
}`,
    python: `def satisfiesConditions(grid):
    m, n = len(grid), len(grid[0])
    for i in range(m):
        for j in range(n):
            if i + 1 < m and grid[i][j] != grid[i+1][j]:
                return False
            if j + 1 < n and grid[i][j] == grid[i][j+1]:
                return False
    return True`,
  },
  visibleTests: [
    { args: [[[1, 0, 2], [1, 0, 2]]], expected: true },
    { args: [[[1, 1, 1], [0, 0, 0]]], expected: false },
    { args: [[[1], [2], [3]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: true },
    { args: [[[1, 2], [1, 2], [1, 2]]], expected: true },
    { args: [[[0, 1, 0], [0, 1, 0]]], expected: true },
    { args: [[[1, 2], [2, 1]]], expected: false },
    { args: [[[5, 3], [5, 3], [5, 3]]], expected: true },
    { args: [[[0, 0]]], expected: false },
    { args: [[[9, 8, 7], [9, 8, 7], [9, 8, 7]]], expected: true },
    { args: [[[1, 2, 2], [1, 2, 2]]], expected: false },
  ],
};
