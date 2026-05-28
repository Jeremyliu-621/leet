import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-rectangle-histogram',
  title: 'Largest Rectangle in Histogram',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `Given an array \`heights\` where \`heights[i]\` represents the height of a histogram bar of width 1, find the **area of the largest rectangle** that can be formed within the histogram.

The rectangle must be a contiguous span of bars and can be at most as tall as the shortest bar in that span.

**Example:** \`heights = [2,1,5,6,2,3]\` — the largest rectangle has area **10** (spanning bars 2 and 3, height 5, width 2).`,
  constraints: [
    '1 <= heights.length <= 1000',
    '0 <= heights[i] <= 10000',
  ],
  examples: [
    {
      input: 'heights = [2,1,5,6,2,3]',
      output: '10',
      explanation: 'The largest rectangle spans indices 2-3 (heights 5 and 6) with height 5 and width 2, giving area 10.',
    },
    {
      input: 'heights = [2,4]',
      output: '4',
      explanation: 'Best is to take bar at index 1 alone with height 4 and width 1, giving area 4.',
    },
    {
      input: 'heights = [6,2,5,4,5,1,6]',
      output: '12',
      explanation: 'The rectangle spanning indices 2-4 with height 4 gives area 12.',
    },
  ],
  hints: [
    'Use a monotonic increasing stack. For each bar, if it is shorter than the bar on top of the stack, the top bar can no longer extend to the right — compute its max rectangle area.',
    'Push indices onto the stack. When heights[i] < heights[stack top], pop and calculate area: height = heights[popped], width = i - stack[new top] - 1 (or i if stack is empty). After processing all bars, flush remaining bars from the stack.',
    '`const stack = []; let maxArea = 0;\nfor (let i = 0; i <= heights.length; i++) {\n  const h = i < heights.length ? heights[i] : 0;\n  while (stack.length && heights[stack[stack.length - 1]] > h) {\n    const height = heights[stack.pop()];\n    const width = stack.length ? i - stack[stack.length - 1] - 1 : i;\n    maxArea = Math.max(maxArea, height * width);\n  }\n  stack.push(i);\n}\nreturn maxArea;`',
  ],
  functionName: 'largestRectangleArea',
  params: ['heights'],
  starterCode: {
    javascript: 'function largestRectangleArea(heights) {\n  // your code here\n}\n',
    typescript: "function largestRectangleArea(heights: number[]): number {\n  // your code here\n}",

    python: 'def largestRectangleArea(heights):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 5, 6, 2, 3]], expected: 10 },
    { args: [[2, 4]], expected: 4 },
    { args: [[6, 2, 5, 4, 5, 1, 6]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5, 5, 5, 5]], expected: 20 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[5, 4, 3, 2, 1]], expected: 9 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
};
