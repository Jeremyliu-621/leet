import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-subarray-sum-with-one-deletion',
  title: 'Maximum Subarray Sum with One Deletion',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an array of integers, return the maximum sum for a **non-empty** subarray (contiguous elements) with at most one element deletion. In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the sum of the remaining elements is maximum possible.

Note that the subarray needs to be non-empty after deleting one element.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '-10^4 <= arr[i] <= 10^4',
  ],
  examples: [
    {
      input: 'arr = [1,-2,0,3]',
      output: '4',
      explanation: 'Delete -2, then subarray [1,0,3] has sum 4.',
    },
    {
      input: 'arr = [1,-2,-2,3]',
      output: '3',
    },
  ],
  hints: [
    'Use two DP arrays: dp0[i] = max subarray ending at i with no deletion; dp1[i] = with one deletion.',
    'dp0[i] = max(arr[i], dp0[i-1] + arr[i]).',
    'dp1[i] = max(dp0[i-1], dp1[i-1] + arr[i]) — either skip arr[i] using the deletion, or extend a subarray that already used a deletion.',
  ],
  functionName: 'maximumSum',
  params: ['arr'],
  starterCode: {
    javascript: 'function maximumSum(arr) {\n\n}\n',
    python: 'def maximumSum(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,-2,0,3]], expected: 4 },
    { args: [[1,-2,-2,3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[-1,-1,-1,-1,-1]], expected: -1 },
    { args: [[2,1]], expected: 3 },
    { args: [[-1,2,3,-1,2]], expected: 7 },
    { args: [[5,-3,5]], expected: 10 },
  ],
};
