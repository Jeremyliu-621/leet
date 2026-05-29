import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-number',
  title: 'Single Number',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays'],
  description: `Given a **non-empty** array of integers \`nums\`, every element appears **twice** except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.`,
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-3 * 10^4 <= nums[i] <= 3 * 10^4',
    'Each element in the array appears twice except for one element which appears only once.',
  ],
  examples: [
    {
      input: 'nums = [2,2,1]',
      output: '1',
    },
    {
      input: 'nums = [4,1,2,1,2]',
      output: '4',
    },
    {
      input: 'nums = [1]',
      output: '1',
    },
  ],
  hints: [
    'XOR of a number with itself is 0. XOR of a number with 0 is the number itself.',
    'XOR all elements together. Every pair cancels out, leaving the single element.',
    `\`\`\`js
function singleNumber(nums) {
  return nums.reduce((xor,n)=>xor^n,0);
}\`\`\``,
  ],
  functionName: 'singleNumber',
  params: ['nums'],
  starterCode: {
    javascript: `function singleNumber(nums) {
  // Return the element that appears only once
}`,
    typescript: "function singleNumber(nums: number[]): number {\n  // Return the element that appears only once\n}",

    python: `def singleNumber(nums):
    # Return the element that appears only once
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 1]], expected: 1 },
    { args: [[4, 1, 2, 1, 2]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 0, 1]], expected: 0 },
    { args: [[3, 1, 3, 2, 2]], expected: 1 },
    { args: [[7]], expected: 7 },
    { args: [[1, 2, 1, 2, 3]], expected: 3 },
  ],
};
