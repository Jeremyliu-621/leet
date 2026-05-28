import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-triangulation',
  title: 'Minimum Score Triangulation of Polygon',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have a convex polygon with \`n\` vertices. The vertices are labeled from \`0\` to \`n - 1\` in **clockwise order**, and each vertex has a value \`values[i]\`.

You will **triangulate** the polygon into \`n - 2\` triangles. For each triangle, its **score** is the product of its three vertex values. The **total score** is the sum of all triangle scores.

Return the **minimum total score** for any valid triangulation of the polygon.`,
  constraints: [
    '3 <= values.length <= 50',
    '1 <= values[i] <= 100',
  ],
  examples: [
    {
      input: 'values = [1,2,3]',
      output: '6',
      explanation: 'Only one triangle possible: 1×2×3 = 6.',
    },
    {
      input: 'values = [3,7,4,5]',
      output: '144',
      explanation: 'Two triangulations: (3,7,4,5): triangle (3,7,4)+(3,4,5)=84+60=144 or (3,7,5)+(7,4,5)=105+140=245. Minimum is 144.',
    },
    {
      input: 'values = [1,3,1,4,1,5]',
      output: '13',
      explanation: 'Optimal triangulation yields score 13.',
    },
  ],
  hints: [
    'Use interval DP. Let `dp[i][j]` = minimum score to triangulate the sub-polygon from vertex `i` to vertex `j`.',
    'For each interval `[i, j]`, try every vertex `k` in `(i, j)` as the apex of a triangle with edge `(i, j)`. The score is `values[i] * values[k] * values[j] + dp[i][k] + dp[k][j]`.',
    'Base case: `dp[i][j] = 0` when `j - i < 2` (no triangle possible). Fill the DP table for increasing interval lengths.',
  ],
  functionName: 'minScoreTriangulation',
  params: ['values'],
  starterCode: {
    javascript: `function minScoreTriangulation(values) {

}`,
    python: `def minScoreTriangulation(values: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 7, 4, 5]], expected: 144 },
    { args: [[1, 3, 1, 4, 1, 5]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[2, 2, 2, 2]], expected: 16 },
    { args: [[1, 2, 1, 2, 1]], expected: 5 },
    { args: [[7, 5, 3, 2, 4]], expected: 156 },
    { args: [[1, 100, 1, 100, 1]], expected: 201 },
  ],
};
