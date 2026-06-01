import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-subsequence-widths',
  title: 'Sum of Subsequence Widths',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `The **width** of a sequence is the difference between the maximum and minimum elements in the sequence.

Given an array of integers \`nums\`, return the sum of the **widths** of all the non-empty **subsequences** of \`nums\`. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

A **subsequence** is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [2,1,3]',
      output: '6',
      explanation: 'Subsequences and widths: {1}=0, {2}=0, {3}=0, {1,2}=1, {1,3}=2, {2,3}=1, {1,2,3}=2. Total=6.',
    },
    {
      input: 'nums = [2]',
      output: '0',
      explanation: 'Only one subsequence {2} with width 0.',
    },
  ],
  hints: [
    'Sort nums. For sorted array, the width of any subsequence depends only on its first and last elements.',
    'Element a[i] (0-indexed after sorting) appears as the maximum in 2^i subsequences and as the minimum in 2^(n-1-i) subsequences.',
    'Contribution of a[i] = a[i] * (2^i - 2^(n-1-i)). Sum all contributions modulo 10^9+7.',
  ],
  functionName: 'sumSubseqWidths',
  params: ['nums'],
  starterCode: {
    javascript: 'function sumSubseqWidths(nums) {\n  \n}\n',
    typescript: 'function sumSubseqWidths(nums: number[]): number {\n  \n}',
    python: 'def sumSubseqWidths(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: 6 },
    { args: [[2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 3, 5]], expected: 12 },
    { args: [[1, 1]], expected: 0 },
    { args: [[3, 1, 2]], expected: 6 },
  ],
};
