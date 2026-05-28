import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subsequences-that-satisfy-the-given-sum-condition',
  title: 'Number of Subsequences That Satisfy the Given Sum Condition',
  difficulty: 'medium',
  tags: ['two-pointers'],
  description: `You are given an array of integers \`nums\` and an integer \`target\`.

Return the number of **non-empty** subsequences of \`nums\` such that the sum of the minimum and maximum element on it is less than or equal to \`target\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
    '1 <= target <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [3,5,6,7], target = 9',
      output: '4',
      explanation: 'Valid subsequences: [3],[3,5],[3,5,6],[3,6].',
    },
    {
      input: 'nums = [3,3,6,8], target = 10',
      output: '6',
      explanation: 'Valid: [3],[3],[3,3],[3,6],[3,6],[3,3,6].',
    },
  ],
  hints: [
    'Sort the array. Use two pointers lo and hi.',
    'If nums[lo] + nums[hi] <= target, all 2^(hi-lo) subsequences with minimum nums[lo] and maximum ≤ nums[hi] are valid. Advance lo.',
    'Otherwise, shrink the window by decrementing hi.',
  ],
  functionName: 'numSubseq',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function numSubseq(nums, target) {\n\n}\n',
    typescript: "function numSubseq(nums: number[], target: number): number {\n\n}",

    python: 'def numSubseq(nums, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 5, 6, 7], 9], expected: 4 },
    { args: [[3, 3, 6, 8], 10], expected: 6 },
  ],
  hiddenTests: [
    { args: [[2, 3, 3, 4, 6, 7], 12], expected: 61 },
    { args: [[1, 2, 3], 6], expected: 7 },
    { args: [[2, 4], 5], expected: 1 },
    { args: [[5], 10], expected: 1 },
  ],
};
