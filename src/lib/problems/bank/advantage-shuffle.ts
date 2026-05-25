import type { Problem } from '../types';

export const problem: Problem = {
  id: 'advantage-shuffle',
  title: 'Advantage Shuffle',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given two integer arrays \`nums1\` and \`nums2\` of the same length \`n\`, return a permutation of \`nums1\` such that for as many indices \`i\` as possible, \`nums1[i] > nums2[i]\`. If multiple answers exist, return any.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`0 <= nums1[i], nums2[i] <= 10^9`',
    '`nums1.length == nums2.length`',
  ],
  examples: [
    {
      input: 'nums1 = [2,7,11,15], nums2 = [1,10,4,11]',
      output: '[2,11,7,15]',
      explanation: 'nums1[0]=2 > nums2[0]=1, nums1[1]=11 > nums2[1]=10, nums1[2]=7 > nums2[2]=4. Advantage = 3.',
    },
    {
      input: 'nums1 = [12,24,8,32], nums2 = [13,25,32,11]',
      output: '[24,32,8,12]',
    },
  ],
  hints: [
    'Sort nums1 ascending. For each element in nums2 sorted descending (by value), greedily assign the smallest nums1 element that beats it.',
    'If no element can beat the target, use the smallest remaining (wasteful assignment).',
    'Use a sorted list (or deque) for nums1 and process nums2\'s sorted (desc) targets one by one.',
  ],
  functionName: 'advantageCount',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function advantageCount(nums1, nums2) {

}`,
    python: `def advantageCount(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[2, 7, 11, 15], [1, 10, 4, 11]], expected: [2, 11, 7, 15] },
    { args: [[12, 24, 8, 32], [13, 25, 32, 11]], expected: [24, 32, 8, 12] },
    { args: [[1, 3], [2, 4]], expected: [3, 1] },
  ],
  hiddenTests: [
    { args: [[5, 5, 5], [0, 0, 0]], expected: [5, 5, 5] },
    { args: [[1, 2], [1, 2]], expected: [2, 1] },
    { args: [[1, 2, 3], [3, 2, 1]], expected: [1, 3, 2] },
    { args: [[10, 20], [15, 25]], expected: [20, 10] },
  ],
};
