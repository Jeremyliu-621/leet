import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-count-of-positive-integer-and-negative-integer',
  title: 'Maximum Count of Positive Integer and Negative Integer',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given an array \`nums\` sorted in **non-decreasing** order, return the **maximum** between the number of positive integers and the number of negative integers.

- In other words, if the number of positive integers in \`nums\` is \`pos\` and the number of negative integers is \`neg\`, then return the maximum of \`pos\` and \`neg\`.

**Note** that \`0\` is neither positive nor negative.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '-2000 <= nums[i] <= 2000',
    'nums is sorted in a non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums = [-2,-1,-1,1,2,3]',
      output: '3',
      explanation: '3 negatives, 3 positives. max(3,3) = 3.',
    },
    {
      input: 'nums = [-3,-2,-1,0,0,1,2]',
      output: '3',
      explanation: '3 negatives, 2 positives. max(3,2) = 3.',
    },
    {
      input: 'nums = [5,20,66,1314]',
      output: '4',
      explanation: '0 negatives, 4 positives. max(0,4) = 4.',
    },
  ],
  hints: [
    'Count negatives: find the index where nums becomes non-negative.',
    'Count positives: find the index where nums becomes strictly positive.',
    'Use binary search for O(log n), or a simple linear scan for O(n).',
  ],
  functionName: 'maximumCount',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumCount(nums) {

}`,
    python: `def maximumCount(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-2, -1, -1, 1, 2, 3]], expected: 3 },
    { args: [[-3, -2, -1, 0, 0, 1, 2]], expected: 3 },
    { args: [[5, 20, 66, 1314]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[-1, 0, 1]], expected: 1 },
    { args: [[-5, -4, -3, -2, -1]], expected: 5 },
    { args: [[-2, -1, 0, 0, 3]], expected: 2 },
  ],
};
