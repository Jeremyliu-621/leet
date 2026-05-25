import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-string-length-after-removing-substrings',
  title: 'Minimum String Length After Removing Substrings',
  difficulty: 'easy',
  tags: ['stack', 'strings'],
  description: `You are given a string \`s\` consisting only of **uppercase** English letters.

You can apply the following operation any number of times:

- Remove any occurrence of one of the substrings \`"AB"\` or \`"CD"\` from \`s\`.

Return the **minimum** possible length of the resulting string that you can obtain.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of uppercase English letters.',
  ],
  examples: [
    {
      input: 's = "ABFCACDB"',
      output: '2',
      explanation: 'Remove "AB" → "FCACDB". Remove "CD" → "FCAB". Remove "AB" → "FC". Length is 2.',
    },
    {
      input: 's = "ACBBD"',
      output: '5',
      explanation: 'No "AB" or "CD" can be removed.',
    },
  ],
  hints: [
    'Think of processing characters one by one and maintaining a stack.',
    'Push each character. If the top of the stack and current character form "AB" or "CD", pop the top instead.',
    'The answer is the final stack size.',
  ],
  functionName: 'minLength',
  params: ['s'],
  starterCode: {
    javascript: 'function minLength(s) {\n\n}\n',
    python: 'def minLength(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['ABFCACDB'], expected: 2 },
    { args: ['ACBBD'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['AB'], expected: 0 },
    { args: ['ABCDABCD'], expected: 0 },
    { args: ['AABCDD'], expected: 2 },
    { args: ['AAAA'], expected: 4 },
  ],
};
