import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-substring-partition-of-equal-character-frequency',
  title: 'Minimum Substring Partition of Equal Character Frequency',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming', 'hash-map'],
  description: `Given a string \`s\`, partition it into one or more substrings such that each **partition** satisfies the following conditions:

- Every character in the substring that appears **at least once** must appear the **same number** of times as every other character that appears in it.

Return the **minimum** number of partitions needed.

**Note:** Each character of \`s\` belongs to exactly one partition.`,
  constraints: [
    '`1 <= s.length <= 2000`',
    '`s` consists only of English lowercase letters.',
  ],
  examples: [
    {
      input: 's = "fabccddg"',
      output: '3',
      explanation: 'One valid 3-partition: "fab" (f×1, a×1, b×1 — all equal), "ccdd" (c×2, d×2 — all equal), "g" (g×1 — trivially equal). No 2-partition works: every way to split yields at least one part with unequal character frequencies.',
    },
    {
      input: 's = "abcde"',
      output: '1',
      explanation: 'Each character appears exactly once, so the whole string is a valid partition.',
    },
  ],
  hints: [
    'Use dynamic programming: dp[i] = minimum partitions to cover s[0..i-1].',
    'For each starting position i, extend substring s[i..j] incrementally.',
    'Track the character frequency map and the maximum frequency.',
    'A substring is valid if max_frequency × distinct_count == substring_length.',
    'Update dp[j+1] = min(dp[j+1], dp[i] + 1) for each valid partition s[i..j].',
  ],
  functionName: 'minimumSubstringsInPartition',
  params: ['s'],
  starterCode: {
    javascript: `function minimumSubstringsInPartition(s) {

}`,
    typescript: `function minimumSubstringsInPartition(s: string): number {

}`,
    python: `def minimumSubstringsInPartition(s):
    pass`,
  },
  visibleTests: [
    { args: ['fabccddg'], expected: 3 },
    { args: ['abcde'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 1 },
    { args: ['ab'], expected: 1 },
    { args: ['aab'], expected: 2 },
    { args: ['aabb'], expected: 1 },
    { args: ['aabc'], expected: 2 },
    { args: ['aabbcc'], expected: 1 },
  ],
};
