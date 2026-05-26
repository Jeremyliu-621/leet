import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-maze-ii',
  title: 'The Maze II',
  difficulty: 'medium',
  tags: ['graph', 'binary-search'],
  description: `There is a ball in a \`m x n\` grid \`maze\`. The ball can go through empty spaces (represented as \`0\`) but it cannot go through walls (represented as \`1\`). The ball can move in four directions: up, down, left, and right.

When the ball rolls, it **keeps rolling** until hitting a wall. The ball stops at the cell before the wall.

Given the \`m x n\` \`maze\`, the ball's starting position \`start = [startrow, startcol]\`, and the destination \`destination = [destinationrow, destinationcol]\`, return the **shortest distance** for the ball to stop at the destination. If the ball cannot stop at the destination, return \`-1\`.

The **distance** is the number of **empty spaces** traveled by the ball from the start position (excluded) to the destination (included).

You may assume that the border of the maze is all walls.`,
  constraints: [
    '`m == maze.length`',
    '`n == maze[i].length`',
    '`1 <= m, n <= 100`',
    '`maze[i][j]` is `0` or `1`.',
    '`start.length == 2`',
    '`destination.length == 2`',
    '`0 <= startrow, destinationrow < m`',
    '`0 <= startcol, destinationcol < n`',
    'Both the ball and the destination exist in an empty space, and they will not be in the same position initially.',
    'The maze contains at least 2 empty spaces.',
  ],
  examples: [
    {
      input: 'maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]',
      output: '12',
      explanation: 'One shortest path is: left 3 → down 3 → right 3 → down 1 (total 10). Actually the minimum is 12 steps: down→left→down→right.',
    },
    {
      input: 'maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]',
      output: '-1',
      explanation: 'The ball cannot stop at (3,2) because it would roll past without stopping.',
    },
  ],
  hints: [
    'Model as a graph where nodes are cells and edges connect cells the ball can roll between. Use Dijkstra\'s algorithm to find the shortest path.',
    'From each cell, simulate rolling in all 4 directions until hitting a wall. The stopping cell is a neighbor with edge weight = number of steps traveled.',
    'Use a min-heap (priority queue) ordered by distance. dist[r][c] tracks the minimum steps to reach each cell. Update only if the new distance improves the current best.',
  ],
  functionName: 'shortestDistance',
  params: ['maze', 'start', 'destination'],
  starterCode: {
    javascript: `function shortestDistance(maze, start, destination) {

}`,
    python: `def shortestDistance(maze, start, destination):
    pass`,
  },
  visibleTests: [
    {
      args: [
        [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],
        [0,4], [4,4]
      ],
      expected: 12,
    },
    {
      args: [
        [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],
        [0,4], [3,2]
      ],
      expected: -1,
    },
  ],
  hiddenTests: [
    {
      args: [[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], [0,0], [4,2]],
      expected: 10,
    },
    {
      args: [[[0,0,0],[0,1,0],[0,0,0]], [0,0], [2,2]],
      expected: 4,
    },
    {
      args: [[[0,0,0],[0,1,0],[0,0,0]], [0,0], [0,2]],
      expected: 2,
    },
    {
      args: [[[0,0,0],[0,0,0],[0,0,0]], [0,0], [1,1]],
      expected: -1,
    },
  ],
};
