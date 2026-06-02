import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-ideal-arrays',
  title: 'Count the Number of Ideal Arrays',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'dynamic-programming'],
  description: `You are given two integers \`n\` and \`maxValue\`, which are used to describe an **ideal** array.

A **0-indexed** integer array \`arr\` of length \`n\` is considered **ideal** if the following conditions hold:

- Every \`arr[i]\` is a value from \`1\` to \`maxValue\`, for \`0 <= i < n\`.
- Every \`arr[i]\` is divisible by \`arr[i - 1]\`, for \`0 < i < n\`.

Return the number of **distinct** ideal arrays of length \`n\`. Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '2 <= n <= 10^4',
    '1 <= maxValue <= 10^4',
  ],
  examples: [
    {
      input: 'n = 2, maxValue = 5',
      output: '10',
      explanation: 'The ideal arrays are: [1,1],[1,2],[1,3],[1,4],[1,5],[2,2],[2,4],[3,3],[4,4],[5,5]. Total = 10.',
    },
    {
      input: 'n = 5, maxValue = 3',
      output: '11',
      explanation: 'Arrays include: [1,1,1,1,1],[1,1,1,1,2] etc. There are 11 ideal arrays total.',
    },
  ],
  hints: [
    'An ideal array\'s distinct values form a divisibility chain v1 | v2 | ... | vk with 1 <= vi <= maxValue.',
    'A chain of length k can be placed in an array of length n in C(n-1, k-1) ways (stars and bars).',
    'Use DP: f[v][l] = number of divisibility chains of length l ending at value v. Sum f[v][l] * C(n-1, l-1) over all v and l.',
  ],
  functionName: 'idealArrays',
  params: ['n', 'maxValue'],
  starterCode: {
    javascript: `function idealArrays(n, maxValue) {
  const MOD = 1000000007n;
  const MAX_LEN = 14;
  // C(n-1, 0..MAX_LEN-1)
  const comb = new Array(MAX_LEN).fill(0n);
  comb[0] = 1n;
  for (let i = 1; i < MAX_LEN; i++) comb[i] = comb[i-1] * BigInt(n - i) / BigInt(i);
  // f[v] = chains of current length ending at v; start with length=1
  let prev = new Array(maxValue + 1).fill(0n);
  for (let v = 1; v <= maxValue; v++) prev[v] = 1n;
  let ans = 0n;
  for (let l = 0; l < MAX_LEN; l++) {
    for (let v = 1; v <= maxValue; v++) ans = (ans + prev[v] * comb[l]) % MOD;
    if (l + 1 === MAX_LEN) break;
    const cur = new Array(maxValue + 1).fill(0n);
    for (let v = 1; v <= maxValue; v++) {
      if (prev[v] > 0n) for (let m = 2 * v; m <= maxValue; m += v) cur[m] = (cur[m] + prev[v]) % MOD;
    }
    prev = cur;
  }
  return Number(ans);
}`,
    typescript: `function idealArrays(n: number, maxValue: number): number {
  const MOD = 1000000007n;
  const MAX_LEN = 14;
  const comb = new Array(MAX_LEN).fill(0n);
  comb[0] = 1n;
  for (let i = 1; i < MAX_LEN; i++) comb[i] = comb[i-1]! * BigInt(n - i) / BigInt(i);
  let prev = new Array(maxValue + 1).fill(0n) as bigint[];
  for (let v = 1; v <= maxValue; v++) prev[v] = 1n;
  let ans = 0n;
  for (let l = 0; l < MAX_LEN; l++) {
    for (let v = 1; v <= maxValue; v++) ans = (ans + prev[v]! * comb[l]!) % MOD;
    if (l + 1 === MAX_LEN) break;
    const cur = new Array(maxValue + 1).fill(0n) as bigint[];
    for (let v = 1; v <= maxValue; v++) {
      if (prev[v]! > 0n) for (let m = 2 * v; m <= maxValue; m += v) cur[m] = (cur[m]! + prev[v]!) % MOD;
    }
    prev = cur;
  }
  return Number(ans);
}`,
    python: `def idealArrays(n, maxValue):
    MOD = 10**9 + 7
    MAX_LEN = 14
    from math import comb as _comb
    # f[v] = chain counts by length ending at v
    prev = [0] + [1] * maxValue
    ans = 0
    for l in range(MAX_LEN):
        c = _comb(n - 1, l) % MOD
        for v in range(1, maxValue + 1):
            ans = (ans + prev[v] * c) % MOD
        if l + 1 == MAX_LEN:
            break
        cur = [0] * (maxValue + 1)
        for v in range(1, maxValue + 1):
            if prev[v]:
                m = 2 * v
                while m <= maxValue:
                    cur[m] = (cur[m] + prev[v]) % MOD
                    m += v
        prev = cur
    return ans`,
  },
  visibleTests: [
    { args: [2, 5], expected: 10 },
    { args: [5, 3], expected: 11 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 3], expected: 3 },
    { args: [3, 3], expected: 7 },
    { args: [2, 1], expected: 1 },
  ],
};
