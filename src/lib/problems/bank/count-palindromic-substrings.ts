import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-palindromic-substrings',
  title: 'Count Palindromic Substrings',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a string \`s\`, count the total number of substrings that are palindromes.

A **palindrome** reads the same forwards and backwards. A **substring** is a contiguous sequence of characters. Every single character is a palindrome.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abc"',
      output: '3',
      explanation: 'Palindromic substrings: "a", "b", "c". Three single characters.',
    },
    {
      input: 's = "aaa"',
      output: '6',
      explanation: '"a" (×3), "aa" (×2), "aaa" (×1) = 6 palindromic substrings.',
    },
    {
      input: 's = "racecar"',
      output: '10',
      explanation: 'Includes each character, "aceca", "racecar", "cec", "ece", and others.',
    },
  ],
  hints: [
    'Level 1: Expand-around-center: for each possible center position in the string, expand outward as long as the characters match.',
    'Level 2: There are 2n-1 possible centers: n centers for odd-length palindromes (each character) and n-1 centers for even-length palindromes (between consecutive characters). For each center, expand while left and right characters match and count each valid expansion.',
    'Level 3: `let count = 0; for (let i = 0; i < s.length; i++) { for (let l = i, r = i; l >= 0 && r < s.length && s[l] === s[r]; l--, r++) count++; for (let l = i, r = i + 1; l >= 0 && r < s.length && s[l] === s[r]; l--, r++) count++; } return count;`',
  ],
  functionName: 'countPalindromicSubstrings',
  params: ['s'],
  starterCode: {
    javascript: 'function countPalindromicSubstrings(s) {\n  // your code here\n}\n',
    typescript: "function countPalindromicSubstrings(s: string): number {\n  // your code here\n}",

    python: 'def countPalindromicSubstrings(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abc'], expected: 3 },
    { args: ['aaa'], expected: 6 },
    { args: ['racecar'], expected: 10 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 3 },
    { args: ['aba'], expected: 4 },
    { args: ['abba'], expected: 6 },
    { args: ['abcba'], expected: 7 },
    { args: ['abcd'], expected: 4 },
  ],
};
