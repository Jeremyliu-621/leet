import type { Problem } from '../types';

export const problem: Problem = {
  id: 'increment-submatrices-by-one',
  title: 'Increment Submatrices by One',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a positive integer \`n\`, indicating that we initially have an \`n × n\` **0-indexed** integer matrix \`mat\` filled with zeroes.

You are also given a 2D integer array \`query\`. For each \`query[i] = [row1, col1, row2, col2]\`, you should increment all the elements in the submatrix with the **top left** corner \`(row1, col1)\` and the **bottom right** corner \`(row2, col2)\` by **1**.

Return the matrix \`mat\` after performing all of the queries.`,
  constraints: [
    '1 <= n <= 500',
    '1 <= queries.length <= 500',
    'queries[i].length == 4',
    '0 <= row1 <= row2 < n',
    '0 <= col1 <= col2 < n',
  ],
  examples: [
    {
      input: 'n = 3, queries = [[1,1,2,2],[0,0,1,1]]',
      output: '[[1,1,0],[1,2,1],[0,1,1]]',
      explanation: 'After query [1,1,2,2]: rows 1-2, cols 1-2 incremented. After query [0,0,1,1]: rows 0-1, cols 0-1 incremented.',
    },
    {
      input: 'n = 2, queries = [[0,0,1,1]]',
      output: '[[1,1],[1,1]]',
      explanation: 'The entire 2×2 matrix is incremented by 1.',
    },
  ],
  hints: [
    'For each row, use a 1D difference array to efficiently apply column range updates.',
    'For each query, mark the start/end of the column range using +1/-1 in the difference array.',
    'After applying all queries in a row\'s difference array, compute prefix sums to get the final values.',
    'Alternatively, use a 2D difference array: d[r1][c1]++, d[r1][c2+1]--, d[r2+1][c1]--, d[r2+1][c2+1]++. Then compute 2D prefix sums.',
  ],
  functionName: 'rangeAddQueries',
  params: ['n', 'queries'],
  starterCode: {
    javascript: 'function rangeAddQueries(n, queries) {\n  \n}\n',
    typescript: "function rangeAddQueries(n: number, queries: number[][]): number[][] {\n  \n}",

    python: 'def rangeAddQueries(n, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[1,1,2,2],[0,0,1,1]]], expected: [[1,1,0],[1,2,1],[0,1,1]] },
    { args: [2, [[0,0,1,1]]], expected: [[1,1],[1,1]] },
    { args: [1, [[0,0,0,0]]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [3, []], expected: [[0,0,0],[0,0,0],[0,0,0]] },
    { args: [2, [[0,0,0,0],[1,1,1,1]]], expected: [[1,0],[0,1]] },
    { args: [3, [[0,0,2,2],[1,1,1,1]]], expected: [[1,1,1],[1,2,1],[1,1,1]] },
    { args: [2, [[0,0,1,0],[0,0,1,0]]], expected: [[2,0],[2,0]] },
  ],
};
