import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-search',
  title: 'Binary Search',
  difficulty: 'easy',
  tags: ['binary-search', 'arrays'],
  description: `Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search for \`target\` in \`nums\`. If \`target\` exists, return its index; otherwise, return \`-1\`.

You must write an algorithm with **O(log n)** runtime complexity.`,
  examples: [
    { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 exists at index 4.' },
    { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '2 does not exist.' },
  ],
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 < nums[i], target < 10^4',
    'All the integers in nums are unique.',
    'nums is sorted in ascending order.',
  ],
  functionName: 'binarySearch',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function binarySearch(nums, target) {\n  // your code here\n}\n',
    python: 'def binarySearch(nums, target):\n    # your code here\n    pass\n',
  },
  hints: [
    'Maintain left and right pointers. Compute mid = (left + right) >> 1.',
    'If nums[mid] === target, return mid. If nums[mid] < target, search right half. Else search left half.',
    'Return -1 when left > right.',
  ],
  visibleTests: [
    { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
    { args: [[5], 5], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5], -5], expected: -1 },
    { args: [[1, 3, 5, 7, 9], 1], expected: 0 },
    { args: [[1, 3, 5, 7, 9], 9], expected: 4 },
    { args: [[2, 5], 5], expected: 1 },
  ],
};
