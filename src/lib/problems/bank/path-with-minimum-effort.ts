import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-with-minimum-effort',
  title: 'Path With Minimum Effort',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are a hiker preparing for an upcoming hike. You are given \`heights\`, a 2D array of size \`rows x columns\`, where \`heights[row][col]\` represents the height of cell \`(row, col)\`.

You are situated in the top-left cell, \`(0, 0)\`, and you hope to travel to the bottom-right cell, \`(rows-1, columns-1)\` (i.e., **0-indexed**). You can move **up, down, left, or right**, and you wish to find a route that requires the minimum **effort**.

A route's **effort** is the **maximum absolute difference** in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.`,
  constraints: [
    'rows == heights.length',
    'columns == heights[i].length',
    '1 <= rows, columns <= 100',
    '1 <= heights[i][j] <= 10^6',
  ],
  examples: [
    {
      input: 'heights = [[1,2,2],[3,8,2],[5,3,5]]',
      output: '2',
      explanation: 'The route [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.',
    },
    {
      input: 'heights = [[1,2,3],[3,8,4],[5,3,5]]',
      output: '1',
      explanation: 'The route [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells.',
    },
    {
      input: 'heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]',
      output: '0',
      explanation: 'This route does not require any effort.',
    },
  ],
  hints: [
    'Think of it as a shortest-path problem where the "distance" is the maximum height difference along the path.',
    'Use a modified Dijkstra where `dist[r][c]` = minimum possible max-effort to reach `(r,c)`. Use a min-heap ordered by effort.',
    'For each neighbor, the new effort is `max(current_effort, |heights[r][c] - heights[nr][nc]|)`.',
  ],
  functionName: 'minimumEffortPath',
  params: ['heights'],
  starterCode: {
    javascript: 'function minimumEffortPath(heights) {\n\n}\n',
    python: 'def minimumEffortPath(heights):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2,2],[3,8,2],[5,3,5]]], expected: 2 },
    { args: [[[1,2,3],[3,8,4],[5,3,5]]], expected: 1 },
    { args: [[[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1,2],[3,4]]], expected: 2 },
    { args: [[[1,1000000]]], expected: 999999 },
    { args: [[[3,1],[2,4],[1,5]]], expected: 2 },
  ],
};
