import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-first-palindromic-string-in-array',
  title: 'Find First Palindromic String in the Array',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given an array of strings \`words\`, return the **first palindromic** string in the array. If there is no such string, return an **empty string** \`""\`.

A string is **palindromic** if it reads the same forward and backward.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abc","car","ada","racecar","cool"]',
      output: '"ada"',
      explanation: '"ada" is the first palindromic string. "abc" and "car" are not palindromes.',
    },
    {
      input: 'words = ["notapalindrome","racecar"]',
      output: '"racecar"',
      explanation: '"notapalindrome" is not a palindrome, so we check "racecar", which is.',
    },
  ],
  hints: [
    'A string is a palindrome if it equals its reverse. In JavaScript: s === s.split("").reverse().join("").',
    'Iterate through the array from left to right and return the first string that is a palindrome.',
    'If no palindrome is found after checking all strings, return an empty string "".',
  ],
  functionName: 'firstPalindrome',
  params: ['words'],
  starterCode: {
    javascript: `function firstPalindrome(words) {
  for (const w of words) if (w === w.split('').reverse().join('')) return w;
  return '';
}`,
    typescript: `function firstPalindrome(words: string[]): string {
  for (const w of words) if (w === w.split('').reverse().join('')) return w;
  return '';
}`,
    python: `def firstPalindrome(words):
    words = list(words.to_py()) if hasattr(words, 'to_py') else list(words)
    for w in words:
        if w == w[::-1]: return w
    return ''`,
  },
  visibleTests: [
    { args: [['abc', 'car', 'ada', 'racecar', 'cool']], expected: 'ada' },
    { args: [['notapalindrome', 'racecar']], expected: 'racecar' },
    { args: [['def', 'ghi']], expected: '' },
    { args: [['a']], expected: 'a' },
    { args: [['aba', 'bab']], expected: 'aba' },
  ],
  hiddenTests: [
    { args: [['abc', 'def']], expected: '' },
    { args: [['aa', 'bb', 'cc']], expected: 'aa' },
    { args: [['xyz', 'aba', 'cba', 'aba']], expected: 'aba' },
    { args: [['level', 'noon', 'racecar']], expected: 'level' },
    { args: [['ab', 'ba', 'aba']], expected: 'aba' },
  ],
};
