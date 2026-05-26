import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-palindrome',
  title: 'Longest Palindrome',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\` which consists of lowercase or uppercase letters, return the **length of the longest palindrome** that can be built with those letters.

Letters are **case sensitive**, so "Aa" is not considered a palindrome.`,
  constraints: [
    '`1 <= s.length <= 2000`',
    '`s` consists of lowercase and/or uppercase English letters',
  ],
  examples: [
    {
      input: 's = "abccccdd"',
      output: '7',
      explanation: 'One longest palindrome is "dccaccd" of length 7.',
    },
    {
      input: 's = "a"',
      output: '1',
    },
  ],
  hints: [
    'Count the frequency of each character.',
    'Any character with an even frequency can be fully used. A character with an odd frequency contributes `freq - 1` characters.',
    'If any character has an odd frequency, you can place one such character in the center, adding 1 to the total.',
  ],
  functionName: 'longestPalindrome',
  params: ['s'],
  starterCode: {
    javascript: `function longestPalindrome(s) {

}`,
    python: `def longestPalindrome(s):
    pass`,
  },
  visibleTests: [
    { args: ['abccccdd'], expected: 7 },
    { args: ['a'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['Aa'], expected: 1 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['aaabbb'], expected: 5 },
    { args: ['ccc'], expected: 3 },
  ],
};
