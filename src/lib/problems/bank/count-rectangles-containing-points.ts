import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-rectangles-containing-points',
  title: 'Count Number of Rectangles Containing Each Point',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [li, hi]\` represents an axis-aligned rectangle with its lower-left corner at the origin \`(0, 0)\`, width \`li\`, and height \`hi\`.

You are given a 2D integer array \`points\` where \`points[j] = [xj, yj]\`.

A rectangle \`i\` **contains** point \`j\` if \`0 <= xj <= li\` and \`0 <= yj <= hi\`.

Return an integer array \`count\` of length \`points.length\` where \`count[j]\` equals the number of rectangles that contain \`points[j]\`.`,
  constraints: [
    '`1 <= rectangles.length, points.length <= 500`',
    '`rectangles[i].length == points[j].length == 2`',
    '`1 <= li, xj <= 10^9`',
    '`1 <= hi, yj <= 100`',
  ],
  examples: [
    {
      input: 'rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]',
      output: '[2,1]',
      explanation:
        'Point (2,1): rectangles [2,3] and [2,5] contain it (2<=2 and 1<=3; 2<=2 and 1<=5). Count=2. Point (1,4): only [2,5] contains it (1<=2 and 4<=5). Count=1.',
    },
    {
      input: 'rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]',
      output: '[1,3]',
      explanation:
        'Point (1,3): only [3,3] contains it. Count=1. Point (1,1): all three rectangles contain it. Count=3.',
    },
    {
      input: 'rectangles = [[1,1]], points = [[1,1]]',
      output: '[1]',
    },
  ],
  hints: [
    'For each point `(x, y)`, iterate over all rectangles and check if `x <= l` and `y <= h`.',
    'With `n, m <= 500`, an O(n×m) nested loop works comfortably within time limits.',
    '`return points.map(([x, y]) => rectangles.filter(([l, h]) => x <= l && y <= h).length);`',
  ],
  functionName: 'countRectangles',
  params: ['rectangles', 'points'],
  starterCode: {
    javascript: `function countRectangles(rectangles, points) {

}`,
    typescript: 'function countRectangles(rectangles: number[][], points: number[][]): number[] {\n\n}',
    python: `def countRectangles(rectangles, points):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 2], [2, 3], [2, 5]], [[2, 1], [1, 4]]],
      expected: [2, 1],
    },
    {
      args: [[[1, 1], [2, 2], [3, 3]], [[1, 3], [1, 1]]],
      expected: [1, 3],
    },
    {
      args: [[[1, 1]], [[1, 1]]],
      expected: [1],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 1]], [[2, 1]]],
      expected: [0],
    },
    {
      args: [[[5, 5]], [[5, 5]]],
      expected: [1],
    },
    {
      args: [[[1, 1], [1, 1]], [[1, 1]]],
      expected: [2],
    },
    {
      args: [[[3, 2], [1, 4]], [[2, 2], [1, 3]]],
      expected: [1, 1],
    },
    {
      args: [[[10, 10]], [[5, 5], [10, 10], [11, 10]]],
      expected: [1, 1, 0],
    },
  ],
};
