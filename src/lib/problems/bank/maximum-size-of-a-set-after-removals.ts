import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-size-of-a-set-after-removals',
  title: 'Maximum Size of a Set After Removals',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two 0-indexed integer arrays \`nums1\` and \`nums2\` of equal length \`n\`.

In one operation, you can choose some index \`i\` (0 <= i < n) and remove \`nums1[i]\` or \`nums2[i]\`.

You must perform **exactly** \`n / 2\` removals from each array.

After all removals, return the **maximum** possible size of the union of the remaining elements of \`nums1\` and \`nums2\`.

Both arrays contain only **distinct** values within themselves.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 2 * 10^4',
    'n is even',
    '1 <= nums1[i], nums2[i] <= 10^9',
    'nums1 and nums2 consist of distinct values',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,1,2], nums2 = [1,1,1,1]',
      output: '2',
      explanation: 'Remove one 1 and one 2 from nums1 (2 removals). Remove two 1s from nums2 (2 removals). Union = {1, 2}, size = 2.',
    },
    {
      input: 'nums1 = [1,2,3,4,5,6], nums2 = [2,3,4,5,6,7]',
      output: '6',
      explanation: 'unique to nums1: {1}, unique to nums2: {7}, shared: {2,3,4,5,6}. Keep 1 + keep 7 + keep 4 shared = 6.',
    },
    {
      input: 'nums1 = [1,2,3,4], nums2 = [1,2,3,4]',
      output: '4',
      explanation: 'All elements shared. Remove 2 from each array (different elements), union has 4.',
    },
  ],
  hints: [
    'Count unique1 = elements only in nums1, unique2 = elements only in nums2, shared = elements in both.',
    'From nums1 you keep n/2 elements. Prioritize unique elements: keep min(unique1, n/2) of them.',
    'Similarly for nums2. The remaining slots go to shared elements. Answer = min(unique1,n/2) + min(unique2,n/2) + min(shared, n - those two).',
  ],
  functionName: 'maximumSetSize',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function maximumSetSize(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let unique1 = 0, unique2 = 0, shared = 0;
  for (const v of set1) {
    if (set2.has(v)) shared++;
    else unique1++;
  }
  for (const v of set2) {
    if (!set1.has(v)) unique2++;
  }
  const n = nums1.length;
  const half = n / 2;
  const keep1 = Math.min(unique1, half);
  const keep2 = Math.min(unique2, half);
  const keepShared = Math.min(shared, n - keep1 - keep2);
  return keep1 + keep2 + keepShared;
}`,
    typescript: `function maximumSetSize(nums1: number[], nums2: number[]): number {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let unique1 = 0, unique2 = 0, shared = 0;
  for (const v of set1) {
    if (set2.has(v)) shared++;
    else unique1++;
  }
  for (const v of set2) {
    if (!set1.has(v)) unique2++;
  }
  const n = nums1.length;
  const half = n / 2;
  const keep1 = Math.min(unique1, half);
  const keep2 = Math.min(unique2, half);
  const keepShared = Math.min(shared, n - keep1 - keep2);
  return keep1 + keep2 + keepShared;
}`,
    python: `def maximumSetSize(nums1, nums2):
    set1, set2 = set(nums1), set(nums2)
    unique1 = sum(1 for v in set1 if v not in set2)
    unique2 = sum(1 for v in set2 if v not in set1)
    shared = len(set1) - unique1
    half = len(nums1) // 2
    keep1 = min(unique1, half)
    keep2 = min(unique2, half)
    keep_shared = min(shared, len(nums1) - keep1 - keep2)
    return keep1 + keep2 + keep_shared`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2], [1, 1, 1, 1]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]], expected: 6 },
    { args: [[1, 2, 3, 4], [1, 2, 3, 4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2], [1, 2]], expected: 2 },
    { args: [[1, 2], [3, 4]], expected: 2 },
    { args: [[1, 3], [2, 3]], expected: 2 },
    { args: [[1, 2, 3, 4], [5, 6, 7, 8]], expected: 4 },
  ],
};
