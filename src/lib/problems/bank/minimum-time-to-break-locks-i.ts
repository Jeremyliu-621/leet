import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-break-locks-i',
  title: 'Minimum Time to Break Locks I',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`strength\` where \`strength[i]\` is the strength of the \`i\`-th lock. You start with an energy level of \`0\` and have an **energy multiplier** \`X = 1\`.

Each second you may perform **one** of the following actions:
- Increase your energy by \`1\`.
- Break the lock at index \`i\` if your energy is **at least** \`strength[i] * X\`. Immediately after breaking lock \`i\`, \`X\` becomes \`X + 1\` (i.e., \`X\` increases by 1).

Return the **minimum number of seconds** required to break all \`n\` locks.`,
  constraints: [
    'n == strength.length',
    '1 <= n <= 8',
    '1 <= strength[i] <= 46',
  ],
  examples: [
    {
      input: 'strength = [3, 4, 1]',
      output: '9',
      explanation: 'Optimal order: break lock 1 (strength 4) first as the 1st lock (cost 4+1=5), then lock 0 (strength 3) as 2nd lock needing 2*3=6 energy (have 4, gain 2 more, cost 2+1=3), then lock 2 (strength 1) as 3rd lock needing 3*1=3 energy (have 6, cost 1). Total = 5+3+1 = 9.',
    },
    {
      input: 'strength = [2]',
      output: '3',
      explanation: 'Need energy 1*2=2. Gain 2 seconds + 1 second to break = 3.',
    },
    {
      input: 'strength = [1, 1]',
      output: '4',
      explanation: 'Break lock 1 first (X=1): need 1 energy. Gain 1s + break 1s = 2. Break lock 2 (X=2): need 2 energy. Have 1. Gain 1s + break 1s = 2. Total = 4.',
    },
  ],
  hints: [
    'The total time equals n (one second per break) plus the total energy spent waiting. The waiting time depends on the order you break the locks.',
    'For a given order, the waiting time at step k equals `max(0, k * strength[π(k)] - energyFromPreviousSteps)`. The total waiting time simplifies to `max over k of (k * strength[π(k)])`.',
    'You want to minimize `max(k * strength[π(k)])`. Greedily assign the **largest** strength to position `k=1`, the second largest to `k=2`, etc. Sort strengths in **descending** order.',
  ],
  functionName: 'findMinimumTime',
  params: ['strength'],
  starterCode: {
    javascript: 'function findMinimumTime(strength) {\n  // your code here\n}\n',
    typescript: `function findMinimumTime(strength: number[]): number {

}`,
    python: 'def findMinimumTime(strength):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 1]], expected: 9 },
    { args: [[2]], expected: 3 },
    { args: [[1, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 7 },
    { args: [[5, 5, 5]], expected: 18 },
    { args: [[4, 3]], expected: 8 },
    { args: [[10]], expected: 11 },
    { args: [[1]], expected: 2 },
    { args: [[4, 4, 4, 4]], expected: 20 },
    { args: [[1, 2, 3, 4]], expected: 10 },
    { args: [[46, 46]], expected: 94 },
  ],
};
