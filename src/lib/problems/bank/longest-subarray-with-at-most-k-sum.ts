import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-with-at-most-k-sum',
  title: 'Longest Subarray with Sum at Most K',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'two-pointers'],
  description: `Given an array of **non-negative** integers \`nums\` and an integer \`k\`, return the **length of the longest contiguous subarray** whose sum is **at most \`k\`**.

**Example:** nums = \`[3, 1, 1, 1, 1]\`, k = \`4\`

The subarray \`[1, 1, 1, 1]\` (indices 1–4) has sum 4 ≤ k and length **4**.

Use a sliding window: expand the right pointer, shrink from the left whenever the sum exceeds \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^4',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,1,1,1,1], k = 4',
      output: '4',
      explanation: 'Subarray [1,1,1,1] (indices 1-4) has sum 4 ≤ k, length 4.',
    },
    {
      input: 'nums = [1,2,3], k = 5',
      output: '2',
      explanation: '[1,2] and [2,3] both have sum ≤ 5 and length 2. [1,2,3] sums to 6 > 5.',
    },
    {
      input: 'nums = [1,2,1,1,1], k = 4',
      output: '3',
      explanation: '[2,1,1] has sum 4 ≤ k, length 3. [1,2,1,1] sums to 5 > k.',
    },
  ],
  hints: [
    'Since all elements are non-negative, when the window sum exceeds k it only grows as you add more elements to the right.',
    'Use a two-pointer sliding window: advance right pointer, then shrink left pointer while sum > k.',
    'Track the maximum window length seen.',
  ],
  functionName: 'longestSubarrayAtMostKSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function longestSubarrayAtMostKSum(nums, k) {
  // Sliding window: expand right, shrink left while sum > k.
}`,
    typescript: `function longestSubarrayAtMostKSum(nums: number[], k: number): number {
  // Sliding window: expand right, shrink left while sum > k.
}`,
    python: `def longestSubarrayAtMostKSum(nums, k):
    # Sliding window: expand right, shrink left while sum > k.
    pass
`,
  },
  visibleTests: [
    { args: [[3, 1, 1, 1, 1], 4], expected: 4 },
    { args: [[1, 2, 3], 5], expected: 2 },
    { args: [[1, 2, 1, 1, 1], 4], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], 3], expected: 3 },
    { args: [[10, 2, 3], 5], expected: 2 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 6], expected: 3 },
    { args: [[5, 5, 5], 0], expected: 0 },
    { args: [[0, 0, 0, 0], 0], expected: 4 },
    { args: [[1, 2, 3], 100], expected: 3 },
  ],
};
