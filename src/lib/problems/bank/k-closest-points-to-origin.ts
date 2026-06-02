import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-closest-points-to-origin',
  title: 'K Closest Points to Origin',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `Given an array of \`points\` where \`points[i] = [xi, yi]\` represents a point on the X-Y plane and an integer \`k\`, return the \`k\` closest points to the origin \`(0, 0)\`.

The distance from the origin to a point \`(x, y)\` is \`√(x² + y²)\`. You may return the answer in **any order**.`,
  constraints: [
    '`1 <= k <= points.length <= 10⁴`',
    '`-10⁴ <= xi, yi <= 10⁴`',
  ],
  examples: [
    {
      input: 'points = [[1,3],[-2,2]], k = 1',
      output: '[[-2,2]]',
      explanation: 'Distance of (1,3) is √10; distance of (-2,2) is √8. The closest is [-2,2].',
    },
    {
      input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
      output: '[[3,3],[-2,4]]',
      explanation: 'Distances are √18, √26, √20. The two closest are [3,3] and [-2,4].',
    },
  ],
  hints: [
    'You do not need to compute the actual Euclidean distance — comparing `x² + y²` is sufficient since square root is monotonically increasing.',
    'Sort all points by squared distance and return the first `k`. This is O(n log n).',
    'For a faster O(n log k) solution, maintain a max-heap of size `k`.',
  ],
  functionName: 'kClosest',
  params: ['points', 'k'],
  starterCode: {
    javascript: `function kClosest(points, k) {
  return points.sort((a, b) => (a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1])).slice(0, k);
}`,
    typescript: `function kClosest(points: number[][], k: number): number[][] {
  return points.sort((a, b) => (a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1])).slice(0, k);
}`,
    python: `def kClosest(points, k):
    return sorted(points, key=lambda p: p[0]*p[0]+p[1]*p[1])[:k]`,
  },
  visibleTests: [
    { args: [[[1, 3], [-2, 2]], 1], expected: [[-2, 2]] },
    { args: [[[3, 3], [5, -1], [-2, 4]], 2], expected: [[3, 3], [-2, 4]] },
  ],
  hiddenTests: [
    { args: [[[0, 1], [1, 0]], 2], expected: [[0, 1], [1, 0]] },
    { args: [[[1, 0], [0, 1], [-1, 0], [0, -1]], 2], expected: [[1, 0], [0, 1]] },
    { args: [[[2, 2], [2, 2], [2, 2]], 2], expected: [[2, 2], [2, 2]] },
    { args: [[[10, 10], [1, 1], [-1, -1], [3, 4]], 3], expected: [[1, 1], [-1, -1], [3, 4]] },
  ],
};
