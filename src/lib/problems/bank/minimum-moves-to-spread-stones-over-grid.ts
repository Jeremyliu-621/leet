import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-spread-stones-over-grid',
  title: 'Minimum Moves to Spread Stones Over Grid',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** 2D integer matrix \`grid\` of size \`3 x 3\`, representing the number of stones in each cell. The grid contains exactly **9** stones, and there can be **multiple** stones in a single cell.

In one move, you can move a single stone from its current cell to any adjacent cell (sharing an edge). Return the **minimum** number of moves required to place exactly one stone in each cell.`,
  constraints: [
    'grid.length == grid[i].length == 3',
    '0 <= grid[i][j] <= 9',
    'Sum of grid[i][j] is 9',
  ],
  examples: [
    {
      input: 'grid = [[1,1,0],[1,1,1],[1,1,2]]',
      output: '2',
      explanation: 'Move one stone from (2,2) to (0,2): 2 moves (Manhattan distance).',
    },
    {
      input: 'grid = [[0,1,0],[1,1,1],[2,1,2]]',
      output: '4',
      explanation: 'Two empty cells and two surplus cells; best assignment costs 2+2 = 4.',
    },
  ],
  hints: [
    'Collect empty cells ("zeros") and surplus cells ("extras": each extra stone at a surplus position).',
    'Since zeros.length === extras.length, find the assignment that minimizes total Manhattan distance.',
    'Enumerate all permutations of extras matched to zeros (at most ~8! for worst case). The answer is the minimum total cost.',
  ],
  functionName: 'minimumMoves',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumMoves(grid) {\n  \n}`,
    typescript: `function minimumMoves(grid: number[][]): number {\n  \n}`,
    python: `def minimumMoves(grid):\n    `,
  },
  visibleTests: [
    { args: [[[1, 1, 0], [1, 1, 1], [1, 1, 2]]], expected: 2 },
    { args: [[[0, 1, 0], [1, 1, 1], [2, 1, 2]]], expected: 4 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 0], [1, 1, 1], [1, 1, 2]]], expected: 2 },
    { args: [[[0, 1, 0], [1, 1, 1], [2, 1, 2]]], expected: 4 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 0 },
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 7]]], expected: 12 },
    { args: [[[0, 0, 0], [0, 9, 0], [0, 0, 0]]], expected: 12 },
    { args: [[[2, 0, 2], [0, 1, 0], [2, 0, 2]]], expected: 4 },
    { args: [[[0, 0, 1], [1, 0, 1], [0, 1, 5]]], expected: 11 },
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 8]]], expected: 16 },
  ],
};
