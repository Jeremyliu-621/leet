import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-first-palindromic-string',
  title: 'Find First Palindromic String in the Array',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given an array of strings \`words\`, return the first **palindromic** string in the array. If there is no such string, return an empty string \`""\`.

A string is **palindromic** if it reads the same forward and backward.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 100`',
    '`words[i]` consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abc","car","ada","racecar","cool"]',
      output: '"ada"',
      explanation: 'The first palindromic string is "ada".',
    },
    {
      input: 'words = ["notapalindrome","racecar"]',
      output: '"racecar"',
    },
    {
      input: 'words = ["def","ghi"]',
      output: '""',
    },
  ],
  hints: [
    'Check each string with two pointers from both ends.',
    'Return the first word where all mirrored characters match.',
  ],
  functionName: 'firstPalindrome',
  params: ['words'],
  starterCode: {
    javascript: 'function firstPalindrome(words) {\n  \n}\n',
    python: 'def firstPalindrome(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['abc', 'car', 'ada', 'racecar', 'cool']], expected: 'ada' },
    { args: [['notapalindrome', 'racecar']], expected: 'racecar' },
    { args: [['def', 'ghi']], expected: '' },
  ],
  hiddenTests: [
    { args: [['a']], expected: 'a' },
    { args: [['ab', 'ba', 'aba']], expected: 'aba' },
    { args: [['xyz', 'abc']], expected: '' },
    { args: [['madam', 'hello', 'level']], expected: 'madam' },
  ],
};
