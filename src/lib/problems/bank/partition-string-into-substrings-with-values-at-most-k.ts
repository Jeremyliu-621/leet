import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-string-into-substrings-with-values-at-most-k',
  title: 'Partition String Into Substrings With Values at Most K',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a string \`s\` consisting of digits, and a positive integer \`k\`.

A **partition** of a string is a set of non-overlapping, non-empty substrings such that their concatenation is \`s\`.

A partition is **valid** if every substring in it has an integer value ≤ \`k\` (with no leading zeros).

Return the **minimum** number of substrings in a valid partition of \`s\`, or \`-1\` if no valid partition exists.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is a digit from `1` to `9`',
    '`1 <= k <= 10^9`',
  ],
  examples: [
    {
      input: 's = "165462", k = 60',
      output: '4',
      explanation: 'Partition into "16", "54", "6", "2". Each part ≤ 60. No partition into 3 or fewer substrings is valid.',
    },
    {
      input: 's = "238182", k = 5',
      output: '-1',
      explanation: 'Digit "8" alone is greater than k = 5, so no valid partition exists.',
    },
  ],
  hints: [
    'Greedily extend the current number as long as its value stays ≤ k.',
    'Each time adding the next digit would exceed k, start a new substring with that digit.',
    'If any single digit exceeds k, return -1 immediately.',
  ],
  functionName: 'minimumPartition',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function minimumPartition(s, k) {

}`,
    typescript: `function minimumPartition(s: string, k: number): number {

}`,
    python: `def minimumPartition(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['165462', 60], expected: 4 },
    { args: ['238182', 5], expected: -1 },
    { args: ['1', 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['123456789', 10], expected: 9 },
    { args: ['999', 1000], expected: 1 },
    { args: ['999', 9], expected: 3 },
    { args: ['111', 11], expected: 2 },
    { args: ['99', 100], expected: 1 },
    { args: ['9', 8], expected: -1 },
    { args: ['12345', 12345], expected: 1 },
    { args: ['9999999999', 9], expected: 10 },
  ],
};
