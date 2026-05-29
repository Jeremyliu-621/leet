import type { Problem } from '../types';

export const problem: Problem = {
  id: 'phone-number-prefix',
  title: 'Phone Number Prefix',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** array of strings \`numbers\`, where each string represents a phone number.

Return \`true\` if **no** phone number is a prefix of any other phone number in the array, and \`false\` otherwise.`,
  constraints: [
    '`2 <= numbers.length <= 50`',
    '`1 <= numbers[i].length <= 50`',
    'All characters of `numbers[i]` are digits.',
    'No leading zeros.',
  ],
  examples: [
    {
      input: 'numbers = ["1","2","01","001"]',
      output: 'true',
      explanation: 'No number is a prefix of another.',
    },
    {
      input: 'numbers = ["001","0"]',
      output: 'false',
      explanation: '"0" is a prefix of "001".',
    },
  ],
  hints: [
    'Sort the array lexicographically — if any number is a prefix of another, they will end up adjacent after sorting.',
    'After sorting, check only consecutive pairs: if `numbers[i]` starts with `numbers[i-1]`, return false.',
    'A string `a` is a prefix of `b` if `b.startsWith(a)`, equivalently if `b.slice(0, a.length) === a`.',
  ],
  functionName: 'phonePrefix',
  params: ['numbers'],
  starterCode: {
    javascript: `function phonePrefix(numbers) {

}`,
    typescript: `function phonePrefix(numbers: string[]): boolean {

}`,
    python: `def phonePrefix(numbers):
    pass`,
  },
  visibleTests: [
    { args: [['1', '2', '01', '001']], expected: true },
    { args: [['001', '0']], expected: false },
  ],
  hiddenTests: [
    { args: [['123', '456', '789']], expected: true },
    { args: [['12', '123', '456']], expected: false },
    { args: [['9', '10', '911', '999']], expected: false },
    { args: [['5', '50', '55']], expected: false },
    { args: [['10', '200', '30']], expected: true },
    { args: [['1', '11', '111']], expected: false },
    { args: [['100', '200', '300', '400']], expected: true },
    { args: [['123456789', '987654321']], expected: true },
  ],
};
