import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-rectangles',
  title: 'Number of Rectangles That Can Form The Largest Square',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array \`rectangles\` where \`rectangles[i] = [l_i, w_i]\` represents the \`i-th\` rectangle of length \`l_i\` and width \`w_i\`.

You can cut the \`i-th\` rectangle to form a square with a side length of \`k\` if both \`k <= l_i\` and \`k <= w_i\`. For example, if you have a rectangle \`[4, 6]\`, you can cut it to get a square with side \`k = 4\`.

Let \`maxLen\` be the side length of the **largest** squares you can obtain from any of the given rectangles.

Return the **number** of rectangles that can make a square of side length \`maxLen\`.`,
  constraints: [
    '1 <= rectangles.length <= 1000',
    'rectangles[i].length == 2',
    '1 <= l_i, w_i <= 10^9',
    'It is guaranteed that no two rectangles will be equal',
  ],
  examples: [
    { input: 'rectangles = [[5,8],[3,9],[5,12],[16,5]]', output: '3', explanation: 'The largest square has side 5. Three rectangles can form it: [5,8], [5,12], [16,5].' },
    { input: 'rectangles = [[2,3],[3,7],[4,3],[3,7]]', output: '3' },
  ],
  hints: [
    'For each rectangle, the max square side is min(l, w). Find the global max across all rectangles, then count how many achieve it.',
    'A rectangle with sides `l` and `w` can contain a stick of length `n` if `Math.min(l, w) >= n`. Count such rectangles.',
    `\`\`\`js
return rectangles.filter(([l, w]) => Math.min(l, w) >= n).length;\`\`\``
  ],
  functionName: 'countGoodRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: 'function countGoodRectangles(rectangles) {\n  \n}\n',
    typescript: "function countGoodRectangles(rectangles: number[][]): number {\n  \n}",

    python: 'def countGoodRectangles(rectangles):\n    pass\n',
  },
  visibleTests: [
    { args: [[[5, 8], [3, 9], [5, 12], [16, 5]]], expected: 3 },
    { args: [[[2, 3], [3, 7], [4, 3], [3, 7]]], expected: 3 },
    { args: [[[1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[5, 5]]], expected: 1 },
    { args: [[[3, 3], [5, 5]]], expected: 1 },
    { args: [[[3, 3], [5, 3]]], expected: 2 },
    { args: [[[1, 2], [3, 4], [2, 5], [6, 1]]], expected: 1 },
  ],
};
