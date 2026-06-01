import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-string-is-prefix-of-array',
  title: 'Check If String Is a Prefix of Array',
  difficulty: 'easy',
  tags: ['arrays', 'strings', 'two-pointers'],
  description: `Given a string \`s\` and an array of strings \`words\`, determine whether \`s\` is a **prefix string** of \`words\`.

A string \`s\` is a **prefix string** of \`words\` if \`s\` can be made by concatenating the first \`k\` strings in \`words\` for some **positive** \`k\` no larger than \`words.length\`.

Return \`true\` if \`s\` is a **prefix string** of \`words\`, or \`false\` otherwise.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 20',
    '1 <= s.length <= 1000',
    'words[i] and s consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "iloveleetcode", words = ["i","love","leetcode","apples"]',
      output: 'true',
      explanation: '"i" + "love" + "leetcode" = "iloveleetcode" which equals s. So s is a prefix string of words.',
    },
    {
      input: 's = "iloveleetcode", words = ["apples","i","love","leetcode"]',
      output: 'false',
      explanation: 'The prefix strings are "apples", "applesi", "applesil...", etc. None equal s.',
    },
  ],
  hints: [
    'Build the prefix string incrementally: start with an empty string and append words one at a time.',
    'After each append, check if the running string equals s — if so, return true.',
    'If the running string becomes longer than s without matching, return false immediately.',
  ],
  functionName: 'isPrefixString',
  params: ['s', 'words'],
  starterCode: {
    javascript: 'function isPrefixString(s, words) {\n  \n}\n',
    typescript: 'function isPrefixString(s: string, words: string[]): boolean {\n  \n}',
    python: 'def isPrefixString(s, words):\n    pass\n',
  },
  visibleTests: [
    { args: ['iloveleetcode', ['i', 'love', 'leetcode', 'apples']], expected: true },
    { args: ['iloveleetcode', ['apples', 'i', 'love', 'leetcode']], expected: false },
  ],
  hiddenTests: [
    { args: ['a', ['a']], expected: true },
    { args: ['ab', ['a', 'b', 'c']], expected: true },
    { args: ['ab', ['a', 'c', 'b']], expected: false },
    { args: ['abc', ['a', 'b']], expected: false },
    { args: ['hello', ['hello', 'world']], expected: true },
    { args: ['helloworldextra', ['hello', 'world']], expected: false },
  ],
};
