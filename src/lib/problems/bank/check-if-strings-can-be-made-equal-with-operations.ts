import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-strings-can-be-made-equal-with-operations',
  title: 'Check if Strings Can be Made Equal With Operations',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given two strings \`s1\` and \`s2\`, both of length \`n\` (even).

In one operation, you can choose any index \`i\` of \`s1\` (0-indexed) and swap \`s1[i]\` with \`s1[i + 2]\`.

Return \`true\` if you can make \`s1\` equal to \`s2\` using any number of operations, and \`false\` otherwise.`,
  constraints: [
    'n == s1.length == s2.length',
    '2 <= n <= 100',
    'n is even.',
    's1 and s2 consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "abcd", s2 = "cdab"',
      output: 'true',
      explanation: 'Even positions of s1: a,c → can rearrange to c,a. Odd positions: b,d → can rearrange to d,b. Result matches s2.',
    },
    {
      input: 's1 = "abcd", s2 = "dacb"',
      output: 'false',
      explanation: 'Even positions of s1: {a,c}, s2: {d,c}. Different sets.',
    },
  ],
  hints: [
    'Swapping s1[i] and s1[i+2] can be chained to permute all characters at even indices among themselves, and all odd-index characters among themselves.',
    'Check if the multisets of even-indexed characters match between s1 and s2.',
    'Check if the multisets of odd-indexed characters match between s1 and s2.',
  ],
  functionName: 'checkStrings',
  params: ['s1', 's2'],
  starterCode: {
    javascript: 'function checkStrings(s1, s2) {\n  \n}\n',
    python: 'def checkStrings(s1, s2):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcd', 'cdab'], expected: true },
    { args: ['abcd', 'dacb'], expected: false },
    { args: ['ab', 'ba'], expected: false },
  ],
  hiddenTests: [
    { args: ['ab', 'ab'], expected: true },
    { args: ['aabb', 'bbaa'], expected: true },
    { args: ['abcd', 'abcd'], expected: true },
    { args: ['xyzw', 'zwxy'], expected: true },
    { args: ['aabb', 'abab'], expected: false },
  ],
};
