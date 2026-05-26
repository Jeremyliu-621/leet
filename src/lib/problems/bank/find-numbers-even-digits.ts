import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-numbers-even-digits',
  title: 'Find Numbers with Even Number of Digits',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\` of integers, return how many of them contain an **even number of digits**.`,
  constraints: [
    '1 <= nums.length <= 500',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    { input: 'nums = [12,345,2,6,7896]', output: '2', explanation: '12 has 2 digits (even). 7896 has 4 digits (even). The rest have odd digit counts.' },
    { input: 'nums = [555,901,482,1771]', output: '1', explanation: '1771 has 4 digits (even).' },
  ],
  hints: [
    'Convert each number to a string and check if its length is even, or count digits using repeated division by 10.',
    "Use nums.filter(n => String(n).length % 2 === 0).length, which converts each number to a string and tests the length parity.",
    'return nums.filter(n=>String(n).length%2===0).length;',
  ],
  functionName: 'findNumbers',
  params: ['nums'],
  starterCode: {
    javascript: 'function findNumbers(nums) {\n  \n}\n',
    python: 'def findNumbers(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[12, 345, 2, 6, 7896]], expected: 2 },
    { args: [[555, 901, 482, 1771]], expected: 1 },
    { args: [[1, 22, 333]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[10]], expected: 1 },
    { args: [[100]], expected: 0 },
    { args: [[1234, 5678]], expected: 2 },
    { args: [[99999, 10000]], expected: 0 },
  ],
};
