import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-arrows-burst-balloons',
  title: 'Minimum Number of Arrows to Burst Balloons',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array \`points\` where \`points[i] = [x_start, x_end]\` denotes a balloon whose horizontal diameter stretches between \`x_start\` and \`x_end\`.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with \`x_start\` and \`x_end\` is burst by an arrow shot at \`x\` if \`x_start <= x <= x_end\`. There is **no limit** to the number of arrows that can be shot.

Return the **minimum number of arrows** that must be shot to burst all balloons.`,
  constraints: [
    '`1 <= points.length <= 10^5`',
    '`-2^31 <= x_start < x_end <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'points = [[10,16],[2,8],[1,6],[7,12]]',
      output: '2',
      explanation: 'Shoot at x=6 to burst [1,6],[2,8]. Shoot at x=11 to burst [7,12],[10,16].',
    },
    {
      input: 'points = [[1,2],[3,4],[5,6],[7,8]]',
      output: '4',
      explanation: 'No two balloons overlap, so 4 arrows are required.',
    },
    {
      input: 'points = [[1,2],[2,3],[3,4],[4,5]]',
      output: '2',
      explanation: 'Shoot at x=2 to burst [1,2],[2,3]. Shoot at x=4 to burst [3,4],[4,5].',
    },
  ],
  hints: [
    'Sort balloons by their right endpoint. Greedily shoot at the rightmost point of the first balloon — this hits as many overlapping balloons as possible.',
    'After shooting, skip all balloons that the arrow hit. The next unpopped balloon requires a new arrow.',
  ],
  functionName: 'findMinArrowShots',
  params: ['points'],
  starterCode: {
    javascript: `function findMinArrowShots(points) {

}`,
    python: `def findMinArrowShots(points):
    pass`,
  },
  visibleTests: [
    { args: [[[10, 16], [2, 8], [1, 6], [7, 12]]], expected: 2 },
    { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expected: 4 },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[1, 10], [2, 3], [4, 5], [6, 7], [8, 9]]], expected: 4 },
    { args: [[[9, 12], [1, 10], [4, 11], [8, 12]]], expected: 1 },
    { args: [[[1, 2], [1, 2], [1, 2]]], expected: 1 },
  ],
};
