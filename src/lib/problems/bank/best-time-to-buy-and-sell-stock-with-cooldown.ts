import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-to-buy-and-sell-stock-with-cooldown',
  title: 'Best Time to Buy and Sell Stock with Cooldown',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`-th day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restriction:

- After you **sell** your stock, you cannot buy stock on the next day (i.e., cooldown one day).

**Note:** You may not engage in multiple transactions simultaneously (you must sell the stock before you buy again).`,
  constraints: ['`1 <= prices.length <= 5000`', '`0 <= prices[i] <= 1000`'],
  examples: [
    {
      input: 'prices = [1,2,3,0,2]',
      output: '3',
      explanation:
        'Buy on day 0 (price=1), sell on day 1 (price=2), cooldown day 2, buy on day 3 (price=0), sell on day 4 (price=2). Total profit = 1 + 2 = 3.',
    },
    {
      input: 'prices = [1]',
      output: '0',
      explanation: 'Only one day; no transaction possible.',
    },
  ],
  hints: [
    'Model three states: `hold` (currently holding a stock), `sold` (just sold today — must cooldown tomorrow), and `rest` (cooldown/idle — can buy next day).',
    'Transitions: `hold = max(hold, rest - price)`, `sold = hold + price`, `rest = max(rest, sold)`. Process each price with these updates simultaneously.',
    '```js\nfunction maxProfitCooldown(prices) {\n  let hold = -Infinity, sold = 0, rest = 0;\n  for (const p of prices) {\n    const prevHold = hold, prevSold = sold, prevRest = rest;\n    hold = Math.max(prevHold, prevRest - p);\n    sold = prevHold + p;\n    rest = Math.max(prevRest, prevSold);\n  }\n  return Math.max(sold, rest);\n}\n```',
  ],
  functionName: 'maxProfitCooldown',
  params: ['prices'],
  starterCode: {
    javascript: `function maxProfitCooldown(prices) {
  let held = -Infinity, sold = -Infinity, rest = 0;
  for (const price of prices) {
    const ph = held, ps = sold;
    held = Math.max(ph, rest - price);
    sold = ph + price;
    rest = Math.max(rest, ps);
  }
  return Math.max(sold, rest);
}`,
    typescript: `function maxProfitCooldown(prices: number[]): number {
  let held = -Infinity, sold = -Infinity, rest = 0;
  for (const price of prices) {
    const ph = held, ps = sold;
    held = Math.max(ph, rest - price);
    sold = ph + price;
    rest = Math.max(rest, ps);
  }
  return Math.max(sold, rest);
}`,
    python: `def maxProfitCooldown(prices: list[int]) -> int:
    prices = list(prices.to_py()) if hasattr(prices, 'to_py') else list(prices)
    held, sold, rest = float('-inf'), float('-inf'), 0
    for price in prices:
        ph, ps = held, sold
        held = max(ph, rest - price)
        sold = ph + price
        rest = max(rest, ps)
    return max(sold, rest)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 0, 2]], expected: 3 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 0 },
    { args: [[1, 4, 2]], expected: 3 },
    { args: [[6, 1, 3, 2, 4, 7]], expected: 6 },
  ],
};
