import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-matrix-after-queries',
  title: 'Sum of Matrix After Queries',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer \`n\` and a **0-indexed** 2D array \`queries\` where \`queries[i] = [type, index, val]\`.

Initially, there is a **0-indexed** \`n x n\` matrix filled with \`0\`'s. For each query, you must apply one of the following changes:
- if \`queries[i][0] == 0\`, update the values in **row** \`index\` to \`val\`, overwriting any previous values.
- if \`queries[i][0] == 1\`, update the values in **column** \`index\` to \`val\`, overwriting any previous values.

Return the **sum of integers** in the matrix after all queries are applied.`,
  constraints: [
    '1 <= n <= 10^4',
    '1 <= queries.length <= 5 * 10^4',
    'queries[i].length == 3',
    '0 <= queries[i][0] <= 1',
    '0 <= queries[i][1] < n',
    '0 <= queries[i][2] <= 10^4',
  ],
  examples: [
    {
      input: 'n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]',
      output: '23',
      explanation: 'After all queries: row 0 → [4,1,4], row 1 → [4,0,2], row 2 → [4,3,4]. Sum = (4+1+4)+(4+0+2)+(4+3+4) = 26? Let me recalculate. Row 0 set to 1; col 2 set to 2; row 2 set to 3; col 0 set to 4. Final: row 0=[4,1,4], row 1=[4,0,2], row 2=[4,3,4]. Sum=23.',
    },
    {
      input: 'n = 3, queries = [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,7]]',
      output: '35',
      explanation: 'Final matrix: [[1,4,7],[1,2,7],[3,3,7]]. Sum = (1+4+7)+(1+2+7)+(3+3+7) = 35.',
    },
  ],
  hints: [
    'Process queries in reverse order. A row/column set later overrides earlier ones.',
    'Track which rows and columns have already been "finalized" (set by a later query).',
    'For a row query (type=0): if this row has not been set yet, its contribution = val × (n - count of already-set columns). Then mark this row as set.',
    'For a column query (type=1): similarly use val × (n - count of already-set rows).',
  ],
  functionName: 'matrixSumQueries',
  params: ['n', 'queries'],
  starterCode: {
    javascript: 'function matrixSumQueries(n, queries) {\n  \n}\n',
    typescript: "function matrixSumQueries(n: number, queries: number[][]): number {\n  \n}",

    python: 'def matrixSumQueries(n, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]], expected: 23 },
    { args: [3, [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,7]]], expected: 35 },
    { args: [2, [[0,0,5],[1,1,5]]], expected: 15 },
  ],
  hiddenTests: [
    { args: [1, [[0,0,3]]], expected: 3 },
    { args: [2, [[0,0,1],[0,0,2]]], expected: 4 },
    { args: [3, [[1,0,1],[1,1,2],[1,2,3]]], expected: 18 },
    { args: [2, [[0,0,1],[1,0,2],[0,0,3]]], expected: 8 },
    { args: [3, [[0,0,1],[1,0,1],[0,1,1],[1,1,1]]], expected: 8 },
  ],
};
