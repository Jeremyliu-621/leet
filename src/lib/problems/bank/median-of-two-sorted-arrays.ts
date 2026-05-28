import type { Problem } from '../types';

export const problem: Problem = {
  id: 'median-of-two-sorted-arrays',
  title: 'Median of Two Sorted Arrays',
  difficulty: 'hard',
  tags: ['binary-search'],
  description: `Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be \`O(log(m + n))\`.`,
  constraints: [
    'nums1.length == m',
    'nums2.length == n',
    '0 <= m <= 1000',
    '0 <= n <= 1000',
    '1 <= m + n <= 2000',
    '-10^6 <= nums1[i], nums2[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.00000',
      explanation: 'Merged array is [1,2,3] and the median is 2.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '2.50000',
      explanation: 'Merged array is [1,2,3,4] and the median is (2+3)/2 = 2.5.',
    },
  ],
  hints: [
    'Binary search on the partition point of the shorter array.',
    'Find i (elements from nums1 in left half) and j = half - i (elements from nums2 in left half) such that left halves are ≤ right halves.',
    'Median is max(left halves) if total is odd, or (max(left) + min(right)) / 2 if even.',
  ],
  functionName: 'findMedianSortedArrays',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function findMedianSortedArrays(nums1, nums2) {\n\n}\n',
    python: 'def findMedianSortedArrays(nums1, nums2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3], [2]], expected: 2 },
    { args: [[1, 2], [3, 4]], expected: 2.5 },
  ],
  hiddenTests: [
    { args: [[], [1]], expected: 1 },
    { args: [[2], []], expected: 2 },
    { args: [[1, 3, 5], [2, 4, 6]], expected: 3.5 },
    { args: [[1, 2, 3, 4], [5, 6, 7, 8]], expected: 4.5 },
  ],
};
