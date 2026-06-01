import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-k-subsequences-of-a-string-with-maximum-beauty',
  title: 'Count K-Subsequences of a String With Maximum Beauty',
  difficulty: 'medium',
  tags: ['strings', 'math', 'hash-map'],
  description: `You are given a string \`s\` and an integer \`k\`.

A **k-subsequence** is a **subsequence** of \`s\`, having length \`k\`, with all **distinct** characters.

The **beauty** of array \`a\` equals the sum of \`cnt(a[i], s)\` for each \`i\`, where \`cnt(x, s)\` is the number of times the character \`x\` occurs in \`s\`.

Return *the number of k-subsequences having the **maximum** beauty*, modulo \`10^9 + 7\`.

**Note:** Two subsequences are distinct if they are formed from different indices.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    '1 <= k <= 26',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "bcca", k = 2',
      output: '4',
      explanation:
        'Frequencies: b=1, c=2, a=1. Max beauty = 2+1=3, achieved by {c,b} or {c,a}. Subsequences: {c,b}→2*1=2 ways, {c,a}→2*1=2 ways. Total=4.',
    },
    {
      input: 's = "abbcd", k = 4',
      output: '2',
      explanation:
        'Frequencies: a=1, b=2, c=1, d=1. Top 4: 2,1,1,1 (max beauty=5). All distinct characters must include b and any 3 of {a,c,d}. C(3,3)*2=1*2=2.',
    },
  ],
  hints: [
    'Sort character frequencies descending. Max beauty = sum of top k frequencies.',
    'Characters with frequency > min_freq (the k-th largest) are mandatory picks.',
    'From those tied at min_freq, choose exactly (k - above) more. Ways = C(tied, k-above) * prod_above * min_freq^(k-above), modulo 10^9+7.',
  ],
  functionName: 'countKSubsequencesWithMaxBeauty',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function countKSubsequencesWithMaxBeauty(s, k) {\n\n}\n',
    typescript: 'function countKSubsequencesWithMaxBeauty(s: string, k: number): number {\n\n}\n',
    python: 'def countKSubsequencesWithMaxBeauty(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['bcca', 2], expected: 4 },
    { args: ['abbcd', 4], expected: 2 },
  ],
  hiddenTests: [
    { args: ['abc', 2], expected: 3 },
    { args: ['abc', 3], expected: 1 },
    { args: ['a', 1], expected: 1 },
    { args: ['aabb', 2], expected: 4 },
    { args: ['abc', 4], expected: 0 },
    { args: ['aaa', 1], expected: 3 },
    { args: ['abbc', 3], expected: 2 },
  ],
};
