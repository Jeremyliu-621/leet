import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-fruits-harvested-after-at-most-k-steps',
  title: 'Maximum Fruits Harvested After at Most K Steps',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `Fruits are falling from different positions on an infinite horizontal number line. You are given a 2D integer array \`fruits\` where \`fruits[i] = [position_i, amount_i]\` depicts \`amount_i\` fruits at position \`position_i\`. \`fruits\` is already **sorted** by \`position_i\` in **ascending** order, and each \`position_i\` is **unique**.

You are also given two integers \`startPos\` and \`k\`. Initially, you are at position \`startPos\` on the number line. From any position, you can either walk to the **left** or **right** by one step. You can move at most \`k\` steps in total.

You must collect fruits at any position you walk past or stop at. After taking at most \`k\` steps, you stop and collect all remaining fruits at your current position.

Return the **maximum** total fruits you can collect.`,
  constraints: [
    '1 <= fruits.length <= 10^5',
    'fruits[i].length == 2',
    '0 <= startPos <= 2 * 10^5',
    '0 <= position_i <= 2 * 10^5',
    'position_i-1 < position_i',
    '1 <= amount_i <= 10^4',
    '0 <= k <= 2 * 10^5',
  ],
  examples: [
    {
      input: 'fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4',
      output: '9',
      explanation: 'Go right to position 8 (3 steps), collecting fruits at 6 and 8: 3+6=9.',
    },
    {
      input: 'fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4',
      output: '14',
      explanation: 'Go left 1 step to 4, then right 3 steps to 7, collecting 1+7+2+4=14.',
    },
    {
      input: 'fruits = [[1,2],[3,5],[5,3],[7,4]], startPos = 4, k = 3',
      output: '8',
      explanation: 'Go left 1 step to 3, then right 2 steps to 5, collecting 5+3=8.',
    },
  ],
  hints: [
    'Use a sliding window over the sorted positions. A window [L, R] is reachable if you go one direction then the other.',
    'Steps for window [L, R] from startPos (when L ≤ startPos ≤ R): min(2*(R-startPos)+(startPos-L), 2*(startPos-L)+(R-startPos)).',
    'Use prefix sums to compute range sums efficiently.',
  ],
  functionName: 'maxTotalFruits',
  params: ['fruits', 'startPos', 'k'],
  starterCode: {
    javascript: 'function maxTotalFruits(fruits, startPos, k) {\n  \n}\n',
    typescript: "function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {\n  \n}",

    python: 'def maxTotalFruits(fruits, startPos, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 8], [6, 3], [8, 6]], 5, 4], expected: 9 },
    { args: [[[0, 9], [4, 1], [5, 7], [6, 2], [7, 4], [10, 9]], 5, 4], expected: 14 },
    { args: [[[1, 2], [3, 5], [5, 3], [7, 4]], 4, 3], expected: 8 },
  ],
  hiddenTests: [
    { args: [[[0, 1]], 0, 0], expected: 1 },
    { args: [[[3, 4]], 0, 2], expected: 0 },
    { args: [[[0, 5], [10, 5]], 5, 5], expected: 5 },
    { args: [[[0, 3], [6, 4], [8, 5]], 5, 4], expected: 9 },
    { args: [[[1, 5], [2, 5]], 3, 2], expected: 10 },
  ],
};
