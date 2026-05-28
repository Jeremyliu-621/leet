import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-make-string-empty',
  title: 'Apply Operations to Make String Empty',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`.

Consider performing the following operation until \`s\` becomes empty:
- For every alphabet character from \`'a'\` to \`'z'\`, remove the first occurrence of that character in \`s\` (if it exists).

Return the value of the string \`s\` **just before** applying the **last** operation.

For example, consider \`s = "abcd"\`:
- First operation: "abcd" → "" (remove a, b, c, d in one pass). Just before this (last) operation, s = "abcd".`,
  constraints: [
    '1 <= s.length <= 5 * 10^5',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aabcbbca"',
      output: '"ba"',
      explanation: 'We perform the following operations:\n- Operation 1: "aabcbbca" → "abbca" → "abca" → "aba" → "ba" (remove first a,b,c,c). Actually, one full a→z pass removes one of each present char.\n\nLet\'s trace properly: freq(a)=3,b=3,c=1. Max freq=3. Last operation removes chars at their max-frequency positions. Result is chars whose frequency equals the max, in their last-occurrence order.',
    },
    {
      input: 's = "abcd"',
      output: '"abcd"',
      explanation: 'Each character appears once. The last (and only) operation removes all of them. Just before: "abcd".',
    },
  ],
  hints: [
    'Count the frequency of each character.',
    'The last round processes characters that appear the maximum number of times.',
    'Among those max-frequency characters, output them in the order of their last occurrence in s.',
  ],
  functionName: 'lastNonEmptyString',
  params: ['s'],
  starterCode: {
    javascript: `function lastNonEmptyString(s) {\n\n}`,
    python: `def lastNonEmptyString(s: str) -> str:\n    pass`,
    typescript: `function lastNonEmptyString(s: string): string {\n\n}`,
  },
  visibleTests: [
    { args: ['aabcbbca'], expected: 'ba' },
    { args: ['abcd'], expected: 'abcd' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aa'], expected: 'a' },
    { args: ['aabc'], expected: 'a' },
    { args: ['abcabc'], expected: 'abc' },
    { args: ['zzzaaa'], expected: 'za' },
    { args: ['abba'], expected: 'ba' },
  ],
};
