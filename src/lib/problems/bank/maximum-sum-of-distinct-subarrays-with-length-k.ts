import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-distinct-subarrays-with-length-k',
  title: 'Maximum Sum of Distinct Subarrays With Length K',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Find the **maximum** subarray sum of all subarrays of \`nums\` that meet the following conditions:

- The length of the subarray is \`k\`.
- All the elements of the subarray are **distinct**.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return \`0\`.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,5,4,2,9,9,9], k = 3',
      output: '15',
      explanation: 'Subarrays of length 3: [1,5,4]=10 (distinct), [5,4,2]=11 (distinct), [4,2,9]=15 (distinct), [2,9,9]=not distinct, [9,9,9]=not distinct. Maximum is 15.',
    },
    {
      input: 'nums = [4,4,4], k = 3',
      output: '0',
      explanation: 'The only subarray of length 3 is [4,4,4], which has duplicates. Return 0.',
    },
  ],
  hints: [
    'Use a sliding window of size k with a frequency map to track which elements are in the window.',
    'A window is valid when all frequencies are 1 (i.e., no duplicates). Track window sum and max valid sum.',
    'Slide the window: add the right element, remove the left element, update the map and sum.',
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
    { args: [[1, 5, 4, 2, 9, 9, 9], 3], expected: 15 },
    { args: [[4, 4, 4], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2], expected: 5 },
    { args: [[1, 1, 1, 7, 8, 9], 3], expected: 24 },
    { args: [[5], 1], expected: 5 },
    { args: [[1, 2, 1, 2], 2], expected: 3 },
  ],
};
