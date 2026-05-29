import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-rectangles-to-cover-points',
  title: 'Minimum Rectangles to Cover Points',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D integer array \`points\`, where \`points[i] = [x_i, y_i]\`. You are also given an integer \`w\`. Your task is to **cover** all the given points with rectangles.

Each rectangle has its lower end at some point \`(x_1, 0)\` and its upper end at some point \`(x_2, y_2)\`, where \`x_1 <= x_2\`, \`y_2 >= 0\`, and the condition \`x_2 - x_1 <= w\` **must** be satisfied for each rectangle.

A point is covered if it lies within the rectangle, including on the boundary. Return an integer denoting the **minimum** number of rectangles needed so that each point is covered by **at least one** rectangle.

**Note:** A rectangle may cover multiple points.`,
  constraints: [
    '`1 <= points.length <= 10^5`',
    '`points[i].length == 2`',
    '`0 <= points[i][0] <= 10^9`',
    '`0 <= points[i][1] <= 10^9`',
    '`0 <= w <= 10^9`',
  ],
  examples: [
    {
      input: 'points = [[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]], w = 1',
      output: '2',
      explanation: 'Rectangle 1: x1=1, x2=2 covers points [1,0],[1,4],[1,8],[2,1]. Rectangle 2: x1=3, x2=4 covers points [3,5],[4,6]. Total: 2 rectangles.',
    },
    {
      input: 'points = [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], w = 2',
      output: '3',
      explanation: 'Three rectangles of width 2 each cover the 7 points.',
    },
    {
      input: 'points = [[2,3],[1,2]], w = 0',
      output: '2',
      explanation: 'Width 0 means each rectangle covers a single x-coordinate. Points have x=2 and x=1, so 2 rectangles needed.',
    },
  ],
  hints: [
    'Since rectangle height is unconstrained, the problem reduces to 1D: cover all x-coordinates with intervals of width w.',
    'Sort all x-coordinates.',
    'Greedily: for each uncovered x, start a new rectangle at that x extending to x+w, then skip all points with x-coordinate ≤ x+w.',
    'Count how many new rectangles you start.',
  ],
  functionName: 'minRectanglesToCoverPoints',
  params: ['points', 'w'],
  starterCode: {
    javascript: `function minRectanglesToCoverPoints(points, w) {

}`,
    typescript: `function minRectanglesToCoverPoints(points: number[][], w: number): number {

}`,
    python: `def minRectanglesToCoverPoints(points, w):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 1], [1, 0], [1, 4], [1, 8], [3, 5], [4, 6]], 1], expected: 2 },
    { args: [[[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]], 2], expected: 3 },
    { args: [[[2, 3], [1, 2]], 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 0]], 0], expected: 1 },
    { args: [[[0, 0]], 1000000000], expected: 1 },
    { args: [[[1, 1], [2, 2], [3, 3]], 2], expected: 1 },
    { args: [[[0, 0], [0, 1], [0, 2]], 5], expected: 1 },
    { args: [[[0, 0], [5, 0], [10, 0]], 4], expected: 3 },
    { args: [[[0, 0], [5, 0], [10, 0]], 2], expected: 3 },
  ],
};
