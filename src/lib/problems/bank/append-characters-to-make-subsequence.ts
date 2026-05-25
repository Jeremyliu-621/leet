import type { Problem } from '../types';

export const problem: Problem = {
  id: 'append-characters-to-make-subsequence',
  title: 'Append Characters to String to Make Subsequence',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given two strings \`s\` and \`t\` consisting of only lowercase English letters.

Return the minimum number of characters that need to be appended to the end of \`s\` so that \`t\` becomes a **subsequence** of \`s\`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.`,
  constraints: [
    '`1 <= s.length, t.length <= 10^5`',
    '`s` and `t` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "coaching", t = "coding"',
      output: '4',
      explanation: 'We match "co" from t (at indices 0,1 of s). Then "ding" needs to be appended. 4 characters.',
    },
    {
      input: 's = "abcde", t = "a"',
      output: '0',
      explanation: '"a" is already a subsequence of s.',
    },
    {
      input: 's = "z", t = "abcde"',
      output: '5',
      explanation: 'No characters of t are matched. Need to append all 5.',
    },
  ],
  hints: [
    'Use two pointers: advance the t pointer whenever s[i] == t[j]. At the end, t.length - j characters remain.',
  ],
  functionName: 'appendCharacters',
  params: ['s', 't'],
  starterCode: {
    javascript: `function appendCharacters(s, t) {

}`,
    python: `def appendCharacters(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['coaching', 'coding'], expected: 4 },
    { args: ['abcde', 'a'], expected: 0 },
    { args: ['z', 'abcde'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 0 },
    { args: ['abc', 'abc'], expected: 0 },
    { args: ['abc', 'abcd'], expected: 1 },
    { args: ['aaa', 'aaaa'], expected: 1 },
    { args: ['xyz', 'abc'], expected: 3 },
  ],
};
