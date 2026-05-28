import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-closest-points',
  title: 'K Closest Points to Origin',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `Given an array of \`points\` where \`points[i] = [xi, yi]\` represents a point on the **X-Y** plane and an integer \`k\`, return the \`k\` closest points to the origin \`(0, 0)\`.

The distance between two points on the X-Y plane is the Euclidean distance (i.e., \`√(x1 - x2)^2 + (y1 - y2)^2\`).

You may return the answer in **any order**. The answer is **guaranteed** to be **unique** (except for the order that it is in).`,
  constraints: [
    '1 <= k <= points.length <= 10^4',
    '-10^4 <= xi, yi <= 10^4',
  ],
  examples: [
    {
      input: 'points = [[1,3],[-2,2]], k = 1',
      output: '[[-2,2]]',
      explanation: 'The distance of (1,3) is √10; the distance of (-2,2) is √8. (-2,2) is closer.',
    },
    {
      input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
      output: '[[3,3],[-2,4]]',
    },
  ],
  hints: [
    'Sort the points by Euclidean distance squared (no need to take square root: x²+y² suffices).',
    'Return the first k points after sorting.',
    'Alternatively, use a max-heap of size k for O(n log k) time.',
  ],
  functionName: 'kClosestRunner',
  params: ['points', 'k'],
  preamble: {
    javascript: `function kClosestRunner(points, k) {
  return kClosest(points, k).slice().sort((a, b) => {
    const da = a[0]*a[0]+a[1]*a[1], db = b[0]*b[0]+b[1]*b[1];
    if (da !== db) return da - db;
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
}`,
    typescript: "function kClosestRunner(points: number[][], k: number): number[][] {\n  // Return the k closest points to the origin\n}",

    python: `def kClosestRunner(points, k):
    result = kClosest(points, k)
    return sorted([list(p) for p in result], key=lambda p: (p[0]*p[0]+p[1]*p[1], p[0], p[1]))
`,
  },
  starterCode: {
    javascript: `function kClosest(points, k) {
  // Return the k closest points to the origin
}`,
    python: `def kClosest(points, k):
    # Return the k closest points to the origin
    pass`,
  },
  visibleTests: [
    { args: [[[1, 3], [-2, 2]], 1], expected: [[-2, 2]] },
    { args: [[[3, 3], [5, -1], [-2, 4]], 2], expected: [[3, 3], [-2, 4]] },
    { args: [[[0, 1], [1, 0]], 2], expected: [[0, 1], [1, 0]] },
  ],
  hiddenTests: [
    { args: [[[1, 0], [0, 1]], 1], expected: [[0, 1]] },
    { args: [[[2, 2], [1, 1]], 1], expected: [[1, 1]] },
    { args: [[[1, 1], [2, 2], [3, 3]], 2], expected: [[1, 1], [2, 2]] },
    { args: [[[0, 0], [1, 1], [2, 2]], 1], expected: [[0, 0]] },
  ],
};
