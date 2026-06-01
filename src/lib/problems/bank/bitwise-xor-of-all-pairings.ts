import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bitwise-xor-of-all-pairings',
  title: 'Bitwise XOR of All Pairings',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `You are given two **0-indexed** arrays, \`nums1\` and \`nums2\`, consisting of non-negative integers. There exists another array, \`nums3\`, which contains the bitwise XOR of **all pairings** of integers between \`nums1\` and \`nums2\` (every integer in \`nums1\` is paired with every integer in \`nums2\`).

Return the **bitwise XOR** of all integers in \`nums3\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '0 <= nums1[i], nums2[j] <= 10^9',
  ],
  examples: [
    {
      input: 'nums1 = [2,1,3], nums2 = [10,2,5,0]',
      output: '13',
      explanation: 'len(nums1)=3 (odd) → XOR all of nums2 = 10^2^5^0=13. len(nums2)=4 (even) → 0. Result: 13.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [3,4]',
      output: '0',
      explanation: 'Both lengths are even. Every element cancels out. Result: 0.',
    },
  ],
  hints: [
    'Each element in nums1 appears len(nums2) times in nums3.',
    'If len(nums2) is odd, XORing nums1[i] an odd number of times keeps it; even cancels it.',
    'Similarly for nums2 elements with len(nums1).',
  ],
  functionName: 'xorAllNums',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function xorAllNums(nums1, nums2) {
  let result = 0;
  if (nums2.length % 2 === 1) result ^= nums1.reduce((a, b) => a ^ b, 0);
  if (nums1.length % 2 === 1) result ^= nums2.reduce((a, b) => a ^ b, 0);
  return result;
}`,
    typescript: `function xorAllNums(nums1: number[], nums2: number[]): number {
  let result = 0;
  if (nums2.length % 2 === 1) result ^= nums1.reduce((a, b) => a ^ b, 0);
  if (nums1.length % 2 === 1) result ^= nums2.reduce((a, b) => a ^ b, 0);
  return result;
}`,
    python: `def xorAllNums(nums1, nums2):
    nums1 = list(nums1.to_py()) if hasattr(nums1, 'to_py') else list(nums1)
    nums2 = list(nums2.to_py()) if hasattr(nums2, 'to_py') else list(nums2)
    from functools import reduce
    import operator
    result = 0
    if len(nums2) % 2 == 1:
        result ^= reduce(operator.xor, nums1, 0)
    if len(nums1) % 2 == 1:
        result ^= reduce(operator.xor, nums2, 0)
    return result`,
  },
  visibleTests: [
    { args: [[2, 1, 3], [10, 2, 5, 0]], expected: 13 },
    { args: [[1, 2], [3, 4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[1, 2, 3], [0]], expected: 0 },
    { args: [[2, 3], [1]], expected: 1 },
    { args: [[5], [2, 3]], expected: 1 },
  ],
};
