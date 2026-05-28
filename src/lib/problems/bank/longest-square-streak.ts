import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-square-streak',
  title: 'Longest Square Streak in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'binary-search'],
  description: `You are given an integer array \`nums\`. A subsequence of \`nums\` is called a **square streak** if:

- The length of the subsequence is at least \`2\`, and
- After sorting the subsequence, each element (except the first) is the **square** of the previous number.

Return the length of the **longest square streak** in \`nums\`, or return \`-1\` if there is no **square streak**.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '2 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,3,6,16,8,2]',
      output: '3',
      explanation: 'Subsequence [2,4,16]: 2^2=4, 4^2=16. Length 3.',
    },
    {
      input: 'nums = [2,3,5,6,7]',
      output: '-1',
      explanation: 'No square streaks exist.',
    },
  ],
  hints: [
    'Put all numbers in a set for O(1) lookup.',
    'For each number, follow the chain: n → n², n² → n⁴, etc., as long as the next value exists in the set.',
    'Track the maximum chain length; return -1 if max is less than 2.',
  ],
  functionName: 'longestSquareStreak',
  params: ['nums'],
  starterCode: {
    javascript: `function longestSquareStreak(nums) {

}`,
    python: `def longestSquareStreak(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 6, 16, 8, 2]], expected: 3 },
    { args: [[2, 3, 5, 6, 7]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[2, 4]], expected: 2 },
    { args: [[2, 4, 16]], expected: 3 },
    { args: [[2, 3, 4]], expected: 2 },
    { args: [[3, 9, 81]], expected: 3 },
  ],
};
