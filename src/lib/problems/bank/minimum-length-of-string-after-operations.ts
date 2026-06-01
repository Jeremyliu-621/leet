import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-length-of-string-after-operations',
  title: 'Minimum Length of String After Operations',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`.

You can perform the following operation **any number of times**:
- Choose an index \`i\` in \`s\` such that \`s[i]\` also appears at **some index to the left** of \`i\` **and** at **some index to the right** of \`i\`. Delete the **closest** occurrence of \`s[i]\` to the **left** of \`i\` and the **closest** occurrence of \`s[i]\` to the **right** of \`i\`.

(The character at index \`i\` itself is **not** deleted — only its two nearest same-character neighbours are.)

Return the **minimum possible length** of the resulting string after any number of such operations.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abaaa"',
      output: '3',
      explanation: 'In "abaaa", choose index 3 (\'a\'): delete the nearest \'a\' to its left (index 2) and the nearest \'a\' to its right (index 4), giving "aba". No further operations are possible. Length = 3.',
    },
    {
      input: 's = "aaa"',
      output: '1',
      explanation: 'Choose index 1 (\'a\'): delete index 0 and index 2, leaving "a". Length = 1.',
    },
    {
      input: 's = "abbc"',
      output: '4',
      explanation: 'No character appears with same-character neighbours on both sides, so no operations are possible. Length = 4.',
    },
  ],
  hints: [
    'The operation always removes exactly 2 copies of a character (the two closest neighbours of the chosen position). So for a character with frequency `f`, you can keep subtracting 2 from `f` as long as `f >= 3`.',
    'For each character, the minimum remaining count is: 1 if the original frequency is odd, 2 if it is even. (A single remaining copy has no neighbours; two copies have no "middle" to choose.)',
    'The answer is the sum over all distinct characters of `(f % 2 === 0 ? 2 : 1)` — regardless of the actual positions.',
  ],
  functionName: 'minimumLength',
  params: ['s'],
  starterCode: {
    javascript: `function minimumLength(s) {\n\n}`,
    typescript: `function minimumLength(s: string): number {

}`,
    python: `def minimumLength(s: str) -> int:\n    pass`,
  },
  visibleTests: [
    { args: ['abaaa'], expected: 3 },
    { args: ['aaa'], expected: 1 },
    { args: ['abbc'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 2 },
    { args: ['aaaa'], expected: 2 },
    // freq(a)=3→1, freq(b)=1→1. Total=2.
    { args: ['aaab'], expected: 2 },
    { args: ['aaabbb'], expected: 2 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['aaabbbccc'], expected: 3 },
    { args: ['abcde'], expected: 5 },
    { args: ['aaaaaa'], expected: 2 },
    // freq(a)=7→1, freq(b)=1→1. Total=2.
    { args: ['aaaaaaab'], expected: 2 },
    { args: ['zzzzz'], expected: 1 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 26 },
  ],
};
