import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-the-substring-for-balanced-string',
  title: 'Replace the Substring for Balanced String',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers', 'sliding-window'],
  description: `You are given a string \`s\` of length \`n\` containing only four kinds of characters: \`'Q'\`, \`'W'\`, \`'E'\`, and \`'R'\`.

A string is said to be **balanced** if each of its characters appears \`n / 4\` times where \`n\` is the length of the string.

Return *the minimum length of the substring that can be replaced with **any** other string of the same length to make* \`s\` ***balanced***. If the string is already balanced, return \`0\`.`,
  constraints: [
    'n == s.length',
    '4 <= n <= 10^5',
    'n is a multiple of 4',
    "s consists of only 'Q', 'W', 'E', and 'R'.",
  ],
  examples: [
    {
      input: 's = "QWER"',
      output: '0',
      explanation: 's is already balanced.',
    },
    {
      input: 's = "QQWE"',
      output: '1',
      explanation: 'We need to replace a \'Q\' to \'R\', so that "RQWE" (or "QRWE") is balanced.',
    },
    {
      input: 's = "QQQW"',
      output: '2',
      explanation: 'We can replace the first "QQ" to make "RRQW".',
    },
  ],
  hints: [
    'Use a sliding window. A window [l, r] is valid if, in the characters outside the window, each character appears at most n/4 times.',
    'Count total frequencies. As you expand the window to include a character, subtract it from the outside count.',
    'The window is valid when all outside counts are ≤ n/4. Minimize the window size.',
  ],
  functionName: 'balancedString',
  params: ['s'],
  starterCode: {
    javascript: `function balancedString(s) {\n\n}`,
    python: `def balancedString(s: str) -> int:\n    pass`,
    typescript: `function balancedString(s: string): number {\n\n}`,
  },
  visibleTests: [
    { args: ['QWER'], expected: 0 },
    { args: ['QQWE'], expected: 1 },
    { args: ['QQQW'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['QQQQ'], expected: 3 },
    { args: ['WQWRQQQW'], expected: 3 },
    { args: ['QQRR'], expected: 2 },
    { args: ['QWQR'], expected: 1 },
    { args: ['RRRR'], expected: 3 },
    { args: ['QQWWEERR'], expected: 0 },
    { args: ['QQQWWWEE'], expected: 2 },
  ],
};
