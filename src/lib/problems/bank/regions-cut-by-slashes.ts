import type { Problem } from '../types';

export const problem: Problem = {
  id: 'regions-cut-by-slashes',
  title: 'Regions Cut By Slashes',
  difficulty: 'medium',
  tags: ['union-find', 'graph', 'arrays'],
  description: `An \`n x n\` grid is composed of \`1 x 1\` squares where each square is divided by a diagonal slash. You are given a list of strings \`grid\` where \`grid[i][j]\` is \`' '\` (space), \`'/'\`, or \`'\\\\'\`.

Return the number of regions in the grid.

A region is a maximal connected set of empty space. Slashes are considered walls — they divide the cell into two triangular regions.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 30',
    "grid[i][j] is either '/', '\\\\', or ' '.",
  ],
  examples: [
    {
      input: 'grid = [" /","/ "]',
      output: '2',
      explanation: 'The two slashes form a diagonal that splits the 2x2 grid into 2 regions.',
    },
    {
      input: 'grid = [" /","  "]',
      output: '1',
      explanation: 'Although there is a slash in the top-right cell, all regions are still connected through the empty cells.',
    },
  ],
  hints: [
    'Expand each 1x1 cell into a 3x3 sub-grid. A \'/\' marks cells (2,0),(1,1),(0,2) in the local 3x3; a \'\\\\\' marks cells (0,0),(1,1),(2,2). Empty cells mark nothing.',
    'After expanding to an n×3 by n×3 grid, count the number of connected components of \'0\' (unblocked) cells using BFS or DFS.',
    'The 3x3 expansion ensures that neighboring cells share border pixels in the expanded grid, so adjacency is preserved correctly.',
  ],
  functionName: 'regionsBySlashes',
  params: ['grid'],
  starterCode: {
    javascript: 'function regionsBySlashes(grid) {\n  \n}\n',
    typescript: "function regionsBySlashes(grid: string[]): number {\n  \n}",

    python: 'def regionsBySlashes(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[' /', '/ ']], expected: 2 },
    { args: [[' /', '  ']], expected: 1 },
  ],
  hiddenTests: [
    // 1x1 cases
    { args: [[' ']], expected: 1 },
    { args: [['/']], expected: 2 },
    { args: [['\\']],  expected: 2 },
    // 2x2 all spaces → 1 region
    { args: [['  ', '  ']], expected: 1 },
    // famous LeetCode example: /\ on top, \/ on bottom → 5 regions
    // verified by 3x3 expansion: 4 corner triangles + 1 center diamond
    { args: [['/\\', '\\/']], expected: 5 },
  ],
};
