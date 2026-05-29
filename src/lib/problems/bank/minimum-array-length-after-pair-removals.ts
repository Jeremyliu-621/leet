import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-array-length-after-pair-removals',
  title: 'Minimum Array Length After Pair Removals',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'binary-search'],
  description: `You are given a **0-indexed** sorted array of integers \`nums\`.

In one operation, you can pick two indices \`i\` and \`j\` where \`0 <= i < j < nums.length\` such that \`nums[i] < nums[j]\` and remove both \`nums[i]\` and \`nums[j]\` from \`nums\`.

Return the **minimum** length of \`nums\` after applying the above operations any number of times.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`nums` is sorted in **non-decreasing** order.',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,9]',
      output: '0',
      explanation: 'Remove (1,3) and (4,9). All elements removed.',
    },
    {
      input: 'nums = [1,1,2]',
      output: '1',
      explanation: 'Remove (1,2). One element [1] remains.',
    },
  ],
  hints: [
    'Think about the most frequent element. If max_freq <= n/2, we can pair everything and clear the array. Otherwise, the most frequent element limits us.',
    'The minimum remaining length = max(0, 2 * max_freq - n), where max_freq is the frequency of the most common element.',
    'Greedy: we always want to pair the most frequent element with something else. If there are more of it than all other elements combined, the excess stays.',
  ],
  functionName: 'minLengthAfterRemovals',
  params: ['nums'],
  starterCode: {
    javascript: `function minLengthAfterRemovals(nums) {

}`,
    typescript: 'function minLengthAfterRemovals(nums: number[]): number {\n\n}',
    python: `def minLengthAfterRemovals(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 9]], expected: 0 },
    { args: [[1, 1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1, 1, 1, 2, 3]], expected: 2 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
  ],
};
