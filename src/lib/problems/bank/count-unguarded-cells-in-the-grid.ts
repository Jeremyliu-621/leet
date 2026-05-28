import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unguarded-cells-in-the-grid',
  title: 'Count Unguarded Cells in the Grid',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given two integers \`m\` and \`n\` representing a **0-indexed** \`m x n\` grid. You are also given two 2D integer arrays \`guards\` and \`walls\` where \`guards[i] = [row_i, col_i]\` and \`walls[j] = [row_j, col_j]\` represent the positions of the \`i\`th guard and \`j\`th wall respectively.

A guard can see **every** cell in the four cardinal directions (north, east, south, or west) starting from their position unless **obstructed** by a wall or another guard. A cell is **guarded** if there is **at least** one guard that can see it.

Return the number of unoccupied cells that are **not guarded**.`,
  constraints: [
    '1 <= m, n <= 10^5',
    '2 <= m * n <= 10^5',
    '1 <= guards.length, walls.length <= 5 * 10^4',
    '2 <= guards.length + walls.length <= m * n',
    'guards[i].length == walls[j].length == 2',
    '0 <= row_i, row_j < m',
    '0 <= col_i, col_j < n',
    'All positions in guards and walls are unique.',
  ],
  examples: [
    {
      input: 'm = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]',
      output: '7',
      explanation: 'The guarded and occupied cells are shown shaded. There are 7 unguarded cells.',
    },
    {
      input: 'm = 2, n = 7, guards = [[0,0],[0,6]], walls = []',
      output: '5',
      explanation: 'The guards at (0,0) and (0,6) guard all of row 0 between them, and their own cells below. The 5 cells in row 1 between columns 1–5 are unguarded.',
    },
  ],
  hints: [
    'Create a grid and mark each guard cell and each wall cell. Then for every guard, scan outward in all 4 directions, marking cells as "guarded" until you hit a wall, another guard, or the grid boundary.',
    'Use sentinel values: 0 = empty, 1 = guarded, 2 = guard, 3 = wall. Cells with value 2 or 3 stop the ray.',
    'Count the cells where the grid value is still 0 after all rays are cast.',
  ],
  functionName: 'countUnguarded',
  params: ['m', 'n', 'guards', 'walls'],
  starterCode: {
    javascript: `function countUnguarded(m, n, guards, walls) {

}`,
    python: `def countUnguarded(m, n, guards, walls):
    pass`,
  },
  visibleTests: [
    { args: [4, 6, [[0, 0], [1, 1], [2, 3]], [[0, 1], [2, 2], [1, 4]]], expected: 7 },
    { args: [2, 7, [[0, 0], [0, 6]], []], expected: 5 },
    { args: [1, 1, [[0, 0]], []], expected: 0 },
  ],
  hiddenTests: [
    { args: [3, 3, [[0, 0]], [[0, 1]]], expected: 5 },
    { args: [5, 5, [[2, 2]], []], expected: 16 },
    { args: [3, 3, [[1, 1]], []], expected: 4 },
    { args: [2, 2, [[0, 0], [1, 1]], []], expected: 0 },
    { args: [4, 4, [[0, 0], [3, 3]], [[1, 1], [2, 2]]], expected: 2 },
    { args: [3, 5, [[1, 0], [1, 4]], [[1, 2]]], expected: 6 },
  ],
};
