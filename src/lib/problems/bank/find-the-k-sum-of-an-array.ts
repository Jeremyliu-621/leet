import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-sum-of-an-array',
  title: 'Find the K-Sum of an Array',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the **k-th largest** subsequence sum that can be obtained from \`nums\`.

A **subsequence** is obtained by deleting some (possibly zero) elements without changing the order of the remaining elements. The **empty subsequence** has sum \`0\`.

Note that the same subsequence may appear multiple times (from different index selections), and all such sums count separately only if they come from distinct subsets.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    '1 <= k <= min(2000, 2^nums.length)',
  ],
  examples: [
    {
      input: 'nums = [2,4,-2], k = 5',
      output: '2',
      explanation: 'All subsequence sums in descending order: 6 (2+4), 4, 2 (2 or 4-2), 0 (empty), -2. The 5th largest is 2.',
    },
    {
      input: 'nums = [1,-2,3,4,-10,12], k = 16',
      output: '10',
      explanation: 'The 16th largest subsequence sum is 10.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '1',
      explanation: 'Only two subsequences: [1] with sum 1, and [] with sum 0. The largest is 1.',
    },
  ],
  hints: [
    'Compute maxSum = sum of all positive elements (this is the largest possible subsequence sum). The k-th largest sum equals maxSum minus the (k−1)-th smallest non-negative "reduction".',
    'Replace each element with its absolute value and sort. Use a min-heap to enumerate reductions in order. The start state is reduction=0 at index 0. From state (red, i): either include abs[i] (new state: red+abs[i], i+1) or swap abs[i−1] for abs[i] (new state: red−abs[i−1]+abs[i], i+1).',
    'Pop the heap k times total (starting with the initial state (0, 0)). The k-th popped value is the (k−1)-th smallest reduction. Return maxSum − reduction.',
  ],
  functionName: 'kSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function kSum(nums, k) {
  // 1. Compute maxSum (sum of positives). Replace nums with |nums|, sort.
  // 2. BFS with min-heap: enumerate reductions from maxSum in ascending order.
  // 3. The k-th pop gives the answer.
}`,
    typescript: "function kSum(nums: number[], k: number): number {\n  // 1. Compute maxSum (sum of positives). Replace nums with |nums|, sort.\n  // 2. BFS with min-heap: enumerate reductions from maxSum in ascending order.\n  // 3. The k-th pop gives the answer.\n}",

    python: `def kSum(nums, k):
    # 1. Compute max_sum (sum of positives). Replace nums with |nums|, sort.
    # 2. BFS with min-heap: enumerate reductions from max_sum in ascending order.
    # 3. The k-th pop gives the answer.
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, -2], 5], expected: 2 },
    { args: [[1, -2, 3, 4, -10, 12], 16], expected: 10 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2], 3], expected: 1 },
    { args: [[-1, -2, -3], 1], expected: 0 },
    { args: [[3, -1, 2], 4], expected: 2 },
    { args: [[1, 2, 3], 4], expected: 3 },
    { args: [[-5, 4, 2], 6], expected: -1 },
  ],
};
