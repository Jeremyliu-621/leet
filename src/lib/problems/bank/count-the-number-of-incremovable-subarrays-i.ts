import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-incremovable-subarrays-i',
  title: 'Count the Number of Incremovable Subarrays I',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** array of positive integers \`nums\`.

A subarray of \`nums\` is called **incremovable** if, after removing it from \`nums\`, the remaining elements form a **strictly increasing** array (or the array is empty).

Return the number of **incremovable** subarrays of \`nums\`.

**Note:** An empty array is considered strictly increasing.`,
  constraints: [
    '`1 <= nums.length <= 50`',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,10,5]',
      output: '9',
      explanation: 'There are 9 subarrays whose removal leaves a strictly increasing array.',
    },
    {
      input: 'nums = [6,5,7,8]',
      output: '7',
    },
  ],
  hints: [
    'Brute force is feasible given n ≤ 50: try every subarray (l, r).',
    'For each removal of nums[l..r], the remaining is nums[0..l-1] + nums[r+1..n-1].',
    'Precompute the longest strictly increasing prefix and suffix to speed up checking, or just check naively.',
  ],
  functionName: 'incremovableSubarrayCount',
  params: ['nums'],
  starterCode: {
    javascript: `function incremovableSubarrayCount(nums) {

}`,
    typescript: `function incremovableSubarrayCount(nums: number[]): number {

}`,
    python: `def incremovableSubarrayCount(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 10, 5]], expected: 9 },
    { args: [[6, 5, 7, 8]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[8, 7, 6, 6]], expected: 3 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[1, 2, 1, 2]], expected: 6 },
  ],
};
