import type { Problem } from '../types';

export const problem: Problem = {
  id: 'profitable-schemes',
  title: 'Profitable Schemes',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There is a group of \`n\` members, and a list of various crimes they could commit. The \`i\`th crime generates a \`profit[i]\` and requires \`group[i]\` members to participate in it. If a member participates in one crime, that member can't participate in another crime.

Let's call a **profitable scheme** any subset of these crimes that generates at least \`minProfit\` profit, and the total number of members participating in that subset of crimes is at most \`n\`.

Return the number of schemes that can be chosen. Since the answer may be very large, **return it modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 100',
    '0 <= minProfit <= 100',
    '1 <= group.length <= 100',
    '1 <= group[i] <= 100',
    '0 <= profit[i] <= 100',
  ],
  examples: [
    {
      input: 'n = 5, minProfit = 3, group = [2,2], profit = [2,3]',
      output: '2',
      explanation: 'To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1. There are 2 schemes.',
    },
    {
      input: 'n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]',
      output: '7',
      explanation: 'All single crimes and pairs of crimes are valid schemes, plus all three crimes together. There are 7 schemes.',
    },
  ],
  hints: [
    'Use 2D knapsack DP: dp[w][p] = number of schemes using exactly w workers with exactly p profit (p capped at minProfit).',
    'Iterate over crimes in reverse to avoid double-counting.',
    'The answer is the sum of dp[0..n][minProfit].',
  ],
  functionName: 'profitableSchemes',
  params: ['n', 'minProfit', 'group', 'profit'],
  starterCode: {
    javascript: 'function profitableSchemes(n, minProfit, group, profit) {\n\n}\n',
    python: 'def profitableSchemes(n, minProfit, group, profit):\n    pass\n',
  },
  visibleTests: [
    { args: [5, 3, [2, 2], [2, 3]], expected: 2 },
    { args: [10, 5, [2, 3, 5], [6, 7, 8]], expected: 7 },
  ],
  hiddenTests: [
    { args: [1, 1, [1], [1]], expected: 1 },
    { args: [1, 1, [1, 1], [1, 1]], expected: 2 },
    { args: [3, 0, [1, 1, 1], [1, 1, 1]], expected: 8 },
    { args: [1, 2, [1], [1]], expected: 0 },
  ],
};
