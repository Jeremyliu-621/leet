import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-score-less-than-k',
  title: 'Count Subarrays With Score Less Than K',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `The **score** of an array is defined as the **product** of its sum and its length.

- For example, the score of \`[1, 2, 3, 4, 5]\` is \`(1 + 2 + 3 + 4 + 5) * 5 = 75\`.

Given a positive integer array \`nums\` and an integer \`k\`, return the **number of non-empty subarrays** of \`nums\` whose score is **strictly less than** \`k\`.

A **subarray** is a contiguous sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
    '1 <= k <= 10^15',
  ],
  examples: [
    {
      input: 'nums = [2,1,4,3,5], k = 10',
      output: '6',
      explanation:
        'Subarrays with score < 10: [2],[1],[4],[3],[5],[2,1]. Score of [2,1]=3*2=6 < 10.',
    },
    {
      input: 'nums = [1,1,1], k = 5',
      output: '5',
      explanation: 'Subarrays [1],[1],[1],[1,1],[1,1] all have score < 5.',
    },
  ],
  hints: [
    'Use a sliding window: expand right pointer and shrink left when score >= k.',
    'For a fixed right pointer, all subarrays ending at right with left in [l, right] are valid: that adds (right - left + 1) to the count.',
    'Track the window sum to compute the score efficiently.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function countSubarrays(nums, k) {\n\n}',
    typescript: "function countSubarrays(nums: number[], k: number): number {\n\n}",

    python: 'def countSubarrays(nums, k):\n    pass',
  },
  visibleTests: [
    { args: [[2, 1, 4, 3, 5], 10], expected: 6 },
    { args: [[1, 1, 1], 5], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], 2], expected: 1 },
    { args: [[5], 5], expected: 0 },
    { args: [[1, 2], 3], expected: 2 },
    { args: [[3, 3, 3], 10], expected: 3 },
    { args: [[1, 1, 1, 1], 4], expected: 4 },
    { args: [[2, 2, 2], 8], expected: 3 },
    { args: [[10, 1, 1], 10], expected: 3 },
  ],
};
