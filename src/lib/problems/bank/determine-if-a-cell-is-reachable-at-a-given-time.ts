import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-a-cell-is-reachable-at-a-given-time',
  title: 'Determine if a Cell Is Reachable at a Given Time',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given four integers \`sx\`, \`sy\`, \`fx\`, \`fy\`, and a non-negative integer \`t\`.

In a single second, you can move to any of the **8 adjacent cells** (including diagonals) from your current position, or stay in the same cell. Starting at \`(sx, sy)\`, determine if you can reach \`(fx, fy)\` in **exactly \`t\` seconds**.

Return \`true\` if reachable, \`false\` otherwise.`,
  constraints: [
    '`1 <= sx, sy, fx, fy <= 10^9`',
    '`0 <= t <= 10^9`',
  ],
  examples: [
    {
      input: 'sx = 2, sy = 4, fx = 7, fy = 7, t = 6',
      output: 'true',
      explanation: 'The Chebyshev distance is max(|2-7|,|4-7|)=5. Since t=6 >= 5, we can reach the target in time.',
    },
    {
      input: 'sx = 3, sy = 1, fx = 7, fy = 3, t = 3',
      output: 'false',
      explanation: 'The Chebyshev distance is max(|3-7|,|1-3|)=4. Since t=3 < 4, we cannot reach the target in time.',
    },
  ],
  hints: [
    'The minimum number of moves to go from (sx,sy) to (fx,fy) using 8-directional movement is the Chebyshev distance: `max(|sx-fx|, |sy-fy|)`.',
    'You can always waste extra moves by going one step in any direction and returning. This works as long as you\'re not already at the target with t=1 (you\'d have to leave and can\'t return in time).',
    'The only impossible case (other than t < minDist) is: `sx == fx && sy == fy && t == 1`. Otherwise, `t >= minDist` guarantees reachability.',
  ],
  functionName: 'isReachableAtTime',
  params: ['sx', 'sy', 'fx', 'fy', 't'],
  starterCode: {
    javascript: `function isReachableAtTime(sx, sy, fx, fy, t) {
  const dx = Math.abs(sx - fx), dy = Math.abs(sy - fy);
  if (dx === 0 && dy === 0) return t !== 1;
  return Math.max(dx, dy) <= t;
}`,
    typescript: `function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
  const dx = Math.abs(sx - fx), dy = Math.abs(sy - fy);
  if (dx === 0 && dy === 0) return t !== 1;
  return Math.max(dx, dy) <= t;
}`,
    python: `def isReachableAtTime(sx, sy, fx, fy, t):
    dx, dy = abs(sx - fx), abs(sy - fy)
    if dx == 0 and dy == 0:
        return t != 1
    return max(dx, dy) <= t`,
  },
  visibleTests: [
    { args: [2, 4, 7, 7, 6], expected: true },
    { args: [3, 1, 7, 3, 3], expected: false },
  ],
  hiddenTests: [
    { args: [1, 1, 1, 1, 0], expected: true },
    { args: [1, 1, 1, 1, 1], expected: false },
    { args: [1, 1, 1, 1, 2], expected: true },
    { args: [1, 1, 5, 5, 4], expected: true },
    { args: [1, 1, 5, 5, 3], expected: false },
    { args: [5, 5, 1, 1, 6], expected: true },
    { args: [1000000000, 1000000000, 1, 1, 1000000000], expected: true },
  ],
};
