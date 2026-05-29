import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-good-subarray-sum',
  title: 'Maximum Good Subarray Sum',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` of length \`n\` and a positive integer \`k\`.

A subarray \`nums[l..r]\` (where \`0 <= l <= r < n\`) is **good** if the **absolute difference** between its first and last element is **exactly** \`k\`: \`|nums[l] - nums[r]| == k\`.

Return the **maximum sum** of a good subarray, or \`0\` if no good subarrays exist.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
    '`1 <= k <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6], k = 1',
      output: '11',
      explanation: 'Good subarrays (consecutive adjacent differ by 1): [1,2]=3, [2,3]=5, [3,4]=7, [4,5]=9, [5,6]=11. Longer spans like [3,4,5,6] have |3-6|=3 ✗. Maximum good subarray sum is 11.',
    },
    {
      input: 'nums = [-1,3,2,4,5], k = 3',
      output: '11',
      explanation: 'nums[-1,3,2,4,5]: |−1−2|=3 ✓ for l=0,r=2: sum=−1+3+2=4. |−1−2|... wait |nums[0]−nums[2]|=|−1−2|=3 ✓, sum=4. |3−2|=1. |3−4|=1. |2−5|=3 ✓ for l=2,r=4: sum=2+4+5=11. Maximum is 11.',
    },
  ],
  hints: [
    'Think about prefix sums: sum(nums[l..r]) = prefix[r+1] - prefix[l].',
    'To maximize prefix[r+1] - prefix[l], fix r and minimize prefix[l] subject to |nums[l] - nums[r]| = k.',
    'Use a hash map to store the minimum prefix sum seen for each value.',
    'For each index r, look up whether (nums[r] + k) or (nums[r] - k) appears as a key, and use the stored minimum prefix sum.',
    'Be careful to update the hash map before or after checking to avoid zero-length subarrays.',
  ],
  functionName: 'maximumSubarraySum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumSubarraySum(nums, k) {

}`,
    typescript: `function maximumSubarraySum(nums: number[], k: number): number {

}`,
    python: `def maximumSubarraySum(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6], 1], expected: 11 },
    { args: [[-1, 3, 2, 4, 5], 3], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 3 },
    { args: [[1, 2], 2], expected: 0 },
    { args: [[-1, -2, -3], 1], expected: -3 },
    { args: [[5, 4, 5], 1], expected: 9 },
    { args: [[1, 100, 2], 1], expected: 103 },
    { args: [[-10, 5, -5, 3], 15], expected: -5 },
  ],
};
