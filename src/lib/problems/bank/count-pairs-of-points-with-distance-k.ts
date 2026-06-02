import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-of-points-with-distance-k',
  title: 'Count Pairs of Points With Distance k',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'bit-manipulation'],
  description: `You are given a **2D** integer array \`coordinates\` and an integer \`k\`, where \`coordinates[i] = [xi, yi]\` are the coordinates of the \`i\`th point in a 2D plane.

We define the **distance** between two points \`(x1, y1)\` and \`(x2, y2)\` as \`(x1 XOR x2) + (y1 XOR y2)\` where \`XOR\` is the bitwise \`XOR\` operation.

Return the number of pairs \`(i, j)\` such that \`i < j\` and the distance between points \`i\` and \`j\` is equal to \`k\`.`,
  constraints: [
    '2 <= coordinates.length <= 50000',
    '0 <= xi, yi <= 10^6',
    '0 <= k <= 100',
  ],
  examples: [
    {
      input: 'coordinates = [[1,2],[4,2],[1,3],[5,2]], k = 5',
      output: '2',
      explanation: 'Pair (0,1): (1 XOR 4)+(2 XOR 2)=5+0=5 ✓. Pair (2,3): (1 XOR 5)+(3 XOR 2)=4+1=5 ✓. All other pairs yield a different distance.',
    },
    {
      input: 'coordinates = [[1,3],[1,3],[1,3],[1,3],[1,3]], k = 0',
      output: '10',
      explanation: 'All 5 points are the same. XOR distance between any two is 0. C(5,2)=10 pairs.',
    },
  ],
  hints: [
    'The distance is (x1 XOR x2) + (y1 XOR y2) = k, so x1 XOR x2 can be 0, 1, ..., k and y1 XOR y2 = k - (x1 XOR x2).',
    'For each target xorX in [0..k], count pairs where x1 XOR x2 = xorX and y1 XOR y2 = k - xorX.',
    'Use a hash map: for each point, check how many previously seen points (x2, y2) satisfy x1 XOR x2 = xorX and y1 XOR y2 = k - xorX.',
    'Iterate over all possible xorX values and look up x1 XOR xorX in the map to find matching x2, then check if the y-values also match.',
  ],
  functionName: 'countPairs',
  params: ['coordinates', 'k'],
  starterCode: {
    javascript: `function countPairs(coordinates, k) {
  const seen = new Map();
  let count = 0;
  for (const [x, y] of coordinates) {
    for (let xorX = 0; xorX <= k; xorX++) {
      const key = (x ^ xorX) + ',' + (y ^ (k - xorX));
      count += seen.get(key) || 0;
    }
    const key = x + ',' + y;
    seen.set(key, (seen.get(key) || 0) + 1);
  }
  return count;
}`,
    typescript: `function countPairs(coordinates: number[][], k: number): number {
  const seen = new Map<string, number>();
  let count = 0;
  for (const [x, y] of coordinates) {
    for (let xorX = 0; xorX <= k; xorX++) {
      const key = (x! ^ xorX) + ',' + (y! ^ (k - xorX));
      count += seen.get(key) ?? 0;
    }
    const key = x! + ',' + y!;
    seen.set(key, (seen.get(key) ?? 0) + 1);
  }
  return count;
}`,
    python: `def countPairs(coordinates: list[list[int]], k: int) -> int:
    seen = {}
    count = 0
    for x, y in coordinates:
        for xor_x in range(k + 1):
            key = (x ^ xor_x, y ^ (k - xor_x))
            count += seen.get(key, 0)
        key = (x, y)
        seen[key] = seen.get(key, 0) + 1
    return count`,
  },
  visibleTests: [
    { args: [[[1, 2], [4, 2], [1, 3], [5, 2]], 5], expected: 2 },
    { args: [[[1, 3], [1, 3], [1, 3], [1, 3], [1, 3]], 0], expected: 10 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]], 0], expected: 1 },
    { args: [[[0, 0], [1, 1]], 0], expected: 0 },
    { args: [[[0, 0], [0, 1]], 1], expected: 1 },
    { args: [[[1, 0], [0, 1]], 2], expected: 1 },
    { args: [[[0, 0], [1, 0], [0, 1], [1, 1]], 2], expected: 2 },
    { args: [[[3, 5], [1, 4], [2, 6], [0, 7]], 3], expected: 2 },
    { args: [[[0, 0], [0, 0], [0, 0]], 0], expected: 3 },
    { args: [[[5, 5], [5, 5], [10, 10]], 0], expected: 1 },
  ],
};
