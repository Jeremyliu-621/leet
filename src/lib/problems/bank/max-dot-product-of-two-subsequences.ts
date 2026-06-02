import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-dot-product-of-two-subsequences',
  title: 'Max Dot Product of Two Subsequences',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given two arrays \`nums1\` and \`nums2\`, return the **maximum dot product** between **non-empty subsequences** of \`nums1\` and \`nums2\` with the **same length**.

A subsequence of an array is a new array formed from the original array by deleting some (possibly zero) elements without changing the order of the remaining elements.

The **dot product** of arrays \`[a1, a2, ..., ak]\` and \`[b1, b2, ..., bk]\` is \`a1*b1 + a2*b2 + ... + ak*bk\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 500',
    '-1000 <= nums1[i], nums2[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums1 = [2,1,-2,5], nums2 = [3,0,-6]',
      output: '18',
      explanation: 'Take subsequence [2, -2, 5] from nums1 and [3, -6, ...] — actually [2,-2,5] dot [3,0,-6] = 6+0-30 < 18. Best: take [2] dot [... wait: nums1=[2,1,-2,5], nums2=[3,0,-6]. [5] and [3]? no, [5]*[3]=15. [2,-2]*[3,-6]=6+12=18. Yes!',
    },
    {
      input: 'nums1 = [3,-2], nums2 = [2,-6,7]',
      output: '21',
      explanation: 'Take [3] from nums1 and [7] from nums2: 3*7 = 21.',
    },
    {
      input: 'nums1 = [-1,-1], nums2 = [1,1]',
      output: '-1',
      explanation: 'Must pick at least one element; best is -1*1 = -1.',
    },
  ],
  hints: [
    'Define dp[i][j] = maximum dot product of non-empty subsequences of nums1[0..i] and nums2[0..j]. Fill from top-left to bottom-right.',
    'For each (i, j): the product nums1[i]*nums2[j] can be used alone, or added to dp[i-1][j-1] if that was positive. Also carry forward the best from dp[i-1][j] and dp[i][j-1].',
    'Key detail: if dp[i-1][j-1] < 0, do not extend it — just take nums1[i]*nums2[j] alone. Initialize dp with -Infinity before filling.',
  ],
  functionName: 'maxDotProduct',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function maxDotProduct(nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(-Infinity));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cur = nums1[i-1] * nums2[j-1];
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], cur, cur + Math.max(0, dp[i-1][j-1]));
    }
  }
  return dp[m][n];
}`,
    typescript: `function maxDotProduct(nums1: number[], nums2: number[]): number {
  const m = nums1.length, n = nums2.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(-Infinity));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cur = nums1[i-1] * nums2[j-1];
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], cur, cur + Math.max(0, dp[i-1][j-1]));
    }
  }
  return dp[m][n];
}`,
    python: `def maxDotProduct(nums1, nums2):
    m, n = len(nums1), len(nums2)
    dp = [[-float('inf')] * (n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            cur = nums1[i-1] * nums2[j-1]
            dp[i][j] = max(dp[i-1][j], dp[i][j-1], cur, cur + max(0, dp[i-1][j-1]))
    return dp[m][n]`,
  },
  visibleTests: [
    { args: [[2, 1, -2, 5], [3, 0, -6]], expected: 18 },
    { args: [[3, -2], [2, -6, 7]], expected: 21 },
    { args: [[-1, -1], [1, 1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[5, 3, 1], [1, 3, 5]], expected: 30 },
    { args: [[-1], [-1]], expected: 1 },
    { args: [[2, 3, 5], [1, 2, 3]], expected: 23 },
  ],
};
