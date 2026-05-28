import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-of-repeated-subarray',
  title: 'Maximum Length of Repeated Subarray',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays', 'binary-search', 'sliding-window'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, return the **maximum length** of a subarray that appears in **both** arrays.

A **subarray** is a contiguous non-empty sequence of elements within an array.

Note: The subarray must appear as a contiguous block in both arrays (not merely as a subsequence).`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 1000',
    '0 <= nums1[i], nums2[i] <= 100',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]',
      output: '3',
      explanation: 'The repeated subarray of maximum length is [3,2,1], appearing in nums1 at index 2 and in nums2 at index 0.',
    },
    {
      input: 'nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]',
      output: '5',
      explanation: 'The entire arrays match — the repeated subarray [0,0,0,0,0] has length 5.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '0',
      explanation: 'No common subarray exists.',
    },
  ],
  hints: [
    'Define dp[i][j] = length of the longest common subarray ending at nums1[i-1] and nums2[j-1]. If nums1[i-1] == nums2[j-1], then dp[i][j] = dp[i-1][j-1] + 1, otherwise dp[i][j] = 0.',
    'The answer is the maximum value across the entire dp table. Initialize all dp values to 0. Iterate over all pairs (i, j) in O(n*m) time.',
    'Alternatively, binary search on the answer length and use a rolling hash to check if a subarray of that length exists in both arrays.',
  ],
  functionName: 'findLength',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function findLength(nums1, nums2) {
  // Return the maximum length of a subarray in both nums1 and nums2
}`,
    typescript: "function findLength(nums1: number[], nums2: number[]): number {\n  // Return the maximum length of a subarray in both nums1 and nums2\n}",

    python: `def findLength(nums1: list[int], nums2: list[int]) -> int:
    # Return the maximum length of a subarray in both nums1 and nums2
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 2, 1], [3, 2, 1, 4, 7]], expected: 3 },
    { args: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], expected: 5 },
    { args: [[1, 2], [3, 4]], expected: 0 },
    { args: [[1, 2, 3], [1, 2, 3, 4]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[1], [2]], expected: 0 },
    { args: [[1, 2, 3, 2, 1, 4, 2, 3], [3, 2, 1, 4, 7, 2, 3]], expected: 4 },
    { args: [[1, 0, 0, 0, 1], [1, 1, 0, 0, 1]], expected: 3 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 1 },
    { args: [[1, 1, 1], [1, 1, 1, 1]], expected: 3 },
  ],
};
