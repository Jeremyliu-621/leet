import type { Problem } from '../types';

export const problem: Problem = {
  id: 'plus-one',
  title: 'Plus One',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a large integer represented as an integer array \`digits\`, where each element \`digits[i]\` is the \`i\`th digit of the integer. The digits are ordered from most significant to least significant (left to right). The integer does not contain any leading zeros.

Increment the large integer by one and return the resulting array of digits.`,
  constraints: [
    '1 <= digits.length <= 100',
    '0 <= digits[i] <= 9',
    'digits does not contain any leading zero except for the number 0 itself',
  ],
  examples: [
    {
      input: 'digits = [1,2,3]',
      output: '[1,2,4]',
      explanation: '123 + 1 = 124.',
    },
    {
      input: 'digits = [1,2,9]',
      output: '[1,3,0]',
      explanation: '129 + 1 = 130.',
    },
    {
      input: 'digits = [9,9,9]',
      output: '[1,0,0,0]',
      explanation: '999 + 1 = 1000.',
    },
  ],
  hints: [
    'Iterate from the rightmost digit. Add 1. If there is a carry, continue left.',
    'If the current digit is 9, set it to 0 and carry 1 to the left. If not 9, simply increment and return. If all digits are 9, prepend a 1.',
    '`for(let i=digits.length-1;i>=0;i--){if(digits[i]<9){digits[i]++;return digits;}digits[i]=0;} return [1,...digits];`',
  ],
  functionName: 'plusOne',
  params: ['digits'],
  starterCode: {
    javascript: 'function plusOne(digits) {\n  // your code here\n}\n',
    python: 'def plusOne(digits: list) -> list:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [1, 2, 4] },
    { args: [[1, 2, 9]], expected: [1, 3, 0] },
    { args: [[9, 9, 9]], expected: [1, 0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [1] },
    { args: [[9]], expected: [1, 0] },
    { args: [[1]], expected: [2] },
    { args: [[4, 3, 2, 1]], expected: [4, 3, 2, 2] },
  ],
};
