import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-for-tickets',
  title: 'Minimum Cost For Tickets',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array \`days\`. Each day is an integer from \`1\` to \`365\`.

Train tickets are sold in **three different ways**:
- a **1-day** pass sold for \`costs[0]\` dollars
- a **7-day** pass sold for \`costs[1]\` dollars
- a **30-day** pass sold for \`costs[2]\` dollars

Return the **minimum number of dollars** you need to travel every day in the given list of days.`,
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
      explanation: 'Buy a 1-day pass on day 1 ($2), a 7-day pass on day 4 covering days 4–10 ($7), and a 1-day pass on day 20 ($2). Total = $11.',
    },
    {
      input: 'days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]',
      output: '17',
      explanation: 'Buy a 30-day pass on day 1 ($15) and a 1-day pass on day 31 ($2). Total = $17.',
    },
  ],
  hints: [
    'Level 1: Use DP where dp[i] = minimum cost to travel all days up to day i. If day i is not a travel day, dp[i] = dp[i-1]. Otherwise consider all three pass options.',
    'Level 2: For a travel day i: dp[i] = min(dp[i-1]+costs[0], dp[max(0,i-7)]+costs[1], dp[max(0,i-30)]+costs[2]).',
    'Level 3: const daySet=new Set(days),dp=new Array(366).fill(0);for(let i=1;i<=365;i++){if(!daySet.has(i)){dp[i]=dp[i-1];}else{dp[i]=Math.min(dp[i-1]+costs[0],dp[Math.max(0,i-7)]+costs[1],dp[Math.max(0,i-30)]+costs[2]);}}return dp[365];',
  ],
  functionName: 'mincostTickets',
  params: ['days', 'costs'],
  starterCode: {
    javascript: `function mincostTickets(days, costs) {
  const daySet = new Set(days);
  const dp = new Array(366).fill(0);
  for (let i = 1; i <= 365; i++) {
    if (!daySet.has(i)) { dp[i] = dp[i - 1]; continue; }
    dp[i] = Math.min(dp[i - 1] + costs[0], dp[Math.max(0, i - 7)] + costs[1], dp[Math.max(0, i - 30)] + costs[2]);
  }
  return dp[365];
}`,
    typescript: `function mincostTickets(days: number[], costs: number[]): number {
  const daySet = new Set(days);
  const dp = new Array<number>(366).fill(0);
  for (let i = 1; i <= 365; i++) {
    if (!daySet.has(i)) { dp[i] = dp[i - 1]!; continue; }
    dp[i] = Math.min(dp[i - 1]! + costs[0]!, dp[Math.max(0, i - 7)]! + costs[1]!, dp[Math.max(0, i - 30)]! + costs[2]!);
  }
  return dp[365]!;
}`,
    python: `def mincostTickets(days, costs):
    days = list(days.to_py()) if hasattr(days, 'to_py') else list(days)
    costs = list(costs.to_py()) if hasattr(costs, 'to_py') else list(costs)
    day_set = set(days)
    dp = [0] * 366
    for i in range(1, 366):
        if i not in day_set: dp[i] = dp[i - 1]; continue
        dp[i] = min(dp[i-1]+costs[0], dp[max(0,i-7)]+costs[1], dp[max(0,i-30)]+costs[2])
    return dp[365]`,
  },
  visibleTests: [
    { args: [[1, 4, 6, 7, 8, 20], [2, 7, 15]], expected: 11 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]], expected: 17 },
  ],
  hiddenTests: [
    { args: [[1], [2, 7, 15]], expected: 2 },
    { args: [[1], [7, 2, 15]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7], [2, 7, 15]], expected: 7 },
    { args: [[1, 365], [2, 7, 15]], expected: 4 },
  ],
};
