import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-area-rectangle',
  title: 'Minimum Area Rectangle',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of unique points in the plane, find the minimum area of a rectangle formed by any four of the points with sides **parallel to the axes**. Return \`0\` if no rectangle can be formed.

**Approach:** Store all points in a set. For each pair of points that could be a diagonal (different x AND different y), check if the other two corners also exist in the set.`,
  constraints: [
    '1 <= points.length <= 500',
    'All given points are unique',
    '0 <= xi, yi <= 40000',
  ],
  examples: [
    {
      input: 'points = [[1,1],[1,3],[3,1],[3,3],[2,2]]',
      output: '4',
      explanation: 'Rectangle with corners (1,1),(1,3),(3,1),(3,3) has area 4.',
    },
    {
      input: 'points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]',
      output: '2',
    },
    {
      input: 'points = [[1,1],[2,2],[3,3]]',
      output: '0',
    },
  ],
  hints: [
    'Store all points in a Set using key `"x,y"`. For any pair of points with different x AND different y, they could be opposite corners (a diagonal) of an axis-aligned rectangle.',
    'If (x1,y1) and (x2,y2) are a diagonal, the other two corners are (x1,y2) and (x2,y1). Check if both are in the set.',
    '```js\nconst set = new Set(points.map(([x,y]) => `${x},${y}`));\nlet min = Infinity;\nfor (let i = 0; i < points.length; i++) {\n  for (let j = i+1; j < points.length; j++) {\n    const [x1,y1] = points[i], [x2,y2] = points[j];\n    if (x1!==x2 && y1!==y2 &&\n        set.has(`${x1},${y2}`) && set.has(`${x2},${y1}`))\n      min = Math.min(min, Math.abs(x2-x1)*Math.abs(y2-y1));\n  }\n}\nreturn min===Infinity ? 0 : min;\n```',
  ],
  functionName: 'minAreaRect',
  params: ['points'],
  starterCode: {
    javascript: `function minAreaRect(points) {
  // points: array of [x, y] pairs
  // return the minimum area of any axis-aligned rectangle, or 0

}`,
    typescript: "function minAreaRect(points: number[][]): number {\n  // points: array of [x, y] pairs\n  // return the minimum area of any axis-aligned rectangle, or 0\n\n}",

    python: `def minAreaRect(points: list) -> int:
    # points: list of [x, y] pairs
    # return the minimum area of any axis-aligned rectangle, or 0
    pass
`,
  },
  visibleTests: [
    { args: [[[1,1],[1,3],[3,1],[3,3],[2,2]]], expected: 4 },
    { args: [[[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]], expected: 2 },
    { args: [[[1,1],[2,2],[3,3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0,0],[0,1],[1,0],[1,1]]], expected: 1 },
    { args: [[[0,0],[0,2],[2,0],[2,2]]], expected: 4 },
    { args: [[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]], expected: 2 },
    { args: [[[1,2],[2,1],[3,1],[1,3]]], expected: 0 },
    { args: [[[0,0],[1,0],[2,0],[3,0]]], expected: 0 },
  ],
};
