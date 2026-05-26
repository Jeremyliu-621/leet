import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-buy-sell',
  title: 'Best Time to Buy and Sell Stock',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`-th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.`,
  examples: [
    { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price=1), sell on day 5 (price=6). Profit = 6-1 = 5.' },
    { input: 'prices = [7,6,4,3,1]', output: '0', explanation: 'No transaction gives a positive profit.' },
  ],
  constraints: [
    '1 <= prices.length <= 10^5',
    '0 <= prices[i] <= 10^4',
  ],
  functionName: 'maxProfit',
  params: ['prices'],
  starterCode: {
    javascript: 'function maxProfit(prices) {\n  // your code here\n}\n',
    python: 'def maxProfit(prices):\n    # your code here\n    pass\n',
  },
  hints: [
    'Track the minimum price seen so far as you iterate. At each price, the profit is price - minSoFar.',
    'Update maxProfit = max(maxProfit, prices[i] - minSoFar).',
    'If prices only decrease, no profitable transaction exists — return 0. Initialize maxProfit = 0 so this is handled automatically.',
  ],
  visibleTests: [
    { args: [[7, 1, 5, 3, 6, 4]], expected: 5 },
    { args: [[7, 6, 4, 3, 1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 4, 1]], expected: 2 },
    { args: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 4 },
  ],
};
