import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-element-after-decreasing-and-rearranging',
  title: 'Maximum Element After Decreasing and Rearranging',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an array \`arr\` of positive integers. You must apply the following operations to make \`arr\` satisfy the given conditions:

1. **Rearrange** elements in any order.
2. **Replace** any element with any positive integer that is **≤ the original** element.

The conditions that must hold after operations:
- \`arr[0] == 1\`
- The **absolute difference** between any two adjacent elements is **at most 1**.

Return the **maximum possible value** of the maximum element of \`arr\` after performing the operations.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [2,2,1,2,1]',
      output: '2',
      explanation: 'Sort to [1,1,2,2,2]. Set arr[0]=1. Greedy: [1,1,2,2,2]. Maximum = 2.',
    },
    {
      input: 'arr = [100,1,1000]',
      output: '3',
      explanation: 'Sort to [1,100,1000]. After greedy assignment: [1,2,3]. Maximum = 3.',
    },
    {
      input: 'arr = [1,2,3,4,5]',
      output: '5',
      explanation: 'Already valid (arr[0]=1, differences all ≤ 1). No operations needed. Maximum = 5.',
    },
  ],
  hints: [
    'Sort the array first; this determines which elements become which values after operations.',
    'After sorting, greedily assign: arr[0] = 1, arr[i] = min(arr[i], arr[i-1] + 1).',
    'The answer simplifies to min(n, max(arr)) where n is the array length, because each position can contribute at most 1 to the maximum.',
  ],
  functionName: 'maximumElementAfterDecrementingAndRearranging',
  params: ['arr'],
  starterCode: {
    javascript: 'function maximumElementAfterDecrementingAndRearranging(arr) {\n\n}\n',
    typescript: 'function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {\n\n}',
    python: 'def maximumElementAfterDecrementingAndRearranging(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 2, 1, 2, 1]], expected: 2 },
    { args: [[100, 1, 1000]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1, 1]], expected: 1 },
    { args: [[3, 4, 5]], expected: 3 },
    { args: [[10, 10, 10]], expected: 3 },
  ],
};
