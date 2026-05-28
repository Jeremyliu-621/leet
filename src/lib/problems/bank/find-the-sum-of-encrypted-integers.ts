import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-sum-of-encrypted-integers',
  title: 'Find the Sum of Encrypted Integers',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `You are given an integer array \`nums\` containing **positive** integers. We define a function \`encrypt\` such that \`encrypt(x)\` replaces **every** digit in \`x\` with the **largest** digit in \`x\`. For example, \`encrypt(523) = 555\` and \`encrypt(213) = 333\`.

Return the **sum** of encrypted elements.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '6',
      explanation: 'encrypt(1) = 1, encrypt(2) = 2, encrypt(3) = 3. Sum = 6.',
    },
    {
      input: 'nums = [10,21,31]',
      output: '66',
      explanation: 'encrypt(10) = 11, encrypt(21) = 22, encrypt(31) = 33. Sum = 11+22+33 = 66.',
    },
  ],
  hints: [
    'For each number, find its maximum digit and its number of digits.',
    'The encrypted value is maxDigit repeated length times, e.g., maxDigit * 111...1 (length ones).',
    'The repunit 111...1 with d digits = (10^d - 1) / 9.',
  ],
  functionName: 'sumOfEncryptedInt',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfEncryptedInt(nums) {

}`,
    typescript: "function sumOfEncryptedInt(nums: number[]): number {\n\n}",

    python: `def sumOfEncryptedInt(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[10, 21, 31]], expected: 66 },
  ],
  hiddenTests: [
    { args: [[100]], expected: 111 },
    { args: [[9, 99, 999]], expected: 1107 },
    { args: [[523]], expected: 555 },
    { args: [[1, 10, 100, 1000]], expected: 1234 },
  ],
};
