import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-substrings-with-only-1s',
  title: 'Number of Substrings With Only 1s',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a binary string \`s\`, return the number of substrings with all characters equal to \`'1'\`.

Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is either `\'0\'` or `\'1\'`',
  ],
  examples: [
    {
      input: 's = "0110111"',
      output: '9',
      explanation: 'There are 9 substrings of all 1s: "1" (×5), "11" (×2), "111" (×1). Count = 5 + 2 + 1 + 1 = 9.',
    },
    {
      input: 's = "101"',
      output: '2',
      explanation: 'The two "1" characters are each valid substrings.',
    },
    {
      input: 's = "111111"',
      output: '21',
      explanation: 'A run of 6 ones contributes 6+5+4+3+2+1 = 21 all-1 substrings.',
    },
  ],
  hints: [
    'Think about runs of consecutive 1s independently — each run is separated by 0s.',
    'A run of n consecutive 1s contributes n*(n+1)/2 substrings of all 1s.',
    'Equivalently, track the current run length `run`. Each new \'1\' extends the run by 1 and adds `run` new substrings ending at the current position.',
  ],
  functionName: 'numSub',
  params: ['s'],
  starterCode: {
    javascript: `function numSub(s) {

}`,
    typescript: `function numSub(s: string): number {

}`,
    python: `def numSub(s):
    pass`,
  },
  visibleTests: [
    { args: ['0110111'], expected: 9 },
    { args: ['101'], expected: 2 },
    { args: ['111111'], expected: 21 },
  ],
  hiddenTests: [
    { args: ['000'], expected: 0 },
    { args: ['1'], expected: 1 },
    { args: ['0'], expected: 0 },
    { args: ['11'], expected: 3 },
    { args: ['010101'], expected: 3 },
    { args: ['1111'], expected: 10 },
    { args: ['0'.repeat(100) + '1'.repeat(100)], expected: 5050 },
  ],
};
