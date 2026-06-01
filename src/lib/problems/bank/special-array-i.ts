import type { Problem } from '../types';

export const problem: Problem = {
  id: 'special-array-i',
  title: 'Special Array I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `An array is considered **special** if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers \`nums\`. Return \`true\` if \`nums\` is **special**, otherwise, return \`false\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [1]',
      output: 'true',
      explanation: 'There is only one element. So the answer is true.',
    },
    {
      input: 'nums = [2,1,4]',
      output: 'true',
      explanation: 'There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.',
    },
    {
      input: 'nums = [4,3,1,6]',
      output: 'false',
      explanation: 'nums[1] and nums[2] are both odd. So the answer is false.',
    },
  ],
  hints: [
    'Check every adjacent pair of elements.',
    'Two numbers have different parity if one is even and the other is odd.',
    'Return false if any adjacent pair has the same parity.',
  ],
  functionName: 'isArraySpecial',
  params: ['nums'],
  starterCode: {
    javascript: `function isArraySpecial(nums) {

}`,
    typescript: `function isArraySpecial(nums: number[]): boolean {

}`,
    python: `def isArraySpecial(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1]], expected: true },
    { args: [[2, 1, 4]], expected: true },
    { args: [[4, 3, 1, 6]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: true },
    { args: [[2, 2]], expected: false },
    { args: [[1, 1, 2]], expected: false },
    { args: [[2, 1, 2, 1]], expected: true },
    { args: [[1, 3, 5]], expected: false },
  ],
};
