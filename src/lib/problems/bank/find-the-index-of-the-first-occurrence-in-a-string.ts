import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-index-of-the-first-occurrence-in-a-string',
  title: 'Find the Index of the First Occurrence in a String',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given two strings \`haystack\` and \`needle\`, return the index of the **first occurrence** of \`needle\` in \`haystack\`, or \`-1\` if \`needle\` is not part of \`haystack\`.`,
  constraints: [
    '1 <= haystack.length, needle.length <= 10^4',
    'haystack and needle consist of only lowercase English characters.',
  ],
  examples: [
    {
      input: 'haystack = "sadbutsad", needle = "sad"',
      output: '0',
      explanation: '"sad" occurs at index 0 and 6. The first occurrence is at index 0.',
    },
    {
      input: 'haystack = "leetcode", needle = "leeto"',
      output: '-1',
      explanation: '"leeto" does not occur in "leetcode", return -1.',
    },
  ],
  hints: [
    'Use a sliding window of size needle.length over haystack.',
    'Check if each window equals needle.',
    'Return the starting index of the first match, or -1 if none found.',
  ],
  functionName: 'strStr',
  params: ['haystack', 'needle'],
  starterCode: {
    javascript: `function strStr(haystack, needle) {\n  \n}`,
    typescript: `function strStr(haystack: string, needle: string): number {\n  \n}`,
    python: `def strStr(haystack, needle):\n    `,
  },
  visibleTests: [
    { args: ['sadbutsad', 'sad'], expected: 0 },
    { args: ['leetcode', 'leeto'], expected: -1 },
    { args: ['hello', 'll'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['sadbutsad', 'sad'], expected: 0 },
    { args: ['leetcode', 'leeto'], expected: -1 },
    { args: ['hello', 'll'], expected: 2 },
    { args: ['aaaaa', 'bba'], expected: -1 },
    { args: ['aaa', 'aa'], expected: 0 },
    { args: ['mississippi', 'issip'], expected: 4 },
    { args: ['a', 'a'], expected: 0 },
    { args: ['abcabc', 'bc'], expected: 1 },
  ],
};
