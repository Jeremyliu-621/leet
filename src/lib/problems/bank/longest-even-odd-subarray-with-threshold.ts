import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-even-odd-subarray-with-threshold',
  title: 'Longest Even Odd Subarray With Threshold',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a 0-indexed integer array \`nums\` and an integer \`threshold\`.

Find the length of the longest subarray of \`nums\` starting with an **even** number, and alternating between even and odd numbers, such that every element in the subarray is **less than or equal to** \`threshold\`.

More formally, the subarray starting at index \`l\` must satisfy:
- \`nums[l] % 2 == 0\`
- \`nums[l + i] <= threshold\` for every \`i\` in the range \`[0, subarray_length - 1]\`
- \`nums[l + i] % 2 != nums[l + i + 1] % 2\` for every \`i\` in the range \`[0, subarray_length - 2]\`

Return the length of the longest such subarray.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= threshold <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,2,5,4], threshold = 5',
      output: '3',
      explanation: 'Subarray [2,5,4] starting at index 1: 2 is even ≤ 5, 5 is odd ≤ 5, 4 is even ≤ 5. Length = 3.',
    },
    {
      input: 'nums = [1,2], threshold = 2',
      output: '1',
      explanation: 'Only nums[1]=2 qualifies as a single-element subarray (even, ≤ 2). Length = 1.',
    },
    {
      input: 'nums = [2,3,4,5], threshold = 4',
      output: '3',
      explanation: '[2,3,4] — all ≤ 4, alternates even/odd/even. Length = 3.',
    },
  ],
  hints: [
    'Try each even element as a potential starting index.',
    'Extend the window as long as elements alternate parity and are ≤ threshold.',
    'O(n) is possible: when a position fails, start fresh from that position if valid.',
  ],
  functionName: 'longestAlternatingSubarray',
  params: ['nums', 'threshold'],
  starterCode: {
    javascript: 'function longestAlternatingSubarray(nums, threshold) {\n  \n}\n',
    typescript: "function longestAlternatingSubarray(nums: number[], threshold: number): number {\n  \n}",

    python: 'def longestAlternatingSubarray(nums, threshold):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 2, 5, 4], 5], expected: 3 },
    { args: [[1, 2], 2], expected: 1 },
    { args: [[2, 3, 4, 5], 4], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 7], 10], expected: 0 },
    { args: [[2], 2], expected: 1 },
    { args: [[2, 4, 6], 5], expected: 1 },
    { args: [[2, 1, 4, 3, 2], 10], expected: 5 },
    { args: [[0, 1, 2, 3, 4], 4], expected: 5 },
  ],
};
