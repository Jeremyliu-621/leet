import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-having-even-product',
  title: 'Number of Subarrays Having Even Product',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given a **0-indexed** integer array \`nums\`, return the number of subarrays of \`nums\` having an even product.

A **subarray** is a contiguous non-empty sequence of elements within an array.

The product of a subarray is even if and only if at least one element in the subarray is even.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [9,6,7,13]',
      output: '6',
      explanation: 'Even product subarrays: [6], [9,6], [6,7], [9,6,7], [6,7,13], [9,6,7,13]. Total = 6.',
    },
    {
      input: 'nums = [2,1,3,2]',
      output: '9',
      explanation: 'Subarrays containing at least one of the two 2s. Total subarrays = 10, all-odd = [1],[3],[1,3] = 3, result = 10 - 3 = 7. Wait: [2],[1],[3],[2],[2,1],[1,3],[3,2],[2,1,3],[1,3,2],[2,1,3,2]. Even: all containing 2. Odd: [1],[3],[1,3]. Total 7.',
    },
  ],
  hints: [
    'A subarray has even product if and only if it contains at least one even element.',
    'Count the subarrays with ALL odd elements instead, then subtract from the total.',
    'Odd-product subarrays form consecutive runs of odd numbers. If there is a run of k consecutive odd elements, it contributes k*(k+1)/2 all-odd subarrays.',
  ],
  functionName: 'countEvenProductSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countEvenProductSubarrays(nums) {

}`,
    typescript: 'function countEvenProductSubarrays(nums: number[]): number {\n\n}',
    python: `def countEvenProductSubarrays(nums):
    pass`,
  },
  visibleTests: [
    { args: [[9, 6, 7, 13]], expected: 6 },
    { args: [[2, 1, 3, 2]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2]], expected: 1 },
    { args: [[1, 3, 5]], expected: 0 },
    { args: [[2, 4, 6]], expected: 6 },
    { args: [[1, 2, 3, 4]], expected: 8 },
    { args: [[1, 3, 2, 5]], expected: 6 },
    { args: [[1, 1, 1, 2]], expected: 4 },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 27 },
  ],
};
