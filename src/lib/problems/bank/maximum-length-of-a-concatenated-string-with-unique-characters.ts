import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-of-a-concatenated-string-with-unique-characters',
  title: 'Maximum Length of a Concatenated String with Unique Characters',
  difficulty: 'medium',
  tags: ['backtracking', 'strings'],
  description: `You are given an array of strings \`arr\`. A string \`s\` is formed by the concatenation of a **subsequence** of \`arr\` that has **unique characters**.

Return the **maximum** possible length of \`s\`.`,
  constraints: [
    '1 <= arr.length <= 16',
    '1 <= arr[i].length <= 26',
    'arr[i] contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'arr = ["un","iq","ue"]',
      output: '4',
      explanation: 'All possible concatenations are "","un","iq","ue","uniq","ique","unue". Maximum unique chars = 4 ("uniq").',
    },
    {
      input: 'arr = ["cha","r","act","ers"]',
      output: '6',
      explanation: '"chaers" or "acters" both have 6 unique characters.',
    },
  ],
  hints: [
    'Represent each string as a bitmask of 26 bits (one per letter). Skip strings with duplicate characters.',
    'Use DFS/backtracking: for each string, include it only if its bitmask doesn\'t overlap with the current mask.',
    'Track the maximum popcount (number of set bits) encountered.',
  ],
  functionName: 'maxLength',
  params: ['arr'],
  starterCode: {
    javascript: 'function maxLength(arr) {\n\n}\n',
    python: 'def maxLength(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [['un', 'iq', 'ue']], expected: 4 },
    { args: [['cha', 'r', 'act', 'ers']], expected: 6 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 1 },
    { args: [['aa']], expected: 0 },
    { args: [['ab', 'cd', 'ef']], expected: 6 },
    { args: [['a', 'b', 'c', 'abc']], expected: 3 },
  ],
};
