import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-homogeneous-substrings',
  title: 'Count Number of Homogeneous Substrings',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given a string \`s\`, return *the number of **homogeneous** substrings of* \`s\`. Since the answer may be large, return it **modulo** \`10^9 + 7\`.

A string is **homogeneous** if all the characters in the string are the same.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase letters.',
  ],
  examples: [
    {
      input: 's = "abbcccaa"',
      output: '13',
      explanation: 'Homogeneous substrings: "a"(2), "b"(1), "bb"(1), "c"(3), "cc"(3), "ccc"(1), "aa"(1) = 2+1+1+3+3+1+... wait: a runs: 1+1; b run: 2; c run: 3; a run: 2. Counts: 1+3+6+3=13.',
    },
    {
      input: 's = "xy"',
      output: '2',
      explanation: '"x" and "y" are homogeneous. "xy" is not.',
    },
    {
      input: 's = "zzzzz"',
      output: '15',
      explanation: '5+4+3+2+1 = 15 (a run of 5 gives 5*6/2=15 substrings).',
    },
  ],
  hints: [
    'Level 1: Group consecutive identical characters into runs. A run of length k contributes k*(k+1)/2 homogeneous substrings.',
    'Level 2: Scan left to right tracking the current run length. When the character changes, add k*(k+1)/2 to the answer and reset. Remember to add the last run.',
    'Level 3: Take modulo 10^9+7 after each addition to avoid overflow. O(n) time, O(1) space.',
  ],
  functionName: 'countHomogenous',
  params: ['s'],
  starterCode: {
    javascript: `function countHomogenous(s) {
  const MOD = 1_000_000_007n;
  let ans = 0n, run = 1n;
  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === s[i - 1]) {
      run++;
    } else {
      ans = (ans + run * (run + 1n) / 2n) % MOD;
      run = 1n;
    }
  }
  return Number(ans);
}`,
    typescript: `function countHomogenous(s: string): number {
  const MOD = 1_000_000_007n;
  let ans = 0n, run = 1n;
  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === s[i - 1]) {
      run++;
    } else {
      ans = (ans + run * (run + 1n) / 2n) % MOD;
      run = 1n;
    }
  }
  return Number(ans);
}`,
    python: `def countHomogenous(s):
    MOD = 10**9 + 7
    ans, run = 0, 1
    for i in range(1, len(s) + 1):
        if i < len(s) and s[i] == s[i - 1]:
            run += 1
        else:
            ans = (ans + run * (run + 1) // 2) % MOD
            run = 1
    return ans`,
  },
  visibleTests: [
    { args: ['abbcccaa'], expected: 13 },
    { args: ['xy'], expected: 2 },
    { args: ['zzzzz'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 3 },
    { args: ['aab'], expected: 4 },
    { args: ['aabb'], expected: 6 },
    { args: ['abcde'], expected: 5 },
    { args: ['aaaa'], expected: 10 },
    { args: ['aabbcc'], expected: 9 },
  ],
};
