import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-lines-to-cover-points',
  title: 'Minimum Number of Lines to Cover Points',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'bit-manipulation'],
  description: `You are given an array \`points\` where \`points[i] = [xi, yi]\` represents a point on the **X-Y** plane. Return \`true\` if you can cover all the given points with **at most** \`numLines\` lines, otherwise return \`false\`.

A line can cover a point if the point lies on the line.

**Note:** A line can cover any number of points, including just one.`,
  constraints: [
    '1 <= points.length <= 10',
    'points[i].length == 2',
    '-100 <= xi, yi <= 100',
    '1 <= numLines <= 10',
    'All the given points are unique.',
  ],
  examples: [
    {
      input: 'points = [[0,1],[2,3],[4,5],[4,3]], numLines = 2',
      output: 'true',
      explanation: 'The line through (0,1), (2,3), and (4,5) covers 3 points. A second line covers (4,3). Total 2 lines.',
    },
    {
      input: 'points = [[0,2],[2,4]], numLines = 1',
      output: 'true',
      explanation: 'A single line through both points covers all of them.',
    },
    {
      input: 'points = [[0,0],[2,2],[2,4]], numLines = 1',
      output: 'false',
      explanation: 'No single line passes through all 3 non-collinear points.',
    },
  ],
  hints: [
    'Level 1: With n ≤ 10 points, there are at most C(10,2)=45 distinct lines defined by pairs of points, plus n degenerate single-point lines. Enumerate all candidate lines.',
    'Level 2: For each candidate line, compute a bitmask representing which of the n points lie on it. This reduces the problem to minimum set cover over bitmasks.',
    'Level 3: Use BFS or DP with bitmask states: dp[mask] = minimum lines needed to cover the set of points represented by mask. Transition: for each line bitmask L, dp[mask | L] = min(dp[mask | L], dp[mask] + 1). Return dp[(1<<n)-1] <= numLines.',
  ],
  functionName: 'minimumLines',
  params: ['points', 'numLines'],
  starterCode: {
    javascript: `function minimumLines(points, numLines) {\n\n}`,
    typescript: `function minimumLines(points: number[][], numLines: number): boolean {\n\n}`,
    python: `def minimumLines(points, numLines):\n    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [2, 3], [4, 5], [4, 3]], 2], expected: true },
    { args: [[[0, 2], [2, 4]], 1], expected: true },
    { args: [[[0, 0], [2, 2], [2, 4]], 1], expected: false },
  ],
  hiddenTests: [
    { args: [[[0, 0]], 1], expected: true },
    { args: [[[0, 0], [1, 1]], 1], expected: true },
    { args: [[[0, 0], [1, 0], [0, 1]], 2], expected: true },
    { args: [[[0, 0], [1, 0], [0, 1]], 1], expected: false },
    { args: [[[0, 0], [1, 1], [2, 2], [3, 4]], 1], expected: false },
    { args: [[[0, 0], [1, 1], [2, 2], [3, 4]], 2], expected: true },
    { args: [[[0, 0], [1, 2], [2, 4], [3, 0]], 2], expected: true },
    { args: [[[1, 0], [0, 1], [2, 2]], 2], expected: true },
  ],
};
