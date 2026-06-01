import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convex-hull-graham',
  title: 'Convex Hull — Graham Scan',
  difficulty: 'hard',
  tags: ['math', 'arrays'],
  description: `Given a list of \`points\` in the 2D plane, compute the **convex hull** — the smallest convex polygon that contains all the points.

Use the **Graham Scan** algorithm (O(n log n)):
1. Find the **pivot**: the point with the lowest y-coordinate (leftmost if tied).
2. **Sort** the remaining points by polar angle relative to the pivot (using cross product to avoid trigonometry). For collinear points at the same angle, sort by increasing distance from the pivot.
3. **Scan**: maintain a stack. For each point, pop the stack while the last two points and the new point make a clockwise turn (cross product ≤ 0). Push the current point.
4. The remaining stack is the convex hull in counter-clockwise order.

Return the hull vertices as \`[x, y]\` pairs in **counter-clockwise** order starting from the pivot (lowest-y, leftmost-x). Collinear points on the hull edges are **not** included.`,
  constraints: [
    '3 <= points.length <= 10^4',
    '-10^4 <= x, y <= 10^4',
    'All points are distinct.',
    'Not all points are collinear.',
  ],
  examples: [
    {
      input: 'points = [[0,0],[1,0],[0,1],[1,1]]',
      output: '[[0,0],[1,0],[1,1],[0,1]]',
      explanation: 'The four corners form a square — all are on the convex hull in CCW order.',
    },
    {
      input: 'points = [[0,0],[3,0],[3,3],[0,3],[1,1]]',
      output: '[[0,0],[3,0],[3,3],[0,3]]',
      explanation: 'The inner point [1,1] is inside the square formed by the four corners.',
    },
    {
      input: 'points = [[0,0],[4,0],[2,3]]',
      output: '[[0,0],[4,0],[2,3]]',
      explanation: 'Three non-collinear points — the triangle is the hull.',
    },
  ],
  hints: [
    'Cross product of vectors AB and AC: (B.x-A.x)*(C.y-A.y) - (B.y-A.y)*(C.x-A.x). Positive = CCW (left turn), negative = CW (right turn), zero = collinear.',
    'Sort points by angle using the cross product: if cross(pivot, a, b) > 0, then a comes before b. For ties (same angle), sort by squared distance from pivot ascending.',
    'During the scan, pop the stack while cross(stack[-2], stack[-1], current) <= 0 (right turn or collinear). This ensures strictly convex hull (no collinear points on edges).',
  ],
  functionName: 'convexHullGraham',
  params: ['points'],
  starterCode: {
    javascript: `function convexHullGraham(points) {\n\n}`,
    typescript: `function convexHullGraham(points: number[][]): number[][] {\n\n}`,
    python: `def convexHullGraham(points: list[list[int]]) -> list[list[int]]:\n    pass`,
  },
  visibleTests: [
    { args: [[[0, 0], [1, 0], [0, 1], [1, 1]]], expected: [[0, 0], [1, 0], [1, 1], [0, 1]] },
    { args: [[[0, 0], [3, 0], [3, 3], [0, 3], [1, 1]]], expected: [[0, 0], [3, 0], [3, 3], [0, 3]] },
    { args: [[[0, 0], [4, 0], [2, 3]]], expected: [[0, 0], [4, 0], [2, 3]] },
    { args: [[[1, 0], [3, 0], [4, 2], [2, 4], [0, 2]]], expected: [[1, 0], [3, 0], [4, 2], [2, 4], [0, 2]] },
  ],
  hiddenTests: [
    { args: [[[0, 0], [2, 0], [2, 2], [0, 2], [1, 0]]], expected: [[0, 0], [2, 0], [2, 2], [0, 2]] },
    { args: [[[0, 0], [4, 0], [2, 0], [4, 4], [0, 4]]], expected: [[0, 0], [4, 0], [4, 4], [0, 4]] },
    { args: [[[0, 0], [5, 0], [5, 5], [0, 5], [2, 2], [3, 1]]], expected: [[0, 0], [5, 0], [5, 5], [0, 5]] },
    { args: [[[0, 0], [1, 2], [2, 0], [1, 1]]], expected: [[0, 0], [2, 0], [1, 2]] },
  ],
};
