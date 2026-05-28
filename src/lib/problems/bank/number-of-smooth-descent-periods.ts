import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-smooth-descent-periods',
  title: 'Number of Smooth Descent Periods of a Stock',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`prices\` representing the daily price history of a stock, where \`prices[i]\` is the stock price on the \`i\`th day.

A **smooth descent period** of a stock consists of **one or more contiguous** days such that the price on each day is **lower than the price on the preceding day by exactly 1**. The first day of the period is exempted from this rule.

Return the number of **smooth descent periods**.`,
  constraints: [
    '1 <= prices.length <= 10^5',
    '1 <= prices[i] <= 10^5',
  ],
  examples: [
    {
      input: 'prices = [3,2,1,4]',
      output: '7',
      explanation: 'There are 7 smooth descent periods: [3], [2], [1], [4], [3,2], [2,1], [3,2,1].',
    },
    {
      input: 'prices = [8,6,7,7]',
      output: '4',
      explanation: 'Each day by itself is a smooth descent period. Also [8],[6],[7],[7] = 4.',
    },
    {
      input: 'prices = [1]',
      output: '1',
      explanation: 'Only one element, so exactly one smooth descent period.',
    },
  ],
  hints: [
    'Count the length of the current smooth descent run ending at each position.',
    'If prices[i] == prices[i-1] - 1, extend the run; otherwise reset the run length to 1.',
    'Each run of length k contributes k new smooth descent periods (all suffixes of the run).',
  ],
  functionName: 'getDescentPeriods',
  params: ['prices'],
  starterCode: {
    javascript: `function getDescentPeriods(prices) {

}`,
    typescript: "function getDescentPeriods(prices: number[]): number {\n\n}",

    python: `def getDescentPeriods(prices):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 4]], expected: 7 },
    { args: [[8, 6, 7, 7]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5, 4, 3, 2, 1]], expected: 15 },
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[3, 2, 1, 2, 1]], expected: 9 },
    { args: [[10, 10, 10]], expected: 3 },
  ],
};
