import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-xor-sum-of-two-arrays',
  title: 'Minimum XOR Sum of Two Arrays',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `The **XOR sum** of two integer arrays \`a\` and \`b\` (same length) is defined as \`(a[0] XOR b[0]) + (a[1] XOR b[1]) + ... + (a[a.length - 1] XOR b[b.length - 1])\`.

You are given two integer arrays \`nums1\` and \`nums2\`. Rearrange the elements of \`nums2\` such that the resulting XOR sum of \`nums1\` and \`nums2\` is **minimized**.

Return the **minimum** XOR sum after rearranging \`nums2\`.

**Bitmask DP:** \`dp[mask]\` = minimum XOR sum when we've assigned the elements of \`nums2\` indexed by bits in \`mask\` to the first \`|mask|\` elements of \`nums1\`. Transition: try each unused index \`j\` of \`nums2\`.`,
  constraints: [
    'n == nums1.length',
    'n == nums2.length',
    '1 <= n <= 14',
    '0 <= nums1[i], nums2[i] <= 10^7',
  ],
  examples: [
    {
      input: 'nums1 = [1,2], nums2 = [2,3]',
      output: '2',
      explanation: '1 XOR 3 = 2, 2 XOR 2 = 0. Sum = 2.',
    },
    {
      input: 'nums1 = [1,0,3], nums2 = [5,3,4]',
      output: '8',
      explanation: '1 XOR 5 = 4, 0 XOR 4 = 4, 3 XOR 3 = 0. Sum = 8.',
    },
  ],
  hints: [
    'dp[mask] = min XOR sum when elements of nums2 at positions in mask have been assigned to nums1[0..|mask|-1].',
    'If |mask| = i, we\'re assigning to nums1[i]. Try each j not in mask: dp[mask|(1<<j)] = min(dp[mask|(1<<j)], dp[mask] + nums1[i] ^ nums2[j]).',
    'Answer is dp[(1<<n)-1]. Initialize dp[0]=0, everything else to Infinity.',
  ],
  functionName: 'minimumXORSum',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function minimumXORSum(nums1, nums2) {\n\n}\n',
    python: 'def minimumXORSum(nums1: list, nums2: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2], [2,3]], expected: 2 },
    { args: [[1,0,3], [5,3,4]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[2], [1]], expected: 3 },
    { args: [[0,0], [0,0]], expected: 0 },
    { args: [[1,2,3], [3,2,1]], expected: 0 },
    { args: [[4,6], [1,3]], expected: 10 },
  ],
};
