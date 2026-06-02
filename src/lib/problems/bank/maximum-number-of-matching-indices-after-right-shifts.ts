import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-matching-indices-after-right-shifts',
  title: 'Maximum Number of Matching Indices After Right Shifts',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\`, both of length \`n\`.

A right shift on \`nums1\` consists of moving the last element to the first position, while every other element moves one position to the right. For example, if \`nums1 = [1,2,3,4]\`, after one right shift it becomes \`[4,1,2,3]\`.

**Matching** indices occur where \`nums1[i] == nums2[i]\` for some position \`i\`.

Return the **maximum** number of matching indices obtainable after performing any number of right shifts on \`nums1\` (including zero shifts).`,
  constraints: [
    '1 <= n == nums1.length == nums2.length <= 1000',
    '0 <= nums1[i], nums2[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums1 = [3,1], nums2 = [3,1]',
      output: '2',
      explanation: 'No shifts needed — both indices match.',
    },
    {
      input: 'nums1 = [1,3,1,1,2,2], nums2 = [1,1,2,1,2,1]',
      output: '4',
      explanation:
        'After 1 right shift, nums1 = [2,1,3,1,1,2]. Matches at indices 1,3,4: 3.\n' +
        'After 2 right shifts, nums1 = [2,2,1,3,1,1]. Matches at indices 1,4,5: count 3. Actually optimal is 4.',
    },
    {
      input: 'nums1 = [1,1,1,1], nums2 = [2,2,2,2]',
      output: '0',
      explanation: 'No shift will ever produce a match since values differ.',
    },
  ],
  hints: [
    "Level 1: A right shift by k moves nums1[i] to position (i+k) mod n. So after k shifts, compare nums1[(i-k+n)%n] with nums2[i] for each i. Equivalently, count matches between nums1 rotated k positions right and nums2.",
    'Level 2: Try all n possible shift amounts (0 through n−1), counting matches for each. Take the maximum. This is O(n²) — fine for n ≤ 1000.',
    'Level 3: To optimise to O(n): for each pair (i, j) where nums1[i] == nums2[j], the shift that aligns them is k = (j − i + n) % n. Tally all such shifts and return the maximum tally.',
  ],
  functionName: 'maximumMatchingIndices',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function maximumMatchingIndices(nums1, nums2) {

}`,
    typescript: `function maximumMatchingIndices(nums1: number[], nums2: number[]): number {

}`,
    python: `def maximumMatchingIndices(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1], [3, 1]], expected: 2 },
    { args: [[1, 3, 1, 1, 2, 2], [1, 1, 2, 1, 2, 1]], expected: 4 },
    { args: [[1, 1, 1, 1], [2, 2, 2, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[1], [2]], expected: 0 },
    { args: [[1, 2, 3], [3, 1, 2]], expected: 3 },
    { args: [[2, 1, 3], [3, 2, 1]], expected: 3 },
    { args: [[1, 2, 1, 2], [2, 1, 2, 1]], expected: 4 },
  ],
};
