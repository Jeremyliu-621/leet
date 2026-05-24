import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-odd-number-in-string',
  title: 'Largest Odd Number in String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`num\`, representing a large integer. Return the **largest-valued odd** integer (as a string) that is a **non-empty substring** of \`num\`, or an empty string \`""\` if no odd integer exists.

A **substring** is a contiguous sequence of characters within a string.

**Note:** The largest-valued odd substring is always a prefix of \`num\` — you just need to find the rightmost odd digit and return everything up to and including it.`,
  constraints: [
    '`1 <= num.length <= 10^5`',
    '`num` only consists of digits and does not contain any leading zeros.',
  ],
  examples: [
    {
      input: 'num = "52"',
      output: '"5"',
      explanation: 'The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.',
    },
    {
      input: 'num = "4206"',
      output: '""',
      explanation: 'There are no odd numbers in "4206".',
    },
    {
      input: 'num = "35427"',
      output: '"35427"',
      explanation: 'The last digit 7 is odd, so the entire string is the answer.',
    },
  ],
  hints: [
    'A number is odd if and only if its last digit is odd.',
    'Scan from right to left. The first odd digit you encounter gives you the answer: return the prefix of `num` ending at that index.',
  ],
  functionName: 'largestOddNumber',
  params: ['num'],
  starterCode: {
    javascript: `function largestOddNumber(num) {

}`,
    python: `def largestOddNumber(num):
    pass`,
  },
  visibleTests: [
    { args: ['52'], expected: '5' },
    { args: ['4206'], expected: '' },
    { args: ['35427'], expected: '35427' },
  ],
  hiddenTests: [
    { args: ['1'], expected: '1' },
    { args: ['2'], expected: '' },
    { args: ['10'], expected: '1' },
    { args: ['102'], expected: '1' },
    { args: ['12345'], expected: '12345' },
    { args: ['13'], expected: '13' },
    { args: ['24680'], expected: '' },
    { args: ['13579'], expected: '13579' },
  ],
};
