import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-make-strings-equal',
  title: 'Minimum Swaps to Make Strings Equal',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given two strings \`s1\` and \`s2\` of equal length, each consisting only of \`'x'\` and \`'y'\`. You can swap the characters at position \`i\` in \`s1\` and position \`j\` in \`s2\` in one move.

Return the **minimum number of swaps** to make \`s1\` and \`s2\` equal, or \`-1\` if it is impossible.`,
  constraints: [
    '`1 <= s1.length == s2.length <= 1000`',
    '`s1[i]` and `s2[i]` are either `\'x\'` or `\'y\'`.',
  ],
  examples: [
    {
      input: 's1 = "xx", s2 = "yy"',
      output: '1',
      explanation: 'Swap s1[0] with s2[1]: s1 = "xy", s2 = "yx". Now swap s1[0] with s2[0]... actually one swap of s1[0]↔s2[0] gives s1="yx",s2="xy" — still unequal. Swap s1[0]↔s2[1] gives s1="yx",s2="yx" — equal. 1 swap.',
    },
    {
      input: 's1 = "xy", s2 = "yx"',
      output: '2',
    },
    {
      input: 's1 = "xx", s2 = "xy"',
      output: '-1',
      explanation: 'Only one mismatch position — impossible to fix.',
    },
  ],
  hints: [
    'Focus on positions where `s1[i] != s2[i]`. Positions where they match never need attention.',
    'Mismatches come in two types: `s1[i]="x", s2[i]="y"` (type XY) and `s1[i]="y", s2[i]="x"` (type YX). Count each type. If their total is odd, return -1.',
    'Two XY mismatches can be fixed with 1 swap; two YX mismatches can also be fixed with 1 swap. One XY + one YX requires 2 swaps. So the answer is `floor(xy/2) + floor(yx/2) + 2*(xy%2)`.',
  ],
  functionName: 'minimumSwap',
  params: ['s1', 's2'],
  starterCode: {
    javascript: `function minimumSwap(s1, s2) {

}`,
    typescript: `function minimumSwap(s1: string, s2: string): number {

}`,
    python: `def minimumSwap(s1, s2):
    pass`,
  },
  visibleTests: [
    { args: ['xx', 'yy'], expected: 1 },
    { args: ['xy', 'yx'], expected: 2 },
    { args: ['xx', 'xy'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['x', 'y'], expected: -1 },
    { args: ['x', 'x'], expected: 0 },
    { args: ['xxyyxyyx', 'yyyxxxxy'], expected: 4 },
    { args: ['xxyy', 'yyxx'], expected: 2 },
    { args: ['xyxy', 'yxyx'], expected: 2 },
    { args: ['xxx', 'xxx'], expected: 0 },
    { args: ['xy', 'xy'], expected: 0 },
  ],
};
