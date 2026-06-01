import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-a-uni-value-grid',
  title: 'Minimum Operations to Make a Uni-Value Grid',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D integer \`grid\` of size \`m x n\` and an integer \`x\`. In one operation, you can **add** or **subtract** \`x\` from any element of the grid.

A **uni-value grid** is a grid where all the elements of the grid are equal.

Return the **minimum** number of operations to make the grid uni-value. If it is not possible, return \`-1\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    '1 <= x <= 10^4',
    '1 <= grid[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'grid = [[2,4],[6,8]], x = 2',
      output: '4',
      explanation:
        'Target value 4: |2-4|/2 + |4-4|/2 + |6-4|/2 + |8-4|/2 = 1+0+1+2 = 4.',
    },
    {
      input: 'grid = [[1,5],[2,3]], x = 1',
      output: '5',
      explanation: 'Optimal target is median = 3: |1-3|+|5-3|+|2-3|+|3-3| = 2+2+1+0 = 5.',
    },
    {
      input: 'grid = [[1,2],[3,4]], x = 2',
      output: '-1',
      explanation:
        'Elements have different remainders mod 2 (odd and even), so it is impossible.',
    },
  ],
  hints: [
    'Level 1: If any two elements have different remainders mod x, return -1. Otherwise, divide all values by x; the problem reduces to making all values equal with unit steps.',
    'Level 2: The optimal target value is the **median** of all elements (minimizes sum of absolute deviations).',
    'Level 3: Flatten and sort the grid, find the median element, sum |element - median| / x for all elements.',
  ],
  functionName: 'minOperations',
  params: ['grid', 'x'],
  starterCode: {
    javascript: `function minOperations(grid, x) {
  const flat = grid.flat().sort((a, b) => a - b);
  const rem = flat[0] % x;
  if (flat.some(v => v % x !== rem)) return -1;
  const median = flat[Math.floor(flat.length / 2)];
  return flat.reduce((acc, v) => acc + Math.abs(v - median) / x, 0);
}`,
    typescript: `function minOperations(grid: number[][], x: number): number {
  const flat = grid.flat().sort((a, b) => a - b);
  const rem = flat[0]! % x;
  if (flat.some(v => v % x !== rem)) return -1;
  const median = flat[Math.floor(flat.length / 2)]!;
  return flat.reduce((acc, v) => acc + Math.abs(v - median) / x, 0);
}`,
    python: `def minOperations(grid, x):
    flat = sorted(v for row in grid for v in row)
    rem = flat[0] % x
    if any(v % x != rem for v in flat):
        return -1
    median = flat[len(flat) // 2]
    return sum(abs(v - median) // x for v in flat)`,
  },
  visibleTests: [
    { args: [[[2, 4], [6, 8]], 2], expected: 4 },
    { args: [[[1, 5], [2, 3]], 1], expected: 5 },
    { args: [[[1, 2], [3, 4]], 2], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[1]], 5], expected: 0 },
    { args: [[[1, 1, 1], [2, 2, 2]], 1], expected: 3 },
    { args: [[[3, 6], [9, 12]], 3], expected: 4 },
    { args: [[[5, 5], [5, 5]], 3], expected: 0 },
    { args: [[[1, 3], [3, 1]], 2], expected: 2 },
    { args: [[[2, 10], [6, 4]], 2], expected: 5 },
    { args: [[[10, 4, 2], [6, 8, 12]], 2], expected: 9 },
  ],
};
