import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-of-squared-difference',
  title: 'Minimum Sum of Squared Difference',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'math'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` of equal length \`n\`, and two positive integers \`k1\` and \`k2\`.

You can perform **at most** \`k1\` operations on \`nums1\` and **at most** \`k2\` operations on \`nums2\`. In one operation, you can change any element of either array by **±1**.

Your goal is to minimize the **sum of squared differences** — that is, minimize:

$$\\sum_{i=0}^{n-1} (\\text{nums1}[i] - \\text{nums2}[i])^2$$

Return the **minimum** possible value of this sum after applying at most \`k1 + k2\` total operations.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 10^5',
    '0 <= nums1[i], nums2[i] <= 10^5',
    '0 <= k1, k2 <= 10^9',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0',
      output: '579',
      explanation: 'No operations allowed. Sum = 1 + 64 + 289 + 225 = 579.',
    },
    {
      input: 'nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1',
      output: '43',
      explanation:
        'diffs = [4,4,4,3]. With 2 total ops we can reduce two of the 4s to 3. Sum = 9+9+16+9 = 43.',
    },
  ],
  hints: [
    'The optimal strategy is to reduce the largest |nums1[i] − nums2[i]| values first. Think about what the final "threshold" T looks like.',
    'Binary search on T (the maximum diff remaining). For a given T, compute cost = Σ max(0, diff[i] − T). If cost ≤ k, T is achievable.',
    'After finding the minimum T, use leftover operations to further reduce elements that are exactly T to T−1.',
  ],
  functionName: 'minSumSquareDiff',
  params: ['nums1', 'nums2', 'k1', 'k2'],
  starterCode: {
    javascript: 'function minSumSquareDiff(nums1, nums2, k1, k2) {\n  \n}\n',
    python: 'def minSumSquareDiff(nums1, nums2, k1, k2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], [2, 10, 20, 19], 0, 0], expected: 579 },
    { args: [[1, 4, 10, 12], [5, 8, 6, 9], 1, 1], expected: 43 },
    { args: [[1, 1], [1, 1], 0, 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[10], [1], 5, 0], expected: 16 },
    { args: [[0], [5], 3, 3], expected: 0 },
    { args: [[1, 2, 3, 4], [5, 6, 7, 8], 4, 0], expected: 36 },
    { args: [[1, 2, 3], [4, 5, 6], 100, 100], expected: 0 },
  ],
};
