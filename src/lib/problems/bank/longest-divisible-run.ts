import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-divisible-run',
  title: 'Longest Divisible Run',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, a **divisible run** is a contiguous subarray where every pair of adjacent elements satisfies the divisibility condition: \`a % b === 0\` or \`b % a === 0\`.

Return the **length** of the longest divisible run in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [3,6,4,2,8]',
      output: '3',
      explanation: '[3,6]: 6%3=0 ✓. But 6 and 4 don\'t divide each other. [4,2,8]: 4%2=0 and 8%2=0 ✓. Longest run is [4,2,8] with length 3.',
    },
    {
      input: 'nums = [2,6,3,9]',
      output: '4',
      explanation: '6%2=0, 6%3=0, 9%3=0 — all adjacent pairs satisfy the condition. The entire array is one run of length 4.',
    },
    {
      input: 'nums = [5,3,7]',
      output: '1',
      explanation: 'No two adjacent elements divide each other, so each element forms its own run of length 1.',
    },
  ],
  hints: [
    'A pair (a, b) is "divisible" if `a % b === 0` or `b % a === 0`. Check each adjacent pair in a single left-to-right scan.',
    'Maintain a running length for the current divisible run. Extend it when the current pair is divisible; reset it to 1 otherwise.',
    'Track the maximum run length seen so far and return it after the full scan.',
  ],
  functionName: 'longestDivisibleRun',
  params: ['nums'],
  starterCode: {
    javascript: `function longestDivisibleRun(nums) {

}`,
    typescript: `function longestDivisibleRun(nums: number[]): number {

}`,
    python: `def longestDivisibleRun(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 6, 4, 2, 8]], expected: 3 },
    { args: [[2, 6, 3, 9]], expected: 4 },
    { args: [[5, 3, 7]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 5]], expected: 2 },
    { args: [[12, 6, 3, 9]], expected: 4 },
    { args: [[4, 8, 2, 14, 7]], expected: 5 },
    { args: [[100, 50, 25, 5, 1]], expected: 5 },
    { args: [[7]], expected: 1 },
    { args: [[6, 4, 2]], expected: 2 },
    { args: [[3, 6, 12, 5, 15]], expected: 3 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
  ],
};
