import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-earn-points',
  title: 'Number of Ways to Earn Points',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `There is a test that has \`n\` types of questions. You are given an integer \`target\` and a **0-indexed** 2D integer array \`types\` where \`types[i] = [count_i, marks_i]\` indicates that there are \`count_i\` questions of the \`i\`-th type, each worth \`marks_i\` points.

Return the number of ways you can earn **exactly** \`target\` points in the exam. Since the answer may be large, return it modulo \`10^9 + 7\`.

**Key insight:** This is a bounded knapsack problem. Use a 1-D DP array and iterate right-to-left, applying each question type's bounded multiplier.`,
  constraints: [
    '1 <= target <= 1000',
    'n == types.length',
    '1 <= n <= 50',
    '1 <= count_i, marks_i <= 50',
  ],
  examples: [
    {
      input: 'target = 6, types = [[6,1],[3,2],[2,3]]',
      output: '7',
      explanation: 'There are 7 ways to earn exactly 6 points.',
    },
    {
      input: 'target = 5, types = [[50,1],[50,2],[50,5]]',
      output: '4',
      explanation: '4 ways: (5,0,0), (3,1,0), (1,2,0), (0,0,1).',
    },
    {
      input: 'target = 18, types = [[6,1],[3,2],[2,3]]',
      output: '1',
      explanation: 'Only one way: use all questions of every type.',
    },
  ],
  hints: [
    'Bounded knapsack: dp[j] = number of ways to score exactly j points.',
    'For each question type [count, marks], iterate j from target down to 0.',
    'For each j, add dp[j - k*marks] for k = 1..count (while j - k*marks >= 0).',
    'Initialize dp[0] = 1 (one way to score 0: answer nothing).',
  ],
  functionName: 'waysToReachTarget',
  params: ['target', 'types'],
  starterCode: {
    javascript: `function waysToReachTarget(target, types) {
  const MOD = 1_000_000_007;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (const [count, marks] of types) {
    for (let j = target; j >= 0; j--) {
      for (let k = 1; k <= count && k * marks <= j; k++) {
        dp[j] = (dp[j] + dp[j - k * marks]) % MOD;
      }
    }
  }
  return dp[target];
}`,
    typescript: `function waysToReachTarget(target: number, types: number[][]): number {
  const MOD = 1_000_000_007;
  const dp = new Array<number>(target + 1).fill(0);
  dp[0] = 1;
  for (const [count, marks] of types) {
    for (let j = target; j >= 0; j--) {
      for (let k = 1; k <= count! && k * marks! <= j; k++) {
        dp[j] = (dp[j]! + dp[j - k * marks!]!) % MOD;
      }
    }
  }
  return dp[target]!;
}`,
    python: `def waysToReachTarget(target, types):
    MOD = 10**9 + 7
    dp = [0] * (target + 1)
    dp[0] = 1
    for count, marks in types:
        for j in range(target, -1, -1):
            for k in range(1, count + 1):
                if k * marks > j:
                    break
                dp[j] = (dp[j] + dp[j - k * marks]) % MOD
    return dp[target]
`,
  },
  visibleTests: [
    { args: [6, [[6, 1], [3, 2], [2, 3]]], expected: 7 },
    { args: [5, [[50, 1], [50, 2], [50, 5]]], expected: 4 },
    { args: [18, [[6, 1], [3, 2], [2, 3]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, [[1, 1]]], expected: 1 },
    { args: [10, [[2, 5]]], expected: 1 },
    { args: [10, [[5, 1], [5, 2]]], expected: 3 },
    { args: [4, [[2, 2], [2, 2]]], expected: 3 },
    { args: [100, [[50, 2]]], expected: 1 },
    { args: [10, [[10, 1], [10, 2], [10, 5]]], expected: 10 },
    { args: [1, [[1, 2]]], expected: 0 },
  ],
};
