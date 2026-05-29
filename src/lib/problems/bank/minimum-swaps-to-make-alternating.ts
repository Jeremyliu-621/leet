import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-make-alternating',
  title: 'Minimum Number of Swaps to Make the Binary String Alternating',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a binary string \`s\`, return the **minimum number of character swaps** to make it **alternating** (no two adjacent characters are equal). If it is impossible, return \`-1\`.

A string is **alternating** if no two adjacent characters are equal. For example, \`"010"\` and \`"1010"\` are alternating, while \`"0100"\` is not.

Any two characters may be swapped, even if they are not adjacent.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s[i]` is either `\'0\'` or `\'1\'`.',
  ],
  examples: [
    {
      input: 's = "111000"',
      output: '1',
      explanation: 'One swap turns it into "101010".',
    },
    {
      input: 's = "010"',
      output: '0',
      explanation: 'The string is already alternating.',
    },
    {
      input: 's = "1110"',
      output: '-1',
      explanation: 'There are 3 ones and 1 zero. For an alternating string the counts must differ by at most 1, but |3-1|=2, so it is impossible.',
    },
  ],
  hints: [
    'Count the number of `0`s and `1`s. If `|count0 - count1| > 1`, return `-1` immediately.',
    'For the remaining cases there are at most two valid alternating patterns: starting with `\'0\'` or starting with `\'1\'`. For each valid pattern, count positions that do not match.',
    'Each swap fixes exactly two mismatches (one `\'0\'` in a `\'1\'`-slot swaps with one `\'1\'` in a `\'0\'`-slot). So the number of swaps needed = mismatches / 2.',
  ],
  functionName: 'minSwaps2',
  params: ['s'],
  starterCode: {
    javascript: `function minSwaps2(s) {

}`,
    typescript: 'function minSwaps2(s: string): number {\n\n}',
    python: `def minSwaps2(s):
    pass`,
  },
  visibleTests: [
    { args: ['111000'], expected: 1 },
    { args: ['010'], expected: 0 },
    { args: ['1110'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 0 },
    { args: ['10'], expected: 0 },
    { args: ['01100110'], expected: 2 },
    { args: ['11111'], expected: -1 },
  ],
};
