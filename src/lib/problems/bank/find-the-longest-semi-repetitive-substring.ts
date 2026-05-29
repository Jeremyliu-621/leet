import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-semi-repetitive-substring',
  title: 'Find the Longest Semi-Repetitive Substring',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a **0-indexed** string \`s\` that consists of digits from \`0\` to \`9\`.

A string \`t\` is called **semi-repetitive** if there is at most one consecutive pair of equal digits within \`t\` (i.e., at most one index \`i\` such that \`t[i] == t[i+1]\`).

Return the length of the **longest semi-repetitive substring** within \`s\`.`,
  constraints: [
    '`1 <= s.length <= 50`',
    '`\'0\' <= s[i] <= \'9\'`',
  ],
  examples: [
    {
      input: 's = "52233"',
      output: '4',
      explanation: '"5223" (s[0..3]) is the longest semi-repetitive substring.',
    },
    {
      input: 's = "5"',
      output: '1',
    },
  ],
  hints: [
    'Use a sliding window. Track the number of adjacent equal pairs in the current window.',
    'Expand the right pointer. When equal-pair count exceeds 1, advance the left pointer until count ≤ 1.',
    'Track the maximum window size seen.',
  ],
  functionName: 'longestSemiRepetitiveSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function longestSemiRepetitiveSubstring(s) {

}`,
    typescript: `function longestSemiRepetitiveSubstring(s: string): number {

}`,
    python: `def longestSemiRepetitiveSubstring(s):
    pass`,
  },
  visibleTests: [
    { args: ['52233'], expected: 4 },
    { args: ['5'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['11'], expected: 2 },
    { args: ['00aa'], expected: 3 },
    { args: ['abab'], expected: 4 },
    { args: ['aab'], expected: 3 },
    { args: ['0001020'], expected: 6 },
  ],
};
