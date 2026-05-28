import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-binary-subsequence-less-than-or-equal-to-k',
  title: 'Longest Binary Subsequence Less Than or Equal to K',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a binary string \`s\` and a positive integer \`k\`.

Return the **length** of the **longest** subsequence of \`s\` that makes up a **binary** number less than or equal to \`k\`.

**Note:**
- The subsequence can contain **leading zeroes**.
- The empty string is considered to have value \`0\`.
- A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`1 <= k <= 10^9`',
    '`s[i]` is either `"0"` or `"1"`.',
  ],
  examples: [
    {
      input: 's = "1001010", k = 5',
      output: '5',
      explanation: 'The longest valid subsequence has length 5: choosing indices 1,2,4,5,6 gives "00110" but reordered in original positions gives "00 1 1 0" → value 2 ≤ 5. One such subsequence is "01010" (indices 1,3,4,5,6... )',
    },
    {
      input: 's = "00101001", k = 1',
      output: '6',
      explanation: 'The subsequence "000001" (keeping all zeros + rightmost 1) has value 1 ≤ 1.',
    },
  ],
  hints: [
    'Process `s` from **right to left**. You can always include a `"0"` character without increasing the binary value (it acts as a leading zero since it\'s to the left of all chosen `"1"` characters). Always include every `"0"`.',
    'For `"1"` characters, greedily include them from right to left. The i-th included `"1"` (0-indexed from the right) has bit value `2^(chosen_length_so_far)`. Include it if the running total + this bit value ≤ k.',
    'Since k ≤ 10^9 < 2^30, you can never include more than 30 `"1"` digits in a valid subsequence. The algorithm terminates quickly in the worst case.',
  ],
  functionName: 'longestSubsequence',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function longestSubsequence(s, k) {

}`,
    python: `def longestSubsequence(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['1001010', 5], expected: 5 },
    { args: ['00101001', 1], expected: 6 },
    { args: ['0', 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['101', 5], expected: 3 },
    { args: ['1', 1], expected: 1 },
    { args: ['0000', 0], expected: 4 },
    { args: ['11111', 5], expected: 2 },
    { args: ['01111', 4], expected: 3 },
    { args: ['10', 1], expected: 1 },
    { args: ['110', 6], expected: 3 },
    { args: ['1010', 3], expected: 3 },
  ],
};
