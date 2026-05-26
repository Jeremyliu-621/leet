import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-all-array-elements-equal-to-one',
  title: 'Minimum Operations to Make All Array Elements Equal to One',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, in one operation you may choose two **adjacent** indices \`i\` and \`i + 1\` and replace the **larger** of the two values with \`gcd(nums[i], nums[i+1])\`.

Return the **minimum number of operations** needed to make all elements of \`nums\` equal to \`1\`, or \`-1\` if it is impossible.`,
  constraints: [
    '2 <= nums.length <= 50',
    '1 <= nums[i] <= 30',
  ],
  examples: [
    {
      input: 'nums = [2,6,3,4]',
      output: '4',
      explanation: 'The shortest subarray with gcd = 1 is [3,4] (length 2). It costs 1 operation to produce a 1, then 3 more operations to spread it to the remaining 3 positions. Total = (2-1) + (4-1) = 4.',
    },
    {
      input: 'nums = [2,10,6,14]',
      output: '-1',
      explanation: 'The gcd of the entire array is 2, so no subarray has gcd = 1. It is impossible to create a 1.',
    },
    {
      input: 'nums = [1,10,6,14]',
      output: '3',
      explanation: 'One 1 already exists. We need n - count(1s) = 4 - 1 = 3 operations to overwrite the remaining elements.',
    },
  ],
  hints: [
    'If the array already contains any 1s, each non-1 element can be replaced in one operation by choosing it and an adjacent 1. The answer is simply n minus the number of existing 1s.',
    'If there are no 1s, find the shortest contiguous subarray whose gcd equals 1. Call its length L. It takes L − 1 operations to reduce that subarray to a single 1, then n − 1 more operations to propagate that 1 to every other position.',
    'If no subarray has gcd = 1 (i.e. the gcd of the whole array is > 1), return -1. To find the minimum L efficiently, try every starting index and extend right, computing the running gcd until it hits 1 or you run out of elements.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {
  // If any 1 exists: answer = n - count(1s).
  // Otherwise find the shortest subarray with gcd = 1.
  // If none exists, return -1.
  // Otherwise answer = (minLen - 1) + (n - 1).
}`,
    python: `def minOperations(nums):
    # If any 1 exists: answer = n - count(1s).
    # Otherwise find the shortest subarray with gcd = 1.
    # If none exists, return -1.
    # Otherwise answer = (min_len - 1) + (n - 1).
    pass`,
  },
  visibleTests: [
    { args: [[2, 6, 3, 4]], expected: 4 },
    { args: [[2, 10, 6, 14]], expected: -1 },
    { args: [[1, 10, 6, 14]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[2, 3]], expected: 2 },
    { args: [[3, 5]], expected: 2 },
    { args: [[2, 4, 8]], expected: -1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[6, 10, 15]], expected: 4 },
  ],
};
