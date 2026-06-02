import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-non-decreasing-subarray-from-two-arrays',
  title: 'Longest Non-Decreasing Subarray From Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\` of length \`n\`.

Let \`result\` be an array of length \`n\` such that for every index \`i\` (0 <= i < n) you may choose either \`result[i] = nums1[i]\` or \`result[i] = nums2[i]\`.

Return the **length of the longest non-decreasing subarray** in \`result\`.

A **subarray** is a contiguous part of an array.`,
  constraints: [
    '`1 <= nums1.length == nums2.length <= 10^5`',
    '`1 <= nums1[i], nums2[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums1 = [2,3,1], nums2 = [1,2,1]',
      output: '2',
      explanation: 'One optimal choice is result = [1,2,1], giving the longest non-decreasing subarray [1,2] of length 2.',
    },
    {
      input: 'nums1 = [1,3,2,1], nums2 = [2,2,3,4]',
      output: '4',
      explanation: 'Choosing result = [1,2,3,4] from nums2 entirely gives a non-decreasing subarray of length 4.',
    },
    {
      input: 'nums1 = [1,1], nums2 = [2,2]',
      output: '2',
      explanation: 'Any choice gives a non-decreasing subarray of length 2.',
    },
  ],
  hints: [
    'Use dynamic programming. Define dp1[i] as the longest non-decreasing subarray ending at index i when result[i] = nums1[i], and dp2[i] similarly for nums2[i].',
    'For dp1[i]: check if nums1[i-1] <= nums1[i] (extend from dp1[i-1]) or if nums2[i-1] <= nums1[i] (extend from dp2[i-1]). Take the max of applicable extensions or default to 1.',
    'For dp2[i]: similarly check nums1[i-1] <= nums2[i] and nums2[i-1] <= nums2[i].',
    'The answer is the maximum over all dp1[i] and dp2[i].',
  ],
  functionName: 'maxNonDecreasingLength',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function maxNonDecreasingLength(nums1, nums2) {
  let dp1 = 1, dp2 = 1, ans = 1;
  for (let i = 1; i < nums1.length; i++) {
    let n1 = 1, n2 = 1;
    if (nums1[i-1] <= nums1[i]) n1 = Math.max(n1, dp1 + 1);
    if (nums2[i-1] <= nums1[i]) n1 = Math.max(n1, dp2 + 1);
    if (nums1[i-1] <= nums2[i]) n2 = Math.max(n2, dp1 + 1);
    if (nums2[i-1] <= nums2[i]) n2 = Math.max(n2, dp2 + 1);
    dp1 = n1; dp2 = n2;
    ans = Math.max(ans, dp1, dp2);
  }
  return ans;
}`,
    typescript: `function maxNonDecreasingLength(nums1: number[], nums2: number[]): number {
  let dp1 = 1, dp2 = 1, ans = 1;
  for (let i = 1; i < nums1.length; i++) {
    let n1 = 1, n2 = 1;
    if (nums1[i-1] <= nums1[i]) n1 = Math.max(n1, dp1 + 1);
    if (nums2[i-1] <= nums1[i]) n1 = Math.max(n1, dp2 + 1);
    if (nums1[i-1] <= nums2[i]) n2 = Math.max(n2, dp1 + 1);
    if (nums2[i-1] <= nums2[i]) n2 = Math.max(n2, dp2 + 1);
    dp1 = n1; dp2 = n2;
    ans = Math.max(ans, dp1, dp2);
  }
  return ans;
}`,
    python: `def maxNonDecreasingLength(nums1, nums2):
    dp1 = dp2 = ans = 1
    for i in range(1, len(nums1)):
        n1, n2 = 1, 1
        if nums1[i-1] <= nums1[i]: n1 = max(n1, dp1 + 1)
        if nums2[i-1] <= nums1[i]: n1 = max(n1, dp2 + 1)
        if nums1[i-1] <= nums2[i]: n2 = max(n2, dp1 + 1)
        if nums2[i-1] <= nums2[i]: n2 = max(n2, dp2 + 1)
        dp1, dp2 = n1, n2
        ans = max(ans, dp1, dp2)
    return ans`,
  },
  visibleTests: [
    { args: [[2, 3, 1], [1, 2, 1]], expected: 2 },
    { args: [[1, 3, 2, 1], [2, 2, 3, 4]], expected: 4 },
    { args: [[1, 1], [2, 2]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], [2]], expected: 1 },
    { args: [[3, 2, 1], [1, 2, 3]], expected: 3 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 3 },
    { args: [[1, 3, 2, 4], [2, 2, 3, 3]], expected: 4 },
  ],
};
