import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-equal-ii',
  title: 'Minimum Operations to Make Array Equal II',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` of equal length \`n\` and an integer \`k\`.

In one operation, you can choose two indices \`i\` and \`j\` and:
- Increase \`nums1[i]\` by \`k\`.
- Decrease \`nums1[j]\` by \`k\`.

\`nums1[i]\` should not become less than 0 after the decrease.

Return the **minimum** number of operations required to make \`nums1\` equal to \`nums2\`. If it is impossible to do so, return \`-1\`.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '2 <= n <= 10^5',
    '0 <= nums1[i], nums2[i] <= 10^9',
    '0 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums1 = [4,3,1,4], nums2 = [1,3,7,1], k = 3',
      output: '2',
      explanation: 'diff = [3,0,-6,3]. We can increase index 2 by 3 twice (operation on i=0,j=2 twice), and decrease index 0 and 3. Total 2 operations.',
    },
    {
      input: 'nums1 = [1,5,3,4], nums2 = [5,1,3,4], k = 1',
      output: '4',
      explanation: 'diff = [-4, 4, 0, 0]. Need 4 increases and 4 decreases. Each operation pairs one increase with one decrease. Total 4 operations.',
    },
  ],
  hints: [
    'Compute diff[i] = nums1[i] - nums2[i]. All operations add k to one diff and subtract k from another.',
    'If k == 0, return 0 if nums1 equals nums2, else -1.',
    'All diff[i] must be divisible by k. The sum of all diff[i] must be 0. Operations = sum of positive diff[i] / k.',
  ],
  functionName: 'minOperations',
  params: ['nums1', 'nums2', 'k'],
  starterCode: {
    javascript: 'function minOperations(nums1, nums2, k) {\n\n}',
    typescript: "function minOperations(nums1: number[], nums2: number[], k: number): number {\n\n}",

    python: 'def minOperations(nums1, nums2, k):\n    pass',
  },
  visibleTests: [
    { args: [[4, 3, 1, 4], [1, 3, 7, 1], 3], expected: 2 },
    { args: [[1, 5, 3, 4], [5, 1, 3, 4], 1], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2], [2, 1], 1], expected: 1 },
    { args: [[1, 2], [2, 1], 2], expected: -1 },
    { args: [[0, 0], [0, 0], 0], expected: 0 },
    { args: [[1, 1], [1, 1], 5], expected: 0 },
    { args: [[2, 4], [4, 2], 2], expected: 1 },
    { args: [[1, 3], [3, 2], 2], expected: -1 },
    { args: [[0, 6], [6, 0], 3], expected: 2 },
  ],
};
