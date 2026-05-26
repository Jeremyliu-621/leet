import type { Problem } from '../types';

export const problem: Problem = {
  id: 'separate-digits-in-array',
  title: 'Separate the Digits in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of positive integers \`nums\`, return an array \`answer\` that consists of the digits of each integer in \`nums\` after separating them in the **same order** they appear in \`nums\`.

To separate the digits of an integer is to get all the digits it has in the same order.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [13,25,83,77]',
      output: '[1,3,2,5,8,3,7,7]',
      explanation: '13→[1,3], 25→[2,5], 83→[8,3], 77→[7,7].',
    },
    {
      input: 'nums = [7,1,3,9]',
      output: '[7,1,3,9]',
      explanation: 'Each is a single digit already.',
    },
  ],
  hints: [
    'Convert each number to a string, then extract individual digits.',
    'Convert each number to its individual digits. Flatten the resulting arrays.',
    '`return nums.flatMap(n => [...String(n)].map(Number));`'
  ],
  functionName: 'separateDigits',
  params: ['nums'],
  starterCode: {
    javascript: `function separateDigits(nums) {

}`,
    python: `def separateDigits(nums):
    pass`,
  },
  visibleTests: [
    { args: [[13, 25, 83, 77]], expected: [1, 3, 2, 5, 8, 3, 7, 7] },
    { args: [[7, 1, 3, 9]], expected: [7, 1, 3, 9] },
  ],
  hiddenTests: [
    { args: [[100]], expected: [1, 0, 0] },
    { args: [[1]], expected: [1] },
    { args: [[9, 9]], expected: [9, 9] },
    { args: [[123]], expected: [1, 2, 3] },
  ],
};
