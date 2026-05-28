import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-bounded-subarray',
  title: 'Longest Bounded Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'two-pointers'],
  description: `Given an array of **positive** integers \`nums\` and an integer \`k\`, return the length of the **longest contiguous subarray** whose sum is less than or equal to \`k\`.

If no such non-empty subarray exists (i.e., every single element exceeds \`k\`), return \`0\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,7,4,2,1,1,5], k = 8',
      output: '4',
      explanation: 'The subarray [4,2,1,1] has sum 8 ≤ 8 and length 4. No subarray of length 5 or more has sum ≤ 8.',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 9',
      output: '3',
      explanation: 'The subarray [2,3,4] has sum exactly 9 ≤ 9 and length 3. Any subarray of length 4 has sum > 9.',
    },
  ],
  hints: [
    'Since all elements are positive, adding more elements to a window can only increase the sum. This monotonic property makes a shrinking window valid.',
    'Use two pointers `left` and `right`. Expand `right` one step at a time; when the window sum exceeds `k`, advance `left` until the sum is within bounds again.',
    'After each adjustment, `right - left + 1` is the current valid window length. Track the maximum across all positions. Total time: O(n).',
  ],
  functionName: 'longestBoundedSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function longestBoundedSubarray(nums, k) {

}`,
    typescript: `function longestBoundedSubarray(nums: number[], k: number): number {

}`,
    python: `def longestBoundedSubarray(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 7, 4, 2, 1, 1, 5], 8], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 9], expected: 3 },
    { args: [[5, 5, 5, 5], 4], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
    { args: [[1, 2, 3], 100], expected: 3 },
    { args: [[10, 1, 2, 3, 10], 6], expected: 3 },
    { args: [[1], 1], expected: 1 },
    { args: [[2, 1, 5, 1, 3], 7], expected: 3 },
    { args: [[1, 4, 2, 3, 2, 1, 2], 5], expected: 3 },
    { args: [[3, 3, 3, 3], 9], expected: 3 },
    { args: [[1, 2, 1, 2, 1], 4], expected: 3 },
  ],
};
