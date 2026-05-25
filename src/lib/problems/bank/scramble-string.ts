import type { Problem } from '../types';

export const problem: Problem = {
  id: 'scramble-string',
  title: 'Scramble String',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `We can scramble a string \`s\` to get a string \`t\` using the following algorithm:

1. If the length of the string is \`1\`, stop.
2. If the length of the string is \`> 1\`, do the following:
   - Split the string into two non-empty substrings at a random index, i.e., if the string is \`s\`, divide it to \`x\` and \`y\` where \`s = x + y\`.
   - **Randomly** decide to swap the two substrings or to keep them in the same order. i.e., after this step, \`s\` may become \`s = x + y\` or \`s = y + x\`.
   - Apply step 1 recursively on each of the two substrings \`x\` and \`y\`.

Given two strings \`s1\` and \`s2\` of **the same length**, return \`true\` if \`s2\` is a scrambled string of \`s1\`, otherwise, return \`false\`.`,
  constraints: [
    's1.length == s2.length',
    '1 <= s1.length <= 30',
    's1 and s2 consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's1 = "great", s2 = "rgeat"',
      output: 'true',
      explanation: 'Scramble "great" -> split into "gr"+"eat", swap -> "eat"+"gr", then scramble "eat"->"ate" is not needed. One valid split: "gr"+"eat" → "r"+"g"+"eat" → "rgeat".',
    },
    {
      input: 's1 = "abcde", s2 = "caebd"',
      output: 'false',
    },
    {
      input: 's1 = "a", s2 = "a"',
      output: 'true',
    },
  ],
  hints: [
    'Use memoized recursion: isScramble(a, b).',
    'First check if they have the same character frequencies — if not, return false.',
    'Try every split point i: either a[0..i] matches b[0..i] and a[i..] matches b[i..], or a[0..i] matches b[n-i..] and a[i..] matches b[0..n-i].',
  ],
  functionName: 'isScramble',
  params: ['s1', 's2'],
  starterCode: {
    javascript: 'function isScramble(s1, s2) {\n\n}\n',
    python: 'def isScramble(s1, s2):\n    pass\n',
  },
  visibleTests: [
    { args: ['great', 'rgeat'], expected: true },
    { args: ['abcde', 'caebd'], expected: false },
    { args: ['a', 'a'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: false },
    { args: ['ab', 'ba'], expected: true },
    { args: ['abc', 'bca'], expected: true },
    { args: ['great', 'great'], expected: true },
  ],
};
