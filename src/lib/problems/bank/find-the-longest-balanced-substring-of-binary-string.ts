import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-balanced-substring-of-binary-string',
  title: 'Find the Longest Balanced Substring of a Binary String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a binary string \`s\` consisting of only \`'0'\`s and \`'1'\`s.

A substring of \`s\` is considered **balanced** if **all** \`'0'\`s are before all \`'1'\`s and the number of \`'0'\`s is equal to the number of \`'1'\`s. Notice that the empty substring is considered balanced.

Return the length of the **longest balanced** substring of \`s\`.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 50',
    '0 <= s[i] <= 1',
  ],
  examples: [
    {
      input: 's = "01000111"',
      output: '6',
      explanation: '"000111" is balanced with 3 zeros and 3 ones.',
    },
    {
      input: 's = "00111"',
      output: '4',
      explanation: '"0011" has 2 zeros followed by 2 ones.',
    },
    {
      input: 's = "111"',
      output: '0',
      explanation: 'No balanced substring with equal 0s and 1s.',
    },
  ],
  hints: [
    'Iterate through all substrings and check if they are balanced (all 0s before 1s, equal counts). O(n^2) is fine given n ≤ 50.',
    'For a valid balanced substring: it must be of the form "000...111..." with equal counts. So check runs of 0s followed by runs of 1s.',
    'More efficiently: scan left to right counting consecutive 0s (zeros) and then consecutive 1s (ones). A valid segment contributes 2 * min(zeros, ones) chars.',
  ],
  functionName: 'findTheLongestBalancedSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function findTheLongestBalancedSubstring(s) {

}`,
    typescript: "function findTheLongestBalancedSubstring(s: string): number {\n\n}",

    python: `def findTheLongestBalancedSubstring(s):
    pass`,
  },
  visibleTests: [
    { args: ['01000111'], expected: 6 },
    { args: ['00111'], expected: 4 },
    { args: ['111'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['01'], expected: 2 },
    { args: ['0011'], expected: 4 },
    { args: ['001011'], expected: 2 },
  ],
};
