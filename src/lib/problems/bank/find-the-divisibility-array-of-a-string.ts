import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-divisibility-array-of-a-string',
  title: 'Find the Divisibility Array of a String',
  difficulty: 'medium',
  tags: ['strings', 'math', 'arrays'],
  description: `You are given a **0-indexed** string \`word\` of length \`n\` consisting of digits, and a positive integer \`m\`.

The **divisibility array** \`div\` of \`word\` is an integer array of length \`n\` such that:

- \`div[i] = 1\` if the **numeric value** of \`word[0..i]\` is divisible by \`m\`, or
- \`div[i] = 0\` otherwise.

Return the divisibility array of \`word\`.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`word.length == n`',
    '`word` consists of digits only.',
    '`1 <= m <= 10^9`',
  ],
  examples: [
    {
      input: 'word = "998244353", m = 3',
      output: '[1,1,0,0,0,1,1,0,0]',
      explanation: '"9" = 9, divisible by 3 → 1. "99" = 99, divisible by 3 → 1. "998" = 998, 998%3=2 → 0. And so on.',
    },
    {
      input: 'word = "1010", m = 10',
      output: '[0,1,0,1]',
      explanation: '"1" = 1 → 0. "10" = 10, divisible by 10 → 1. "101" = 101 → 0. "1010" = 1010, divisible by 10 → 1.',
    },
  ],
  hints: [
    'You cannot compute the numeric value directly — it can have up to 10^5 digits. Instead, track only the running **remainder** modulo `m`.',
    'When you extend the number by appending digit `d`, the new value equals `old_value * 10 + d`. So the new remainder is `(prev_mod * 10 + d) % m`.',
    'If `prev_mod * 10 + d` might overflow a 32-bit integer (it won\'t in JavaScript since numbers are 64-bit floats, but be careful in other languages), use BigInt or equivalent.',
  ],
  functionName: 'findDivisibilityArray',
  params: ['word', 'm'],
  starterCode: {
    javascript: `function findDivisibilityArray(word, m) {

}`,
    typescript: `function findDivisibilityArray(word: string, m: number): number[] {

}`,
    python: `def findDivisibilityArray(word, m):
    pass`,
  },
  visibleTests: [
    {
      args: ['998244353', 3],
      expected: [1,1,0,0,0,1,1,0,0],
    },
    {
      args: ['1010', 10],
      expected: [0,1,0,1],
    },
  ],
  hiddenTests: [
    {
      args: ['0', 1],
      expected: [1],
    },
    {
      args: ['123456789', 9],
      expected: [0,0,0,0,0,0,0,1,1],
    },
    {
      args: ['111111111', 111111111],
      expected: [0,0,0,0,0,0,0,0,1],
    },
    {
      args: ['100', 100],
      expected: [0,0,1],
    },
    {
      args: ['999', 27],
      expected: [0,0,1],
    },
    {
      args: ['246810', 2],
      expected: [1,1,1,1,0,1],
    },
  ],
};
