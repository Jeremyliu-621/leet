import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-valid-path-in-grid',
  title: 'Minimum Cost to Make at Least One Valid Path in a Grid',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `You are given an \`m x n\` grid. Each cell of the grid has a sign pointing to the next cell you should visit if you are currently in this cell. The sign of \`grid[i][j]\` can be:

- \`1\` which means go to the cell to the right (i.e., visit \`grid[i][j + 1]\`)
- \`2\` which means go to the cell to the left (i.e., visit \`grid[i][j - 1]\`)
- \`3\` which means go to the lower cell (i.e., visit \`grid[i + 1][j]\`)
- \`4\` which means go to the upper cell (i.e., visit \`grid[i - 1][j]\`)

Notice that there could be some signs that point outside the boundaries of the grid.

You will initially start at the upper left cell \`(0, 0)\`. A valid path in the grid is a path that starts from the upper left cell \`(0, 0)\` and ends at the bottom-right cell \`(m - 1, n - 1)\` following the signs on the grid. The valid path does not have to be the shortest path.

You can modify the sign on a cell with \`cost = 1\`. You can modify the signs on as many cells as you want.

Return the **minimum cost** to make the grid have at least one valid path.

**Example 1:**
\`\`\`
Input: grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
Output: 3
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[1,1,3],[3,2,2],[1,1,4]]
Output: 0
\`\`\`

**Example 3:**
\`\`\`
Input: grid = [[1,2],[4,3]]
Output: 1
\`\`\`

**Constraints:**
- \`m == grid.length\`
- \`n == grid[i].length\`
- \`1 <= m, n <= 100\`
- \`1 <= grid[i][j] <= 4\``,
  constraints: [
    '1 <= m, n <= 100',
    '1 <= grid[i][j] <= 4',
  ],
  examples: [
    { input: 'grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]', output: '3' },
    { input: 'grid = [[1,1,3],[3,2,2],[1,1,4]]', output: '0' },
    { input: 'grid = [[1,2],[4,3]]', output: '1' },
  ],
  hints: [
    'Build a graph where the edges have weight 0 (following the arrow) or 1 (changing the arrow).',
    'Use Dijkstra or 0-1 BFS (deque). For each cell, the 4 neighbors have edge cost 0 if it matches the arrow direction, else 1.',
    'dist[r][c] = minimum cost to reach (r,c) from (0,0). Return dist[m-1][n-1].',
  ],
  functionName: 'minCost',
  params: ['grid'],
  starterCode: {
    javascript: 'function minCost(grid) {\n  // your code here\n}\n',
    python: 'def minCost(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]], expected: 3 },
    { args: [[[1,1,3],[3,2,2],[1,1,4]]], expected: 0 },
    { args: [[[1,2],[4,3]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1,3],[4,2]]], expected: 0 },
    { args: [[[2,2],[4,1]]], expected: 2 },
    { args: [[[1,1],[1,1]]], expected: 1 },
  ],
};
