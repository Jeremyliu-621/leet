import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-it-is-a-straight-line',
  title: 'Check If It Is a Straight Line',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array \`coordinates\` where each element \`coordinates[i] = [x, y]\` represents a point on a 2D plane.

Return \`true\` if all the given points lie on the same straight line, and \`false\` otherwise.`,
  constraints: [
    '2 <= coordinates.length <= 1000',
    'coordinates[i].length == 2',
    '-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4',
    'All the given points are unique.',
  ],
  examples: [
    {
      input: 'coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]',
      output: 'true',
      explanation: 'All points lie on the line y = x + 1.',
    },
    {
      input: 'coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]',
      output: 'false',
      explanation: 'The points do not all lie on the same line.',
    },
  ],
  hints: [
    'Two points always define a line. You need to verify every other point lies on that same line.',
    'Use the cross-product collinearity check: three points A, B, C are collinear iff `(B.y-A.y)*(C.x-A.x) == (C.y-A.y)*(B.x-A.x)`. This avoids division and handles vertical lines.',
    'Compute `dx = x1 - x0`, `dy = y1 - y0` from the first two points. For each subsequent point `(x, y)`, check `dy * (x - x0) === dx * (y - y0)`. Return false on the first mismatch.',
  ],
  functionName: 'checkStraightLine',
  params: ['coordinates'],
  starterCode: {
    javascript: `function checkStraightLine(coordinates) {

}`,
    typescript: "function checkStraightLine(coordinates: number[][]): boolean {\n\n}",

    python: `def checkStraightLine(coordinates):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]], expected: true },
    { args: [[[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]], expected: false },
    { args: [[[0, 0], [1, 0]]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: true },
    { args: [[[0, 0], [0, 1], [0, 2]]], expected: true },
    { args: [[[0, 0], [1, 1], [2, 3]]], expected: false },
    { args: [[[0, 0], [0, 5], [5, 5]]], expected: false },
    { args: [[[-3, -2], [0, 1], [3, 4]]], expected: true },
    { args: [[[0, 0], [1, 0], [0, 1]]], expected: false },
    { args: [[[1, 1], [1, 2], [1, 3], [1, 4]]], expected: true },
  ],
};
