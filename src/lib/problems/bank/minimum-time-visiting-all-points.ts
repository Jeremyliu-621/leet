import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-visiting-all-points',
  title: 'Minimum Time Visiting All Points',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `On a 2D plane, there are \`n\` points with integer coordinates \`points[i] = [xi, yi]\`. Return the **minimum time** in seconds to visit all the points in the order given by \`points\`.

You can move according to these rules:
- In \`1\` second, you can either move vertically by one unit, move horizontally by one unit, or move diagonally (i.e., move one unit vertically then one unit horizontally in \`1\` second).
- You have to visit the points in the same order as they appear in the array.
- You are allowed to pass through points that appear later in the order.`,
  constraints: [
    '`points.length == n`',
    '`1 <= n <= 100`',
    '`points[i].length == 2`',
    '`-1000 <= points[i][0], points[i][1] <= 1000`',
  ],
  examples: [
    {
      input: 'points = [[1,1],[3,4],[-1,0]]',
      output: '7',
      explanation: 'One optimal path: (1,1)→(2,2)→(3,3)→(3,4): 3s. (3,4)→(2,3)→(1,2)→(0,1)→(-1,0): 4s. Total: 7s.',
    },
    {
      input: 'points = [[3,2],[-2,2]]',
      output: '5',
    },
  ],
  hints: [
    'The minimum time to go from point A to point B is max(|A.x - B.x|, |A.y - B.y|) because diagonal movement lets you cover both axes simultaneously.',
    "Sum up the step costs between consecutive point pairs. For each pair, the cost is Math.max(Math.abs(x2-x1), Math.abs(y2-y1)).",
    'let t=0;for(let i=1;i<points.length;i++)t+=Math.max(Math.abs(points[i][0]-points[i-1][0]),Math.abs(points[i][1]-points[i-1][1]));return t;',
  ],
  functionName: 'minTimeToVisitAllPoints',
  params: ['points'],
  starterCode: {
    javascript: 'function minTimeToVisitAllPoints(points) {\n  \n}\n',
    typescript: "function minTimeToVisitAllPoints(points: number[][]): number {\n  \n}",

    python: 'def minTimeToVisitAllPoints(points):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1], [3, 4], [-1, 0]]], expected: 7 },
    { args: [[[3, 2], [-2, 2]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 0 },
    { args: [[[0, 0], [1, 1]]], expected: 1 },
    { args: [[[0, 0], [5, 0]]], expected: 5 },
    { args: [[[0, 0], [0, 5]]], expected: 5 },
    { args: [[[-500, -500], [500, 500]]], expected: 1000 },
  ],
};
