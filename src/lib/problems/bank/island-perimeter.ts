import type { Problem } from '../types';

export const problem: Problem = {
  id: 'island-perimeter',
  title: 'Island Perimeter',
  difficulty: 'easy',
  tags: ['arrays', 'graph'],
  description: `You are given a \`row x col\` grid representing a map where \`grid[i][j] = 1\` represents land and \`grid[i][j] = 0\` represents water.

Grid cells are connected **horizontally/vertically** (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have any lakes (water inside that isn't connected to the water around the island).

Return the **perimeter** of the island.`,
  constraints: [
    'row == grid.length',
    'col == grid[i].length',
    '1 <= row, col <= 100',
    'grid[i][j] is 0 or 1',
    'There is exactly one island in grid',
  ],
  examples: [
    {
      input: 'grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]',
      output: '16',
      explanation: 'The perimeter is the 16 edges on the outer boundary of the island.',
    },
    {
      input: 'grid = [[1]]',
      output: '4',
      explanation: 'A single land cell has 4 exposed edges.',
    },
    {
      input: 'grid = [[1,0]]',
      output: '4',
      explanation: 'A single land cell in a 1×2 grid.',
    },
  ],
  hints: [
    'Each land cell starts with 4 edges. For each pair of adjacent land cells (horizontal or vertical), they share one edge — subtract 2 from the total for each such shared edge.',
    'Iterate over every cell. When you find a land cell (`grid[i][j] === 1`), add 4. Then check the cell to the right and the cell below: for each adjacent land cell, subtract 2 (one shared edge from each side).',
    'Formula: `perimeter = 4 * landCount - 2 * sharedEdges`. Count shared edges by checking right and down neighbors only (to avoid double-counting).',
  ],
  functionName: 'islandPerimeter',
  params: ['grid'],
  starterCode: {
    javascript: `function islandPerimeter(grid) {
  let p = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        p += 4;
        if (r > 0 && grid[r - 1][c] === 1) p -= 2;
        if (c > 0 && grid[r][c - 1] === 1) p -= 2;
      }
    }
  }
  return p;
}`,
    typescript: `function islandPerimeter(grid: number[][]): number {
  let p = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0]!.length; c++) {
      if (grid[r]![c] === 1) {
        p += 4;
        if (r > 0 && grid[r - 1]![c] === 1) p -= 2;
        if (c > 0 && grid[r]![c - 1] === 1) p -= 2;
      }
    }
  }
  return p;
}`,
    python: `def islandPerimeter(grid):
    grid = [list(r.to_py() if hasattr(r, 'to_py') else r) for r in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    p = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 1:
                p += 4
                if r > 0 and grid[r - 1][c] == 1: p -= 2
                if c > 0 and grid[r][c - 1] == 1: p -= 2
    return p`,
  },
  visibleTests: [
    {
      args: [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]],
      expected: 16,
    },
    { args: [[[1]]], expected: 4 },
    { args: [[[1, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 6 },
    { args: [[[1], [1]]], expected: 6 },
    { args: [[[1, 1], [1, 1]]], expected: 8 },
    { args: [[[0, 1, 0], [1, 1, 1], [0, 1, 0]]], expected: 12 },
    { args: [[[1, 1, 1, 1]]], expected: 10 },
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: 4 },
  ],
};
