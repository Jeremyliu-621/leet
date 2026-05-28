import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-largest-element-in-an-array',
  title: 'Kth Largest Element in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the \`k\`th largest element in the array.

Note that it is the \`k\`th largest element in the sorted order, not the \`k\`th distinct element.

Can you solve it without sorting?`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      explanation: 'Sorted descending: [6,5,4,3,2,1]. The 2nd largest is 5.',
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
      explanation: 'Sorted descending: [6,5,5,4,3,3,2,2,1]. The 4th largest is 4.',
    },
  ],
  hints: [
    'One approach: use a min-heap of size k. For each element, push it onto the heap; if the heap exceeds size k, pop the minimum. At the end, the heap\'s minimum is the kth largest.',
    'Another approach: Quickselect — partition the array like quicksort but only recurse into the side that contains the kth position.',
    'The simplest correct approach: sort descending and return the element at index k-1.',
  ],
  functionName: 'findKthLargest',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function findKthLargest(nums, k) {

}`,
    typescript: "function findKthLargest(nums: number[], k: number): number {\n\n}",

    python: `def findKthLargest(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
    { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 2 },
    { args: [[1, 2], 2], expected: 1 },
    { args: [[5, 4, 3, 2, 1], 3], expected: 3 },
    { args: [[7, 6, 5, 4, 3, 2, 1], 2], expected: 6 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 1 },
    { args: [[-1, -2, -3], 2], expected: -2 },
  ],
};
