import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-first-palindromic-string-in-the-array',
  title: 'Find First Palindromic String in the Array',
  difficulty: 'easy',
  tags: ['arrays', 'strings', 'two-pointers'],
  description: `Given a string array \`words\`, return the first **palindromic** string in the array. If there is no such string, return an empty string \`""\`.

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
      explanation: 'The first palindromic string in the array is "ada".',
    },
    {
      input: 'words = ["notapalindrome","racecar"]',
      output: '"racecar"',
      explanation: '"racecar" is palindromic; "notapalindrome" is not.',
    },
    {
      input: 'words = ["def","ghi"]',
      output: '""',
      explanation: 'There is no palindromic string in the array.',
    },
  ],
  hints: [
    'Iterate through `words` in order and check each word. Return the first one that passes the palindrome check.',
    'A simple palindrome check: compare the string to its reverse. In JavaScript: `word === word.split("").reverse().join("")`.',
    'Alternatively, use two pointers `l = 0` and `r = word.length - 1`, moving inward and comparing characters until they cross. This avoids allocating a reversed string.',
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
    for w in words:
        if w == w[::-1]: return w
    return ''`,
  },
  visibleTests: [
    { args: [['abc', 'car', 'ada', 'racecar', 'cool']], expected: 'ada' },
    { args: [['notapalindrome', 'racecar']], expected: 'racecar' },
    { args: [['def', 'ghi']], expected: '' },
  ],
  hiddenTests: [
    { args: [['abc', 'car', 'ada', 'racecar', 'cool']], expected: 'ada' },
    { args: [['notapalindrome', 'racecar']], expected: 'racecar' },
    { args: [['def', 'ghi']], expected: '' },
    { args: [['a']], expected: 'a' },
    { args: [['ab', 'aa']], expected: 'aa' },
    { args: [['xyz', 'level', 'madam']], expected: 'level' },
    { args: [['noon', 'civic', 'radar']], expected: 'noon' },
    { args: [['hello', 'world']], expected: '' },
  ],
};
