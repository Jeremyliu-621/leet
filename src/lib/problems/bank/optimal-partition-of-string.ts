import type { Problem } from '../types';

export const problem: Problem = {
  id: 'optimal-partition-of-string',
  title: 'Optimal Partition of String',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, partition the string into one or more **substrings** such that the characters in each substring are **unique**. That is, no letter appears in a single substring more than once.

Return the **minimum** number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only English lowercase letters.',
  ],
  examples: [
    {
      input: 's = "abacaba"',
      output: '4',
      explanation: '"a" | "b" | "ac" | "aba" is not valid. Optimal: "a"|"b"|"ac"|"ab" — wait, that has repeated. Greedy: a,ab,aba→dup a; new: a,bac,aba→4 total. The answer is 4.',
    },
    {
      input: 's = "ssssss"',
      output: '6',
      explanation: 'Each character must form its own substring.',
    },
  ],
  hints: [
    'Greedy: extend the current partition as far as possible without repeating a character.',
    'When a character is seen again, start a new partition.',
    'The answer is the number of partitions created.',
  ],
  functionName: 'partitionString',
  params: ['s'],
  starterCode: {
    javascript: `function partitionString(s) {

}`,
    python: `def partitionString(s):
    pass`,
  },
  visibleTests: [
    { args: ['abacaba'], expected: 4 },
    { args: ['ssssss'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcdef'], expected: 1 },
    { args: ['aab'], expected: 2 },
    { args: ['abba'], expected: 2 },
  ],
};
