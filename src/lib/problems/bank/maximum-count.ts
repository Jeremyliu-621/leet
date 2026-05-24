import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-count',
  title: 'Maximum Count of Positive Integer and Negative Integer',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given an array \`nums\` sorted in **non-decreasing** order, return the **maximum** between the number of positive integers and the number of negative integers.

- In other words, if the number of positive integers in \`nums\` is \`pos\` and the number of negative integers is \`neg\`, then return the maximum of \`pos\` and \`neg\`.

**Note** that \`0\` is neither positive nor negative.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '-2000 <= nums[i] <= 2000',
    'nums is sorted in non-decreasing order',
  ],
  examples: [
    { input: 'nums = [-2,-1,-1,1,2,3]', output: '3', explanation: '3 negative, 3 positive. Max is 3.' },
    { input: 'nums = [-3,-2,-1,0,0,1,2]', output: '3', explanation: '3 negative, 2 positive. Max is 3.' },
    { input: 'nums = [5,20,66,1314]', output: '4', explanation: '0 negative, 4 positive. Max is 4.' },
  ],
  hints: [
    'Count negatives (values < 0) and positives (values > 0). Return the larger count.',
  ],
  functionName: 'maximumCount',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumCount(nums) {\n  \n}\n',
    python: 'def maximumCount(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[-2, -1, -1, 1, 2, 3]], expected: 3 },
    { args: [[-3, -2, -1, 0, 0, 1, 2]], expected: 3 },
    { args: [[5, 20, 66, 1314]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[-1]], expected: 1 },
    { args: [[0]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[-5, -4, -3, -2, -1]], expected: 5 },
    { args: [[-1, 0, 1]], expected: 1 },
  ],
};
