import type { Problem } from '../types';

export const problem: Problem = {
  id: 'making-a-large-island',
  title: 'Making A Large Island',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an \`n x n\` binary matrix \`grid\`. You are allowed to change **at most one** \`0\` to be \`1\`.

Return the **size of the largest island** in \`grid\` after applying this operation.

An island is a 4-directionally connected group of \`1\`s.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 500',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0],[0,1]]',
      output: '3',
      explanation: 'Change one 0 to 1 to connect the two 1-islands → size 3.',
    },
    {
      input: 'grid = [[1,1],[1,0]]',
      output: '4',
      explanation: 'Flip the 0 at [1][1]; the whole grid becomes one island.',
    },
    {
      input: 'grid = [[1,1],[1,1]]',
      output: '4',
      explanation: 'No 0 exists; the island already has size 4.',
    },
  ],
  hints: [
    'Label each island with a unique ID ≥ 2 using DFS, and record its size in a map.',
    'For each 0 cell, look at its 4 neighbours, collect distinct island IDs, sum up their sizes, and add 1 (for the flipped cell itself).',
    'Also take the maximum of the largest island found without any flip (in case no 0 exists or every 0 is surrounded only by walls).',
  ],
  functionName: 'largestIsland',
  params: ['grid'],
  starterCode: {
    javascript: `function largestIsland(grid) {

}`,
    python: `def largestIsland(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[1,0],[0,1]]], expected: 3 },
    { args: [[[1,1],[1,0]]], expected: 4 },
    { args: [[[1,1],[1,1]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[0,0],[0,0]]], expected: 1 },
    { args: [[[1,0,1],[0,0,0],[1,0,1]]], expected: 3 },
    { args: [[[1,1,0],[0,0,0],[0,0,1]]], expected: 3 },
    { args: [[[0,1],[1,0]]], expected: 3 },
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 1 },
  ],
};
