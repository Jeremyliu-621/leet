import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-odd-number-in-string',
  title: 'Largest Odd Number in String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`num\`, representing a large integer. Return the **largest-valued odd** integer (as a string) that is a **non-empty substring** of \`num\`, or an empty string \`""\` if no odd integer exists.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= num.length <= 10^5',
    'num consists only of digits 0-9 and does not have leading zeros.',
  ],
  examples: [
    {
      input: 'num = "52"',
      output: '"5"',
      explanation: 'The non-empty substrings are "5", "2", and "52". "5" is the only odd number, so it is the answer.',
    },
    {
      input: 'num = "4206"',
      output: '""',
      explanation: 'All digits are even, so no odd integer exists as a substring.',
    },
    {
      input: 'num = "35427"',
      output: '"35427"',
      explanation: 'The last digit 7 is odd, so the entire string "35427" is the largest odd substring.',
    },
  ],
  hints: [
    'The largest odd substring must start from index 0 (otherwise we could always extend it leftward to get a larger value).',
    'So the problem reduces to finding the rightmost odd digit: return num[0..i] where i is the index of the last odd digit.',
    'Iterate from right to left and return the prefix ending at the first odd digit you find.',
  ],
  functionName: 'largestOddNumber',
  params: ['num'],
  starterCode: {
    javascript: 'function largestOddNumber(num) {\n\n}\n',
    typescript: 'function largestOddNumber(num: string): string {\n\n}',
    python: 'def largestOddNumber(num):\n    pass\n',
  },
  visibleTests: [
    { args: ['52'], expected: '5' },
    { args: ['4206'], expected: '' },
  ],
  hiddenTests: [
    { args: ['35427'], expected: '35427' },
    { args: ['1'], expected: '1' },
    { args: ['2'], expected: '' },
    { args: ['100'], expected: '1' },
    { args: ['13'], expected: '13' },
    { args: ['24680'], expected: '' },
  ],
};
