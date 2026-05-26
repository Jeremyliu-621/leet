import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-equal-sum-of-two-arrays-after-replacing-zeros',
  title: 'Minimum Equal Sum of Two Arrays After Replacing Zeros',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two arrays \`nums1\` and \`nums2\` consisting of positive integers.

You have to replace **all** the \`0\`s in both arrays with **strictly positive** integers such that the sum of elements of both arrays becomes **equal**.

Return the **minimum** equal sum you can obtain, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '0 <= nums1[i], nums2[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums1 = [3,2,0,1,0], nums2 = [6,5,0]',
      output: '12',
      explanation: 'Replace the 0s in nums1 with [2,4] and in nums2 with [1]. nums1 = [3,2,2,1,4] (sum=12), nums2 = [6,5,1] (sum=12).',
    },
    {
      input: 'nums1 = [2,0,2,0], nums2 = [1,4]',
      output: '-1',
      explanation: 'Minimum sum of nums1 = 2+1+2+1 = 6 (each 0 → 1). But nums2 has no zeros and sum is fixed at 5 < 6. Impossible.',
    },
  ],
  hints: [
    'Replace each 0 with its minimum value of 1 to get the minimum possible sum for each array.',
    'Let minSum1 = sum(nums1) + count_zeros(nums1), minSum2 = sum(nums2) + count_zeros(nums2).',
    'The answer is max(minSum1, minSum2), unless one array has no zeros and its fixed sum is less than the other\'s minimum.',
  ],
  functionName: 'minSum',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function minSum(nums1, nums2) {\n  \n}\n',
    python: 'def minSum(nums1, nums2):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 2, 0, 1, 0], [6, 5, 0]], expected: 12 },
    { args: [[2, 0, 2, 0], [1, 4]], expected: -1 },
    { args: [[1, 0], [1, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0], [0]], expected: 1 },
    { args: [[5], [0]], expected: 5 },
    { args: [[0], [5]], expected: 5 },
    { args: [[1, 2, 3], [1, 2, 3]], expected: 6 },
    { args: [[1, 2, 0], [1, 0, 2]], expected: 4 },
  ],
};
