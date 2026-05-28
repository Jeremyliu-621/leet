import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarray-sums-divisible-by-k',
  title: 'Subarray Sums Divisible by K',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of non-empty subarrays that have a sum divisible by \`k\`.

A **subarray** is a **contiguous** part of an array.`,
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '2 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [4,5,0,-2,-3,1], k = 5',
      output: '7',
      explanation: 'There are 7 subarrays with a sum divisible by 5: [4,5,0,-2,-3,1], [5], [5,0], [5,0,-2,-3], [0], [0,-2,-3], [-2,-3].',
    },
    {
      input: 'nums = [5], k = 9',
      output: '0',
    },
  ],
  hints: [
    'Use prefix sums: if `prefix[j] - prefix[i]` is divisible by `k`, then `prefix[j] % k == prefix[i] % k`.',
    'Count how many previous prefix sums have each remainder mod `k`. Initialize the count map with `{0: 1}` to handle subarrays starting from index 0.',
    'When computing `prefix % k`, handle negative values: use `((prefix % k) + k) % k` to ensure a non-negative remainder.',
  ],
  functionName: 'subarraysDivByK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function subarraysDivByK(nums, k) {\n\n}\n',
    python: 'def subarraysDivByK(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[4,5,0,-2,-3,1], 5], expected: 7 },
    { args: [[5], 9], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2,3], 3], expected: 3 },
    { args: [[-1,-2,-3], 3], expected: 3 },
    { args: [[2,2,2,2,2], 2], expected: 15 },
    { args: [[0,0,0,0,0], 1], expected: 15 },
  ],
};
