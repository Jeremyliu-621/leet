import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-lattice-points-inside-a-circle',
  title: 'Count Lattice Points Inside a Circle',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a 2D integer array \`circles\` where \`circles[i] = [xi, yi, ri]\` represents the center \`(xi, yi)\` and radius \`ri\` of the \`i\`th circle drawn on a grid, return the number of **lattice points** that are present inside **at least one** circle.

**Note:**
- A **lattice point** is a point with integer coordinates.
- Points that lie on the **circumference** of a circle are also considered to be inside it.`,
  constraints: [
    '`1 <= circles.length <= 200`',
    '`circles[i].length == 3`',
    '`1 <= xi, yi <= 100`',
    '`1 <= ri <= 100`',
  ],
  examples: [
    {
      input: 'circles = [[2,2,1]]',
      output: '5',
      explanation: 'The 5 lattice points inside the circle: (1,2), (2,1), (2,2), (2,3), (3,2).',
    },
    {
      input: 'circles = [[2,2,2]]',
      output: '13',
      explanation: 'Circle of radius 2 centered at (2,2) covers 13 integer-coordinate points.',
    },
  ],
  hints: [
    'For each circle, iterate x from cx-r to cx+r and y from cy-r to cy+r.',
    'A point (x,y) is inside the circle if (x-cx)² + (y-cy)² ≤ r².',
    'Collect all qualifying points in a Set (to avoid duplicates from overlapping circles) and return its size.',
  ],
  functionName: 'countLatticePoints',
  params: ['circles'],
  starterCode: {
    javascript: `function countLatticePoints(circles) {

}`,
    typescript: `function countLatticePoints(circles: number[][]): number {

}`,
    python: `def countLatticePoints(circles):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 2, 1]]], expected: 5 },
    { args: [[[2, 2, 2]]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1]]], expected: 5 },
    { args: [[[100, 100, 2]]], expected: 13 },
    { args: [[[1, 1, 1], [1, 1, 1]]], expected: 5 },
    { args: [[[2, 2, 1], [4, 4, 1]]], expected: 10 },
    { args: [[[1, 2, 1], [2, 1, 1]]], expected: 8 },
  ],
};
