import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-uncommon-subsequence-ii',
  title: 'Longest Uncommon Subsequence II',
  difficulty: 'medium',
  tags: ['arrays', 'strings', 'two-pointers'],
  description: `Given an array of strings \`strs\`, return the **length** of the **longest uncommon subsequence** between them. If the longest uncommon subsequence does not exist, return \`-1\`.

An **uncommon subsequence** between an array of strings is a string that is a **subsequence of one string but not the others**.

A **subsequence** of a string \`s\` is a string that can be obtained after deleting any number of characters from \`s\`.`,
  constraints: [
    '2 <= strs.length <= 50',
    '1 <= strs[i].length <= 10',
    'strs[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'strs = ["aba","cdc","eae"]',
      output: '3',
      explanation: '"aba" is not a subsequence of "cdc" or "eae", and "cdc" is not a subsequence of "aba" or "eae". All three are valid uncommon subsequences of length 3.',
    },
    {
      input: 'strs = ["aaa","aaa","aa"]',
      output: '-1',
      explanation: '"aaa" appears twice so it\'s a subsequence of the other "aaa". "aa" is a subsequence of "aaa". No valid uncommon subsequence.',
    },
  ],
  hints: [
    'For each string s_i, check if s_i is a subsequence of any other string s_j (j ≠ i).',
    'If s_i is NOT a subsequence of any other string, it is a valid uncommon subsequence.',
    'Return the maximum length among all valid uncommon subsequences, or -1 if none exist.',
  ],
  functionName: 'findLUSlength',
  params: ['strs'],
  starterCode: {
    javascript: 'function findLUSlength(strs) {\n  \n}\n',
    typescript: 'function findLUSlength(strs: string[]): number {\n  \n}',
    python: 'def findLUSlength(strs):\n    pass\n',
  },
  visibleTests: [
    { args: [['aba', 'cdc', 'eae']], expected: 3 },
    { args: [['aaa', 'aaa', 'aa']], expected: -1 },
  ],
  hiddenTests: [
    { args: [['a', 'b']], expected: 1 },
    { args: [['a', 'a']], expected: -1 },
    { args: [['abc', 'def', 'efg']], expected: 3 },
    { args: [['ab', 'abc', 'abc']], expected: -1 },
    { args: [['abcde', 'abcde', 'abcdf']], expected: 5 },
  ],
};
