import type { Problem } from '../types';

export const problem: Problem = {
  id: 'create-maximum-number',
  title: 'Create Maximum Number',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` of lengths \`m\` and \`n\` respectively. You are also given an integer \`k\`. \`m + n >= k\`.

Create the maximum number of length \`k\` from digits of the two arrays while keeping the **relative order** of digits from each array. Return the answer as an array of digits.`,
  constraints: [
    'm == nums1.length',
    'n == nums2.length',
    '1 <= m, n <= 500',
    '0 <= nums1[i], nums2[i] <= 9',
    '1 <= k <= m + n',
  ],
  examples: [
    {
      input: 'nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5',
      output: '[9,8,6,5,3]',
    },
    {
      input: 'nums1 = [6,7], nums2 = [6,0,4], k = 5',
      output: '[6,7,6,0,4]',
    },
    {
      input: 'nums1 = [3,9], nums2 = [8,9], k = 3',
      output: '[9,8,9]',
    },
  ],
  hints: [
    'Split the problem: pick `i` digits from nums1 and `k-i` digits from nums2, trying all valid splits.',
    'For each split, use a monotone stack to extract the maximum subsequence of length i from nums1 and k-i from nums2.',
    'Merge the two subsequences greedily: at each step, pick from whichever sequence has a lexicographically larger suffix. Track the overall best.',
  ],
  functionName: 'createMaximumNumber',
  params: ['nums1', 'nums2', 'k'],
  starterCode: {
    javascript: `function createMaximumNumber(nums1, nums2, k) {
  // Try all splits: i from nums1, k-i from nums2
  // For each, maxSubseq then merge
}`,
    typescript: `function createMaximumNumber(nums1: number[], nums2: number[], k: number): number[] {
  // Try all splits: i from nums1, k-i from nums2
  // For each, maxSubseq then merge
  return [];
}`,
    python: `def createMaximumNumber(nums1, nums2, k):
    if hasattr(nums1, 'to_py'): nums1 = list(nums1.to_py())
    if hasattr(nums2, 'to_py'): nums2 = list(nums2.to_py())
    # Try all splits: i from nums1, k-i from nums2
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5], expected: [9, 8, 6, 5, 3] },
    { args: [[6, 7], [6, 0, 4], 5], expected: [6, 7, 6, 0, 4] },
    { args: [[3, 9], [8, 9], 3], expected: [9, 8, 9] },
  ],
  hiddenTests: [
    { args: [[0], [0], 1], expected: [0] },
    { args: [[9], [3, 6, 7, 5, 0], 3], expected: [9, 7, 5] },
    { args: [[2, 5, 6, 4, 4, 0], [7, 3, 8, 0, 6, 5, 7, 6, 2], 15], expected: [7, 3, 8, 2, 5, 6, 4, 4, 0, 6, 5, 7, 6, 2, 0] },
    { args: [[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 4], expected: [9, 8, 6, 5] },
    { args: [[1, 2], [3, 4], 2], expected: [4, 2] },
    { args: [[1, 2, 3], [4, 5, 6], 6], expected: [4, 5, 6, 1, 2, 3] },
  ],
};
