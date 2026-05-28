import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-reach-target-score',
  title: 'Minimum Moves to Reach Target Score',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are playing a game with integers. You start with the integer \`1\` and you want to reach the integer \`target\`.

In one move, you can either:

- **Increment** the current integer by one (i.e., \`x = x + 1\`).
- **Double** the current integer (i.e., \`x = 2 * x\`).

You can use the **double** operation at most \`maxDoubles\` times.

Given the two integers \`target\` and \`maxDoubles\`, return the **minimum number of moves** needed to reach \`target\` starting with \`1\`.`,
  constraints: [
    '1 <= target <= 10^9',
    '0 <= maxDoubles <= 100',
  ],
  examples: [
    {
      input: 'target = 5, maxDoubles = 0',
      output: '4',
      explanation: 'Without doubling: 1 → 2 → 3 → 4 → 5 (4 increments).',
    },
    {
      input: 'target = 19, maxDoubles = 2',
      output: '7',
      explanation: '1→2 (double)→3→4→5→6→7(inc)→..., optimal path takes 7 moves.',
    },
    {
      input: 'target = 10, maxDoubles = 4',
      output: '4',
    },
  ],
  hints: [
    'Work backwards from target. If target is even and doublesLeft > 0, halve it (one move).',
    'If target is odd, decrement (one move). If no doublesLeft, the remaining steps are target - 1.',
    'Greedy backwards is optimal because halving is always better than decrementing by 1.',
  ],
  functionName: 'minMoves',
  params: ['target', 'maxDoubles'],
  starterCode: {
    javascript: 'function minMoves(target, maxDoubles) {\n\n}\n',
    typescript: "function minMoves(target: number, maxDoubles: number): number {\n\n}",

    python: 'def minMoves(target, maxDoubles):\n    pass\n',
  },
  visibleTests: [
    { args: [5, 0], expected: 4 },
    { args: [19, 2], expected: 7 },
    { args: [10, 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [1, 0], expected: 0 },
    { args: [2, 1], expected: 1 },
    { args: [4, 2], expected: 2 },
    { args: [100, 0], expected: 99 },
  ],
};
