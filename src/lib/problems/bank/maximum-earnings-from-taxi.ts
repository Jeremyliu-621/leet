import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-earnings-from-taxi',
  title: 'Maximum Earnings From Taxi',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'binary-search'],
  description: `There are \`n\` points on a road you are driving your taxi on. The \`n\` points on the road are labeled from \`1\` to \`n\` in the direction you are going, and you want to drive from point \`1\` to point \`n\` to make money by picking up passengers.

You cannot change the direction of the taxi.

The passengers are represented by a **0-indexed** integer array \`rides\`, where \`rides[i] = [start_i, end_i, tip_i]\` denotes the \`i\`-th passenger requesting a ride from point \`start_i\` to point \`end_i\` who will tip \`tip_i\` dollars.

For **each** passenger \`i\` you pick up, you **earn** \`end_i - start_i + tip_i\` dollars. You may only drive **one** passenger at a time.

Given \`n\` and \`rides\`, return the **maximum** number of dollars you can earn by picking up the passengers optimally.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`1 <= rides.length <= 3 * 10^4`',
    '`rides[i].length == 3`',
    '`1 <= start_i < end_i <= n`',
    '`1 <= tip_i <= 10^5`',
  ],
  examples: [
    {
      input: 'n = 5, rides = [[2,5,4],[1,5,1]]',
      output: '7',
      explanation: 'Pick up passenger 0 to earn 5 - 2 + 4 = 7 dollars.',
    },
    {
      input: 'n = 20, rides = [[1,6,1],[3,10,2],[10,12,3],[11,12,2],[12,15,2],[13,18,1]]',
      output: '20',
      explanation: 'Pick up passengers 1, 2, and 5 to earn 9 + 5 + 6 = 20 dollars.',
    },
  ],
  hints: [
    'Sort rides by end point.',
    'Use DP: dp[i] = max earnings up to position i.',
    'For each ride ending at end_i, either skip it (dp[end] = dp[end-1]) or take it (dp[end] = dp[start] + end - start + tip).',
    'Binary search or a sorted map to find dp[start] efficiently.',
  ],
  functionName: 'maxTaxiEarnings',
  params: ['n', 'rides'],
  starterCode: {
    javascript: `function maxTaxiEarnings(n, rides) {
  const dp = new Array(n + 1).fill(0);
  const byEnd = new Map();
  for (const [s, e, t] of rides) {
    if (!byEnd.has(e)) byEnd.set(e, []);
    byEnd.get(e).push([s, t]);
  }
  for (let pos = 1; pos <= n; pos++) {
    dp[pos] = dp[pos - 1];
    if (byEnd.has(pos)) {
      for (const [s, t] of byEnd.get(pos))
        dp[pos] = Math.max(dp[pos], dp[s] + pos - s + t);
    }
  }
  return dp[n];
}`,
    typescript: `function maxTaxiEarnings(n: number, rides: number[][]): number {
  const dp = new Array(n + 1).fill(0);
  const byEnd = new Map<number, [number, number][]>();
  for (const [s, e, t] of rides) {
    if (!byEnd.has(e!)) byEnd.set(e!, []);
    byEnd.get(e!)!.push([s!, t!]);
  }
  for (let pos = 1; pos <= n; pos++) {
    dp[pos] = dp[pos - 1];
    if (byEnd.has(pos)) {
      for (const [s, t] of byEnd.get(pos)!)
        dp[pos] = Math.max(dp[pos], dp[s]! + pos - s + t);
    }
  }
  return dp[n]!;
}`,
    python: `def maxTaxiEarnings(n, rides):
    from collections import defaultdict
    by_end = defaultdict(list)
    for s, e, t in rides:
        by_end[e].append((s, t))
    dp = [0] * (n + 1)
    for pos in range(1, n + 1):
        dp[pos] = dp[pos - 1]
        for s, t in by_end[pos]:
            dp[pos] = max(dp[pos], dp[s] + pos - s + t)
    return dp[n]`,
  },
  visibleTests: [
    { args: [5, [[2, 5, 4], [1, 5, 1]]], expected: 7 },
    { args: [20, [[1, 6, 1], [3, 10, 2], [10, 12, 3], [11, 12, 2], [12, 15, 2], [13, 18, 1]]], expected: 20 },
  ],
  hiddenTests: [
    { args: [10, [[1, 5, 2]]], expected: 6 },
    { args: [10, [[1, 5, 2], [3, 7, 1]]], expected: 6 },
    { args: [10, [[1, 5, 2], [5, 9, 3]]], expected: 13 },
    { args: [10, [[1, 10, 100]]], expected: 109 },
    { args: [3, [[1, 2, 1], [2, 3, 1]]], expected: 4 },
    { args: [100, [[10, 20, 5], [30, 50, 10], [60, 80, 15]]], expected: 80 },
  ],
};
