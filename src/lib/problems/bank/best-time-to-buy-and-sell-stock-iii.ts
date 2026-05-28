import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-to-buy-and-sell-stock-iii',
  title: 'Best Time to Buy and Sell Stock III',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`ith\` day.

Find the maximum profit you can achieve. You may complete **at most two transactions**.

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).`,
  constraints: [
    '1 <= prices.length <= 10^5',
    '0 <= prices[i] <= 10^5',
  ],
  examples: [
    {
      input: 'prices = [3,3,5,0,0,3,1,4]',
      output: '6',
      explanation: 'Buy on day 4 (price=0) sell on day 6 (price=3), profit=3. Then buy on day 7 (price=1) sell on day 8 (price=4), profit=3. Total profit = 6.',
    },
    {
      input: 'prices = [1,2,3,4,5]',
      output: '4',
      explanation: 'Buy on day 1 (price=1) sell on day 5 (price=5), profit=4. No benefit in a second transaction.',
    },
    {
      input: 'prices = [7,6,4,3,1]',
      output: '0',
      explanation: 'No profitable transaction is possible.',
    },
  ],
  hints: [
    'Track four state variables: buy1, sell1, buy2, sell2 (profit after each action).',
    'buy1 = max(buy1, -price); sell1 = max(sell1, buy1+price); buy2 = max(buy2, sell1-price); sell2 = max(sell2, buy2+price).',
    'Initialize buy1 and buy2 to -Infinity (no shares bought yet) and sell1, sell2 to 0.',
  ],
  functionName: 'maxProfit',
  params: ['prices'],
  starterCode: {
    javascript: 'function maxProfit(prices) {\n\n}',
    typescript: "function maxProfit(prices: number[]): number {\n\n}",

    python: 'def maxProfit(prices):\n    pass',
  },
  visibleTests: [
    { args: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 6 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[7, 6, 4, 3, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[6, 1, 3, 2, 4, 7]], expected: 7 },
    { args: [[1, 2, 4, 2, 5, 7, 2, 4, 9, 0]], expected: 13 },
  ],
};
