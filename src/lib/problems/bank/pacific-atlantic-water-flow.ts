import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pacific-atlantic-water-flow',
  title: 'Pacific Atlantic Water Flow',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `There is an \`m x n\` rectangular island that borders both the **Pacific Ocean** and **Atlantic Ocean**. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an \`m x n\` integer matrix \`heights\` where \`heights[r][c]\` represents the **height above sea level** of the cell at coordinate \`(r, c)\`.

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is **less than or equal to** the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a **2D list** of grid coordinates \`result\` where \`result[i] = [ri, ci]\` denotes that rain water can flow from cell \`(ri, ci)\` to **both** the Pacific and Atlantic oceans.`,
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
      explanation: 'A single cell borders both oceans.',
    },
  ],
  hints: [
    'Instead of flowing forward (from cell to ocean), reverse the direction: do BFS/DFS from each ocean inward, visiting cells that are >= current height.',
    'Run one BFS from all Pacific-border cells and another from all Atlantic-border cells. The intersection of reachable sets is the answer.',
    'Return coordinates sorted by row then column.',
  ],
  functionName: 'pacificAtlantic',
  params: ['heights'],
  starterCode: {
    javascript: 'function pacificAtlantic(heights) {\n  \n}\n',
    typescript: "function pacificAtlantic(heights: number[][]): number[][] {\n  \n}",

    python: 'def pacificAtlantic(heights):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]],
      expected: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]],
    },
    {
      args: [[[1]]],
      expected: [[0, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 2], [4, 3]]],
      expected: [[0, 1], [1, 0], [1, 1]],
    },
    {
      args: [[[3, 3, 3], [3, 1, 3], [0, 2, 4]]],
      expected: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]],
    },
    {
      args: [[[1, 1], [1, 1]]],
      expected: [[0, 0], [0, 1], [1, 0], [1, 1]],
    },
    {
      args: [[[10, 10, 10], [10, 1, 10], [10, 10, 10]]],
      expected: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]],
    },
  ],
};
