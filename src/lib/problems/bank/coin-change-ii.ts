import type { Problem } from '../types';

export const problem: Problem = {
  id: 'coin-change-ii',
  title: 'Coin Change II',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.

Return the **number of combinations** that make up that amount. If that amount of money cannot be made up by any combination of the coins, return \`0\`.

You may assume that you have an **infinite number of each kind of coin**.`,
  constraints: [
    '1 <= coins.length <= 300',
    '1 <= coins[i] <= 5000',
    'All the values of coins are unique',
    '0 <= amount <= 5000',
  ],
  examples: [
    {
      input: 'amount = 5, coins = [1,2,5]',
      output: '4',
      explanation: 'There are four ways to make amount 5: 5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1.',
    },
    {
      input: 'amount = 3, coins = [2]',
      output: '0',
      explanation: 'The amount 3 cannot be made up with coins [2].',
    },
    {
      input: 'amount = 10, coins = [10]',
      output: '1',
    },
  ],
  hints: [
    'Use unbounded knapsack DP. Let dp[i] = number of ways to make amount i.',
    'Initialize dp[0] = 1 (one way to make 0 — use no coins). All other dp[i] = 0.',
    'For each coin, iterate i from coin to amount: dp[i] += dp[i - coin].',
  ],
  functionName: 'change',
  params: ['amount', 'coins'],
  starterCode: {
    javascript: `function change(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
}`,
    typescript: "function change(amount: number, coins: number[]): number {\n  const dp = new Array(amount + 1).fill(0) as number[];\n  dp[0] = 1;\n  for (const coin of coins) {\n    for (let i = coin; i <= amount; i++) {\n      dp[i]! += dp[i - coin]!;\n    }\n  }\n  return dp[amount]!;\n}",

    python: `def change(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    return dp[amount]`,
  },
  visibleTests: [
    { args: [5, [1, 2, 5]], expected: 4 },
    { args: [3, [2]], expected: 0 },
    { args: [10, [10]], expected: 1 },
  ],
  hiddenTests: [
    { args: [0, [1, 2, 3]], expected: 1 },
    { args: [4, [1, 2, 3]], expected: 4 },
    { args: [7, [2, 3, 5]], expected: 2 },
    { args: [6, [1, 2, 3]], expected: 7 },
  ],
};
