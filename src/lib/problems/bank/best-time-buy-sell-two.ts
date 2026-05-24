import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-buy-sell-two',
  title: 'Best Time to Buy and Sell Stock (Many Transactions)',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`prices\` where \`prices[i]\` is the price of a stock on day \`i\`.

On each day you may decide to buy and/or sell the stock. You may complete **as many transactions as you like** (buy one and sell one share of the stock multiple times), but you must **sell before buying again** (no holding two shares simultaneously).

Return the **maximum profit** you can achieve.`,
  constraints: [
    '1 <= prices.length <= 1000',
    '0 <= prices[i] <= 10000',
  ],
  examples: [
    {
      input: 'prices = [7,1,5,3,6,4]',
      output: '7',
      explanation: 'Buy on day 2 (price=1) and sell on day 3 (price=5), profit=4. Then buy on day 4 (price=3) and sell on day 5 (price=6), profit=3. Total=7.',
    },
    {
      input: 'prices = [1,2,3,4,5]',
      output: '4',
      explanation: 'Buy on day 1, sell on day 5, profit=4. Or equivalently collect every upward step.',
    },
    {
      input: 'prices = [7,6,4,3,1]',
      output: '0',
      explanation: 'Prices only decrease; the best strategy is to not trade.',
    },
  ],
  hints: [
    'Think of the price chart as a series of peaks and valleys. You want to capture every upward segment — no need to predict future prices.',
    'The greedy insight: every time tomorrow\'s price is higher than today\'s, add that difference to your profit. This is equivalent to buying at every local minimum and selling at every local maximum.',
    '`let profit = 0; for (let i = 1; i < prices.length; i++) { if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1]; } return profit;`',
  ],
  functionName: 'maxProfitMultiple',
  params: ['prices'],
  starterCode: {
    javascript: 'function maxProfitMultiple(prices) {\n  // your code here\n}\n',
    python: 'def maxProfitMultiple(prices):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[7, 1, 5, 3, 6, 4]], expected: 7 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[7, 6, 4, 3, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 0 },
    { args: [[1, 2, 1, 2]], expected: 2 },
    { args: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 8 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
};
