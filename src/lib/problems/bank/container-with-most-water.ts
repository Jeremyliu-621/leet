import type { Problem } from '../types';

export const problem: Problem = {
  id: 'container-with-most-water',
  title: 'Container With Most Water',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`-th line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Notice** that you may not slant the container.`,
  examples: [
    {
      input: 'height = [1,8,6,2,5,4,8,3,7]',
      output: '49',
      explanation: 'Lines at indices 1 and 8 (heights 8 and 7), width 7 → area = min(8,7)*7 = 49.',
    },
    {
      input: 'height = [1,1]',
      output: '1',
    },
  ],
  constraints: [
    'n == height.length',
    '2 <= n <= 10^5',
    '0 <= height[i] <= 10^4',
  ],
  functionName: 'maxWater',
  params: ['height'],
  starterCode: {
    javascript: 'function maxWater(height) {\n  // your code here\n}\n',
    python: 'def maxWater(height):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use two pointers starting at both ends. The area is limited by the shorter line.',
    'Always move the pointer pointing to the shorter line inward — moving the taller one can only decrease width without increasing the minimum height.',
    'Track the maximum area seen at each step.',
  ],
  visibleTests: [
    { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
    { args: [[1, 1]], expected: 1 },
    { args: [[4, 3, 2, 1, 4]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: 2 },
    { args: [[2, 3, 4, 5, 18, 17, 6]], expected: 17 },
    { args: [[1, 0, 0, 0, 1]], expected: 4 },
  ],
};
