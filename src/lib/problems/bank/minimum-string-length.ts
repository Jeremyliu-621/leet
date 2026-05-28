import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-string-length',
  title: 'Minimum String Length After Removing Substrings',
  difficulty: 'easy',
  tags: ['stack', 'strings'],
  description: `You are given a string \`s\` consisting only of **uppercase** English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings \`"AB"\` or \`"CD"\` from \`s\`.

Return *the **minimum** possible length of the resulting string that you can obtain.*

**Note** that the string concatenates after removing the substring and could produce new \`"AB"\` or \`"CD"\` substrings.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of uppercase English letters.',
  ],
  examples: [
    {
      input: 's = "ABFCACDB"',
      output: '2',
      explanation: 'Remove "AB" → "FCACDB", remove "CD" → "FCAB", remove "AB" → "FC". Length = 2.',
    },
    {
      input: 's = "ACBBD"',
      output: '5',
      explanation: 'No "AB" or "CD" substrings exist.',
    },
  ],
  hints: [
    'Use a stack. For each character, check if the top of the stack combined with the current character forms "AB" or "CD".',
    'If so, pop the stack. Otherwise push the character.',
    'The answer is the length of the remaining stack.',
  ],
  functionName: 'minLength',
  params: ['s'],
  starterCode: {
    javascript: `function minLength(s) {

}`,
    typescript: "function minLength(s: string): number {\n\n}",

    python: `def minLength(s):
    pass`,
  },
  visibleTests: [
    { args: ['ABFCACDB'], expected: 2 },
    { args: ['ACBBD'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['A'], expected: 1 },
    { args: ['AB'], expected: 0 },
    { args: ['CDAB'], expected: 0 },
    { args: ['AABB'], expected: 0 },
    { args: ['AABCCBD'], expected: 5 },
  ],
};
