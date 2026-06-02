import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-changes-to-make-alternating-binary-string',
  title: 'Minimum Changes To Make Alternating Binary String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` consisting only of the characters \`'0'\` and \`'1'\`. In one operation, you can change any \`'0'\` to \`'1'\` or vice versa.

The string is called **alternating** if no two adjacent characters are equal. For example, the string \`"010"\` is alternating, while the string \`"0100"\` is not.

Return the **minimum** number of operations needed to make \`s\` alternating.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "0100"',
      output: '1',
      explanation: 'Change index 1 to "1101"? No — s="0100" → make "0101": 1 change at index 3.',
    },
    {
      input: 's = "10"',
      output: '0',
      explanation: '"10" is already alternating.',
    },
    {
      input: 's = "1111"',
      output: '2',
      explanation: 'Make "0101" or "1010", both require 2 changes.',
    },
  ],
  hints: [
    'There are only two valid alternating patterns: "010101..." and "101010...".',
    'Count mismatches against pattern1 = "010101...". mismatches against pattern2 = n - mismatches.',
    'Return min(mismatches, n - mismatches).',
  ],
  functionName: 'minOperations',
  params: ['s'],
  starterCode: {
    javascript: `function minOperations(s) {
  let mismatches = 0;
  for (let i = 0; i < s.length; i++) if ((s[i] === '1') !== (i % 2 === 1)) mismatches++;
  return Math.min(mismatches, s.length - mismatches);
}`,
    typescript: `function minOperations(s: string): number {
  let mismatches = 0;
  for (let i = 0; i < s.length; i++) if ((s[i] === '1') !== (i % 2 === 1)) mismatches++;
  return Math.min(mismatches, s.length - mismatches);
}`,
    python: `def minOperations(s):
    if hasattr(s, 'to_py'): s = str(s)
    mismatches = sum(1 for i, c in enumerate(s) if (c == '1') != (i % 2 == 1))
    return min(mismatches, len(s) - mismatches)`,
  },
  visibleTests: [
    { args: ['0100'], expected: 1 },
    { args: ['10'], expected: 0 },
    { args: ['1111'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 0 },
    { args: ['00'], expected: 1 },
    { args: ['010101'], expected: 0 },
  ],
};
