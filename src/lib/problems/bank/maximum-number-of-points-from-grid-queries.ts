import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-points-from-grid-queries',
  title: 'Maximum Number of Points From Grid Queries',
  difficulty: 'hard',
  tags: ['arrays', 'graph', 'heap'],
  description: `You are given an \`m x n\` integer matrix \`grid\` and an array \`queries\` of size \`k\`.

Find an array \`answer\` of size \`k\` such that for each query \`queries[i]\` you start in the **top-left** cell of the matrix and repeat the following process:

- If \`queries[i]\` is **strictly greater than** the value of the current cell you are in, collect one point and move to any adjacent cell (up, down, left, right).
- Otherwise, do not collect any point and end the process.

Return the answer array. Note that for each query you visit each cell at most once.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '2 <= m, n <= 1000',
    '4 <= m * n <= 10^5',
    'k == queries.length',
    '1 <= k <= 10^4',
    '1 <= grid[i][j], queries[i] <= 10^6',
  ],
  examples: [
    {
      input: 'grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]',
      output: '[5,8,1]',
      explanation: 'For query=5: collect cells where value<5: (0,0)=1,(0,1)=2,(1,0)=2,(2,0)=3 and (0,2)=3 via path. Total 5 reachable. For query=6: 8 cells. For query=2: only (0,0)=1.',
    },
    {
      input: 'grid = [[5,2,1],[1,1,2]], queries = [3]',
      output: '[0]',
      explanation: 'For query=3: start at (0,0)=5, 3 is not > 5, so collect 0 points.',
    },
  ],
  hints: [
    'Sort queries and process them in increasing order. Use an offline approach.',
    'Use a min-heap (priority queue) starting at cell (0,0). For each query threshold, pop all cells from the heap where the cell value is less than the threshold, expanding to neighbors.',
    'Each popped cell contributes 1 point. Map each result back to the original query index.',
  ],
  functionName: 'maxPoints',
  params: ['grid', 'queries'],
  starterCode: {
    javascript: 'function maxPoints(grid, queries) {\n\n}\n',
    python: 'def maxPoints(grid: list, queries: list) -> list:\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2,3],[2,5,7],[3,5,1]], [5,6,2]], expected: [5,8,1] },
    { args: [[[5,2,1],[1,1,2]], [3]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[[1,2],[3,4]], [2,5]], expected: [1,4] },
    { args: [[[1]], [2]], expected: [1] },
    { args: [[[1,1],[1,1]], [2]], expected: [4] },
  ],
};
