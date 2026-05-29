import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-all-characters-equal',
  title: 'Minimum Operations to Make All Characters Equal',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a binary string \`s\`.

In one operation, you can choose any position \`i\` in the string and **flip** all characters from position \`0\` to \`i\` (inclusive), or all characters from position \`i\` to \`s.length - 1\` (inclusive).

Return the **minimum number of operations** needed to make all characters in \`s\` equal.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is either `\'0\'` or `\'1\'`',
  ],
  examples: [
    {
      input: 's = "0110"',
      output: '2',
      explanation: 'One approach: flip [0,1] to get "1010", then flip [2,3] to get "1001"... actually the minimum is 2 — flip at position 1 then position 2.',
    },
    {
      input: 's = "01"',
      output: '1',
      explanation: 'Flip position 0 (left half) to get "11", using 1 operation.',
    },
    {
      input: 's = "1"',
      output: '0',
      explanation: 'Already all equal.',
    },
  ],
  hints: [
    'Think about what an operation actually does — flipping a prefix or suffix never changes where the "transition boundaries" (positions where consecutive characters differ) are, except it removes exactly one boundary.',
    'Each transition boundary (position i where s[i] !== s[i+1]) requires at least one operation to remove.',
    'The minimum number of operations equals the number of transition boundaries in the string: count positions i where s[i] !== s[i+1].',
  ],
  functionName: 'minimumOperations',
  params: ['s'],
  starterCode: {
    javascript: `function minimumOperations(s) {

}`,
    typescript: `function minimumOperations(s: string): number {

}`,
    python: `def minimumOperations(s):
    pass`,
  },
  visibleTests: [
    { args: ['0110'], expected: 2 },
    { args: ['01'], expected: 1 },
    { args: ['1'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['010'], expected: 2 },
    { args: ['0000'], expected: 0 },
    { args: ['0101'], expected: 3 },
    { args: ['11001'], expected: 2 },
    { args: ['000111'], expected: 1 },
    { args: ['010101'], expected: 5 },
    { args: ['1111111'], expected: 0 },
  ],
};
