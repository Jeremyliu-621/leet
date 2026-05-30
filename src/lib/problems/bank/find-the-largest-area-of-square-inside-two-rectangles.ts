import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-largest-area-of-square-inside-two-rectangles',
  title: 'Find the Largest Area of Square Inside Two Rectangles',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There are \`n\` rectangles on a 2D plane. You are given two integer arrays \`l\` and \`r\` of length \`n\`, where \`l[i]\` and \`r[i]\` are the **x-coordinates** of the **left** and **right** edges of the \`i-th\` rectangle, and two integer arrays \`b\` and \`t\` of length \`n\`, where \`b[i]\` and \`t[i]\` are the **y-coordinates** of the **bottom** and **top** edges of the \`i-th\` rectangle.

Return the **area** of the largest square that can fit inside the **intersection** of any two rectangles. If no such square exists, return \`0\`.`,
  constraints: [
    'n == l.length == r.length == b.length == t.length',
    '2 <= n <= 1000',
    '1 <= l[i] < r[i] <= 10^7',
    '1 <= b[i] < t[i] <= 10^7',
  ],
  examples: [
    {
      input: 'l = [1,2], r = [5,4], b = [1,2], t = [5,4]',
      output: '4',
      explanation:
        'The first rectangle covers [1,5]×[1,5] and the second [2,4]×[2,4]. Their intersection is [2,4]×[2,4] (2×2). A 2×2 square fits, area = 4.',
    },
    {
      input: 'l = [0,2], r = [3,4], b = [0,2], t = [3,4]',
      output: '1',
      explanation:
        'Intersection is [2,3]×[2,3] (1×1). A 1×1 square fits, area = 1.',
    },
  ],
  hints: [
    'For every pair of rectangles, compute their intersection (the region they share).',
    'The intersection exists when its width and height are both positive.',
    'The largest square that fits inside the intersection has side = min(width, height). The area is side².',
  ],
  functionName: 'largestSquareInsideTwoRectangles',
  params: ['l', 'r', 'b', 't'],
  starterCode: {
    javascript: `function largestSquareInsideTwoRectangles(l, r, b, t) {
  // your code here
}`,
    typescript: `function largestSquareInsideTwoRectangles(l: number[], r: number[], b: number[], t: number[]): number {
  // your code here
}`,
    python: `def largestSquareInsideTwoRectangles(l, r, b, t):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 2], [5, 4], [1, 2], [5, 4]], expected: 4 },
    { args: [[0, 2], [3, 4], [0, 2], [3, 4]], expected: 1 },
    { args: [[0, 2], [1, 4], [0, 2], [1, 4]], expected: 0 },
    { args: [[0, 0], [10, 5], [0, 0], [10, 3]], expected: 9 },
    { args: [[0, 2, 1], [4, 8, 6], [0, 2, 1], [4, 8, 6]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[0, 0], [2, 2], [0, 0], [2, 2]], expected: 4 },
    { args: [[0, 0], [3, 2], [0, 0], [2, 3]], expected: 4 },
    { args: [[0, 0], [1, 5], [0, 0], [5, 1]], expected: 1 },
    { args: [[0, 5, 0], [10, 15, 10], [0, 5, 0], [10, 15, 10]], expected: 100 },
    { args: [[1, 3, 5], [2, 4, 6], [1, 3, 5], [2, 4, 6]], expected: 0 },
  ],
};
