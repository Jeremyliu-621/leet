import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-of-ropes',
  title: 'Minimum Cost of Ropes',
  difficulty: 'medium',
  tags: ['heap', 'simulation'],
  description: `There are several ropes of given lengths. You need to connect all the ropes into one. The cost of connecting two ropes is equal to the sum of their lengths. You want to **minimize the total cost** of all connections.

Return the **minimum cost** to connect all the ropes into one rope.

If there is only one rope, return 0.`,
  constraints: [
    '1 <= ropes.length <= 10^5',
    '1 <= ropes[i] <= 10^4',
  ],
  examples: [
    {
      input: 'ropes = [8, 4, 6, 12]',
      output: '58',
      explanation: 'Connect 4+6=10 (cost 10). Now [8,10,12]. Connect 8+10=18 (cost 18). Now [18,12]. Connect 18+12=30 (cost 30). Total = 10+18+30 = 58. This is optimal.',
    },
    {
      input: 'ropes = [20, 4, 8, 2]',
      output: '54',
      explanation: 'Connect 2+4=6 (cost 6). Connect 6+8=14 (cost 14). Connect 14+20=34 (cost 34). Total = 6+14+34 = 54.',
    },
  ],
  hints: [
    'This is equivalent to building a Huffman tree: always merge the two smallest ropes first.',
    'Use a min-heap. Extract the two smallest ropes, merge them (add cost), and push the merged rope back.',
    'Repeat until one rope remains. The total cost is the sum of all merge costs.',
  ],
  functionName: 'minCostRopes',
  params: ['ropes'],
  starterCode: {
    javascript: `function minCostRopes(ropes) {
  if (ropes.length <= 1) return 0;
  // Min-heap simulation via sorted array
  ropes.sort((a, b) => a - b);
  let cost = 0;
  while (ropes.length > 1) {
    // Take the two smallest
    const first = ropes.shift();
    const second = ropes.shift();
    const merged = first + second;
    cost += merged;
    // Insert merged back in sorted position
    let lo = 0, hi = ropes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (ropes[mid] < merged) lo = mid + 1; else hi = mid;
    }
    ropes.splice(lo, 0, merged);
  }
  return cost;
}`,
    typescript: `function minCostRopes(ropes: number[]): number {
  if (ropes.length <= 1) return 0;
  ropes.sort((a, b) => a - b);
  let cost = 0;
  while (ropes.length > 1) {
    const first = ropes.shift()!;
    const second = ropes.shift()!;
    const merged = first + second;
    cost += merged;
    let lo = 0, hi = ropes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (ropes[mid]! < merged) lo = mid + 1; else hi = mid;
    }
    ropes.splice(lo, 0, merged);
  }
  return cost;
}`,
    python: `def minCostRopes(ropes: list[int]) -> int:
    import heapq
    if len(ropes) <= 1:
        return 0
    heapq.heapify(ropes)
    cost = 0
    while len(ropes) > 1:
        first = heapq.heappop(ropes)
        second = heapq.heappop(ropes)
        merged = first + second
        cost += merged
        heapq.heappush(ropes, merged)
    return cost`,
  },
  visibleTests: [
    { args: [[8, 4, 6, 12]], expected: 58 },
    { args: [[20, 4, 8, 2]], expected: 54 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: 8 },
    { args: [[5, 5]], expected: 10 },
    { args: [[1, 2, 3, 4, 5]], expected: 33 },
    { args: [[10, 20, 30]], expected: 90 },
    { args: [[3, 3, 3, 3, 3]], expected: 36 },
    { args: [[1, 100]], expected: 101 },
    { args: [[2, 3, 4, 6]], expected: 29 },
  ],
};
