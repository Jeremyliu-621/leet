import type { Problem } from '../types';

export const problem: Problem = {
  id: 'xor-operation-in-an-array',
  title: 'XOR Operation in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given two integers \`n\` and \`start\`. Define a zero-indexed array \`nums\` where \`nums[i] = start + 2 * i\` (**0-indexed**) and \`n == nums.length\`.

Return *the bitwise XOR of all elements of* \`nums\`.`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= start <= 1000',
    'n == nums.length',
  ],
  examples: [
    {
      input: 'n = 5, start = 0',
      output: '8',
      explanation: 'Array is [0, 2, 4, 6, 8]. XOR: 0^2^4^6^8 = 8.',
    },
    {
      input: 'n = 4, start = 3',
      output: '8',
      explanation: 'Array is [3, 5, 7, 9]. XOR: 3^5^7^9 = 8.',
    },
  ],
  hints: [
    'Build the array nums[i] = start + 2*i for i in 0..n-1.',
    'Return the XOR of all elements using the ^ operator.',
  ],
  functionName: 'xorOperation',
  params: ['n', 'start'],
  starterCode: {
    javascript: `function xorOperation(n, start) {

}`,
    python: `def xorOperation(n, start):
    pass`,
  },
  visibleTests: [
    { args: [5, 0], expected: 8 },
    { args: [4, 3], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, 7], expected: 7 },
    { args: [2, 0], expected: 2 },
    { args: [3, 1], expected: 7 },
    { args: [10, 5], expected: 2 },
    { args: [6, 2], expected: 14 },
  ],
};
