import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-point-is-reachable',
  title: 'Check if Point Is Reachable',
  difficulty: 'hard',
  tags: ['math'],
  description: `There exists an infinite collection of points in the XY plane. Starting from point \`(1, 1)\`, you can make the following types of moves:

- \`(x, y)\` → \`(x + y, y)\`
- \`(x, y)\` → \`(x, x + y)\`
- \`(x, y)\` → \`(2x, y)\`
- \`(x, y)\` → \`(x, 2y)\`

Given two integers \`targetX\` and \`targetY\`, return \`true\` if you can reach the point \`(targetX, targetY)\` starting from \`(1, 1)\`, otherwise return \`false\`.`,
  constraints: [
    '`1 <= targetX, targetY <= 10^9`',
  ],
  examples: [
    {
      input: 'targetX = 6, targetY = 9',
      output: 'false',
      explanation: 'gcd(6,9)=3 — not a power of 2, so (6,9) is unreachable.',
    },
    {
      input: 'targetX = 4, targetY = 7',
      output: 'true',
      explanation: 'gcd(4,7)=1=2^0, which is a power of 2, so (4,7) is reachable.',
    },
  ],
  hints: [
    'Work backwards from (targetX, targetY): the inverse operations reduce one coordinate using the other.',
    'The GCD is invariant under the first two operations (add operations) and halved under the last two (double operations) in reverse.',
    'The key: (targetX, targetY) is reachable if and only if gcd(targetX, targetY) is a power of 2 (including 1 = 2^0).',
  ],
  functionName: 'isReachable',
  params: ['targetX', 'targetY'],
  starterCode: {
    javascript: `function isReachable(targetX, targetY) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const g = gcd(targetX, targetY);
  return (g & (g - 1)) === 0;
}`,
    typescript: `function isReachable(targetX: number, targetY: number): boolean {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = gcd(targetX, targetY);
  return (g & (g - 1)) === 0;
}`,
    python: `def isReachable(targetX, targetY):
    from math import gcd
    g = gcd(targetX, targetY)
    return (g & (g - 1)) == 0`,
  },
  visibleTests: [
    { args: [6, 9], expected: false },
    { args: [4, 7], expected: true },
  ],
  hiddenTests: [
    { args: [1, 1], expected: true },
    { args: [3, 5], expected: true },
    { args: [5, 5], expected: false },
    { args: [3, 6], expected: false },
    { args: [6, 10], expected: true },
  ],
};
