import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-buy-sell-iii',
  title: 'Best Time to Buy and Sell Stock III',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day.

Find the maximum profit you can achieve. You may complete **at most two transactions**.

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).`,
  constraints: [
    '`1 <= prices.length <= 10^5`',
    '`0 <= prices[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'prices = [3,3,5,0,0,3,1,4]',
      output: '6',
      explanation: 'Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3. Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 3.',
    },
    {
      input: 'prices = [1,2,3,4,5]',
      output: '4',
      explanation: 'Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 4.',
    },
    {
      input: 'prices = [7,6,4,3,1]',
      output: '0',
      explanation: 'In this case, no transaction is done, so the max profit = 0.',
    },
  ],
  hints: [
    'Track 4 state variables: buy1 (best profit after first buy), sell1 (best profit after first sell), buy2 (best profit after second buy), sell2 (best profit after second sell).',
    'Update them greedily: buy1 = max(buy1, -price); sell1 = max(sell1, buy1+price); buy2 = max(buy2, sell1-price); sell2 = max(sell2, buy2+price).',
    'The answer is sell2 at the end.',
  ],
  functionName: 'maxProfitIII',
  params: ['prices'],
  starterCode: {
    javascript: 'function maxProfitIII(prices) {\n  \n}\n',
    python: 'def maxProfitIII(prices):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 6 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[7, 6, 4, 3, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1, 4, 5, 2, 9, 7]], expected: 11 },
    { args: [[1, 2, 4, 2, 5, 7, 2, 4, 9, 0]], expected: 13 },
  ],
};
