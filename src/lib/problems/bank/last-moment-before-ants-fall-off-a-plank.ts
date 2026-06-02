import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-moment-before-ants-fall-off-a-plank',
  title: 'Last Moment Before All Ants Fall Out of a Plank',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `We have a wooden plank of length \`n\` units. Some ants are walking on the plank, each ant moves with speed \`1\` unit per second. Some of the ants move to the **left**, the other move to the **right**.

When two ants moving in opposite directions meet at some point, they change their directions and continue moving again. Assume changing direction does not take any additional time.

When an ant reaches **one end** of the plank at time \`t\`, it falls out of the plank immediately.

Given an integer \`n\` and two integer arrays \`left\` and \`right\`, the positions of the ants moving to the left and right respectively, return the **last** moment before any ant(s) fall out of the plank.`,
  constraints: [
    '1 <= n <= 10^4',
    '0 <= left.length <= n + 1',
    '0 <= right.length <= n + 1',
    '0 <= left[i] <= n',
    '0 <= right[i] <= n',
    '1 <= left[i], right[i] <= n - 1',
    'All values are unique.',
  ],
  examples: [
    {
      input: 'n = 4, left = [4,3], right = [0,1]',
      output: '4',
      explanation: 'Ants going left fall off at t = 4 (position 4) and t = 3. Ants going right fall off at t = 4 (n-0) and t = 3 (n-1). Maximum is 4.',
    },
    {
      input: 'n = 7, left = [], right = [0,1,2,3,4,5,6,7]',
      output: '7',
      explanation: 'All ants move right. The one at position 0 takes 7 seconds.',
    },
  ],
  hints: [
    'Key insight: when two ants collide and reverse, it is equivalent to them passing through each other.',
    'For left-going ants, the time to fall off is their position.',
    'For right-going ants, the time to fall off is n minus their position. Return the max.',
  ],
  functionName: 'getLastMoment',
  params: ['n', 'left', 'right'],
  starterCode: {
    javascript: `function getLastMoment(n, left, right) {
  const maxLeft = left.length ? Math.max(...left) : 0;
  const maxRight = right.length ? Math.max(...right.map(p => n - p)) : 0;
  return Math.max(maxLeft, maxRight);
}`,
    typescript: `function getLastMoment(n: number, left: number[], right: number[]): number {
  const maxLeft = left.length ? Math.max(...left) : 0;
  const maxRight = right.length ? Math.max(...right.map(p => n - p)) : 0;
  return Math.max(maxLeft, maxRight);
}`,
    python: `def getLastMoment(n, left, right):
    return max(max(left, default=0), max(n-p for p in right) if right else 0)`,
  },
  visibleTests: [
    { args: [4, [4, 3], [0, 1]], expected: 4 },
    { args: [7, [], [0, 1, 2, 3, 4, 5, 6, 7]], expected: 7 },
  ],
  hiddenTests: [
    { args: [10, [10, 0], []], expected: 10 },
    { args: [6, [6], [0]], expected: 6 },
    { args: [3, [], [0]], expected: 3 },
    { args: [5, [3], [2]], expected: 3 },
  ],
};
