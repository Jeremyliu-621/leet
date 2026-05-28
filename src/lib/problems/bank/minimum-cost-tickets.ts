import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-tickets',
  title: 'Minimum Cost For Tickets',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array \`days\`. Each day is an integer from 1 to 365.

Train tickets are sold in **three different ways**:
- A **1-day** pass sold for \`costs[0]\` dollars
- A **7-day** pass sold for \`costs[1]\` dollars
- A **30-day** pass sold for \`costs[2]\` dollars

The passes allow that many days of consecutive travel. Return the **minimum number of dollars** you need to travel every day in the given list of days.`,
  constraints: [
    '1 <= days.length <= 365',
    '1 <= days[i] <= 365',
    'days is in strictly increasing order',
    'costs.length == 3',
    '1 <= costs[i] <= 1000',
  ],
  examples: [
    {
      input: 'days = [1,4,6,7,8,20], costs = [2,7,15]',
      output: '11',
      explanation: 'Buy a 1-day pass on days 1, 4, 6, 7, 8 and 20 = 6*2=12? No: buy 7-day on day 1 (covers 1-7), 1-day on day 8, 1-day on day 20 = 7+2+2=11.',
    },
    {
      input: 'days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]',
      output: '17',
    },
  ],
  hints: [
    'Use DP. Let dp[i] = minimum cost to cover all travel up to and including day i.',
    'If day i is not a travel day, dp[i] = dp[i-1].',
    'If day i is a travel day, dp[i] = min(dp[i-1]+costs[0], dp[max(0,i-7)]+costs[1], dp[max(0,i-30)]+costs[2]).',
  ],
  functionName: 'mincostTickets',
  params: ['days', 'costs'],
  starterCode: {
    javascript: `function mincostTickets(days, costs) {
  // Return minimum cost to cover all travel days
}`,
    python: `def mincostTickets(days, costs):
    # Return minimum cost to cover all travel days
    pass`,
  },
  visibleTests: [
    { args: [[1,4,6,7,8,20], [2,7,15]], expected: 11 },
    { args: [[1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]], expected: 17 },
    { args: [[1,2,3,4,5,6,7], [2,7,15]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1], [2,7,15]], expected: 2 },
    { args: [[1,365], [2,7,15]], expected: 4 },
    { args: [[1,2,3,4,5,6,7], [1,4,11]], expected: 4 },
    { args: [[1,4,6,7,8,20], [7,2,15]], expected: 6 },
  ],
};
