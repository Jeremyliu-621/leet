import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-a-cell-is-reachable-at-a-given-time',
  title: 'Determine if a Cell Is Reachable at a Given Time',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given four integers \`sx\`, \`sy\`, \`fx\`, \`fy\`, and a **non-negative** integer \`t\`.

In an infinite 2D grid, you start at cell \`(sx, sy)\`. Each second, you may move to any of the **8 adjacent** cells (up, down, left, right, or diagonal), or stay at the same cell (but you must make **exactly** \`t\` moves).

Return \`true\` if you can reach cell \`(fx, fy)\` in **exactly** \`t\` seconds. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= sx, sy, fx, fy <= 10^9',
    '0 <= t <= 10^9',
  ],
  examples: [
    {
      input: 'sx = 2, sy = 4, fx = 7, fy = 7, t = 6',
      output: 'true',
      explanation: 'Chebyshev distance = max(|7-2|, |7-4|) = max(5,3) = 5 ≤ 6. Reachable.',
    },
    {
      input: 'sx = 3, sy = 1, fx = 7, fy = 3, t = 3',
      output: 'false',
      explanation: 'Chebyshev distance = max(4,2) = 4 > 3. Cannot reach in 3 steps.',
    },
  ],
  hints: [
    'With 8-directional movement, the minimum number of steps to reach (fx,fy) from (sx,sy) is the Chebyshev distance: max(|fx-sx|, |fy-sy|).',
    'Extra steps beyond the minimum can always be wasted by moving to a neighbor and back (takes 2 steps). So any t ≥ Chebyshev distance works.',
    'Special case: if the start and end are the same cell (distance = 0) and t = 1, it is impossible — you must move but cannot return in one step.',
  ],
  functionName: 'isReachableAtTime',
  params: ['sx', 'sy', 'fx', 'fy', 't'],
  starterCode: {
    javascript: `function isReachableAtTime(sx, sy, fx, fy, t) {
  // your code here
}`,
    typescript: `function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
  // your code here
}`,
    python: `def isReachableAtTime(sx, sy, fx, fy, t):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [2, 4, 7, 7, 6], expected: true },
    { args: [3, 1, 7, 3, 3], expected: false },
    { args: [1, 1, 1, 1, 0], expected: true },
    { args: [1, 1, 1, 1, 1], expected: false },
    { args: [1, 1, 5, 5, 4], expected: true },
  ],
  hiddenTests: [
    { args: [1, 1, 1, 1, 2], expected: true },
    { args: [1, 2, 3, 4, 2], expected: true },
    { args: [1, 1, 2, 2, 1], expected: true },
    { args: [5, 5, 5, 5, 1], expected: false },
    { args: [5, 5, 5, 5, 3], expected: true },
    { args: [1, 1, 1000000000, 1000000000, 1000000000], expected: true },
    { args: [1, 1, 3, 3, 1], expected: false },
    { args: [1, 1, 3, 3, 2], expected: true },
    { args: [2, 2, 2, 2, 0], expected: true },
    { args: [1, 1, 4, 4, 3], expected: true },
  ],
};
