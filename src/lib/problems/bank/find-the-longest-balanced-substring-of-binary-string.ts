import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-balanced-substring-of-binary-string',
  title: 'Find the Longest Balanced Substring of a Binary String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a binary string \`s\` consisting only of \`'0'\`s and \`'1'\`s.

A **balanced** substring is a substring of the form \`0...01...1\` where all \`0\`s come before all \`1\`s, and the number of \`0\`s equals the number of \`1\`s.

Return the length of the **longest** balanced substring.`,
  constraints: [
    '`1 <= s.length <= 50`',
    '`s[i]\` is either `\'0\'` or `\'1\'`.',
  ],
  examples: [
    {
      input: 's = "01000111"',
      output: '6',
      explanation: '"000111" is a balanced substring of length 6.',
    },
    {
      input: 's = "00111"',
      output: '4',
      explanation: '"0011" (at indices 0-3) is the longest balanced substring.',
    },
    {
      input: 's = "111"',
      output: '0',
      explanation: 'No balanced substring exists.',
    },
  ],
  hints: [
    'For each position where a block of 0s starts, count consecutive 0s followed by consecutive 1s.',
    'A balanced substring can use at most `min(zeros, ones)` of each, giving length `2 * min(zeros, ones)`.',
    'Iterate through all positions and take the maximum.',
  ],
  functionName: 'findTheLongestBalancedSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function findTheLongestBalancedSubstring(s) {
  let ans = 0, i = 0;
  while (i < s.length) {
    let zeros = 0, ones = 0;
    while (i < s.length && s[i] === '0') { zeros++; i++; }
    while (i < s.length && s[i] === '1') { ones++; i++; }
    ans = Math.max(ans, 2 * Math.min(zeros, ones));
  }
  return ans;
}`,
    typescript: `function findTheLongestBalancedSubstring(s: string): number {
  let ans = 0, i = 0;
  while (i < s.length) {
    let zeros = 0, ones = 0;
    while (i < s.length && s[i] === '0') { zeros++; i++; }
    while (i < s.length && s[i] === '1') { ones++; i++; }
    ans = Math.max(ans, 2 * Math.min(zeros, ones));
  }
  return ans;
}`,
    python: `def findTheLongestBalancedSubstring(s):
    ans, i = 0, 0
    while i < len(s):
        zeros = ones = 0
        while i < len(s) and s[i] == '0': zeros += 1; i += 1
        while i < len(s) and s[i] == '1': ones += 1; i += 1
        ans = max(ans, 2 * min(zeros, ones))
    return ans`,
  },
  visibleTests: [
    { args: ['01000111'], expected: 6 },
    { args: ['00111'], expected: 4 },
    { args: ['111'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['0100'], expected: 2 },
    { args: ['01'], expected: 2 },
    { args: ['0'], expected: 0 },
    { args: ['00'], expected: 0 },
    { args: ['0011'], expected: 4 },
    { args: ['001101'], expected: 4 },
    { args: ['0000111100'], expected: 8 },
  ],
};
