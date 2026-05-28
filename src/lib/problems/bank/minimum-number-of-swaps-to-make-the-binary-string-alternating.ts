import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-swaps-to-make-the-binary-string-alternating',
  title: 'Minimum Number of Swaps to Make the Binary String Alternating',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a binary string \`s\`, return the **minimum** number of character swaps to make it **alternating**, or \`-1\` if it is impossible.

The string is called **alternating** if no two adjacent characters are equal. For example, the strings \`"010"\` and \`"1010"\` are alternating, while the string \`"0100"\` is not.

Any two characters may be swapped, even if they are not adjacent.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "111000"',
      output: '1',
      explanation:
        'Swap s[1] and s[4]: "101010". Only 1 swap needed. The target "010101" would require 2 swaps.',
    },
    {
      input: 's = "010"',
      output: '0',
      explanation: 'The string is already alternating.',
    },
    {
      input: 's = "1110"',
      output: '-1',
      explanation:
        'There are three 1s and one 0. For a length-4 alternating string, counts must differ by at most 1, but |3-1|=2 > 1, so it is impossible.',
    },
  ],
  hints: [
    'An alternating string of length n can only exist if the counts of 0s and 1s differ by at most 1. If the difference is greater than 1, return -1.',
    'There are two possible alternating patterns: starting with "0" (0,1,0,1,...) and starting with "1" (1,0,1,0,...). Only patterns where the majority character starts are valid when counts are unequal.',
    'For each valid target pattern, count the number of positions that do not match. The number of swaps needed is half the mismatch count (each swap fixes exactly two mismatched positions — one wrong 0 and one wrong 1).',
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: `function minSwaps(s) {

}`,
    typescript: "function minSwaps(s: string): number {\n\n}",

    python: `def minSwaps(s):
    pass`,
  },
  visibleTests: [
    { args: ['111000'], expected: 1 },
    { args: ['010'], expected: 0 },
    { args: ['1110'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['00'], expected: -1 },
    { args: ['111111'], expected: -1 },
    { args: ['01'], expected: 0 },
    { args: ['10'], expected: 0 },
    { args: ['0110'], expected: 1 },
  ],
};
