import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-reduce-x-to-zero',
  title: 'Minimum Operations to Reduce X to Zero',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`x\`. In one operation, you can either remove the leftmost or the rightmost element from the array \`nums\` and subtract its value from \`x\`. Note that this **modifies** the array for future operations.

Return the **minimum number of operations** to reduce \`x\` to **exactly** 0 if it is possible, otherwise, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
    '1 <= x <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,4,2,3], x = 5',
      output: '2',
      explanation: 'The optimal solution is to remove the last two elements to reduce x to zero.',
    },
    {
      input: 'nums = [5,6,7,8,9], x = 4',
      output: '-1',
      explanation: 'No combination of removing from either end sums to 4.',
    },
    {
      input: 'nums = [3,2,20,1,1,3], x = 10',
      output: '5',
      explanation:
        'Remove 3,2 from left and 1,1,3 from right (5 operations). Their sum is 3+2+1+1+3=10.',
    },
  ],
  hints: [
    'Instead of minimizing operations (removing elements), maximize the middle subarray.',
    'The middle subarray has sum = total - x. Use a sliding window to find the longest such subarray.',
    'Answer = nums.length - max_window_length. If no window with sum = total - x exists, return -1.',
    'If total - x < 0, return -1 immediately. If total - x = 0, return nums.length.',
  ],
  functionName: 'minOperations',
  params: ['nums', 'x'],
  starterCode: {
    javascript: `function minOperations(nums, x) {
  // Return minimum ops to reduce x to 0, or -1 if impossible
}`,
    typescript: "function minOperations(nums: number[], x: number): number {\n  // Return minimum ops to reduce x to 0, or -1 if impossible\n}",

    python: `def minOperations(nums: list[int], x: int) -> int:
    # Your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 4, 2, 3], 5], expected: 2 },
    { args: [[5, 6, 7, 8, 9], 4], expected: -1 },
    { args: [[3, 2, 20, 1, 1, 3], 10], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 10], expected: 4 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
    { args: [[8, 3, 2, 4], 8], expected: 1 },
    { args: [[2, 3, 4], 100], expected: -1 },
    { args: [[1], 1], expected: 1 },
    { args: [[10, 2, 3, 10], 15], expected: 3 },
    { args: [[1, 2, 3], 6], expected: 3 },
  ],
};
