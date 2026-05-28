import type { Problem } from '../types';

export const problem: Problem = {
  id: 'falling-squares',
  title: 'Falling Squares',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `There are several squares being dropped onto the X-axis of a 2D plane.

You are given a 2D integer array \`positions\` where \`positions[i] = [left_i, sideLength_i]\` represents the \`i\`th square with a side length of \`sideLength_i\` that is dropped with its left edge aligned with X-coordinate \`left_i\`.

Each square is dropped one at a time from a height above any landed squares. It then falls until it either lands on the **top side of another square** or on the **X-axis**.

A square brushing the left/right edge of another square does **not** land on it.

After each square is dropped, you must record the **height of the current tallest stack** of squares.

Return an integer array \`ans\` where \`ans[i]\` represents the height described above after dropping the \`i\`th square.`,
  constraints: ['1 <= positions.length <= 1000', '1 <= left_i <= 10^8', '1 <= sideLength_i <= 10^6'],
  examples: [
    {
      input: 'positions = [[1,2],[2,1],[1,1]]',
      output: '[2,3,3]',
      explanation: 'Square 1 at [1,3) h=2. Square 2 at [2,3) overlaps, h=3. Square 3 at [1,2) overlaps with square 1, h=3.',
    },
    { input: 'positions = [[100,100],[200,100]]', output: '[100,100]', explanation: 'The two squares do not overlap.' },
  ],
  hints: [
    'For each falling square, compute the maximum height of any already-landed square whose interval overlaps with the new square.',
    'Two intervals [a, a+s) and [b, b+t) overlap if a < b+t and b < a+s.',
    'The new square lands at (max overlapping height) + sideLength. Track the running maximum height.',
  ],
  functionName: 'fallingSquares',
  params: ['positions'],
  starterCode: {
    javascript: 'function fallingSquares(positions) {\n\n}\n',
    typescript: "function fallingSquares(positions: number[][]): number[] {\n\n}",

    python: 'def fallingSquares(positions):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 1], [1, 1]]], expected: [2, 3, 3] },
    { args: [[[100, 100], [200, 100]]], expected: [100, 100] },
  ],
  hiddenTests: [
    { args: [[[3, 3], [1, 4], [1, 5]]], expected: [3, 7, 12] },
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: [1, 2, 5] },
  ],
};
