import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-equal-balance',
  title: 'Count Subarrays with Equal Balance',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`nums\`, count the number of **non-empty contiguous subarrays** with **equal balance**.

A subarray has **equal balance** if the count of **positive integers** in it equals the count of **negative integers**. Zero values are neutral — they contribute to neither count.

Return the total number of such subarrays.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1, -1, 2, -2]',
      output: '4',
      explanation:
        'The balanced subarrays are: [1,-1] (1 positive, 1 negative), [-1,2] (1 positive, 1 negative), [2,-2] (1 positive, 1 negative), and [1,-1,2,-2] (2 positives, 2 negatives).',
    },
    {
      input: 'nums = [1, 2, -3]',
      output: '1',
      explanation:
        'Only [2,-3] is balanced (1 positive, 1 negative). [1,2,-3] has 2 positives and 1 negative.',
    },
    {
      input: 'nums = [1, 2, 3]',
      output: '0',
      explanation: 'No subarray has equal counts of positives and negatives.',
    },
  ],
  hints: [
    'Map each element to a "vote": +1 if positive, -1 if negative, 0 if zero. A subarray is balanced when its votes sum to 0.',
    'Use a prefix-sum approach: define `prefix[i]` as the vote sum of `nums[0..i-1]`. A subarray `[l, r]` is balanced iff `prefix[r+1] === prefix[l]`.',
    'Store prefix sums in a hash map as you iterate. For each new prefix sum value `s`, the number of previously seen occurrences of `s` tells you how many new balanced subarrays end here. Sum these counts.',
  ],
  functionName: 'countBalancedSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countBalancedSubarrays(nums) {

}`,
    python: `def countBalancedSubarrays(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, -1, 2, -2]], expected: 4 },
    { args: [[1, 2, -3]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[-1]], expected: 0 },
    { args: [[1, -1]], expected: 1 },
    { args: [[0, 0]], expected: 3 },
    { args: [[1, 0, -1]], expected: 2 },
    { args: [[1, -1, 1, -1]], expected: 4 },
    { args: [[-2, -3, 4, 1]], expected: 2 },
    { args: [[3, -3, 3, -3, 3, -3]], expected: 9 },
    { args: [[1, 2, -1, -2, 3, -3]], expected: 6 },
  ],
};
