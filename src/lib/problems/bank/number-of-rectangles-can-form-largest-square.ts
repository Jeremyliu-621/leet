import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-rectangles-can-form-largest-square',
  title: 'Number of Rectangles That Can Form the Largest Square',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array \`rectangles\` where \`rectangles[i] = [l_i, w_i]\` represents the \`i\`th rectangle of length \`l_i\` and width \`w_i\`.

You can cut the \`i\`th rectangle to form a square with a side length of \`k\` if both \`k <= l_i\` and \`k <= w_i\`. For example, if you have a rectangle \`[4,6]\`, you can cut it to get a square with a side length of at most \`4\`.

Let \`maxLen\` be the side length of the **largest** square you can obtain from any of the given rectangles.

Return the **number** of rectangles from which you can make a square with a side length of \`maxLen\`.`,
  constraints: [
    '1 <= rectangles.length <= 1000',
    'rectangles[i].length == 2',
    '1 <= l_i, w_i <= 10^9',
    'l_i != w_i',
  ],
  examples: [
    {
      input: 'rectangles = [[5,8],[3,9],[5,12],[16,5]]',
      output: '3',
      explanation: 'Max square side = 5. Three rectangles can form a 5×5 square.',
    },
    {
      input: 'rectangles = [[2,3],[3,7],[4,3],[3,7]]',
      output: '3',
      explanation: 'Max square side = 3. Three rectangles can form a 3×3 square.',
    },
  ],
  hints: [
    'For each rectangle, the largest square possible has side = min(l, w).',
    'Find the maximum of these values, then count how many rectangles achieve it.',
  ],
  functionName: 'countGoodRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: `function countGoodRectangles(rectangles) {

}`,
    python: `def countGoodRectangles(rectangles):
    pass`,
  },
  visibleTests: [
    { args: [[[5, 8], [3, 9], [5, 12], [16, 5]]], expected: 3 },
    { args: [[[2, 3], [3, 7], [4, 3], [3, 7]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[5, 6]]], expected: 1 },
    { args: [[[1, 2], [2, 3]]], expected: 1 },
    { args: [[[1, 2], [2, 1], [2, 3], [3, 2]]], expected: 2 },
    { args: [[[10, 1]]], expected: 1 },
  ],
};
