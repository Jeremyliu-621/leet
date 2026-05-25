import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-removals-to-make-mountain-array',
  title: 'Minimum Number of Removals to Make Mountain Array',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You may recall that an array \`arr\` is a **mountain array** if and only if:

- \`arr.length >= 3\`
- There exists some index \`i\` (0-indexed) with \`0 < i < arr.length - 1\` such that:
  - \`arr[0] < arr[1] < ... < arr[i-1] < arr[i]\`
  - \`arr[i] > arr[i+1] > ... > arr[arr.length - 1]\`

Given an integer array \`nums\`, return the **minimum number of elements to remove** to make \`nums\` a mountain array.

**LIS approach:** For each index \`i\` as the peak, compute \`lis[i]\` (length of LIS ending at \`i\`) and \`lds[i]\` (length of LDS starting at \`i\`). The best mountain using \`i\` as peak has length \`lis[i] + lds[i] - 1\` (if both \`lis[i] > 1\` and \`lds[i] > 1\`).`,
  constraints: [
    '3 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^9',
    'It is guaranteed that you can make a mountain array out of nums.',
  ],
  examples: [
    {
      input: 'nums = [1,3,1]',
      output: '0',
      explanation: 'Already a mountain array.',
    },
    {
      input: 'nums = [2,1,1,5,6,2,3,1]',
      output: '3',
      explanation: 'Remove three elements to get [2,1,5,6,2] or similar.',
    },
  ],
  hints: [
    'Compute lis[i] = length of the longest strictly increasing subsequence ending at index i.',
    'Compute lds[i] = length of the longest strictly decreasing subsequence starting at index i.',
    'For each valid peak i (lis[i] > 1 and lds[i] > 1), the mountain size is lis[i] + lds[i] - 1. Minimize removals = n - max mountain size.',
  ],
  functionName: 'minimumMountainRemovals',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimumMountainRemovals(nums) {\n\n}\n',
    python: 'def minimumMountainRemovals(nums: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,1]], expected: 0 },
    { args: [[2,1,1,5,6,2,3,1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1,2,3,2,1]], expected: 0 },
    { args: [[2,1,2,3,2]], expected: 1 },
    { args: [[100,92,89,99,97,85,49,72]], expected: 3 },
    { args: [[4,3,2,1,2,3,1]], expected: 3 },
  ],
};
