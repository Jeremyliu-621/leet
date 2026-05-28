import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-element-after-decreasing-and-rearranging',
  title: 'Maximum Element After Decreasing and Rearranging',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** positive integer array \`arr\`.

In one operation you may choose any element and **decrease** it by any positive integer (to a minimum of 1). You may also **rearrange** the elements in any order.

After performing any number of operations, return the **maximum possible value** of the largest element satisfying:

- The value of the first element is **1**.
- The absolute difference between any two adjacent elements is **at most 1**.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [2,2,1,2,1]',
      output: '2',
      explanation: 'Sort to [1,1,2,2,2]. Set first to 1 → [1,1,2,2,2]. Result: a[0]=1, a[1]=min(1,2)=1, a[2]=min(2,2)=2, a[3]=min(2,3)=2, a[4]=min(2,3)=2. Max = 2.',
    },
    {
      input: 'arr = [100,1,1000]',
      output: '3',
      explanation: 'Sort to [1,100,1000]. Set a[0]=1, a[1]=min(100,2)=2, a[2]=min(1000,3)=3. Max = 3.',
    },
    {
      input: 'arr = [1,2,3,4,5]',
      output: '5',
      explanation: 'Array is already sorted and valid. No operations needed. Max = 5.',
    },
  ],
  hints: [
    'Sort the array. You can always decrease an element but not increase it.',
    'Set the first element to 1. For each subsequent element i, the best you can do is min(arr[i], arr[i-1]+1).',
    'After this greedy pass, the last element is the maximum achievable value.',
  ],
  functionName: 'maximumElementAfterDecrementingAndRearranging',
  params: ['arr'],
  starterCode: {
    javascript: `function maximumElementAfterDecrementingAndRearranging(arr) {

}`,
    python: `def maximumElementAfterDecrementingAndRearranging(arr):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 1, 2, 1]], expected: 2 },
    { args: [[100, 1, 1000]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[3, 3, 3, 3]], expected: 3 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
    { args: [[10]], expected: 1 },
    { args: [[5, 5]], expected: 2 },
    { args: [[3, 6, 9, 12]], expected: 4 },
  ],
};
