import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-array-fibonacci',
  title: 'Split Array into Fibonacci Sequence',
  difficulty: 'medium',
  tags: ['backtracking', 'strings'],
  description: `You are given a string of digits \`num\`. Return a Fibonacci-like sequence that:

- Consists of **at least three** numbers.
- Each number is obtained by adding the two preceding numbers.
- No number has leading zeros, except for the number 0 itself.
- Each number fits in a **32-bit** integer.

Return the list of integers, or an **empty list** if no valid sequence exists.`,
  constraints: ['1 <= num.length <= 200', 'num contains only digits.'],
  examples: [
    { input: 'num = "1101111"', output: '[11,0,11,11]', explanation: '11 + 0 = 11, 0 + 11 = 11. (Other valid answers exist.)' },
    { input: 'num = "112358130"', output: '[]', explanation: 'No valid Fibonacci-like sequence exists.' },
    { input: 'num = "0123"', output: '[]' },
  ],
  hints: [
    'Try all possible lengths for the first two numbers. Use backtracking to extend the sequence.',
    'Given the first two numbers a and b, the next number must equal a+b. Check if num starts with the string representation of a+b.',
    'If a number exceeds 2^31-1, prune the search.',
  ],
  functionName: 'splitIntoFibonacci',
  params: ['num'],
  starterCode: {
    javascript: 'function splitIntoFibonacci(num) {\n\n}\n',
    python: 'def splitIntoFibonacci(num):\n    pass\n',
  },
  visibleTests: [
    { args: ['123456579'], expected: [123, 456, 579] },
    { args: ['11235813'], expected: [1, 1, 2, 3, 5, 8, 13] },
    { args: ['112358130'], expected: [] },
  ],
  hiddenTests: [
    { args: ['123'], expected: [1, 2, 3] },
    { args: ['0'], expected: [] },
    { args: ['199100199'], expected: [1, 99, 100, 199] },
  ],
};
