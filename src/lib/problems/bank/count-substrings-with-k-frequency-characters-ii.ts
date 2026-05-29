import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-k-frequency-characters-ii',
  title: 'Count Substrings With K-Frequency Characters II',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` and an integer \`k\`, return the total number of **substrings** of \`s\` where at least one character appears **at least \`k\`** times.`,
  constraints: [
    '`1 <= s.length <= 3 * 10^5`',
    '`1 <= k <= s.length`',
    '`s` consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacb", k = 2',
      output: '4',
      explanation: 'Substrings with at least one char appearing ≥ 2 times: "aba" (a×2), "abac" (a×2), "bacb" (b×2), "abacb" (a×2, b×2). Total = 4.',
    },
    {
      input: 's = "aaa", k = 2',
      output: '3',
      explanation: '"aa" (a×2), "aaa" (a×3) starting at index 0, and "aa" starting at index 1. Total = 3.',
    },
  ],
  hints: [
    'Counting substrings WITH the property is equivalent to total substrings MINUS substrings WITHOUT the property.',
    'A substring has NO character appearing ≥ k times ↔ every character appears at most k-1 times. Use sliding window to count such substrings.',
    'Sliding window: expand right; if any character reaches frequency k, shrink from the left until no character has frequency k. All substrings ending at right and starting before left satisfy the "no k" condition.',
  ],
  functionName: 'countSubstringsWithKFrequencyII',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countSubstringsWithKFrequencyII(s, k) {

}`,
    typescript: 'function countSubstringsWithKFrequencyII(s: string, k: number): number {\n\n}',
    python: `def countSubstringsWithKFrequencyII(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['abacb', 2], expected: 4 },
    { args: ['aaa', 2], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['ab', 2], expected: 0 },
    { args: ['aabb', 2], expected: 5 },
    { args: ['abcabc', 2], expected: 6 },
    { args: ['zzzzzz', 3], expected: 10 },
  ],
};
