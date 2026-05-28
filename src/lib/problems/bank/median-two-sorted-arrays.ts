import type { Problem } from '../types';

export const problem: Problem = {
  id: 'median-two-sorted-arrays',
  title: 'Median of Two Sorted Arrays',
  difficulty: 'hard',
  tags: ['binary-search'],
  description: `Given two sorted arrays \`nums1\` and \`nums2\` of sizes \`m\` and \`n\` respectively, return the **median** of the two arrays combined.

The overall run-time complexity must be **O(log(m + n))**.

If the combined length is even, the median is the average of the two middle elements. Return a floating-point number.

**Example:** \`nums1 = [1, 3]\`, \`nums2 = [2]\` → merged array is \`[1, 2, 3]\`, median is \`2.0\`.`,
  constraints: [
    '0 <= nums1.length, nums2.length <= 1000',
    'At least one of the arrays is non-empty',
    '-10^6 <= nums1[i], nums2[i] <= 10^6',
    'Both nums1 and nums2 are sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'nums1 = [1,3], nums2 = [2]',
      output: '2.0',
      explanation: 'Merged array is [1,2,3]. Median is 2.0.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '2.5',
      explanation: 'Merged array is [1,2,3,4]. Median is (2 + 3) / 2 = 2.5.',
    },
    {
      input: 'nums1 = [], nums2 = [1]',
      output: '1.0',
      explanation: 'Only one element in total; the median is 1.0.',
    },
  ],
  hints: [
    'Think about what "median" means: it partitions the combined sorted sequence so that the left half and right half have equal sizes. You need to find the right partition point.',
    'Binary-search on the smaller array. For a given partition of nums1 into left/right halves, you can compute exactly how nums2 must be split so the combined left half has the correct size. Check whether the four boundary elements satisfy the median property.',
    '`function findMedianSortedArrays(nums1, nums2) { if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1); const m = nums1.length, n = nums2.length, half = Math.floor((m + n + 1) / 2); let lo = 0, hi = m; while (lo <= hi) { const i = (lo + hi) >> 1, j = half - i; const ln1 = i === 0 ? -Infinity : nums1[i-1], rn1 = i === m ? Infinity : nums1[i]; const ln2 = j === 0 ? -Infinity : nums2[j-1], rn2 = j === n ? Infinity : nums2[j]; if (ln1 <= rn2 && ln2 <= rn1) { const maxL = Math.max(ln1, ln2); if ((m + n) % 2 === 1) return maxL; return (maxL + Math.min(rn1, rn2)) / 2; } else if (ln1 > rn2) hi = i - 1; else lo = i + 1; } }`',
  ],
  functionName: 'findMedianSortedArrays',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function findMedianSortedArrays(nums1, nums2) {\n  // your code here\n}\n',
    typescript: "function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n  // your code here\n}",

    python: 'def findMedianSortedArrays(nums1, nums2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3], [2]], expected: 2.0 },
    { args: [[1, 2], [3, 4]], expected: 2.5 },
    { args: [[], [1]], expected: 1.0 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1.0 },
    { args: [[1, 3], [2, 4]], expected: 2.5 },
    { args: [[1, 2, 3], [4, 5, 6, 7, 8]], expected: 4.5 },
    { args: [[1000000], [-1000000]], expected: 0.0 },
    { args: [[1, 2], [1, 2, 3]], expected: 2.0 },
  ],
};
