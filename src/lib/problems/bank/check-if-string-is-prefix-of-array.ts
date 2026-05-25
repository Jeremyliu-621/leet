import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-string-is-prefix-of-array',
  title: 'Check If String Is a Prefix of Array',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` and an array of strings \`words\`, determine whether \`s\` is a **prefix string** of \`words\`.

A string \`s\` is a prefix string of \`words\` if \`s\` can be made by concatenating the first \`k\` strings in \`words\` for some positive \`k\` no larger than \`words.length\`.

Return \`true\` if \`s\` is a prefix string of \`words\`, or \`false\` otherwise.`,
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
      explanation: '"i"+"love"+"leetcode" = "iloveleetcode" = s.',
    },
    {
      input: 's = "iloveleetcode", words = ["apples","i","love","leetcode"]',
      output: 'false',
      explanation: '"apples" != "i..." so no prefix starting at words[0] matches.',
    },
  ],
  hints: [
    'Concatenate words one by one. If the concatenation equals s, return true. If it exceeds s length, return false.',
  ],
  functionName: 'isPrefixString',
  params: ['s', 'words'],
  starterCode: {
    javascript: `function isPrefixString(s, words) {

}`,
    python: `def isPrefixString(s, words):
    pass`,
  },
  visibleTests: [
    { args: ['iloveleetcode', ['i', 'love', 'leetcode', 'apples']], expected: true },
    { args: ['iloveleetcode', ['apples', 'i', 'love', 'leetcode']], expected: false },
  ],
  hiddenTests: [
    { args: ['i', ['i', 'love', 'leetcode']], expected: true },
    { args: ['ilove', ['i', 'love', 'leetcode']], expected: true },
    { args: ['iloveleet', ['i', 'love', 'leetcode']], expected: false },
    { args: ['a', ['aa', 'aaaa', 'banana']], expected: false },
  ],
};
