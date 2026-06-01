import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zigzag-grid-traversal-with-skip',
  title: 'Zigzag Grid Traversal With Skip',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given an \`m × n\` 2D array \`grid\` of positive integers.

Your task is to traverse the grid in a **zigzag** pattern while **skipping** every alternate cell.

- Odd-numbered rows (1-indexed) are traversed **left to right**.
- Even-numbered rows are traversed **right to left**.
- From the entire zigzag traversal sequence, collect only the cells at **even positions** (0-indexed: positions 0, 2, 4, …).

Return an array of the collected values in order.`,
  constraints: [
    '1 <= m, n <= 50 where m = grid.length, n = grid[i].length',
    '1 <= grid[i][j] <= 2500',
  ],
  examples: [
    {
      input: 'grid = [[1,2],[3,4]]',
      output: '[1,4]',
      explanation:
        'Zigzag order: 1, 2, 4, 3. Even positions (0, 2): [1, 4].',
    },
    {
      input: 'grid = [[2,1],[2,1],[2,1]]',
      output: '[2,1,2]',
      explanation:
        'Zigzag order: 2, 1, 1, 2, 2, 1. Even positions (0, 2, 4): [2, 1, 2].',
    },
  ],
  hints: [
    'Generate the full zigzag traversal order first, then take every other element starting at index 0.',
    'Use a counter that increments for every cell visited. Only add the cell value when the counter is even.',
    'For even rows (0-indexed), iterate left to right. For odd rows, iterate right to left. The counter does not reset between rows.',
  ],
  functionName: 'zigzagTraversal',
  params: ['grid'],
  starterCode: {
    javascript: `function zigzagTraversal(grid) {\n\n}`,
    typescript: `function zigzagTraversal(grid: number[][]): number[] {

}`,
    python: `def zigzagTraversal(grid: list[list[int]]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 2], [3, 4]]],
      expected: [1, 4],
    },
    {
      args: [[[2, 1], [2, 1], [2, 1]]],
      expected: [2, 1, 2],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
      expected: [1, 3, 5, 7, 9],
    },
    {
      args: [[[1, 2, 3, 4]]],
      expected: [1, 3],
    },
    {
      args: [[[1], [2], [3], [4]]],
      expected: [1, 3],
    },
    {
      args: [[[5, 3], [8, 1], [6, 4]]],
      expected: [5, 1, 6],
    },
  ],
};
