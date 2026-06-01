import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-the-length-of-two-palindromic-subsequences',
  title: 'Maximum Product of the Length of Two Palindromic Subsequences',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming', 'bit-manipulation', 'backtracking'],
  description: `Given a string \`s\`, find two **non-overlapping palindromic subsequences** of \`s\` such that the **product** of their lengths is **maximized**.

The two subsequences must be formed from disjoint index sets (no index is used by both).

Return the **maximum product** of the lengths of the two palindromic subsequences.

**Constraints note:** \`s.length <= 12\`, making bitmask DP over all 2^12 = 4096 subsets tractable.

**Approach:**
1. For each bitmask (subset of character positions), compute the length of the longest palindromic subsequence (LPS) of the corresponding characters.
2. Then for each subset mask, multiply \`lps[mask] × maxLPS[complement]\` where complement = all other positions.
3. Use a SOS (Sum over Subsets) DP to find the maximum LPS in each complement subset efficiently.`,
  constraints: [
    '`2 <= s.length <= 12`',
    '`s\` consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "leetcodecom"',
      output: '9',
      explanation: 'Take palindromic subsequences of lengths 3 and 3. 3 × 3 = 9.',
    },
    {
      input: 's = "bb"',
      output: '1',
      explanation: 'Take one "b" and one "b" as two single-character palindromes. 1 × 1 = 1.',
    },
    {
      input: 's = "aabb"',
      output: '4',
      explanation: '"aa" (length 2) and "bb" (length 2) are non-overlapping palindromes. 2 × 2 = 4.',
    },
  ],
  hints: [
    'With s.length ≤ 12, enumerate all 2^12 = 4096 subsets. For each subset, extract the characters at the set bit positions and compute the longest palindromic subsequence (LPS) using classic DP.',
    'LPS of a string can be computed with O(n²) DP: dp[i][j] = LPS of substring [i..j]. Base: dp[i][i]=1. Recurrence: if s[i]==s[j], dp[i][j]=dp[i+1][j-1]+2; else max(dp[i+1][j], dp[i][j-1]).',
    'For each subset mask, the "other" subset to pair it with can be any non-overlapping subset. Precompute maxLPS[mask] = max lps over all sub-masks, then for each mask multiply lps[mask] × maxLPS[full ^ mask].',
  ],
  functionName: 'maxProduct',
  params: ['s'],
  starterCode: {
    javascript: `function maxProduct(s) {

}`,
    typescript: `function maxProduct(s: string): number {

}`,
    python: `def maxProduct(s):
    pass`,
  },
  visibleTests: [
    { args: ['leetcodecom'], expected: 9 },
    { args: ['bb'], expected: 1 },
    { args: ['aabb'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['ab'], expected: 1 },
    { args: ['aa'], expected: 1 },
    { args: ['aaa'], expected: 2 },
    { args: ['aba'], expected: 2 },
    { args: ['abba'], expected: 4 },
    { args: ['abcba'], expected: 6 },
    { args: ['zzzzzzzzzzzz'], expected: 36 },
  ],
};
