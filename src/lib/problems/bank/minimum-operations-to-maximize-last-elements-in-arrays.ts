import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-maximize-last-elements-in-arrays',
  title: 'Minimum Operations to Maximize Last Elements in Arrays',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given two **0-indexed** integer arrays, \`nums1\` and \`nums2\`, both having length \`n\`.

You are allowed to perform a series of **operations** (possibly none).

In an operation, you select an index \`i\` in the range \`[0, n - 1]\` and **swap** the values of \`nums1[i]\` and \`nums2[i]\`.

Your task is to **minimize** the number of operations performed, subject to the following conditions:

- \`nums1[n - 1]\` must be equal to the **maximum** value among all elements of \`nums1\`.
- \`nums2[n - 1]\` must be equal to the **maximum** value among all elements of \`nums2\`.

Return an integer denoting the **minimum** number of operations needed to meet the conditions, or \`-1\` if it is **impossible** to meet the conditions.`,
  constraints: [
    '1 <= n == nums1.length == nums2.length <= 1000',
    '1 <= nums1[i] <= 10^9',
    '1 <= nums2[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,7], nums2 = [4,5,3]',
      output: '1',
      explanation: 'Swap index 2: nums1=[1,2,3], nums2=[4,5,7]. Now nums1[2]=3 ≥ all of nums1, nums2[2]=7 ≥ all of nums2. 1 operation.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [1,2,3]',
      output: '0',
      explanation: 'nums1[2]=3 is already the maximum of nums1, and nums2[2]=3 is already the maximum of nums2. No swaps needed.',
    },
    {
      input: 'nums1 = [1,2,4,1], nums2 = [3,3,1,1]',
      output: '-1',
      explanation: 'It is impossible to satisfy the conditions.',
    },
  ],
  hints: [
    'Try two cases: (A) keep the last elements as-is, or (B) swap the last elements.',
    'For each case, fix the target max values a = nums1[n-1] and b = nums2[n-1].',
    'For each index i (0..n-2): if nums1[i]<=a and nums2[i]<=b, no swap needed; if nums1[i]<=b and nums2[i]<=a, swap is needed; otherwise this case is impossible.',
    'Return min(countA, countB+1) if both cases are possible, else whichever is valid, else -1.',
  ],
  functionName: 'minOperations',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minOperations(nums1, nums2) {

}`,
    typescript: `function minOperations(nums1: number[], nums2: number[]): number {

}`,
    python: `def minOperations(nums1: list[int], nums2: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 7], [4, 5, 3]], expected: 1 },
    { args: [[1, 2, 3], [1, 2, 3]], expected: 0 },
    { args: [[1, 2, 4, 1], [3, 3, 1, 1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[1, 5], [5, 1]], expected: 1 },
    { args: [[1, 2, 3], [1, 2, 3]], expected: 0 },
    { args: [[1, 3], [2, 3]], expected: 0 },
    { args: [[2, 1], [1, 2]], expected: 1 },
    { args: [[3, 1, 2], [1, 3, 4]], expected: 1 },
    { args: [[2, 3, 1, 4], [4, 1, 3, 2]], expected: 2 },
    { args: [[1, 2, 4, 1], [3, 3, 1, 1]], expected: -1 },
  ],
};
