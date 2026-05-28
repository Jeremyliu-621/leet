import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shifting-letters',
  title: 'Shifting Letters',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a string \`s\` and an integer array \`shifts\` of the same length.

Apply the \`i\`-th shift to the first \`i + 1\` letters of \`s\`.

A shift of a letter means replacing it with the next letter in the alphabet (wrapping \`'z'\` to \`'a'\`).

Return the final string after all such shifts to \`s\` are applied.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of lowercase English letters.',
    '`shifts.length == s.length`',
    '`0 <= shifts[i] <= 10^9`',
  ],
  examples: [
    {
      input: 's = "abc", shifts = [3,5,9]',
      output: '"rpl"',
      explanation: 'After shift 0: "dbc". After shift 1: "fdc". After shift 2: "rpl".',
    },
    { input: 's = "aaa", shifts = [1,2,3]', output: '"gfd"' },
  ],
  hints: [
    'The i-th character gets shifted by sum(shifts[0..i]).',
    'Compute a suffix sum of shifts to know how much each position shifts.',
    'Use modulo 26 to wrap around.',
  ],
  functionName: 'shiftingLetters',
  params: ['s', 'shifts'],
  starterCode: {
    javascript: 'function shiftingLetters(s, shifts) {\n  \n}\n',
    python: 'def shiftingLetters(s, shifts):\n    pass\n',
  },
  visibleTests: [
    { args: ['abc', [3, 5, 9]], expected: 'rpl' },
    { args: ['aaa', [1, 2, 3]], expected: 'gfd' },
  ],
  hiddenTests: [
    { args: ['a', [0]], expected: 'a' },
    { args: ['z', [1]], expected: 'a' },
    { args: ['az', [1, 1]], expected: 'ca' },
    { args: ['abcde', [26, 26, 26, 26, 26]], expected: 'abcde' },
    { args: ['xyz', [25, 25, 25]], expected: 'uwy' },
  ],
};
