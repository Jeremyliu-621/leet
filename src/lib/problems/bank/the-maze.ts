import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-maze',
  title: 'The Maze',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph'],
  description: `There is a ball in a maze with empty spaces (represented as \`0\`) and walls (represented as \`1\`). The ball can go through empty spaces by **rolling** up, down, left, or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the \`m x n\` \`maze\`, the ball's \`start\` position, and the \`destination\`, return \`true\` if the ball can stop at the destination, otherwise return \`false\`.

**Note** that the border of the maze is all walls.`,
  constraints: [
    'm == maze.length',
    'n == maze[i].length',
    '1 <= m, n <= 100',
    'maze[i][j] is 0 or 1',
    'start.length == 2',
    'destination.length == 2',
    '0 <= start[r], destination[r] < m',
    '0 <= start[c], destination[c] < n',
    'Both start and destination are empty spaces.',
    'There is only one start and one destination.',
  ],
  examples: [
    {
      input: 'maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]',
      output: 'true',
      explanation: 'One possible path: roll left from (0,4) to (0,1), roll down to (4,1), roll right to (4,4). Ball stops at each wall.',
    },
    {
      input: 'maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]',
      output: 'false',
      explanation: 'The ball cannot stop at (3,2) — that cell is never a stopping point along any path.',
    },
    {
      input: 'maze = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], start = [4,3], destination = [0,1]',
      output: 'false',
    },
  ],
  hints: [
    'Use BFS or DFS from start. From each stopping position, roll in all 4 directions until hitting a wall. The new stopping position is an adjacent node in the implicit graph.',
    'Track visited stopping positions to avoid revisiting. The key is that the ball only STOPS at a wall — not just at any empty cell.',
    'BFS ensures you process all reachable stopping positions. If the destination is among them, return true.',
  ],
  functionName: 'hasPath',
  params: ['maze', 'start', 'destination'],
  starterCode: {
    javascript: 'function hasPath(maze, start, destination) {\n  \n}\n',
    python: 'def hasPath(maze, start, destination):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [4,4]],
      expected: true,
    },
    {
      args: [[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [3,2]],
      expected: false,
    },
    {
      args: [[[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4,3], [0,1]],
      expected: false,
    },
  ],
  hiddenTests: [
    { args: [[[0,0],[0,0]], [0,0], [1,1]], expected: true },
    { args: [[[0,0],[0,0]], [0,0], [0,1]], expected: true },
    { args: [[[0,0,0],[0,1,0],[0,0,0]], [0,0], [2,2]], expected: true },
    { args: [[[0,0,0],[0,1,0],[0,0,0]], [0,0], [1,0]], expected: false },
  ],
};
