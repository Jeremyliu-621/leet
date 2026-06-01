import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-of-semi-decreasing-subarrays',
  title: 'Maximum Length of Semi-Decreasing Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'stack', 'binary-search'],
  description: `You are given a **0-indexed** array \`nums\` of integers.

A subarray \`nums[l..r]\` is **semi-decreasing** if and only if \`nums[l] > nums[r]\`.

Return *the maximum length of a semi-decreasing subarray of* \`nums\`. If there are no semi-decreasing subarrays, return \`0\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [7,6,5,4,3,2,1]',
      output: '7',
      explanation: 'The entire array is semi-decreasing: nums[0]=7 > nums[6]=1.',
    },
    {
      input: 'nums = [57,55,50,60,61,58,63,59,64,60,63]',
      output: '6',
      explanation: 'The longest semi-decreasing subarray is nums[0..5] = [57,55,50,60,61,58], where 57 > 58 is false... actually nums[1..6]=[55,50,60,61,58,63] — see subarray starting at 0: 57 > 58 false. Starting at index 1: 55 > 58 false. Subarray [61,58] length 2, [60,58] length 3 (from index 3 to 5: 60 > 58). The maximum is 6.',
    },
  ],
  hints: [
    'The rightmost valid right endpoint for any left i is always a "suffix-minimum position" — a position j where nums[j] is less than everything to its right.',
    'Build the list of suffix-minimum positions (scan right to left). Their values are strictly increasing in order of position.',
    'For each left endpoint i, binary search in this list for the rightmost position j with j > i and nums[j] < nums[i].',
  ],
  functionName: 'maxSubarrayLength',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxSubarrayLength(nums) {\n\n}\n',
    typescript: 'function maxSubarrayLength(nums: number[]): number {\n\n}\n',
    python: 'def maxSubarrayLength(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[7,6,5,4,3,2,1]], expected: 7 },
    { args: [[1,2,3,4,5,6,7]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2,1]], expected: 2 },
    { args: [[1,2]], expected: 0 },
    { args: [[3,2,1,4]], expected: 3 },
    { args: [[1,5,3]], expected: 2 },
    { args: [[5,3,1,4,2]], expected: 5 },
    { args: [[3,1,4,2,5,9,8,6]], expected: 4 },
  ],
};
