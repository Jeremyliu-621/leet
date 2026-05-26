import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarray-sum-k',
  title: 'Subarray Sum Equals K',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays'],
  description: `Given an array of integers \`nums\` and an integer \`k\`, return the total number of subarrays whose sum equals to \`k\`.

A subarray is a contiguous non-empty sequence of elements within an array.`,
  examples: [
    { input: 'nums = [1,1,1], k = 2', output: '2', explanation: '[1,1] occurs twice: nums[0..1] and nums[1..2].' },
    { input: 'nums = [1,2,3], k = 3', output: '2', explanation: '[3] and [1,2] both sum to 3.' },
  ],
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '-1000 <= nums[i] <= 1000',
    '-10^7 <= k <= 10^7',
  ],
  functionName: 'subarraySum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function subarraySum(nums, k) {\n  // your code here\n}\n',
    python: 'def subarraySum(nums, k):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use prefix sums: if prefix[j] - prefix[i] = k, then the subarray from i+1 to j sums to k.',
    'As you scan, maintain a hash map of prefix-sum → count. For current prefix sum `p`, add `map[p - k]` to the answer (how many prior positions had prefix sum `p - k`).',
    'Initialize the map with `{0: 1}` to handle subarrays starting from index 0.',
  ],
  visibleTests: [
    { args: [[1, 1, 1], 2], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[1], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[-1, -1, 1], 0], expected: 1 },
    { args: [[1, 2, 1, 2, 1], 3], expected: 4 },
    { args: [[0, 0, 0], 0], expected: 6 },
    { args: [[3, 4, 7, 2, -3, 1, 4, 2], 7], expected: 4 },
  ],
};
