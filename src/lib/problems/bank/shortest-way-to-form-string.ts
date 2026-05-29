import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-way-to-form-string',
  title: 'Shortest Way to Form String',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers', 'binary-search'],
  description: `A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.

Given two strings \`source\` and \`target\`, return the **minimum** number of **subsequences** of \`source\` such that their concatenation equals \`target\`. If the task is impossible, return \`-1\`.`,
  constraints: [
    '`1 <= source.length, target.length <= 1000`',
    '`source` and \`target\` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'source = "abc", target = "abcbc"',
      output: '2',
      explanation: '"abcbc" = "abc" + "bc". "bc" is a subsequence of "abc". Minimum 2 copies needed.',
    },
    {
      input: 'source = "abc", target = "acdbc"',
      output: '-1',
      explanation: '"d" is not in source, so it is impossible.',
    },
    {
      input: 'source = "xyz", target = "xzyxz"',
      output: '3',
      explanation: '"xzyxz" = "xz" + "yx" + "z". Each is a subsequence of "xyz". Minimum 3 copies needed.',
    },
  ],
  hints: [
    'First check: if any character in target does not appear in source, return -1.',
    'Use two pointers: one for target (ti) and one for source (si).',
    'For each copy of source, advance si to greedily match target characters in order.',
    'When si reaches end of source, start a new copy (count++) and reset si to 0.',
    'Continue until all target characters are matched.',
  ],
  functionName: 'shortestWay',
  params: ['source', 'target'],
  starterCode: {
    javascript: `function shortestWay(source, target) {

}`,
    typescript: `function shortestWay(source: string, target: string): number {

}`,
    python: `def shortestWay(source, target):
    pass`,
  },
  visibleTests: [
    { args: ['abc', 'abcbc'], expected: 2 },
    { args: ['abc', 'acdbc'], expected: -1 },
    { args: ['xyz', 'xzyxz'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['ab', 'aa'], expected: 2 },
    { args: ['a', 'aaaa'], expected: 4 },
    { args: ['abc', 'abc'], expected: 1 },
    { args: ['ab', 'b'], expected: 1 },
    { args: ['abcdef', 'acbacf'], expected: 3 },
    { args: ['z', 'zzz'], expected: 3 },
    { args: ['az', 'za'], expected: 2 },
  ],
};
