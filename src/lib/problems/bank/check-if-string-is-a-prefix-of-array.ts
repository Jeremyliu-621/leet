import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-string-is-a-prefix-of-array',
  title: 'Check If String Is a Prefix of Array',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given a string \`s\` and an array of strings \`words\`, determine if \`s\` is a **prefix string** of \`words\`.

A string \`s\` is a prefix string of \`words\` if \`s\` can be made by concatenating the first \`k\` strings in \`words\` for some **positive** \`k\` no larger than \`words.length\`.

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
      explanation: '"i" + "love" + "leetcode" = "iloveleetcode".',
    },
    {
      input: 's = "iloveleetcode", words = ["apples","i","love","leetcode"]',
      output: 'false',
      explanation: 'No prefix of words concatenates to "iloveleetcode".',
    },
    {
      input: 's = "leetcode", words = ["leet","code"]',
      output: 'true',
      explanation: '"leet" + "code" = "leetcode".',
    },
  ],
  hints: [
    'Accumulate words left to right into a running string.',
    'If the accumulated string equals s at any point, return true.',
    'If the accumulated string exceeds s.length without matching, return false.',
  ],
  functionName: 'isPrefixString',
  params: ['s', 'words'],
  starterCode: {
    javascript: `function isPrefixString(s, words) {

}`,
    typescript: `function isPrefixString(s: string, words: string[]): boolean {

}`,
    python: `def isPrefixString(s, words):
    pass`,
  },
  visibleTests: [
    { args: ['iloveleetcode', ['i', 'love', 'leetcode', 'apples']], expected: true },
    { args: ['iloveleetcode', ['apples', 'i', 'love', 'leetcode']], expected: false },
    { args: ['leetcode', ['leet', 'code']], expected: true },
  ],
  hiddenTests: [
    { args: ['a', ['a', 'b']], expected: true },
    { args: ['ab', ['a', 'b']], expected: true },
    { args: ['ac', ['a', 'b']], expected: false },
    { args: ['abc', ['ab', 'c', 'd']], expected: true },
    { args: ['abcd', ['ab', 'c', 'd']], expected: true },
  ],
};
