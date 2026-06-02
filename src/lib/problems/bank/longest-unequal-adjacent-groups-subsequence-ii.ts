import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-unequal-adjacent-groups-subsequence-ii',
  title: 'Longest Unequal Adjacent Groups Subsequence II',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a string array \`words\` and a binary array \`groups\`, both of length \`n\`.

You need to select the **longest subsequence** of indices from \`0\` to \`n - 1\`, such that for the subsequence denoted as \`i₀, i₁, ..., iₖ₋₁\`:

- **Adjacent groups differ**: \`groups[iⱼ] ≠ groups[iⱼ₊₁]\` for each \`0 <= j < k - 1\`.
- **Adjacent words are similar**: \`words[iⱼ]\` and \`words[iⱼ₊₁]\` have the **same length** and a **Hamming distance** of exactly \`1\`.

Return a string array of the selected words in the subsequence. If there are multiple answers of the same length, return any of them.`,
  constraints: [
    '`1 <= n <= 1000`',
    '`1 <= words[i].length <= 10`',
    '`groups.length == n`',
    '`groups[i]` is either `0` or `1`.',
    '`words[i]` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["bab","dab","cab"], groups = [1,2,2]',
      output: '["bab","dab"]',
      explanation: 'groups[0]≠groups[1], hamming("bab","dab")=1. Length 2 is optimal.',
    },
    {
      input: 'words = ["a","b","c","d"], groups = [1,2,3,4]',
      output: '["a","b","c","d"]',
      explanation: 'All adjacent pairs differ in group and have hamming distance 1. Full array is valid.',
    },
  ],
  hints: [
    'Use dynamic programming: `dp[i]` = length of longest valid subsequence ending at index `i`.',
    'For each `i`, scan all `j < i`. If `groups[i] != groups[j]`, same word length, and Hamming distance == 1, update `dp[i] = max(dp[i], dp[j] + 1)` and track `prev[i] = j`.',
    'Track the index with the maximum dp value, then backtrack through `prev[]` to reconstruct the subsequence.',
    `\`\`\`js
function getWordsInLongestSubsequence(words, groups) {
  const n = words.length;
  const hamming = (a, b) => {
    if (a.length !== b.length) return Infinity;
    let d = 0;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
    return d;
  };
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);
  let bestEnd = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && hamming(words[i], words[j]) === 1 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > dp[bestEnd]) bestEnd = i;
  }
  const result = [];
  for (let cur = bestEnd; cur !== -1; cur = prev[cur]) result.push(words[cur]);
  return result.reverse();
}\`\`\``,
  ],
  functionName: 'getWordsInLongestSubsequence',
  params: ['words', 'groups'],
  starterCode: {
    javascript: `function getWordsInLongestSubsequence(words, groups) {
  const n = words.length;
  const hamming = (a, b) => {
    if (a.length !== b.length) return Infinity;
    let d = 0; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
    return d;
  };
  const dp = new Array(n).fill(1), prev = new Array(n).fill(-1);
  let bestEnd = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && hamming(words[i], words[j]) === 1 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1; prev[i] = j;
      }
    }
    if (dp[i] > dp[bestEnd]) bestEnd = i;
  }
  const result = [];
  for (let cur = bestEnd; cur !== -1; cur = prev[cur]) result.push(words[cur]);
  return result.reverse();
}`,
    typescript: `function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
  const n = words.length;
  const hamming = (a: string, b: string): number => {
    if (a.length !== b.length) return Infinity;
    let d = 0; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
    return d;
  };
  const dp = new Array(n).fill(1), prev = new Array(n).fill(-1);
  let bestEnd = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && hamming(words[i], words[j]) === 1 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1; prev[i] = j;
      }
    }
    if (dp[i] > dp[bestEnd]) bestEnd = i;
  }
  const result: string[] = [];
  for (let cur = bestEnd; cur !== -1; cur = prev[cur]) result.push(words[cur]);
  return result.reverse();
}`,
    python: `def getWordsInLongestSubsequence(words, groups):
    n = len(words)
    def hamming(a, b):
        if len(a) != len(b): return float('inf')
        return sum(x != y for x, y in zip(a, b))
    dp, prev = [1]*n, [-1]*n
    best_end = 0
    for i in range(1, n):
        for j in range(i):
            if groups[i] != groups[j] and hamming(words[i], words[j]) == 1 and dp[j]+1 > dp[i]:
                dp[i] = dp[j]+1; prev[i] = j
        if dp[i] > dp[best_end]: best_end = i
    result, cur = [], best_end
    while cur != -1: result.append(words[cur]); cur = prev[cur]
    return result[::-1]`,
  },
  visibleTests: [
    { args: [['bab', 'dab', 'cab'], [1, 2, 2]], expected: ['bab', 'dab'] },
    { args: [['a', 'b', 'c', 'd'], [1, 2, 3, 4]], expected: ['a', 'b', 'c', 'd'] },
    { args: [['abc'], [0]], expected: ['abc'] },
  ],
  hiddenTests: [
    { args: [['ab', 'cd', 'ef'], [0, 1, 0]], expected: ['ab'] },
    { args: [['aa', 'ab', 'ac', 'ad'], [0, 1, 0, 1]], expected: ['aa', 'ab', 'ac', 'ad'] },
    { args: [['abc', 'bbc', 'bbc'], [0, 1, 0]], expected: ['abc', 'bbc'] },
    { args: [['aa', 'bb'], [0, 0]], expected: ['aa'] },
    { args: [['ab', 'ba', 'ab'], [0, 1, 0]], expected: ['ab'] },
    { args: [['ac', 'bc', 'bd'], [0, 1, 0]], expected: ['ac', 'bc', 'bd'] },
  ],
};
