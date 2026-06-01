import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-linear-stock-score',
  title: 'Maximum Linear Stock Score',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a **1-indexed** integer array \`prices\` where \`prices[i]\` is the price of the \`i\`-th stock on day \`i\`.

The **score** of a group of stock indices \`indices\` is defined as the **sum** of prices for all indices in the group.

A group is called **linear** if for every pair of indices \`i\` and \`j\` in the group, \`|prices[i] - prices[j]| = |i - j|\`.

Return *the **maximum** score of a linear group*.`,
  constraints: [
    '1 <= prices.length <= 10^5',
    '1 <= prices[i] <= 10^9',
  ],
  examples: [
    {
      input: 'prices = [1,2,3,3,5]',
      output: '11',
      explanation: 'The linear group {prices[1],prices[2],prices[3],prices[5]} = {1,2,3,5} has differences matching index differences: |1-2|=1=|1-2|, etc. Score = 1+2+3+5 = 11.',
    },
    {
      input: 'prices = [4,3,2,1]',
      output: '4',
      explanation: 'No two prices share the same (prices[i]-i) key. Best single element is prices[1]=4.',
    },
  ],
  hints: [
    'A group is linear iff prices[i] - i is the same constant for all members i of the group.',
    'Group all indices by (prices[i] - i) using a hash map and accumulate sums.',
    'Return the maximum accumulated sum.',
  ],
  functionName: 'maxScore',
  params: ['prices'],
  starterCode: {
    javascript: 'function maxScore(prices) {\n\n}\n',
    typescript: 'function maxScore(prices: number[]): number {\n\n}\n',
    python: 'def maxScore(prices):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3,3,5]], expected: 11 },
    { args: [[4,3,2,1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2,3,4,5]], expected: 15 },
    { args: [[1,1,1,1]], expected: 1 },
    { args: [[3,5,7,5,8,9]], expected: 22 },
    { args: [[2,2,2]], expected: 2 },
    { args: [[1,2,1,2,1]], expected: 3 },
    { args: [[5,3,1]], expected: 5 },
  ],
};
