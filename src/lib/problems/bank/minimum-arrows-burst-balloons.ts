import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-arrows-burst-balloons',
  title: 'Minimum Number of Arrows to Burst Balloons',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array \`points\` where \`points[i] = [xstart, xend]\` denotes a balloon whose **horizontal diameter** stretches between \`xstart\` and \`xend\`.

Arrows can be shot up vertically (in the positive y-direction) from different points along the x-axis. A balloon with \`xstart\` and \`xend\` is **burst** by an arrow shot at \`x\` if \`xstart <= x <= xend\`.

Return the **minimum** number of arrows that must be shot to burst all balloons.`,
  constraints: [
    '1 <= points.length <= 10^5',
    'points[i].length == 2',
    '-2^31 <= xstart < xend <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'points = [[10,16],[2,8],[1,6],[7,12]]',
      output: '2',
      explanation: 'Shoot at x=6 to burst [1,6] and [2,8]. Shoot at x=11 to burst [7,12] and [10,16].',
    },
    {
      input: 'points = [[1,2],[3,4],[5,6],[7,8]]',
      output: '4',
      explanation: 'No two balloons overlap, so four arrows are required.',
    },
    {
      input: 'points = [[1,2],[2,3],[3,4],[4,5]]',
      output: '2',
      explanation: 'Shoot at x=2 to burst [1,2],[2,3]. Shoot at x=4 to burst [3,4],[4,5].',
    },
  ],
  hints: [
    'Sort balloons by their end coordinate.',
    'Greedily shoot an arrow at the end of the first unbursted balloon. This always bursts the maximum number of overlapping balloons.',
    'Count how many times you need to place a new arrow (when the next balloon starts after the current arrow position).',
  ],
  functionName: 'findMinArrowShots',
  params: ['points'],
  starterCode: {
    javascript: `function findMinArrowShots(points) {

}`,
    typescript: "function findMinArrowShots(points: number[][]): number {\n\n}",

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
    { args: [[[1, 2], [1, 2], [1, 2]]], expected: 1 },
    { args: [[[1, 10], [2, 8], [3, 7], [5, 9]]], expected: 1 },
    { args: [[[9, 12], [1, 10], [4, 11], [8, 12]]], expected: 1 },
    { args: [[[1, 10], [2, 3], [4, 5], [6, 7], [8, 9]]], expected: 4 },
    { args: [[[9, 12], [1, 10], [4, 11], [8, 12], [3, 9], [6, 9], [6, 7]]], expected: 2 },
  ],
};
