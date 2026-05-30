import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-the-prefix-sum-non-negative',
  title: 'Make the Prefix Sum Non-negative',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** integer array \`nums\`. You can apply the following operation any number of times:

- Choose **any** element from \`nums\` and move it to the **end** of \`nums\`.

The **prefix sum** of \`nums\` at index \`i\` is the sum of all elements from \`nums[0]\` to \`nums[i]\`.

Return the **minimum** number of operations such that the prefix sum of every index of \`nums\` is non-negative.

It is guaranteed that an answer always exists.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    'It is guaranteed that an answer always exists.',
  ],
  examples: [
    {
      input: 'nums = [2,-3,1]',
      output: '1',
      explanation:
        'Move -3 to the end. The array becomes [2,1,-3]. Prefix sums: 2, 3, 0. All non-negative.',
    },
    {
      input: 'nums = [3,-5,-2,6]',
      output: '1',
      explanation:
        'Move -5 to the end. Array becomes [3,-2,6,-5]. Prefix sums: 3, 1, 7, 2. All non-negative.',
    },
  ],
  hints: [
    'Use a greedy approach: scan left to right, maintaining the running prefix sum.',
    'When the prefix sum goes negative, you must move the most negative element seen so far to the end (it recovers the most prefix sum per operation).',
    'Use a min-heap to track the smallest element seen so far. When prefix sum < 0, pop the minimum and subtract it from the prefix sum (since it is negative, this increases the sum).',
  ],
  functionName: 'makePrefSumNonNegative',
  params: ['nums'],
  starterCode: {
    javascript: `function makePrefSumNonNegative(nums) {
  // your code here
}`,
    typescript: `function makePrefSumNonNegative(nums: number[]): number {
  // your code here
}`,
    python: `def makePrefSumNonNegative(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[2, -3, 1]], expected: 1 },
    { args: [[3, -5, -2, 6]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[-1, 1, 2]], expected: 1 },
    { args: [[-5, 1, 2, 3, -1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[-1, -2, 3]], expected: 2 },
    { args: [[1, -1, 1, -1, 1]], expected: 0 },
    { args: [[2, -5, 3, -3, 5]], expected: 1 },
    { args: [[100, -1, -1, -1]], expected: 0 },
    { args: [[-2, -1, 5, -1, -1]], expected: 2 },
  ],
};
