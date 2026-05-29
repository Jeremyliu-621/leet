import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-sub-arrays-with-odd-sum',
  title: 'Number of Sub-arrays with Odd Sum',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`arr\`, return the number of subarrays with an **odd** sum.

Since the answer can be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= arr.length <= 10^5`',
    '`1 <= arr[i] <= 100`',
  ],
  examples: [
    {
      input: 'arr = [1,3,5]',
      output: '4',
      explanation: 'Odd-sum subarrays: [1]=1, [3]=3, [5]=5, [1,3,5]=9.',
    },
    {
      input: 'arr = [2,4,6]',
      output: '0',
      explanation: 'All subarrays have even sums.',
    },
  ],
  hints: [
    'Track the parity of the running prefix sum.',
    'A subarray arr[i..j] has an odd sum iff the parity of prefix[j+1] differs from prefix[i].',
    'For each new prefix sum, count how many previous prefix sums have the opposite parity.',
  ],
  functionName: 'numOfSubarrays',
  params: ['arr'],
  starterCode: {
    javascript: `function numOfSubarrays(arr) {

}`,
    typescript: `function numOfSubarrays(arr: number[]): number {

}`,
    python: `def numOfSubarrays(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 5]], expected: 4 },
    { args: [[2, 4, 6]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[100, 100, 99, 99]], expected: 4 },
  ],
};
