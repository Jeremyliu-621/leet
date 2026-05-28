import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-string-great',
  title: 'Make The String Great',
  difficulty: 'easy',
  tags: ['stack', 'strings'],
  description: `Given a string \`s\` of lower and upper case English letters.

A good string is a string which doesn't have **two adjacent characters** \`s[i]\` and \`s[i + 1]\` where:
- \`0 <= i <= s.length - 2\`
- \`s[i]\` is a lower-case letter and \`s[i + 1]\` is the same letter but in upper-case or **vice-versa**.

Make the string good by repeatedly removing such adjacent characters until no such pair exists. Return the resulting string. The answer is guaranteed to be unique.`,
  constraints: [
    '1 <= s.length <= 100',
    's contains only lower and upper case English letters.',
  ],
  examples: [
    {
      input: 's = "leEeetcode"',
      output: '"leetcode"',
      explanation: 'Remove "eE" to get "leetcode".',
    },
    {
      input: 's = "abBAcC"',
      output: '""',
      explanation: 'Remove all pairs: "bB", then "aA", then "cC".',
    },
    { input: 's = "s"', output: '"s"' },
  ],
  hints: [
    'Use a stack. For each character, check if the top of the stack is the same letter in opposite case.',
    'If so, pop the stack. Otherwise push the current character.',
    'Two characters form a bad pair if they are the same letter with |c1 - c2| == 32.',
  ],
  functionName: 'makeGood',
  params: ['s'],
  starterCode: {
    javascript: `function makeGood(s) {

}`,
    python: `def makeGood(s):
    pass`,
  },
  visibleTests: [
    { args: ['leEeetcode'], expected: 'leetcode' },
    { args: ['abBAcC'], expected: '' },
    { args: ['s'], expected: 's' },
  ],
  hiddenTests: [
    { args: ['Aa'], expected: '' },
    { args: ['aAbBcC'], expected: '' },
    { args: ['abc'], expected: 'abc' },
    { args: ['AaBa'], expected: 'Ba' },
    { args: ['aA'], expected: '' },
  ],
};
