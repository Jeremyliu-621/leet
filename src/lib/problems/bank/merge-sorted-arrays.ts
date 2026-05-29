import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-sorted-arrays',
  title: 'Merge Sorted Arrays Into One',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given two sorted integer arrays \`nums1\` and \`nums2\`, return a **new** sorted array containing all elements from both arrays.`,
  constraints: [
    '0 <= nums1.length, nums2.length <= 200',
    '-10^9 <= nums1[i], nums2[i] <= 10^9',
    'nums1 and nums2 are sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3], nums2 = [2,5,6]',
      output: '[1,2,2,3,5,6]',
      explanation: 'Merge both sorted arrays using two pointers.',
    },
    {
      input: 'nums1 = [1], nums2 = [0]',
      output: '[0,1]',
    },
    {
      input: 'nums1 = [], nums2 = [1]',
      output: '[1]',
    },
  ],
  hints: [
    'Use two pointers, one for each array, and advance the pointer pointing at the smaller value.',
    'After one array is exhausted, append the remaining elements of the other array.',
    'Build the result array incrementally in O(m + n) time.',
  ],
  functionName: 'mergeSortedArrays',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function mergeSortedArrays(nums1, nums2) {
  // your code here
}`,
    typescript:
      'function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {\n  // your code here\n}',
    python: `def mergeSortedArrays(nums1, nums2):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [2, 5, 6]], expected: [1, 2, 2, 3, 5, 6] },
    { args: [[1], [0]], expected: [0, 1] },
    { args: [[], [1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[], []], expected: [] },
    { args: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[1, 1, 1], [1, 1]], expected: [1, 1, 1, 1, 1] },
    { args: [[-5, -1, 3], [0, 2, 4]], expected: [-5, -1, 0, 2, 3, 4] },
    { args: [[10], [1, 2, 3]], expected: [1, 2, 3, 10] },
  ],
};
