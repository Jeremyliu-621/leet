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
    javascript: `function compressString(s) {
  let out = '', i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    out += s[i] + (j - i);
    i = j;
  }
  return out;
}`,
    typescript: `function compressString(s: string): string {
  let out = '', i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    out += s[i]! + (j - i);
    i = j;
  }
  return out;
}`,
    python: `def compressString(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    if not s: return ''
    out, i = '', 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]: j += 1
        out += s[i] + str(j - i)
        i = j
    return out`,
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
