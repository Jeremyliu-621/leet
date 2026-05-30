import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-rectangles-that-can-form-largest-square',
  title: 'Number of Rectangles That Can Form The Largest Square',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array \`rectangles\` where \`rectangles[i] = [l_i, w_i]\` represents the \`i-th\` rectangle of length \`l_i\` and width \`w_i\`.

You can cut the \`i-th\` rectangle to form a square with a side length of \`k\` if both \`k <= l_i\` and \`k <= w_i\`. For example, if you have a rectangle \`[4, 6]\`, you can cut it to get a \`[4, 4]\` square.

Let \`maxLen\` be the side length of the **largest** square you can obtain from any of the given rectangles.

Return the **number** of rectangles from which you can make a square with side length \`maxLen\`.`,
  constraints: [
    '1 <= rectangles.length <= 1000',
    'rectangles[i].length == 2',
    '1 <= l_i, w_i <= 10^9',
    'All the given rectangles are unique.',
  ],
  examples: [
    {
      input: 'rectangles = [[5,8],[3,9],[5,12],[16,5]]',
      output: '3',
      explanation: 'min values: 5, 3, 5, 5. Max = 5. Three rectangles have min(l,w) = 5.',
    },
    {
      input: 'rectangles = [[2,3],[3,7],[4,3],[3,7]]',
      output: '3',
      explanation: 'min values: 2, 3, 3, 3. Max = 3. Three rectangles can form a 3×3 square.',
    },
  ],
  hints: [
    'For each rectangle, the largest square you can cut has side length min(l, w).',
    'Find the global maximum of min(l, w) across all rectangles.',
    'Count how many rectangles have min(l, w) equal to that global maximum.',
  ],
  functionName: 'countGoodRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: `function countGoodRectangles(rectangles) {
  // your code here
}`,
    typescript: `function countGoodRectangles(rectangles: number[][]): number {
  // your code here
}`,
    python: `def countGoodRectangles(rectangles):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[[5, 8], [3, 9], [5, 12], [16, 5]]], expected: 3 },
    { args: [[[2, 3], [3, 7], [4, 3], [3, 7]]], expected: 3 },
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[5, 5], [4, 4], [3, 3]]], expected: 1 },
    { args: [[[5, 5], [5, 5], [5, 5]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 1 },
    { args: [[[7, 7], [7, 7]]], expected: 2 },
    { args: [[[10, 5], [5, 10], [8, 8]]], expected: 1 },
    { args: [[[5, 6], [6, 5], [5, 5]]], expected: 3 },
    { args: [[[6, 6], [6, 7], [7, 6]]], expected: 3 },
  ],
};
