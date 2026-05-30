import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-good-ways-to-split-a-string',
  title: 'Number of Good Ways to Split a String',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`.

A split is called **good** if you can split \`s\` into two non-empty strings \`sleft\` and \`sright\` where their concatenation is equal to \`s\` (i.e., \`sleft + sright = s\`) and the number of **distinct** characters in \`sleft\` and \`sright\` are the same.

Return the number of **good** splits you can make in \`s\`.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s\` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aacaba"',
      output: '2',
      explanation: 'Good splits: "aac"|"aba" (both have 2 distinct chars) and "aaca"|"ba" (both have 2 distinct chars).',
    },
    {
      input: 's = "abcd"',
      output: '1',
      explanation: 'Good split: "ab"|"cd" (both have 2 distinct chars).',
    },
  ],
  hints: [
    'Precompute a prefix array where prefix[i] = number of distinct characters in s[0..i].',
    'Precompute a suffix array where suffix[i] = number of distinct characters in s[i..n-1].',
    'Count positions i (0-indexed) where prefix[i] == suffix[i+1]. There are n-1 possible split positions.',
  ],
  functionName: 'numSplits',
  params: ['s'],
  starterCode: {
    javascript: `function numSplits(s) {

}`,
    typescript: `function numSplits(s: string): number {

}`,
    python: `def numSplits(s):
    pass`,
  },
  visibleTests: [
    { args: ['aacaba'], expected: 2 },
    { args: ['abcd'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aaaaa'], expected: 4 },
    { args: ['ab'], expected: 1 },
    { args: ['a'], expected: 0 },
    { args: ['abcabc'], expected: 1 },
    { args: ['aabb'], expected: 1 },
    { args: ['aabc'], expected: 0 },
    { args: ['abba'], expected: 1 },
    { args: ['aaabbb'], expected: 1 },
    { args: ['abcdef'], expected: 1 },
  ],
};
