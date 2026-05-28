import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trap-rain-water',
  title: 'Trap Rain Water',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array \`height\` where each element represents the height of a bar in a histogram (width = 1), compute how much water can be trapped between the bars after it rains.

At any index \`i\`, the water level is bounded by the tallest bar to its left and the tallest bar to its right: water at \`i\` = \`max(0, min(maxLeft[i], maxRight[i]) - height[i])\`.

**Example:** \`height = [0,1,0,2,1,0,1,3,2,1,2,1]\` traps **6** units of water.

Solve this using O(n) extra space — precompute prefix-maximum arrays from the left and right.`,
  constraints: [
    '1 <= height.length <= 1000',
    '0 <= height[i] <= 1000',
  ],
  examples: [
    {
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'The bars trap 6 units of water total.',
    },
    {
      input: 'height = [4,2,0,3,2,5]',
      output: '9',
      explanation: '9 units of water are trapped.',
    },
    {
      input: 'height = [3,0,2,0,4]',
      output: '7',
      explanation: '3 + 2 + ... totals 7 units.',
    },
  ],
  hints: [
    'The water at index i is `min(tallest bar to the left, tallest bar to the right) - height[i]`. If that\'s negative, no water sits there.',
    'Precompute two arrays: `leftMax[i]` = max height in height[0..i], and `rightMax[i]` = max height in height[i..n-1]. Then sum `max(0, min(leftMax[i], rightMax[i]) - height[i])` for every i.',
    'Build leftMax with a forward pass: `leftMax[i] = Math.max(leftMax[i-1], height[i])`. Build rightMax with a backward pass: `rightMax[i] = Math.max(rightMax[i+1], height[i])`. Then one final pass to accumulate water.',
  ],
  functionName: 'trapRainWater',
  params: ['height'],
  starterCode: {
    javascript: 'function trapRainWater(height) {\n  // your code here\n}\n',
    python: 'def trapRainWater(height):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
    { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
    { args: [[3, 0, 2, 0, 4]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1]], expected: 1 },
    { args: [[3, 1, 2, 4, 0, 1, 3, 2]], expected: 8 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
    { args: [[2, 0, 2]], expected: 2 },
  ],
};
