import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-profit-as-the-salesman',
  title: 'Maximize the Profit as the Salesman',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'binary-search'],
  description: `You are given a positive integer \`n\` representing \`n\` houses on a number line, numbered from \`0\` to \`n - 1\`.

You are given a 2D integer array \`offers\` where \`offers[i] = [start_i, end_i, gold_i]\`. This means the i-th buyer wants to buy all the houses from \`start_i\` to \`end_i\` (inclusive) for a price of \`gold_i\` gold.

As a salesman, your goal is to **maximize** your earnings by selling houses to buyers. You may **not** sell the same house to two different buyers.

Return the maximum gold you can earn.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`1 <= offers.length <= 10^5`',
    '`0 <= start_i <= end_i <= n - 1`',
    '`1 <= gold_i <= 10^4`',
  ],
  examples: [
    {
      input: 'n = 5, offers = [[0,0,1],[0,2,2],[1,3,2]]',
      output: '3',
      explanation: 'Take offer [0,0,1] (gold=1) and offer [1,3,2] (gold=2). Total = 3. Alternatively just offer [0,2,2] = 2.',
    },
    {
      input: 'n = 5, offers = [[0,4,1],[0,2,5],[2,4,5]]',
      output: '5',
      explanation: 'Best is to take one of the middle offers (gold=5). Combining [0,2] and [2,4] is not possible (house 2 overlaps).',
    },
    {
      input: 'n = 3, offers = [[0,0,2],[1,1,3],[2,2,2]]',
      output: '7',
      explanation: 'All three offers are non-overlapping. Take all three: 2+3+2 = 7.',
    },
  ],
  functionName: 'maximizeTheProfit',
  params: ['n', 'offers'],
  starterCode: {
    javascript: `function maximizeTheProfit(n, offers) {
  const byEnd = new Map();
  for (const [s, e, g] of offers) {
    if (!byEnd.has(e)) byEnd.set(e, []);
    byEnd.get(e).push([s, g]);
  }
  const dp = new Array(n + 1).fill(0);
  for (let e = 0; e < n; e++) {
    dp[e + 1] = dp[e];
    if (byEnd.has(e)) {
      for (const [s, g] of byEnd.get(e)) dp[e + 1] = Math.max(dp[e + 1], dp[s] + g);
    }
  }
  return dp[n];
}`,
    typescript: `function maximizeTheProfit(n: number, offers: number[][]): number {
  const byEnd = new Map<number, [number, number][]>();
  for (const offer of offers) {
    const [s, e, g] = [offer[0]!, offer[1]!, offer[2]!];
    if (!byEnd.has(e)) byEnd.set(e, []);
    byEnd.get(e)!.push([s, g]);
  }
  const dp = new Array<number>(n + 1).fill(0);
  for (let e = 0; e < n; e++) {
    dp[e + 1] = dp[e]!;
    for (const [s, g] of (byEnd.get(e) ?? [])) dp[e + 1] = Math.max(dp[e + 1]!, dp[s]! + g);
  }
  return dp[n]!;
}`,
    python: `def maximizeTheProfit(n: int, offers: list[list[int]]) -> int:
    from collections import defaultdict
    by_end = defaultdict(list)
    for s, e, g in offers: by_end[e].append((s, g))
    dp = [0] * (n + 1)
    for e in range(n):
        dp[e + 1] = dp[e]
        for s, g in by_end[e]: dp[e + 1] = max(dp[e + 1], dp[s] + g)
    return dp[n]`,
  },
  hints: [
    'This is a weighted interval scheduling / DP problem. Sort offers by end index. Define dp[i] = max gold attainable using only houses 0..i-1.',
    'For each house position e from 0 to n-1: set dp[e+1] = dp[e] (carry forward). Then for each offer ending at e: dp[e+1] = max(dp[e+1], dp[start] + gold).',
    'Group offers by their end index for efficient processing, or sort and use binary search to find the best non-overlapping predecessor.',
  ],
  visibleTests: [
    { args: [5, [[0, 0, 1], [0, 2, 2], [1, 3, 2]]], expected: 3 },
    { args: [5, [[0, 4, 1], [0, 2, 5], [2, 4, 5]]], expected: 5 },
    { args: [3, [[0, 0, 2], [1, 1, 3], [2, 2, 2]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [5, [[0, 0, 7]]], expected: 7 },
    { args: [3, [[0, 1, 3], [0, 2, 5], [1, 2, 3]]], expected: 5 },
    { args: [10, [[0, 4, 3], [5, 9, 5], [0, 9, 4]]], expected: 8 },
    { args: [1, [[0, 0, 5]]], expected: 5 },
    { args: [4, [[0, 1, 4], [2, 3, 4], [0, 3, 6]]], expected: 8 },
  ],
};
