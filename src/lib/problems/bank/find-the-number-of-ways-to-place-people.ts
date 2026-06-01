import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-ways-to-place-people',
  title: 'Find the Number of Ways to Place People',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a 2D array \`points\` of size \`n x 2\` representing integer coordinates on a 2D plane.

Count the number of pairs \`(Alice, Bob)\` where Alice places a fence post at \`points[i]\` (**upper-left**) and Bob places one at \`points[j]\` (**lower-right**), forming a rectangle where **no other point** from the array lies strictly inside or on the boundary (except Alice's and Bob's positions).

Formally, pair \`(i, j)\` is valid if there is **no** other index \`k\` (k ≠ i, k ≠ j) such that \`points[i][0] ≤ points[k][0] ≤ points[j][0]\` and \`points[j][1] ≤ points[k][1] ≤ points[i][1]\`.`,
  constraints: [
    '2 <= n <= 50',
    '0 <= points[i][0], points[i][1] <= 50',
    'All points are distinct.',
  ],
  examples: [
    {
      input: 'points = [[1,1],[2,2],[3,3]]',
      output: '0',
      explanation: 'All points are collinear on the diagonal. For any two points, each pair contains the third inside the rectangle.',
    },
    {
      input: 'points = [[6,2],[4,4],[2,6]]',
      output: '2',
      explanation: 'Valid pairs: ([6,2],[4,4]) and ([2,6],[6,2]) — wait recheck. Sorted by x: [2,6],[4,4],[6,2]. Pairs (0,1) and (1,2) are valid.',
    },
  ],
  hints: [
    'Sort points by x ascending, then by y descending for ties in x.',
    'For pair (i, j): Alice is at points[i], Bob at points[j]. Valid only if points[j][1] <= points[i][1] (Bob is lower or equal).',
    'Check that no third point k has x in [x_i, x_j] and y in [y_j, y_i]. With n <= 50, an O(n^3) brute force works.',
  ],
  functionName: 'numberOfPairs',
  params: ['points'],
  starterCode: {
    javascript: 'function numberOfPairs(points) {\n  \n}\n',
    typescript: 'function numberOfPairs(points: number[][]): number {\n  \n}',
    python: 'def numberOfPairs(points):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 0 },
    { args: [[[6, 2], [4, 4], [2, 6]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[3, 1], [1, 3], [4, 2]]], expected: 2 },
    { args: [[[1, 1], [1, 2], [1, 3]]], expected: 2 },
    { args: [[[1, 2], [2, 1], [2, 3]]], expected: 2 },
    { args: [[[0, 0], [1, 1]]], expected: 0 },
    { args: [[[0, 1], [1, 0]]], expected: 1 },
  ],
};
