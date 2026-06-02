import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-ice-cream-bars',
  title: 'Maximum Ice Cream Bars',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are \`n\` ice cream bars. You are given an array \`costs\` of length \`n\`, where \`costs[i]\` is the price of the \`i\`th ice cream bar in coins. The boy initially has \`coins\` coins to spend, and he wants to buy as many ice cream bars as possible.

Note: The boy can buy the ice cream bars in any order.

Return the **maximum** number of ice cream bars the boy can buy with \`coins\` coins.`,
  constraints: [
    'costs.length == n',
    '1 <= n <= 10^5',
    '1 <= costs[i] <= 10^5',
    '1 <= coins <= 10^8',
  ],
  examples: [
    {
      input: 'costs = [1,3,2,4,1], coins = 7',
      output: '4',
      explanation: 'The boy can buy 4 ice cream bars: costs 1, 1, 2, 3 = 7 coins.',
    },
    {
      input: 'costs = [10,6,8,7,7,8], coins = 5',
      output: '0',
      explanation: 'The boy cannot afford any ice cream bar.',
    },
  ],
  hints: [
    'Sort the costs array in ascending order.',
    'Greedily buy the cheapest bars first until you run out of coins.',
    `\`\`\`js
function maxIceCream(costs, coins) {
  costs.sort((a,b)=>a-b);
  let count = 0;
  for (const c of costs) {
    if (coins < c) break;
    coins -= c;
    count++;
  }
  return count;
}\`\`\``,
  ],
  functionName: 'maxIceCream',
  params: ['costs', 'coins'],
  starterCode: {
    javascript: `function maxIceCream(costs, coins) {
  costs.sort((a, b) => a - b);
  let count = 0;
  for (const c of costs) {
    if (coins < c) break;
    coins -= c;
    count++;
  }
  return count;
}`,
    typescript: `function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  let count = 0;
  for (const c of costs) {
    if (coins < c) break;
    coins -= c;
    count++;
  }
  return count;
}`,
    python: `def maxIceCream(costs, coins):
    if hasattr(costs, 'to_py'): costs = list(costs.to_py())
    costs = sorted(int(c) for c in costs)
    count = 0
    for c in costs:
        if coins < c: break
        coins -= c
        count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 4, 1], 7], expected: 4 },
    { args: [[10, 6, 8, 7, 7, 8], 5], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 6, 3, 1, 2, 5], 20], expected: 6 },
    { args: [[1], 1], expected: 1 },
    { args: [[2], 1], expected: 0 },
    { args: [[1, 1], 1], expected: 1 },
  ],
};
