import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-uni-value-grid',
  title: 'Minimum Operations to Make a Uni-Value Grid',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D integer **grid** of size \`m x n\` and an integer **x**. In one operation, you can **add** \`x\` to or **subtract** \`x\` from any element of the grid.

A **uni-value grid** is a grid where all the elements of it are equal.

Return the **minimum** number of operations to make the grid **uni-value**. If it is not possible, return \`-1\`.

**Function signature:** \`minOperations(grid, x)\``,
  examples: [
    {
      input: 'grid = [[2,4],[6,8]], x = 2',
      output: '4',
      explanation:
        'We can make every element equal to 4 by doing the following: add x to 2 once (1 op), subtract x from 6 once (1 op), subtract x twice from 8 (2 ops). Total: 4 operations.',
    },
    {
      input: 'grid = [[1,5],[2,3]], x = 1',
      output: '5',
      explanation:
        'We can make every element equal to 3 by doing the operations: +2 to 1, +0 to nothing... The optimal target is the median value (3). Total: 5 operations.',
    },
    {
      input: 'grid = [[1,2],[3,4]], x = 2',
      output: '-1',
      explanation:
        '1 mod 2 = 1, while 2 mod 2 = 0. The remainders are different, so it is impossible to make a uni-value grid.',
    },
  ],
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 10^5',
    '1 <= x, grid[i][j] <= 10^4',
  ],
  hints: [
    'For a uni-value grid to be possible, all elements must have the same remainder when divided by x. If not, return -1.',
    'Once remainders match, the optimal target is the **median** of all elements (flattened). The median minimizes the total absolute deviation.',
    'Sort the flattened array, pick the element at index n/2 (integer division). The number of operations is sum(|element - median| / x) for all elements.',
  ],
  functionName: 'minOperations',
  params: ['grid', 'x'],
  starterCode: {
    javascript: 'function minOperations(grid, x) {\n  \n}\n',
    typescript: "function minOperations(grid: number[][], x: number): number {\n  \n}",

    python: 'def minOperations(grid, x):\n    ',
  },
  visibleTests: [
    { args: [[[2, 4], [6, 8]], 2], expected: 4 },
    { args: [[[1, 5], [2, 3]], 1], expected: 5 },
    { args: [[[1, 2], [3, 4]], 2], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[2, 10], [4, 8]], 2], expected: 6 },
    // sorted [2,4,8,10], median=8, ops=|2-8|/2+|4-8|/2+|8-8|/2+|10-8|/2=3+2+0+1=6
    { args: [[[1]], 1], expected: 0 },
    { args: [[[5, 5], [5, 5]], 3], expected: 0 },
    { args: [[[3, 9, 3]], 3], expected: 2 },
    // sorted [3,3,9], median=3, ops=0+0+2=2
    { args: [[[1, 3], [5, 7]], 2], expected: 4 },
    // sorted [1,3,5,7], median=5, ops=2+1+0+1=4
  ],
};
