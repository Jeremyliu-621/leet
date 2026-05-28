import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-equal-sum-two-arrays',
  title: 'Minimum Equal Sum of Two Arrays After Replacing Zeros',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two arrays \`nums1\` and \`nums2\` consisting of positive integers.

You have to replace all the \`0\`'s in both arrays with **strictly positive** integers such that the sum of elements of both arrays becomes **equal**.

Return the **minimum** equal sum you can obtain, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '0 <= nums1[i], nums2[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums1 = [3,2,0,1,0], nums2 = [6,5,0]',
      output: '12',
      explanation: 'Replace zeros: nums1=[3,2,2,1,4], sum=12. nums2=[6,5,1], sum=12.',
    },
    {
      input: 'nums1 = [2,0,2,0], nums2 = [1,4]',
      output: '-1',
      explanation: 'nums2 has no zeros; its sum is fixed at 5. But the minimum sum of nums1 (with zeros=1 each) is 2+1+2+1=6 > 5, so it\'s impossible.',
    },
  ],
  hints: [
    'Compute the minimum achievable sum for each array: sum of non-zeros + count of zeros (treating zeros as 1).',
    'If an array has no zeros, its sum is fixed.',
    'If fixed sum < the other array\'s minimum, return -1. Otherwise return max(minSum1, minSum2).',
  ],
  functionName: 'minSum',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minSum(nums1, nums2) {

}`,
    typescript: "function minSum(nums1: number[], nums2: number[]): number {\n\n}",

    python: `def minSum(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 0, 1, 0], [6, 5, 0]], expected: 12 },
    { args: [[2, 0, 2, 0], [1, 4]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[0], [1]], expected: 1 },
    { args: [[1, 2], [3, 0]], expected: -1 },
    { args: [[5], [0]], expected: 5 },
  ],
};
