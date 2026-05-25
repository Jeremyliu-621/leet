import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-digits-string-convert',
  title: 'Sum of Digits of String After Convert',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` consisting of lowercase English letters, and an integer \`k\`.

**Convert** \`s\` to an integer by replacing each letter with its position in the alphabet (i.e., replace \`'a'\` with \`1\`, \`'b'\` with \`2\`, ..., \`'z'\` with \`26\`), and concatenating all the digits together.

Then, **transform** the integer by replacing it with the **sum of its digits**. Repeat this transformation exactly \`k\` times in total.

Return the resulting integer after performing the operations described above.`,
  constraints: [
    '1 <= s.length <= 100',
    '1 <= k <= 10',
    's consists of lowercase English letters.',
  ],
  examples: [
    { input: 's = "iiii", k = 1', output: '36', explanation: '"iiii" → "9999" → 9+9+9+9 = 36.' },
    { input: 's = "leetcode", k = 2', output: '6', explanation: '"leetcode" → "12 5 5 20 3 15 4 5" → sum=33 → 3+3=6.' },
    { input: 's = "zbax", k = 2', output: '8' },
  ],
  hints: [
    'First convert each character to its number string (a→"1", z→"26"), concatenate, then sum digits k times.',
  ],
  functionName: 'getLucky',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function getLucky(s, k) {\n  \n}\n',
    python: 'def getLucky(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['iiii', 1], expected: 36 },
    { args: ['leetcode', 2], expected: 6 },
    { args: ['zbax', 2], expected: 8 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['a', 2], expected: 1 },
    { args: ['z', 1], expected: 8 },
    { args: ['abc', 1], expected: 6 },
    { args: ['abcdefghij', 3], expected: 1 },
  ],
};
