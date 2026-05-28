import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-sum-divisible-by-p',
  title: 'Make Sum Divisible by P',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of positive integers \`nums\`, remove the **smallest** subarray (possibly **empty**) such that the **sum** of the remaining elements is divisible by \`p\`. It is **not** allowed to remove the whole array.

Return the **length** of the smallest subarray that you need to remove, or \`-1\` if it's impossible.

A **subarray** is defined as a contiguous block of elements in the array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= p <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,1,4,2], p = 6',
      output: '1',
      explanation: 'The sum is 10. Remove [4] (length 1) → sum = 6, divisible by 6.',
    },
    {
      input: 'nums = [6,3,5,2], p = 9',
      output: '2',
      explanation: 'Sum = 16. We need remainder 7. Remove [5,2] → sum = 9. Length = 2.',
    },
    {
      input: 'nums = [1,2,3], p = 3',
      output: '0',
      explanation: 'Sum = 6, already divisible by 3. Remove empty subarray.',
    },
  ],
  hints: [
    'Compute total sum mod p. If 0, answer is 0.',
    'Use prefix sums mod p. We want to find the shortest subarray with sum ≡ target (mod p).',
    'For each prefix[j], look for prefix[i] = (prefix[j] - target + p) % p. Use a hash map of last seen indices.',
  ],
  functionName: 'minSubarray',
  params: ['nums', 'p'],
  starterCode: {
    javascript: `function minSubarray(nums, p) {

}`,
    typescript: "function minSubarray(nums: number[], p: number): number {\n\n}",

    python: `def minSubarray(nums, p):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 4, 2], 6], expected: 1 },
    { args: [[6, 3, 5, 2], 9], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 7], expected: -1 },
    { args: [[1000000000, 1000000000], 3], expected: -1 },
    { args: [[3, 3, 3, 3], 3], expected: 0 },
    { args: [[2, 3], 7], expected: -1 },
  ],
};
