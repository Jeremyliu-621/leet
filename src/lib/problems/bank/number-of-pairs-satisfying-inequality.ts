import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-pairs-satisfying-inequality',
  title: 'Number of Pairs Satisfying Inequality',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\`, each of size \`n\`, and an integer \`diff\`. Find the number of **pairs** \`(i, j)\` such that:

- \`0 <= i < j <= n - 1\` and
- \`nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff\`.

Return the **number of pairs** satisfying the conditions.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '2 <= n <= 10^5',
    '-10^4 <= nums1[i], nums2[i] <= 10^4',
    '-10^4 <= diff <= 10^4',
  ],
  examples: [
    {
      input: 'nums1 = [3,2,5], nums2 = [2,2,1], diff = 1',
      output: '3',
      explanation: 'Pairs (0,1), (0,2), (1,2) all satisfy nums1[i]-nums1[j] <= nums2[i]-nums2[j]+1.',
    },
    {
      input: 'nums1 = [3,-1], nums2 = [-2,2], diff = -1',
      output: '0',
      explanation: 'No pairs satisfy the condition.',
    },
  ],
  hints: [
    'Level 1: Rearrange the inequality: nums1[i]-nums2[i] <= nums1[j]-nums2[j]+diff. Let c[k]=nums1[k]-nums2[k]. Count pairs i<j where c[i] <= c[j]+diff.',
    'Level 2: Process j from 0 to n-1. For each j, count how many previous i have c[i] <= c[j]+diff. This is a prefix-count query on the values seen so far.',
    'Level 3: Use a Fenwick tree (BIT) with coordinate compression. For each j: query(rank of c[j]+diff) gives count of valid i. Then insert c[j] into the BIT. O(n log n) total.',
  ],
  functionName: 'numberOfPairs',
  params: ['nums1', 'nums2', 'diff'],
  starterCode: {
    javascript: `function numberOfPairs(nums1, nums2, diff) {

}`,
    typescript: `function numberOfPairs(nums1: number[], nums2: number[], diff: number): number {

}`,
    python: `def numberOfPairs(nums1: list[int], nums2: list[int], diff: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[3,2,5], [2,2,1], 1], expected: 3 },
    { args: [[3,-1], [-2,2], -1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [1], 1], expected: 0 },
    { args: [[1,2], [1,1], 1], expected: 1 },
    { args: [[5,4,3,2,1], [1,1,1,1,1], 1], expected: 4 },
    { args: [[1,2,3], [1,1,1], 0], expected: 3 },
    { args: [[1,1,1,1], [1,1,1,1], 0], expected: 6 },
    { args: [[1,3,2,4], [0,2,1,3], 0], expected: 6 },
  ],
};
