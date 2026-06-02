import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reach-a-number',
  title: 'Reach a Number',
  difficulty: 'medium',
  tags: ['math', 'binary-search'],
  description: `You are standing at position \`0\` on an infinite number line. At step \`k\` (1-indexed), you can move \`k\` units to the right or left.

Return the **minimum number of steps** needed to reach the integer \`target\`.`,
  constraints: [
    '-10^9 <= target <= 10^9',
    'target != 0 (implied by examples)',
  ],
  examples: [
    {
      input: 'target = 2',
      output: '3',
      explanation: 'Steps: +1, -2, +3 = 2. Or +1, +2 won\'t work (sum=3≠2 with odd difference). Steps 1+2+3=6, (6-2)/2=2 → flip step 2: 1-2+3=2.',
    },
    {
      input: 'target = 3',
      output: '2',
      explanation: '1+2=3 directly. 2 steps.',
    },
  ],
  hints: [
    'By symmetry, if target < 0, treat it as |target|.',
    'Find the smallest k such that 1+2+…+k = k*(k+1)/2 ≥ target AND (sum - target) is even.',
    'When (sum - target) is even, you can flip sign of some steps to reduce the net total by that amount.',
  ],
  functionName: 'reachNumber',
  params: ['target'],
  starterCode: {
    javascript: `function reachNumber(target) {
  target = Math.abs(target);
  let sum = 0, k = 0;
  while (sum < target || (sum - target) % 2 !== 0) { k++; sum += k; }
  return k;
}`,
    typescript: `function reachNumber(target: number): number {
  target = Math.abs(target);
  let sum = 0, k = 0;
  while (sum < target || (sum - target) % 2 !== 0) { k++; sum += k; }
  return k;
}`,
    python: `def reachNumber(target):
    target = abs(int(target))
    s = k = 0
    while s < target or (s - target) % 2 != 0:
        k += 1; s += k
    return k`,
  },
  visibleTests: [
    { args: [2], expected: 3 },
    { args: [3], expected: 2 },
    { args: [1], expected: 1 },
    { args: [7], expected: 5 },
    { args: [-3], expected: 2 },
  ],
  hiddenTests: [
    { args: [6], expected: 3 },
    { args: [10], expected: 4 },
    { args: [100], expected: 15 },
    { args: [4], expected: 3 },
    { args: [5], expected: 5 },
    { args: [-7], expected: 5 },
    { args: [1000000000], expected: 44723 },
    { args: [11], expected: 5 },
    { args: [15], expected: 5 },
    { args: [21], expected: 6 },
  ],
};
