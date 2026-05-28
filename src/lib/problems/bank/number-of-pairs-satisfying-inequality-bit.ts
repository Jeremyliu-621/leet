import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-pairs-satisfying-inequality-bit',
  title: 'Number of Pairs Satisfying Inequality (BIT)',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` and an integer \`diff\`. Return the number of **pairs** \`(i, j)\` such that:
- \`0 <= i < j <= n - 1\` (where \`n = nums1.length\`)
- \`nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff\`

**Hint:** Rearrange the inequality to \`(nums1[i] - nums2[i]) - (nums1[j] - nums2[j]) <= diff\`. Let \`a[k] = nums1[k] - nums2[k]\`. Then count pairs where \`a[i] - a[j] <= diff\`, i.e., \`a[i] <= a[j] + diff\`.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 10^5',
    '-10^4 <= nums1[i], nums2[i] <= 10^4',
    '-10^4 <= diff <= 10^4',
  ],
  examples: [
    {
      input: 'nums1 = [3,2,5], nums2 = [2,2,1], diff = 1',
      output: '3',
      explanation: 'a = [nums1[i]-nums2[i]] = [1,0,4]. For each j, count i<j with a[i] <= a[j]+diff. j=1: a[j]+diff=0+1=1; a[0]=1<=1 → 1 pair. j=2: a[j]+diff=4+1=5; a[0]=1<=5, a[1]=0<=5 → 2 pairs. Total = 3.',
    },
    {
      input: 'nums1 = [4,-2], nums2 = [0,3], diff = -5',
      output: '0',
      explanation: 'a = [4,-5]. Only pair (0,1): a[0]=4 <= a[1]+(-5)=-5+(-5)=-10? No. Count = 0.',
    },
  ],
  hints: [
    'Transform: let a[i] = nums1[i] − nums2[i]. The condition becomes a[i] ≤ a[j] + diff for i < j. Scan j from left to right; for each j, count how many previously-seen a[i] satisfy a[i] ≤ a[j] + diff.',
    'Coordinate-compress the values of a[i] and a[j]+diff together into ranks. Use a BIT to maintain counts of seen a[i] values, querying prefix sums up to rank(a[j]+diff).',
    'All values a[i] lie in [−2×10^4, 2×10^4]. Shift by 2×10^4 and +1 to get 1-based BIT indices. For each j: query BIT for prefix sum up to a[j]+diff+offset, then update BIT at a[j]+offset.',
  ],
  functionName: 'numberOfPairs',
  params: ['nums1', 'nums2', 'diff'],
  starterCode: {
    javascript: `function numberOfPairs(nums1, nums2, diff) {
  // Transform to a[i] = nums1[i] - nums2[i].
  // Count pairs i < j where a[i] <= a[j] + diff using BIT.
}`,
    typescript: "function numberOfPairs(nums1: number[], nums2: number[], diff: number): number {\n  // Transform to a[i] = nums1[i] - nums2[i].\n  // Count pairs i < j where a[i] <= a[j] + diff using BIT.\n}",

    python: `def numberOfPairs(nums1, nums2, diff):
    # Transform to a[i] = nums1[i] - nums2[i].
    # Count pairs i < j where a[i] <= a[j] + diff using BIT.
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 5], [2, 2, 1], 1], expected: 3 },
    { args: [[4, -2], [0, 3], -5], expected: 0 },
    { args: [[1, 4, 2, 3], [0, 1, 3, 2], 3], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], [0], 0], expected: 0 },
    { args: [[1, 2], [0, 0], 0], expected: 1 },
    { args: [[2, 1], [0, 0], -1], expected: 0 },
    { args: [[3, 3, 3], [1, 1, 1], 0], expected: 3 },
    { args: [[1, 2, 3, 4], [0, 0, 0, 0], 10], expected: 6 },
  ],
};
