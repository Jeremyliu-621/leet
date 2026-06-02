import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts',
  title: 'Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a rectangular cake of size \`h x w\` and two arrays of integers \`horizontalCuts\` and \`verticalCuts\` where:

- \`horizontalCuts[i]\` is the distance from the **top** of the rectangular cake to the \`i\`th horizontal cut.
- \`verticalCuts[j]\` is the distance from the **left** of the rectangular cake to the \`j\`th vertical cut.

Return *the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays* \`horizontalCuts\` *and* \`verticalCuts\`. Since the answer can be a large number, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '2 <= h, w <= 10^9',
    '1 <= horizontalCuts.length <= min(h - 1, 10^5)',
    '1 <= verticalCuts.length <= min(w - 1, 10^5)',
    '1 <= horizontalCuts[i] < h',
    '1 <= verticalCuts[i] < w',
    'All the elements in horizontalCuts are distinct.',
    'All the elements in verticalCuts are distinct.',
  ],
  examples: [
    {
      input: 'h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]',
      output: '4',
      explanation: 'The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area. The maximum piece has height 2 (gap between cuts 2 and 4) and width 2 (gap between cuts 1 and 3). Area = 2*2 = 4.',
    },
    {
      input: 'h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]',
      output: '6',
      explanation: 'After cuts, maximum horizontal gap = max(1,2,2)=2. Maximum vertical gap = max(1,3)=3. Area = 2*3 = 6.',
    },
    {
      input: 'h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]',
      output: '9',
      explanation: 'Maximum horizontal gap = max(3,2)=3. Maximum vertical gap = max(3,1)=3. Area = 3*3 = 9.',
    },
  ],
  hints: [
    'Sort horizontalCuts and verticalCuts.',
    'Find the maximum gap among horizontalCuts (including 0 at start and h at end). Do the same for verticalCuts with w at end.',
    'Answer = maxHorizontalGap * maxVerticalGap % (10^9 + 7). Use BigInt to avoid overflow.',
  ],
  functionName: 'maxArea',
  params: ['h', 'w', 'horizontalCuts', 'verticalCuts'],
  starterCode: {
    javascript: `function maxArea(h, w, horizontalCuts, verticalCuts) {
  const MOD = 1_000_000_007n;
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxH = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
  for (let i = 1; i < horizontalCuts.length; i++)
    maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
  let maxV = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);
  for (let i = 1; i < verticalCuts.length; i++)
    maxV = Math.max(maxV, verticalCuts[i] - verticalCuts[i - 1]);
  return Number(BigInt(maxH) * BigInt(maxV) % MOD);
}`,
    typescript: `function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
  const MOD = 1_000_000_007n;
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxH = Math.max(horizontalCuts[0]!, h - horizontalCuts[horizontalCuts.length - 1]!);
  for (let i = 1; i < horizontalCuts.length; i++)
    maxH = Math.max(maxH, horizontalCuts[i]! - horizontalCuts[i - 1]!);
  let maxV = Math.max(verticalCuts[0]!, w - verticalCuts[verticalCuts.length - 1]!);
  for (let i = 1; i < verticalCuts.length; i++)
    maxV = Math.max(maxV, verticalCuts[i]! - verticalCuts[i - 1]!);
  return Number(BigInt(maxH) * BigInt(maxV) % MOD);
}`,
    python: `def maxArea(h: int, w: int, horizontalCuts: list[int], verticalCuts: list[int]) -> int:
    MOD = 10 ** 9 + 7
    horizontalCuts.sort()
    verticalCuts.sort()
    max_h = max(horizontalCuts[0], h - horizontalCuts[-1])
    for i in range(1, len(horizontalCuts)):
        max_h = max(max_h, horizontalCuts[i] - horizontalCuts[i-1])
    max_v = max(verticalCuts[0], w - verticalCuts[-1])
    for i in range(1, len(verticalCuts)):
        max_v = max(max_v, verticalCuts[i] - verticalCuts[i-1])
    return (max_h * max_v) % MOD`,
  },
  visibleTests: [
    { args: [5, 4, [1, 2, 4], [1, 3]], expected: 4 },
    { args: [5, 4, [3, 1], [1]], expected: 6 },
    { args: [5, 4, [3], [3]], expected: 9 },
    { args: [2, 2, [1], [1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [3, 3, [1], [1]], expected: 4 },
    { args: [10, 10, [5], [5]], expected: 25 },
    { args: [10, 10, [3, 7], [4, 6]], expected: 16 },
    { args: [5, 4, [1, 4], [2]], expected: 6 },
    { args: [1000000000, 1000000000, [2], [2]], expected: 81 },
    { args: [1000000000, 1000000000, [500000000], [500000000]], expected: 250000014 },
    { args: [100, 100, [10, 50, 90], [20, 40, 80]], expected: 1600 },
  ],
};
