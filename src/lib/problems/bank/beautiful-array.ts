import type { Problem } from '../types';

export const problem: Problem = {
  id: 'beautiful-array',
  title: 'Beautiful Array',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `An array \`nums\` of length \`n\` is **beautiful** if for all \`i < k < j\`:

\`nums[i] + nums[j] != 2 * nums[k]\`

In other words, no element in the array can be the average of two other elements that appear on either side of it.

Given an integer \`n\`, return **any beautiful array** of length \`n\` that is a permutation of \`[1, 2, ..., n]\`.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 4',
      output: '[2,1,4,3]',
      explanation: 'One valid beautiful array. Other valid answers exist.',
    },
    {
      input: 'n = 5',
      output: '[3,1,2,5,4]',
      explanation: 'One valid beautiful array. Other valid answers exist.',
    },
  ],
  hints: [
    'If `A` is beautiful, then `[2*x - 1 for x in A]` (all odd) and `[2*x for x in A]` (all even) are both beautiful. An odd + even sum is always odd, never equal to 2 * anything, so concatenating the odd part and even part is still beautiful.',
    'Recurse: `beautifulArray(n)` = odd elements from `beautifulArray(ceil(n/2))` + even elements from `beautifulArray(floor(n/2))`. Filter to only keep values ≤ n.',
    'Base case: `beautifulArray(1) = [1]`. The key insight is that A[i]+A[j] = 2*A[k] requires A[i]+A[j] to be even, meaning A[i] and A[j] have the same parity. Separating odds and evens prevents any middle element from being the average.',
  ],
  functionName: 'beautifulArray',
  params: ['n'],
  starterCode: {
    javascript: `function beautifulArray(n) {
  const memo = new Map();
  function solve(k) {
    if (k === 1) return [1];
    if (memo.has(k)) return memo.get(k);
    const odds = solve(Math.ceil(k / 2)).map(x => 2 * x - 1);
    const evens = solve(Math.floor(k / 2)).map(x => 2 * x);
    const res = [...odds, ...evens];
    memo.set(k, res);
    return res;
  }
  return solve(n);
}`,
    typescript: `function beautifulArray(n: number): number[] {
  const memo = new Map<number, number[]>();
  function solve(k: number): number[] {
    if (k === 1) return [1];
    if (memo.has(k)) return memo.get(k)!;
    const odds = solve(Math.ceil(k / 2)).map(x => 2 * x - 1);
    const evens = solve(Math.floor(k / 2)).map(x => 2 * x);
    const res = [...odds, ...evens];
    memo.set(k, res);
    return res;
  }
  return solve(n);
}`,
    python: `def beautifulArray(n: int) -> list[int]:
    import math
    memo = {}
    def solve(k):
        if k == 1: return [1]
        if k in memo: return memo[k]
        odds = [2*x - 1 for x in solve(math.ceil(k / 2))]
        evens = [2*x for x in solve(k // 2)]
        res = odds + evens
        memo[k] = res
        return res
    return solve(n)`,
  },
  visibleTests: [
    { args: [1], expected: [1] },
    { args: [2], expected: [1, 2] },
    { args: [4], expected: [1, 3, 2, 4] },
  ],
  hiddenTests: [
    { args: [3], expected: [1, 3, 2] },
    { args: [5], expected: [1, 5, 3, 2, 4] },
    { args: [6], expected: [1, 5, 3, 2, 6, 4] },
    { args: [7], expected: [1, 5, 3, 7, 2, 6, 4] },
    { args: [8], expected: [1, 5, 3, 7, 2, 6, 4, 8] },
  ],
};
