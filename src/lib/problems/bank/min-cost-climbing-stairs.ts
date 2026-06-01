import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-cost-climbing-stairs',
  title: 'Min Cost Climbing Stairs',
  difficulty: 'easy',
  tags: ['dynamic-programming'],
  description: `You are given an integer array \`cost\` where \`cost[i]\` is the cost of the \`i\`th step on a staircase. Once you pay the cost, you can either climb **one** or **two** steps. You can start from step 0 or step 1. Return the minimum cost to reach the top of the floor (beyond the last step).`,
  constraints: [
    '2 <= cost.length <= 1000',
    '0 <= cost[i] <= 999',
  ],
  examples: [
    {
      input: 'cost = [10, 15, 20]',
      output: '15',
      explanation: 'Start at index 1, pay 15, climb two steps to the top.',
    },
    {
      input: 'cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]',
      output: '6',
      explanation: 'Cheapest path costs 6.',
    },
  ],
  hints: [
    'Think about what information you need to decide the cheapest way to reach each step. The cost to reach step `i` depends on the cost to reach step `i-1` and step `i-2`.',
    'Define `dp[i] = cost[i] + min(dp[i-1], dp[i-2])`. Base cases: `dp[0] = cost[0]`, `dp[1] = cost[1]`. The answer is `min(dp[n-1], dp[n-2])` because you can finish from either of the last two steps.',
    '`const dp = [...cost]; for (let i = 2; i < n; i++) dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]); return Math.min(dp[n-1], dp[n-2]);`',
  ],
  functionName: 'minCostClimbingStairs',
  params: ['cost'],
  starterCode: {
    javascript: `function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = [...cost];
  for (let i = 2; i < n; i++) dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  return Math.min(dp[n - 1], dp[n - 2]);
}`,
    typescript: `function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = [...cost];
  for (let i = 2; i < n; i++) dp[i] = cost[i]! + Math.min(dp[i - 1]!, dp[i - 2]!);
  return Math.min(dp[n - 1]!, dp[n - 2]!);
}`,
    python: `def minCostClimbingStairs(cost):
    cost = list(cost.to_py()) if hasattr(cost, 'to_py') else list(cost)
    n = len(cost)
    dp = cost[:]
    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i - 1], dp[i - 2])
    return min(dp[n - 1], dp[n - 2])`,
  },
  visibleTests: [
    { args: [[10, 15, 20]], expected: 15 },
    { args: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[0, 1, 2, 2]], expected: 2 },
    { args: [[5, 3]], expected: 3 },
  ],
};
