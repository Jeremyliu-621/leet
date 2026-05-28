import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-removals-to-make-mountain-array',
  title: 'Minimum Number of Removals to Make Mountain Array',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'binary-search'],
  description: `You may recall that an array \`arr\` is a **mountain array** if:

- \`arr.length >= 3\`
- There exists some index \`i\` (0-indexed) with \`0 < i < arr.length - 1\` such that:
  - \`arr[0] < arr[1] < ... < arr[i-1] < arr[i]\`
  - \`arr[i] > arr[i+1] > ... > arr[arr.length - 1]\`

Given an integer array \`nums\`, return the **minimum** number of elements to remove to make \`nums\` a mountain array.`,
  constraints: [
    '`3 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 10^9`',
    '`It is guaranteed that you can make a mountain array out of nums`',
  ],
  examples: [
    {
      input: 'nums = [1,3,1]',
      output: '0',
      explanation: 'The array itself is already a mountain array.',
    },
    {
      input: 'nums = [2,1,1,5,6,2,3,1]',
      output: '3',
      explanation: 'Remove 3 elements to get a valid mountain array such as [1,5,6,2,1].',
    },
    {
      input: 'nums = [1,2,3,4,4,3,2,1]',
      output: '1',
      explanation: 'Remove one of the duplicate 4s to get [1,2,3,4,3,2,1], a valid mountain array.',
    },
  ],
  hints: [
    'For each index i as the potential peak, compute LIS[i] (length of longest strictly increasing subsequence ending at i from the left) and LDS[i] (length of longest strictly decreasing subsequence starting at i going right).',
    'A mountain with peak i has length LIS[i] + LDS[i] - 1. The peak must have LIS[i] > 1 and LDS[i] > 1 (not at the edges).',
    'Answer = n - max(LIS[i] + LDS[i] - 1) for all valid peaks i.',
  ],
  functionName: 'minimumMountainRemovals',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumMountainRemovals(nums) {

}`,
    typescript: "function minimumMountainRemovals(nums: number[]): number {\n\n}",

    python: `def minimumMountainRemovals(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 1]], expected: 0 },
    { args: [[2, 1, 1, 5, 6, 2, 3, 1]], expected: 3 },
    { args: [[1, 2, 3, 4, 4, 3, 2, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[4, 3, 2, 1, 2, 3, 1]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 2 },
    { args: [[1, 2, 3, 2, 1]], expected: 0 },
    { args: [[1, 4, 2, 3, 1]], expected: 1 },
  ],
};
