import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-largest-element',
  title: 'K-th Largest Element in Array',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **k-th largest element** in the array.

This is the k-th largest element **in sorted order**, not the k-th distinct element.

For example, in the array \`[3,2,1,5,6,4]\` with \`k=2\`, the 2nd largest element is \`5\`.

**k=1** means the largest, **k=2** means the second largest, and so on.`,
  constraints: [
    '1 <= k <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      explanation: 'Sorted descending: [6,5,4,3,2,1]. The 2nd element is 5.',
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
      explanation: 'Sorted descending: [6,5,5,4,3,3,2,2,1]. The 4th element is 4.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '1',
      explanation: 'Only one element; the 1st largest is 1.',
    },
  ],
  hints: [
    'The simplest correct approach: sort the array in descending order and return the element at index k-1.',
    'Sort descending with `nums.sort((a, b) => b - a)` then return `nums[k - 1]`. A more advanced approach uses Quickselect (average O(n)) to avoid a full sort.',
    '`nums.sort((a, b) => b - a); return nums[k - 1];` — or use a min-heap of size k: iterate the array; if the heap has fewer than k elements push the current one; otherwise if the current element is larger than the heap minimum, replace the minimum. Return the heap minimum at the end.',
  ],
  functionName: 'kthLargest',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function kthLargest(nums, k) {\n  // your code here\n}\n',
    typescript: "function kthLargest(nums: number[], k: number): number {\n  // your code here\n}",

    python: 'def kthLargest(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
    { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[7, 7, 7], 1], expected: 7 },
    { args: [[-1, -2, -3, -4], 2], expected: -2 },
    { args: [[10, 20, 30], 3], expected: 10 },
    { args: [[5, 3, 8, 1, 9, 2], 1], expected: 9 },
    { args: [[5, 3, 8, 1, 9, 2], 6], expected: 1 },
    { args: [[0, 0, 0, 1], 2], expected: 0 },
  ],
};
