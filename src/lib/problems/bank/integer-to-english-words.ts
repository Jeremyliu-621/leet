import type { Problem } from '../types';

export const problem: Problem = {
  id: 'integer-to-english-words',
  title: 'Integer to English Words',
  difficulty: 'hard',
  tags: ['math', 'strings'],
  description: `Convert a non-negative integer \`num\` to its English words representation.

**Examples:**
- \`123\` → \`"One Hundred Twenty Three"\`
- \`12345\` → \`"Twelve Thousand Three Hundred Forty Five"\`
- \`0\` → \`"Zero"\`

Numbers are space-separated. There is no "and" between hundreds and the rest (e.g., "One Hundred Twenty", not "One Hundred and Twenty").`,
  constraints: [
    '0 <= num <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'num = 123',
      output: '"One Hundred Twenty Three"',
      explanation: '100 + 20 + 3.',
    },
    {
      input: 'num = 12345',
      output: '"Twelve Thousand Three Hundred Forty Five"',
      explanation: '12*1000 + 3*100 + 45.',
    },
    {
      input: 'num = 1000010',
      output: '"One Million Ten"',
      explanation: '1*1000000 + 10.',
    },
    {
      input: 'num = 0',
      output: '"Zero"',
      explanation: 'Special case: zero.',
    },
  ],
  hints: [
    'Break the number into groups of 3 digits: billions, millions, thousands, and hundreds. Convert each chunk to words, then append the appropriate scale word.',
    'Define: ones=[\'One\',\'Two\',...,\'Nineteen\'] (indices 1–19), tens=[\'Twenty\',\'Thirty\',...,\'Ninety\'] (indices 2–9). A helper converts a 3-digit number ≤ 999: hundreds digit, then remainder (split at 20 for teens vs tens+ones).',
    'Chunk the number: for each of [1e9,\'Billion\'],[1e6,\'Million\'],[1e3,\'Thousand\'],[1,\'\'] — if num >= scale, convert Math.floor(num/scale) and append the scale label, then mod to get the remainder.',
  ],
  functionName: 'numberToWords',
  params: ['num'],
  starterCode: {
    javascript: 'function numberToWords(num) {\n  \n}',
    python: 'def numberToWords(num: int) -> str:\n    pass',
  },
  visibleTests: [
    { args: [123], expected: 'One Hundred Twenty Three' },
    { args: [12345], expected: 'Twelve Thousand Three Hundred Forty Five' },
    { args: [1000010], expected: 'One Million Ten' },
    { args: [0], expected: 'Zero' },
  ],
  hiddenTests: [
    { args: [1000000], expected: 'One Million' },
    { args: [2147483647], expected: 'Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven' },
    { args: [1000000000], expected: 'One Billion' },
  ],
};
