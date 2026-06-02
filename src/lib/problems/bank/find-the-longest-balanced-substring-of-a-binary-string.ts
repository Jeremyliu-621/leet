import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-balanced-substring-of-a-binary-string',
  title: 'Find the Longest Balanced Substring of a Binary String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a binary string \`s\` consisting only of zeroes and ones.

A substring of \`s\` is considered **balanced** if **all zeroes are before ones** and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered balanced.

Return *the length of the longest balanced substring of* \`s\`.

**Example 1:**
\`\`\`
Input: s = "01000111"
Output: 6
Explanation: The longest balanced substring is "000111", which has length 6.
\`\`\`

**Example 2:**
\`\`\`
Input: s = "00111"
Output: 4
Explanation: The longest balanced substring is "0011", which has length 4.
\`\`\`

**Example 3:**
\`\`\`
Input: s = "111"
Output: 0
\`\`\``,
  examples: [
    { input: '"01000111"', output: '6' },
    { input: '"00111"', output: '4' },
    { input: '"111"', output: '0' },
  ],
  constraints: [
    '1 <= s.length <= 50',
    's[i] is either \'0\' or \'1\'.',
  ],
  hints: [
    'Since the string is short (≤50), you can try all O(n²) substrings and check each one.',
    'A valid balanced substring has all 0s before all 1s and equal counts. Once you see a 1 followed by a 0, the run of 0s has ended.',
    'Scan runs: for each run of 1s, pair it with the immediately preceding run of 0s — the contribution is 2 × min(zeros, ones).',
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
    { args: ['01'], expected: 2 },
    { args: ['0011'], expected: 4 },
    { args: ['000000'], expected: 0 },
    { args: ['0101'], expected: 2 },
  ],
};
