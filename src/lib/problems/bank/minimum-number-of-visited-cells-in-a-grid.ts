import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-visited-cells-in-a-grid',
  title: 'Minimum Number of Visited Cells in a Grid',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `You are given a 0-indexed \`m x n\` integer matrix \`grid\`. Your initial position is at the **top-left** cell \`(0, 0)\`.

In one step you can move from cell \`(i, j)\` to any cell:
- \`(i, j + k)\` where \`1 <= k <= grid[i][j]\` (move right), or
- \`(i + k, j)\` where \`1 <= k <= grid[i][j]\` (move down).

Return the **minimum number of cells** you need to visit to reach the bottom-right cell \`(m-1, n-1)\` (inclusive of start and end). Return \`-1\` if it is impossible.

**Key insight:** BFS from \`(0,0)\`. Use union-find structures to track unvisited cells per row and column, enabling each cell to be added to the queue at most once — giving near-linear total time.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    '0 <= grid[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[2,2,2],[2,2,2],[2,2,2]]',
      output: '3',
      explanation: 'Path: (0,0) → (0,2) → (2,2). 3 cells visited.',
    },
    {
      input: 'grid = [[0,0],[0,0]]',
      output: '-1',
      explanation: 'From (0,0) with grid[0][0]=0, no moves are possible.',
    },
    {
      input: 'grid = [[1,1,1],[1,1,1],[1,1,1]]',
      output: '5',
      explanation: 'Each cell allows only 1-step moves, so BFS takes 5 steps: e.g. (0,0)→(0,1)→(0,2)→(1,2)→(2,2).',
    },
  ],
  hints: [
    'Model the problem as BFS on a graph where each cell connects to all reachable cells in its row and column.',
    'Naively this is O(m·n·(m+n)) — too slow. Use union-find to track the next unvisited cell in each row and column.',
    'For row r, maintain rowUF[r][c] pointing to the next unvisited column ≥ c. Similarly for colUF. When a cell is visited, point its entry to the next position, enabling O(α) amortized lookup.',
  ],
  functionName: 'minimumVisitedCells',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumVisitedCells(grid) {
  // Return min cells to visit from (0,0) to (m-1,n-1), or -1
}`,
    python: `def minimumVisitedCells(grid: list[list[int]]) -> int:
    # Return min cells to visit from (0,0) to (m-1,n-1), or -1
    pass`,
  },
  visibleTests: [
    { args: [[[2, 2, 2], [2, 2, 2], [2, 2, 2]]], expected: 3 },
    { args: [[[0, 0], [0, 0]]], expected: -1 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 5 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 0]]], expected: 3 },
    { args: [[[2, 1], [1, 0]]], expected: 3 },
    { args: [[[3, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: -1 },
    { args: [[[2, 0, 2], [0, 2, 0], [2, 0, 0]]], expected: 3 },
    { args: [[[4, 0], [0, 0]]], expected: -1 },
    { args: [[[1, 2], [3, 0]]], expected: 3 },
    { args: [[[2, 0, 0], [0, 2, 0], [0, 0, 0]]], expected: -1 },
  ],
};
