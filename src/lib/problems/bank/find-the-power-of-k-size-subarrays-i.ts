import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-power-of-k-size-subarrays-i',
  title: 'Find the Power of K-Size Subarrays I',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an array of integers \`nums\` of length \`n\` and a **positive** integer \`k\`.

The **power** of an array is defined as:

- Its **maximum** element if all of its elements are **consecutive** and **sorted** in **ascending** order.
- **-1** otherwise.

Return an integer array \`results\` of size \`n - k + 1\`, where \`results[i]\` is the *power* of \`nums[i..(i + k - 1)]\`.`,
  constraints: [
    '1 <= n == nums.length <= 500',
    '1 <= nums[i] <= 10^5',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,3,2,5], k = 3',
      output: '[3,4,-1,-1,-1]',
      explanation: 'There are 5 subarrays of size 3:\n[1,2,3] → sorted consecutive → power = 3\n[2,3,4] → sorted consecutive → power = 4\n[3,4,3] → not sorted → power = -1\n[4,3,2] → not sorted ascending → power = -1\n[3,2,5] → not consecutive → power = -1',
    },
    {
      input: 'nums = [2,2,2,2,2], k = 4',
      output: '[-1,-1]',
      explanation: 'No subarray of size 4 has all consecutive ascending elements.',
    },
    {
      input: 'nums = [3,2,3,2,3,2], k = 2',
      output: '[-1,3,-1,3,-1]',
      explanation: '[3,2]→-1 (decreasing), [2,3]→3 (consecutive ascending), [3,2]→-1, [2,3]→3, [3,2]→-1.',
    },
  ],
  hints: [
    'For each window of size k, check if the subarray is strictly ascending and consecutive (each element = previous + 1).',
    'A brute-force O(n*k) approach works for n ≤ 500: for each starting index i, verify all k-1 adjacent pairs.',
    'If the window is valid (all nums[j] == nums[j-1] + 1), the power is nums[i+k-1]; otherwise -1.',
  ],
  functionName: 'resultsArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function resultsArray(nums, k) {

}`,
    python: `def resultsArray(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 3, 2, 5], 3], expected: [3, 4, -1, -1, -1] },
    { args: [[2, 2, 2, 2, 2], 4], expected: [-1, -1] },
    { args: [[3, 2, 3, 2, 3, 2], 2], expected: [-1, 3, -1, 3, -1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: [1, 2, 3] },
    { args: [[1, 2, 3], 3], expected: [3] },
    { args: [[1, 2, 4, 5], 2], expected: [2, -1, 5] },
    { args: [[5, 6, 7, 8, 9], 3], expected: [7, 8, 9] },
    { args: [[1, 3, 2, 4], 2], expected: [-1, -1, -1] },
    { args: [[1, 2, 3, 5, 6, 7], 3], expected: [3, -1, -1, 7] },
  ],
};
