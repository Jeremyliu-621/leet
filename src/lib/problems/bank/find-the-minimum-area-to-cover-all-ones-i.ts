import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-minimum-area-to-cover-all-ones-i',
  title: 'Find the Minimum Area to Cover All Ones I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **2D** binary array \`grid\`. Find a rectangle with horizontal and vertical sides with the **smallest** area, such that all the 1s in \`grid\` lie inside this rectangle.

Return the **minimum** possible area of the rectangle.`,
  constraints: [
    '`1 <= grid.length, grid[i].length <= 1000`',
    '`grid[i][j]` is either 0 or 1.',
    'The input is generated such that there is at least one 1 in `grid`.',
  ],
  examples: [
    {
      input: 'grid = [[0,1,0],[1,0,1]]',
      output: '6',
      explanation: 'The bounding box of all 1s spans rows 0–1 and cols 0–2, giving area 2×3=6.',
    },
    {
      input: 'grid = [[1,0],[0,0]]',
      output: '1',
      explanation: 'Only one 1 at (0,0); area is 1×1=1.',
    },
  ],
  hints: [
    'Find the axis-aligned bounding box of all cells containing 1.',
    'Track minRow, maxRow, minCol, maxCol across all (i,j) with grid[i][j]==1.',
    'Area = (maxRow − minRow + 1) × (maxCol − minCol + 1).',
  ],
  functionName: 'minimumArea',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumArea(grid) {
  let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        minR = Math.min(minR, r); maxR = Math.max(maxR, r);
        minC = Math.min(minC, c); maxC = Math.max(maxC, c);
      }
    }
  }
  return (maxR - minR + 1) * (maxC - minC + 1);
}`,
    typescript: `function minimumArea(grid: number[][]): number {
  let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r]!.length; c++) {
      if (grid[r]![c] === 1) {
        minR = Math.min(minR, r); maxR = Math.max(maxR, r);
        minC = Math.min(minC, c); maxC = Math.max(maxC, c);
      }
    }
  }
  return (maxR - minR + 1) * (maxC - minC + 1);
}`,
    python: `def minimumArea(grid: list[list[int]]) -> int:
    ones = [(r, c) for r in range(len(grid)) for c in range(len(grid[r])) if grid[r][c] == 1]
    min_r = min(r for r, _ in ones)
    max_r = max(r for r, _ in ones)
    min_c = min(c for _, c in ones)
    max_c = max(c for _, c in ones)
    return (max_r - min_r + 1) * (max_c - min_c + 1)`,
  },
  visibleTests: [
    { args: [[[0, 1, 0], [1, 0, 1]]], expected: 6 },
    { args: [[[1, 0], [0, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 1], [1, 1]]], expected: 4 },
    { args: [[[0, 0, 1], [0, 1, 0], [1, 0, 0]]], expected: 9 },
    { args: [[[1, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: 9 },
    { args: [[[0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0]]], expected: 6 },
    { args: [[[1, 1, 1]]], expected: 3 },
  ],
};
