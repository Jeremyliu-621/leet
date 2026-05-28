import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-absolute-sum-difference',
  title: 'Minimum Absolute Sum Difference',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given two positive integer arrays \`nums1\` and \`nums2\`, both of length \`n\`.

The **absolute sum difference** of arrays \`nums1\` and \`nums2\` is defined as the **sum** of \`|nums1[i] - nums2[i]|\` for each \`0 <= i < n\`.

You can replace **at most one** element of \`nums1\` with **any** other element in \`nums1\` to **minimize** the absolute sum difference.

Return the **minimum** absolute sum difference **after** replacing at most one element in \`nums1\`. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 10^5',
    '1 <= nums1[i], nums2[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums1 = [1,7,5], nums2 = [2,3,5]',
      output: '3',
      explanation: 'Original sum=5. Replace nums1[1]=7 with 5: |1-2|+|5-3|+|5-5|=1+2+0=3.',
    },
    {
      input: 'nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]',
      output: '0',
      explanation: 'All differences are 0 already.',
    },
  ],
  hints: [
    'For each index i, binary search sorted nums1 for the value closest to nums2[i].',
    'The maximum gain from swapping is max(diff[i] - best_diff_for_i).',
    'Answer = (totalSum - maxGain) % (10^9+7).',
  ],
  functionName: 'minAbsoluteSumDiff',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minAbsoluteSumDiff(nums1, nums2) {

}`,
    typescript: "function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {\n\n}",

    python: `def minAbsoluteSumDiff(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[1, 7, 5], [2, 3, 5]], expected: 3 },
    { args: [[2, 4, 6, 8, 10], [2, 4, 6, 8, 10]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 10], [2, 5]], expected: 5 },
    { args: [[1, 2], [1, 2]], expected: 0 },
    { args: [[1, 2], [2, 1]], expected: 1 },
    { args: [[1, 3], [3, 1]], expected: 2 },
  ],
};
