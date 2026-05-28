import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-with-minimum-effort',
  title: 'Path With Minimum Effort',
  difficulty: 'medium',
  tags: ['binary-search', 'graph'],
  description: `You are given an \`m x n\` integer matrix \`heights\` representing the height of each cell. A path goes from the top-left cell to the bottom-right cell. The **effort** of a path is the **maximum absolute difference** in heights between two consecutive cells. Return the minimum effort required to travel from top-left to bottom-right.`,
  constraints: [
    '`rows == heights.length`',
    '`columns == heights[i].length`',
    '`1 <= rows, columns <= 100`',
    '`1 <= heights[i][j] <= 10^6`',
  ],
  examples: [
    {
      input: 'heights = [[1,2,2],[3,8,2],[5,3,5]]',
      output: '2',
      explanation: 'Path [1,3,5,3,5]: max effort = max(|3-1|,|5-3|,|3-5|,|5-3|) = 2.',
    },
    {
      input: 'heights = [[1,2,3],[3,8,4],[5,3,5]]',
      output: '1',
      explanation: 'Path [1,2,3,4,5]: max effort = 1.',
    },
    {
      input: 'heights = [[1,2,1,1,1]]',
      output: '1',
      explanation: 'Best path crosses the 1→2 jump for effort 1.',
    },
  ],
  hints: [
    'Model as a weighted graph where edge weight is |h[r][c] - h[nr][nc]|. You want the path that minimizes the maximum edge weight.',
    'Use Dijkstra\'s algorithm with dist[r][c] = minimum effort to reach (r,c). Edge relaxation: new_effort = max(dist[r][c], edge_weight).',
    'Alternative: binary search on the answer (effort threshold), then BFS/DFS to check if a path exists using only edges with weight ≤ threshold.',
  ],
  functionName: 'minimumEffortPath',
  params: ['heights'],
  starterCode: {
    javascript: `function minimumEffortPath(heights) {

}`,
    typescript: "function minimumEffortPath(heights: number[][]): number {\n\n}",

    python: `def minimumEffortPath(heights):
    pass`,
  },
  visibleTests: [
    { args: [[[1,2,2],[3,8,2],[5,3,5]]], expected: 2 },
    { args: [[[1,2,3],[3,8,4],[5,3,5]]], expected: 1 },
    { args: [[[1,2,1,1,1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[3,3],[3,3]]], expected: 0 },
    { args: [[[1,3,5],[2,4,6]]], expected: 2 },
    { args: [[[1,2],[5,3]]], expected: 1 },
  ],
};
