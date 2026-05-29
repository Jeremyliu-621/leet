import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-rectangles-containing-each-point',
  title: 'Count Number of Rectangles Containing Each Point',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [l_i, h_i]\` indicates that \`i\`th rectangle has length \`l_i\` and height \`h_i\`.

You are also given a 2D integer array \`points\` where \`points[j] = [x_j, y_j]\` is a point.

The \`i\`th rectangle has its **bottom-left corner** at the origin \`(0, 0)\` and its **top-right corner** at \`(l_i, h_i)\`.

Return an integer array \`count\` of length \`points.length\` where \`count[j]\` is the number of rectangles that contain the \`j\`th point.

The \`i\`th rectangle **contains** the \`j\`th point if \`0 <= x_j <= l_i\` and \`0 <= y_j <= h_i\`.`,
  constraints: [
    '`1 <= rectangles.length, points.length <= 5 * 10^4`',
    '`rectangles[i].length == points[j].length == 2`',
    '`1 <= l_i, x_j <= 10^9`',
    '`1 <= h_i, y_j <= 100`',
  ],
  examples: [
    {
      input: 'rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]',
      output: '[1,3]',
      explanation: 'Point (1,3) is only inside [3,3]. Point (1,1) is inside all three rectangles.',
    },
    {
      input: 'rectangles = [[1,2],[2,3],[2,2]], points = [[2,1],[1,3]]',
      output: '[2,1]',
      explanation: 'Point (2,1) is inside [2,3] and [2,2]. Point (1,3) is only inside [2,3].',
    },
  ],
  hints: [
    'Since h_i and y_j are both at most 100, group rectangles by height and iterate heights ≥ y for each point.',
    'Sort each height bucket\'s widths. For a query (x, y), binary-search each bucket for heights ≥ y to count widths ≥ x in O(log n).',
    '```js\nfunction countRectangles(rectangles, points) {\n  const byH = Array.from({length: 101}, () => []);\n  for (const [l, h] of rectangles) byH[h].push(l);\n  for (let h = 0; h <= 100; h++) byH[h].sort((a, b) => a - b);\n  return points.map(([x, y]) => {\n    let cnt = 0;\n    for (let h = y; h <= 100; h++) {\n      const w = byH[h];\n      let lo = 0, hi = w.length;\n      while (lo < hi) { const m = (lo + hi) >> 1; if (w[m] >= x) hi = m; else lo = m + 1; }\n      cnt += w.length - lo;\n    }\n    return cnt;\n  });\n}\n```',
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
    { args: [[[1, 1], [2, 2], [3, 3]], [[1, 3], [1, 1]]], expected: [1, 3] },
    { args: [[[1, 2], [2, 3], [2, 2]], [[2, 1], [1, 3]]], expected: [2, 1] },
  ],
  hiddenTests: [
    { args: [[[1, 1]], [[0, 0]]], expected: [1] },
    { args: [[[1, 1]], [[1, 1]]], expected: [1] },
    { args: [[[1, 1]], [[2, 2]]], expected: [0] },
    { args: [[[5, 5], [3, 3]], [[3, 3]]], expected: [2] },
    { args: [[[1, 3], [3, 1]], [[2, 2]]], expected: [0] },
    { args: [[[2, 2]], [[1, 1], [2, 2], [2, 3]]], expected: [1, 1, 0] },
  ],
};
