import type { Problem } from '../types';

export const problem: Problem = {
  id: 'compress-string',
  title: 'Run-Length Encoding',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` of lowercase letters, encode it using **run-length encoding**: replace each consecutive run of identical characters with the character followed by its count.

For example, \`"aaabbc"\` → \`"a3b2c1"\`. Every character appears in the output followed by its run length, even when the run is just 1.

An empty string encodes to an empty string.`,
  constraints: [
    '0 <= s.length <= 1000',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaabbc"',
      output: '"a3b2c1"',
      explanation: 'Three a\'s, two b\'s, and one c.',
    },
    {
      input: 's = "abcd"',
      output: '"a1b1c1d1"',
      explanation: 'Each character appears exactly once.',
    },
    {
      input: 's = "aaaaaa"',
      output: '"a6"',
      explanation: 'A single run of six a\'s.',
    },
  ],
  hints: [
    'Scan the string and group consecutive identical characters. You need to track the current character and how long its run has been.',
    'Use a pointer `i` and, for each position, count how far the run extends with a while-loop. Append `char + count` to the output, then jump `i` past the run.',
    '`let out = "", i = 0; while (i < s.length) { let j = i; while (j < s.length && s[j] === s[i]) j++; out += s[i] + (j - i); i = j; } return out;`',
  ],
  functionName: 'compressString',
  params: ['s'],
  starterCode: {
    javascript: 'function compressString(s) {\n  // your code here\n}\n',
    typescript: "function compressString(s: string): string {\n  // your code here\n}",

    python: 'def compressString(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['aaabbc'], expected: 'a3b2c1' },
    { args: ['abcd'], expected: 'a1b1c1d1' },
    { args: ['aaaaaa'], expected: 'a6' },
  ],
  hiddenTests: [
    { args: [''], expected: '' },
    { args: ['a'], expected: 'a1' },
    { args: ['aabb'], expected: 'a2b2' },
    { args: ['zzzzz'], expected: 'z5' },
    { args: ['abc'], expected: 'a1b1c1' },
    { args: ['aabbbcccc'], expected: 'a2b3c4' },
  ],
};
