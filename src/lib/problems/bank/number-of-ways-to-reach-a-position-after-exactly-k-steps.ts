import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-reach-a-position-after-exactly-k-steps',
  title: 'Number of Ways to Reach a Position After Exactly k Steps',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `You are given two **positive** integers \`startPos\` and \`endPos\`. In one step, you can move from position \`x\` to \`x + 1\` or \`x - 1\` (moving on an infinite number line).

Given a positive integer \`k\`, return the number of **different** ways to reach \`endPos\` starting from \`startPos\`, such that you perform **exactly** \`k\` steps. Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= startPos, endPos <= 1000`',
    '`1 <= k <= 1000`',
  ],
  examples: [
    {
      input: 'startPos = 1, endPos = 2, k = 3',
      output: '3',
      explanation: 'Three ways: 1→2→3→2, 1→2→1→2, 1→0→1→2.',
    },
    {
      input: 'startPos = 2, endPos = 5, k = 3',
      output: '1',
      explanation: 'The only way is 2→3→4→5.',
    },
    {
      input: 'startPos = 1, endPos = 1, k = 4',
      output: '6',
      explanation: 'There are 6 ways to return to the start in exactly 4 steps.',
    },
  ],
  hints: [
    'Let diff = |startPos - endPos|. You need `r` right steps (toward endPos) and `k - r` left steps where `r - (k - r) = diff`, so `r = (k + diff) / 2`. If this is not a non-negative integer, the answer is 0.',
    'The number of ways is C(k, r) mod 10^9+7 — choose which r of the k steps go toward the destination.',
    '```js\nfunction numberOfWays(startPos, endPos, k) {\n  const MOD = 1000000007n;\n  const diff = Math.abs(startPos - endPos);\n  if ((k - diff) < 0 || (k - diff) % 2 !== 0) return 0;\n  const r = (k + diff) / 2;\n  const dp = new Array(k + 1).fill(0n);\n  dp[0] = 1n;\n  for (let i = 1; i <= k; i++) {\n    for (let j = Math.min(i, r); j >= 1; j--) {\n      dp[j] = (dp[j] + dp[j-1]) % MOD;\n    }\n  }\n  return Number(dp[r]);\n}\n```',
  ],
  functionName: 'numberOfWays',
  params: ['startPos', 'endPos', 'k'],
  starterCode: {
    javascript: `function numberOfWays(startPos, endPos, k) {

}`,
    typescript: `function numberOfWays(startPos: number, endPos: number, k: number): number {

}`,
    python: `def numberOfWays(startPos, endPos, k):
    pass`,
  },
  visibleTests: [
    { args: [1, 2, 3], expected: 3 },
    { args: [2, 5, 3], expected: 1 },
    { args: [1, 1, 4], expected: 6 },
  ],
  hiddenTests: [
    { args: [0, 0, 2], expected: 2 },
    { args: [1, 2, 1], expected: 1 },
    { args: [1, 4, 3], expected: 1 },
    { args: [0, 100, 50], expected: 0 },
    { args: [0, 0, 6], expected: 20 },
  ],
};
