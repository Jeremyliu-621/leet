import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-subarray-with-sum-at-least-k',
  title: 'Shortest Subarray with Sum at Least K',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the length of the **shortest non-empty subarray** of \`nums\` with a sum of **at least** \`k\`. If there is no such subarray, return \`-1\`.

A **subarray** is a **contiguous** part of an array.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^5 <= nums[i] <= 10^5`',
    '`1 <= k <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1], k = 1',
      output: '1',
      explanation: 'The subarray [1] has sum 1 >= 1, and length 1.',
    },
    {
      input: 'nums = [2,-1,2], k = 3',
      output: '3',
      explanation: 'Only [2,-1,2] has sum=3>=3. Length=3.',
    },
  ],
  hints: [
    'Compute prefix sums. A subarray nums[i..j-1] has sum prefix[j]-prefix[i].',
    'Use a monotone deque of indices where prefix values are strictly increasing.',
    'For each j, pop from the front while prefix[j]-prefix[front]>=k (recording min length). Then pop from the back while prefix[back]>=prefix[j] before pushing j.',
  ],
  functionName: 'shortestSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function shortestSubarray(nums, k) {

}`,
    typescript: `function shortestSubarray(nums: number[], k: number): number {

}`,
    python: `def shortestSubarray(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[2, -1, 2], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2], 4], expected: -1 },
    { args: [[-1, 3, 2], 4], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 11], expected: 3 },
    { args: [[84, -37, 32, 40, 95], 167], expected: 3 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
    { args: [[-1, -2, -3], 1], expected: -1 },
  ],
};
