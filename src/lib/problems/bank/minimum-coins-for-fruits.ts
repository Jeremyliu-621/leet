import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-coins-for-fruits',
  title: 'Minimum Coins for Fruits',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `At a market you can buy \`n\` fruits. You are given a **1-indexed** integer array \`prices\`, where \`prices[i]\` is the number of coins needed to buy the \`i\`-th fruit.

The fruit market has a promotion: **if you purchase the \`i\`-th fruit at \`prices[i]\` coins, you can get the next \`i\` fruits for free**.

That is, buying the \`i\`-th fruit grants you fruits \`i+1, i+2, …, 2i\` for free. You do not have to pay for them, but you may still choose to pay for any of them to extend the free window further.

Return the **minimum** number of coins needed to acquire all \`n\` fruits.`,
  constraints: [
    '1 <= n == prices.length <= 1000',
    '1 <= prices[i] <= 10^5',
  ],
  examples: [
    {
      input: 'prices = [3,1,2]',
      output: '4',
      explanation: 'Buy fruit 1 for 3 coins (fruit 2 is free). Buy fruit 2 for 1 coin (fruit 3 is free). Total = 4.',
    },
    {
      input: 'prices = [1,10,1,1]',
      output: '2',
      explanation: 'Buy fruit 1 for 1 coin (fruit 2 is free). Buy fruit 3 for 1 coin (fruits 4 and 5 are free). Total = 2.',
    },
    {
      input: 'prices = [26,18,6,12,49,7,45,45]',
      output: '39',
      explanation: 'Optimal: buy fruit 2 (18 coins), buy fruit 3 (6 coins), buy fruit 5 (49 coins) — free: 6,7,8 from 3; free: 6,7,8,9,10 from 5. Plus fruit 1 must be bought (26 coins)? Actually: buy fruit 1 (26), buy fruit 2 (18), buy fruit 4 (12) — total = 56? Finding optimal is left to the algorithm.',
    },
  ],
  hints: [
    'Think backwards: define `dp[i]` = minimum coins to acquire all fruits from position `i` to `n`.',
    'If you buy fruit `i`, fruits `i+1` through `2i` are free. You then optimally choose the next fruit to buy from the range `[i+1, 2i+1]`. So `dp[i] = prices[i-1] + min(dp[j])` for `j` in `[i+1, min(2i+1, n+1)]`.',
    'Use a sliding-window minimum (monotonic deque) to compute the range minimum in O(1) per step, giving an O(n) overall solution. For small `n`, an O(n²) approach also works.',
  ],
  functionName: 'minimumCoins',
  params: ['prices'],
  starterCode: {
    javascript: 'function minimumCoins(prices) {\n  // your code here\n}\n',
    python: 'def minimumCoins(prices):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 4 },
    { args: [[1, 10, 1, 1]], expected: 2 },
    { args: [[1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5, 5, 5, 5, 5]], expected: 10 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[10, 1, 1]], expected: 11 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 2 },
    { args: [[2, 2, 2]], expected: 4 },
    { args: [[1, 10, 10, 10, 10]], expected: 11 },
    { args: [[1, 2, 3]], expected: 3 },
  ],
};
