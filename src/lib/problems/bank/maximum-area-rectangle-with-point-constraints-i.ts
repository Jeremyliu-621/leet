import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-area-rectangle-with-point-constraints-i',
  title: 'Maximum Area Rectangle With Point Constraints I',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an array \`points\` where \`points[i] = [xi, yi]\` represents the coordinates of a point on an infinite plane.

Your task is to find the **maximum area** of a rectangle whose edges are parallel to the axes, such that the rectangle contains **no** input point strictly inside it (the points may lie on its boundary).

Return the **maximum area** of such a rectangle. If no rectangle exists, return \`-1\`.

**Note:** A rectangle's **area** is the product of its width and its height.`,
  constraints: [
    '1 <= points.length <= 10',
    'points[i].length == 2',
    '0 <= xi, yi <= 100',
    'All the given points are unique.',
  ],
  examples: [
    {
      input: 'points = [[1,1],[1,3],[3,1],[3,3],[2,2]]',
      output: '-1',
      explanation:
        'The only axis-aligned rectangle whose 4 corners are all in the set uses corners (1,1),(1,3),(3,1),(3,3). Point (2,2) lies strictly inside (1<2<3 and 1<2<3), making it invalid. No other 4-point rectangle can be formed, so return -1.',
    },
    {
      input: 'points = [[1,1],[1,3],[3,1],[3,3],[1,2],[3,2]]',
      output: '4',
      explanation:
        'The rectangle with corners (1,1),(1,3),(3,1),(3,3) has area 4. Points (1,2) and (3,2) lie on the boundary (x=1 and x=3 edges), not strictly inside — so this rectangle is valid. Smaller valid rectangles (1,1)-(3,2) and (1,2)-(3,3) each have area 2. Maximum = 4.',
    },
    {
      input: 'points = [[1,1],[1,3],[3,1],[3,3]]',
      output: '4',
      explanation: 'Use all four corners. No points strictly inside. Area = (3-1)*(3-1) = 4.',
    },
  ],
  hints: [
    'Level 1: With n ≤ 10 there are at most C(10,2)=45 pairs of candidate x-coordinates and C(10,2)=45 pairs of y-coordinates. Try all O(n^4) combinations of four points forming a rectangle (same x-pair and y-pair).',
    'Level 2: For each pair of corners (x1,y1) and (x2,y2) forming a diagonal (x1<x2, y1<y2), check that (x1,y2) and (x2,y1) are both in the point set. Then verify no other point lies strictly inside: x1 < p.x < x2 AND y1 < p.y < y2.',
    'Level 3: Use a Set of "x,y" strings for O(1) corner existence checks. Inner-point check is O(n) per rectangle candidate. Total: O(n^2 * n) = O(n^3), which is fast for n ≤ 10.',
  ],
  functionName: 'maxRectangleArea',
  params: ['points'],
  starterCode: {
    javascript: `function maxRectangleArea(points) {

}`,
    typescript: `function maxRectangleArea(points: number[][]): number {

}`,
    python: `def maxRectangleArea(points):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]]],
      expected: -1,
    },
    {
      args: [[[1, 1], [1, 3], [3, 1], [3, 3], [1, 2], [3, 2]]],
      expected: 4,
    },
    {
      args: [[[1, 1], [1, 3], [3, 1], [3, 3]]],
      expected: 4,
    },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 1]]], expected: -1 },
    { args: [[[0, 0], [1, 0], [0, 1], [1, 1]]], expected: 1 },
    { args: [[[0, 0], [0, 2], [2, 0], [2, 2], [1, 1]]], expected: -1 },
    { args: [[[0, 0], [0, 4], [4, 0], [4, 4], [2, 1]]], expected: -1 },
    { args: [[[1, 2], [3, 2], [1, 5], [3, 5], [2, 3]]], expected: -1 },
  ],
};
