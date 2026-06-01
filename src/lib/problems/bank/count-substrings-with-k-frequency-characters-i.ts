import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-k-frequency-characters-i',
  title: 'Count Substrings With K-Frequency Characters I',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\` and an integer \`k\`, return the total number of substrings of \`s\` where **at least one** character appears **at least** \`k\` times.`,
  constraints: [
    '1 <= s.length <= 3000',
    '1 <= k <= s.length',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacb", k = 2',
      output: '4',
      explanation: 'The substrings with at least one character appearing ≥2 times are: "aba" (a appears 2×), "abac" (a appears 2×), "abacb" (a appears 2×), "bacb" (b appears 2×). Total = 4.',
    },
    {
      input: 's = "aaa", k = 1',
      output: '6',
      explanation: 'Every substring has at least one character appearing ≥1 time. For length-3 string: 3+2+1=6 substrings.',
    },
    {
      input: 's = "abcd", k = 2',
      output: '0',
      explanation: 'No character appears ≥2 times in any substring.',
    },
  ],
  hints: [
    'Use complement counting: total_substrings - substrings where all char frequencies are < k.',
    'Slide a window [l, r] counting character frequencies. A window is "bad" (all freq < k) until some freq reaches k.',
    'Alternatively, O(n²) brute force: for each start, extend right while no freq reaches k; count substrings that do.',
  ],
  functionName: 'numberOfSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function numberOfSubstrings(s, k) {

}`,
    typescript: `function numberOfSubstrings(s: string, k: number): number {

}`,
    python: `def numberOfSubstrings(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['abacb', 2], expected: 4 },
    { args: ['aaa', 1], expected: 6 },
    { args: ['abcd', 2], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['aa', 2], expected: 1 },
    { args: ['aab', 2], expected: 2 },
    { args: ['abab', 2], expected: 3 },
    { args: ['aaab', 2], expected: 5 },
    { args: ['abcabc', 2], expected: 6 },
  ],
};
