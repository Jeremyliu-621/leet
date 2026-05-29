import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-rectangles-containing-each-point',
  title: 'Count Number of Rectangles Containing Each Point',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [li, hi]\` indicates the \`i\`-th rectangle with lower-left corner \`(0, 0)\` and upper-right corner \`(li, hi)\`.

You are also given a 2D integer array \`points\` where \`points[j] = [xj, yj]\` is a point.

The \`i\`-th rectangle **contains** the \`j\`-th point if \`0 <= xj <= li\` and \`0 <= yj <= hi\`. Points on the **boundary** of a rectangle are considered inside.

Return an integer array \`count\` of length \`points.length\` where \`count[j]\` is the number of rectangles that contain the \`j\`-th point.`,
  constraints: [
    '`1 <= rectangles.length, points.length <= 5 * 10^4`',
    '`rectangles[i].length == points[j].length == 2`',
    '`1 <= li, xj <= 10^9`',
    '`1 <= hi, yj <= 100`',
  ],
  examples: [
    {
      input: 'rectangles = [[1,2],[2,3],[2,2],[3,3]], points = [[2,2],[3,3],[1,1]]',
      output: '[3,1,4]',
      explanation: '(2,2): inside [2,3],[2,2],[3,3]. (3,3): inside only [3,3]. (1,1): inside all 4.',
    },
    {
      input: 'rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]',
      output: '[1,3]',
      explanation: '(1,3): only [3,3] (height ≥ 3, width ≥ 1). (1,1): all three rectangles.',
    },
  ],
  hints: [
    'Since heights are bounded by 100, group rectangles by height. For each group, sort widths.',
    'For each query point (x, y), iterate heights from y to 100. For each height, binary search the sorted width list to count widths ≥ x.',
    'Total complexity: O((n + q) × 100 × log n).',
  ],
  functionName: 'countRectangles',
  params: ['rectangles', 'points'],
  starterCode: {
    javascript: `function countRectangles(rectangles, points) {

}`,
    typescript: `function countRectangles(rectangles: number[][], points: number[][]): number[] {

}`,
    python: `def countRectangles(rectangles, points):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [2, 2], [3, 3]], [[2, 2], [3, 3], [1, 1]]], expected: [3, 1, 4] },
    { args: [[[1, 1], [2, 2], [3, 3]], [[1, 3], [1, 1]]], expected: [1, 3] },
  ],
  hiddenTests: [
    { args: [[[1, 1]], [[1, 1]]], expected: [1] },
    { args: [[[1, 1]], [[2, 1]]], expected: [0] },
    { args: [[[5, 5], [3, 3], [10, 1]], [[4, 4], [5, 5], [1, 1]]], expected: [1, 1, 3] },
    { args: [[[2, 2]], [[1, 1], [2, 2], [3, 3]]], expected: [1, 1, 0] },
    { args: [[[10, 10], [5, 3], [7, 7]], [[5, 5], [8, 3], [10, 10]]], expected: [2, 1, 1] },
  ],
};
