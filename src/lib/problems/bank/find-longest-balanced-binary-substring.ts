import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-longest-balanced-binary-substring',
  title: 'Find the Longest Balanced Binary Substring',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a binary string \`s\` consisting only of \`'0'\` and \`'1'\` characters, find the length of the longest **balanced** substring.

A substring is **balanced** if:
- All zeroes come before all ones.
- The number of zeroes equals the number of ones.

The empty substring is considered balanced.

**Example 1:**
\`\`\`
Input: s = "01000111"
Output: 6
Explanation: "000111" is the longest balanced substring (3 zeroes then 3 ones).
\`\`\`

**Example 2:**
\`\`\`
Input: s = "00111"
Output: 4
Explanation: "0011" is the longest balanced substring.
\`\`\`

**Example 3:**
\`\`\`
Input: s = "111"
Output: 0
Explanation: No zeroes appear before any ones, so no balanced substring exists.
\`\`\``,
  examples: [
    {
      input: 's = "01000111"',
      output: '6',
      explanation: '"000111" has 3 zeroes followed by 3 ones.',
    },
    {
      input: 's = "00111"',
      output: '4',
      explanation: '"0011" has 2 zeroes followed by 2 ones.',
    },
    {
      input: 's = "111"',
      output: '0',
    },
  ],
  constraints: [
    '1 ≤ s.length ≤ 50',
    "s[i] is either '0' or '1'",
  ],
  hints: [
    'Scan the string and track consecutive runs of the same digit.',
    'Each time a run of 1s immediately follows a run of 0s, the balanced substring contributed is 2 × min(zeros_count, ones_count).',
    'Keep a running maximum of these contributions.',
  ],
  functionName: 'findTheLongestBalancedSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function findTheLongestBalancedSubstring(s) {
  // Return length of longest substring with equal 0s before 1s
}`,
    python: `def findTheLongestBalancedSubstring(s: str) -> int:
    # Return length of longest substring with equal 0s before 1s
    pass`,
  },
  visibleTests: [
    { args: ['01000111'], expected: 6 },
    { args: ['00111'], expected: 4 },
    { args: ['111'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['00111010'], expected: 4 },
    { args: ['01'], expected: 2 },
    { args: ['0011'], expected: 4 },
    { args: ['000000'], expected: 0 },
    { args: ['0'], expected: 0 },
    { args: ['000111000111'], expected: 6 },
  ],
};
