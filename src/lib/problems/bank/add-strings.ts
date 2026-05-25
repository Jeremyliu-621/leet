import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-strings',
  title: 'Add Strings',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given two non-negative integers \`num1\` and \`num2\` represented as strings, return the sum of \`num1\` and \`num2\` as a string.

You must solve the problem without using any built-in library for handling large integers (such as \`BigInteger\`). You must also not convert the inputs to integers directly.`,
  constraints: [
    '1 <= num1.length, num2.length <= 10^4',
    'num1 and num2 consist of only digits',
    'num1 and num2 do not have any leading zeros except for the zero itself',
  ],
  examples: [
    { input: 'num1 = "11", num2 = "123"', output: '"134"' },
    { input: 'num1 = "456", num2 = "77"', output: '"533"' },
    { input: 'num1 = "0", num2 = "0"', output: '"0"' },
  ],
  hints: [
    'Iterate from the right end of both strings simultaneously, summing digit by digit.',
    'Keep a carry variable. Each step: digit1 + digit2 + carry. The result digit is the sum % 10; the new carry is Math.floor(sum / 10).',
    "After the loop, if carry is still 1, prepend '1' to the result.",
  ],
  functionName: 'addStrings',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: 'function addStrings(num1, num2) {\n\n}\n',
    python: 'def addStrings(num1, num2):\n    pass\n',
  },
  visibleTests: [
    { args: ['11', '123'], expected: '134' },
    { args: ['456', '77'], expected: '533' },
    { args: ['0', '0'], expected: '0' },
  ],
  hiddenTests: [
    { args: ['9', '1'], expected: '10' },
    { args: ['999', '1'], expected: '1000' },
    { args: ['1', '9999999999999999999999999'], expected: '10000000000000000000000000' },
    { args: ['0', '100'], expected: '100' },
  ],
};
