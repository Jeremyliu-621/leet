import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-element-after-decreasing-and-rearranging',
  title: 'Maximum Element After Decreasing and Rearranging',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** positive integer array \`arr\`.

In one operation you may choose any element and **decrease** it by any positive integer (to a minimum of 1). You may also **rearrange** the elements in any order.

After performing any number of operations, return the **maximum possible value** of the largest element satisfying:

- The value of the first element is **1**.
- The absolute difference between any two adjacent elements is **at most 1**.`,
  constraints: [
    '`1 <= arr.length <= 10^5`',
    '`1 <= arr[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'arr = [2,2,1,2,1]',
      output: '2',
      explanation: 'Sort to [1,1,2,2,2]. Set first to 1. Then min greedy → [1,1,2,2,2]. Max = 2.',
    },
    {
      input: 'arr = [100,1,1000]',
      output: '3',
      explanation: 'Sort to [1,100,1000]. After greedy: [1,2,3]. Max = 3.',
    },
    {
      input: 'arr = [1,2,3,4,5]',
      output: '5',
      explanation: 'Already valid. No operations needed. Max = 5.',
    },
  ],
  hints: [
    'Sort the array. You can only decrease elements, not increase them.',
    'Set the first element to 1. For each subsequent element, the best you can do is min(arr[i], arr[i-1] + 1).',
    `\`\`\`js
function maximumElementAfterDecrementingAndRearranging(arr) {
  arr.sort((a, b) => a - b);
  arr[0] = 1;
  for (let i = 1; i < arr.length; i++)
    arr[i] = Math.min(arr[i], arr[i - 1] + 1);
  return arr[arr.length - 1];
}\`\`\``,
  ],
  functionName: 'maximumElementAfterDecrementingAndRearranging',
  params: ['arr'],
  starterCode: {
    javascript: `function maximumElementAfterDecrementingAndRearranging(arr) {

}`,
    typescript:
      'function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {\n\n}',
    python: `def maximumElementAfterDecrementingAndRearranging(arr):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 1, 2, 1]], expected: 2 },
    { args: [[100, 1, 1000]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5]], expected: 1 },
    { args: [[3, 3, 3, 3]], expected: 3 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[10, 5, 3, 1, 7]], expected: 5 },
    { args: [[1000000000]], expected: 1 },
  ],
};
