import type { Problem } from '../types';

export const problem: Problem = {
  id: 'scramble-string',
  title: 'Scramble String',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `We can scramble a string \`s\` to get a string \`t\` using the following algorithm:

1. If the string has length 1, stop.
2. Split the string into two non-empty substrings at a random index \`i\` (not necessarily the same every time).
3. Randomly decide to **swap** the two substrings or keep them in the same order.
4. Recursively apply steps 1–3 on each substring.

Given two strings \`s1\` and \`s2\` of **the same length**, return \`true\` if \`s2\` is a scrambled string of \`s1\`, or \`false\` otherwise.

**DP approach:** \`dp[i][j][len]\` = can \`s1[i..i+len-1]\` be scrambled to \`s2[j..j+len-1]\`? For each split point \`k\`:
- No swap: \`dp[i][j][k] && dp[i+k][j+k][len-k]\`
- Swap: \`dp[i][j+len-k][k] && dp[i+k][j][len-k]\`

Use memoization to avoid recomputation.`,
  constraints: [
    's1.length == s2.length',
    '1 <= s1.length <= 30',
    's1 and s2 consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's1 = "great", s2 = "rgeat"',
      output: 'true',
      explanation: '"great" → split as "gr"|"eat" → swap → "eat"|"gr" → scramble "gr": split "g"|"r" → swap → "rg", giving "rgeat".',
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
    'Use 3D memoization: `memo[i][j][len]` where `i` is the start in s1, `j` is the start in s2, and `len` is the length of the substring.',
    'For each possible split position k (1 to len-1), check both the no-swap case and the swap case. Base case: if the substrings are equal, return true.',
    'As an optimization, first check if the two substrings have the same character frequencies — if not, they cannot be scrambles of each other.',
  ],
  functionName: 'isScramble',
  params: ['s1', 's2'],
  starterCode: {
    javascript: 'function isScramble(s1, s2) {\n\n}\n',
    typescript: "function isScramble(s1: string, s2: string): boolean {\n\n}",

    python: 'def isScramble(s1: str, s2: str) -> bool:\n    pass\n',
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
    { args: ['abc', 'cab'], expected: true },
    { args: ['abb', 'bba'], expected: true },
    { args: ['great', 'great'], expected: true },
    { args: ['ab', 'ab'], expected: true },
  ],
};
