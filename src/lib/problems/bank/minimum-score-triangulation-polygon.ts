import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-triangulation-polygon',
  title: 'Minimum Score Triangulation of Polygon',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You have a convex polygon with \`n\` vertices labeled from \`0\` to \`n - 1\` in **clockwise** order. Each vertex has a value \`values[i]\`.

A **triangulation** of the polygon is a set of \`n - 2\` non-overlapping triangles formed by connecting pairs of non-adjacent vertices such that together they cover the entire polygon interior.

The **score** of a triangulation is the **sum of the products** of the values of the three vertices of each triangle.

Return the **minimum score** of a triangulation of the polygon.`,
  constraints: [
    'n == values.length',
    '3 <= n <= 50',
    '1 <= values[i] <= 100',
  ],
  examples: [
    {
      input: 'values = [1,2,3]',
      output: '6',
      explanation: 'The polygon has 3 vertices, so there is only one triangle: (0,1,2) with score 1*2*3 = 6.',
    },
    {
      input: 'values = [3,7,4,5]',
      output: '144',
      explanation: 'There are two triangulations. The one with minimum score uses triangles (0,1,2) and (0,2,3), giving 3*7*4 + 3*4*5 = 84 + 60 = 144.',
    },
  ],
  hints: [
    'This is a classic interval DP problem. Define dp[i][j] as the minimum score to triangulate the sub-polygon formed by vertices i, i+1, ..., j.',
    'Base case: dp[i][j] = 0 when j - i < 2 (fewer than 3 vertices, no triangle needed).',
    'Transition: dp[i][j] = min over k in (i+1, j-1) of dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]. Vertex k forms a triangle with the two endpoints i and j.',
  ],
  functionName: 'minScoreTriangulation',
  params: ['values'],
  starterCode: {
    javascript: 'function minScoreTriangulation(values) {\n  \n}\n',
    typescript: 'function minScoreTriangulation(values: number[]): number {\n  \n}',
    python: 'def minScoreTriangulation(values):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 7, 4, 5]], expected: 144 },
  ],
  hiddenTests: [
    { args: [[1, 3, 1, 4, 1, 5]], expected: 13 },
    { args: [[1, 2, 3, 4, 5]], expected: 38 },
    { args: [[2, 2, 2, 2]], expected: 16 },
    { args: [[1, 1, 1]], expected: 1 },
  ],
};
