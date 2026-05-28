import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-largest-element-in-array',
  title: 'Kth Largest Element in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the \`kth\` largest element in the array.

Note that it is the \`kth\` largest element in the sorted order, not the \`kth\` distinct element.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
    },
  ],
  hints: [
    'Sorting the array in descending order gives O(n log n) — simply return index k-1.',
    'A min-heap of size k runs in O(n log k): push each element; if heap exceeds k, pop the min. The top is the answer.',
    'Quickselect gives O(n) average but is trickier to implement correctly.',
  ],
  functionName: 'findKthLargest',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function findKthLargest(nums, k) {\n\n}',
    python: 'def findKthLargest(nums, k):\n    pass',
  },
  visibleTests: [
    { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
    { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[2, 1], 2], expected: 1 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[-1, -2], 2], expected: -2 },
    { args: [[7, 6, 5, 4, 3, 2, 1], 5], expected: 3 },
    { args: [[3, 3, 3, 3], 2], expected: 3 },
  ],
};
