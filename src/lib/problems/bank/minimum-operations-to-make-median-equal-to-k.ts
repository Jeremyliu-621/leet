import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-median-equal-to-k',
  title: 'Minimum Operations to Make Median Equal to K',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` and a **non-negative** integer \`k\`.

In one operation you may choose any element of \`nums\` and increment or decrement it by 1.

Return the **minimum number of operations** required to make the **median** of \`nums\` equal to \`k\`.

The **median** of an array of length \`n\` is the element at index \`⌊n / 2⌋\` after sorting the array in non-decreasing order (0-indexed).`,
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '0 <= nums[i], k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,5,6,8,5], k = 4',
      output: '2',
      explanation: 'Sorted: [2, 5, 5, 6, 8]. Median is at index 2 = 5. Decrease that 5 to 4 (1 op) and decrease the 5 at index 1 to 4 (1 op). Sorted: [2, 4, 4, 6, 8]. Median = 4.',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 3',
      output: '0',
      explanation: 'The median is already 3.',
    },
    {
      input: 'nums = [1,3,5,7], k = 4',
      output: '1',
      explanation: 'Sorted: [1, 3, 5, 7]. Median at index 2 = 5. Decrease 5 to 4, giving sorted [1, 3, 4, 7]. Median = 4.',
    },
  ],
  hints: [
    'Sort the array. The median is `sorted[Math.floor(n / 2)]`.',
    'For each element to the **left** of the median (indices 0..m-1): if it is greater than k, you must reduce it to k. Cost = `max(0, sorted[i] - k)`.',
    'For each element to the **right** of the median (indices m+1..n-1): if it is less than k, you must increase it to k. Cost = `max(0, k - sorted[i])`. Also add `|sorted[m] - k|` for the median element itself.',
  ],
  functionName: 'minOperationsToMakeMedianEqualK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperationsToMakeMedianEqualK(nums, k) {\n\n}`,
    typescript: `function minOperationsToMakeMedianEqualK(nums: number[], k: number): number {

}`,
    python: `def minOperationsToMakeMedianEqualK(nums: list[int], k: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[2, 5, 6, 8, 5], 4], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 0 },
    { args: [[1, 3, 5, 7], 4], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5], 5], expected: 0 },
    { args: [[5], 3], expected: 2 },
    // [1,1,1]: sorted=[1,1,1], m=1. left=[1]→0. med=1→|1-2|=1. right=[1]→2-1=1. Total=2.
    { args: [[1, 1, 1], 2], expected: 2 },
    // [10,10,10]: sorted=[10,10,10], m=1. left=[10]→5. med=10→5. right=[10]→0. Total=10.
    { args: [[10, 10, 10], 5], expected: 10 },
    // [1,2,3]: sorted=[1,2,3], m=1. med=2→3. right=[3]→2. Total=5.
    { args: [[1, 2, 3], 5], expected: 5 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 4], expected: 0 },
    // [0,0,0,0,0]: m=2. med=0→3. right=[0,0]→3+3=6. Total=9.
    { args: [[0, 0, 0, 0, 0], 3], expected: 9 },
    { args: [[1, 3, 5, 7, 9], 5], expected: 0 },
    { args: [[100, 200, 300], 150], expected: 50 },
    { args: [[1, 1, 1, 1, 1], 1], expected: 0 },
    { args: [[3, 1, 2, 4, 5], 2], expected: 1 },
    { args: [[1, 2], 3], expected: 1 },
  ],
};
