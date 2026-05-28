import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-subarray-minimums',
  title: 'Sum of Subarray Minimums',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `Given an array of integers \`arr\`, find the sum of \`min(b)\`, where \`b\` ranges over every (contiguous) subarray of \`arr\`. Since the answer may be large, return the answer **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= arr.length <= 3 * 10^4',
    '1 <= arr[i] <= 3 * 10^4',
  ],
  examples: [
    {
      input: 'arr = [3,1,2,4]',
      output: '17',
      explanation: 'Subarrays: [3]=3,[1]=1,[2]=2,[4]=4,[3,1]=1,[1,2]=1,[2,4]=2,[3,1,2]=1,[1,2,4]=1,[3,1,2,4]=1. Sum=17.',
    },
    {
      input: 'arr = [11,81,94,43,3]',
      output: '444',
    },
  ],
  hints: [
    'For each element, count how many subarrays have it as the minimum.',
    'Use a monotonic stack to find the previous smaller element and next smaller element for each index.',
    'If prev[i] = left boundary and next[i] = right boundary, element contributes arr[i] * (i - left) * (right - i).',
  ],
  functionName: 'sumSubarrayMins',
  params: ['arr'],
  starterCode: {
    javascript: 'function sumSubarrayMins(arr) {\n\n}\n',
    typescript: "function sumSubarrayMins(arr: number[]): number {\n\n}",

    python: 'def sumSubarrayMins(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,1,2,4]], expected: 17 },
    { args: [[11,81,94,43,3]], expected: 444 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2,3]], expected: 10 },
    { args: [[3,2,1]], expected: 10 },
    { args: [[2,2,2]], expected: 12 },
  ],
};
