import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-integer-added-to-array-ii',
  title: 'Find the Integer Added to Array II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\`.

You must remove **exactly two elements** from \`nums1\`, and then there exists an integer \`x\` such that every element of \`nums2\` equals the corresponding element of the remaining elements of \`nums1\` plus \`x\`.

Return the **minimum possible** non-negative value of \`x\`.

More formally, after removing two elements from \`nums1\` (so that \`nums1.length - 2 == nums2.length\`), sort the remaining elements of \`nums1\` and sort \`nums2\`. There must be an integer \`x >= 0\` such that \`nums1[i] + x == nums2[i]\` for all valid \`i\`.`,
  constraints: [
    '`3 <= nums1.length <= 200`',
    '`nums1.length - 2 == nums2.length`',
    '`0 <= nums1[i], nums2[i] <= 1000`',
    'The test cases are generated such that there exists a valid answer.',
  ],
  examples: [
    {
      input: 'nums1 = [4,20,16,12,8], nums2 = [14,18,10]',
      output: '2',
      explanation:
        'Sort both: nums1=[4,8,12,16,20], nums2=[10,14,18]. Try x = nums2[0]-nums1[1] = 10-8 = 2: remaining=[8,12,16] → [10,14,18]. Remove 4 and 20. Valid! x=2 is minimum.',
    },
    {
      input: 'nums1 = [3,5,5,3], nums2 = [7,7]',
      output: '2',
      explanation:
        'Sort both: nums1=[3,3,5,5], nums2=[7,7]. Try x=7-5=2: remaining=[5,5] → [7,7]. Remove two 3s. Valid!',
    },
  ],
  hints: [
    'Sort both arrays. After sorting, x = nums2[0] - nums1[i] for some small i (0, 1, or 2), because we removed at most 2 elements from the front of nums1.',
    'Try all three candidates: x = nums2[0] - nums1[0], nums2[0] - nums1[1], nums2[0] - nums1[2]. Discard any x < 0.',
    'For each candidate x, use a two-pointer merge to count how many elements from nums1 (sorted) can match nums2 + x. If the match count equals nums2.length (with at most 2 skips from nums1), it is valid. Return the minimum valid x.',
  ],
  functionName: 'minimumAddedInteger',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minimumAddedInteger(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // Try candidates for x
}`,
    typescript:
      'function minimumAddedInteger(nums1: number[], nums2: number[]): number {\n  nums1.sort((a, b) => a - b);\n  nums2.sort((a, b) => a - b);\n  // Try candidates for x\n}',
    python: `def minimumAddedInteger(nums1, nums2):
    nums1.sort()
    nums2.sort()
    # Try candidates for x
    pass`,
  },
  visibleTests: [
    { args: [[4, 20, 16, 12, 8], [14, 18, 10]], expected: 2 },
    { args: [[3, 5, 5, 3], [7, 7]], expected: 2 },
    { args: [[1, 2, 3, 4, 5], [4, 5, 6]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[10, 10, 10, 10, 10], [11, 11, 11]], expected: 1 },
    { args: [[1, 3, 5, 7, 9], [6, 8, 10]], expected: 1 },
    { args: [[0, 0, 0, 5], [5, 5]], expected: 5 },
    { args: [[2, 4, 6, 8, 10], [5, 7, 9]], expected: 1 },
    { args: [[100, 200, 300, 400], [300, 400]], expected: 0 },
  ],
};
