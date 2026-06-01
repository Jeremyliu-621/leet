import type { Problem } from '../types';

export const problem: Problem = {
  id: 'manacher-palindrome-radius',
  title: "Longest Palindromic Substring via Manacher's Algorithm",
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a string \`s\`, return the **longest palindromic substring** using **Manacher's algorithm** in O(n) time.

Manacher's algorithm preprocesses \`s\` into a transformed string (by inserting separator characters like \`#\`) and then computes, for each center position, the **radius** of the longest palindrome centered there. This avoids the O(n²) naive expansion approach.

Return the longest palindromic substring. If there are ties, return the **first** one found (leftmost, shortest-starting, then longest).`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "babad"',
      output: '"bab"',
      explanation: '"bab" and "aba" are both valid palindromes; "bab" starts earlier.',
    },
    {
      input: 's = "cbbd"',
      output: '"bb"',
      explanation: '"bb" is the only 2-char palindrome.',
    },
    {
      input: 's = "a"',
      output: '"a"',
      explanation: 'Single character is a palindrome.',
    },
    {
      input: 's = "racecar"',
      output: '"racecar"',
      explanation: 'The entire string is a palindrome.',
    },
  ],
  hints: [
    'Transform s into t = "#a#b#a#" (insert # between every char and at edges). Now every palindrome (odd or even length) appears as an odd-length palindrome in t. Compute radius[] where radius[i] = half-length of palindrome centered at t[i].',
    'Use the key Manacher trick: track the current rightmost boundary R and its center C. For each i within [C-radius[C], C+radius[C]], mirror[i] = 2*C - i gives a free lower bound for radius[i]. Expand from there and update C, R when a new rightmost bound is found.',
    'The answer is the position i with maximum radius[i]. Convert back to the original string: center in s = (i-1)/2, half-length = (radius[i]-1)/2.',
  ],
  functionName: 'longestPalindromeManacher',
  params: ['s'],
  starterCode: {
    javascript: `function longestPalindromeManacher(s) {\n\n}`,
    typescript: `function longestPalindromeManacher(s: string): string {\n\n}`,
    python: `def longestPalindromeManacher(s: str) -> str:\n    pass`,
  },
  visibleTests: [
    { args: ['babad'], expected: 'bab' },
    { args: ['cbbd'], expected: 'bb' },
    { args: ['a'], expected: 'a' },
    { args: ['racecar'], expected: 'racecar' },
  ],
  hiddenTests: [
    { args: ['bb'], expected: 'bb' },
    { args: ['abcba'], expected: 'abcba' },
    { args: ['abacaba'], expected: 'abacaba' },
    { args: ['aacabdkacaa'], expected: 'aca' },
    { args: ['aaaa'], expected: 'aaaa' },
    { args: ['abcde'], expected: 'a' },
    { args: ['xyzyx'], expected: 'xyzyx' },
    { args: ['aabaa'], expected: 'aabaa' },
  ],
};
