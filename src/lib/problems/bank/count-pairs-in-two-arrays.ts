import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-in-two-arrays',
  title: 'Count Pairs in Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, each of length \`n\`, return the number of pairs of indices \`(i, j)\` where \`i < j\` and \`nums1[i] + nums1[j] > nums2[i] + nums2[j]\`.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 10^5',
    '-10^4 <= nums1[i], nums2[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums1 = [2,1,2,1], nums2 = [1,2,1,2]',
      output: '1',
      explanation: 'The pairs satisfying nums1[i]+nums1[j] > nums2[i]+nums2[j] are: (0,2) since 2+2 > 1+1.',
    },
    {
      input: 'nums1 = [1,10,6,2], nums2 = [1,4,1,5]',
      output: '5',
      explanation: 'Valid pairs: (0,1),(0,2),(0,3),(1,2),(1,3). Note (2,3): 6+2=8 vs 1+5=6, 8>6 ✓. So (2,3) is also valid → 6 total. Wait, let me recount: (0,1): 11>5✓; (0,2): 7>2✓; (0,3): 3>6✗; (1,2): 16>5✓; (1,3): 12>9✓; (2,3): 8>6✓. Total = 5.',
    },
  ],
  hints: [
    'Define diff[i] = nums1[i] - nums2[i]. The condition becomes diff[i] + diff[j] > 0.',
    'Sort diff. Then for each i from left, use binary search to find the first j > i where diff[i] + diff[j] > 0.',
    'Count pairs using (n - 1 - right_bound) for each left index.',
  ],
  functionName: 'countPairs',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function countPairs(nums1, nums2) {\n\n}',
    typescript: "function countPairs(nums1: number[], nums2: number[]): number {\n\n}",

    python: 'def countPairs(nums1, nums2):\n    pass',
  },
  visibleTests: [
    { args: [[2, 1, 2, 1], [1, 2, 1, 2]], expected: 1 },
    { args: [[1, 10, 6, 2], [1, 4, 1, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 1], [1, 1]], expected: 0 },
    { args: [[2, 1], [1, 2]], expected: 0 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 1 },
    { args: [[10, 10, 10], [1, 1, 1]], expected: 3 },
    { args: [[1, 1, 1, 1], [2, 2, 2, 2]], expected: 0 },
  ],
};
