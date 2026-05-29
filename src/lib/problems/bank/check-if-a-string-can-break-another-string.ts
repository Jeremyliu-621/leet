import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-a-string-can-break-another-string',
  title: 'Check If a String Can Break Another String',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given two strings \`s1\` and \`s2\` of the same length, return \`true\` if \`s1\` **can break** \`s2\` (or vice versa). The string \`x\` can break string \`y\` (both of the same length) if \`x[i] >= y[i]\` (in alphabetical order) for all \`i\` from 0 to the length of \`x\` minus 1.

Both strings can only contain lowercase English letters and will be **rearranged** before the comparison. You may rearrange each string independently.`,
  constraints: [
    's1.length == s2.length',
    '1 <= s1.length <= 10^5',
    'Both strings consist only of lowercase English letters',
  ],
  examples: [
    {
      input: 's1 = "abc", s2 = "xya"',
      output: 'true',
      explanation: '"abc" sorted is "abc" and "xya" sorted is "axy". "axy" >= "abc" at every position, so "xya" can break "abc".',
    },
    {
      input: 's1 = "abe", s2 = "acd"',
      output: 'false',
      explanation: 'Neither sorted string dominates the other at every position.',
    },
    {
      input: 's1 = "leetcodee", s2 = "interview"',
      output: 'true',
      explanation: 'Sorted s1 = "cdeeeelot", sorted s2 = "eeeiinrtv". s2 can break s1.',
    },
  ],
  hints: [
    'Sort both strings and check if one dominates the other at every index.',
    'Only two possibilities: s1 breaks s2, or s2 breaks s1.',
    '```js\nfunction checkIfCanBreak(s1, s2) {\n  const a = [...s1].sort();\n  const b = [...s2].sort();\n  let s1BreaksS2 = true, s2BreaksS1 = true;\n  for (let i = 0; i < a.length; i++) {\n    if (a[i] < b[i]) s1BreaksS2 = false;\n    if (b[i] < a[i]) s2BreaksS1 = false;\n  }\n  return s1BreaksS2 || s2BreaksS1;\n}\n```',
  ],
  functionName: 'checkIfCanBreak',
  params: ['s1', 's2'],
  starterCode: {
    javascript: `function checkIfCanBreak(s1, s2) {

}`,
    typescript: `function checkIfCanBreak(s1: string, s2: string): boolean {

}`,
    python: `def checkIfCanBreak(s1, s2):
    pass`,
  },
  visibleTests: [
    { args: ['abc', 'xya'], expected: true },
    { args: ['abe', 'acd'], expected: false },
    { args: ['leetcodee', 'interview'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['a', 'b'], expected: true },
    { args: ['b', 'a'], expected: true },
    { args: ['ab', 'ca'], expected: true },
    { args: ['zz', 'aa'], expected: true },
    { args: ['az', 'za'], expected: true },
    { args: ['abc', 'abc'], expected: true },
    { args: ['aaa', 'zzz'], expected: true },
    { args: ['bd', 'ac'], expected: true },
    { args: ['ace', 'bdf'], expected: true },
    { args: ['ca', 'bb'], expected: false },
  ],
};
