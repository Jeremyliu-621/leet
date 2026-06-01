import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarrays-distinct-element-sum-of-squares-i',
  title: 'Subarrays Distinct Element Sum of Squares I',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`.

The **distinct count** of a subarray of \`nums\` is defined as:

- Let \`nums[l..r]\` be a subarray of \`nums\`. Then \`distinct_count(l, r)\` is the number of distinct values in \`nums[l..r]\`.

Return *the sum of the squares of* **distinct counts** *of all subarrays of* \`nums\`.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 150',
    '1 <= nums[i] <= 150',
  ],
  examples: [
    {
      input: 'nums = [1,2,1]',
      output: '15',
      explanation: 'Subarrays: [1]→1, [2]→1, [1]→1, [1,2]→4, [2,1]→4, [1,2,1]→4. Sum = 15.',
    },
    {
      input: 'nums = [2,2]',
      output: '3',
      explanation: 'Subarrays: [2]→1, [2]→1, [2,2]→1. Sum = 3.',
    },
  ],
  hints: [
    'n ≤ 150 so an O(n²) solution works: for each left endpoint, expand right and maintain a count of distinct elements.',
    'Use a hash map (or frequency array) to track the distinct count as you extend the subarray.',
    'Square the distinct count for each subarray and accumulate, taking mod 10^9+7.',
  ],
  functionName: 'sumCounts',
  params: ['nums'],
  starterCode: {
    javascript: 'function sumCounts(nums) {\n\n}\n',
    typescript: 'function sumCounts(nums: number[]): number {\n\n}\n',
    python: 'def sumCounts(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,1]], expected: 15 },
    { args: [[2,2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2,3]], expected: 20 },
    { args: [[1,1,1]], expected: 6 },
    { args: [[1,2,3,4]], expected: 50 },
    { args: [[1,2,1,2]], expected: 28 },
    { args: [[5,5,5,5,5]], expected: 15 },
    { args: [[1,2,3,1,2,3]], expected: 116 },
  ],
};
