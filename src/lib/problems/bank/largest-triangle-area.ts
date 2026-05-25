import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-triangle-area',
  title: 'Largest Triangle Area',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an array of points on the X-Y plane \`points\` where \`points[i] = [x_i, y_i]\`, return the area of the largest triangle that can be formed by any three different points. Answers within \`10^-5\` of the actual answer will be accepted.

Use the shoelace formula for triangle area:

\`area = 0.5 * |x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)|\``,
  constraints: [
    '`3 <= points.length <= 50`',
    '`-50 <= xi, yi <= 50`',
    'All the given points are unique.',
  ],
  examples: [
    {
      input: 'points = [[0,0],[0,1],[1,0]]',
      output: '0.5',
    },
    {
      input: 'points = [[0,0],[0,1],[1,0],[0,2],[2,0]]',
      output: '2.0',
    },
    {
      input: 'points = [[-2,0],[2,0],[0,2]]',
      output: '4.0',
    },
  ],
  hints: [
    'Try all combinations of 3 points from the array.',
    'For each triple, compute the area using the shoelace formula and track the maximum.',
  ],
  functionName: 'largestTriangleArea',
  params: ['points'],
  starterCode: {
    javascript: `function largestTriangleArea(points) {

}`,
    python: `def largestTriangleArea(points):
    pass`,
  },
  visibleTests: [
    { args: [[[0,0],[0,1],[1,0]]], expected: 0.5 },
    { args: [[[0,0],[0,1],[1,0],[0,2],[2,0]]], expected: 2.0 },
    { args: [[[-2,0],[2,0],[0,2]]], expected: 4.0 },
  ],
  hiddenTests: [
    { args: [[[0,0],[1,0],[0,1],[1,1]]], expected: 0.5 },
    { args: [[[0,0],[4,0],[0,3]]], expected: 6.0 },
    { args: [[[-50,-50],[50,-50],[0,50]]], expected: 5000.0 },
    { args: [[[1,0],[0,0],[0,1]]], expected: 0.5 },
  ],
};
