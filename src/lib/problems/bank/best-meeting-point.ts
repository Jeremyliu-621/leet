import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-meeting-point',
  title: 'Best Meeting Point',
  difficulty: 'hard',
  tags: ['math', 'arrays'],
  description: `Given an \`m × n\` binary grid where each \`1\` marks the home of one friend, return the **minimum total travel distance** to a meeting point.

The distance is calculated using Manhattan distance: \`|row1 - row2| + |col1 - col2|\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 200',
    'grid[i][j] is either 0 or 1',
    '1 <= number of friends <= 200',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]',
      output: '6',
      explanation: 'The meeting point at (0,2) gives distances 2+2+2=6.',
    },
    { input: 'grid = [[1,1]]', output: '1' },
  ],
  hints: [
    'The problem decomposes into two 1-D median problems: find the optimal row and optimal column independently.',
    'Collect all row indices where friends live, and all column indices. The optimal meeting row (and column) is the median of those lists.',
    'Sort the lists and the median is in the middle. Sum up absolute differences from the median.',
  ],
  functionName: 'minTotalDistance',
  params: ['grid'],
  starterCode: {
    javascript: 'function minTotalDistance(grid) {\n\n}\n',
    python: 'def minTotalDistance(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]]], expected: 6 },
    { args: [[[1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: 4 },
    { args: [[[0, 1, 0], [1, 0, 1], [0, 1, 0]]], expected: 4 },
  ],
};
