import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-triangulation-polygon',
  title: 'Minimum Score Triangulation of Polygon',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You have a convex polygon with \`n\` vertices labeled **0** through **n - 1**. The polygon is represented by an integer array \`values\` where \`values[i]\` is the value of the i-th vertex.

Triangulate the polygon by choosing \`n - 3\` diagonals. Each triangulation produces \`n - 2\` triangles. The **score** of a triangulation is the sum of the products of the values of the three vertices for every triangle in the triangulation.

Return the **minimum possible score** of any triangulation of the polygon.

**Example:** values = \`[3, 7, 4, 5]\`

One triangulation: triangles (0,1,2) and (0,2,3):
- Score = 3×7×4 + 3×4×5 = 84 + 60 = **144**

Another: triangles (0,1,3) and (1,2,3):
- Score = 3×7×5 + 7×4×5 = 105 + 140 = **245**

The minimum is **144**.`,
  constraints: [
    '3 <= n <= 50',
    '1 <= values[i] <= 100',
  ],
  examples: [
    {
      input: 'values = [1,2,3]',
      output: '6',
      explanation: 'There is only one triangle: vertices 0, 1, 2. Score = 1×2×3 = 6.',
    },
    {
      input: 'values = [3,7,4,5]',
      output: '144',
      explanation: 'Optimal: triangles (0,1,2) and (0,2,3) → 3×7×4 + 3×4×5 = 84 + 60 = 144.',
    },
    {
      input: 'values = [1,3,1,4,1,5]',
      output: '13',
      explanation: 'With many 1s, choose k = 1 or any vertex of value 1 as the middle of each triangle to minimize products.',
    },
  ],
  hints: [
    'Fix two vertices of a triangle; the third vertex partitions the polygon into three parts.',
    'Use interval DP: dp[i][j] = min triangulation cost for the sub-polygon from vertex i to vertex j (connected by a fixed edge i→j).',
    'For dp[i][j], try every k in (i, j) as the apex: dp[i][j] = min over k of (dp[i][k] + dp[k][j] + values[i]*values[k]*values[j]).',
  ],
  functionName: 'minScoreTriangulation',
  params: ['values'],
  starterCode: {
    javascript: `function minScoreTriangulation(values) {
  const n = values.length;
  const dp = Array.from({length: n}, () => new Array(n).fill(0));

}`,
    typescript: `function minScoreTriangulation(values: number[]): number {
  const n = values.length;
  const dp: number[][] = Array.from({length: n}, () => new Array<number>(n).fill(0));

}`,
    python: `def minScoreTriangulation(values):
    n = len(values)
    dp = [[0] * n for _ in range(n)]
`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 7, 4, 5]], expected: 144 },
    { args: [[1, 3, 1, 4, 1, 5]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[2, 2, 2, 2, 2]], expected: 24 },
    { args: [[1, 100, 1]], expected: 100 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 500 },
    { args: [[1, 2, 1, 2, 1]], expected: 5 },
    { args: [[3, 1, 2, 1, 3]], expected: 14 },
    { args: [[10, 10, 10]], expected: 1000 },
    { args: [[1, 1, 1, 1, 1, 1, 1]], expected: 5 },
  ],
};
