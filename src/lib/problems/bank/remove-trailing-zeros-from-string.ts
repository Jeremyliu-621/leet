import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-trailing-zeros-from-string',
  title: 'Remove Trailing Zeros From a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a **positive** integer \`num\` represented as a string, return the string \`num\` with all trailing zeros removed.`,
  constraints: [
    '`1 <= num.length <= 1000`',
    '`num` consists of only digits.',
    '`num` does not have any leading zeros.',
    '`num` is guaranteed to represent a positive integer (no leading zeros).',
  ],
  examples: [
    {
      input: 'num = "51230100"',
      output: '"512301"',
      explanation: 'The number has 2 trailing zeros. Removing them gives "512301".',
    },
    {
      input: 'num = "123"',
      output: '"123"',
      explanation: 'There are no trailing zeros, so the string remains "123".',
    },
    {
      input: 'num = "1000"',
      output: '"1"',
      explanation: 'There are 3 trailing zeros. After removal only "1" remains.',
    },
  ],
  hints: [
    'Find the last non-zero character and return everything up to and including it.',
    'You can traverse from the end of the string and stop at the first non-zero character.',
    '```js\nfunction removeTrailingZeros(num) {\n  return num.replace(/0+$/, \'\');\n}\n```',
  ],
  functionName: 'removeTrailingZeros',
  params: ['num'],
  starterCode: {
    javascript: `function removeTrailingZeros(num) {

}`,
    typescript: 'function removeTrailingZeros(num: string): string {\n\n}',
    python: `def removeTrailingZeros(num):
    pass`,
  },
  visibleTests: [
    { args: ['51230100'], expected: '512301' },
    { args: ['123'], expected: '123' },
    { args: ['1000'], expected: '1' },
  ],
  hiddenTests: [
    { args: ['100'], expected: '1' },
    { args: ['10200'], expected: '102' },
    { args: ['9'], expected: '9' },
    { args: ['50'], expected: '5' },
    { args: ['10000000'], expected: '1' },
    { args: ['123456789'], expected: '123456789' },
    { args: ['10010'], expected: '1001' },
  ],
};
