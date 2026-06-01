import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-empty-slots',
  title: 'K Empty Slots',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree', 'sliding-window'],
  description: `You have \`n\` bulbs in a row numbered from \`1\` to \`n\`. You are given an integer array \`bulbs\` of length \`n\` where \`bulbs[i]\` is the position of the bulb that gets turned on on day \`i + 1\` (1-indexed). \`bulbs\` is a permutation of \`[1, n]\`.

Return the **minimum day** (1-indexed) when there are **two turned-on bulbs** with **exactly \`k\` turned-off bulbs** between them (the two positions differ by exactly \`k + 1\` with no on-bulb between them).

If no such day exists, return \`-1\`.`,
  constraints: [
    'n == bulbs.length',
    '1 <= n <= 2 * 10^4',
    '1 <= bulbs[i] <= n',
    'bulbs is a permutation of [1, n]',
    '0 <= k <= n - 2',
  ],
  examples: [
    {
      input: 'bulbs = [1,3,2], k = 1',
      output: '2',
      explanation: 'Day 1: bulb at position 1 is on. Day 2: bulb at position 3 is on. Positions 1 and 3 differ by 2 = k+1, and position 2 (between them) is still off. Return 2.',
    },
    {
      input: 'bulbs = [1,2,3], k = 1',
      output: '-1',
      explanation: 'After all 3 days, on-positions are {1,2,3}. No pair 2 apart with middle empty ever exists. Return -1.',
    },
    {
      input: 'bulbs = [6,5,8,9,7,1,10,2,3,4], k = 2',
      output: '8',
      explanation: 'On day 8, position 2 turns on. On-set = {1,2,5,6,7,8,9,10}. Positions 2 and 5 differ by 3 = k+1 = 3, and positions 3,4 (between them) are still off. Return 8.',
    },
  ],
  hints: [
    'Maintain a sorted collection of currently-on positions. When position p turns on at day d, check its immediate left neighbor (prev) and right neighbor (next) in the sorted set.',
    'If p - prev == k + 1, there are exactly k positions between prev and p, and since prev is the immediate predecessor in the sorted set, none of those k intermediate positions are on. Return the current day.',
    'Use a sorted array with binary search insertion (O(n²) worst case) or a Fenwick tree to achieve O(n log n). The ordered-set "immediate neighbor" check is the core insight.',
  ],
  functionName: 'kEmptySlots',
  params: ['bulbs', 'k'],
  starterCode: {
    javascript: `function kEmptySlots(bulbs, k) {
  const n = bulbs.length;
  const on = []; // sorted list of on-positions

  const insertSorted = (pos) => {
    let lo = 0, hi = on.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (on[mid] < pos) lo = mid + 1;
      else hi = mid;
    }
    on.splice(lo, 0, pos);
    return lo;
  };

  for (let day = 0; day < n; day++) {
    const pos = bulbs[day];
    const idx = insertSorted(pos);
    // check left neighbor
    // check right neighbor
  }
  return -1;
}`,
    typescript: `function kEmptySlots(bulbs: number[], k: number): number {
  const n = bulbs.length;
  const on: number[] = [];

  const insertSorted = (pos: number): number => {
    let lo = 0, hi = on.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (on[mid] < pos) lo = mid + 1;
      else hi = mid;
    }
    on.splice(lo, 0, pos);
    return lo;
  };

  for (let day = 0; day < n; day++) {
    const pos = bulbs[day];
    const idx = insertSorted(pos);
    // check left neighbor
    // check right neighbor
  }
  return -1;
}`,
    python: `def kEmptySlots(bulbs, k):
    import bisect
    on = []  # sorted on-positions

    for day, pos in enumerate(bulbs):
        idx = bisect.bisect_left(on, pos)
        on.insert(idx, pos)
        if idx > 0 and pos - on[idx - 1] == k + 1:
            return day + 1
        if idx < len(on) - 1 and on[idx + 1] - pos == k + 1:
            return day + 1
    return -1`,
  },
  visibleTests: [
    { args: [[1, 3, 2], 1], expected: 2 },
    { args: [[1, 2, 3], 1], expected: -1 },
    { args: [[6, 5, 8, 9, 7, 1, 10, 2, 3, 4], 2], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: -1 },
    { args: [[2, 1], 0], expected: 2 },
    { args: [[1, 3, 2, 4], 1], expected: 2 },
    { args: [[1, 4, 2, 5, 3, 6], 2], expected: 2 },
    { args: [[2, 4, 1, 3], 1], expected: 2 },
  ],
};
