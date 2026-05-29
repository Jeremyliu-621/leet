import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-palindrome-in-array',
  title: 'First Palindrome in Array',
  difficulty: 'easy',
  tags: ['strings', 'arrays', 'two-pointers'],
  description: `Given an array of strings \`words\`, return the **first palindromic** string in the array. If there is no such string, return an empty string \`""\`.

A string is **palindromic** if it reads the same forwards and backwards.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abc","car","ada","racecar","cool"]',
      output: '"ada"',
      explanation: '"abc" and "car" are not palindromes. "ada" reversed is "ada", so it is the first palindrome.',
    },
    {
      input: 'words = ["notapalindrome","racecar"]',
      output: '"racecar"',
      explanation: '"notapalindrome" is not a palindrome. "racecar" reversed is "racecar", so it is returned.',
    },
    {
      input: 'words = ["def","ghi"]',
      output: '""',
      explanation: 'Neither "def" nor "ghi" is a palindrome, so return "".',
    },
  ],
  hints: [
    'Iterate through the words from left to right. For each word, check whether it is a palindrome.',
    'A quick palindrome check: compare the word to its reverse — `word === word.split("").reverse().join("")`. Return the first word that passes.',
    'Alternatively, use two pointers: set `l = 0` and `r = word.length - 1`, advance inward while `word[l] === word[r]`, and declare it a palindrome only if the pointers cross without a mismatch.',
  ],
  functionName: 'firstPalindrome',
  params: ['words'],
  starterCode: {
    javascript: `function firstPalindrome(words) {
  // your code here
}`,
    typescript: 'function firstPalindrome(words: string[]): string {\n  // your code here\n}',
    python: `def firstPalindrome(words):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [['abc', 'car', 'ada', 'racecar', 'cool']], expected: 'ada' },
    { args: [['notapalindrome', 'racecar']], expected: 'racecar' },
    { args: [['def', 'ghi']], expected: '' },
  ],
  hiddenTests: [
    { args: [['a']], expected: 'a' },
    { args: [['ab', 'aa']], expected: 'aa' },
    { args: [['racecar', 'level']], expected: 'racecar' },
    { args: [['xyz']], expected: '' },
    { args: [['noon', 'civic', 'radar']], expected: 'noon' },
  ],
};
