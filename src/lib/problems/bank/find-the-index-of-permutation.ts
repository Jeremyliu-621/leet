import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-index-of-permutation',
  title: 'Find the Index of Permutation',
  difficulty: 'medium',
  tags: ['arrays', 'binary-indexed-tree', 'math'],
  description: `Given a **0-indexed** array \`perm\` which is a permutation of \`[1, 2, ..., n]\`, return the **index** of \`perm\` in the lexicographically sorted list of all permutations of \`[1, 2, ..., n]\`.

Since the answer may be very large, return it **modulo \`10^9 + 7\`**.`,
  constraints: [
    '1 <= n == perm.length <= 10^3',
    'perm is a permutation of [1, 2, ..., n].',
  ],
  examples: [
    {
      input: 'perm = [1, 2]',
      output: '0',
      explanation: 'All permutations of [1,2] sorted: [[1,2],[2,1]]. [1,2] is at index 0.',
    },
    {
      input: 'perm = [2, 1]',
      output: '1',
      explanation: 'All permutations of [1,2] sorted: [[1,2],[2,1]]. [2,1] is at index 1.',
    },
    {
      input: 'perm = [3, 1, 2]',
      output: '4',
      explanation: 'All perms of [1,2,3]: [1,2,3]=0,[1,3,2]=1,[2,1,3]=2,[2,3,1]=3,[3,1,2]=4,[3,2,1]=5. Answer: 4.',
    },
  ],
  hints: [
    'This is the Lehmer code: for each position i, count how many remaining (unused) elements are less than perm[i]. Multiply by (n-1-i)! and sum.',
    'Use a Binary Indexed Tree (Fenwick tree) initialized with all 1s. For each perm[i], query prefix sum up to perm[i]-1 to get the count of unused elements smaller than perm[i], then remove perm[i] from the BIT.',
    'Precompute factorials mod 10^9+7. The answer is Σ count_i * (n-1-i)! mod 10^9+7.',
  ],
  functionName: 'getPermutationIndex',
  params: ['perm'],
  starterCode: {
    javascript: `function getPermutationIndex(perm) {
  const MOD = 1000000007n;
  const n = perm.length;
  const fact = [1n];
  for (let i = 1; i <= n; i++) fact.push(fact[i - 1] * BigInt(i) % MOD);
  const bit = new Int32Array(n + 2);
  const update = (i, d) => { for (; i <= n; i += i & -i) bit[i] += d; };
  const query = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  for (let i = 1; i <= n; i++) update(i, 1);
  let result = 0n;
  for (let i = 0; i < n; i++) {
    const less = query(perm[i] - 1);
    result = (result + BigInt(less) * fact[n - 1 - i]) % MOD;
    update(perm[i], -1);
  }
  return Number(result);
}`,
    typescript: `function getPermutationIndex(perm: number[]): number {
  const MOD = 1000000007n;
  const n = perm.length;
  const fact: bigint[] = [1n];
  for (let i = 1; i <= n; i++) fact.push(fact[i - 1]! * BigInt(i) % MOD);
  const bit = new Int32Array(n + 2);
  const update = (i: number, d: number) => { for (; i <= n; i += i & -i) bit[i]! += d; };
  const query = (i: number) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]!; return s; };
  for (let i = 1; i <= n; i++) update(i, 1);
  let result = 0n;
  for (let i = 0; i < n; i++) {
    const less = query(perm[i]! - 1);
    result = (result + BigInt(less) * fact[n - 1 - i]!) % MOD;
    update(perm[i]!, -1);
  }
  return Number(result);
}`,
    python: `def getPermutationIndex(perm):
    MOD = 10**9 + 7
    n = len(perm)
    fact = [1] * (n + 1)
    for i in range(1, n + 1):
        fact[i] = fact[i-1] * i % MOD
    bit = [0] * (n + 2)
    def update(i, d):
        while i <= n:
            bit[i] += d
            i += i & -i
    def query(i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s
    for i in range(1, n + 1):
        update(i, 1)
    result = 0
    for i, v in enumerate(perm):
        less = query(v - 1)
        result = (result + less * fact[n - 1 - i]) % MOD
        update(v, -1)
    return result`,
  },
  visibleTests: [
    { args: [[1, 2]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[3, 1, 2]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 5 },
    { args: [[2, 3, 1]], expected: 3 },
    { args: [[1, 3, 2, 4]], expected: 2 },
  ],
};
