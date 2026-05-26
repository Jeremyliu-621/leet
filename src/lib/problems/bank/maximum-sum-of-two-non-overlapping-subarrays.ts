import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-two-non-overlapping-subarrays',
  title: 'Maximum Sum of Two Non-Overlapping Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\` and two positive integers \`L\` and \`M\`, return the maximum sum of elements in two non-overlapping subarrays of lengths \`L\` and \`M\` respectively.

The two subarrays must not overlap. The subarray of length \`L\` may appear before or after the subarray of length \`M\`.

**Example:**
If \`nums = [0, 6, 5, 2, 2, 5, 1, 9, 4]\`, \`L = 1\`, \`M = 2\`:
- One optimal split: L-subarray at index 1 (sum=6) and M-subarray at indices 7-8 (sum=13) → total 19.`,
  constraints: [
    '1 <= L, M <= nums.length',
    'L + M <= nums.length',
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [0,6,5,2,2,5,1,9,4], L = 1, M = 2',
      output: '20',
      explanation:
        'Choose L-subarray [9] (index 7) and M-subarray [6,5] (indices 1-2) for sum 9+11=20.',
    },
    {
      input: 'nums = [3,8,1,3,2,1,8,9,0], L = 3, M = 2',
      output: '29',
      explanation:
        'Choose L-subarray [8,1,3] (indices 1-3, sum=12) and M-subarray [8,9] (indices 6-7, sum=17) for total 29.',
    },
    {
      input: 'nums = [2,1,5,6,0,9,5,0,3,8], L = 4, M = 3',
      output: '31',
      explanation:
        'Choose L-subarray [0,9,5,0] (indices 4-7, sum=14) and M-subarray [3,8] ... actually [5,6,0,9] (indices 2-5, sum=20) and M-subarray [3,8,...] — best is L=[5,6,0,9] sum=20 and M=[3,8,...] wait — L=[0,9,5,0] sum=14 and M=[5,6,0,9] won\'t work (overlap). Best: L=[5,6,0,9] sum=20 and M=[3,8,?] or L-subarray indices 1-4 sum=18 and M-subarray indices 7-9 sum=11 = 29; or L-subarray [5,6,0,9] indices 2-5 sum=20 and M-subarray [3,8] indices 8-9 sum=11 = 31.',
    },
  ],
  hints: [
    'Build a prefix sum array so you can compute any subarray sum in O(1).',
    'For each split point i, consider placing the L-subarray entirely before index i and the M-subarray starting at index i (or vice versa).',
    'Keep a running maximum of the best L-subarray sum seen so far as you sweep from left to right, then do the same for M.',
    'Run the sweep twice: once with L before M, and once with M before L; take the overall maximum.',
    'Time complexity O(n) with prefix sums and two passes.',
  ],
  functionName: 'maxSumTwoNoOverlap',
  params: ['nums', 'L', 'M'],
  starterCode: {
    javascript: `function maxSumTwoNoOverlap(nums, L, M) {\n\n}`,
    python: `def maxSumTwoNoOverlap(nums, L, M):\n    pass`,
  },
  visibleTests: [
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2], expected: 20 },
    { args: [[3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2], expected: 29 },
    { args: [[2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3], expected: 31 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 2, 2], expected: 14 },
    { args: [[10, 1, 1, 1, 10], 2, 2], expected: 22 },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3, 4], expected: 7 },
    { args: [[5, 5, 5, 5], 1, 1], expected: 10 },
    { args: [[1, 0, 1], 1, 1], expected: 2 },
  ],
};
