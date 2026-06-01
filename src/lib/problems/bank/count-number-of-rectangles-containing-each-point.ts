import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-rectangles-containing-each-point',
  title: 'Count Number of Rectangles Containing Each Point',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [li, hi]\` indicates that the \`i\`th rectangle has a length of \`li\` and a height of \`hi\`. You are also given a 2D integer array \`points\` where \`points[j] = [xj, yj]\`.

Each rectangle \`i\` covers the region \`(0, 0)\` to \`(li, hi)\` on the 2D plane (i.e., a point \`(xj, yj)\` is inside if \`xj <= li\` and \`yj <= hi\`).

Return an integer array \`count\` of length \`points.length\` where \`count[j]\` is the number of rectangles that contain the \`j\`th point.

Points that lie on the **edges** of a rectangle are counted.`,
  constraints: [
    '1 <= rectangles.length, points.length <= 5 * 10^4',
    'rectangles[i].length == points[j].length == 2',
    '1 <= li, xj <= 10^9',
    '1 <= hi, yj <= 100',
  ],
  examples: [
    {
      input: 'rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]',
      output: '[2,1]',
      explanation: 'Point [2,1]: covered by [2,3] and [2,5] (both have l>=2 and h>=1). Point [1,4]: only [2,5] has h>=4.',
    },
    {
      input: 'rectangles = [[1,1],[2,2],[3,3]], points = [[1,1],[2,2],[3,3]]',
      output: '[3,2,1]',
    },
  ],
  hints: [
    'Height values are bounded to [1, 100], so you can bucket rectangles by height.',
    'For each height h, store a sorted array of l-values. For a query point (x, y), count l-values >= x in all height buckets h >= y.',
    'Binary search in each sorted bucket: count = bucket.length - bisect_left(bucket, x).',
  ],
  functionName: 'countRectangles',
  params: ['rectangles', 'points'],
  starterCode: {
    javascript: 'function countRectangles(rectangles, points) {\n  \n}\n',
    typescript: 'function countRectangles(rectangles: number[][], points: number[][]): number[] {\n  \n}',
    python: 'def countRectangles(rectangles, points):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [2, 5]], [[2, 1], [1, 4]]], expected: [2, 1] },
    { args: [[[1, 1], [2, 2], [3, 3]], [[1, 1], [2, 2], [3, 3]]], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[[1, 2]], [[1, 1], [2, 1], [1, 3]]], expected: [1, 0, 0] },
    { args: [[[5, 3], [3, 5], [5, 5]], [[3, 3], [5, 3], [4, 4]]], expected: [3, 2, 1] },
    { args: [[[1, 2], [3, 1]], [[2, 1], [1, 2]]], expected: [1, 1] },
  ],
};
