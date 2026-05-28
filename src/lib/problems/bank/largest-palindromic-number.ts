import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-palindromic-number',
  title: 'Largest Palindromic Number',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`num\` consisting of digits only.

Return *the **largest palindromic** integer (in the form of a string) that can be formed using digits taken from* \`num\`. It should not contain **leading zeroes**.

**Notes:**
- You do **not** have to use all the digits of \`num\`, but you must use **at least one** digit.
- The digits can be reordered.

**Example 1:**
\`\`\`
Input: num = "444947137"
Output: "7449447"
Explanation: Use digits 7, 4, 4, 9, 4, 4, 7 for the palindrome "7449447".
\`\`\`

**Example 2:**
\`\`\`
Input: num = "00009"
Output: "9"
Explanation: It is not valid to have leading zeros, so "9" is returned.
\`\`\``,
  examples: [
    { input: '"444947137"', output: '"7449447"' },
    { input: '"00009"', output: '"9"' },
  ],
  constraints: [
    '1 <= num.length <= 10^5',
    'num consists of digits.',
  ],
  hints: [
    'Count frequency of each digit 0–9. For each digit d, use floor(freq[d]/2) pairs in the half.',
    'Build the left half by placing pairs from 9 down to 0 (greedy for largest). Be careful about leading zeros: if no non-zero digit has pairs, just use the single largest digit.',
    'The center can be any digit with an odd frequency. Pick the largest such digit.',
  ],
  functionName: 'largestPalindromic',
  params: ['num'],
  starterCode: {
    javascript: `function largestPalindromic(num) {

}`,
    typescript: "function largestPalindromic(num: string): string {\n\n}",

    python: `def largestPalindromic(num):
    `,
  },
  visibleTests: [
    { args: ['444947137'], expected: '7449447' },
    { args: ['00009'], expected: '9' },
    { args: ['0'], expected: '0' },
  ],
  hiddenTests: [
    { args: ['1234'], expected: '4' },
    { args: ['9999'], expected: '9999' },
    { args: ['8888'], expected: '8888' },
    { args: ['12321'], expected: '21312' },
  ],
};
