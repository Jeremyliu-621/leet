import type { Problem } from '../types';

export const problem: Problem = {
  id: 'escape-the-ghosts',
  title: 'Escape the Ghosts',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are playing a simplified PAC-MAN game on an infinite 2D grid. You start at the point \`[0, 0]\`, and your destination is the point \`target = [tx, ty]\`.

There are several ghosts on the map, each starting at their own position \`ghosts[i] = [xi, yi]\`. Each turn, you and all the ghosts may independently choose to either **move** 1 unit in any of the four cardinal directions (north, east, south, west) or **stay** in place.

You escape if and only if you can reach the target **before** any ghost reaches you (a ghost catches you if it occupies the same position as you at the same time, **including** at the target).

Return \`true\` if you can escape, otherwise return \`false\`.

**Key insight:** You can escape if and only if your Manhattan distance to the target is strictly less than the Manhattan distance from every ghost to the target. (Any ghost that can reach the target as fast as or faster than you can intercept you there or along the way.)`,
  constraints: [
    '`1 <= ghosts.length <= 100`',
    '`ghosts[i].length == 2`',
    '`-10^4 <= xi, yi, tx, ty <= 10^4`',
    'There can be multiple ghosts in the same location.',
    'The target coordinates and ghost coordinates are pairwise distinct from [0,0].',
  ],
  examples: [
    {
      input: 'ghosts = [[1,0],[0,3]], target = [0,1]',
      output: 'true',
      explanation: 'Your Manhattan distance to target is |0-0|+|0-1|=1. Ghost 0: |1-0|+|0-1|=2. Ghost 1: |0-0|+|3-1|=2. Both ghosts are farther, so you escape.',
    },
    {
      input: 'ghosts = [[1,0]], target = [2,0]',
      output: 'false',
      explanation: 'Your distance is 2, ghost 0 distance is 1. Ghost can reach target in 1 step and intercept you.',
    },
    {
      input: 'ghosts = [[2,0]], target = [1,0]',
      output: 'false',
      explanation: 'Your distance is 1, ghost distance is also 1. Ghost can meet you at the target.',
    },
  ],
  hints: [
    'The optimal strategy is always to go directly to the target along the shortest path.',
    'A ghost can catch you only if it can reach the target in ≤ your number of steps. Your steps = Manhattan distance to target.',
    'Check: for every ghost, is ghost\'s Manhattan distance to target >= your Manhattan distance to target? If any ghost\'s distance is ≤ yours, return false.',
  ],
  functionName: 'escapeGhosts',
  params: ['ghosts', 'target'],
  starterCode: {
    javascript: `function escapeGhosts(ghosts, target) {

}`,
    typescript: "function escapeGhosts(ghosts: number[][], target: number[]): boolean {\n\n}",

    python: `def escapeGhosts(ghosts, target):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 0], [0, 3]], [0, 1]], expected: true },
    { args: [[[1, 0]], [2, 0]], expected: false },
    { args: [[[2, 0]], [1, 0]], expected: false },
  ],
  hiddenTests: [
    { args: [[[0, 0]], [1, 1]], expected: false },
    // ghost at origin same as player, dist = 2 = my_dist -> cannot escape
    { args: [[[5, 5]], [1, 1]], expected: true },
    // ghost dist = |5-1|+|5-1| = 8 > my_dist 2 -> can escape
    { args: [[[1, 0], [0, 1]], [1, 1]], expected: false },
    // ghost1 dist = |1-1|+|0-1| = 1 < my_dist 2 -> caught
    { args: [[[3, 0]], [1, 0]], expected: true },
    // ghost dist = |3-1|+0 = 2 > my_dist 1 -> can escape
    { args: [[[1, 1]], [0, 2]], expected: false },
    // ghost dist = |1-0|+|1-2| = 2 = my_dist 2 -> cannot escape
    { args: [[[0, 10]], [0, 5]], expected: false },
    // ghost dist = |0-0|+|10-5| = 5 = my_dist 5 -> cannot escape
    { args: [[[-1, 0]], [-2, 0]], expected: false },
    // ghost dist = |-1-(-2)|+0 = 1 < my_dist 2 -> caught
  ],
};
