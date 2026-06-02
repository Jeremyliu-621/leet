import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-to-base-2',
  title: 'Convert to Base -2',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'math'],
  description: `Given an integer \`n\`, return a binary string representing its representation in base \`-2\`.

**Note** that the returned string should not have leading zeros unless the string is \`"0"\`.`,
  constraints: [
    '`-10^9 <= n <= 10^9`',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '"110"',
      explanation: '(-2)^2 + (-2)^1 = 4 + (-2) = 2.',
    },
    {
      input: 'n = 3',
      output: '"111"',
      explanation: '(-2)^2 + (-2)^1 + (-2)^0 = 4 - 2 + 1 = 3.',
    },
    {
      input: 'n = 4',
      output: '"100"',
      explanation: '(-2)^2 = 4.',
    },
  ],
  hints: [
    'Use repeated division with base -2. The remainder at each step is the current bit (must be 0 or 1). Use `((n % 2) + 2) % 2` to ensure a non-negative remainder.',
    'After taking the remainder, set `n = (n - remainder) / (-2)` to get the next "digit". Repeat until n is 0.',
    'Build the binary string from LSB to MSB (prepend each bit), skipping a leading "0" unless the result is "0".',
  ],
  functionName: 'baseNeg2',
  params: ['n'],
  starterCode: {
    javascript: `function baseNeg2(n) {
  if (n === 0) return '0';
  let result = '';
  while (n !== 0) {
    const rem = ((n % 2) + 2) % 2;
    result = rem + result;
    n = (n - rem) / (-2);
  }
  return result;
}`,
    typescript: `function baseNeg2(n: number): string {
  if (n === 0) return '0';
  let result = '';
  while (n !== 0) {
    const rem = ((n % 2) + 2) % 2;
    result = rem + result;
    n = (n - rem) / (-2);
  }
  return result;
}`,
    python: `def baseNeg2(n):
    if n == 0:
        return '0'
    result = ''
    while n != 0:
        rem = ((n % 2) + 2) % 2
        result = str(rem) + result
        n = (n - rem) // (-2)
    return result`,
  },
  visibleTests: [
    { args: [2], expected: '110' },
    { args: [3], expected: '111' },
    { args: [4], expected: '100' },
  ],
  hiddenTests: [
    { args: [0], expected: '0' },
    { args: [1], expected: '1' },
    { args: [-3], expected: '1101' },
    { args: [7], expected: '11011' },
    { args: [-1], expected: '11' },
  ],
};
