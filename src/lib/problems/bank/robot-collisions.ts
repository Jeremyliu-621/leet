import type { Problem } from '../types';

export const problem: Problem = {
  id: 'robot-collisions',
  title: 'Robot Collisions',
  difficulty: 'hard',
  tags: ['simulation', 'arrays', 'stack'],
  description: `There are \`n\` robots numbered from \`1\` to \`n\`. You are given arrays \`positions\`, \`healths\`, and a string \`directions\`, all of length \`n\`:

- \`positions[i]\` — position of the \`i\`-th robot (all positions are **distinct**).
- \`healths[i]\` — health of the \`i\`-th robot.
- \`directions[i]\` — \`'R'\` (right) or \`'L'\` (left), the direction the \`i\`-th robot moves.

All robots move simultaneously at the same speed. When two robots collide (one moving right, one moving left, occupying the same position), the following happens:
- The robot with **lower health** is removed. The surviving robot's health decreases by **1**.
- If both have **equal health**, both are removed.

Return an array containing the health of surviving robots **in their original order** (sorted by original index, not position).`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= positions[i] <= 10^9',
    '1 <= healths[i] <= 10^9',
    'directions[i] is either \'R\' or \'L\'',
    'All positions are distinct',
  ],
  examples: [
    {
      input: 'positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR"',
      output: '[2,17,9,15,10]',
      explanation: 'All robots move right — no collisions. All survive.',
    },
    {
      input: 'positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"',
      output: '[14]',
      explanation: 'Robot 0 (pos 3, R, h=10) collides with robot 1 (pos 5, L, h=10) — both removed. Robot 2 (pos 2, R, h=15) collides with robot 3 (pos 6, L, h=12) — robot 3 removed, robot 2 survives with h=14. Result: [14].',
    },
    {
      input: 'positions = [1,2,5,6], healths = [10,10,11,11], directions = "RRLL"',
      output: '[11]',
      explanation: 'Robots 0,1 move R; robots 2,3 move L. Robot 1 (h=10) collides with robot 2 (h=11): robot 1 dies, robot 2 h=10. Robot 0 (h=10) collides with robot 2 (h=10): both die. Robot 3 (h=11) survives unchanged. Result: [11].',
    },
  ],
  hints: [
    'Sort robots by position to process collisions in order. Use a stack to track right-moving robots. When a left-moving robot is encountered, it potentially collides with the top of the stack (a right-moving robot).',
    'Pop from the stack while the stack is non-empty and the current robot moves left: compare healths. If stack top has less health, pop it and reduce current robot\'s health by 1 (repeat). If equal health, pop and mark current as dead. Otherwise reduce stack top\'s health by 1.',
    'Surviving robots: those in the stack (right-movers that were never beaten) plus left-movers that survived all collisions. Reconstruct the answer in original index order.',
  ],
  functionName: 'survivedRobotsHealths',
  params: ['positions', 'healths', 'directions'],
  starterCode: {
    javascript: `function survivedRobotsHealths(positions, healths, directions) {
  // Sort by position. Use a stack of right-moving robots.
  // When a left-mover arrives, resolve collisions with the stack.
  // Return surviving healths in original order.
}`,
    typescript: "function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {\n  // Sort by position. Use a stack of right-moving robots.\n  // When a left-mover arrives, resolve collisions with the stack.\n  // Return surviving healths in original order.\n}",

    python: `def survivedRobotsHealths(positions, healths, directions):
    # Sort by position. Use a stack of right-moving robots.
    # When a left-mover arrives, resolve collisions with the stack.
    # Return surviving healths in original order.
    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR'], expected: [2, 17, 9, 15, 10] },
    { args: [[3, 5, 2, 6], [10, 10, 15, 12], 'RLRL'], expected: [14] },
    { args: [[1, 2, 5, 6], [10, 10, 11, 11], 'RRLL'], expected: [11] },
  ],
  hiddenTests: [
    { args: [[1], [5], 'R'], expected: [5] },
    { args: [[1, 2], [1, 1], 'RL'], expected: [] },
    { args: [[1, 2], [1, 2], 'RL'], expected: [1] },
    { args: [[1, 2], [2, 1], 'RL'], expected: [1] },
    { args: [[1, 2, 3], [3, 1, 2], 'RLL'], expected: [] },
  ],
};
