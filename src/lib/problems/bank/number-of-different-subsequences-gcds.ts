import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-different-subsequences-gcds',
  title: 'Number of Different Subsequences GCDs',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given an array \`nums\` that consists of positive integers.

The **GCD** of a sequence of numbers is the largest positive integer that divides all the numbers in the sequence evenly.

- For example, the GCD of the sequence \`[4,6,16]\` is \`2\`.

A **subsequence** of an array is a sequence that can be formed by deleting some elements (possibly none) of the original array.

- For example, \`[2,5,10]\` is a subsequence of \`[1,2,1,2,4,1,5,10]\`.

Return the **number of different GCDs** among all **non-empty** subsequences of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 2 * 10^5',
  ],
  examples: [
    {
      input: 'nums = [6,10,3]',
      output: '5',
      explanation: 'The 5 distinct GCDs are 1 (from {6,10,3}), 2 (from {6,10}), 3 (from {6,3} or {3}), 6 (from {6}), 10 (from {10}).',
    },
    {
      input: 'nums = [5,15,40,5,6]',
      output: '7',
      explanation: 'The distinct GCDs are 1,2,3,5,6,15,40.',
    },
  ],
  hints: [
    'For each candidate g from 1 to max(nums), check if there exists a subsequence whose GCD is exactly g.',
    'g is achievable if and only if the GCD of all multiples of g present in nums equals g.',
    'Iterate multiples of g: g, 2g, 3g, ..., and compute the GCD of those present in nums.',
  ],
  functionName: 'countDifferentSubseqGCDs',
  params: ['nums'],
  starterCode: {
    javascript: 'function countDifferentSubseqGCDs(nums) {\n  \n}\n',
    typescript: 'function countDifferentSubseqGCDs(nums: number[]): number {\n  \n}',
    python: 'def countDifferentSubseqGCDs(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[6, 10, 3]], expected: 5 },
    { args: [[5, 15, 40, 5, 6]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 4]], expected: 2 },
    { args: [[6, 12, 3]], expected: 3 },
    { args: [[1, 2, 3, 4]], expected: 4 },
  ],
};
