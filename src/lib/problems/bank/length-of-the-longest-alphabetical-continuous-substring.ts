import type { Problem } from '../types';

export const problem: Problem = {
  id: 'length-of-the-longest-alphabetical-continuous-substring',
  title: 'Length of the Longest Alphabetical Continuous Substring',
  difficulty: 'medium',
  tags: ['strings'],
  description: `An **alphabetical continuous string** is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string \`"abcdefghijklmnopqrstuvwxyz"\`.

- For example, \`"abc"\` is an alphabetical continuous string, while \`"acb"\` and \`"za"\` are not.

Given a string \`s\` consisting of lowercase letters only, return the **length of the longest alphabetical continuous substring**.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacaba"',
      output: '2',
      explanation: 'The longest alphabetical continuous substring is "ab", length 2.',
    },
    {
      input: 's = "abcde"',
      output: '5',
      explanation: 'The entire string "abcde" is alphabetical continuous, length 5.',
    },
  ],
  hints: [
    'Scan left to right, extending the current run when s[i] == s[i-1] + 1 (consecutive characters).',
    'Track the current run length and the maximum seen so far.',
  ],
  functionName: 'longestContinuousSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function longestContinuousSubstring(s) {

}`,
    python: `def longestContinuousSubstring(s):
    pass`,
  },
  visibleTests: [
    { args: ['abacaba'], expected: 2 },
    { args: ['abcde'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['z'], expected: 1 },
    { args: ['abc'], expected: 3 },
    { args: ['zyxw'], expected: 1 },
    { args: ['aabcde'], expected: 5 },
    { args: ['abcxyz'], expected: 3 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 26 },
  ],
};
