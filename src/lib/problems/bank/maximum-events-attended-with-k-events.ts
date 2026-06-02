import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-events-attended-with-k-events',
  title: 'Maximum Value With K Events',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'binary-search', 'dynamic-programming'],
  description: `You are given a list of events where \`events[i] = [startDay, endDay, value]\`. You may attend **at most \`k\` events** total, and you can only attend one event at a time (no two overlapping events). You may attend an event for any one of its days.

Return the **maximum sum of values** you can obtain by attending at most \`k\` events.

> **Tip:** Think about what information is needed to make an optimal choice at each event: how many events remain to attend, and what was the best total value achievable before this event started.`,
  constraints: [
    '1 <= k <= events.length',
    '1 <= events.length <= 10^3',
    '1 <= startDay <= endDay <= 10^9',
    '1 <= value <= 10^6',
  ],
  examples: [
    {
      input: 'events = [[1,2,4],[3,4,3],[2,3,1]], k = 2',
      output: '7',
      explanation: 'Attend event 1 (value=4, days 1-2) and event 2 (value=3, days 3-4). Total = 7.',
    },
    {
      input: 'events = [[1,2,4],[3,4,3],[2,3,10]], k = 2',
      output: '14',
      explanation: 'Best is events [1,2,4] and [2,3,10]. They overlap, so try [1,2,4] (attend day 1) + [2,3,10] (attend day 2). Wait — attend day 1 for event 1, then day 2 or 3 for event 3 = 4+10=14.',
    },
    {
      input: 'events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3',
      output: '9',
      explanation: 'Attend the three highest-value events: values 2+3+4=9.',
    },
  ],
  hints: [
    'Sort events by start day. Use dynamic programming: `dp[i][j]` = max value using at most `j` events among the first `i` events (sorted by start).',
    'For each event `i`, you can either skip it (`dp[i-1][j]`) or attend it. If you attend event `i`, you need the best `dp[p][j-1]` where `p` is the last event that ends before event `i` starts — use binary search to find `p`.',
    'Optimize space by noting dp only needs the previous event\'s row. Use a 2D dp array of size `(n+1) × (k+1)` and binary search on start times to find compatible previous events.',
  ],
  functionName: 'maxValue',
  params: ['events', 'k'],
  starterCode: {
    javascript: `function maxValue(events, k) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  const ends = events.map(e => e[1]);
  const dp = Array.from({length: k+1}, () => new Array(n+1).fill(0));
  for (let j = 1; j <= k; j++) {
    for (let i = 1; i <= n; i++) {
      let lo = 0, hi = i - 1;
      while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (ends[mid - 1] < events[i - 1][0]) lo = mid;
        else hi = mid - 1;
      }
      dp[j][i] = Math.max(dp[j][i-1], dp[j-1][lo] + events[i-1][2]);
    }
  }
  return dp[k][n];
}`,
    typescript: `function maxValue(events: number[][], k: number): number {
  events.sort((a, b) => a[0]! - b[0]!);
  const n = events.length;
  const ends = events.map(e => e[1]!);
  const dp: number[][] = Array.from({length: k+1}, () => new Array(n+1).fill(0));
  for (let j = 1; j <= k; j++) {
    for (let i = 1; i <= n; i++) {
      let lo = 0, hi = i - 1;
      while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (ends[mid-1]! < events[i-1]![0]!) lo = mid;
        else hi = mid - 1;
      }
      dp[j]![i] = Math.max(dp[j]![i-1]!, dp[j-1]![lo]! + events[i-1]![2]!);
    }
  }
  return dp[k]![n]!;
}`,
    python: `def maxValue(events, k):
    if hasattr(events, 'to_py'): events = events.to_py()
    events = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in events]
    import bisect
    events.sort()
    n = len(events)
    ends = [e[1] for e in events]
    dp = [[0]*(n+1) for _ in range(k+1)]
    for j in range(1, k+1):
        for i in range(1, n+1):
            lo = bisect.bisect_left(ends, events[i-1][0], 0, i-1)
            dp[j][i] = max(dp[j][i-1], dp[j-1][lo] + events[i-1][2])
    return dp[k][n]`,
  },
  visibleTests: [
    { args: [[[1,2,4],[3,4,3],[2,3,1]], 2], expected: 7 },
    { args: [[[1,2,4],[3,4,3],[2,3,10]], 2], expected: 14 },
    { args: [[[1,1,1],[2,2,2],[3,3,3],[4,4,4]], 3], expected: 9 },
  ],
  hiddenTests: [
    { args: [[[1,2,4],[3,4,3],[2,3,1]], 1], expected: 4 },
    { args: [[[1,3,5],[3,5,2],[6,8,4]], 2], expected: 9 },
    { args: [[[1,1,1]], 1], expected: 1 },
    { args: [[[1,2,1],[2,3,2],[3,4,3]], 2], expected: 5 },
    { args: [[[1,5,3],[1,5,1],[6,6,5]], 2], expected: 8 },
  ],
};
