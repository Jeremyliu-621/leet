import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-string',
  title: 'Rotate String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two strings \`s\` and \`goal\`, return \`true\` if and only if \`s\` can become \`goal\` after some number of **shifts** on \`s\`.

A **shift** on \`s\` consists of moving the leftmost character of \`s\` to the rightmost position.

- For example, if \`s = "abcde"\`, then it will be \`"bcdea"\` after one shift.`,
  constraints: [
    '`1 <= s.length, goal.length <= 100`',
    '`s\` and \`goal\` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcde", goal = "cdeab"',
      output: 'true',
    },
    {
      input: 's = "abcde", goal = "abced"',
      output: 'false',
    },
  ],
  hints: [
    '`s` can be rotated into `goal` if and only if `goal` is a substring of `s + s` and both strings have the same length.',
    '`s` can become `goal` via rotation if and only if `goal` is a substring of `s + s` (and both have the same length).',
    '`return s.length === goal.length && (s + s).includes(goal);`'
  ],
  functionName: 'rotateString',
  params: ['s', 'goal'],
  starterCode: {
    javascript: `function rotateString(s, goal) {

}`,
    python: `def rotateString(s, goal):
    pass`,
  },
  visibleTests: [
    { args: ['abcde', 'cdeab'], expected: true },
    { args: ['abcde', 'abced'], expected: false },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['ab', 'ba'], expected: true },
    { args: ['aa', 'a'], expected: false },
    { args: ['abcde', 'abcde'], expected: true },
    { args: ['abcde', 'eabcd'], expected: true },
    { args: ['abc', 'bca'], expected: true },
    { args: ['abc', 'cab'], expected: true },
  ],
};
