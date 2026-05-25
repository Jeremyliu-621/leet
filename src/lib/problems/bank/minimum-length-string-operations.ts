import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-length-string-operations',
  title: 'Minimum String Length After Removing Substrings',
  difficulty: 'easy',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\` consisting only of **uppercase** English letters.

You can apply the following operation any number of times:
- Choose a **non-empty** substring that is either \`"AB"\` or \`"CD"\` and remove it from \`s\`.

Return the **minimum** possible length of the resulting string.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of uppercase English letters.',
  ],
  examples: [
    { input: 's = "ABFCACDB"', output: '2', explanation: 'Remove "AB" → "FCACDB"; remove "CD" → "FCAB"; remove "AB" → "FC". Length 2.' },
    { input: 's = "ACBBD"', output: '5', explanation: 'No "AB" or "CD" substrings exist.' },
  ],
  hints: [
    'Use a stack. Push characters; when the top of the stack and the current char form "AB" or "CD", pop and continue.',
  ],
  functionName: 'minLength',
  params: ['s'],
  starterCode: {
    javascript: 'function minLength(s) {\n  \n}\n',
    python: 'def minLength(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['ABFCACDB'], expected: 2 },
    { args: ['ACBBD'], expected: 5 },
    { args: ['AB'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['CD'], expected: 0 },
    { args: ['ABCD'], expected: 0 },
    { args: ['AABB'], expected: 0 },
    { args: ['CDAB'], expected: 0 },
    { args: ['ABCDE'], expected: 1 },
  ],
};
