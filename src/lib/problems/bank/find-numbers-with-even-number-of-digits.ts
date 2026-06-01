import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-numbers-with-even-number-of-digits',
  title: 'Find Numbers with Even Number of Digits',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an array \`nums\` of integers, return how many of them contain an **even number** of digits.`,
  constraints: [
    '1 <= nums.length <= 500',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [12,345,2,6,7896]',
      output: '2',
      explanation: '12 has 2 digits (even) and 7896 has 4 digits (even). Count = 2.',
    },
    {
      input: 'nums = [555,901,482,1771]',
      output: '1',
      explanation: 'Only 1771 has 4 digits. Count = 1.',
    },
  ],
  hints: [
    'Convert each number to a string and check if its length is even.',
    "Filter the array keeping only numbers whose string representation has even length, then return the count.",
    'return nums.filter(n=>String(n).length%2===0).length;',
  ],
  functionName: 'findNumbers',
  params: ['nums'],
  starterCode: {
    javascript: `function findNumbers(nums) {
  return nums.filter(n => String(n).length % 2 === 0).length;
}`,
    typescript: `function findNumbers(nums: number[]): number {
  return nums.filter(n => String(n).length % 2 === 0).length;
}`,
    python: `def findNumbers(nums):
    return sum(1 for n in nums if len(str(n)) % 2 == 0)`,
  },
  visibleTests: [
    { args: [[12, 345, 2, 6, 7896]], expected: 2 },
    { args: [[555, 901, 482, 1771]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1111]], expected: 1 },
    { args: [[11, 22, 333]], expected: 2 },
    { args: [[1, 10, 100, 1000, 10000]], expected: 2 },
  ],
};
