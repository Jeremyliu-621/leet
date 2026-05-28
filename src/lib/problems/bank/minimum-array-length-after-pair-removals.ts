import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-array-length-after-pair-removals',
  title: 'Minimum Array Length After Pair Removals',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** sorted array of integers \`nums\`.

You can perform the following operation any number of times:
- Choose two indices \`i\` and \`j\` where \`i < j\` and \`nums[i] < nums[j]\`, and remove the elements at indices \`i\` and \`j\`.

Return the **minimum** length of \`nums\` after performing the operation any number of times.`,
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'Remove pairs (1,2), (3,4) or (1,3), (2,4) or (1,4), (2,3). All elements removed.',
    },
    {
      input: 'nums = [1,1,2,2,3,3]',
      output: '0',
      explanation: 'Remove pairs: (1,2), (1,2), (3,3)? No — we need nums[i] < nums[j]. Remove (1,2),(1,3),(2,3). All removed.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '4',
      explanation: 'All elements are equal, so no pair has nums[i] < nums[j]. Cannot remove anything.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums is sorted in non-decreasing order',
    '-10^9 <= nums[i] <= 10^9',
  ],
  functionName: 'minLengthAfterRemovals',
  params: ['nums'],
  starterCode: {
    javascript: 'function minLengthAfterRemovals(nums) {\n  // your code here\n}\n',
    typescript: "function minLengthAfterRemovals(nums: number[]): number {\n  // your code here\n}",

    python: 'def minLengthAfterRemovals(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'Find the frequency of the most common element. Call it `maxFreq` and the total length `n`.',
    'If `maxFreq > n / 2`, the dominant element will "block" and leave `2 * maxFreq - n` elements.',
    'Otherwise, all elements can be paired up, and the answer is `n % 2` (0 if even length, 1 if odd).',
  ],
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1, 1, 2]], expected: 2 },
    { args: [[1, 1, 2, 2, 2, 3]], expected: 0 },
    { args: [[2, 2, 2, 2, 2, 3, 3]], expected: 3 },
  ],
};
