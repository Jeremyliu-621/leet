import type { Problem } from '../types';

export const problem: Problem = {
  id: 'richest-customer-wealth',
  title: 'Richest Customer Wealth',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an \`m x n\` integer grid \`accounts\` where \`accounts[i][j]\` is the amount of money the \`i​​​​​​​​​​​th​​​​\` customer has in the \`j​​​​​​​​​​​th​​​​\` bank. Return the wealth that the richest customer has.

A customer's wealth is the sum of all money in their bank accounts. The richest customer is the customer that has the maximum wealth.`,
  constraints: [
    '`m == accounts.length`',
    '`n == accounts[i].length`',
    '`1 <= m, n <= 50`',
    '`1 <= accounts[i][j] <= 100`',
  ],
  examples: [
    {
      input: 'accounts = [[1,2,3],[3,2,1]]',
      output: '6',
      explanation: '1st customer has wealth = 1+2+3 = 6. 2nd customer has wealth = 3+2+1 = 6. Both are richest with wealth 6.',
    },
    {
      input: 'accounts = [[1,5],[7,3],[3,5]]',
      output: '10',
      explanation: '2nd customer has wealth = 7+3 = 10.',
    },
    {
      input: 'accounts = [[2,8,7],[7,1,3],[1,9,5]]',
      output: '17',
    },
  ],
  hints: [
    'For each customer, sum their bank accounts. Return the maximum sum.',
    'Use map to compute each row sum (reduce or spread+Math.max), then find the max of all sums.',
    'return Math.max(...accounts.map(a=>a.reduce((s,v)=>s+v,0)));',
  ],
  functionName: 'maximumWealth',
  params: ['accounts'],
  starterCode: {
    javascript: `function maximumWealth(accounts) {

}`,
    python: `def maximumWealth(accounts):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [3, 2, 1]]], expected: 6 },
    { args: [[[1, 5], [7, 3], [3, 5]]], expected: 10 },
    { args: [[[2, 8, 7], [7, 1, 3], [1, 9, 5]]], expected: 17 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[100, 100], [100, 100]]], expected: 200 },
    { args: [[[3, 2, 1], [1, 2, 3]]], expected: 6 },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: 11 },
  ],
};
