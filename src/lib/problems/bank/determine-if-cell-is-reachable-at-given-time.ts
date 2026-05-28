import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-cell-is-reachable-at-given-time',
  title: 'Determine if a Cell Is Reachable at a Given Time',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given four integers \`sx\`, \`sy\`, \`fx\`, \`fy\`, and a **non-negative** integer \`t\`.

In an infinite 2D grid, you start at the cell \`(sx, sy)\`. Each second, you can move to any of the **8** adjacent cells or **stay** at the current cell. In other words, per second you can make any of 9 moves.

Return \`true\` *if you can reach cell* \`(fx, fy)\` *after **exactly** \`t\` seconds*. Otherwise, return \`false\`.`,
  constraints: [
    '`1 <= sx, sy, fx, fy <= 10^9`',
    '`0 <= t <= 10^9`',
  ],
  examples: [
    {
      input: 'sx = 2, sy = 4, fx = 7, fy = 7, t = 6',
      output: 'true',
      explanation: 'The Chebyshev distance is max(|7-2|, |7-4|) = max(5,3) = 5. Since 5 <= 6, we can reach it in exactly 6 seconds (reach in 5, then stay 1).',
    },
    {
      input: 'sx = 3, sy = 1, fx = 7, fy = 3, t = 3',
      output: 'false',
      explanation: 'The Chebyshev distance is max(|7-3|, |3-1|) = max(4,2) = 4. Since 4 > 3, we cannot reach it.',
    },
  ],
  hints: [
    'The minimum number of seconds needed to reach (fx, fy) from (sx, sy) is the Chebyshev distance: max(|fx-sx|, |fy-sy|).',
    'If the Chebyshev distance is 0 (same cell) and t == 0, return true. If same cell and t == 1, return false (must move and can\'t return in 1 step on infinite grid... wait, actually you can stay, so this needs care).',
    'Special case: if sx == fx and sy == fy, you can only reach it at t=0 or t>=2 (stay repeatedly). t=1 is impossible since you\'d have to leave and can\'t return in 1 more step.',
    'In general: return t >= chebyshevDist && (chebyshevDist > 0 || t != 1).',
  ],
  functionName: 'isReachableAtTime',
  params: ['sx', 'sy', 'fx', 'fy', 't'],
  starterCode: {
    javascript: `function isReachableAtTime(sx, sy, fx, fy, t) {

}`,
    python: `def isReachableAtTime(sx, sy, fx, fy, t):
    pass`,
  },
  visibleTests: [
    { args: [2, 4, 7, 7, 6], expected: true },
    { args: [3, 1, 7, 3, 3], expected: false },
  ],
  hiddenTests: [
    { args: [1, 1, 1, 1, 0], expected: true },
    { args: [1, 1, 1, 1, 1], expected: false },
    { args: [1, 1, 1, 1, 2], expected: true },
    { args: [1, 1, 2, 2, 1], expected: true },
    { args: [1, 1, 3, 3, 2], expected: true },
    { args: [1, 1, 10, 10, 5], expected: false },
    { args: [1, 2, 1, 2, 3], expected: true },
  ],
};
