import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-exactly-k-distinct',
  title: 'Subarrays with Exactly K Distinct Integers',
  difficulty: 'hard',
  tags: ['sliding-window', 'hash-map', 'arrays'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **subarrays** that contain **exactly** \`k\` distinct integers.

A subarray is a contiguous part of the array.

**Key insight:** Count subarrays with **at most k** distinct values, then subtract subarrays with **at most k-1** distinct values. Use a sliding window approach for each.

**Example:**
- \`nums = [1, 2, 1, 2, 3]\`, \`k = 2\`
- Subarrays with exactly 2 distinct values: [1,2], [2,1], [1,2], [2,1,2], [1,2,1], [1,2,1,2] — count = **7**`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= nums[i] <= nums.length',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 1, 2, 3], k = 2',
      output: '7',
      explanation: 'Subarrays with exactly 2 distinct: [1,2],[2,1],[1,2],[2,1,2],[1,2,1],[1,2,1,2],[2,3] — wait, [2,3] has exactly 2 distinct, total = 7.',
    },
    {
      input: 'nums = [1, 2, 1, 3, 4], k = 3',
      output: '3',
      explanation: 'Subarrays with exactly 3 distinct: [2,1,3], [1,2,1,3], [1,3,4] — total = 3.',
    },
    {
      input: 'nums = [1, 1, 1, 1], k = 1',
      output: '10',
      explanation: 'All 10 subarrays contain exactly 1 distinct integer.',
    },
  ],
  hints: [
    'Directly counting subarrays with exactly K distinct values is hard. Instead, use the identity: exactly(K) = atMost(K) - atMost(K-1).',
    'To count subarrays with at most K distinct values, use a sliding window: maintain a frequency map and shrink the left pointer whenever the window has more than K distinct values.',
    'For each right pointer position, the number of valid subarrays ending at `right` is `right - left + 1`. Sum these up. Call this helper twice: once for K and once for K-1.',
  ],
  functionName: 'subarraysWithKDistinct',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarraysWithKDistinct(nums, k) {
  // Return the count of subarrays with exactly k distinct integers
}`,
    python: `def subarraysWithKDistinct(nums: list[int], k: int) -> int:
    # Return the count of subarrays with exactly k distinct integers
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 3], 2], expected: 7 },
    { args: [[1, 2, 1, 3, 4], 3], expected: 3 },
    { args: [[1, 1, 1, 1], 1], expected: 10 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 3 },
    { args: [[1, 2, 3], 2], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 1 },
    { args: [[2, 1, 1, 1, 2], 2], expected: 7 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[1, 2], 2], expected: 1 },
    { args: [[1, 2, 1, 2, 1, 2], 2], expected: 15 },
  ],
};
