import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-first-last-pos',
  title: 'Find First and Last Position of Element in Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `Given an array of integers \`nums\` sorted in non-decreasing order, find the starting and ending position of a given \`target\` value.

If \`target\` is not found in the array, return \`[-1, -1]\`.

You must write an algorithm with **O(log n)** runtime complexity.`,
  examples: [
    { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3,4]' },
    { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1,-1]' },
    { input: 'nums = [], target = 0', output: '[-1,-1]' },
  ],
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    'nums is a non-decreasing integer array.',
    '-10^9 <= target <= 10^9',
  ],
  functionName: 'searchRange',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function searchRange(nums, target) {\n  // your code here\n}\n',
    python: 'def searchRange(nums, target):\n    # your code here\n    pass\n',
  },
  hints: [
    'Run two separate binary searches: one to find the leftmost occurrence and one to find the rightmost.',
    'For leftmost: when nums[mid] === target, record mid as a candidate and continue searching left (hi = mid - 1).',
    'For rightmost: when nums[mid] === target, record mid and continue searching right (lo = mid + 1).',
  ],
  visibleTests: [
    { args: [[5, 7, 7, 8, 8, 10], 8], expected: [3, 4] },
    { args: [[5, 7, 7, 8, 8, 10], 6], expected: [-1, -1] },
    { args: [[], 0], expected: [-1, -1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [0, 0] },
    { args: [[1, 1, 1, 1], 1], expected: [0, 3] },
    { args: [[2, 2], 2], expected: [0, 1] },
    { args: [[1, 2, 3], 2], expected: [1, 1] },
  ],
};
