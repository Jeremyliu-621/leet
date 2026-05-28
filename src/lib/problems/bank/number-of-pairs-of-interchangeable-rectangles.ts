import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-pairs-of-interchangeable-rectangles',
  title: 'Number of Pairs of Interchangeable Rectangles',
  difficulty: 'medium',
  tags: ['math', 'hash-map'],
  description: `You are given \`n\` rectangles represented by a **0-indexed** 2D integer array \`rectangles\`, where \`rectangles[i] = [width_i, height_i]\` denotes the width and height of the \`i\`th rectangle.

Two rectangles \`i\` and \`j\` (\`i < j\`) are considered **interchangeable** if they have the **same** width-to-height ratio. More formally, they are interchangeable if \`width_i / height_i == width_j / height_j\` (using real division, not integer division).

Return the **number** of pairs of interchangeable rectangles.`,
  constraints: [
    'n == rectangles.length',
    '1 <= n <= 10^5',
    'rectangles[i].length == 2',
    '1 <= width_i, height_i <= 10^5',
  ],
  examples: [
    {
      input: 'rectangles = [[4,8],[3,6],[10,20],[15,30]]',
      output: '6',
      explanation: 'All four have ratio 1:2. Pairs = C(4,2) = 6.',
    },
    {
      input: 'rectangles = [[4,5],[7,8]]',
      output: '0',
      explanation: 'Different ratios, no interchangeable pairs.',
    },
  ],
  hints: [
    'Normalize each ratio using GCD: (w/gcd, h/gcd).',
    'Count how many rectangles share each normalized ratio.',
    'For c rectangles with the same ratio, the number of pairs is c*(c-1)/2.',
  ],
  functionName: 'interchangeableRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: `function interchangeableRectangles(rectangles) {

}`,
    typescript: "function interchangeableRectangles(rectangles: number[][]): number {\n\n}",

    python: `def interchangeableRectangles(rectangles):
    pass`,
  },
  visibleTests: [
    { args: [[[4, 8], [3, 6], [10, 20], [15, 30]]], expected: 6 },
    { args: [[[4, 5], [7, 8]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[4, 8], [3, 6], [2, 4]]], expected: 3 },
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 3 },
    { args: [[[1, 2], [3, 4]]], expected: 0 },
    { args: [[[3, 4], [4, 3]]], expected: 0 },
  ],
};
