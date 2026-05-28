import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-distance-between-a-pair-of-values',
  title: 'Maximum Distance Between a Pair of Values',
  difficulty: 'medium',
  tags: ['two-pointers', 'binary-search', 'arrays'],
  description: `You are given two **non-increasing** 0-indexed integer arrays \`nums1\` and \`nums2\`.

A pair of indices \`(i, j)\` where \`0 <= i <= j < nums1.length\` is **valid** if \`nums1[i] <= nums2[j]\`.

The **distance** of the pair is \`j - i\`.

Return the **maximum distance** of any valid pair \`(i, j)\`. If there are no valid pairs, return \`0\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '1 <= nums1[i], nums2[j] <= 10^5',
    'Both nums1 and nums2 are non-increasing.',
  ],
  examples: [
    {
      input: 'nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]',
      output: '2',
      explanation:
        'Valid pair (2,4): nums1[2]=5 <= nums2[4]=5, distance = 4-2 = 2.',
    },
    {
      input: 'nums1 = [2,2,2], nums2 = [10,10,1]',
      output: '1',
      explanation:
        'Valid pair (0,1): nums1[0]=2<=nums2[1]=10, distance=1. Pair (1,2): nums1[1]=2>nums2[2]=1, invalid. Best is 1.',
    },
    {
      input: 'nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]',
      output: '1',
      explanation:
        'j is bounded by nums1.length-1=3. Valid pairs with i<j: (2,3): nums1[2]=19<=nums2[3]=25, distance=1. Best is 1.',
    },
  ],
  hints: [
    'Use two pointers i and j. Start both at 0. If nums1[i] <= nums2[j], record j-i as a candidate answer and advance j. Otherwise, advance i (and ensure i never overtakes j by also advancing j if needed).',
    'Because both arrays are non-increasing, once nums1[i] > nums2[j] with the current i, any larger j will only make nums2[j] smaller, so i must increase.',
    'Binary search is an alternative: for each i, binary search in nums2[i..] for the rightmost index j where nums2[j] >= nums1[i].',
  ],
  functionName: 'maxDistance',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function maxDistance(nums1, nums2) {

}`,
    typescript: "function maxDistance(nums1: number[], nums2: number[]): number {\n\n}",

    python: `def maxDistance(nums1, nums2):
    pass
`,
  },
  visibleTests: [
    { args: [[55, 30, 5, 4, 2], [100, 20, 10, 10, 5]], expected: 2 },
    { args: [[2, 2, 2], [10, 10, 1]], expected: 1 },
    { args: [[30, 29, 19, 5], [25, 25, 25, 25, 25]], expected: 1 },
  ],
  hiddenTests: [
    // No valid pair — nums1[0] already larger than all nums2
    { args: [[100], [1]], expected: 0 },
    // Single elements, valid
    { args: [[1], [1]], expected: 0 },
    // All pairs starting at i=0 valid; max distance = nums1.length-1 = 2
    { args: [[1, 1, 1], [5, 4, 3, 2, 1]], expected: 2 },
    // Exact equality throughout
    { args: [[3, 2, 1], [3, 2, 1]], expected: 0 },
    // Both arrays length 2; (0,1): nums1[0]=4<=nums2[1]=4, distance=1
    { args: [[4, 2], [10, 4]], expected: 1 },
  ],
};
