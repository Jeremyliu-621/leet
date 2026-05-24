import type { Problem } from '../types';

export const problem: Problem = {
  id: 'coin-change',
  title: 'Coin Change',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.

Return the **fewest number of coins** that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return \`-1\`.

You may assume that you have an **infinite** number of each kind of coin.`,
  constraints: [
    '1 <= coins.length <= 12',
    '1 <= coins[i] <= 2^31 - 1',
    '0 <= amount <= 10^4',
  ],
  examples: [
    {
      input: 'coins = [1,5,10,25], amount = 36',
      output: '3',
      explanation: '25 + 10 + 1.',
    },
    {
      input: 'coins = [1,2,5], amount = 11',
      output: '3',
      explanation: '5 + 5 + 1.',
    },
    {
      input: 'coins = [2], amount = 3',
      output: '-1',
      explanation: 'Cannot make 3 with only 2-coins.',
    },
  ],
  hints: [
    'Build a `dp` array of size `amount + 1` where `dp[i]` = minimum coins to make `i`. Initialize to `Infinity`, set `dp[0] = 0`.',
    'For each amount from 1 to `amount`, try each coin: if `i >= coin`, update `dp[i] = min(dp[i], dp[i - coin] + 1)`.',
    '`const dp = new Array(amount + 1).fill(Infinity); dp[0] = 0; for (let i = 1; i <= amount; i++) { for (const c of coins) { if (i >= c) dp[i] = Math.min(dp[i], dp[i-c] + 1); } } return dp[amount] === Infinity ? -1 : dp[amount];`',
  ],
  functionName: 'coinChange',
  params: ['coins', 'amount'],
  starterCode: {
    javascript: 'function coinChange(coins, amount) {\n  \n}\n',
    python: 'def coinChange(coins: list[int], amount: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 5, 10, 25], 36], expected: 3 },
    { args: [[1, 2, 5], 11], expected: 3 },
    { args: [[2], 3], expected: -1 },
    { args: [[1], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 5, 10, 25], 0], expected: 0 },
    { args: [[1, 5, 10, 25], 1], expected: 1 },
    { args: [[186, 419, 83, 408], 6249], expected: 20 },
  ],
};
