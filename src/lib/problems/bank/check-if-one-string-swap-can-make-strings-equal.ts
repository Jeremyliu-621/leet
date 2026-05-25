import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-one-string-swap-can-make-strings-equal',
  title: 'Check if One String Swap Can Make Strings Equal',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`s1\` and \`s2\` of equal length. A **string swap** is an operation where you choose any two indices in a string and swap the characters at those indices.

Return \`true\` if it is possible to make both strings equal by performing **at most one string swap** on **exactly one** of the strings. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s1.length, s2.length <= 100',
    's1.length == s2.length',
    's1 and s2 consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "bank", s2 = "kanb"',
      output: 'true',
      explanation: 'Swap positions 0 and 3 in "bank": "bank" → "kanb" = s2.',
    },
    {
      input: 's1 = "attack", s2 = "defend"',
      output: 'false',
      explanation: 'More than 2 positions differ.',
    },
  ],
  hints: [
    'Find all positions where s1[i] != s2[i]. There should be 0 or 2 such positions.',
    'If 2 positions, check that swapping those in s1 gives s2.',
  ],
  functionName: 'areAlmostEqual',
  params: ['s1', 's2'],
  starterCode: {
    javascript: `function areAlmostEqual(s1, s2) {

}`,
    python: `def areAlmostEqual(s1, s2):
    pass`,
  },
  visibleTests: [
    { args: ['bank', 'kanb'], expected: true },
    { args: ['attack', 'defend'], expected: false },
  ],
  hiddenTests: [
    { args: ['aa', 'aa'], expected: true },
    { args: ['aa', 'ac'], expected: false },
    { args: ['kelb', 'kelb'], expected: true },
    { args: ['abcd', 'dcba'], expected: false },
  ],
};
