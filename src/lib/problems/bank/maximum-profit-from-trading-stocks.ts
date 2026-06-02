import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-profit-from-trading-stocks',
  title: 'Maximum Profit From Trading Stocks',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given two **0-indexed** integer arrays of the same length \`present\` and \`future\` where \`present[i]\` is the current price of the \`i\`th stock and \`future[i]\` is the price of the \`i\`th stock at the next time step. You may only buy each stock at most once. You want to maximize your profit.

Return the **maximum profit** you can make given a \`budget\` of money.`,
  constraints: [
    'n == present.length == future.length',
    '1 <= n <= 1000',
    '0 <= present[i] <= 1000',
    '0 <= future[i] <= 1000',
    '0 <= budget <= 1000',
  ],
  examples: [
    {
      input: 'present = [2,2,5], future = [3,4,10], budget = 6',
      output: '5',
      explanation: 'Buy stock 2 (cost 5, sell for 10). Profit = 5.',
    },
    {
      input: 'present = [1,2,3], future = [4,5,6], budget = 6',
      output: '9',
      explanation: 'Buy all three stocks (total cost 6, sell for 15). Profit = 9.',
    },
    {
      input: 'present = [2,3,4], future = [5,6,7], budget = 5',
      output: '6',
      explanation: 'Buy stocks 0 and 1 (cost 5, profit 3+3=6).',
    },
  ],
  hints: [
    'Level 1: This is a 0/1 knapsack problem. You can buy each stock at most once.',
    'Level 2: Only consider stocks where future[i] > present[i] (positive profit). Knapsack: capacity = budget, weight = present[i], value = future[i] - present[i].',
    'Level 3: Standard bottom-up knapsack: dp[c] = max profit with budget c. For each profitable stock, iterate c from budget down to present[i].',
  ],
  functionName: 'maximumProfit',
  params: ['present', 'future', 'budget'],
  starterCode: {
    javascript: `function maximumProfit(present, future, budget) {
  const dp = new Array(budget + 1).fill(0);
  for (let i = 0; i < present.length; i++) {
    const w = present[i], profit = future[i] - present[i];
    if (profit <= 0) continue;
    for (let c = budget; c >= w; c--)
      dp[c] = Math.max(dp[c], dp[c - w] + profit);
  }
  return dp[budget];
}`,
    typescript: `function maximumProfit(present: number[], future: number[], budget: number): number {
  const dp = new Array<number>(budget + 1).fill(0);
  for (let i = 0; i < present.length; i++) {
    const w = present[i]!, profit = future[i]! - present[i]!;
    if (profit <= 0) continue;
    for (let c = budget; c >= w; c--)
      dp[c] = Math.max(dp[c]!, dp[c - w]! + profit);
  }
  return dp[budget]!;
}`,
    python: `def maximumProfit(present, future, budget):
    if hasattr(present, 'to_py'): present = present.to_py()
    if hasattr(future, 'to_py'): future = future.to_py()
    present = [int(x) for x in present]; future = [int(x) for x in future]
    budget = int(budget)
    dp = [0] * (budget + 1)
    for w, f in zip(present, future):
        profit = f - w
        if profit <= 0: continue
        for c in range(budget, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + profit)
    return dp[budget]`,
  },
  visibleTests: [
    { args: [[2, 2, 5], [3, 4, 10], 6], expected: 5 },
    { args: [[1, 2, 3], [4, 5, 6], 6], expected: 9 },
    { args: [[2, 3, 4], [5, 6, 7], 5], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], [2], 0], expected: 0 },
    { args: [[1], [2], 1], expected: 1 },
    { args: [[5, 5, 5], [8, 8, 8], 10], expected: 6 },
    { args: [[3, 3, 3], [4, 4, 4], 6], expected: 2 },
    { args: [[1, 2], [5, 3], 3], expected: 5 },
  ],
};
