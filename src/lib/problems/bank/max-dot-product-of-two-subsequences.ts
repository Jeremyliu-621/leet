import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-dot-product-of-two-subsequences',
  title: 'Max Dot Product of Two Subsequences',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given two arrays **nums1** and **nums2**, return the **maximum dot product** between **non-empty** subsequences of nums1 and nums2 with the same length.

A subsequence of an array is a new array which is formed by deleting some (possibly none) elements from the original array, without disturbing the remaining elements' relative order.

The dot product of two arrays \`a\` and \`b\` of the same length is \`a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]\`.

**Function signature:** \`maxDotProduct(nums1, nums2)\`

**Example:**
- nums1=[2,1,-2,5], nums2=[3,0,-6] → 18 (subsequences [2,5] and [3,-6]: 2*3 + 5*(-6) is wrong; actually [2,-2,5] and [3,-6,?] — best is [2,5]·[3,-6]? No: [5]·[3]=15 or [2,5]·[3,-6]=-24. Actually [2]·[3]=6, [-2]·[-6]=12, [5]·[3]=15... best single-pair is [5]*[3]=15, but [2,-2]·[3,-6]=6+12=18)
- nums1=[3,-2], nums2=[2,-6,7] → 21 (subsequences [3] and [7])
- nums1=[-1,-1], nums2=[1,1] → -1 (only choice: one pair, min negative product)`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 500',
    '-1000 <= nums1[i], nums2[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums1 = [2,1,-2,5], nums2 = [3,0,-6]',
      output: '18',
      explanation: 'Take subsequences [2,-2] and [3,-6]: dot product = 2*3 + (-2)*(-6) = 6 + 12 = 18.',
    },
    {
      input: 'nums1 = [3,-2], nums2 = [2,-6,7]',
      output: '21',
      explanation: 'Take subsequences [3] and [7]: dot product = 3*7 = 21.',
    },
    {
      input: 'nums1 = [-1,-1], nums2 = [1,1]',
      output: '-1',
      explanation: 'Must pick at least one pair; best is -1*1 = -1.',
    },
  ],
  hints: [
    'Level 1: This is a 2D DP problem. Let dp[i][j] = maximum dot product using a subsequence ending at nums1[i] and nums2[j]. Think about whether you include or skip each element.',
    'Level 2: dp[i][j] = max(nums1[i]*nums2[j], dp[i-1][j-1] + nums1[i]*nums2[j], dp[i-1][j], dp[i][j-1]). The term dp[i-1][j-1]+nums1[i]*nums2[j] only applies if dp[i-1][j-1]>0 (adding a negative accumulated result would worsen it). Base case: dp[i][j] starts at -Infinity.',
    'Level 3: const m=nums1.length,n=nums2.length; const dp=Array.from({length:m},()=>new Array(n).fill(-Infinity)); for(let i=0;i<m;i++)for(let j=0;j<n;j++){const prod=nums1[i]*nums2[j]; dp[i][j]=prod; if(i>0&&j>0&&dp[i-1][j-1]>0)dp[i][j]=Math.max(dp[i][j],dp[i-1][j-1]+prod); if(i>0)dp[i][j]=Math.max(dp[i][j],dp[i-1][j]); if(j>0)dp[i][j]=Math.max(dp[i][j],dp[i][j-1]);} return dp[m-1][n-1];',
  ],
  functionName: 'maxDotProduct',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function maxDotProduct(nums1, nums2) {\n  \n}\n',
    python: 'def maxDotProduct(nums1, nums2):\n    ',
  },
  visibleTests: [
    { args: [[2, 1, -2, 5], [3, 0, -6]], expected: 18 },
    { args: [[3, -2], [2, -6, 7]], expected: 21 },
    { args: [[-1, -1], [1, 1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[-1], [-1]], expected: 1 },
    { args: [[1, 2, 3], [4, 5, 6]], expected: 32 },
    { args: [[-3, -2, -1], [-1, -2, -3]], expected: 12 },
    { args: [[1, -1, 0, 2], [3, 2, -1, 4]], expected: 12 },
  ],
};
