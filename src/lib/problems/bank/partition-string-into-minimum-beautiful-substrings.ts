import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-string-into-minimum-beautiful-substrings',
  title: 'Partition String Into Minimum Beautiful Substrings',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a binary string \`s\`, partition it into one or more **beautiful** substrings. Return *the **minimum** number of substrings in such a partition*, or \`-1\` if it is impossible.

A string is **beautiful** if:
- It doesn't contain leading zeros.
- It's the **binary representation** of a power of \`5\`.

Powers of 5 in binary: \`"1"\` (5⁰), \`"101"\` (5¹), \`"11001"\` (5²), \`"1111101"\` (5³), \`"1001110001"\` (5⁴), \`"110000110101"\` (5⁵), \`"11110100001001"\` (5⁶).`,
  constraints: [
    '1 <= s.length <= 15',
    's[i] is either "0" or "1".',
  ],
  examples: [
    {
      input: 's = "1011"',
      output: '2',
      explanation: '"1011" → "101" (5¹=5) + "1" (5⁰=1). Both are beautiful.',
    },
    {
      input: 's = "111"',
      output: '3',
      explanation: '"111" = 7, not a power of 5. Split into "1"+"1"+"1", each being 5⁰=1.',
    },
    {
      input: 's = "0"',
      output: '-1',
      explanation: '"0" has a leading zero and is not a power of 5. No valid partition.',
    },
  ],
  hints: [
    'Precompute the set of valid beautiful strings: powers of 5 in binary up to 2^15.',
    'DP: dp[i] = minimum partitions for s[0..i-1]. For each i, try all j < i: if s[j..i-1] is beautiful, dp[i] = min(dp[i], dp[j]+1).',
    'A string is beautiful iff it starts with "1" and its decimal value is a power of 5.',
  ],
  functionName: 'minimumBeautifulSubstrings',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumBeautifulSubstrings(s) {\n\n}\n',
    typescript: 'function minimumBeautifulSubstrings(s: string): number {\n\n}\n',
    python: 'def minimumBeautifulSubstrings(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['1011'], expected: 2 },
    { args: ['111'], expected: 3 },
    { args: ['0'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 1 },
    { args: ['101'], expected: 1 },
    { args: ['11001'], expected: 1 },
    { args: ['110'], expected: -1 },
    { args: ['101101'], expected: 2 },
    { args: ['11001101'], expected: 2 },
    { args: ['10'], expected: -1 },
  ],
};
