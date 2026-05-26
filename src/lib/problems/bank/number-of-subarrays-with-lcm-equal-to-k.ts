import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-lcm-equal-to-k',
  title: 'Number of Subarrays with LCM Equal to K',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of subarrays** of \`nums\` where the **least common multiple** of all the elements equals \`k\`.

A **subarray** is a contiguous, non-empty sequence of elements within an array.

The **least common multiple** of an array is the smallest positive integer that is evenly divisible by all the array elements.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i], k <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [3,6,2,7,1], k = 6',
      output: '4',
      explanation: 'The subarrays with LCM = 6 are: [3,6], [6], [3,6,2], [6,2].',
    },
    {
      input: 'nums = [3], k = 2',
      output: '0',
      explanation: 'No subarray has LCM = 2.',
    },
  ],
  hints: [
    'The LCM of a subarray is monotonically non-decreasing as you extend it to the right. Once the running LCM exceeds `k`, it can never equal `k` again for that starting index.',
    'Iterate over all starting indices. For each starting index, extend right, updating the running LCM. Stop early when it exceeds `k`.',
    'Use `gcd(a, b)` to compute `lcm(a, b) = a / gcd(a, b) * b`. Make sure to avoid division-by-zero (all values are positive).',
  ],
  functionName: 'subarrayLCM',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarrayLCM(nums, k) {

}`,
    python: `def subarrayLCM(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 6, 2, 7, 1], 6], expected: 4 },
    { args: [[3], 2], expected: 0 },
    { args: [[2, 2, 2], 2], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 6], 6], expected: 6 },
    { args: [[4, 3, 6, 7], 12], expected: 2 },
    { args: [[1, 1, 1], 1], expected: 6 },
    { args: [[6, 6, 6], 6], expected: 6 },
    { args: [[2, 3], 6], expected: 1 },
    { args: [[1, 3, 2, 1], 6], expected: 4 },
    { args: [[5, 10, 20], 10], expected: 2 },
    { args: [[7], 7], expected: 1 },
  ],
};
