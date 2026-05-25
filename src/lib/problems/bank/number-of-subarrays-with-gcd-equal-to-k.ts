import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-gcd-equal-to-k',
  title: 'Number of Subarrays With GCD Equal to K',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of subarrays** of \`nums\` where the greatest common divisor of the subarray's elements is \`k\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.

The **greatest common divisor of an array** is the largest integer that evenly divides all the array elements.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [9,3,1,2,6,3], k = 3',
      output: '4',
      explanation: 'Subarrays with gcd=3: [9,3], [3], [6,3], [3].',
    },
    {
      input: 'nums = [4], k = 7',
      output: '0',
      explanation: 'gcd([4])=4 ≠ 7.',
    },
  ],
  hints: [
    'For each starting index i, compute the running gcd extending to the right.',
    'Since gcd can only decrease as we extend, break early when gcd < k.',
  ],
  functionName: 'subarrayGCD',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarrayGCD(nums, k) {

}`,
    python: `def subarrayGCD(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[9, 3, 1, 2, 6, 3], 3], expected: 4 },
    { args: [[4], 7], expected: 0 },
  ],
  hiddenTests: [
    { args: [[3, 3], 3], expected: 3 },
    { args: [[1, 2, 3], 1], expected: 4 },
    { args: [[2, 6, 4], 2], expected: 4 },
    { args: [[6], 6], expected: 1 },
  ],
};
