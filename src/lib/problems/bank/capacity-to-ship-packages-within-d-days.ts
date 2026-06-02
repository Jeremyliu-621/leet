import type { Problem } from '../types';

export const problem: Problem = {
  id: 'capacity-to-ship-packages-within-d-days',
  title: 'Capacity to Ship Packages Within D Days',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `A conveyor belt has packages that must be shipped from one port to another within \`days\` days.

The \`i\`-th package on the conveyor belt has a weight of \`weights[i]\`. Each day, we load packages onto the ship in order from \`weights[0]\` to \`weights[n-1]\`. We may not split packages across days.

Return the **least weight capacity** of the ship that will result in all the packages being shipped within \`days\` days.`,
  constraints: [
    '1 <= days <= weights.length <= 5 * 10^4',
    '1 <= weights[i] <= 500',
  ],
  examples: [
    {
      input: 'weights = [1,2,3,4,5,6,7,8,9,10], days = 5',
      output: '15',
      explanation: 'With capacity 15: day 1=[1,2,3,4,5], day 2=[6,7], day 3=[8], day 4=[9], day 5=[10].',
    },
    {
      input: 'weights = [3,2,2,4,1,4], days = 3',
      output: '6',
      explanation: 'With capacity 6: day 1=[3,2], day 2=[2,4], day 3=[1,4].',
    },
    {
      input: 'weights = [1,2,3,1,1], days = 4',
      output: '3',
      explanation: 'With capacity 3: day 1=[1,2], day 2=[3], day 3=[1,1], day 4=[] — done in 3 days.',
    },
  ],
  hints: [
    'The answer lies between max(weights) (must fit any single package) and sum(weights) (all shipped in one day).',
    'Binary search on the capacity. For a given capacity, greedily simulate: load packages until the next would exceed capacity, then start a new day.',
    'If a given capacity needs ≤ days days, it is feasible; try smaller. Otherwise try larger.',
  ],
  functionName: 'shipWithinDays',
  params: ['weights', 'days'],
  starterCode: {
    javascript: `function shipWithinDays(weights, days) {
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    let needed = 1, cur = 0;
    for (const w of weights) {
      if (cur + w > mid) { needed++; cur = 0; }
      cur += w;
    }
    if (needed <= days) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    typescript: `function shipWithinDays(weights: number[], days: number): number {
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    let needed = 1, cur = 0;
    for (const w of weights) {
      if (cur + w > mid) { needed++; cur = 0; }
      cur += w;
    }
    if (needed <= days) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    python: `def shipWithinDays(weights: list[int], days: int) -> int:
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        needed, cur = 1, 0
        for w in weights:
            if cur + w > mid:
                needed += 1
                cur = 0
            cur += w
        if needed <= days:
            hi = mid
        else:
            lo = mid + 1
    return lo`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5], expected: 15 },
    { args: [[3, 2, 2, 4, 1, 4], 3], expected: 6 },
    { args: [[1, 2, 3, 1, 1], 4], expected: 3 },
    { args: [[10], 1], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 1, 1], 4], expected: 1 },
    { args: [[1, 1, 1, 1], 1], expected: 4 },
    { args: [[5, 5, 5, 5], 2], expected: 10 },
    { args: [[3, 2, 2, 4, 1, 4], 1], expected: 16 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 5 },
    { args: [[10, 10, 10], 3], expected: 10 },
    { args: [[1, 2, 3, 4, 5, 6], 6], expected: 6 },
    { args: [[2, 3, 5, 7, 11], 3], expected: 11 },
    { args: [[500, 500, 500, 500, 500], 5], expected: 500 },
  ],
};
