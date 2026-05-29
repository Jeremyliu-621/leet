import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-median-equal-k',
  title: 'Minimum Operations to Make Median Equal to K',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` and a **non-negative** integer \`k\`. In one operation, you can increase or decrease any element of \`nums\` by 1.

Return the **minimum** number of operations needed to make the **median** of \`nums\` equal to \`k\`.

The **median** of an array is the element at the **middle position** after sorting the array in non-decreasing order. For an array of even length, the median is the element at the lower middle position.

Formally, for an array \`a\` of length \`n\`, the median is \`a[(n-1)/2]\` (integer division) after sorting.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,5,6,8,5], k = 4',
      output: '2',
      explanation: 'Sort: [2,5,5,6,8]. Median is at index 2 (value 5). Reduce index-1 element from 5→4 (cost 1) and index-2 element from 5→4 (cost 1). Result: [2,4,4,6,8], median = 4. Total = 2.',
    },
    {
      input: 'nums = [2,5,6,8,5], k = 7',
      output: '3',
      explanation: 'Sort: [2,5,5,6,8]. Increase median from 5→7 (cost 2) and increase 6→7 for the right side (cost 1). Result: [2,5,7,7,8], median = 7. Total = 3.',
    },
    {
      input: 'nums = [1,2,3], k = 2',
      output: '0',
      explanation: 'Sort: [1,2,3]. Median is already 2.',
    },
  ],
  hints: [
    'Sort the array and locate the median index: mid = (n-1) // 2.',
    'Elements strictly before mid must be ≤ k to allow k as the median; any element > k at those positions costs that excess.',
    'Elements strictly after mid must be ≥ k; any element < k costs the shortfall. Plus the cost of changing the median element itself.',
  ],
  functionName: 'minimumOperationsToMakeMedianEqualK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumOperationsToMakeMedianEqualK(nums, k) {

}`,
    typescript: `function minimumOperationsToMakeMedianEqualK(nums: number[], k: number): number {

}`,
    python: `def minimumOperationsToMakeMedianEqualK(nums: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[2, 5, 6, 8, 5], 4], expected: 2 },
    { args: [[2, 5, 6, 8, 5], 7], expected: 3 },
    { args: [[1, 2, 3], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 5], expected: 5 },
    { args: [[5, 5, 5], 3], expected: 4 },
    { args: [[1], 10], expected: 9 },
    { args: [[1, 3, 5, 7, 9], 4], expected: 1 },
    { args: [[10, 20, 30], 15], expected: 5 },
    { args: [[1, 1, 1, 1], 3], expected: 6 },
    { args: [[100, 200, 300, 400], 150], expected: 50 },
  ],
};
