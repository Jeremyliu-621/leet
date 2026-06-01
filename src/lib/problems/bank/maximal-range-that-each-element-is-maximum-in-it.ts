import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximal-range-that-each-element-is-maximum-in-it',
  title: 'Maximal Range That Each Element Is Maximum In It',
  difficulty: 'easy',
  tags: ['arrays', 'stack'],
  description: `You are given a **0-indexed** array \`nums\` of distinct integers.

Return *an array* \`ranges\` *of the same length where* \`ranges[i]\` *is the length of the longest subarray in which* \`nums[i]\` *is the **maximum** element*.

A subarray is a contiguous part of an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^8',
    'All elements in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [1,5,4,3,6]',
      output: '[1,4,2,1,5]',
      explanation:
        'For 5 at index 1: subarray [1,5,4,3] (indices 0–3) has max 5. Length 4. For 6 at index 4: the whole array has max 6. Length 5.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '[1,2,3]',
      explanation:
        'For 3 at index 2: whole array has max 3. Length 3. For 2 at index 1: [1,2] has max 2. Length 2. For 1 at index 0: just [1]. Length 1.',
    },
  ],
  hints: [
    'For each index i, find the nearest element to the LEFT that is strictly greater than nums[i].',
    'Similarly find the nearest element to the RIGHT that is strictly greater than nums[i].',
    'ranges[i] = right_boundary - left_boundary - 1. Use a monotone stack for O(n) computation.',
  ],
  functionName: 'maximumLengthOfRanges',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumLengthOfRanges(nums) {\n\n}\n',
    typescript: 'function maximumLengthOfRanges(nums: number[]): number[] {\n\n}\n',
    python: 'def maximumLengthOfRanges(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,5,4,3,6]], expected: [1,4,2,1,5] },
    { args: [[1,2,3]], expected: [1,2,3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[3,2,1]], expected: [3,2,1] },
    { args: [[1,3,2]], expected: [1,3,1] },
    { args: [[2,1,3]], expected: [2,1,3] },
    { args: [[5,3,7,2,1]], expected: [2,1,5,2,1] },
    { args: [[3,1,4,2,5,9,8,6]], expected: [2,1,4,1,5,8,2,1] },
  ],
};
