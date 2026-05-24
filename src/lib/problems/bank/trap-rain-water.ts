import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trap-rain-water',
  title: 'Trap Rain Water',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array \`height\` where each element represents the height of a bar in a histogram (width = 1), compute how much water can be trapped between the bars after it rains.

Water sits on top of bars and is bounded by the tallest bar to the left and the tallest bar to the right of each position.

**Example:** \`height = [0,1,0,2,1,0,1,3,2,1,2,1]\` traps **6** units of water.`,
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
    'At each index, water level is `min(maxLeft, maxRight) - height[i]` (if positive). The challenge is computing maxLeft and maxRight efficiently.',
    'Use two pointers starting at both ends. Maintain `leftMax` and `rightMax`. At each step, process whichever side has the smaller max — you already know the water level there is bounded by that smaller max.',
    '`let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, water = 0; while (left < right) { if (height[left] < height[right]) { leftMax = Math.max(leftMax, height[left]); water += leftMax - height[left]; left++; } else { rightMax = Math.max(rightMax, height[right]); water += rightMax - height[right]; right--; } } return water;`',
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
