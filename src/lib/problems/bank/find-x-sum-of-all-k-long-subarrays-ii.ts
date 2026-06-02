import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-x-sum-of-all-k-long-subarrays-ii',
  title: 'Find X-Sum of All K-Long Subarrays II',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'sliding-window'],
  description: `You are given an array \`nums\` of \`n\` integers and two integers \`k\` and \`x\`.

The **x-sum** of an array is calculated as follows:

- Count the occurrences of all elements in the array.
- Keep only the occurrences of the top \`x\` elements with the highest occurrence. If two elements have the same number of occurrences, the element with the **higher value** is considered to be larger.
- Calculate and return the sum of the remaining elements.

Return an integer array \`answer\` of length \`n - k + 1\` where \`answer[i]\` is the **x-sum** of the subarray \`nums[i..i+k-1]\`.

**Note:** \`x\` can be greater than the number of distinct elements; in this case, take all of them.

This is the harder version where \`nums.length\` can be up to \`10^5\` (the easy version has \`n ≤ 50\`).`,
  constraints: [
    '1 <= n == nums.length <= 10^5',
    '1 <= x <= k <= n',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,2,3,4,2,3], k = 6, x = 2',
      output: '[6,10,12]',
      explanation:
        'Subarray [1,1,2,2,3,4]: top-2 by freq are 1 (×2) and 2 (×2). Both freq=2; higher value 2 counts, then 1. Sum = 2+2+1+1 = 6.\n' +
        'Subarray [1,2,2,3,4,2]: top-2 are 2 (×3) and 3/4/1 (×1 each) → top by value: 4, 3. Sum = 2+2+2+4 = 10.\n' +
        'Subarray [2,2,3,4,2,3]: top-2 are 2 (×3) and 3 (×2). Sum = 2+2+2+3+3 = 12.',
    },
    {
      input: 'nums = [3,8,7,8,7,5], k = 2, x = 2',
      output: '[11,15,15,15,12]',
      explanation: 'Each window has k=2 elements; x=2 so take all. Sum each adjacent pair.',
    },
    {
      input: 'nums = [1,2,1], k = 2, x = 1',
      output: '[2,2]',
      explanation:
        '[1,2]: top-1 by freq: 1 and 2 both ×1, higher value wins → 2. x-sum = 2.\n' +
        '[2,1]: same, x-sum = 2.',
    },
  ],
  hints: [
    'Level 1: The naive approach recomputes frequency and sorts for each of the O(n) windows — O(n·k log k) total. To handle n up to 10^5 you need an O(n log n) sliding window that maintains the "top x" set incrementally.',
    'Level 2: Use two sorted multisets (or ordered sets with (freq, val) keys): "in" holds the top-x elements, "out" holds the rest. Maintain their sum. When an element enters or leaves the window, update frequencies and rebalance the two sets: pop from "in" if it shrank below top-x; push from "out" to "in" if "in" has fewer than x elements.',
    'Level 3: Implement with two JavaScript Maps (freq and inSet/outSet as sorted structures). At each step: (1) add new element on right, increment freq, place in correct set; (2) remove old element on left, decrement freq, remove from set; (3) rebalance so "in" has exactly min(x, distinct) elements — the set with the highest (freq, val) keys.',
  ],
  functionName: 'findXSum',
  params: ['nums', 'k', 'x'],
  starterCode: {
    javascript: `function findXSum(nums, k, x) {

}`,
    typescript: `function findXSum(nums: number[], k: number, x: number): number[] {

}`,
    python: `def findXSum(nums, k, x):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 3, 4, 2, 3], 6, 2], expected: [6, 10, 12] },
    { args: [[3, 8, 7, 8, 7, 5], 2, 2], expected: [11, 15, 15, 15, 12] },
    { args: [[1, 2, 1], 2, 1], expected: [2, 2] },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: [1] },
    { args: [[5, 5, 5, 5], 3, 2], expected: [15, 15] },
    { args: [[4, 2, 4, 2, 4], 3, 1], expected: [8, 4, 8] },
    { args: [[1, 2, 3, 4, 5], 3, 2], expected: [5, 7, 9] },
    { args: [[10, 10, 1, 10, 10], 4, 1], expected: [30, 30] },
  ],
};
