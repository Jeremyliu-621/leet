import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-all-odd-length-subarrays',
  title: 'Sum of All Odd Length Subarrays',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an array of positive integers \`arr\`, return the sum of all possible **odd-length subarrays** of \`arr\`.

A subarray is a contiguous subsequence of the array.`,
  constraints: [
    '1 <= arr.length <= 100',
    '1 <= arr[i] <= 1000',
  ],
  examples: [
    {
      input: 'arr = [1,4,2,5,3]',
      output: '58',
      explanation: 'Odd-length subarrays: [1],[4],[2],[5],[3],[1,4,2],[4,2,5],[2,5,3],[1,4,2,5,3]. Sum = 1+4+2+5+3+7+11+10+15 = 58.',
    },
    {
      input: 'arr = [1,2]',
      output: '3',
      explanation: 'Odd-length subarrays: [1],[2]. Sum = 1+2 = 3.',
    },
    {
      input: 'arr = [10,11,12]',
      output: '66',
      explanation: 'Odd-length subarrays: [10],[11],[12],[10,11,12]. Sum = 10+11+12+33 = 66.',
    },
  ],
  hints: [
    'Iterate over all starting indices and odd lengths. Add each subarray\'s sum to the total.',
    'Outer loop: `start` from 0 to n-1. Inner loop: `len` = 1, 3, 5, ... while start+len ≤ n. Sum `arr[start..start+len]`.',
    'Alternatively, each element arr[i] contributes to several subarrays. Its contribution count = floor((k+1)/2) where k = (i+1)*(n-i) subarray count.',
  ],
  functionName: 'sumOddLengthSubarrays',
  params: ['arr'],
  starterCode: {
    javascript: `function sumOddLengthSubarrays(arr) {

}`,
    python: `def sumOddLengthSubarrays(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 2, 5, 3]], expected: 58 },
    { args: [[1, 2]], expected: 3 },
    { args: [[10, 11, 12]], expected: 66 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 12 },
    { args: [[5, 5, 5]], expected: 30 },
    { args: [[1, 1, 1, 1]], expected: 10 },
  ],
};
