import type { Problem } from '../types';

export const problem: Problem = {
  id: 'wiggle-subsequence',
  title: 'Wiggle Subsequence',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `A **wiggle sequence** is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.

Given an integer array \`nums\`, return the length of the longest wiggle subsequence of \`nums\`.

A **subsequence** is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.`,
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
      explanation: 'It is not easy to intuit what the answer is. One example of a length-7 wiggle subsequence is [1,17,10,13,10,16,8].',
    },
    {
      input: 'nums = [1,2,3,4,5,6,7,8,9]',
      output: '2',
    },
  ],
  hints: [
    'Greedy: scan through and count direction changes.',
    'Track the previous difference direction (up or down). Extend the wiggle whenever the current direction differs.',
    'Consecutive equal elements or monotone runs count as a single direction — skip them.',
  ],
  functionName: 'wiggleMaxLength',
  params: ['nums'],
  starterCode: {
    javascript: `function wiggleMaxLength(nums) {
  // Return length of longest wiggle subsequence
}`,
    python: `def wiggleMaxLength(nums):
    # Return length of longest wiggle subsequence
    pass`,
  },
  visibleTests: [
    { args: [[1, 7, 4, 9, 2, 5]], expected: 6 },
    { args: [[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]], expected: 7 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[3, 3, 3, 2, 5]], expected: 3 },
  ],
};
