import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trapping-rain-water',
  title: 'Trapping Rain Water',
  difficulty: 'hard',
  tags: ['two-pointers', 'arrays'],
  description: `Given an array of non-negative integers \`height\` representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example:** \`height = [0,1,0,2,1,0,1,3,2,1,2,1]\` traps **6** units of water.

Solve this in O(n) time and O(1) space using two pointers — not the DP precomputation approach.`,
  constraints: [
    '0 <= height.length <= 3 * 10^4',
    '0 <= height[i] <= 10^5',
  ],
  examples: [
    {
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      explanation: 'Total 6 units of water are trapped between the bars.',
    },
    {
      input: 'height = [4,2,0,3,2,5]',
      output: '9',
      explanation: '9 units of water are trapped.',
    },
    {
      input: 'height = [3,0,2,0,4]',
      output: '7',
      explanation: '7 units of water are trapped.',
    },
    {
      input: 'height = []',
      output: '0',
      explanation: 'No bars, no water.',
    },
  ],
  hints: [
    'Think about what determines how much water can be above any bar at position i. It depends on the tallest bars to its left and right — the minimum of those two heights minus the current height.',
    'Instead of precomputing the max arrays, use two pointers starting at each end. The pointer on the side with the smaller max can be moved safely — we know the water level at that position is bounded by the smaller max.',
    'Two pointers l=0, r=n-1. Track leftMax and rightMax. If leftMax < rightMax, add leftMax-height[l] to result and advance l. Else add rightMax-height[r] and advance r.',
  ],
  functionName: 'trap',
  params: ['height'],
  starterCode: {
    javascript: 'function trap(height) {\n  \n}',
    python: 'def trap(height: list[int]) -> int:\n    pass',
  },
  visibleTests: [
    { args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
    { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
    { args: [[3, 0, 2, 0, 4]], expected: 7 },
    { args: [[]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 0, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
  ],
};
