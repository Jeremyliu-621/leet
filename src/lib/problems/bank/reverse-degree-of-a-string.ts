import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-degree-of-a-string',
  title: 'Reverse Degree of a String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given a string \`s\`, return its **reverse degree**.

The **reverse degree** is calculated as follows: for each character in \`s\` at position \`i\` (1-indexed), add \`i * (26 - (alphabet_position(c) - 1))\` to the total, where \`alphabet_position(c)\` is the 1-indexed position of character \`c\` in the alphabet (e.g. \`'a' = 1\`, \`'z' = 26\`).

In other words, the **reverse weight** of each character is \`27 - alphabet_position(c)\` (so \`'a'\` has weight 26 and \`'z'\` has weight 1), and you sum \`position * reverseWeight\` over all characters.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s` consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "abc"',
      output: '148',
      explanation:
        'Position 1: \'a\' reverse weight = 26, contribution = 1*26 = 26. Position 2: \'b\' reverse weight = 25, contribution = 2*25 = 50. Position 3: \'c\' reverse weight = 24, contribution = 3*24 = 72. Total = 26+50+72 = 148.',
    },
    {
      input: 's = "z"',
      output: '1',
      explanation: '\'z\' at position 1 has reverse weight 1. 1*1 = 1.',
    },
  ],
  hints: [
    'Iterate over each character with its 1-based index. For character `c`, compute `reverseWeight = 26 - (charCode(c) - charCode(\'a\'))`, which equals 26 for \'a\' and 1 for \'z\'.',
    'Multiply each character\'s reverse weight by its 1-based position in the string and accumulate.',
    'The total is `sum of (i+1) * (26 - (s.charCodeAt(i) - 97))` for `i` from 0 to `s.length - 1`.',
  ],
  functionName: 'reverseDegree',
  params: ['s'],
  starterCode: {
    javascript: `function reverseDegree(s) {

}`,
    typescript: `function reverseDegree(s: string): number {

}`,
    python: `def reverseDegree(s):
    pass`,
  },
  visibleTests: [
    { args: ['abc'], expected: 148 },
    { args: ['z'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 26 },
    { args: ['az'], expected: 26 + 2 },
    { args: ['za'], expected: 1 + 52 },
    { args: ['zz'], expected: 1 + 2 },
    { args: ['aa'], expected: 26 + 52 },
    { args: ['abcz'], expected: 26 + 50 + 72 + 4 },
    { args: ['mno'], expected: 1 * 14 + 2 * 13 + 3 * 12 },
  ],
};
