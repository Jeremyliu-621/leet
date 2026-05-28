import type { Problem } from '../types';

export const problem: Problem = {
  id: 'uncrossed-lines',
  title: 'Uncrossed Lines',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\`. We write the integers of \`nums1\` and \`nums2\` (in the order they are given) on two separate horizontal lines.

We may draw connecting lines: a straight line connecting \`nums1[i]\` and \`nums2[j]\` such that:
- \`nums1[i] == nums2[j]\`
- The line we draw does not intersect any other connecting lines.

Note that a connecting line cannot intersect even at the endpoints: each number can only belong to one connecting line.

Return the **maximum number of connecting lines** we can draw.`,
  constraints: [
    '`1 <= nums1.length, nums2.length <= 500`',
    '`1 <= nums1[i], nums2[j] <= 2000`',
  ],
  examples: [
    {
      input: 'nums1 = [1,4,2], nums2 = [1,2,4]',
      output: '2',
      explanation: 'Connect 1-1 and 2-2 (or 1-1 and 4-4). Cannot connect all three without crossing.',
    },
    {
      input: 'nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]',
      output: '3',
    },
    {
      input: 'nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]',
      output: '2',
    },
  ],
  hints: [
    'This problem is equivalent to finding the Longest Common Subsequence (LCS) of nums1 and nums2.',
    'A non-crossing connection between nums1[i] and nums2[j] is equivalent to choosing a subsequence that preserves order in both arrays.',
    'Use a 2D DP table where dp[i][j] = LCS length of nums1[0..i-1] and nums2[0..j-1].',
  ],
  functionName: 'maxUncrossedLines',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function maxUncrossedLines(nums1, nums2) {\n  \n}\n',
    typescript: "function maxUncrossedLines(nums1: number[], nums2: number[]): number {\n  \n}",

    python: 'def maxUncrossedLines(nums1, nums2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 4, 2], [1, 2, 4]], expected: 2 },
    { args: [[2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]], expected: 3 },
    { args: [[1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [1, 2, 3]], expected: 3 },
    { args: [[1], [1]], expected: 1 },
    { args: [[1], [2]], expected: 0 },
    { args: [[3, 3], [3, 3, 3]], expected: 2 },
  ],
};
