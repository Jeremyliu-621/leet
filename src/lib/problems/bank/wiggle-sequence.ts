import type { Problem } from '../types';

export const problem: Problem = {
  id: 'wiggle-sequence',
  title: 'Wiggle Subsequence',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `A **wiggle sequence** is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

- For example, \`[1, 7, 4, 9, 2, 5]\` is a wiggle sequence because the differences \`(6, -3, 5, -7, 3)\` alternate between positive and negative.
- In contrast, \`[1, 4, 7, 2, 5]\` and \`[1, 7, 4, 5, 5]\` are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.

A **subsequence** is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array \`nums\`, return the length of the **longest wiggle subsequence**.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,7,4,9,2,5]',
      output: '6',
      explanation: 'The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).',
    },
    {
      input: 'nums = [1,17,5,10,13,15,10,5,16,8]',
      output: '7',
      explanation: 'One valid subsequence is [1,17,10,13,10,16,8] with differences (16,-7,3,-3,6,-8).',
    },
    {
      input: 'nums = [1,2,3,4,5,6,7,8,9]',
      output: '2',
      explanation: 'The longest wiggle subsequence uses the first and last element: [1,9].',
    },
  ],
  hints: [
    'Use two DP variables: `up` = length of longest wiggle subsequence ending with a rise, `down` = length ending with a fall. Initially both are 1.',
    'For each pair of adjacent elements: if `nums[i] > nums[i-1]` then `up = down + 1`; if `nums[i] < nums[i-1]` then `down = up + 1`. Equal elements are skipped.',
    'The answer is `max(up, down)`. This greedy O(n) approach works because extending one direction never invalidates future extensions in the other direction.',
  ],
  functionName: 'wiggleMaxLength',
  params: ['nums'],
  starterCode: {
    javascript: `function wiggleMaxLength(nums) {\n\n}`,
    typescript: `function wiggleMaxLength(nums: number[]): number {

}`,
    python: `def wiggleMaxLength(nums: list[int]) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 7, 4, 9, 2, 5]], expected: 6 },
    { args: [[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]], expected: 7 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 1]], expected: 2 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[3, 3, 3, 2, 5]], expected: 3 },
    { args: [[0, 0]], expected: 1 },
    { args: [[1, 7, 4, 5, 5]], expected: 4 },
    { args: [[1, 4, 7, 2, 5]], expected: 4 },
    { args: [[1, 2, 1, 2, 1, 2]], expected: 6 },
  ],
};
