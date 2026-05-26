import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-rectangle-in-histogram',
  title: 'Largest Rectangle in Histogram',
  difficulty: 'hard',
  tags: ['stack', 'arrays'],
  description: `Given an array of integers \`heights\` representing the histogram's bar height where the width of each bar is \`1\`, return the area of the **largest rectangle** in the histogram.`,
  constraints: [
    '1 <= heights.length <= 10^5',
    '0 <= heights[i] <= 10^4',
  ],
  examples: [
    {
      input: 'heights = [2,1,5,6,2,3]',
      output: '10',
      explanation: 'The largest rectangle has area = 5 * 2 = 10 (bars at index 2 and 3, height 5).',
    },
    {
      input: 'heights = [2,4]',
      output: '4',
      explanation: 'The largest rectangle is the bar of height 4 with area 4.',
    },
  ],
  hints: [
    'Use a monotonic stack. Maintain a stack of bar indices in increasing height order.',
    'When you encounter a bar shorter than the bar at the top of the stack, pop bars and compute areas using the popped bar as the shortest bar in the rectangle.',
    'The width of each rectangle extends from the current new stack top + 1 to the current index - 1.',
  ],
  functionName: 'largestRectangleArea',
  params: ['heights'],
  starterCode: {
    javascript: 'function largestRectangleArea(heights) {\n  \n}\n',
    python: 'def largestRectangleArea(heights):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 5, 6, 2, 3]], expected: 10 },
    { args: [[2, 4]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[5, 4, 1, 2]], expected: 8 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[5, 4, 3, 2, 1]], expected: 9 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
    { args: [[6, 2, 5, 4, 5, 1, 6]], expected: 12 },
  ],
};
