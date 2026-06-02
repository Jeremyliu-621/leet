import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stock-price-fluctuation',
  title: 'Stock Price Fluctuation',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You are given a series of stock price updates as \`[[timestamp, price], ...]\`. Updates may arrive out of order and may **correct** a previously recorded price. After all updates, run a list of queries where each query is one of:

- \`"current"\` — return the price at the **latest** timestamp
- \`"maximum"\` — return the **maximum** price across all timestamps
- \`"minimum"\` — return the **minimum** price across all timestamps

Return an array of results for each query (in order).

**Args:** \`updates: number[][], queries: string[]\`

**Example 1:**

Input: \`updates = [[1,10],[2,5],[1,3],[3,15]], queries = ["current","maximum","minimum"]\`

Output: \`[15,15,3]\`

Explanation: After all updates: timestamp 1→3 (corrected from 10), timestamp 2→5, timestamp 3→15. Current (latest timestamp 3) = 15. Maximum = 15. Minimum = 3.

**Example 2:**

Input: \`updates = [[1,10],[2,20],[1,5]], queries = ["current","minimum","maximum"]\`

Output: \`[20,5,20]\`

Explanation: After updates: timestamp 1→5 (corrected), timestamp 2→20. Current = 20. Minimum = 5. Maximum = 20.`,
  constraints: [
    '1 ≤ updates.length ≤ 10^4',
    '1 ≤ timestamp ≤ 10^9',
    '1 ≤ price ≤ 10^5',
    '1 ≤ queries.length ≤ 10^4',
    'Each query is "current", "maximum", or "minimum"',
  ],
  examples: [
    {
      input: 'updates = [[1,10],[2,5],[1,3],[3,15]], queries = ["current","maximum","minimum"]',
      output: '[15,15,3]',
      explanation: 'Timestamp 1 is corrected from 10 to 3. Latest timestamp is 3 with price 15. Max=15, Min=3.',
    },
    {
      input: 'updates = [[1,10],[2,20],[1,5]], queries = ["current","minimum","maximum"]',
      output: '[20,5,20]',
      explanation: 'Timestamp 1 corrected to 5. Latest is timestamp 2 with price 20. Min=5, Max=20.',
    },
  ],
  hints: [
    'Use a Map to store the latest price for each timestamp. Track the max timestamp seen to answer "current".',
    'For maximum and minimum, iterate over all Map values — the number of distinct timestamps is at most 10^4.',
    'Build the price map from updates (later update for same timestamp overwrites earlier). Then scan for max/min over values.',
  ],
  functionName: 'stockPriceFluctuation',
  params: ['updates', 'queries'],
  starterCode: {
    javascript: `function stockPriceFluctuation(updates, queries) {
  const prices = new Map();
  let maxTs = 0;
  for (const [ts, price] of updates) { prices.set(ts, price); if (ts > maxTs) maxTs = ts; }
  const vals = [...prices.values()];
  return queries.map(q => q === 'current' ? prices.get(maxTs) : q === 'maximum' ? Math.max(...vals) : Math.min(...vals));
}`,
    typescript: `function stockPriceFluctuation(updates: number[][], queries: string[]): number[] {
  const prices = new Map<number, number>();
  let maxTs = 0;
  for (const row of updates) { const ts = row[0]!, price = row[1]!; prices.set(ts, price); if (ts > maxTs) maxTs = ts; }
  const vals = [...prices.values()];
  return queries.map(q => q === 'current' ? prices.get(maxTs)! : q === 'maximum' ? Math.max(...vals) : Math.min(...vals));
}`,
    python: `def stockPriceFluctuation(updates: list, queries: list) -> list:
    if hasattr(updates, 'to_py'): updates = updates.to_py()
    updates = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in updates]
    if hasattr(queries, 'to_py'): queries = queries.to_py()
    queries = [str(q) for q in queries]
    prices = {}; max_ts = 0
    for ts, price in updates:
        prices[ts] = price
        if ts > max_ts: max_ts = ts
    vals = list(prices.values())
    res = []
    for q in queries:
        if q == 'current': res.append(prices[max_ts])
        elif q == 'maximum': res.append(max(vals))
        else: res.append(min(vals))
    return res`,
  },
  visibleTests: [
    {
      args: [[[1, 10], [2, 5], [1, 3], [3, 15]], ['current', 'maximum', 'minimum']],
      expected: [15, 15, 3],
    },
    {
      args: [[[1, 10], [2, 20], [1, 5]], ['current', 'minimum', 'maximum']],
      expected: [20, 5, 20],
    },
  ],
  hiddenTests: [
    {
      args: [[[5, 100]], ['current', 'maximum', 'minimum']],
      expected: [100, 100, 100],
    },
    {
      args: [[[1, 1], [2, 2], [3, 3]], ['minimum', 'maximum', 'current']],
      expected: [1, 3, 3],
    },
    {
      args: [[[3, 10], [1, 5], [2, 7], [3, 2]], ['current', 'maximum', 'minimum']],
      expected: [2, 7, 2],
    },
    {
      args: [[[1, 50], [2, 30], [3, 70], [2, 90], [1, 10]], ['maximum', 'minimum', 'current']],
      expected: [90, 10, 70],
    },
  ],
};
