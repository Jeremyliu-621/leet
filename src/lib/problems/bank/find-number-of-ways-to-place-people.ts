import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-number-of-ways-to-place-people',
  title: 'Find Number of Ways to Place People',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a 2D array \`points\` where \`points[i] = [xi, yi]\`, count the number of **valid pairs** \`(i, j)\`.

A pair \`(i, j)\` is valid if point \`i\` is the **upper-left** corner and point \`j\` is the **lower-right** corner of an axis-aligned rectangle, and **no other point** in \`points\` lies strictly inside or on the boundary of that rectangle (other than \`i\` and \`j\` themselves).

Formally, \`i\` is upper-left and \`j\` is lower-right when: \`xi <= xj\` AND \`yj <= yi\`.`,
  constraints: [
    '2 <= points.length <= 500',
    '-10^8 <= points[i][0], points[i][1] <= 10^8',
    'All points are distinct.',
  ],
  examples: [
    {
      input: 'points = [[1,1],[2,2],[3,3]]',
      output: '0',
      explanation: 'For any pair, the third point lies on the diagonal of the rectangle, so no valid pair exists.',
    },
    {
      input: 'points = [[6,2],[4,4],[2,6]]',
      output: '2',
      explanation: 'Two valid pairs exist: upper-left [2,6] with lower-right [4,4], and upper-left [4,4] with lower-right [6,2]. In each case no third point lies inside or on the rectangle boundary.',
    },
    {
      input: 'points = [[3,1],[1,3],[1,1]]',
      output: '2',
      explanation: 'Valid pairs: ([1,3],[3,1]) and ([1,1],[3,1]).',
    },
  ],
  hints: [
    'Sort points by x ascending, then by y descending for ties. For a fixed upper-left point i, scan all points j to its right.',
    'A point j is a candidate lower-right corner if xj >= xi and yj <= yi. Among all candidates, j is valid if no other candidate has a y-value strictly between yj and yi.',
    'Track maxY: the highest y-value seen so far among candidates with y <= yi. If the current candidate j has yj > maxY, no previously-seen candidate "blocks" the top of the rectangle — count it and update maxY.',
  ],
  functionName: 'numberOfPairs',
  params: ['points'],
  starterCode: {
    javascript: `function numberOfPairs(points) {
  // Sort points by x asc, then y desc for ties.
  // For each i, scan j > i; track maxY to count valid lower-right corners.
}`,
    python: `def numberOfPairs(points):
    # Sort points by x asc, then y desc for ties.
    # For each i, scan j > i; track max_y to count valid lower-right corners.
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 0 },
    { args: [[[6, 2], [4, 4], [2, 6]]], expected: 2 },
    { args: [[[3, 1], [1, 3], [1, 1]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 1]]], expected: 0 },
    { args: [[[1, 4], [2, 3], [3, 2], [4, 1]]], expected: 3 },
    { args: [[[0, 4], [2, 2], [4, 0], [0, 0], [4, 4]]], expected: 6 },
    { args: [[[1, 2], [2, 1]]], expected: 1 },
  ],
};
