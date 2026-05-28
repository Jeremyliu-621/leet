import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-subsequence-score',
  title: 'Maximum Subsequence Score',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You are given two 0-indexed integer arrays \`nums1\` and \`nums2\` of equal length \`n\` and a positive integer \`k\`.

Choose a subsequence of indices of length \`k\`. For chosen indices \`i0 < i1 < ... < i(k-1)\`, the **score** is:

\`\`\`
(nums1[i0] + nums1[i1] + ... + nums1[i(k-1)]) * min(nums2[i0], nums2[i1], ..., nums2[i(k-1)])
\`\`\`

Return the **maximum** possible score.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 10^5',
    '0 <= nums1[i], nums2[i] <= 10^5',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,3,2], nums2 = [2,1,3,3], k = 3',
      output: '12',
      explanation:
        'Pick indices 0, 2, 3: (1+3+2) * min(2,3,3) = 6 * 2 = 12.',
    },
    {
      input: 'nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1',
      output: '30',
      explanation: 'Pick index 2: 3 * 10 = 30.',
    },
  ],
  hints: [
    'The score is (sum of k nums1 values) × (min of corresponding nums2 values). Fix the minimum nums2 value — once you know which element contributes the minimum, all chosen nums2 values must be ≥ that minimum.',
    'Sort by nums2 in descending order. As you iterate, the current nums2[i] is the minimum. You need to pick the k largest nums1 values seen so far (including current) to maximize the sum.',
    'Use a min-heap of size k to track the k largest nums1 values. When the heap exceeds k, pop the smallest. The score candidate is heap-sum × current nums2 value.',
  ],
  functionName: 'maxScore',
  params: ['nums1', 'nums2', 'k'],
  starterCode: {
    javascript: `function maxScore(nums1, nums2, k) {\n\n}`,
    python: `def maxScore(nums1, nums2, k):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 3, 2], [2, 1, 3, 3], 3], expected: 12 },
    { args: [[4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1], expected: 30 },
  ],
  hiddenTests: [
    { args: [[2, 1, 14, 12], [11, 7, 13, 6], 3], expected: 168 },
    { args: [[1, 1, 1], [1, 1, 1], 1], expected: 1 },
    { args: [[5], [3], 1], expected: 15 },
    { args: [[2, 3, 1], [3, 2, 4], 2], expected: 10 },
  ],
};
