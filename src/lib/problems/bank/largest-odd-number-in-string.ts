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
    'num consists of only digits and does not contain leading zeros.',
  ],
  examples: [
    { input: 'num = "52"', output: '"5"', explanation: 'The only non-empty substrings are "5", "2", "52". "5" is odd.' },
    { input: 'num = "4206"', output: '""', explanation: 'No odd digits exist in the string.' },
    { input: 'num = "35427"', output: '"35427"', explanation: 'The entire number is odd.' },
  ],
  hints: [
    'Scan from right to left. The first odd digit you find gives you the largest odd substring (num[0..i]).',
  ],
  functionName: 'largestOddNumber',
  params: ['num'],
  starterCode: {
    javascript: 'function largestOddNumber(num) {\n  \n}\n',
    python: 'def largestOddNumber(num):\n    pass\n',
  },
  visibleTests: [
    { args: ['52'], expected: '5' },
    { args: ['4206'], expected: '' },
    { args: ['35427'], expected: '35427' },
  ],
  hiddenTests: [
    { args: ['1'], expected: '1' },
    { args: ['2'], expected: '' },
    { args: ['102'], expected: '1' },
    { args: ['2460'], expected: '' },
    { args: ['13579'], expected: '13579' },
  ],
};
