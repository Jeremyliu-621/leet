import type { Problem } from '../types';

export const problem: Problem = {
  id: 'using-robot-to-print-lexicographically-smallest-string',
  title: 'Using a Robot to Print the Lexicographically Smallest String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\` and a robot that currently holds an empty string \`t\`. Apply one of the following operations until both \`s\` and \`t\` are empty:

- **Remove** the **first** character of string \`s\` and give it to the robot. The robot will append this character to the string \`t\`.
- **Remove** the **last** character of string \`t\` and give it to the robot. The robot will write this character on paper.

Return the **lexicographically smallest** string that can be written on the paper.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "zza"',
      output: '"azz"',
      explanation: 'Push z, push z, push a, pop a, pop z, pop z → "azz".',
    },
    {
      input: 's = "bac"',
      output: '"abc"',
      explanation: 'Push b, push a, pop a (a ≤ suffix-min c), pop b (b ≤ c), push c, pop c → "abc".',
    },
  ],
  hints: [
    'Precompute the suffix minimum of s: suffMin[i] = minimum character in s[i..n-1].',
    'Greedily pop from the stack whenever the top character is ≤ the minimum character still remaining in s.',
    'If the stack top exceeds the suffix minimum, it must wait; otherwise writing it now is always optimal.',
  ],
  functionName: 'robotWithString',
  params: ['s'],
  starterCode: {
    javascript: `function robotWithString(s) {

}`,
    typescript: `function robotWithString(s: string): string {

}`,
    python: `def robotWithString(s):
    pass`,
  },
  visibleTests: [
    { args: ['zza'], expected: 'azz' },
    { args: ['bac'], expected: 'abc' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['ba'], expected: 'ab' },
    { args: ['bdda'], expected: 'addb' },
    { args: ['cab'], expected: 'abc' },
    { args: ['dcba'], expected: 'abcd' },
  ],
};
