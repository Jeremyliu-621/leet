import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-time-to-buy-and-sell-stock-iv',
  title: 'Best Time to Buy and Sell Stock IV',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given an integer array \`prices\` where \`prices[i]\` is the price of a stock on the i-th day, and an integer \`k\`. Find the **maximum profit** you can achieve with **at most k transactions**.

**Note:** You may not engage in multiple transactions simultaneously (you must sell before you buy again).

**Approach:** When \`2k ≥ n\`, unlimited transactions suffice (sum all positive diffs). Otherwise use O(kn) DP: maintain \`buy[j]\` (best profit after buying in j-th transaction) and \`sell[j]\` (best profit after selling j-th transaction).`,
  constraints: [
    '1 <= k <= 100',
    '1 <= prices.length <= 1000',
    '0 <= prices[i] <= 1000',
  ],
  examples: [
    {
      input: 'k = 2, prices = [2,4,1]',
      output: '2',
      explanation: 'Buy on day 1 (price=2), sell on day 2 (price=4). Profit = 2.',
    },
    {
      input: 'k = 2, prices = [3,2,6,5,0,3]',
      output: '7',
      explanation: 'Buy on day 2 (price=2), sell on day 3 (price=6). Then buy on day 5 (price=0), sell on day 6 (price=3). Profit = 4+3 = 7.',
    },
    {
      input: 'k = 1, prices = [2,1,4]',
      output: '3',
      explanation: 'Buy on day 2 (price=1), sell on day 3 (price=4). Profit = 3.',
    },
  ],
  hints: [
    'If 2k >= n, you can make as many transactions as you want — just sum all price increases.',
    'Otherwise, maintain `buy[j]` = max profit with j buys done, `sell[j]` = max profit with j sells done. Update right-to-left per price to prevent using the same day twice.',
    '```js\nif (k >= prices.length / 2) {\n  let p = 0;\n  for (let i = 1; i < prices.length; i++) p += Math.max(0, prices[i] - prices[i-1]);\n  return p;\n}\nconst buy = Array(k+1).fill(-Infinity), sell = Array(k+1).fill(0);\nfor (const p of prices)\n  for (let j = k; j >= 1; j--) {\n    buy[j] = Math.max(buy[j], sell[j-1] - p);\n    sell[j] = Math.max(sell[j], buy[j] + p);\n  }\nreturn sell[k];\n```',
  ],
  functionName: 'maxProfit',
  params: ['k', 'prices'],
  starterCode: {
    javascript: `function maxProfit(k, prices) {
  if (k >= prices.length / 2) {
    let p = 0;
    for (let i = 1; i < prices.length; i++) p += Math.max(0, prices[i] - prices[i - 1]);
    return p;
  }
  const buy = new Array(k + 1).fill(-Infinity), sell = new Array(k + 1).fill(0);
  for (const p of prices)
    for (let j = k; j >= 1; j--) {
      buy[j] = Math.max(buy[j], sell[j - 1] - p);
      sell[j] = Math.max(sell[j], buy[j] + p);
    }
  return sell[k];
}`,
    typescript: `function maxProfit(k: number, prices: number[]): number {
  if (k >= prices.length / 2) {
    let p = 0;
    for (let i = 1; i < prices.length; i++) p += Math.max(0, prices[i]! - prices[i - 1]!);
    return p;
  }
  const buy = new Array<number>(k + 1).fill(-Infinity), sell = new Array<number>(k + 1).fill(0);
  for (const p of prices)
    for (let j = k; j >= 1; j--) {
      buy[j]! = Math.max(buy[j]!, sell[j - 1]! - p);
      sell[j]! = Math.max(sell[j]!, buy[j]! + p);
    }
  return sell[k]!;
}`,

    python: `def maxProfit(k: int, prices: list) -> int:
    if hasattr(prices, 'to_py'): prices = prices.to_py()
    prices = [int(x) for x in prices]
    n = len(prices)
    if k >= n // 2:
        return sum(max(0, prices[i]-prices[i-1]) for i in range(1, n))
    buy = [-float('inf')] * (k+1); sell = [0] * (k+1)
    for p in prices:
        for j in range(k, 0, -1):
            buy[j] = max(buy[j], sell[j-1] - p)
            sell[j] = max(sell[j], buy[j] + p)
    return sell[k]
`,
  },
  visibleTests: [
    { args: [2, [2, 4, 1]], expected: 2 },
    { args: [2, [3, 2, 6, 5, 0, 3]], expected: 7 },
    { args: [1, [2, 1, 4]], expected: 3 },
  ],
  hiddenTests: [
    { args: [0, [1, 2, 3]], expected: 0 },
    { args: [1, [3, 2, 1]], expected: 0 },
    { args: [3, [1, 2, 3, 4, 5]], expected: 4 },
    { args: [2, [1, 3, 2, 8, 4, 9]], expected: 12 },
    { args: [100, [1, 3, 2, 8, 4, 9]], expected: 13 },
    { args: [2, [1, 2]], expected: 1 },
  ],
};
