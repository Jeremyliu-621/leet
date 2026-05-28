import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-balanced-string',
  title: 'Check Balanced String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`num\` consisting of digits only.

A string of digits is called **balanced** if the sum of the digits at **even** indices (0-indexed) equals the sum of the digits at **odd** indices.

Return \`true\` if \`num\` is balanced, otherwise return \`false\`.`,
  constraints: [
    '2 <= num.length <= 100',
    'num consists of digits only.',
  ],
  examples: [
    {
      input: 'num = "1221"',
      output: 'true',
      explanation: 'Even indices (0,2): 1+2=3. Odd indices (1,3): 2+1=3. Equal → true.',
    },
    {
      input: 'num = "1234"',
      output: 'false',
      explanation: 'Even indices (0,2): 1+3=4. Odd indices (1,3): 2+4=6. 4 ≠ 6 → false.',
    },
    {
      input: 'num = "14"',
      output: 'false',
      explanation: 'Even index sum: 1. Odd index sum: 4. 1 ≠ 4 → false.',
    },
  ],
  hints: [
    'Split digits into two groups by index parity: digits at even indices and digits at odd indices.',
    'Sum each group independently using a loop or reduce.',
    'Return whether the two sums are equal.',
  ],
  functionName: 'isBalanced',
  params: ['num'],
  starterCode: {
    javascript: `function isBalanced(num) {

}`,
    typescript: "function isBalanced(num: string): boolean {\n\n}",

    python: `def isBalanced(num):
    pass`,
  },
  visibleTests: [
    { args: ['1221'], expected: true },
    { args: ['1234'], expected: false },
    { args: ['14'], expected: false },
  ],
  hiddenTests: [
    { args: ['99'], expected: true },
    { args: ['11'], expected: true },
    { args: ['19'], expected: false },
    { args: ['231'], expected: true },
    { args: ['123456'], expected: false },
    { args: ['123321'], expected: true },
  ],
};
