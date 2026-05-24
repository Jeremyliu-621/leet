import type { Problem } from '../types';

export const problem: Problem = {
  id: 'multiply-strings',
  title: 'Multiply Strings',
  difficulty: 'medium',
  tags: ['math', 'strings'],
  description: `Given two non-negative integers \`num1\` and \`num2\` represented as strings, return the product of \`num1\` and \`num2\`, also represented as a string.

**Note:** You must not use any built-in BigInteger library or convert the inputs to integer directly.`,
  constraints: [
    '1 <= num1.length, num2.length <= 200',
    'num1 and num2 consist of digits only',
    'Both num1 and num2 do not contain any leading zero, except the number 0 itself',
  ],
  examples: [
    { input: 'num1 = "2", num2 = "3"', output: '"6"' },
    { input: 'num1 = "123", num2 = "456"', output: '"56088"' },
  ],
  hints: [
    'Simulate grade-school multiplication: num1[i] * num2[j] contributes to position i+j and i+j+1.',
    'Allocate a result array of length m+n, multiply each pair of digits, and propagate carries.',
    'Strip leading zeros from the result string; return "0" if the result is empty.',
  ],
  functionName: 'multiply',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: `function multiply(num1, num2) {

}`,
    python: `def multiply(num1, num2):
    pass`,
  },
  visibleTests: [
    { args: ['2', '3'], expected: '6' },
    { args: ['123', '456'], expected: '56088' },
  ],
  hiddenTests: [
    { args: ['0', '0'], expected: '0' },
    { args: ['0', '100'], expected: '0' },
    { args: ['1', '9'], expected: '9' },
    { args: ['99', '99'], expected: '9801' },
    { args: ['999', '999'], expected: '998001' },
    { args: ['12', '345'], expected: '4140' },
  ],
};
