import type { Problem } from '../types';

export const problem: Problem = {
  id: 'widest-vertical-area',
  title: 'Widest Vertical Area Between Two Points Containing No Points',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given \`n\` points on a 2D plane where \`points[i] = [xi, yi]\`, return the **widest vertical area** between two points such that no points are inside the area.

A **vertical area** is a fixed-width region with a left boundary at \`x = x1\` and right boundary at \`x = x2\` where \`x1 < x2\`. The area contains no points of the given list. Points exactly **on the boundary** are **not** considered inside the area.

The **widest** such area is the one with the maximum width \`x2 - x1\`.

**Key insight:** The y-coordinates are irrelevant. Sort the distinct x-coordinates and find the largest gap between consecutive values.`,
  constraints: [
    '`n == points.length`',
    '`2 <= n <= 10^5`',
    '`points[i].length == 2`',
    '`0 <= xi, yi <= 10^9`',
  ],
  examples: [
    {
      input: 'points = [[8,7],[9,9],[7,4],[9,7]]',
      output: '1',
      explanation: 'Sorted x-coordinates: [7, 8, 9, 9]. Gaps between consecutive values: 1, 1, 0. Maximum gap is 1.',
    },
    {
      input: 'points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]',
      output: '3',
      explanation: 'Sorted x-coordinates: [1, 1, 3, 5, 8, 9]. Gaps: 0, 2, 2, 3, 1. Maximum gap is 3.',
    },
  ],
  hints: [
    'The y-coordinates play no role — two points at different y values but the same x form a zero-width vertical boundary, not a gap.',
    'Extract all x-coordinates, sort them, then scan consecutive pairs for the largest difference.',
    '`const xs = points.map(p => p[0]).sort((a, b) => a - b);` then iterate with `xs[i] - xs[i-1]`.',
  ],
  functionName: 'maxWidthOfVerticalArea',
  params: ['points'],
  starterCode: {
    javascript: `function maxWidthOfVerticalArea(points) {

}`,
    typescript: "function maxWidthOfVerticalArea(points: number[][]): number {\n\n}",

    python: `def maxWidthOfVerticalArea(points: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[8, 7], [9, 9], [7, 4], [9, 7]]], expected: 1 },
    { args: [[[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]], expected: 3 },
    { args: [[[0, 0], [1, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [100, 0]]], expected: 100 },
    { args: [[[1, 0], [2, 0], [3, 0], [5, 0]]], expected: 2 },
    { args: [[[1, 0], [1, 5], [2, 3], [4, 8]]], expected: 2 },
    { args: [[[0, 0], [0, 1], [0, 2]]], expected: 0 },
    { args: [[[1, 100], [3, 200], [6, 50], [10, 0]]], expected: 4 },
  ],
};
