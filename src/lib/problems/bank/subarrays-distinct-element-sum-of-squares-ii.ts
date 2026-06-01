import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarrays-distinct-element-sum-of-squares-ii',
  title: 'Subarrays Distinct Element Sum of Squares II',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree'],
  description: `You are given a **0-indexed** integer array \`nums\`.

The **distinct count** of a subarray of \`nums\` is defined as:

- Let \`nums[l..r]\` be a subarray of \`nums\`. Then \`distinct_count(l, r)\` is the number of distinct values in \`nums[l..r]\`.

Return *the sum of the squares of* **distinct counts** *of all subarrays of* \`nums\`.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
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
    'When the right endpoint moves from r−1 to r (adding nums[r]), distinct_count(l, r) increases by 1 for all l in (prev[r], r], where prev[r] is the previous index of nums[r] (or −1).',
    'Maintain an array vals[l] = distinct_count(l, r). The change to Σvals[l]² is 2·rangeSum(prev+1, r) + (r−prev).',
    'Use a BIT (Fenwick tree) supporting O(log n) range-add and range-sum to track vals efficiently. Accumulate F(r) = Σvals² after each step.',
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
