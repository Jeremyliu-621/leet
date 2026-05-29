import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nearest-exit-from-entrance-in-maze',
  title: 'Nearest Exit from Entrance in Maze',
  difficulty: 'medium',
  tags: ['graph', 'arrays', 'shortest-path'],
  description: `You are given an \`m x n\` matrix \`maze\` (0-indexed) with empty cells (represented as \`'.'\`) and walls (represented as \`'+'\`). You are also given the \`entrance\` of the maze, where \`entrance = [entrancerow, entrancecol]\` denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell **up, down, left, or right**. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the **nearest exit** from the \`entrance\`. An **exit** is an empty cell at the **border** of the maze. The \`entrance\` does not count as an exit.

Return the **number of steps** in the shortest path from the \`entrance\` to the nearest exit, or \`-1\` if no such path exists.`,
  constraints: [
    '`maze.length == m`',
    '`maze[i].length == n`',
    '`1 <= m, n <= 100`',
    '`maze[i][j]\` is either \`\'.\'\` or \`\'+\'`.',
    '`entrance.length == 2`',
    '`0 <= entrancerow < m`',
    '`0 <= entrancecol < n`',
    '`entrance\` will always be an empty cell.',
  ],
  examples: [
    {
      input: 'maze = [["+",".","+","+","+","+","+"],["+",".","+",".",".",".","+"],["+",".","+",".","+",".","+"],["+",".",".",".","+",".","+"],["+","+","+","+","+",".","+"]],  entrance = [0,1]',
      output: '1',
      explanation: 'There is 1 exit at (1, 6) but it requires 12 steps. The nearest exit is (0, 1) no wait... entrance is at (0,1). The nearest is at (0,1)... actually (1,5) or similar. Wait, the visible exit going straight down: (0,1)→(1,1)→...→(3,1)→(3,2)→(3,3)→... Actually from entrance [0,1], [0,0] and [0,2] etc.',
    },
    {
      input: 'maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]',
      output: '1',
      explanation: 'From [1,2] you can reach the border cell [0,2] in 1 step.',
    },
    {
      input: 'maze = [[".","]+"]], entrance = [0,0]',
      output: '-1',
      explanation: 'The entrance is the only empty border cell, so there is no exit.',
    },
  ],
  hints: [
    'Use BFS from the entrance. Each step explores all 4 neighbors.',
    'The first time you reach a border cell (that is not the entrance), return the distance.',
    '```js\nfunction nearestExit(maze, entrance) {\n  const m = maze.length, n = maze[0].length;\n  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];\n  const visited = Array.from({length:m},()=>new Array(n).fill(false));\n  const queue = [[entrance[0], entrance[1], 0]];\n  visited[entrance[0]][entrance[1]] = true;\n  while (queue.length > 0) {\n    const [r,c,dist] = queue.shift();\n    for (const [dr,dc] of dirs) {\n      const nr=r+dr, nc=c+dc;\n      if (nr<0||nr>=m||nc<0||nc>=n||visited[nr][nc]||maze[nr][nc]===\'+\') continue;\n      if (nr===0||nr===m-1||nc===0||nc===n-1) return dist+1;\n      visited[nr][nc]=true;\n      queue.push([nr,nc,dist+1]);\n    }\n  }\n  return -1;\n}\n```',
  ],
  functionName: 'nearestExit',
  params: ['maze', 'entrance'],
  starterCode: {
    javascript: `function nearestExit(maze, entrance) {

}`,
    typescript: `function nearestExit(maze: string[][], entrance: number[]): number {

}`,
    python: `def nearestExit(maze, entrance):
    pass`,
  },
  visibleTests: [
    { args: [[['+', '.', '+'], ['.', '.', '.'], ['+', '.', '+']], [1, 2]], expected: 2 },
    { args: [[['+', '+', '.', '+'], ['.', '.', '.', '+'], ['+', '+', '+', '.']], [1, 2]], expected: 1 },
    { args: [[['.',  '+']], [0, 0]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[['.']], [0, 0]], expected: -1 },
    { args: [[['.',  '.', '.']], [0, 1]], expected: 1 },
    { args: [[['.', '.'], ['.', '.']], [0, 0]], expected: 1 },
    { args: [[['+', '+', '+'], ['+', '.', '+'], ['+', '+', '+']], [1, 1]], expected: -1 },
    { args: [[['+', '.', '+'], ['+', '.', '+'], ['+', '.', '.']], [0, 1]], expected: 2 },
  ],
};
