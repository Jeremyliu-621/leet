import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-bit-changes-to-make-two-integers-equal',
  title: 'Number of Bit Changes to Make Two Integers Equal',
  difficulty: 'easy',
  tags: ['bit-manipulation'],
  description: `You are given two positive integers \`n\` and \`k\`.

You can choose **any** bit in the binary representation of \`n\` that is equal to **1** and change it to **0**.

Return the number of changes needed to make \`n\` equal to \`k\`. If it is **impossible**, return \`-1\`.`,
  constraints: [
    '`1 <= n, k <= 10^6`',
  ],
  examples: [
    {
      input: 'n = 13, k = 4',
      output: '2',
      explanation: 'n = 1101, k = 0100. k has a 1 at bit 2, which n also has. Bits 3 and 0 in n need to be turned off: 2 changes.',
    },
    {
      input: 'n = 21, k = 21',
      output: '0',
      explanation: 'n and k are already equal.',
    },
    {
      input: 'n = 14, k = 13',
      output: '-1',
      explanation: 'n = 1110, k = 1101. k has bit 0 set but n does not — you can only turn bits off, not on.',
    },
  ],
  hints: [
    'You can only turn 1-bits in n to 0. You cannot turn 0-bits to 1.',
    'If k has a bit set to 1 that n does not have, it\'s impossible — return -1.',
    'Check impossibility with: if (k & ~n) !== 0, return -1. Otherwise return the number of 1-bits in (n & ~k) — the bits in n that need to be turned off.',
  ],
  functionName: 'minChanges',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function minChanges(n, k) {

}`,
    typescript: `function minChanges(n: number, k: number): number {

}`,
    python: `def minChanges(n, k):
    pass`,
  },
  visibleTests: [
    { args: [13, 4], expected: 2 },
    { args: [21, 21], expected: 0 },
    { args: [14, 13], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 0 },
    { args: [7, 0], expected: 3 },
    { args: [7, 3], expected: 1 },
    { args: [7, 7], expected: 0 },
    { args: [8, 3], expected: -1 },
    { args: [15, 5], expected: 2 },
    { args: [1000000, 1], expected: -1 },
  ],
};
