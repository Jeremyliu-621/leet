import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-buy-sell',
  title: 'Best Time to Buy and Sell Stock',
  difficulty: 'easy',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a stock on day \`i\`. Return the **maximum profit** you can achieve from a **single** buy-sell transaction (buy one day, sell on a later day). If no profit is possible, return \`0\`.`,
  constraints: [
    '1 <= prices.length <= 100000',
    '0 <= prices[i] <= 10000',
  ],
  examples: [
    {
      input: 'prices = [7, 1, 5, 3, 6, 4]',
      output: '5',
      explanation: 'Buy on day 2 (price = 1), sell on day 5 (price = 6). Profit = 6 − 1 = 5.',
    },
    {
      input: 'prices = [7, 6, 4, 3, 1]',
      output: '0',
      explanation: 'Prices only fall — no profitable transaction is possible.',
    },
  ],
  hints: [
    'To maximise profit, you want the largest difference `prices[j] - prices[i]` where `j > i`. You do not need nested loops — think about what state to track as you scan left to right.',
    'Track `minPrice` (the lowest price seen so far) and `maxProfit` (the best profit seen so far). For each price, update both: `minPrice = min(minPrice, price)` then `maxProfit = max(maxProfit, price - minPrice)`.',
    '`let min = Infinity, profit = 0; for (const p of prices) { min = Math.min(min, p); profit = Math.max(profit, p - min); } return profit;`',
  ],
  functionName: 'maxProfit',
  params: ['prices'],
  starterCode: {
    javascript: 'function maxProfit(prices) {\n  // your code here\n}\n',
    typescript: 'function maxProfit(prices: number[]): number {\n  // your code here\n}\n',
    python: 'def maxProfit(prices: list) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[7, 1, 5, 3, 6, 4]], expected: 5 },
    { args: [[7, 6, 4, 3, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 2, 6, 5, 0, 3]], expected: 4 },
    { args: [[2, 4, 1]], expected: 2 },
  ],
};
