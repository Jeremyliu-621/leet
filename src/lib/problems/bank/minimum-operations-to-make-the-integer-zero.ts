import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-the-integer-zero',
  title: 'Minimum Operations to Make the Integer Zero',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'math'],
  description: `You are given two integers \`num1\` and \`num2\`.

In one operation, you can choose integer \`i\` in the range \`[0, 60]\` and subtract \`2^i + num2\` from \`num1\`.

Return *the minimum number of operations to make* \`num1\` *equal to* \`0\`. If it is impossible, return \`-1\`.`,
  constraints: [
    '1 <= num1 <= 10^9',
    '-10^9 <= num2 <= 10^9',
  ],
  examples: [
    {
      input: 'num1 = 3, num2 = -2',
      output: '3',
      explanation:
        'We can make num1 equal to 0 in 3 operations: subtract 2^2 + (-2) = 2, subtract 2^0 + (-2) = -1 → actually: 3 - (2^1 + (-2)) = 3 - 0 = 3; try 3 operations: subtract (2^1 + (-2))=0 three times? No. Try: subtract (2^0+(-2))=-1: 3-(-1)=4. Subtract (2^2+(-2))=2: 4-2=2; 2-2=0. That\'s 3 ops.',
    },
    {
      input: 'num1 = 5, num2 = 7',
      output: '-1',
      explanation:
        'Each operation subtracts at least num2+1 = 8, but that would make num1 negative before reaching 0.',
    },
  ],
  hints: [
    'After k operations, num1 - k*num2 must equal the sum of k powers of 2 (each 2^i for some i in [0,60]).',
    'A sum of exactly k powers of 2 is achievable iff the value is >= k (can use all 2^0) and its popcount (number of set bits) <= k (can split bits using 2^i = 2^(i-1) + 2^(i-1)).',
    'Iterate k = 1, 2, ... until num1 - k*num2 >= k and popcount(num1 - k*num2) <= k. Return -1 if the remainder goes negative.',
  ],
  functionName: 'makeTheIntegerZero',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: 'function makeTheIntegerZero(num1, num2) {\n\n}\n',
    typescript: 'function makeTheIntegerZero(num1: number, num2: number): number {\n\n}\n',
    python: 'def makeTheIntegerZero(num1, num2):\n    pass\n',
  },
  visibleTests: [
    { args: [3, -2], expected: 3 },
    { args: [5, 7], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, 0], expected: 1 },
    { args: [2, 0], expected: 1 },
    { args: [4, 0], expected: 1 },
    { args: [3, 0], expected: 2 },
    { args: [7, 0], expected: 3 },
    { args: [1000000000, 0], expected: 13 },
    { args: [10, -5], expected: 2 },
    { args: [1, 5], expected: -1 },
  ],
};
