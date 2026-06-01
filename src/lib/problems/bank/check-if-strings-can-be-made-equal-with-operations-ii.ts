import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-strings-can-be-made-equal-with-operations-ii',
  title: 'Check if Strings Can be Made Equal With Operations II',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`s1\` and \`s2\`, both of length \`n\`.

In one operation you can choose any index \`i\` (0-indexed) and swap \`s1[i]\` with \`s1[i + 2]\`.

Return \`true\` if you can make \`s1\` equal to \`s2\` using **any number** of operations, and \`false\` otherwise.`,
  constraints: [
    'n == s1.length == s2.length',
    '2 <= n <= 10^5',
    's1 and s2 consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "cdab", s2 = "abcd"',
      output: 'true',
      explanation: 'Even-indexed chars of s1: "c","a" → can rearrange to "a","c". Even-indexed chars of s2: "a","c". Odd-indexed: both "b","d". So they match.',
    },
    {
      input: 's1 = "abe", s2 = "bea"',
      output: 'false',
      explanation: 'Even-indexed chars of s1: "a","e"; s2: "b","a". Sorted: "ae" vs "ab" — not equal.',
    },
  ],
  hints: [
    'Swapping i and i+2 keeps parity (even stays even, odd stays odd).',
    'All even-indexed characters can be freely rearranged among themselves; same for odd-indexed.',
    'Sort even-indexed chars of both strings and compare; do the same for odd-indexed.',
  ],
  functionName: 'canBeEqualWithOpsII',
  params: ['s1', 's2'],
  starterCode: {
    javascript: 'function canBeEqualWithOpsII(s1, s2) {\n  \n}\n',
    typescript: 'function canBeEqualWithOpsII(s1: string, s2: string): boolean {\n  \n}',
    python: 'def canBeEqualWithOpsII(s1, s2):\n    pass\n',
  },
  visibleTests: [
    { args: ['cdab', 'abcd'], expected: true },
    { args: ['abe', 'bea'], expected: false },
  ],
  hiddenTests: [
    { args: ['aab', 'baa'], expected: true },
    { args: ['abcd', 'dcba'], expected: false },
    { args: ['ab', 'ab'], expected: true },
    { args: ['ab', 'ba'], expected: false },
    { args: ['abcde', 'edcba'], expected: true },
  ],
};
