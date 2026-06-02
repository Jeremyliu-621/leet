import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-area-of-piece-of-cake',
  title: 'Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a rectangular cake of size \`h x w\` and two arrays of integers \`horizontalCuts\` and \`verticalCuts\` where:

- \`horizontalCuts[i]\` is the distance from the top of the rectangular cake to the \`i\`th horizontal cut.
- \`verticalCuts[j]\` is the distance from the left of the rectangular cake to the \`j\`th vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position. Since the answer can be a large number, return it **modulo 10^9 + 7**.`,
  constraints: [
    '2 <= h, w <= 10^9',
    '1 <= horizontalCuts.length <= min(h - 1, 10^5)',
    '1 <= verticalCuts.length <= min(w - 1, 10^5)',
    '1 <= horizontalCuts[i] < h',
    '1 <= verticalCuts[i] < w',
    'All values in horizontalCuts are distinct.',
    'All values in verticalCuts are distinct.',
  ],
  examples: [
    {
      input: 'h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]',
      output: '4',
      explanation: 'Max horizontal gap = 2 (between cut 2 and cut 4). Max vertical gap = 2 (between cut 1 and cut 3). Area = 2 * 2 = 4.',
    },
    {
      input: 'h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]',
      output: '6',
      explanation: 'Max horizontal gap = 3 (between cut 3 and 5). Max vertical gap = 3 (from cut 1 to 4). Area = 3 * 2 = 6. Wait, max vertical gap = max(1, 4-1=3) = 3. Max horizontal gap = max(1, 3-1=2, 5-3=2) = 2. Area = 2*3=6.',
    },
    {
      input: 'h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]',
      output: '9',
      explanation: 'Max horizontal gap = max(3, 5-3=2) = 3. Max vertical gap = max(3, 4-3=1) = 3. Area = 3*3=9.',
    },
  ],
  hints: [
    'Sort the cuts. The maximum gap is the largest difference between consecutive cuts (including 0 and h or w as boundaries).',
    'The maximum piece area = max horizontal gap × max vertical gap.',
    'Use BigInt or modular multiplication to avoid overflow.',
  ],
  functionName: 'maxArea',
  params: ['h', 'w', 'horizontalCuts', 'verticalCuts'],
  starterCode: {
    javascript: `function maxArea(h, w, horizontalCuts, verticalCuts) {
  const MOD = 1000000007n;
  const hs = [0, ...horizontalCuts, h].sort((a,b) => a-b);
  const vs = [0, ...verticalCuts, w].sort((a,b) => a-b);
  let maxH = 0, maxV = 0;
  for (let i = 1; i < hs.length; i++) maxH = Math.max(maxH, hs[i] - hs[i-1]);
  for (let i = 1; i < vs.length; i++) maxV = Math.max(maxV, vs[i] - vs[i-1]);
  return Number(BigInt(maxH) * BigInt(maxV) % MOD);
}`,
    typescript: `function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
  const MOD = 1000000007n;
  const hs = [0, ...horizontalCuts, h].sort((a,b) => a-b);
  const vs = [0, ...verticalCuts, w].sort((a,b) => a-b);
  let maxH = 0, maxV = 0;
  for (let i = 1; i < hs.length; i++) maxH = Math.max(maxH, hs[i]! - hs[i-1]!);
  for (let i = 1; i < vs.length; i++) maxV = Math.max(maxV, vs[i]! - vs[i-1]!);
  return Number(BigInt(maxH) * BigInt(maxV) % MOD);
}`,
    python: `def maxArea(h, w, horizontalCuts, verticalCuts):
    MOD = 10**9 + 7
    hs = sorted([0] + list(horizontalCuts) + [h])
    vs = sorted([0] + list(verticalCuts) + [w])
    max_h = max(hs[i] - hs[i-1] for i in range(1, len(hs)))
    max_v = max(vs[i] - vs[i-1] for i in range(1, len(vs)))
    return max_h * max_v % MOD`,
  },
  visibleTests: [
    { args: [5, 4, [1,2,4], [1,3]], expected: 4 },
    { args: [5, 4, [3,1], [1]], expected: 6 },
    { args: [5, 4, [3], [3]], expected: 9 },
  ],
  hiddenTests: [
    { args: [2, 2, [1], [1]], expected: 1 },
    { args: [1000000000, 1000000000, [2], [2]], expected: 81 },
    { args: [5, 5, [1,2,3,4], [1,2,3,4]], expected: 1 },
    { args: [10, 10, [5], [5]], expected: 25 },
  ],
};
