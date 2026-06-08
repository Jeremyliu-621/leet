import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'reverse-string-debug-bounds',
  title: 'Fix the Bug: Reverse String',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  kind: 'debug',
  description: `The following implementation of **Reverse String** has a bug. Given a string \`s\`, return the reversed string.

Find and fix the bug so all tests pass.

**Hint:** The bug causes the middle character to be skipped on odd-length strings.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "hello"',
      output: '"olleh"',
    },
    {
      input: 's = "abcde"',
      output: '"edcba"',
    },
  ],
  hints: [
    'Try running the code on an odd-length string like "abc". What happens?',
    'The loop condition `lo < hi - 1` stops too early — it should be `lo < hi`.',
    'Change `while (lo < hi - 1)` to `while (lo < hi)`.',
  ],
  functionName: 'reverseString',
  params: ['s'],
  buggyCode: {
    javascript: `function reverseString(s) {
  const chars = s.split('');
  let lo = 0;
  let hi = chars.length - 1;
  while (lo < hi - 1) {
    const tmp = chars[lo];
    chars[lo] = chars[hi];
    chars[hi] = tmp;
    lo++;
    hi--;
  }
  return chars.join('');
}`,
    python: `def reverseString(s):
    chars = list(s)
    lo, hi = 0, len(chars) - 1
    while lo < hi - 1:
        chars[lo], chars[hi] = chars[hi], chars[lo]
        lo += 1
        hi -= 1
    return ''.join(chars)`,
  },
  starterCode: {
    javascript: `function reverseString(s) {
  const chars = s.split('');
  let lo = 0;
  let hi = chars.length - 1;
  while (lo < hi - 1) {
    const tmp = chars[lo];
    chars[lo] = chars[hi];
    chars[hi] = tmp;
    lo++;
    hi--;
  }
  return chars.join('');
}`,
    python: `def reverseString(s):
    chars = list(s)
    lo, hi = 0, len(chars) - 1
    while lo < hi - 1:
        chars[lo], chars[hi] = chars[hi], chars[lo]
        lo += 1
        hi -= 1
    return ''.join(chars)`,
  },
  visibleTests: [
    { args: ['hello'], expected: 'olleh' },
    { args: ['ab'], expected: 'ba' },
    { args: ['a'], expected: 'a' },
  ],
  hiddenTests: [
    { args: ['abcde'], expected: 'edcba' },
    { args: ['abcd'], expected: 'dcba' },
    { args: ['racecar'], expected: 'racecar' },
    { args: ['xy'], expected: 'yx' },
  ],
};
