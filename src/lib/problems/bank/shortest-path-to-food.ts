import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-to-food',
  title: 'Shortest Path to Food',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph', 'arrays'],
  description: `You are given a 2D grid \`grid\` where each cell is one of:
- \`'#'\` — an obstacle.
- \`'O'\` — an open space.
- \`'X'\` — your starting position (exactly one cell).
- \`'*'\` — a food cell (one or more cells).

Find the **minimum number of steps** to reach any food cell from the starting position. You can move **up, down, left, or right** one step at a time. You cannot walk through obstacles.

Return the minimum number of steps, or **-1** if no food is reachable.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 200',
    'grid[i][j] is \'#\', \'O\', \'X\', or \'*\'',
    'There is exactly one \'X\' and at least one \'*\'',
  ],
  examples: [
    {
      input: 'grid = [["X","O","O"],["O","O","*"]]',
      output: '3',
      explanation: 'Path: (0,0) → (0,1) → (0,2) → (1,2) = 3 steps. Or (0,0)→(1,0)→(1,1)→(1,2)=3 steps.',
    },
    {
      input: 'grid = [["X","#"],["O","*"]]',
      output: '2',
      explanation: 'X at (0,0). Move down to (1,0), then right to (1,1)=food. 2 steps.',
    },
    {
      input: 'grid = [["X","O","*"]]',
      output: '2',
      explanation: 'Direct path right: (0,0)→(0,1)→(0,2)=2 steps.',
    },
  ],
  hints: [
    'Use BFS starting from the \'X\' cell. BFS guarantees the minimum number of steps to any cell in an unweighted grid.',
    'Enqueue the start cell with distance 0. For each cell dequeued, try all 4 neighbors. If a neighbor is \'*\', return the current distance + 1.',
    'Mark cells as visited when enqueued (not dequeued) to avoid revisiting. Skip obstacles (\'#\') and out-of-bounds cells.',
  ],
  functionName: 'getFood',
  params: ['grid'],
  starterCode: {
    javascript: `function getFood(grid) {
  // BFS from 'X'. Return distance to nearest '*', or -1 if unreachable.
}`,
    typescript: "function getFood(grid: string[][]): number {\n  // BFS from 'X'. Return distance to nearest '*', or -1 if unreachable.\n}",

    python: `def getFood(grid):
    # BFS from 'X'. Return distance to nearest '*', or -1 if unreachable.
    pass`,
  },
  visibleTests: [
    {
      args: [[['X', 'O', 'O'], ['O', 'O', '*']]],
      expected: 3,
    },
    {
      args: [[['X', '#'], ['O', '*']]],
      expected: 2,
    },
    {
      args: [[['X', 'O', '*']]],
      expected: 2,
    },
  ],
  hiddenTests: [
    {
      args: [[['X', '*']]],
      expected: 1,
    },
    {
      args: [[['*', 'O', 'O', 'O', 'X']]],
      expected: 4,
    },
    {
      args: [[['X', '#', '*'], ['O', 'O', 'O'], ['*', '#', 'O']]],
      expected: 2,
    },
    {
      args: [[['X', '#'], ['#', '*']]],
      expected: -1,
    },
    {
      args: [[['O', 'X', 'O'], ['O', '#', 'O'], ['O', 'O', '*']]],
      expected: 3,
    },
  ],
};
