import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-form-a-target-string-given-a-dictionary',
  title: 'Number of Ways to Form a Target String Given a Dictionary',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `You are given a list of strings \`words\` and a string \`target\`. All strings in \`words\` have the **same length**.

You want to form \`target\` using the following rules:
- \`target\` is formed from left-to-right.
- To form the i-th character (0-indexed) of \`target\`, you can choose the k-th character of the j-th string in \`words\` if \`target[i] == words[j][k]\`.
- Once you use column \`k\` of a word to form a character, you **cannot use any column ≤ k** again (columns must increase).
- **Different** characters from different strings at the **same column** count as different ways.

Return the number of ways to form \`target\` modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'All words have the same length.',
    '1 <= target.length <= 1000',
    'words[i] and target consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["acca","bbbb","caca"], target = "aba"',
      output: '6',
      explanation: 'Column frequencies: col 0: a=2,b=1; col 1: c=1,b=2; col 2: c=2,b=1; col 3: a=2,b=1. Ways: pick "a" from col 0 (2 ways) × "b" from col 1 or 2 (3 ways) × "a" from col 3 (2 ways) = some of those combos, total 6.',
    },
    {
      input: 'words = ["abba","baab"], target = "bab"',
      output: '4',
      explanation: 'There are 4 valid column-selection sequences to spell "bab".',
    },
    {
      input: 'words = ["a"], target = "a"',
      output: '1',
      explanation: 'Only one word, only one column, only one way.',
    },
  ],
  hints: [
    'Count freq[j][c] = how many words have character c at column j. The actual which-word does not matter, only the frequency.',
    'Let dp[i] = number of ways to form target[0..i-1]. For each column j (left-to-right), update dp backwards: dp[i] += dp[i-1] × freq[j][target[i-1]].',
    'Process columns in order; iterate i backwards so each column is used at most once per choice chain.',
  ],
  functionName: 'numWays',
  params: ['words', 'target'],
  starterCode: {
    javascript: `function numWays(words, target) {
  const MOD = 1_000_000_007;
  const m = words[0].length, t = target.length;
  const freq = Array.from({length: m}, () => new Array(26).fill(0));
  for (const w of words) for (let j = 0; j < m; j++) freq[j][w.charCodeAt(j) - 97]++;
  const dp = new Array(t + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < m; j++) {
    const c = freq[j];
    for (let i = t; i >= 1; i--) {
      const ch = target.charCodeAt(i - 1) - 97;
      if (c[ch] > 0) dp[i] = (dp[i] + dp[i - 1] * c[ch]) % MOD;
    }
  }
  return dp[t];
}`,
    typescript: `function numWays(words: string[], target: string): number {
  const MOD = 1_000_000_007;
  const m = words[0]!.length, t = target.length;
  const freq = Array.from({length: m}, () => new Array<number>(26).fill(0));
  for (const w of words) for (let j = 0; j < m; j++) freq[j]![w.charCodeAt(j) - 97]!++;
  const dp = new Array<number>(t + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < m; j++) {
    const c = freq[j]!;
    for (let i = t; i >= 1; i--) {
      const ch = target.charCodeAt(i - 1) - 97;
      if (c[ch]! > 0) dp[i] = (dp[i]! + dp[i - 1]! * c[ch]!) % MOD;
    }
  }
  return dp[t]!;
}`,
    python: `def numWays(words, target):
    MOD = 10**9 + 7
    m, t = len(words[0]), len(target)
    freq = [[0] * 26 for _ in range(m)]
    for w in words:
        for j, ch in enumerate(w):
            freq[j][ord(ch) - 97] += 1
    dp = [0] * (t + 1)
    dp[0] = 1
    for j in range(m):
        for i in range(t, 0, -1):
            c = freq[j][ord(target[i - 1]) - 97]
            if c:
                dp[i] = (dp[i] + dp[i - 1] * c) % MOD
    return dp[t]
`,
  },
  visibleTests: [
    { args: [['acca', 'bbbb', 'caca'], 'aba'], expected: 6 },
    { args: [['abba', 'baab'], 'bab'], expected: 4 },
    { args: [['a'], 'a'], expected: 1 },
  ],
  hiddenTests: [
    { args: [['ab', 'cd'], 'a'], expected: 1 },
    { args: [['ab', 'ab'], 'ab'], expected: 4 },
    { args: [['abc', 'abc', 'abc'], 'abc'], expected: 27 },
    { args: [['abcd'], 'abcd'], expected: 1 },
    { args: [['aaa', 'aaa'], 'a'], expected: 6 },
    { args: [['ab', 'cd'], 'ad'], expected: 1 },
  ],
};
