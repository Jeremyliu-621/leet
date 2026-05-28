import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarray-sum-equals-k',
  title: 'Count Subarrays With Sum K',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of contiguous subarrays** whose elements sum to \`k\`.

The brute-force approach checks all O(n²) pairs of start/end indices. A more efficient O(n) solution uses a **prefix-sum hash map**: at each index, you know the prefix sum up to that point, so you check how many earlier prefix sums equal \`prefixSum - k\`.`,
  constraints: [
    '1 <= nums.length <= 500',
    '-100 <= nums[i] <= 100',
    '-10^4 <= k <= 10^4',
    'All values are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,1,1], k = 2',
      output: '2',
      explanation: 'Subarrays [1,1] starting at index 0 and index 1 both sum to 2.',
    },
    {
      input: 'nums = [1,2,3], k = 3',
      output: '2',
      explanation: '[1,2] and [3] both sum to 3.',
    },
    {
      input: 'nums = [1,-1,1], k = 1',
      output: '3',
      explanation: '[1], [1,-1,1], and the last [1] all sum to 1.',
    },
  ],
  hints: [
    'A brute-force O(n²) approach: for every start index, extend the subarray and track the running sum; increment the count when it equals k.',
    'For the O(n) approach, maintain a running prefix sum and a frequency map of prefix sums seen so far. At each index, if `prefixSum - k` is in the map, those earlier positions form valid subarrays ending here.',
    '`const freq = new Map([[0, 1]]); let sum = 0, count = 0; for (const n of nums) { sum += n; count += freq.get(sum - k) ?? 0; freq.set(sum, (freq.get(sum) ?? 0) + 1); } return count;`',
  ],
  functionName: 'subarraySumEqualsK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function subarraySumEqualsK(nums, k) {\n  // your code here\n}\n',
    python: 'def subarraySumEqualsK(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1], 2], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[1, -1, 1], 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1], 0], expected: 0 },
    { args: [[0, 0, 0], 0], expected: 6 },
    { args: [[-1, -1, 1], 0], expected: 1 },
    { args: [[1, 2, 1, 2, 1], 3], expected: 4 },
    { args: [[3, 4, 7, 2, -3, 1, 4, 2], 7], expected: 4 },
  ],
};
