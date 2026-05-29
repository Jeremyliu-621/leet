import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-trailing-zeros-from-a-string',
  title: 'Remove Trailing Zeros From a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a positive integer \`num\` represented as a string, return the string \`num\` with **all trailing zeros removed**.

The number represented by \`num\` will not have any leading zeros.`,
  constraints: [
    '`1 <= num.length <= 1000`',
    '`num` consists of only digits.',
    '`num` does not have any leading zeros.',
  ],
  examples: [
    {
      input: 'num = "51230100"',
      output: '"512301"',
      explanation: 'The number 51230100 has two trailing zeros. Removing them gives "512301".',
    },
    {
      input: 'num = "123"',
      output: '"123"',
      explanation: 'No trailing zeros to remove.',
    },
    {
      input: 'num = "100"',
      output: '"1"',
      explanation: 'Both trailing zeros are removed.',
    },
  ],
  hints: [
    'Walk the string from right to left. Find the index of the last character that is not `\'0\'`, then take the substring up to and including that index.',
    'A clean one-liner: `num.replace(/0+$/, "")` — the regex `0+$` matches one or more zeros at the end of the string.',
    'Alternatively, convert to a number and back: `String(Number(num))`. This works for the given constraints but watch out for very large inputs where `Number` may lose precision — the regex approach is safer.',
  ],
  functionName: 'removeTrailingZeros',
  params: ['num'],
  starterCode: {
    javascript: `function removeTrailingZeros(num) {

}`,
    typescript: `function removeTrailingZeros(num: string): string {

}`,
    python: `def removeTrailingZeros(num):
    `,
  },
  visibleTests: [
    { args: ['51230100'], expected: '512301' },
    { args: ['123'], expected: '123' },
    { args: ['100'], expected: '1' },
  ],
  hiddenTests: [
    { args: ['51230100'], expected: '512301' },
    { args: ['123'], expected: '123' },
    { args: ['100'], expected: '1' },
    { args: ['1000000'], expected: '1' },
    { args: ['9000'], expected: '9' },
    { args: ['10'], expected: '1' },
    { args: ['500500'], expected: '5005' },
    { args: ['1230'], expected: '123' },
  ],
};
