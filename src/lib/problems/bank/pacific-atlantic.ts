import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pacific-atlantic',
  title: 'Pacific Atlantic Water Flow',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There is an \`m x n\` rectangular island that borders both the **Pacific Ocean** (top and left edges) and the **Atlantic Ocean** (bottom and right edges).

The island receives rain. Water flows to adjacent cells (up, down, left, right) if the neighboring cell's height is **less than or equal** to the current cell's height.

Return a list of grid coordinates \`[r, c]\` where water can flow to **both** the Pacific and Atlantic oceans. The result may be in any order.

**Reverse BFS approach:** Instead of tracing from each cell to the ocean, do a reverse BFS — start from ocean borders and propagate *inward* (to cells with height ≥ current). Find cells reachable from both the Pacific side and the Atlantic side.`,
  constraints: [
    'm == heights.length',
    'n == heights[r].length',
    '1 <= m, n <= 200',
    '0 <= heights[r][c] <= 10^5',
  ],
  examples: [
    {
      input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
      output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
      explanation: 'Cells from which water can reach both oceans.',
    },
    {
      input: 'heights = [[1]]',
      output: '[[0,0]]',
      explanation: 'Single cell borders both oceans.',
    },
  ],
  hints: [
    'Reverse the problem: instead of flowing from cells to the ocean, BFS/DFS from all ocean-border cells inward — a cell is reachable if its height is ≥ the previous cell\'s height.',
    'Run two separate BFS passes — one from all Pacific borders (top row + left column) and one from all Atlantic borders (bottom row + right column). Find cells in the intersection.',
    'Use two visited sets (or boolean 2D arrays): `pacificReachable` and `atlanticReachable`. Return all coordinates where both are true.',
  ],
  params: ['heights'],
  functionName: 'pacificAtlantic',
  starterCode: {
    javascript: `function pacificAtlantic(heights) {
  // Return array of [r, c] pairs that can reach both oceans
}`,
    python: `def pacificAtlantic(heights):
    # Return list of [r, c] pairs that can reach both oceans
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]],
      expected: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]],
    },
    { args: [[[1]]], expected: [[0, 0]] },
    { args: [[[1, 2], [4, 3]]], expected: [[0, 1], [1, 0], [1, 1]] },
  ],
  hiddenTests: [
    {
      args: [[[1, 2, 3], [8, 9, 4], [7, 6, 5]]],
      expected: [[0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
    },
    { args: [[[3, 3, 3], [3, 1, 3], [0, 2, 4]]], expected: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]] },
  ],
};
