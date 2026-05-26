import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-score-after-n-operations',
  title: 'Maximize Score After N Operations',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'dynamic-programming'],
  description: `You are given \`nums\`, an array of positive integers of size \`2 * n\`. You must perform \`n\` operations on this array.

In the \`i\`-th operation (**1-indexed**), you will:
- Choose two elements, \`x\` and \`y\`.
- Receive a score of \`i * gcd(x, y)\`.
- Remove \`x\` and \`y\` from \`nums\`.

Return the **maximum** score you can receive after performing \`n\` operations.

\`gcd(x, y)\` is the Greatest Common Divisor of \`x\` and \`y\`.`,
  constraints: [
    '`1 <= n <= 7`',
    '`nums.length == 2 * n`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'The optimal choice is to pair (1, 2) in operation 1. Score = 1 * gcd(1,2) = 1.',
    },
    {
      input: 'nums = [3,4,6,8]',
      output: '11',
      explanation:
        'Operation 1: pair (3,6) → 1 * gcd(3,6) = 3. Operation 2: pair (4,8) → 2 * gcd(4,8) = 8. Total = 11.',
    },
    {
      input: 'nums = [1,2,3,4,5,6]',
      output: '14',
      explanation:
        'Pair (1,5),(2,6),(3,?) optimally: op1 pair (1,5)→1, op2 pair (2,4)→4, op3 pair (3,6)→9. Total=14.',
    },
  ],
  hints: [
    'Use **bitmask DP**. Let `dp[mask]` = max score achievable using exactly the elements indicated by the set bits in `mask`. Iterate masks with an even number of set bits.',
    'For each such mask, the operation number is `popcount(mask) / 2 + 1` (next op to perform is the (k+1)-th). Try all pairs of unset bits `(i, j)` and update `dp[mask | (1<<i) | (1<<j)]`.',
    'Precompute `gcd[i][j]` for all pairs to avoid recomputation. The full DP runs in O(4^n × n²) which is fast for n ≤ 7 (mask ≤ 2^14 = 16384).',
  ],
  functionName: 'maxScore',
  params: ['nums'],
  starterCode: {
    javascript: `function maxScore(nums) {

}`,
    python: `def maxScore(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 4, 6, 8]], expected: 11 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 14 },
  ],
  hiddenTests: [
    { args: [[2, 4]], expected: 2 },
    { args: [[2, 4, 6, 8]], expected: 10 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 6 },
    { args: [[4, 8, 12, 16]], expected: 20 },
    { args: [[6, 9, 12, 18]], expected: 24 },
    { args: [[2, 3]], expected: 1 },
    { args: [[6, 6, 6, 6]], expected: 18 },
    { args: [[10, 20]], expected: 10 },
  ],
};
