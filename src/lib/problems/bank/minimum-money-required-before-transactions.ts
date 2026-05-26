import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-money-required-before-transactions',
  title: 'Minimum Money Required Before Transactions',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** 2D integer array \`transactions\`, where \`transactions[i] = [cost_i, cashback_i]\`.

The array describes transactions, where each transaction must be completed **exactly once** in some order. At any given moment, you have some amount of \`money\`. In order to complete transaction \`i\`, \`money >= cost_i\` must hold true. After performing a transaction, \`money\` becomes \`money - cost_i + cashback_i\`.

Return the **minimum** amount of \`money\` required before any transaction so that **all** of the transactions can be completed **regardless of the order** of the transactions.`,
  constraints: [
    '1 <= transactions.length <= 10^5',
    'transactions[i].length == 2',
    '0 <= cost_i, cashback_i <= 10^9',
  ],
  examples: [
    {
      input: 'transactions = [[2,1],[5,0],[4,2]]',
      output: '10',
      explanation: 'Starting with 10, the worst ordering [2,1],[5,0],[4,2] requires exactly 10.',
    },
    {
      input: 'transactions = [[1,1],[2,2],[3,3]]',
      output: '3',
      explanation: 'All transactions are net-neutral; you just need enough for the largest cost.',
    },
    {
      input: 'transactions = [[10,5],[4,2],[5,3]]',
      output: '14',
      explanation: 'Worst case: do [4,2] and [5,3] first (total loss 4), then need 10 more = 14.',
    },
  ],
  hints: [
    'Compute totalLoss = sum of max(0, cost_i - cashback_i) over all transactions.',
    'For a loss transaction done last: required money = totalLoss - net_i + cost_i = totalLoss + cashback_i.',
    'For a gain/neutral transaction done last: required money = totalLoss + cost_i.',
    'The answer is the maximum across all transactions.',
  ],
  functionName: 'minimumMoney',
  params: ['transactions'],
  starterCode: {
    javascript: 'function minimumMoney(transactions) {\n  \n}\n',
    python: 'def minimumMoney(transactions):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 1], [5, 0], [4, 2]]], expected: 10 },
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 3 },
    { args: [[[10, 5], [4, 2], [5, 3]]], expected: 14 },
  ],
  hiddenTests: [
    { args: [[[5, 5]]], expected: 5 },
    { args: [[[1, 0], [1, 0]]], expected: 2 },
    { args: [[[3, 1], [1, 2]]], expected: 3 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
    { args: [[[100, 1], [2, 50]]], expected: 101 },
  ],
};
