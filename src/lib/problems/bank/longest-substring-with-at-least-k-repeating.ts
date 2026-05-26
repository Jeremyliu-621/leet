import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-substring-with-at-least-k-repeating',
  title: 'Longest Substring with At Least K Repeating Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` and an integer \`k\`, return the length of the **longest substring** of \`s\` such that the frequency of each character in this substring is **greater than or equal to** \`k\`.

If no such substring exists, return \`0\`.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of only lowercase English letters',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 's = "aaabb", k = 3',
      output: '3',
      explanation: 'The longest substring is "aaa", as \'a\' appears 3 times (>= k = 3).',
    },
    {
      input: 's = "ababbc", k = 2',
      output: '5',
      explanation: '"ababb" — \'a\' appears 2 times, \'b\' appears 3 times. Both >= 2.',
    },
  ],
  hints: [
    'A character that appears **fewer than k times** in the whole string cannot appear in any valid substring. Split the string at positions of such characters and recursively solve each part.',
    'The recursion terminates when every character in the current substring appears at least k times — the entire substring is valid.',
    'Alternatively, use a **sliding window with a fixed number of unique characters** (1 to 26). For each target number of distinct chars, use two pointers to find the longest window with exactly that many distinct chars where all have frequency >= k.',
  ],
  functionName: 'longestSubstring',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function longestSubstring(s, k) {\n  \n}\n',
    python: 'def longestSubstring(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['aaabb', 3], expected: 3 },
    { args: ['ababbc', 2], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['a', 2], expected: 0 },
    { args: ['aababc', 2], expected: 5 },
    { args: ['weitong', 2], expected: 0 },
    { args: ['bbaaacbd', 3], expected: 3 },
  ],
};
