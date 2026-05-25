import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-triangulation-of-polygon',
  title: 'Minimum Score Triangulation of Polygon',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You have a convex polygon with \`n\` vertices. Each vertex has an integer value \`values[i]\`. Triangulate the polygon (divide into \`n-2\` triangles). The score of a triangulation is the sum of the products of the three vertex values of each triangle. Return the minimum score.

**Interval DP:** \`dp[i][j]\` = min score to triangulate the polygon from vertex \`i\` to \`j\`. For each "top vertex" \`k\` between \`i\` and \`j\`: \`dp[i][j] = min(dp[i][k] + dp[k][j] + values[i]*values[k]*values[j])\`.`,
  constraints: [
    '3 <= n <= 50',
    '1 <= values[i] <= 100',
  ],
  examples: [
    {
      input: 'values = [1,2,3]',
      output: '6',
      explanation: '1*2*3=6',
    },
    {
      input: 'values = [3,7,4,5]',
      output: '144',
    },
    {
      input: 'values = [1,3,1,4,1,5]',
      output: '13',
    },
  ],
  hints: [
    'dp[i][j] = min score for sub-polygon from vertex i to vertex j.',
    'For each vertex k (i < k < j): triangle (i,k,j) has score values[i]*values[k]*values[j].',
    'dp[i][j] = min over k of dp[i][k] + dp[k][j] + values[i]*values[k]*values[j]. Base: dp[i][i+1] = 0.',
  ],
  functionName: 'minScoreTriangulation',
  params: ['values'],
  starterCode: {
    javascript: 'function minScoreTriangulation(values) {\n\n}\n',
    python: 'def minScoreTriangulation(values: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 7, 4, 5]], expected: 144 },
    { args: [[1, 3, 1, 4, 1, 5]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 38 },
    { args: [[2, 3, 4]], expected: 24 },
    { args: [[1, 1, 1, 1]], expected: 2 },
  ],
};
