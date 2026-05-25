import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-buy-sell-transaction-fee',
  title: 'Best Time to Buy and Sell Stock with Transaction Fee',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`-th day, and an integer \`fee\` representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

**Note:**
- You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
- The transaction fee is only charged once for each stock purchase and sale.`,
  constraints: [
    '`1 <= prices.length <= 5 * 10^4`',
    '`1 <= prices[i] < 5 * 10^4`',
    '`0 <= fee < 5 * 10^4`',
  ],
  examples: [
    {
      input: 'prices = [1,3,2,8,4,9], fee = 2',
      output: '8',
      explanation:
        'Buy at 1, sell at 8 (profit 8-1-2=5). Buy at 4, sell at 9 (profit 9-4-2=3). Total: 8.',
    },
    {
      input: 'prices = [1,3,7,5,10,3], fee = 3',
      output: '6',
    },
  ],
  hints: [
    'Use DP with two states: `cash` (max profit when not holding stock) and `hold` (max profit when holding stock).',
    'Each day: cash = max(cash, hold + prices[i] - fee); hold = max(hold, cash - prices[i]).',
    'Initialize cash = 0, hold = -prices[0].',
  ],
  functionName: 'maxProfit',
  params: ['prices', 'fee'],
  starterCode: {
    javascript: 'function maxProfit(prices, fee) {\n  \n}\n',
    python: 'def maxProfit(prices, fee):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 8, 4, 9], 2], expected: 8 },
    { args: [[1, 3, 7, 5, 10, 3], 3], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 0 },
    { args: [[1, 2], 1], expected: 0 },
    { args: [[1, 2], 0], expected: 1 },
    { args: [[4, 5, 2, 4, 3, 3, 1, 5, 7, 2], 1], expected: 6 },
    { args: [[1, 4, 6, 2, 8, 3, 10, 14], 3], expected: 13 },
  ],
};
