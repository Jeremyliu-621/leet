import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-arrows-to-burst-balloons',
  title: 'Minimum Number of Arrows to Burst Balloons',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array \`points\` where \`points[i] = [x_start, x_end]\` denotes a balloon whose **horizontal diameter** stretches between \`x_start\` and \`x_end\`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with \`x_start\` and \`x_end\` is **burst** by an arrow shot at \`x\` if \`x_start <= x <= x_end\`.

Given the array \`points\`, return the **minimum** number of arrows that must be shot to burst all balloons.`,
  constraints: [
    '1 <= points.length <= 10^5',
    'points[i].length == 2',
    '-2^31 <= x_start < x_end <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'points = [[10,16],[2,8],[1,6],[7,12]]',
      output: '2',
      explanation: 'Arrow at x=6 bursts [2,8] and [1,6]. Arrow at x=11 bursts [10,16] and [7,12].',
    },
    {
      input: 'points = [[1,2],[3,4],[5,6],[7,8]]',
      output: '4',
    },
  ],
  hints: [
    'Sort balloons by their ending x-coordinate.',
    'Greedily shoot an arrow at each balloon\'s end when it would miss the current arrow.',
    `\`\`\`js
function findMinArrowShots(points) {
  points.sort((a,b)=>a[1]-b[1]);
  let arrows=1,end=points[0][1];
  for(let i=1;i<points.length;i++){
    if(points[i][0]>end){arrows++;end=points[i][1];}
  }
  return arrows;
}\`\`\``,
  ],
  functionName: 'findMinArrowShots',
  params: ['points'],
  starterCode: {
    javascript: 'function findMinArrowShots(points) {\n\n}\n',
    python: 'def findMinArrowShots(points):\n    pass\n',
  },
  visibleTests: [
    { args: [[[10,16],[2,8],[1,6],[7,12]]], expected: 2 },
    { args: [[[1,2],[3,4],[5,6],[7,8]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1,2],[2,3],[3,4],[4,5]]], expected: 2 },
    { args: [[[1,10]]], expected: 1 },
    { args: [[[1,2],[1,2],[1,2]]], expected: 1 },
    { args: [[[1,3],[2,4],[3,5]]], expected: 1 },
  ],
};
