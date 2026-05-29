import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-and-value-of-k',
  title: 'Number of Subarrays With AND Value of K',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `Given an array \`nums\` of non-negative integers and an integer \`k\`, return the **number of subarrays** whose **bitwise AND** equals \`k\`.

A subarray is a contiguous, non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,1], k = 1',
      output: '6',
      explanation: 'All 6 subarrays have AND equal to 1.',
    },
    {
      input: 'nums = [1,2,3], k = 1',
      output: '1',
      explanation: 'Only [1] (index 0) has AND equal to 1. [2]=2, [3]=3, [1,2]=0, [2,3]=2, [1,2,3]=0.',
    },
    {
      input: 'nums = [1,1,2], k = 1',
      output: '3',
      explanation: '[1] (index 0), [1] (index 1), [1,1] all have AND=1.',
    },
  ],
  hints: [
    'Bitwise AND is monotonically non-increasing as you extend a subarray. Once a bit is cleared it stays cleared.',
    'For a fixed right endpoint r, track all distinct AND values for subarrays ending at r. There are at most O(log(max(nums))) distinct values because each extension can only clear bits.',
    'Use a map from (AND value → count of subarrays with that AND ending here) and update it as you move r forward.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countSubarrays(nums, k) {

}`,
    typescript: 'function countSubarrays(nums: number[], k: number): number {\n\n}',
    python: `def countSubarrays(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1], 1], expected: 6 },
    { args: [[1, 2, 3], 1], expected: 1 },
    { args: [[1, 1, 2], 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1], 0], expected: 0 },
    { args: [[0, 0, 0], 0], expected: 6 },
    { args: [[5, 5, 5], 5], expected: 6 },
    { args: [[7, 3, 5], 1], expected: 2 },
    { args: [[15, 7, 3, 1], 1], expected: 4 },
    { args: [[4, 4, 4, 4], 4], expected: 10 },
  ],
};
