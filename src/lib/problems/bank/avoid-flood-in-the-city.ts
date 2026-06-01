import type { Problem } from '../types';

export const problem: Problem = {
  id: 'avoid-flood-in-the-city',
  title: 'Avoid Flood in The City',
  difficulty: 'medium',
  tags: ['hash-map', 'binary-search', 'arrays'],
  description: `Your country has an infinite number of lakes. Initially all lakes are empty, but when it rains over the \`i\`-th lake, the \`i\`-th lake becomes full of water.

You are given an integer array \`rains\` where:
- \`rains[i] > 0\` means there will be heavy rain over the \`rains[i]\`-th lake.
- \`rains[i] == 0\` means there is no rain, and you can choose **one** full lake and drain it on that day.

A lake will overflow if full and it rains on it. Return an array \`ans\` where:
- \`ans[i] == -1\` if \`rains[i] > 0\`.
- \`ans[i]\` is the lake you chose to drain on day \`i\` if \`rains[i] == 0\`.

If it is impossible to avoid flooding, return an **empty array**.

**Note:** If multiple answers are possible, return any of them. If a dry day does not need to be used, you may drain any non-empty lake.`,
  constraints: [
    '1 <= rains.length <= 10^5',
    '0 <= rains[i] <= 10^9',
  ],
  examples: [
    {
      input: 'rains = [1,2,3,4]',
      output: '[-1,-1,-1,-1]',
      explanation: 'No dry days. Each lake fills once and is never refilled. No overflow possible.',
    },
    {
      input: 'rains = [1,2,0,1,2]',
      output: '[]',
      explanation: 'There is only one dry day (day 2). Lake 1 refills on day 3 and lake 2 refills on day 4. Both need draining before refill but only one dry day is available.',
    },
    {
      input: 'rains = [1,0,1]',
      output: '[-1,1,-1]',
      explanation: 'Lake 1 fills on day 0 and refills on day 2. The dry day on day 1 must drain lake 1.',
    },
  ],
  hints: [
    'Track which lake is currently full using a map from lake → day it was last filled.',
    'Keep a sorted list of available dry-day indices. When a lake is about to overflow, binary-search for the earliest dry day that comes AFTER the lake was last filled.',
    'If no such dry day exists, return []. Assign remaining unused dry days to any lake (e.g., lake 1).',
  ],
  functionName: 'avoidFlood',
  params: ['rains'],
  starterCode: {
    javascript: `function avoidFlood(rains) {
  const n = rains.length;
  const result = new Array(n).fill(1);
  const fullLake = new Map();
  const dryDays = [];
  for (let i = 0; i < n; i++) if (rains[i] === 0) dryDays.push(i);
  const usedDry = new Uint8Array(dryDays.length);
  for (let i = 0; i < n; i++) {
    if (rains[i] === 0) continue;
    result[i] = -1;
    const lake = rains[i];
    if (fullLake.has(lake)) {
      const lastFill = fullLake.get(lake);
      let lo = 0, hi = dryDays.length, found = dryDays.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (dryDays[mid] > lastFill) { found = mid; hi = mid; } else lo = mid + 1;
      }
      while (found < dryDays.length && usedDry[found]) found++;
      if (found >= dryDays.length) return [];
      result[dryDays[found]] = lake;
      usedDry[found] = 1;
    }
    fullLake.set(lake, i);
  }
  return result;
}`,
    typescript: `function avoidFlood(rains: number[]): number[] {
  const n = rains.length;
  const result = new Array<number>(n).fill(1);
  const fullLake = new Map<number, number>();
  const dryDays: number[] = [];
  for (let i = 0; i < n; i++) if (rains[i] === 0) dryDays.push(i);
  const usedDry = new Uint8Array(dryDays.length);
  for (let i = 0; i < n; i++) {
    if (rains[i] === 0) continue;
    result[i] = -1;
    const lake = rains[i]!;
    if (fullLake.has(lake)) {
      const lastFill = fullLake.get(lake)!;
      let lo = 0, hi = dryDays.length, found = dryDays.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (dryDays[mid]! > lastFill) { found = mid; hi = mid; } else lo = mid + 1;
      }
      while (found < dryDays.length && usedDry[found]) found++;
      if (found >= dryDays.length) return [];
      result[dryDays[found]!] = lake;
      usedDry[found] = 1;
    }
    fullLake.set(lake, i);
  }
  return result;
}`,
    python: `def avoidFlood(rains):
    rains = list(rains.to_py()) if hasattr(rains, 'to_py') else list(rains)
    import bisect
    n = len(rains)
    result = [1] * n
    full_lake = {}
    dry_days = [i for i, r in enumerate(rains) if r == 0]
    used = [False] * len(dry_days)
    for i, lake in enumerate(rains):
        if lake == 0:
            continue
        result[i] = -1
        if lake in full_lake:
            last_fill = full_lake[lake]
            pos = bisect.bisect_right(dry_days, last_fill)
            while pos < len(dry_days) and used[pos]:
                pos += 1
            if pos >= len(dry_days):
                return []
            result[dry_days[pos]] = lake
            used[pos] = True
        full_lake[lake] = i
    return result`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [-1, -1, -1, -1] },
    { args: [[1, 2, 0, 1, 2]], expected: [] },
    { args: [[1, 0, 1]], expected: [-1, 1, -1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 0, 2]], expected: [-1, -1, 2, -1] },
    { args: [[1, 2, 0, 1]], expected: [-1, -1, 1, -1] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[1, 0, 2, 0, 1, 2]], expected: [-1, 1, -1, 2, -1, -1] },
    { args: [[1, 2, 0, 2, 0, 1]], expected: [-1, -1, 2, -1, 1, -1] },
    { args: [[1, 2, 3, 0, 1]], expected: [-1, -1, -1, 1, -1] },
    { args: [[2, 3, 0, 3, 0, 2, 1]], expected: [-1, -1, 3, -1, 2, -1, -1] },
    { args: [[1, 2]], expected: [-1, -1] },
  ],
};
