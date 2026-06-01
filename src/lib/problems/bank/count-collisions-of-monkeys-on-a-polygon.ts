import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-collisions-of-monkeys-on-a-polygon',
  title: 'Count Collisions of Monkeys on a Polygon',
  difficulty: 'medium',
  tags: ['math'],
  description: `There is a regular convex polygon with \`n\` vertices. The vertices are labeled from \`0\` to \`n - 1\` (clockwise). You are given a **0-indexed** integer array \`monkeys\` where \`monkeys[i]\` is the initial position of the \`i\`th monkey. Each monkey moves simultaneously to either the vertex immediately clockwise or the vertex immediately counterclockwise.

A **collision** happens if at least two monkeys occupy the same vertex after moving.

Return *the number of ways the monkeys can be placed such that at least one collision occurs*. Since the answer may be very large, return it modulo \`10^9 + 7\`.

**Note:** Each monkey can only move **clockwise** or **counterclockwise** to the **next vertex**. The only collision-free arrangements are all monkeys moving clockwise, or all moving counterclockwise.`,
  constraints: ['3 <= n <= 10^9'],
  examples: [
    {
      input: 'n = 3',
      output: '6',
      explanation:
        'There are 8 total arrangements. 2 are collision-free (all CW or all CCW). 8 - 2 = 6.',
    },
    {
      input: 'n = 4',
      output: '14',
      explanation: '16 - 2 = 14.',
    },
  ],
  hints: [
    'Total arrangements = 2^n (each of n monkeys independently picks CW or CCW).',
    'Collision-free arrangements: exactly 2 (all clockwise, or all counterclockwise).',
    'Answer = (2^n − 2) mod 10^9+7. Use fast modular exponentiation (BigInt).',
  ],
  functionName: 'monkeyMove',
  params: ['n'],
  starterCode: {
    javascript: 'function monkeyMove(n) {\n\n}\n',
    typescript: 'function monkeyMove(n: number): number {\n\n}\n',
    python: 'def monkeyMove(n):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 6 },
    { args: [4], expected: 14 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [2], expected: 2 },
    { args: [5], expected: 30 },
    { args: [6], expected: 62 },
    { args: [10], expected: 1022 },
    { args: [20], expected: 1048574 },
    { args: [30], expected: 73741815 },
  ],
};
