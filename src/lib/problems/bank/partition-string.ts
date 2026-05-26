import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-string',
  title: 'Optimal Partition of String',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, partition the string into one or more **substrings** such that the characters in each substring are **unique**. That is, no letter appears in a single substring more than once.

Return the **minimum** number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacaba"',
      output: '4',
      explanation: 'Two possible partitions: "a","b","acab","a" (3, invalid since acab repeats) or "a","bac","ab","a" (4).',
    },
    {
      input: 's = "ssssss"',
      output: '6',
      explanation: 'Forced to split at each character since all are "s".',
    },
  ],
  hints: [
    'Greedy: keep a set of characters in the current substring. When you see a repeat, start a new substring.',
    'Greedy: keep a Set of characters in the current partition. When you see a repeat, start a new partition and reset the Set. The number of resets + 1 is the answer.',
    `\`\`\`js
let parts = 1;
const seen = new Set();
for (const c of s) {
  if (seen.has(c)) { parts++; seen.clear(); }
  seen.add(c);
}
return parts;\`\`\``
  ],
  functionName: 'partitionString',
  params: ['s'],
  starterCode: {
    javascript: 'function partitionString(s) {\n  \n}\n',
    python: 'def partitionString(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abacaba'], expected: 4 },
    { args: ['ssssss'], expected: 6 },
    { args: ['abc'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aab'], expected: 2 },
    { args: ['abcabc'], expected: 2 },
    { args: ['hdklqkj'], expected: 2 },
  ],
};
