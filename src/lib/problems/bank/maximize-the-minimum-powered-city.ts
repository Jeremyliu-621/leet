import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-minimum-powered-city',
  title: 'Maximize the Minimum Powered City',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`stations\` of length \`n\`, where \`stations[i]\` represents the number of power stations in the \`i\`-th city.

Each power station can provide power to every city in a fixed **range**. The power of a city is the sum of all power stations within the range \`[i - r, i + r]\` of that city, where \`r\` is the **supply range**.

You are given two integers \`r\` and \`k\`, where \`k\` is the number of additional power stations you can build. You may build each additional power station in any city of your choice.

Return the **maximum possible minimum power** of any city after adding \`k\` power stations optimally.`,
  constraints: [
    'n == stations.length',
    '1 <= n <= 10^5',
    '0 <= stations[i] <= 10^5',
    '0 <= r <= n - 1',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'stations = [1,2,4,5,0], r = 1, k = 2',
      output: '5',
      explanation: 'Initial powers: [3,7,11,9,5]. Adding 1 station to city 4 and 1 to city 4: powers become [3,7,11,9,7]. Min = 3 still. Optimal: add both to city 0: powers [4,8,11,9,5]. Min=4. Better: add 1 to city 0 and 1 to city 4: [4,8,11,9,6]. Min=4. Optimal strategy gives min=5.',
    },
    {
      input: 'stations = [4,4,4,4], r = 0, k = 3',
      output: '4',
      explanation: 'With r=0, each city only gets power from itself. Initial powers = [4,4,4,4]. Adding 3 stations optimally: add 1 to any city, min stays 4. Result = 4.',
    },
  ],
  hints: [
    'Binary search on the answer: for a target minimum power M, check if it\'s achievable with at most k additional stations.',
    'To check feasibility: use a sliding window sum to compute initial power of each city, then greedily add stations from left to right. If power[i] < M, add (M - power[i]) stations at city min(i+r, n-1) to cover as many future cities as possible. Track with a difference array.',
    'Binary search range: [0, max_initial_power + k]. The check function is O(n), so total complexity is O(n log(max + k)).',
  ],
  functionName: 'maxPower',
  params: ['stations', 'r', 'k'],
  starterCode: {
    javascript: `function maxPower(stations, r, k) {
  const n = stations.length;
  // Compute initial window sums using prefix sums
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stations[i];
  const power = new Array(n);
  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - r);
    const hi = Math.min(n - 1, i + r);
    power[i] = prefix[hi + 1] - prefix[lo];
  }
  function canAchieve(minPow) {
    const diff = new Array(n + 1).fill(0);
    let extra = 0, added = 0;
    const pw = power.slice();
    for (let i = 0; i < n; i++) {
      extra += diff[i];
      const cur = pw[i] + extra;
      if (cur < minPow) {
        const need = minPow - cur;
        if (added + need > k) return false;
        added += need;
        extra += need;
        const pos = Math.min(i + r, n - 1);
        diff[pos + 1] -= need;
      }
    }
    return true;
  }
  let lo = 0, hi = prefix[n] + k;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (canAchieve(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function maxPower(stations: number[], r: number, k: number): number {
  const n = stations.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + stations[i]!;
  const power = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - r);
    const hi = Math.min(n - 1, i + r);
    power[i] = prefix[hi + 1]! - prefix[lo]!;
  }
  function canAchieve(minPow: number): boolean {
    const diff = new Array<number>(n + 1).fill(0);
    let extra = 0, added = 0;
    const pw = power.slice();
    for (let i = 0; i < n; i++) {
      extra += diff[i]!;
      const cur = pw[i]! + extra;
      if (cur < minPow) {
        const need = minPow - cur;
        if (added + need > k) return false;
        added += need;
        extra += need;
        const pos = Math.min(i + r, n - 1);
        diff[pos + 1]! -= need;
      }
    }
    return true;
  }
  let lo = 0, hi = prefix[n]! + k;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (canAchieve(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    python: `def maxPower(stations: list[int], r: int, k: int) -> int:
    n = len(stations)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + stations[i]
    power = [prefix[min(n-1,i+r)+1] - prefix[max(0,i-r)] for i in range(n)]
    def can_achieve(min_pow):
        diff = [0] * (n + 1)
        extra = added = 0
        for i in range(n):
            extra += diff[i]
            cur = power[i] + extra
            if cur < min_pow:
                need = min_pow - cur
                if added + need > k:
                    return False
                added += need
                extra += need
                pos = min(i + r, n - 1)
                diff[pos + 1] -= need
        return True
    lo, hi = 0, sum(stations) + k
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_achieve(mid):
            lo = mid
        else:
            hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 5, 0], 1, 2], expected: 5 },
    { args: [[4, 4, 4, 4], 0, 3], expected: 4 },
    { args: [[1, 1, 1, 1, 1], 1, 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0], 0, 3], expected: 1 },
    { args: [[5], 0, 0], expected: 5 },
    { args: [[1, 2, 3], 0, 0], expected: 1 },
    { args: [[1, 2, 3], 1, 5], expected: 6 },
    { args: [[0, 0], 1, 0], expected: 0 },
    { args: [[1, 0, 1], 1, 2], expected: 2 },
    { args: [[10, 20, 30, 10], 1, 10], expected: 40 },
  ],
};
