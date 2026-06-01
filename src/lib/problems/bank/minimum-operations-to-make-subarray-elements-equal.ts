import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-subarray-elements-equal',
  title: 'Minimum Operations to Make Subarray Elements Equal',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` and a positive integer \`k\`.

In one operation, you can increment or decrement any element of \`nums\` by 1.

Find the **minimum** total number of operations required to make **all elements equal** in at least one contiguous subarray of length \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= k <= nums.length',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,4,2,3], k = 2',
      output: '1',
      explanation: 'Consider subarray [2,3] (indices 2-3). Cost to equalize = |2-3|+|3-3| = 1 (use median=3). This is the minimum over all windows.',
    },
    {
      input: 'nums = [1,2,3], k = 3',
      output: '2',
      explanation: 'Only window is [1,2,3]. Median=2, cost = |1-2|+|2-2|+|3-2| = 2.',
    },
  ],
  hints: [
    'For a fixed window of size k, the minimum operations to make all elements equal equals the sum of absolute deviations from the median.',
    'To find the median of a window, sort the k elements and pick the middle one.',
    'Slide the window across nums, computing the cost for each window, and return the minimum.',
  ],
  functionName: 'minOperationsEqualSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minOperationsEqualSubarray(nums, k) {\n  \n}\n',
    typescript: 'function minOperationsEqualSubarray(nums: number[], k: number): number {\n  \n}',
    python: 'def minOperationsEqualSubarray(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 4, 2, 3], 2], expected: 1 },
    { args: [[1, 2, 3], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[3, 3, 3], 2], expected: 0 },
    { args: [[1, 10, 1], 2], expected: 9 },
    { args: [[5, 1, 3, 1, 5], 3], expected: 2 },
    { args: [[1], 1], expected: 0 },
  ],
};
