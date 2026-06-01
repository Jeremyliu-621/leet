import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-points-inside-the-square',
  title: 'Maximum Points Inside the Square',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D array \`points\` and a string \`s\` where \`points[i] = [x_i, y_i]\` is the coordinate of the \`i\`-th point, and \`s[i]\` is its **tag**.

A **valid** square is a square centered at the origin with sides parallel to the axes. A valid square must not contain **two points with the same tag**.

Return the **maximum** half-side length \`r\` of a valid square (points on the boundary count as inside). If there is no valid square with \`r > 0\`, return \`0\`.`,
  constraints: [
    '1 <= points.length <= 10^5',
    'points[i].length == 2',
    '-10^9 <= points[i][0], points[i][1] <= 10^9',
    's.length == points.length',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 'points = [[2,1],[-1,-1],[1,-3]], s = "aab"',
      output: '1',
      explanation: 'At half-side r=1: only (-1,-1) with tag "a" is inside. At r=2: both (2,1) and (-1,-1) have tag "a" — invalid. Answer = 1.',
    },
    {
      input: 'points = [[1,1],[-2,-2],[2,-2]], s = "abc"',
      output: '2',
      explanation: 'All three points have distinct tags and fit inside r=2 (max Chebyshev distances: 1, 2, 2). Answer = 2.',
    },
  ],
  hints: [
    'A point (x, y) is inside the square with half-side r iff max(|x|, |y|) ≤ r (Chebyshev distance).',
    'Sort points by their Chebyshev distance. Process groups of equal distance together.',
    'When the first conflict (duplicate tag) is found at distance d, return d−1 (clamped to 0). If no conflict exists, return the maximum Chebyshev distance overall.',
  ],
  functionName: 'maxPointsInsideSquare',
  params: ['points', 's'],
  starterCode: {
    javascript: 'function maxPointsInsideSquare(points, s) {\n\n}\n',
    typescript: 'function maxPointsInsideSquare(points: number[][], s: string): number {\n\n}\n',
    python: 'def maxPointsInsideSquare(points, s):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2,1],[-1,-1],[1,-3]], 'aab'], expected: 1 },
    { args: [[[1,1],[-2,-2],[2,-2]], 'abc'], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[2,1],[-1,-1],[1,-3]], 'abc'], expected: 3 },
    { args: [[[1,1]], 'a'], expected: 1 },
    { args: [[[1,0],[0,1],[0,0]], 'aab'], expected: 0 },
    { args: [[[5,0],[0,5],[3,4]], 'aab'], expected: 4 },
    { args: [[[1,0],[0,1],[2,0]], 'abc'], expected: 2 },
    { args: [[[1,1],[2,2],[3,3]], 'aba'], expected: 2 },
    { args: [[[5,5],[-5,-5]], 'aa'], expected: 4 },
  ],
};
