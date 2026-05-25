import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-where-max-element-appears-at-least-k-times',
  title: 'Count Subarrays Where Max Element Appears at Least K Times',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `You are given an integer array \`nums\` and a **positive** integer \`k\`.

Return the number of subarrays where the **maximum** element of \`nums\` appears **at least** \`k\` times in that subarray.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,3,3], k = 2',
      output: '6',
      explanation: 'max = 3. Subarrays with at least 2 occurrences of 3: [3,2,3], [3,2,3,3], [1,3,2,3], [1,3,2,3,3], [2,3,3], [3,3]. Count = 6.',
    },
    {
      input: 'nums = [1,4,2,1], k = 3',
      output: '0',
      explanation: 'max = 4, which appears only once. No subarray has it 3 times.',
    },
  ],
  hints: [
    'Let M = max(nums). Use a sliding window: for each right index, find the smallest left where the window contains exactly k occurrences of M.',
    'Any left index ≤ that smallest left will also yield a valid subarray ending at right.',
    'Track positions of M using a list, and use a pointer to find the k-th occurrence from the right.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countSubarrays(nums, k) {

}`,
    python: `def countSubarrays(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 3], 2], expected: 6 },
    { args: [[1, 4, 2, 1], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 3 },
    { args: [[3, 3, 3], 2], expected: 3 },
    { args: [[3, 3, 3], 3], expected: 1 },
    { args: [[1, 3, 2, 3, 3], 3], expected: 2 },
  ],
};
