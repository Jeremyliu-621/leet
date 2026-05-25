import type { Problem } from '../types';

export const problem: Problem = {
  id: 'buy-two-chocolates',
  title: 'Buy Two Chocolates',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`prices\` representing the prices of various chocolates in a store. You are also given a single integer \`money\`, which represents your initial amount of money.

You must buy **exactly two** chocolates in such a way that you still have some **non-negative** leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without spending more than you have, return \`money\`. Note that the leftover must be non-negative.`,
  constraints: [
    '`2 <= prices.length <= 50`',
    '`1 <= prices[i] <= 100`',
    '`1 <= money <= 100`',
  ],
  examples: [
    {
      input: 'prices = [1,2,2], money = 3',
      output: '0',
      explanation: 'Buy chocolates at indices 0 and 1 for a total cost of 3. Leftover = 3 - 3 = 0.',
    },
    {
      input: 'prices = [3,2,3], money = 3',
      output: '3',
      explanation: 'We cannot buy 2 chocolates without going over budget, so we return 3.',
    },
  ],
  hints: [
    'Sort prices. The minimum sum of two chocolates is prices[0] + prices[1].',
    'If this sum is within your budget, return money - sum. Otherwise return money.',
  ],
  functionName: 'buyChoco',
  params: ['prices', 'money'],
  starterCode: {
    javascript: 'function buyChoco(prices, money) {\n  \n}\n',
    python: 'def buyChoco(prices, money):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2], 3], expected: 0 },
    { args: [[3, 2, 3], 3], expected: 3 },
    { args: [[1, 1], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 10, 1, 3], 7], expected: 3 },
    { args: [[5, 5], 9], expected: 9 },
    { args: [[1, 2, 3, 4, 5], 10], expected: 7 },
    { args: [[100, 100], 99], expected: 99 },
  ],
};
