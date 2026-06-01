import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-to-buy-and-sell-stock-ii',
  title: 'Best Time to Buy and Sell Stock II',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`prices\` where \`prices[i]\` is the price of a given stock on the \`ith\` day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return *the maximum profit you can achieve*.`,
  constraints: [
    '1 <= prices.length <= 3 * 10^4',
    '0 <= prices[i] <= 10^4',
  ],
  examples: [
    {
      input: 'prices = [7,1,5,3,6,4]',
      output: '7',
      explanation: 'Buy on day 2 (price=1), sell on day 3 (price=5), profit=4. Then buy on day 4 (price=3), sell on day 5 (price=6), profit=3. Total profit = 4+3 = 7.',
    },
    {
      input: 'prices = [1,2,3,4,5]',
      output: '4',
      explanation: 'Buy on day 1 (price=1), sell on day 5 (price=5), profit=4. Equivalently, collect every positive day-to-day gain.',
    },
    {
      input: 'prices = [7,6,4,3,1]',
      output: '0',
      explanation: 'No profitable transaction possible.',
    },
  ],
  hints: [
    'You can make multiple transactions. The key insight: whenever prices[i] > prices[i-1], add the difference to profit.',
    'This is equivalent to summing all positive consecutive differences.',
    'There is no cooldown or transaction fee, so greedy works perfectly.',
  ],
  functionName: 'maxProfit',
  params: ['prices'],
  starterCode: {
    javascript: `function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
}`,
    typescript: `function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i]! > prices[i - 1]!) profit += prices[i]! - prices[i - 1]!;
  }
  return profit;
}`,
    python: `def maxProfit(prices):
    return sum(max(prices[i] - prices[i-1], 0) for i in range(1, len(prices)))`,
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
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[3, 2, 1, 4]], expected: 3 },
    { args: [[1, 2, 1, 2]], expected: 2 },
  ],
};
