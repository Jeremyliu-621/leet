import type { Problem } from '../types';

export const problem: Problem = {
  id: 'implement-strstr',
  title: 'Implement strStr()',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given two strings \`haystack\` and \`needle\`, return the index of the first occurrence of \`needle\` in \`haystack\`, or \`-1\` if \`needle\` is not part of \`haystack\`.

**Note:** An empty \`needle\` is always found at index 0.`,
  constraints: [
    '0 <= haystack.length, needle.length <= 10^4',
    'haystack and needle consist only of lowercase English letters',
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
      explanation: '"leeto" did not occur in "leetcode", so we return -1.',
    },
    {
      input: 'haystack = "hello", needle = ""',
      output: '0',
      explanation: 'Empty needle is always found at index 0.',
    },
  ],
  hints: [
    'Try iterating over each starting index in haystack and check whether needle matches starting at that position.',
    'You need to check indices 0 through haystack.length - needle.length inclusive.',
    'In JavaScript you can use `haystack.indexOf(needle)`. For a manual solution, compare haystack.slice(i, i + needle.length) === needle for each i.',
  ],
  functionName: 'strStr',
  params: ['haystack', 'needle'],
  starterCode: {
    javascript: 'function strStr(haystack, needle) {\n  \n}\n',
    python: 'def strStr(haystack, needle):\n    pass\n',
  },
  visibleTests: [
    { args: ['sadbutsad', 'sad'], expected: 0 },
    { args: ['leetcode', 'leeto'], expected: -1 },
    { args: ['hello', ''], expected: 0 },
  ],
  hiddenTests: [
    { args: ['hello', 'll'], expected: 2 },
    { args: ['aaaaa', 'bba'], expected: -1 },
    { args: ['a', 'a'], expected: 0 },
    { args: ['mississippi', 'issip'], expected: 4 },
    { args: ['aaa', 'aaaa'], expected: -1 },
    { args: ['', ''], expected: 0 },
    { args: ['abc', 'c'], expected: 2 },
  ],
};
