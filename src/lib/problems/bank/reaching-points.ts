import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reaching-points',
  title: 'Reaching Points',
  difficulty: 'hard',
  tags: ['math'],
  description: `Given four integers \`sx\`, \`sy\`, \`tx\`, \`ty\`, return \`true\` if it is possible to convert the point \`(sx, sy)\` to the point \`(tx, ty)\` through some sequence of operations, otherwise return \`false\`.

The allowed operation is: from some point \`(x, y)\`, you can move to either \`(x, x + y)\` or \`(x + y, y)\`.`,
  constraints: [
    '`1 <= sx, sy, tx, ty <= 10^9`',
  ],
  examples: [
    {
      input: 'sx = 1, sy = 1, tx = 3, ty = 5',
      output: 'true',
      explanation: '(1,1) → (1,2) → (3,2) → (3,5)',
    },
    {
      input: 'sx = 1, sy = 1, tx = 2, ty = 2',
      output: 'false',
      explanation: 'No sequence of moves reaches (2,2) from (1,1).',
    },
    {
      input: 'sx = 1, sy = 1, tx = 1, ty = 1',
      output: 'true',
      explanation: 'Already at the target.',
    },
  ],
  hints: [
    'Work backwards from (tx, ty) to (sx, sy). The inverse operation is: if tx > ty the previous state was (tx - ty, ty); if ty > tx the previous state was (tx, ty - tx).',
    'If tx > ty, then to get from some (x, ty) to (tx, ty) we needed tx ≡ sx (mod ty). Check if sx ≤ tx, ty == sy, and (tx - sx) % ty == 0.',
    'Use modulo to skip many subtraction steps at once: reduce tx via tx % ty when tx > ty (and vice versa), but be careful to stop before going below sx or sy.',
    'The key condition to stop: if tx == sx then ty must equal sy, or ty > sy with (ty - sy) % sx == 0.',
  ],
  functionName: 'reachingPoints',
  params: ['sx', 'sy', 'tx', 'ty'],
  starterCode: {
    javascript: `/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty) {

}`,
    typescript: `function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {

}`,
    python: `def reachingPoints(sx: int, sy: int, tx: int, ty: int) -> bool:
    `,
  },
  visibleTests: [
    { args: [1, 1, 3, 5], expected: true },
    { args: [1, 1, 2, 2], expected: false },
    { args: [1, 1, 1, 1], expected: true },
  ],
  hiddenTests: [
    { args: [1, 1, 2, 1], expected: true },
    { args: [3, 5, 15, 20], expected: false },
    { args: [9, 10, 9, 19], expected: true },
    { args: [1, 1, 1000000000, 1], expected: true },
    { args: [2, 3, 5, 3], expected: true },
  ],
};
