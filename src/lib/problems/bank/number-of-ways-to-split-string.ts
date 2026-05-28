import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-split-string',
  title: 'Number of Ways to Split a String',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a binary string \`s\`, you can split \`s\` into 3 **non-empty** substrings \`s1\`, \`s2\`, and \`s3\` where \`s1 + s2 + s3 = s\`.

Return the number of ways \`s\` can be split such that the number of \`'1'\` characters is the same in \`s1\`, \`s2\`, and \`s3\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  examples: [
    {
      input: 's = "10101"',
      output: '4',
      explanation:
        'Valid splits: "1|0|101", "1|01|01", "10|1|01", "10|10|1" — each part has exactly one \'1\'.',
    },
    {
      input: 's = "1001"',
      output: '0',
      explanation: 'The string has 2 ones, not divisible by 3.',
    },
    {
      input: 's = "0000"',
      output: '3',
      explanation:
        'No ones — any split into 3 non-empty parts works. For length 4: "0|0|00", "0|00|0", "00|0|0" = 3 ways.',
    },
  ],
  constraints: [
    "3 <= s.length <= 10^5",
    "s[i] is either '0' or '1'.",
  ],
  hints: [
    'Count total ones. If total % 3 != 0, immediately return 0.',
    'If total is 0, every character is \'0\'. Count all ways to place 2 dividers in n-1 gaps: C(n-1, 2) = (n-1)*(n-2)/2 mod 10^9+7.',
    'Otherwise, each third must contain exactly total/3 ones. Find the positions of the (k)-th and (k+1)-th ones (0-indexed among all ones) to count how many ways to place the first divider.',
    'The first divider can fall in the zero-gap between the k-th and (k+1)-th one. Multiply gap1 × gap2 for the answer.',
  ],
  functionName: 'numWays',
  params: ['s'],
  starterCode: {
    javascript: 'function numWays(s) {\n  \n}\n',
    python: 'def numWays(s):\n    ',
  },
  visibleTests: [
    { args: ['10101'], expected: 4 },
    { args: ['1001'], expected: 0 },
    { args: ['0000'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['111'], expected: 1 },
    { args: ['000'], expected: 1 },
    { args: ['110100110'], expected: 0 },
    { args: ['100010001'], expected: 16 },
    { args: ['111111'], expected: 1 },
    { args: ['0010010010'], expected: 9 },
    { args: ['011000111'], expected: 0 },
    { args: ['100100001'], expected: 15 },
  ],
};
