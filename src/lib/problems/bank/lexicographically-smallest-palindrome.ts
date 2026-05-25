import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-palindrome',
  title: 'Lexicographically Smallest Palindrome',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `You are given a string \`s\` consisting of **lowercase English letters**, and you are allowed to perform operations. In one operation, you can **replace** a character in \`s\` with another lowercase English letter.

Return the **lexicographically smallest** palindrome that can be made using the minimum number of operations.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "egcfe"',
      output: '"efcfe"',
      explanation: 'Replace s[1] = "g" with "f". "efcfe" is a palindrome and lexicographically smaller than using "e"s.',
    },
    {
      input: 's = "abcd"',
      output: '"abba"',
    },
  ],
  hints: [
    'Use two pointers from both ends.',
    'At each pair, replace the larger character with the smaller one.',
  ],
  functionName: 'makeSmallestPalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function makeSmallestPalindrome(s) {\n\n}\n',
    python: 'def makeSmallestPalindrome(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['egcfe'], expected: 'efcfe' },
    { args: ['abcd'], expected: 'abba' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aa'], expected: 'aa' },
    { args: ['seven'], expected: 'neven' },
    { args: ['zyxwvutsrqponmlkjihgfedcba'], expected: 'abcdefghijklmmlkjihgfedcba' },
  ],
};
