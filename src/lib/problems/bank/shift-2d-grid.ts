import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shift-2d-grid',
  title: 'Shift 2D Grid',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D \`grid\` of size \`m x n\` and an integer \`k\`, shift the grid \`k\` times.

In one shift operation:
- Element at \`grid[i][j]\` moves to \`grid[i][j+1]\`.
- Element at \`grid[i][n-1]\` moves to \`grid[i+1][0]\`.
- Element at \`grid[m-1][n-1]\` moves to \`grid[0][0]\`.

Return the 2D grid after applying shift operation \`k\` times.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m <= 50',
    '1 <= n <= 50',
    '-1000 <= grid[i][j] <= 1000',
    '0 <= k <= 100',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1',
      output: '[[9,1,2],[3,4,5],[6,7,8]]',
      explanation: 'Each element shifts one position to the right; the last element wraps to the front.',
    },
    {
      input: 'grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4',
      output: '[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]',
      explanation: 'After 4 shifts (equal to one row width), each row advances by one row.',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9',
      output: '[[1,2,3],[4,5,6],[7,8,9]]',
      explanation: 'After 9 shifts (equal to total element count), the grid returns to its original state.',
    },
  ],
  hints: [
    'Flatten the 2D grid into a 1D array. A single shift moves every element one position to the right (with wrap-around).',
    'Shifting k times is equivalent to rotating the flat array by k positions. Use the modulo of k with total element count to handle large k efficiently.',
    'After rotating the flat array, reshape it back into an m×n 2D grid by filling row by row.',
  ],
  functionName: 'shiftGrid',
  params: ['grid', 'k'],
  starterCode: {
    javascript: `function shiftGrid(grid, k) {

}`,
    python: `def shiftGrid(grid, k):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1],
      expected: [[9, 1, 2], [3, 4, 5], [6, 7, 8]],
    },
    {
      args: [[[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4],
      expected: [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]],
    },
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9],
      expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]], 1], expected: [[4, 1], [2, 3]] },
    { args: [[[1, 2], [3, 4]], 2], expected: [[3, 4], [1, 2]] },
    { args: [[[1]], 1], expected: [[1]] },
    { args: [[[1, 2], [3, 4]], 4], expected: [[1, 2], [3, 4]] },
  ],
};
