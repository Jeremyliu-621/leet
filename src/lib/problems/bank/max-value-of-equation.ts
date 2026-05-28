import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-value-of-equation',
  title: 'Max Value of Equation',
  difficulty: 'hard',
  tags: ['heap', 'sliding-window'],
  description: `You are given an array \`points\` containing the coordinates of points on a 2D plane, sorted by the x-values, where \`points[i] = [xi, yi]\` such that \`xi < xj\` for all \`1 <= i < j <= points.length\`. You are also given an integer \`k\`.

Return the **maximum value** of the equation \`yi + yj + |xi - xj|\` where \`|xi - xj| <= k\` and \`1 <= i < j <= points.length\`.

It is guaranteed that there exists at least one pair of points that satisfy the constraint.

**Rewrite:** Since \`j > i\`, \`|xi - xj| = xj - xi\`. So maximize \`(yi - xi) + (yj + xj)\`. Use a monotone deque: maintain values of \`yi - xi\` for points within distance \`k\` to the left of \`j\`.`,
  constraints: [
    '2 <= points.length <= 100000',
    'points[i].length == 2',
    '-10^8 <= xi, yi <= 10^8',
    '0 < k <= 2 * 10^8',
    'xi < xj for all i < j',
  ],
  examples: [
    {
      input: 'points = [[1,3],[2,0],[5,10],[6,-10]], k = 1',
      output: '4',
      explanation: 'Pair (1,3) and (2,0): 3+0+|1-2|=4. The pair (5,10) and (6,-10): 10+(-10)+1=1. Max=4.',
    },
    {
      input: 'points = [[0,0],[3,0],[9,2]], k = 3',
      output: '3',
      explanation: 'Pair (0,0) and (3,0): 0+0+3=3. Valid since 3<=3.',
    },
  ],
  hints: [
    'Rewrite: since j > i, yi + yj + xj - xi = (yj + xj) + (yi - xi). For each j, maximize yi-xi over all i where xj - xi <= k.',
    'Use a monotone deque (decreasing order of yi-xi). For each j, pop elements from the front where xj - xi > k.',
    'The deque front gives the maximum yi-xi. Update answer with deque.front + yj + xj. Then add the current point\'s yi-xi to the back (maintaining decreasing order).',
  ],
  functionName: 'findMaxValueOfEquation',
  params: ['points', 'k'],
  starterCode: {
    javascript: 'function findMaxValueOfEquation(points, k) {\n\n}\n',
    typescript: "function findMaxValueOfEquation(points: number[][], k: number): number {\n\n}",

    python: 'def findMaxValueOfEquation(points: list, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,3],[2,0],[5,10],[6,-10]], 1], expected: 4 },
    { args: [[[0,0],[3,0],[9,2]], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[0,0],[1,1]], 1], expected: 2 },
    { args: [[[0,5],[1,5],[3,5]], 2], expected: 12 },
    { args: [[[0,0],[2,1],[3,3]], 3], expected: 6 },
    { args: [[[1,2],[3,5],[5,7]], 10], expected: 14 },
  ],
};
