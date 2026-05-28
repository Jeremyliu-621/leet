import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-points-on-a-line',
  title: 'Max Points on a Line',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'hash-map'],
  description: `Given an array of \`points\` where \`points[i] = [xi, yi]\` represents a point on the **X-Y plane**, return the **maximum number of points** that lie on the same straight line.`,
  constraints: [
    '1 <= points.length <= 300',
    'points[i].length == 2',
    '-10^4 <= xi, yi <= 10^4',
    'All the points are unique.',
  ],
  examples: [
    {
      input: 'points = [[1,1],[2,2],[3,3]]',
      output: '3',
      explanation: 'All three points lie on the line y = x.',
    },
    {
      input: 'points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]',
      output: '4',
      explanation: 'The four points (1,4), (2,3), (3,2), (4,1) all lie on the line y = -x + 5.',
    },
  ],
  hints: [
    'For each point i, compute the slope from i to every other point j. The maximum number of collinear points through i equals the most common slope plus 1 (for i itself).',
    'Represent the slope as a reduced fraction dy/dx. Use `gcd(|dy|, |dx|)` to normalize. Handle vertical lines (dx=0) and duplicate points separately.',
    'Normalize the sign: if dx < 0 negate both dy and dx; if dx == 0 and dy < 0 negate dy. Store slopes as the string `"dy/dx"`. Include duplicates in every line through i.',
  ],
  functionName: 'maxPoints',
  params: ['points'],
  starterCode: {
    javascript: `function maxPoints(points) {

}`,
    typescript: "function maxPoints(points: number[][]): number {\n\n}",

    python: `def maxPoints(points):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 3 },
    { args: [[[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]], expected: 4 },
    { args: [[[1, 0], [2, 0], [3, 0], [4, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 1 },
    { args: [[[0, 0], [1, 1]]], expected: 2 },
    { args: [[[-1, -1], [0, 0], [1, 1], [2, 3]]], expected: 3 },
    { args: [[[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]]], expected: 5 },
    { args: [[[2, 3], [3, 3], [-5, 3]]], expected: 3 },
    { args: [[[0, 0], [1, 65536], [65536, 0]]], expected: 2 },
  ],
};
