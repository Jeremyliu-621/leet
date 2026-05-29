import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-area-rectangle-ii',
  title: 'Minimum Area Rectangle II',
  difficulty: 'medium',
  tags: ['math', 'hash-map', 'arrays'],
  description: `Given a set of points in the **X-Y** plane, determine the minimum area of **any** rectangle formed from these points, where the sides of the rectangle are not necessarily parallel to the X and Y axes. If there is no rectangle, return \`0\`.

**Key insight:** Two diagonals of a rectangle bisect each other, so two pairs of points form a rectangle if and only if they share the same midpoint and the same squared distance (equal diagonals). The area of the rectangle is half the magnitude of the cross product of the two diagonals.`,
  constraints: [
    '1 <= points.length <= 50',
    '0 <= xi, yi <= 40000',
    'All given points are unique.',
  ],
  examples: [
    {
      input: 'points = [[1,2],[2,1],[1,0],[0,1]]',
      output: '2',
      explanation: 'The four points form a square rotated 45°, with area 2.',
    },
    {
      input: 'points = [[0,1],[2,1],[1,1],[1,0],[2,0]]',
      output: '1',
      explanation: 'The minimum area rectangle has area 1.',
    },
    {
      input: 'points = [[0,3],[1,2],[3,0],[2,1],[1,1]]',
      output: '0',
      explanation: 'No rectangle can be formed.',
    },
  ],
  hints: [
    'For each pair of points (p1, p2), compute the midpoint and squared distance. Two pairs with the same midpoint and squared length are opposite diagonals of a rectangle.',
    'Group pairs by (2*midX, 2*midY, squaredLength) to avoid floating point — use integer keys.',
    'For each group of 2+ pairs, compute area = |d1 × d2| / 2 where d1, d2 are the diagonal vectors.',
    '```js\nconst map = new Map();\nfor (let i = 0; i < n; i++)\n  for (let j = i+1; j < n; j++) {\n    const [x1,y1] = points[i], [x2,y2] = points[j];\n    const key = `${x1+x2},${y1+y2},${(x2-x1)**2+(y2-y1)**2}`;\n    (map.get(key) ?? map.set(key,[]).get(key)).push([x1,y1,x2,y2]);\n  }\n```',
  ],
  functionName: 'minAreaFreeRect',
  params: ['points'],
  starterCode: {
    javascript: `function minAreaFreeRect(points) {\n  \n}`,
    typescript: `function minAreaFreeRect(points: number[][]): number {\n  \n}`,
    python: `def minAreaFreeRect(points: list) -> float:\n    `,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 1], [1, 0], [0, 1]]], expected: 2 },
    { args: [[[0, 1], [2, 1], [1, 1], [1, 0], [2, 0]]], expected: 1 },
    { args: [[[0, 3], [1, 2], [3, 0], [2, 1], [1, 1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 0], [0, 1], [1, 1]]], expected: 1 },
    { args: [[[0, 0], [2, 0], [0, 2], [2, 2]]], expected: 4 },
    { args: [[[0, 0], [1, 1], [2, 0], [1, -1]]], expected: 2 },
    { args: [[[0, 0]]], expected: 0 },
    { args: [[[0, 0], [1, 0]]], expected: 0 },
    { args: [[[0, 0], [1, 0], [2, 0]]], expected: 0 },
  ],
};
