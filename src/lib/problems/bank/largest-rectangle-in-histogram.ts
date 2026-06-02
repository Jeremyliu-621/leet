import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-rectangle-in-histogram',
  title: 'Largest Rectangle in Histogram',
  difficulty: 'hard',
  tags: ['stack', 'arrays'],
  description: `Given an array of integers \`heights\` representing the histogram's bar height where the width of each bar is \`1\`, return the area of the largest rectangle in the histogram.`,
  constraints: [
    '1 <= heights.length <= 10^5',
    '0 <= heights[i] <= 10^4',
  ],
  examples: [
    {
      input: 'heights = [2,1,5,6,2,3]',
      output: '10',
      explanation: 'The largest rectangle spans bars at indices 2 and 3 (heights 5 and 6). With height 5 and width 2, the area is 10.',
    },
    {
      input: 'heights = [2,4]',
      output: '4',
      explanation: 'Bar at index 1 has height 4 and width 1, giving area 4.',
    },
  ],
  hints: [
    'Use a monotonic increasing stack of indices. When a bar shorter than the stack\'s top is encountered, pop and compute the rectangle area using the popped height.',
    'The width for a popped bar extends from the new stack top (exclusive) to the current index (exclusive). If the stack is empty after popping, the width spans from 0 to the current index.',
    'Append a sentinel height of 0 at the end of the array to flush all remaining bars from the stack.',
  ],
  functionName: 'largestRectangleArea',
  params: ['heights'],
  starterCode: {
    javascript: `function largestRectangleArea(heights) {
  const stack = [], h = [...heights, 0];
  let maxArea = 0;
  for (let i = 0; i < h.length; i++) {
    while (stack.length && h[stack[stack.length-1]] > h[i]) {
      const height = h[stack.pop()];
      const width = stack.length ? i - stack[stack.length-1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}`,
    typescript: `function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [], h = [...heights, 0];
  let maxArea = 0;
  for (let i = 0; i < h.length; i++) {
    while (stack.length && h[stack[stack.length-1]] > h[i]) {
      const height = h[stack.pop()!];
      const width = stack.length ? i - stack[stack.length-1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}`,
    python: `def largestRectangleArea(heights):
    stack, max_area = [], 0
    h = heights + [0]
    for i, val in enumerate(h):
        while stack and h[stack[-1]] > val:
            height = h[stack.pop()]
            width = i - stack[-1] - 1 if stack else i
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`,
  },
  visibleTests: [
    { args: [[2, 1, 5, 6, 2, 3]], expected: 10 },
    { args: [[2, 4]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1, 1]], expected: 2 },
    { args: [[5, 5, 5, 5, 5]], expected: 25 },
    { args: [[6, 2, 5, 4, 5, 1, 6]], expected: 12 },
    { args: [[2, 1, 2]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
  ],
};
