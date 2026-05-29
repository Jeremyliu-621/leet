import type { Problem } from '../types';

export const problem: Problem = {
  id: 'separate-the-digits-in-an-array',
  title: 'Separate the Digits in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given an array of positive integers \`nums\`, return an array \`answer\` that consists of the digits of each integer in \`nums\` after separating them in the **same order** they appear in \`nums\`.

To separate the digits of an integer is to get all the digits it has in the same order.

For example, for the integer \`23\`, the separated digits are \`[2, 3]\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [13,25,83,77]',
      output: '[1,3,2,5,8,3,7,7]',
      explanation: '13→[1,3], 25→[2,5], 83→[8,3], 77→[7,7]. Combined: [1,3,2,5,8,3,7,7].',
    },
    {
      input: 'nums = [7,1,3,9]',
      output: '[7,1,3,9]',
      explanation: 'Each number is a single digit, so the answer is the same array.',
    },
  ],
  hints: [
    'Convert each number to its string representation, then extract individual digit characters.',
    'Convert each digit character back to an integer and add it to the result list.',
    'You can use flatMap to process each number and concatenate all digit arrays in one pass.',
  ],
  functionName: 'separateDigits',
  params: ['nums'],
  starterCode: {
    javascript: `function separateDigits(nums) {
  // your code here
}`,
    typescript: `function separateDigits(nums: number[]): number[] {
  // your code here
}`,
    python: `def separateDigits(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[13,25,83,77]], expected: [1,3,2,5,8,3,7,7] },
    { args: [[7,1,3,9]], expected: [7,1,3,9] },
    { args: [[100]], expected: [1,0,0] },
    { args: [[1,10,100]], expected: [1,1,0,1,0,0] },
    { args: [[99999]], expected: [9,9,9,9,9] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[12345]], expected: [1,2,3,4,5] },
    { args: [[100000]], expected: [1,0,0,0,0,0] },
    { args: [[1,2,3]], expected: [1,2,3] },
    { args: [[11,22,33]], expected: [1,1,2,2,3,3] },
    { args: [[9,99,999]], expected: [9,9,9,9,9,9] },
    { args: [[10,20,30]], expected: [1,0,2,0,3,0] },
    { args: [[500,600]], expected: [5,0,0,6,0,0] },
    { args: [[42,7,100,5]], expected: [4,2,7,1,0,0,5] },
    { args: [[99,1,9,11]], expected: [9,9,1,9,1,1] },
  ],
};
