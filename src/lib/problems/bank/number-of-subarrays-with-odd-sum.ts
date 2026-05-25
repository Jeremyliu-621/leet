import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-odd-sum',
  title: 'Number of Sub-arrays With Odd Sum',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`arr\`, return the number of subarrays with an **odd** sum.

Since the answer can be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 1000',
  ],
  examples: [
    {
      input: 'arr = [1,3,5]',
      output: '4',
      explanation: 'Subarrays with odd sum: [1],[3],[5],[1,3,5]. Total = 4.',
    },
    {
      input: 'arr = [2,4,6]',
      output: '0',
      explanation: 'All elements are even, so all subarray sums are even.',
    },
    {
      input: 'arr = [1,2,3,4,5,6,7]',
      output: '16',
    },
  ],
  hints: [
    'Use prefix sums. A subarray arr[l..r] has odd sum iff prefixSum[r] and prefixSum[l-1] have different parities.',
    'Track evenCount (prefix sums with even value) and oddCount (prefix sums with odd value). For each new prefix sum, if it\'s even, add oddCount; if it\'s odd, add evenCount.',
    'Initialize evenCount = 1 (empty prefix sum = 0 is even). Take result mod 10^9+7.',
  ],
  functionName: 'numOfSubarrays',
  params: ['arr'],
  starterCode: {
    javascript: `function numOfSubarrays(arr) {

}`,
    python: `def numOfSubarrays(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 5]], expected: 4 },
    { args: [[2, 4, 6]], expected: 0 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[100, 100, 99]], expected: 3 },
  ],
};
