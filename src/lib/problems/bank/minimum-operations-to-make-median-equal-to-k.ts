import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-median-equal-to-k',
  title: 'Minimum Operations to Make Median Equal to K',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` and a non-negative integer \`k\`. In one operation, you can increase or decrease any element of \`nums\` by 1.

The **median** of an array is the middle element after the array is sorted. If the array has even length, the median is at index \`n / 2\` (0-indexed) after sorting.

Return the **minimum** number of operations needed to make the median of \`nums\` equal to \`k\`.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,5,6,8,5], k = 4',
      output: '3',
      explanation: 'Sort: [2,5,5,6,8]. Median is at index 2 → value 5. Since 5 > 4, we need to reduce the elements ≥ median that are > k. There are 3 such elements (5, 6, 8). Each needs 1 operation (decrease to 4), so the answer is 3.',
    },
    {
      input: 'nums = [2,5,6,8,5], k = 7',
      output: '3',
      explanation: 'Sort: [2,5,5,6,8]. Median value 5 < 7. Elements at indices 0..2 that are < 7: all three (2, 5, 5). Each needs 1 operation (increase to 7), so the answer is 3.',
    },
    {
      input: 'nums = [3,3,3], k = 3',
      output: '0',
      explanation: 'Median is already 3.',
    },
  ],
  hints: [
    'Sort the array. The median is at index Math.floor(n/2).',
    'If the median is already k, return 0.',
    'If the median > k: count elements from index n/2 onward that are still > k (each needs 1 op to bring to k). If median < k: count elements from index 0 through n/2 that are still < k.',
  ],
  functionName: 'minOperationsToMakeMedianK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperationsToMakeMedianK(nums, k) {
  // your code here
}`,
    typescript: `function minOperationsToMakeMedianK(nums: number[], k: number): number {
  // your code here
}`,
    python: `def minOperationsToMakeMedianK(nums, k):
    # your code here
`,
  },
  visibleTests: [
    { args: [[2, 5, 6, 8, 5], 4], expected: 3 },
    { args: [[2, 5, 6, 8, 5], 7], expected: 3 },
    { args: [[3, 3, 3], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 4], expected: 3 },
    { args: [[1, 10], 5], expected: 1 },
    { args: [[5], 5], expected: 0 },
    { args: [[1, 3, 5, 7, 9], 5], expected: 0 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
  ],
};
