import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-original-typed-string-ii',
  title: 'Find the Original Typed String II',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Alice is attempting to type a specific string on her computer. When she was typing, she may have accidentally pressed a key for **too long**, causing a character to be typed **more than once**. This can happen for **any number of keys**.

Given a string \`word\` (the final output displayed on Alice's screen) and an integer \`k\`, return the total number of **possible** original strings that Alice might have intended to type, which have a length of **at least** \`k\`.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= word.length <= 5 * 10^4',
    '1 <= k <= 2000',
  ],
  examples: [
    {
      input: 'word = "aabbccdd", k = 7',
      output: '5',
      explanation: 'Runs: a(2), b(2), c(2), d(2). Total = 16. Strings of length < 7: length 4 (1 way), length 5 (4 ways), length 6 (6 ways) = 11 total. Answer = 16 - 11 = 5.',
    },
    {
      input: 'word = "aaabbb", k = 3',
      output: '8',
      explanation: 'Runs: a(3), b(3). Total = 9. Strings of length < 3: only length 2 (a=1, b=1) = 1 way. Answer = 9 - 1 = 8.',
    },
    {
      input: 'word = "aaa", k = 2',
      output: '2',
      explanation: 'Run: a(3). Total = 3 originals (lengths 1, 2, 3). Strings of length < 2: length 1 = 1 way. Answer = 3 - 1 = 2.',
    },
  ],
  hints: [
    'Group the string into consecutive runs. Each run of length L can be trimmed to 1..L chars in the original. Total originals = product of all run lengths. Subtract the count of originals with length < k.',
    'Use DP: dp[j] = number of ways to form a string of length j from all runs processed so far. For each run of length L, dp_new[j] = sum(dp[j-L..j-1]) — use a sliding-window prefix sum for O(k) per run.',
    '`const MOD = 1e9+7; runs=[]; i=0; while(i<word.length){let l=1;while(i+l<word.length&&word[i+l]===word[i])l++;runs.push(l);i+=l;} let tot=1n; for(const l of runs)tot=tot*BigInt(l)%BigInt(MOD); if(runs.length>=k)return Number(tot); let dp=new Array(k).fill(0n); dp[0]=1n; for(const L of runs){const nd=new Array(k).fill(0n),pr=new Array(k+1).fill(0n); for(let j=0;j<k;j++)pr[j+1]=(pr[j]+dp[j])%BigInt(MOD); for(let j=1;j<k;j++){const lo=Math.max(0,j-L);nd[j]=(pr[j]-pr[lo]+BigInt(MOD))%BigInt(MOD);}dp=nd;} let bad=0n; for(const v of dp)bad=(bad+v)%BigInt(MOD); return Number((tot-bad+BigInt(MOD))%BigInt(MOD));`',
  ],
  functionName: 'possibleStringCount',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function possibleStringCount(word, k) {
  const MOD = 1_000_000_007n;
  const runs = [];
  let i = 0;
  while (i < word.length) {
    let l = 1;
    while (i + l < word.length && word[i + l] === word[i]) l++;
    runs.push(l); i += l;
  }
  let tot = 1n;
  for (const l of runs) tot = tot * BigInt(l) % MOD;
  if (runs.length >= k) return Number(tot);
  let dp = new Array(k).fill(0n);
  dp[0] = 1n;
  for (const L of runs) {
    const nd = new Array(k).fill(0n), pr = new Array(k + 1).fill(0n);
    for (let j = 0; j < k; j++) pr[j + 1] = (pr[j] + dp[j]) % MOD;
    for (let j = 1; j < k; j++) {
      const lo = Math.max(0, j - L);
      nd[j] = (pr[j] - pr[lo] + MOD) % MOD;
    }
    dp = nd;
  }
  let bad = 0n;
  for (const v of dp) bad = (bad + v) % MOD;
  return Number((tot - bad + MOD) % MOD);
}`,
    typescript: `function possibleStringCount(word: string, k: number): number {
  const MOD = 1_000_000_007n;
  const runs: number[] = [];
  let i = 0;
  while (i < word.length) {
    let l = 1;
    while (i + l < word.length && word[i + l] === word[i]) l++;
    runs.push(l); i += l;
  }
  let tot = 1n;
  for (const l of runs) tot = tot * BigInt(l) % MOD;
  if (runs.length >= k) return Number(tot);
  let dp: bigint[] = new Array(k).fill(0n);
  dp[0] = 1n;
  for (const L of runs) {
    const nd: bigint[] = new Array(k).fill(0n), pr: bigint[] = new Array(k + 1).fill(0n);
    for (let j = 0; j < k; j++) pr[j + 1] = (pr[j] + dp[j]) % MOD;
    for (let j = 1; j < k; j++) {
      const lo = Math.max(0, j - L);
      nd[j] = (pr[j] - pr[lo] + MOD) % MOD;
    }
    dp = nd;
  }
  let bad = 0n;
  for (const v of dp) bad = (bad + v) % MOD;
  return Number((tot - bad + MOD) % MOD);
}`,
    python: `def possibleStringCount(word, k):
    MOD = 10**9 + 7
    runs, i = [], 0
    while i < len(word):
        l = 1
        while i + l < len(word) and word[i + l] == word[i]: l += 1
        runs.append(l); i += l
    tot = 1
    for l in runs: tot = tot * l % MOD
    if len(runs) >= k: return tot
    dp = [0] * k; dp[0] = 1
    for L in runs:
        pr = [0] * (k + 1)
        for j in range(k): pr[j + 1] = (pr[j] + dp[j]) % MOD
        nd = [0] * k
        for j in range(1, k):
            lo = max(0, j - L)
            nd[j] = (pr[j] - pr[lo]) % MOD
        dp = nd
    bad = sum(dp) % MOD
    return (tot - bad) % MOD`,
  },
  visibleTests: [
    { args: ['aabbccdd', 7], expected: 5 },
    { args: ['aaabbb', 3], expected: 8 },
    { args: ['aaa', 2], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['aa', 1], expected: 2 },
    { args: ['aa', 2], expected: 1 },
    { args: ['aa', 3], expected: 0 },
    { args: ['aabb', 1], expected: 4 },
    { args: ['aabb', 3], expected: 3 },
    { args: ['aabb', 4], expected: 1 },
    { args: ['aaabbb', 4], expected: 6 },
    { args: ['abcd', 1], expected: 1 },
    { args: ['aaabbbccc', 4], expected: 26 },
  ],
};
