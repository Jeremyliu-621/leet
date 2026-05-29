import type { Problem } from '../types';

export const problem: Problem = {
  id: 'identify-the-largest-outlier-in-an-array',
  title: 'Identify the Largest Outlier in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given an integer array \`nums\`. This array contains \`n\` elements, where **exactly** \`n - 2\` elements are **special numbers**. One of the remaining two elements is the **sum** of these special numbers, and the other element is an **outlier**.

Return the **largest** potential outlier in \`nums\`.

**Note:** It is possible for two or more elements to have the same value.`,
  constraints: [
    '`3 <= nums.length <= 10^5`',
    '`-1000 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [2,3,5,10]',
      output: '10',
      explanation: 'If outlier = 10, remaining = [2,3,5]. Special numbers = [2,3] (sum = 5 = remaining element). Valid. Largest outlier = 10.',
    },
    {
      input: 'nums = [1,1,1,1,1,5,5]',
      output: '5',
      explanation: 'If outlier = 5, remaining = [1,1,1,1,1,5]. Special numbers = [1,1,1,1,1] (sum = 5 = remaining element). Valid. Largest outlier = 5.',
    },
    {
      input: 'nums = [-2,-1,-3,-6,4]',
      output: '4',
      explanation: 'If outlier = 4, remaining = [-2,-1,-3,-6]. Special numbers = [-2,-1,-3] (sum = -6 = remaining element). Valid. Largest outlier = 4.',
    },
  ],
  hints: [
    'For each candidate outlier x, the remaining n-1 elements must contain n-2 specials summing to a "sum element" S.',
    'The total of the remaining n-1 elements is total - x = S + S = 2S.',
    'So S = (total - x) / 2. This must be an integer.',
    'Check that S appears in the remaining array (if x == S, it must appear at least twice in nums).',
    'Use a frequency map for O(1) lookups.',
  ],
  functionName: 'largestOutlier',
  params: ['nums'],
  starterCode: {
    javascript: `function largestOutlier(nums) {

}`,
    typescript: `function largestOutlier(nums: number[]): number {

}`,
    python: `def largestOutlier(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 5, 10]], expected: 10 },
    { args: [[1, 1, 1, 1, 1, 5, 5]], expected: 5 },
    { args: [[-2, -1, -3, -6, 4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 0]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[3, 6, 1, 2]], expected: 6 },
    { args: [[-10, 5, 5, -5]], expected: 5 },
    { args: [[10, 10, 20]], expected: 20 },
    { args: [[5, 5, 10, 100]], expected: 100 },
  ],
};
