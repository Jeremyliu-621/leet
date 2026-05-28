import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-trailing-zeros-from-string',
  title: 'Remove Trailing Zeros From a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a positive integer \`num\` represented as a string, return the string without trailing zeros.`,
  constraints: [
    '1 <= num.length <= 1000',
    'num consists of only digits.',
    'num doesn\'t have any leading zeros.',
  ],
  examples: [
    {
      input: 'num = "51230100"',
      output: '"512301"',
      explanation: 'Remove the trailing two zeros.',
    },
    {
      input: 'num = "123"',
      output: '"123"',
      explanation: 'No trailing zeros to remove.',
    },
  ],
  hints: [
    'Find the last non-zero character and slice from the beginning to that index + 1.',
    'In JavaScript: use `num.replace(/0+$/, \'\')`. In Python: use `num.rstrip(\'0\')`.',
    'Be careful not to remove all characters — the input is guaranteed to have at least one non-zero digit.',
  ],
  functionName: 'removeTrailingZeros',
  params: ['num'],
  starterCode: {
    javascript: `function removeTrailingZeros(num) {

}`,
    typescript: "function removeTrailingZeros(num: string): string {\n\n}",

    python: `def removeTrailingZeros(num):
    pass`,
  },
  visibleTests: [
    { args: ['51230100'], expected: '512301' },
    { args: ['123'], expected: '123' },
  ],
  hiddenTests: [
    { args: ['1000'], expected: '1' },
    { args: ['10'], expected: '1' },
    { args: ['100000000'], expected: '1' },
    { args: ['90'], expected: '9' },
  ],
};
