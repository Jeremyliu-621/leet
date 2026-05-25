import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-palindromic-substring',
  title: 'Longest Palindromic Substring',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a string \`s\`, return the **longest palindromic substring** in \`s\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consist of only digits and English letters',
  ],
  examples: [
    { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
    { input: 's = "cbbd"', output: '"bb"' },
  ],
  hints: [
    'Expand around center: for each position i, expand outward checking s[l] == s[r].',
    'Try both odd-length (center at i) and even-length (center between i and i+1) palindromes.',
  ],
  functionName: 'longestPalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function longestPalindrome(s) {\n\n}\n',
    python: 'def longestPalindrome(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['cbbd'], expected: 'bb' },
    { args: ['racecar'], expected: 'racecar' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['ab'], expected: 'a' },
    { args: ['abba'], expected: 'abba' },
    { args: ['noon'], expected: 'noon' },
  ],
};
