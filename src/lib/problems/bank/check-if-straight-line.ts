import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-straight-line',
  title: 'Check If It Is a Straight Line',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array \`coordinates\`, \`coordinates[i] = [x, y]\`, where \`[x, y]\` represents the coordinate of a point. Check if these points make a straight line in the XY plane.`,
  constraints: [
    '2 <= coordinates.length <= 1000',
    'coordinates[i].length == 2',
    '-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4',
    'coordinates contains no duplicate point.',
  ],
  examples: [
    { input: 'coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]', output: 'true' },
    { input: 'coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]', output: 'false' },
  ],
  hints: [
    'Level 1: Pick the first two points to get the slope. Check that every subsequent point has the same slope.',
    'Level 2: Use cross-product to avoid division: (y2-y1)*(x-x1) == (y-y1)*(x2-x1).',
    'Level 3: const[x1,y1]=c[0],[x2,y2]=c[1];return c.every(([x,y])=>(y2-y1)*(x-x1)===(y-y1)*(x2-x1));',
  ],
  functionName: 'checkStraightLine',
  params: ['coordinates'],
  starterCode: {
    javascript: 'function checkStraightLine(coordinates) {\n  // your code here\n}\n',
    python: 'def checkStraightLine(coordinates):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]], expected: true },
    { args: [[[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 0], [2, 0]]], expected: true },
    { args: [[[0, 0], [0, 1], [0, 2]]], expected: true },
    { args: [[[0, 0], [1, 1]]], expected: true },
    { args: [[[0, 0], [2, 4], [4, 8]]], expected: true },
    { args: [[[-4, -3], [1, 0], [3, -1], [-5, 2], [-2, 1]]], expected: false },
  ],
};
