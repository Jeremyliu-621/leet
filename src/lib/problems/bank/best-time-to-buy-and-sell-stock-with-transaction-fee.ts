import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-to-buy-and-sell-stock-with-transaction-fee',
  title: 'Best Time to Buy and Sell Stock with Transaction Fee',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`-th day, and an integer \`fee\` representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).`,
  constraints: [
    '`1 <= prices.length <= 5 * 10^4`',
    '`1 <= prices[i] < 5 * 10^4`',
    '`0 <= fee < 5 * 10^4`',
  ],
  examples: [
    {
      input: 'prices = [1,3,2,8,4,9], fee = 2',
      output: '8',
      explanation: 'Buy at 1, sell at 8 (profit 5). Buy at 4, sell at 9 (profit 3). Total: 8.',
    },
    {
      input: 'prices = [1,3,7,5,10,3], fee = 3',
      output: '6',
      explanation: 'Buy at 1, sell at 10 minus fee 3 = 6.',
    },
  ],
  hints: [
    'Model two states: cash (not holding stock, max profit so far) and hold (holding stock, max profit considering purchase cost).',
    'Transitions: cash = max(cash, hold + price - fee) (sell today); hold = max(hold, cash - price) (buy today).',
    'Initialize cash = 0, hold = -prices[0]. The fee is deducted only on sell.',
  ],
  functionName: 'maxProfit',
  params: ['prices', 'fee'],
  starterCode: {
    javascript: `function maxProfit(prices, fee) {\n\n}`,
    typescript: 'function maxProfit(prices: number[], fee: number): number {\n\n}',
    python: `def maxProfit(prices, fee):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 8, 4, 9], 2], expected: 8 },
    { args: [[1, 3, 7, 5, 10, 3], 3], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 0 },
    { args: [[1, 2], 0], expected: 1 },
    { args: [[4, 5, 2, 4, 3, 3, 1, 3], 1], expected: 2 },
    { args: [[1, 1, 1, 1, 1], 5], expected: 0 },
    { args: [[1, 100], 10], expected: 89 },
  ],
};
