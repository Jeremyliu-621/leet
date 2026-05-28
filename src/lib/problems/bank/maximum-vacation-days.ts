import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-vacation-days',
  title: 'Maximum Vacation Days',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'graph'],
  description: `LeetCode wants to give one of its employees the **reward** of a vacation, and it offers them a choice of **n** cities and **K** weeks. The employee starts in **city 0** (0-indexed).

You are given two integers \`n\` and \`K\` (but through the arrays):
- \`flights[i][j]\` = 1 if there is a direct flight from city \`i\` to city \`j\`, otherwise \`flights[i][j]\` = 0.
- \`days[i][j]\` = number of vacation days the employee can take in city \`i\` during week \`j\`.

Each week, the employee may stay in the same city or fly to a different city at the **start** of the week (before counting vacation days). Return the **maximum** number of vacation days the employee can take.`,
  constraints: [
    '`n == flights.length == flights[i].length == days.length`',
    '`K == days[i].length`',
    '`1 <= n <= 100`',
    '`1 <= K <= 100`',
    '`flights[i][j]` is `0` or `1`.',
    '`0 <= days[i][j] <= 7`',
    '`flights[i][i]` = 0 for all `i`.',
  ],
  examples: [
    {
      input: 'flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[1,3,1],[6,0,6],[3,3,3]]',
      output: '15',
      explanation: 'Optimal: week 0 → city 1 (6 days), week 1 → city 0 (3 days), week 2 → city 1 (6 days). Total = 15.',
    },
    {
      input: 'flights = [[0,0,0],[0,0,0],[0,0,0]], days = [[1,1,1],[7,7,7],[7,7,7]]',
      output: '3',
      explanation: 'No flights available; must stay in city 0 the whole time. Total = 1+1+1 = 3.',
    },
  ],
  hints: [
    'Use DP where dp[city] = maximum vacation days achievable while ending week w in city.',
    'At the start of each week, transition: from each city c with dp[c] > -∞, you can move to any city next where flights[c][next]=1 or next==c.',
    'Initialize dp[0] = 0 (start at city 0), dp[other] = -∞ (unreachable). After K weeks, return max(dp).',
  ],
  functionName: 'maxVacationDays',
  params: ['flights', 'days'],
  starterCode: {
    javascript: `function maxVacationDays(flights, days) {

}`,
    typescript: "function maxVacationDays(flights: number[][], days: number[][]): number {\n\n}",

    python: `def maxVacationDays(flights, days):
    pass`,
  },
  visibleTests: [
    {
      args: [[[0,1,1],[1,0,1],[1,1,0]], [[1,3,1],[6,0,6],[3,3,3]]],
      expected: 15,
    },
    {
      args: [[[0,0,0],[0,0,0],[0,0,0]], [[1,1,1],[7,7,7],[7,7,7]]],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [[[0,1],[0,0]], [[2,3],[5,1]]],
      expected: 6,
    },
    {
      args: [[[0,1],[1,0]], [[1,5],[5,1]]],
      expected: 10,
    },
    {
      args: [[[0,1],[1,0]], [[1,2],[5,1]]],
      expected: 7,
    },
    {
      args: [[[0,0],[0,0]], [[1,2],[3,4]]],
      expected: 3,
    },
    {
      args: [[[0,1,1],[1,0,1],[1,1,0]], [[7,0,0],[0,7,0],[0,0,7]]],
      expected: 21,
    },
  ],
};
