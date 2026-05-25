import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flip-string-to-monotone-increasing',
  title: 'Flip String to Monotone Increasing',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `A binary string is monotone increasing if it consists of some number of \`0\`'s (possibly none), followed by some number of \`1\`'s (also possibly none).

You are given a binary string \`s\`. You can flip \`s[i]\` changing it from \`0\` to \`1\` or from \`1\` to \`0\`.

Return the minimum number of flips to make \`s\` monotone increasing.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is either `\'0\'` or `\'1\'`.',
  ],
  examples: [
    {
      input: 's = "00110"',
      output: '1',
      explanation: 'Flip s[2]: "00010" → not monotone. Flip s[3]: "00100" → not monotone. Flip s[4]: "00111" → monotone. Only 1 flip needed.',
    },
    {
      input: 's = "010110"',
      output: '2',
      explanation: 'Flip s[2] and s[3] → "011110" or similar. Minimum 2 flips.',
    },
    {
      input: 's = "00011000"',
      output: '2',
      explanation: 'Flip the two 1s at index 3 and 4 to get "00000000", or flip the three 0s at end to get "00011111". Minimum is 2.',
    },
  ],
  hints: [
    'Track the number of ones seen so far (ones) and current flips needed (flips).',
    'For each character: if it is \'1\', increment ones. If it is \'0\', we can either flip it to 1 (flips+1) or flip all previous 1s to 0; take the minimum.',
    'When a \'0\' is encountered: flips = min(flips + 1, ones).',
  ],
  functionName: 'minFlipsMonoIncr',
  params: ['s'],
  starterCode: {
    javascript: 'function minFlipsMonoIncr(s) {\n  \n}\n',
    python: 'def minFlipsMonoIncr(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['00110'], expected: 1 },
    { args: ['010110'], expected: 2 },
    { args: ['00011000'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 0 },
    { args: ['0001111'], expected: 0 },
    { args: ['1110000'], expected: 3 },
    { args: ['10011111110010111011'], expected: 5 },
  ],
};
