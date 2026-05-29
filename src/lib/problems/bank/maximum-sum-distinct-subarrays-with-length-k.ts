import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-distinct-subarrays-with-length-k',
  title: 'Maximum Sum of Distinct Subarrays With Length K',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Find the **maximum subarray sum** of all the subarrays of \`nums\` that meet the following conditions:

- The length of the subarray is \`k\`, and
- All the elements of the subarray are **distinct**.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return \`0\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '`1 <= k <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [1,5,4,2,9,9,9], k = 3',
      output: '15',
      explanation: 'The subarrays of nums with length 3 are: [1,5,4] (sum=10, distinct), [5,4,2] (sum=11, distinct), [4,2,9] (sum=15, distinct), [2,9,9] (not distinct), [9,9,9] (not distinct). Maximum is 15.',
    },
    {
      input: 'nums = [4,4,4], k = 3',
      output: '0',
      explanation: 'The subarray [4,4,4] is not distinct. No valid subarray exists, so return 0.',
    },
  ],
  hints: [
    'Use a sliding window of size `k`. Maintain a frequency map and a running window sum.',
    'When adding a new element, if it causes a duplicate (freq > 1), the window is not distinct. Only count windows where the freq map has exactly `k` distinct elements.',
    'Slide the window by removing the leftmost element (decrement freq, remove if 0) and adding the rightmost.',
  ],
  functionName: 'maximumSubarraySum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumSubarraySum(nums, k) {

}`,
    python: `def maximumSubarraySum(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1,5,4,2,9,9,9], 3], expected: 15 },
    { args: [[4,4,4], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5], 3], expected: 12 },
    { args: [[1,1,1,7,8,9], 3], expected: 24 },
    { args: [[9,9], 1], expected: 9 },
    { args: [[1,2,1,3,4], 2], expected: 7 },
    { args: [[100], 1], expected: 100 },
  ],
};
