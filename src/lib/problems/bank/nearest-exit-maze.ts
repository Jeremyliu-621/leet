import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nearest-exit-maze',
  title: 'Nearest Exit from Entrance in Maze',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You are given an \`m x n\` matrix \`maze\` (0-indexed) with empty cells (represented as \`'.'\`) and walls (represented as \`'+'\`). You are also given the \`entrance\` of the maze, where \`entrance = [entrancerow, entrancecol]\` denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell **up**, **down**, **left**, or **right**. You cannot step into a wall cell and you cannot step outside the maze. Your goal is to find the **nearest exit** from the \`entrance\`. An **exit** is an empty cell at the **border** of the maze. The \`entrance\` does not count as an exit.

Return the **number of steps** in the shortest path from the entrance to the nearest exit, or \`-1\` if no such path exists.`,
  constraints: [
    'maze.length == m',
    'maze[0].length == n',
    '1 <= m, n <= 100',
    'maze[i][j] is either "." or "+"',
    'entrance.length == 2',
    '0 <= entrancerow < m',
    '0 <= entrancecol < n',
    'maze[entrancerow][entrancecol] == "."',
  ],
  examples: [
    {
      input: 'maze = [["+","+",".","+"],[".",".",".","+"],["+" ,"+","+","."]], entrance = [1,2]',
      output: '1',
      explanation: 'Cell [0,2] is the nearest exit: 1 step up from [1,2].',
    },
    {
      input: 'maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]',
      output: '2',
      explanation: 'Move right twice to reach [1,2] which is on the border.',
    },
    {
      input: 'maze = [[".","+"]],  entrance = [0,0]',
      output: '-1',
      explanation: 'There is no path to an exit.',
    },
  ],
  hints: [
    'Level 1: BFS from entrance. Mark visited cells.',
    'Level 2: An exit is any border cell (row=0, row=m-1, col=0, col=n-1) that is empty and not the entrance.',
    'Level 3: Use a queue with (row,col,steps). Skip walls and already-visited cells.',
  ],
  functionName: 'nearestExit',
  params: ['maze', 'entrance'],
  starterCode: {
    javascript: 'function nearestExit(maze, entrance) {\n  // your code here\n}\n',
    typescript: "function nearestExit(maze: string[][], entrance: number[]): number {\n  // your code here\n}",

    python: 'def nearestExit(maze, entrance):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[['+', '+', '.', '+'], ['.', '.', '.', '+'], ['+', '+', '+', '.']], [1, 2]], expected: 1 },
    { args: [[['+', '+', '+'], ['.', '.', '.'], ['+', '+', '+']], [1, 0]], expected: 2 },
    { args: [[['.', '+']], [0, 0]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[['.', '.']], [0, 0]], expected: 1 },
    { args: [[['.', '+'], ['+', '.']], [0, 0]], expected: -1 },
    { args: [[['+', '.', '+'], ['.', '.', '.'], ['+', '.', '+']], [1, 0]], expected: 2 },
  ],
};
