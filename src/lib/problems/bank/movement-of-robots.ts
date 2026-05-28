import type { Problem } from '../types';

export const problem: Problem = {
  id: 'movement-of-robots',
  title: 'Movement of Robots',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Some robots are standing on an infinite number line with their initial positions given by a 0-indexed integer array \`nums\` and will start moving once given the string \`s\` of directions. Each character in \`s\` is either \`'L'\` for left or \`'R'\` for right.

All robots move **simultaneously** at the same speed. If two robots ever share the same position while moving, they **instantly switch directions**.

Return the sum of distances between all pairs of robots after \`d\` seconds, modulo \`10^9 + 7\`.

**Key insight:** When two robots collide and swap directions, this is mathematically equivalent to them passing through each other. So you can simply shift each robot's position by \`+d\` (if 'R') or \`-d\` (if 'L'), sort the resulting positions, and compute the sum of pairwise distances.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`-2 * 10^9 <= nums[i] <= 2 * 10^9`',
    '`0 <= d <= 10^9`',
    '`nums.length == s.length`',
    '`s` consists of only `\'L\'` and `\'R\'`.',
    'All values in `nums` are **unique**.',
  ],
  examples: [
    {
      input: 'nums = [-2,0,2], s = "RLL", d = 3',
      output: '8',
      explanation: 'After 3 seconds the positions become [1,-3,-1]. Sorted: [-3,-1,1]. Pairwise distances: |-3-(-1)|+|-3-1|+|-1-1| = 2+4+2 = 8.',
    },
    {
      input: 'nums = [1,0], s = "RL", d = 2',
      output: '5',
      explanation: 'After 2 seconds positions become [3,-2]. |3-(-2)| = 5.',
    },
  ],
  hints: [
    'Collisions are equivalent to pass-through: just shift each robot by +d or -d based on its direction.',
    'Sort the shifted positions.',
    'To compute sum of all pairwise distances efficiently, use a prefix sum approach: for sorted position p[i], it contributes p[i]*i - prefixSum[i] to the total.',
  ],
  functionName: 'sumDistance',
  params: ['nums', 's', 'd'],
  starterCode: {
    javascript: `function sumDistance(nums, s, d) {

}`,
    typescript: "function sumDistance(nums: number[], s: string, d: number): number {\n\n}",

    python: `def sumDistance(nums: list[int], s: str, d: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[-2, 0, 2], 'RLL', 3], expected: 8 },
    { args: [[1, 0], 'RL', 2], expected: 5 },
  ],
  hiddenTests: [
    { args: [[0], 'L', 1], expected: 0 },
    { args: [[0, 1], 'RR', 1], expected: 1 },
    { args: [[0, 4], 'RL', 2], expected: 0 },
  ],
};
