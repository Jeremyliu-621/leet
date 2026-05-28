import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-permutation',
  title: 'Palindrome Permutation',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, return \`true\` if a permutation of the string could form a **palindrome**, \`false\` otherwise.

A **palindrome** reads the same forwards and backwards. For a string to have a palindromic permutation:
- In an **even-length** string, every character must appear an even number of times.
- In an **odd-length** string, exactly one character may appear an odd number of times (it sits in the middle).`,
  constraints: ['1 <= s.length <= 5000', 's consists only of lowercase English letters.'],
  examples: [
    {
      input: 's = "code"',
      output: 'false',
      explanation:
        'All four characters appear once (odd count). At most one character can have an odd count for a palindrome.',
    },
    {
      input: 's = "aab"',
      output: 'true',
      explanation: '"aba" is a palindrome formed from the characters in "aab".',
    },
    {
      input: 's = "carerac"',
      output: 'true',
      explanation: '"racecar" is a palindrome formed from the characters in "carerac".',
    },
  ],
  hints: [
    'Count the frequency of each character in the string.',
    'A palindrome can have at most one character with an odd frequency (the middle character).',
    'Count how many characters have an odd frequency. Return true if that count is ≤ 1.',
  ],
  functionName: 'canPermutePalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function canPermutePalindrome(s) {\n  // your code here\n}\n',
    typescript: "function canPermutePalindrome(s: string): boolean {\n  // your code here\n}",

    python: 'def canPermutePalindrome(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['code'], expected: false },
    { args: ['aab'], expected: true },
    { args: ['carerac'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['aa'], expected: true },
    { args: ['aabbcd'], expected: false },
    { args: ['aabbccd'], expected: true },
    { args: ['aaabbbccc'], expected: false },
    { args: ['abcde'], expected: false },
    { args: ['aabb'], expected: true },
  ],
};
