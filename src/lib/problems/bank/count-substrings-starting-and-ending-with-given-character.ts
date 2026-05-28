import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-starting-and-ending-with-given-character',
  title: 'Count Substrings Starting and Ending with Given Character',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` and a character \`c\`. Return the total number of substrings of \`s\` that start **and** end with \`c\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists only of lowercase English letters.',
    'c is a lowercase English letter.',
  ],
  examples: [
    {
      input: 's = "abacaba", c = "a"',
      output: '10',
      explanation: '"a" appears 4 times. Single-char substrings: 4. Two-endpoint substrings: C(4,2) = 6. Total = 10.',
    },
    {
      input: 's = "bcb", c = "b"',
      output: '3',
      explanation: '"b" appears at indices 0 and 2. Single-char: 2. Pairs: C(2,2)=1. Total = 3.',
    },
  ],
  hints: [
    'Count the number of occurrences of c in s. Call it cnt.',
    'Each single occurrence is its own valid substring: cnt choices.',
    'Each pair of occurrences forms a valid substring: C(cnt, 2) = cnt*(cnt-1)/2.',
    'Answer = cnt + cnt*(cnt-1)/2.',
  ],
  functionName: 'countSubstrings',
  params: ['s', 'c'],
  starterCode: {
    javascript: 'function countSubstrings(s, c) {\n  \n}\n',
    typescript: "function countSubstrings(s: string, c: string): number {\n  \n}",

    python: 'def countSubstrings(s, c):\n    pass\n',
  },
  visibleTests: [
    { args: ['abacaba', 'a'], expected: 10 },
    { args: ['bcb', 'b'], expected: 3 },
    { args: ['a', 'a'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['abc', 'd'], expected: 0 },
    { args: ['aa', 'a'], expected: 3 },
    { args: ['aaa', 'a'], expected: 6 },
    { args: ['abcd', 'a'], expected: 1 },
    { args: ['zzzz', 'z'], expected: 10 },
  ],
};
