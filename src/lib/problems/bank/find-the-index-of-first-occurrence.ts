import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-index-of-first-occurrence',
  title: 'Find the Index of the First Occurrence in a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two strings \`haystack\` and \`needle\`, return the index of the first occurrence of \`needle\` in \`haystack\`, or \`-1\` if \`needle\` is not part of \`haystack\`.`,
  constraints: [
    '1 <= haystack.length, needle.length <= 10^4',
    'haystack and needle consist of only lowercase English characters',
  ],
  examples: [
    {
      input: 'haystack = "sadbutsad", needle = "sad"',
      output: '0',
      explanation: '"sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.',
    },
    {
      input: 'haystack = "leetcode", needle = "leeto"',
      output: '-1',
      explanation: '"leeto" did not occur in "leetcode", so we return -1.',
    },
  ],
  hints: [
    'Loop through each position i in haystack and check if haystack[i..i+len(needle)] equals needle.',
    'You can use the built-in indexOf or find method.',
    'For a manual approach, compare character by character at each starting position.',
  ],
  functionName: 'strStr',
  params: ['haystack', 'needle'],
  starterCode: {
    javascript: `function strStr(haystack, needle) {

}`,
    typescript: "function strStr(haystack: string, needle: string): number {\n\n}",

    python: `def strStr(haystack, needle):
    pass`,
  },
  visibleTests: [
    { args: ['sadbutsad', 'sad'], expected: 0 },
    { args: ['leetcode', 'leeto'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['', 'a'], expected: -1 },
    { args: ['a', 'a'], expected: 0 },
    { args: ['hello', 'll'], expected: 2 },
    { args: ['aaa', 'aaaa'], expected: -1 },
    { args: ['mississippi', 'issip'], expected: 4 },
  ],
};
