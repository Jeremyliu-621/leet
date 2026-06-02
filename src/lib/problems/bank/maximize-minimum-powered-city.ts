import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-minimum-powered-city',
  title: 'Maximize the Minimum Powered City',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`stations\` of length \`n\`, where \`stations[i]\` represents the initial number of power stations at city \`i\`.

Each power station at city \`i\` provides power to every city in the range \`[max(0, i - r), min(n - 1, i + r)]\` (inclusive), where \`r\` is the **radius**.

You are allowed to add at most \`k\` additional power stations (each with the same radius \`r\`, at any city you choose).

Return the **maximum possible minimum power** any city can have after optimally placing the additional stations.`,
  constraints: [
    '1 <= n <= 300',
    '0 <= stations[i] <= 10^4',
    '0 <= r <= 100',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'stations = [1,2,4,5,0], r = 1, k = 2',
      output: '5',
      explanation: 'Adding 2 stations at city 0 (each covers [0,1]) raises city 0\'s power from 3 to 5. Final powers: [5,9,11,9,5]. Minimum is 5.',
    },
    {
      input: 'stations = [4,4,4,4], r = 1, k = 3',
      output: '9',
      explanation: 'Initial powers: [8,12,12,8]. Adding 1 station at city 0 and 1 at city 3 raises each endpoint by 1 (k used = 2; min = 9). One station remains but cannot raise the minimum further.',
    },
  ],
  hints: [
    'Binary search on the answer: check if it\'s possible to achieve a minimum power of m using at most k additional stations.',
    'For feasibility, greedily scan cities left to right. When a city is underpowered, add stations placed r positions to its right (maximizes rightward coverage while still covering the current city).',
    'Track the cumulative effect of added stations with a difference array so each station addition takes O(1) time.',
  ],
  functionName: 'maximizeMinimumPower',
  params: ['stations', 'r', 'k'],
  starterCode: {
    javascript: `function maximizeMinimumPower(stations, r, k) {
  const n = stations.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stations[i];
  const power = Array.from({length: n}, (_, i) =>
    prefix[Math.min(n-1,i+r)+1] - prefix[Math.max(0,i-r)]);
  function canAchieve(minPow) {
    const diff = new Array(n + 1).fill(0);
    let extra = 0, added = 0;
    for (let i = 0; i < n; i++) {
      extra += diff[i];
      const cur = power[i] + extra;
      if (cur < minPow) {
        const need = minPow - cur;
        if (added + need > k) return false;
        added += need; extra += need;
        diff[Math.min(i + r, n - 1) + 1] -= need;
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
    typescript: `function maximizeMinimumPower(stations: number[], r: number, k: number): number {
  const n = stations.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + stations[i]!;
  const power = Array.from({length: n}, (_, i) =>
    prefix[Math.min(n-1,i+r)+1]! - prefix[Math.max(0,i-r)]!);
  function canAchieve(minPow: number): boolean {
    const diff = new Array<number>(n + 1).fill(0);
    let extra = 0, added = 0;
    for (let i = 0; i < n; i++) {
      extra += diff[i]!;
      const cur = power[i]! + extra;
      if (cur < minPow) {
        const need = minPow - cur;
        if (added + need > k) return false;
        added += need; extra += need;
        diff[Math.min(i + r, n - 1) + 1]! -= need;
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
    python: `def maximizeMinimumPower(stations, r, k):
    n = len(stations)
    prefix = [0] * (n + 1)
    for i in range(n): prefix[i+1] = prefix[i] + stations[i]
    power = [prefix[min(n-1,i+r)+1] - prefix[max(0,i-r)] for i in range(n)]
    def can_achieve(min_pow):
        diff = [0] * (n + 1); extra = added = 0
        for i in range(n):
            extra += diff[i]; cur = power[i] + extra
            if cur < min_pow:
                need = min_pow - cur
                if added + need > k: return False
                added += need; extra += need
                diff[min(i + r, n - 1) + 1] -= need
        return True
    lo, hi = 0, sum(stations) + k
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_achieve(mid): lo = mid
        else: hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 5, 0], 1, 2], expected: 5 },
    { args: [[4, 4, 4, 4], 1, 3], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1], 0, 0], expected: 1 },
    { args: [[1, 1, 1], 0, 3], expected: 2 },
    { args: [[1, 1, 1], 1, 1], expected: 3 },
    { args: [[3, 3, 3], 0, 0], expected: 3 },
    { args: [[1, 0, 1], 1, 1], expected: 2 },
    { args: [[5, 0, 5], 1, 1], expected: 6 },
    { args: [[2, 2, 2, 2, 2], 2, 0], expected: 6 },
    { args: [[0, 0, 0], 1, 6], expected: 6 },
  ],
};
