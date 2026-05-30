import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-compression-count',
  title: 'String Compression Count',
  difficulty: 'easy',
  tags: ['strings', 'simulation', 'two-pointers'],
  description: `Given a string \`s\`, return the **length of its compressed representation** using run-length encoding.

The run-length encoding works as follows:
- Each run of consecutive identical characters is encoded as the character followed by its count **if the count is greater than 1** (a count of 1 is omitted).

For example, \`"aaabccc"\` becomes \`"a3bc3"\` (length 5).

Return the **length** of the compressed string — do not build the compressed string itself.`,
  constraints: [
    '`1 <= s.length <= 10^4`',
    '`s` consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aabccc"',
      output: '5',
      explanation: '"aabccc" → "a2bc3", which has length 5.',
    },
    {
      input: 's = "abcd"',
      output: '4',
      explanation: 'No repeated characters — compression yields "abcd", length 4.',
    },
    {
      input: 's = "aaa"',
      output: '2',
      explanation: '"aaa" → "a3", length 2.',
    },
  ],
  hints: [
    'Walk through the string tracking the current character and its run length.',
    'When a run ends, add 1 (for the character) plus the number of digits in the count (if count > 1).',
    'The number of digits in a positive integer n is Math.floor(Math.log10(n)) + 1, or equivalently String(n).length.',
  ],
  functionName: 'compressedLength',
  params: ['s'],
  starterCode: {
    javascript: `function compressedLength(s) {

}`,
    typescript: `function compressedLength(s: string): number {

}`,
    python: `def compressedLength(s):
    pass`,
  },
  visibleTests: [
    { args: ['aabccc'], expected: 5 },
    { args: ['abcd'], expected: 4 },
    { args: ['aaa'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaabbbccc'], expected: 6 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['aaaaaaaaaaa'], expected: 3 },
    { args: ['abbbbbbbbbba'], expected: 5 },
    { args: ['z'], expected: 1 },
  ],
};
