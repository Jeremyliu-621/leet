import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-events-that-can-be-attended-ii',
  title: 'Maximum Number of Events That Can Be Attended II',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'binary-search'],
  description: `You are given an array of \`events\` where \`events[i] = [startDay_i, endDay_i, value_i]\`. The \`i\`th event starts at \`startDay_i\`, ends at \`endDay_i\`, and has a value worth \`value_i\` if attended.

You are also given an integer \`k\` which represents the maximum number of events you can attend.

You can only attend one event at a time. If you choose to attend an event, you must attend the **entire** event (from \`startDay_i\` to \`endDay_i\` inclusive). Events can be attended if they **do not overlap** (note that event \`[1, 2, 3]\` and event \`[2, 4, 5]\` **do** overlap).

Return the **maximum sum** of values you can receive by attending events.`,
  constraints: [
    '`1 <= k <= events.length`',
    '`1 <= k * events.length <= 10^6`',
    '`1 <= startDay_i <= endDay_i <= 10^9`',
    '`1 <= value_i <= 10^6`',
  ],
  examples: [
    {
      input: 'events = [[1,2,4],[3,4,3],[2,3,1]], k = 2',
      output: '7',
      explanation: 'Attend event 0 ([1,2], value 4) and event 1 ([3,4], value 3) for total value 7.',
    },
    {
      input: 'events = [[1,2,4],[3,4,3],[2,3,10]], k = 2',
      output: '10',
      explanation: 'Attend event 2 ([2,3], value 10) only; no non-overlapping event adds value. Answer = 10.',
    },
    {
      input: 'events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3',
      output: '9',
      explanation: 'Attend the last 3 events for total value 2+3+4=9.',
    },
  ],
  hints: [
    'Sort events by end day. Let dp[i][j] = maximum value using at most j events from the first i events.',
    'For each event i, binary search for the last event whose end day is strictly less than events[i].start day — call this index p.',
    '```js\nfunction maxValue(events, k) {\n  events.sort((a, b) => a[1] - b[1]);\n  const n = events.length;\n  const dp = Array.from({length: n+1}, () => new Array(k+1).fill(0));\n  for (let i = 1; i <= n; i++) {\n    const [start, , val] = events[i-1];\n    let lo = 0, hi = i-1;\n    while (lo < hi) {\n      const mid = (lo+hi+1)>>1;\n      if (events[mid-1][1] < start) lo = mid;\n      else hi = mid-1;\n    }\n    for (let j = 1; j <= k; j++)\n      dp[i][j] = Math.max(dp[i-1][j], dp[lo][j-1] + val);\n  }\n  return dp[n][k];\n}\n```',
  ],
  functionName: 'maxValue',
  params: ['events', 'k'],
  starterCode: {
    javascript: `function maxValue(events, k) {
  events.sort((a, b) => a[1] - b[1]);
  const n = events.length;
  const dp = Array.from({length: n+1}, () => new Array(k+1).fill(0));
  for (let i = 1; i <= n; i++) {
    const [start, , val] = events[i-1];
    let lo = 0, hi = i - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (events[mid-1][1] < start) lo = mid; else hi = mid - 1;
    }
    for (let j = 1; j <= k; j++)
      dp[i][j] = Math.max(dp[i-1][j], dp[lo][j-1] + val);
  }
  return dp[n][k];
}`,
    typescript: `function maxValue(events: number[][], k: number): number {
  events.sort((a, b) => a[1]! - b[1]!);
  const n = events.length;
  const dp: number[][] = Array.from({length: n+1}, () => new Array(k+1).fill(0));
  for (let i = 1; i <= n; i++) {
    const [start, , val] = events[i-1]!;
    let lo = 0, hi = i - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (events[mid-1]![1]! < start!) lo = mid; else hi = mid - 1;
    }
    for (let j = 1; j <= k; j++)
      dp[i]![j] = Math.max(dp[i-1]![j]!, dp[lo]![j-1]! + val!);
  }
  return dp[n]![k]!;
}`,
    python: `def maxValue(events, k):
    if hasattr(events, 'to_py'): events = events.to_py()
    events = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in events]
    import bisect
    events.sort(key=lambda e: e[1])
    n = len(events)
    ends = [e[1] for e in events]
    dp = [[0]*(k+1) for _ in range(n+1)]
    for i in range(1, n+1):
        start, _, val = events[i-1]
        lo = bisect.bisect_left(ends, start, 0, i-1)
        for j in range(1, k+1):
            dp[i][j] = max(dp[i-1][j], dp[lo][j-1] + val)
    return dp[n][k]`,
  },
  visibleTests: [
    { args: [[[1, 2, 4], [3, 4, 3], [2, 3, 1]], 2], expected: 7 },
    { args: [[[1, 2, 4], [3, 4, 3], [2, 3, 10]], 2], expected: 10 },
    { args: [[[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]], 3], expected: 9 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 4], [3, 4, 3], [2, 3, 1]], 1], expected: 4 },
    { args: [[[1, 1, 1], [1, 2, 3], [2, 3, 5], [2, 5, 8]], 2], expected: 9 },
    { args: [[[1, 5, 3], [1, 5, 1], [6, 6, 5]], 2], expected: 8 },
    { args: [[[1, 2, 1], [2, 3, 2], [3, 4, 3], [4, 5, 4]], 4], expected: 6 },
    { args: [[[1, 3, 10], [4, 6, 20], [1, 6, 25]], 2], expected: 30 },
  ],
};
