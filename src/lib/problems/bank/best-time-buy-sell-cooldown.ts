import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-buy-sell-cooldown',
  title: 'Best Time to Buy and Sell Stock with Cooldown',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

- After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).`,
  constraints: [
    '1 <= prices.length <= 5000',
    '0 <= prices[i] <= 1000',
  ],
  examples: [
    {
      input: 'prices = [1,2,3,0,2]',
      output: '3',
      explanation: 'Buy at 1, sell at 3, cooldown, buy at 0, sell at 2 = profit 3.',
    },
    {
      input: 'prices = [1]',
      output: '0',
    },
  ],
  hints: [
    'Use state machine DP with 3 states: held (holding stock), sold (just sold, in cooldown), rest (no stock, not in cooldown).',
    'Transitions: held = max(held, rest - price); sold = held + price; rest = max(rest, sold).',
    'Initialize held = -prices[0], sold = 0, rest = 0. Answer is max(sold, rest).',
  ],
  functionName: 'maxProfit',
  params: ['prices'],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Return max profit with one-day cooldown after selling
}`,
    python: `def maxProfit(prices):
    # Return max profit with one-day cooldown after selling
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 0, 2]], expected: 3 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 1, 4]], expected: 3 },
    { args: [[6, 1, 3, 2, 4, 7]], expected: 6 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
  ],
};
