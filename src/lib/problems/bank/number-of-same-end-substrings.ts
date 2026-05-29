import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-same-end-substrings',
  title: 'Number of Same-End Substrings',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `Given a **0-indexed** string \`s\` and a 2D integer array \`queries\` where \`queries[i] = [l, r]\`, return an array \`ans\` where \`ans[i]\` is the number of substrings of \`s[l..r]\` whose first and last characters are the same.

A **substring** is a contiguous non-empty sequence of characters within a string.`,
  constraints: [
    '2 <= s.length <= 3 * 10^4',
    '1 <= queries.length <= 3 * 10^4',
    '0 <= l <= r < s.length',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "abcaab", queries = [[0,0],[1,4],[2,5],[0,5]]',
      output: '[1,5,5,10]',
      explanation: 'Query [0,0]="a": 1. Query [1,4]="bcaa": b(1)+c(1)+a(2)=1+1+3=5. Query [2,5]="caab": c(1)+a(2)+b(1)=1+3+1=5. Query [0,5]="abcaab": a(3)+b(2)+c(1)=6+3+1=10.',
    },
    {
      input: 's = "abcd", queries = [[0,3]]',
      output: '[4]',
      explanation: 'Single-char substrings "a","b","c","d" each start=end. No multi-char substrings with same first/last.',
    },
  ],
  hints: [
    'For a fixed character c, if there are m occurrences of c in s[l..r], the number of substrings starting and ending with c is m*(m+1)/2.',
    'Precompute prefix counts for each of the 26 characters. For query [l,r], count occurrences of each character in O(1) using prefix arrays.',
    'Sum m*(m+1)/2 over all 26 characters where m = prefix[c][r+1] - prefix[c][l].',
  ],
  functionName: 'sameEndSubstrings',
  params: ['s', 'queries'],
  starterCode: {
    javascript: `function sameEndSubstrings(s, queries) {
  // Prefix count approach: for each char c, m*(m+1)/2 substrings
}`,
    typescript: `function sameEndSubstrings(s: string, queries: number[][]): number[] {
  // Prefix count approach: for each char c, m*(m+1)/2 substrings
}`,
    python: `def sameEndSubstrings(s, queries):
    # Prefix count approach: for each char c, m*(m+1)/2 substrings
    pass`,
  },
  visibleTests: [
    { args: ['abcaab', [[0,0],[1,4],[2,5],[0,5]]], expected: [1,5,5,10] },
    { args: ['abcd', [[0,3]]], expected: [4] },
  ],
  hiddenTests: [
    { args: ['aa', [[0,1]]], expected: [3] },
    { args: ['aaaa', [[0,3]]], expected: [10] },
    { args: ['abab', [[0,3],[0,1],[2,3]]], expected: [6,2,2] },
    { args: ['a', [[0,0]]], expected: [1] },
    { args: ['abc', [[0,2],[0,1],[1,2]]], expected: [3,2,2] },
    { args: ['aabb', [[0,3],[0,1],[2,3]]], expected: [6,3,3] },
  ],
};
