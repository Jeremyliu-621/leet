import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-string-after-substring-operation',
  title: 'Lexicographically Smallest String After Substring Operation',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a string \`s\` of lowercase English letters, perform the following operation **exactly once**: choose a **non-empty** substring of \`s\` and replace every character in it with its **previous** character in the English alphabet (e.g. \`'b'\` is replaced by \`'a'\`, \`'a'\` is replaced by \`'z'\`).

Return *the **lexicographically smallest** string you can obtain after performing the operation exactly once.*`,
  constraints: [
    '1 <= s.length <= 3 * 10^4',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "cbabc"',
      output: '"baabc"',
      explanation:
        'Decrement the first two characters (substring "cb"): "cb"→"ba". Result: "baabc". Stopping before the original "a" avoids converting it to "z".',
    },
    {
      input: 's = "acbbc"',
      output: '"abaab"',
      explanation:
        'Skip the leading "a". Decrement "cbbc" (indices 1–4): result "abaab". There are no "a"s to stop at, so we go to the end.',
    },
    {
      input: 's = "aaa"',
      output: '"aaz"',
      explanation:
        'We must perform the operation. The best we can do is change only the last character: "a"→"z". Any wider change introduces more "z"s earlier.',
    },
  ],
  hints: [
    'If all characters are "a", we must change at least one to "z". Change only the last character for the smallest result.',
    'Otherwise, find the first non-"a" character, then decrement consecutive non-"a" characters until the next original "a" (or end of string).',
    'This greedy strategy minimizes the string because we start changes as late as possible (after leading "a"s) and stop at the next "a" (avoiding turning it into "z").',
  ],
  functionName: 'smallestString',
  params: ['s'],
  starterCode: {
    javascript: 'function smallestString(s) {\n\n}\n',
    typescript: 'function smallestString(s: string): string {\n\n}\n',
    python: 'def smallestString(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['cbabc'], expected: 'baabc' },
    { args: ['acbbc'], expected: 'abaab' },
    { args: ['aaa'], expected: 'aaz' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'z' },
    { args: ['b'], expected: 'a' },
    { args: ['za'], expected: 'ya' },
    { args: ['abc'], expected: 'aab' },
    { args: ['bab'], expected: 'aab' },
    { args: ['azbz'], expected: 'ayay' },
    { args: ['abcde'], expected: 'aabcd' },
  ],
};
