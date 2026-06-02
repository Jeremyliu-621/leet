import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-connect-sticks',
  title: 'Minimum Cost to Connect Sticks',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You have some number of sticks with positive integer lengths. These lengths are given as an array \`sticks\`, where \`sticks[i]\` is the length of the \`i\`th stick.

You can connect any two sticks of lengths \`x\` and \`y\` into one stick by paying a cost of \`x + y\`. You must connect all the sticks until there is only one stick remaining.

Return the **minimum cost** of connecting all the given sticks into one stick in this way.`,
  constraints: [
    '1 <= sticks.length <= 10^4',
    '1 <= sticks[i] <= 10^4',
  ],
  examples: [
    {
      input: 'sticks = [2,4,3]',
      output: '14',
      explanation: 'Connect sticks of lengths 2 and 3 for cost 5. Now sticks = [5,4]. Connect for cost 9. Total = 14.',
    },
    {
      input: 'sticks = [1,8,3,5]',
      output: '30',
      explanation: 'Connect 1+3=4 (cost 4), then 4+5=9 (cost 9), then 9+8=17 (cost 17). Total = 30.',
    },
  ],
  hints: [
    'Always combine the two smallest sticks first — a greedy/Huffman coding approach.',
    'Use a min-heap to efficiently retrieve the two smallest sticks at each step.',
    'Each stick that gets combined contributes its length to the total cost once for every time it is part of a combined stick.',
  ],
  functionName: 'connectSticks',
  params: ['sticks'],
  starterCode: {
    javascript: `function connectSticks(sticks) {
  if (sticks.length <= 1) return 0;
  sticks = [...sticks].sort((a, b) => a - b);
  let total = 0;
  while (sticks.length > 1) {
    const merged = sticks.shift() + sticks.shift();
    total += merged;
    let lo = 0, hi = sticks.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sticks[mid] <= merged) lo = mid + 1; else hi = mid; }
    sticks.splice(lo, 0, merged);
  }
  return total;
}`,
    typescript: `function connectSticks(sticks: number[]): number {
  if (sticks.length <= 1) return 0;
  sticks = [...sticks].sort((a, b) => a - b);
  let total = 0;
  while (sticks.length > 1) {
    const merged = sticks.shift()! + sticks.shift()!;
    total += merged;
    let lo = 0, hi = sticks.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sticks[mid]! <= merged) lo = mid + 1; else hi = mid; }
    sticks.splice(lo, 0, merged);
  }
  return total;
}`,
    python: `def connectSticks(sticks):
    import heapq
    if hasattr(sticks, 'to_py'): sticks = list(sticks.to_py())
    heapq.heapify(sticks)
    total = 0
    while len(sticks) > 1:
        merged = heapq.heappop(sticks) + heapq.heappop(sticks)
        total += merged; heapq.heappush(sticks, merged)
    return total`,
  },
  visibleTests: [
    { args: [[2, 4, 3]], expected: 14 },
    { args: [[1, 8, 3, 5]], expected: 30 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 1, 1]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 33 },
    { args: [[3, 3, 3, 3]], expected: 24 },
    { args: [[1, 2, 3, 4, 5]], expected: 33 },
  ],
};
