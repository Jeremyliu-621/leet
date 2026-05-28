import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-distinct-islands',
  title: 'Number of Distinct Islands',
  difficulty: 'medium',
  tags: ['graph', 'hash-map'],
  description: `You are given an \`m x n\` binary matrix \`grid\`. An island is a group of \`1\`s (land) connected **4-directionally** (horizontal or vertical). You may assume all four edges of the grid are surrounded by water.

An island is considered the **same** as another if and only if one island can be translated (not rotated or reflected) to equal the other.

Return the **number of distinct islands**.`,
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 50',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]',
      output: '1',
      explanation: 'Both islands have the same 2x2 square shape.',
    },
    {
      input: 'grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]',
      output: '3',
      explanation: 'The top-left, top-right and bottom-right islands are all different shapes.',
    },
  ],
  hints: [
    'For each island found via DFS, record its **shape** relative to the top-left corner of the island (or the starting cell). Represent each island as a set of `(row_offset, col_offset)` pairs, then serialize that into a canonical string.',
    'When you start DFS at cell `(r0, c0)`, record each visited cell as `(r - r0, c - c0)`. Convert the sorted list of offsets to a string and add it to a Set.',
    'Return the size of the Set — it contains one entry per distinct island shape.',
  ],
  functionName: 'numDistinctIslands',
  params: ['grid'],
  starterCode: {
    javascript: 'function numDistinctIslands(grid) {\n  \n}\n',
    typescript: "function numDistinctIslands(grid: number[][]): number {\n  \n}",

    python: 'def numDistinctIslands(grid):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]],
      expected: 1,
    },
    {
      args: [[[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]]],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]],
      expected: 0,
    },
    {
      args: [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]],
      expected: 1,
    },
    {
      args: [[[1, 1, 1], [0, 0, 0], [1, 1, 1]]],
      expected: 1,
    },
    {
      args: [[[1, 0, 0], [1, 1, 0], [0, 1, 0]]],
      expected: 1,
    },
    {
      args: [[[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1]]],
      expected: 2,
    },
  ],
};
