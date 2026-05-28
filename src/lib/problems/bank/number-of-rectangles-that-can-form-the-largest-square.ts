import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-rectangles-that-can-form-the-largest-square',
  title: 'Number of Rectangles That Can Form The Largest Square',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array \`rectangles\` where \`rectangles[i] = [li, wi]\` represents the \`i\`th rectangle of length \`li\` and width \`wi\`.

You can cut the \`i\`th rectangle to form a square with a side length of \`k\` if both \`k <= li\` and \`k <= wi\`. For example, if you have a \`4 x 6\` rectangle, you can cut a square of side length 4.

Let \`maxLen\` be the side length of the **largest** square you can obtain from any of the given rectangles.

Return *the **number** of rectangles from which you can make a square of side length* \`maxLen\`.

**Approach:** For each rectangle compute min(l, w). Find the max of these mins, then count how many rectangles achieve that max.`,
  constraints: [
    '1 <= rectangles.length <= 1000',
    'rectangles[i].length == 2',
    '1 <= li, wi <= 10^9',
    'All the given rectangles are unique.',
  ],
  examples: [
    {
      input: 'rectangles = [[5,8],[3,9],[5,12],[16,5]]',
      output: '3',
      explanation: 'min sides: [5,3,5,5]. Max = 5; three rectangles achieve it.',
    },
    {
      input: 'rectangles = [[2,3],[3,7],[4,3],[3,7]]',
      output: '3',
      explanation: 'min sides: [2,3,3,3]. Max = 3; three rectangles achieve it.',
    },
  ],
  hints: [
    'For each rectangle, the max square it can produce has side = min(l, w).',
    'Find the global max, then count how many rectangles match it.',
    '```js\nfunction countGoodRectangles(rectangles) {\n  const mins = rectangles.map(([l,w])=>Math.min(l,w));\n  const maxLen = Math.max(...mins);\n  return mins.filter(m=>m===maxLen).length;\n}\n```',
  ],
  functionName: 'countGoodRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: `function countGoodRectangles(rectangles) {
  // return count of rectangles forming the largest square

}`,
    python: `def countGoodRectangles(rectangles: list) -> int:
    # return count of rectangles forming the largest square
    pass
`,
  },
  visibleTests: [
    { args: [[[5, 8], [3, 9], [5, 12], [16, 5]]], expected: 3 },
    { args: [[[2, 3], [3, 7], [4, 3], [3, 7]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[1, 2], [2, 1]]], expected: 2 },
    { args: [[[10, 10], [5, 5]]], expected: 1 },
    { args: [[[3, 3], [3, 3], [3, 3]]], expected: 3 },
    { args: [[[1, 100], [100, 1], [50, 50]]], expected: 1 },
  ],
};
