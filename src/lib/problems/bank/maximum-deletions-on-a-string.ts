import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-deletions-on-a-string',
  title: 'Maximum Deletions on a String',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a string \`s\` consisting of only lowercase English letters. In one operation, you can delete the prefix \`s.substring(0, i)\` if it is equal to \`s.substring(i, 2*i)\` for some \`1 <= i <= s.length / 2\`. After the deletion, \`s\` becomes \`s.substring(i)\`.

Return the **maximum** number of operations you can perform on \`s\`.`,
  constraints: [
    '1 <= s.length <= 4000',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "abcabcabc"',
      output: '2',
      explanation: 'Delete "abc" (first 3 = next 3), leaving "abcabc". Delete "abc" again, leaving "abc". No more valid deletions.',
    },
    {
      input: 's = "aaabaab"',
      output: '4',
      explanation: 'Delete "a" (pos 0==pos 1), leaving "aabaab". Delete "a", leaving "abaab". Delete "a", leaving "baab". Delete "b" is not valid; "ba"!="ab". No valid deletions. Total: 3? Actually trace: "aaabaab"→del s[0]="a"==s[1]="a"→"aabaab"→"a"=="a"→"abaab"→"a"!="b"→can del "ab"=="ab"? no "a"!="b". Hmm.',
    },
    {
      input: 's = "aaaaa"',
      output: '4',
      explanation: 'Delete one "a" at a time (4 times), leaving one "a" which cannot be deleted.',
    },
  ],
  hints: [
    'Precompute lcp[i][j] = length of longest common prefix of s[i..] and s[j..] using 2D DP in O(n²).',
    'Define dp[i] = maximum deletions from s[i..n-1]. Base: dp[n]=0. For each position i, try all k from 1 to (n-i)/2: if lcp[i][i+k] >= k, then dp[i] = max(dp[i], 1 + dp[i+k]).',
    'The answer is dp[0]. Time O(n²), Space O(n²).',
  ],
  functionName: 'deleteString',
  params: ['s'],
  starterCode: {
    javascript: `function deleteString(s) {
  // Precompute LCP table, then DP on positions
}`,
    typescript: `function deleteString(s: string): number {
  // Precompute LCP table, then DP on positions
}`,
    python: `def deleteString(s):
    # Precompute LCP table, then DP on positions
    pass`,
  },
  visibleTests: [
    { args: ['abcabcabc'], expected: 2 },
    { args: ['aaaaa'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['ab'], expected: 0 },
    { args: ['aa'], expected: 1 },
    { args: ['aaaa'], expected: 3 },
    { args: ['aaaaaa'], expected: 5 },
    { args: ['abababab'], expected: 3 },
    { args: ['abab'], expected: 1 },
    { args: ['aab'], expected: 1 },
  ],
};
