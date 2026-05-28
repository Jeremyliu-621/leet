import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-ideal-subsequence',
  title: 'Longest Ideal Subsequence',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given a string \`s\` consisting of lowercase letters and an integer \`k\`. We call a string \`t\` **ideal** if the following conditions are satisfied:

- \`t\` is a **subsequence** of the string \`s\`.
- The absolute difference in the alphabet order of every two **adjacent** letters in \`t\` is less than or equal to \`k\`.

Return the **length** of the **longest** ideal string.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '0 <= k <= 25',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "acfgbd", k = 2',
      output: '4',
      explanation: 'The longest ideal string is "acbd". The length of this string is 4.',
    },
    {
      input: 's = "abcd", k = 3',
      output: '4',
      explanation: 'The longest ideal string is "abcd". The length of this string is 4.',
    },
  ],
  hints: [
    'For each character position, consider which previous characters it can follow (within distance k).',
    'Maintain dp[c] = longest ideal subsequence ending with character c.',
    'For each new char, dp[c] = 1 + max(dp[c-k..c+k]). Answer is max(dp).',
  ],
  functionName: 'longestIdealString',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function longestIdealString(s, k) {\n\n}\n',
    typescript: "function longestIdealString(s: string, k: number): number {\n\n}",

    python: 'def longestIdealString(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['acfgbd', 2], expected: 4 },
    { args: ['abcd', 3], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a', 0], expected: 1 },
    { args: ['az', 25], expected: 2 },
    { args: ['bab', 1], expected: 3 },
    { args: ['eduinf', 5], expected: 4 },
  ],
};
