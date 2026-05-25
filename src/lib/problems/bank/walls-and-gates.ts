import type { Problem } from '../types';

export const problem: Problem = {
  id: 'walls-and-gates',
  title: 'Walls and Gates',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an \`m x n\` grid \`rooms\` initialized with these three possible values:

- \`-1\` — A wall or an obstacle.
- \`0\` — A gate.
- \`INF\` — Infinity means an empty room. We use the value \`2^31 - 1 = 2147483647\` to represent \`INF\` because you may assume the distance to a gate is less than \`2147483647\`.

Fill each empty room with the **distance to its nearest gate**. If it is impossible to reach a gate, leave it as \`INF\`.`,
  constraints: [
    'm == rooms.length',
    'n == rooms[i].length',
    '1 <= m, n <= 250',
    'rooms[i][j] is -1, 0, or 2^31 - 1',
  ],
  examples: [
    {
      input: 'rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]',
      output: '[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]',
      explanation: 'Multi-source BFS from all gates simultaneously.',
    },
    {
      input: 'rooms = [[-1]]',
      output: '[[-1]]',
      explanation: 'Single wall, no change.',
    },
  ],
  hints: [
    'Start multi-source BFS from all gate cells (value 0) simultaneously.',
    'For each INF cell reachable from a gate, set its distance to the gate\'s distance + 1.',
    'BFS guarantees shortest paths, so the first time you reach an INF cell is with the minimum distance.',
  ],
  functionName: 'wallsAndGates',
  params: ['rooms'],
  starterCode: {
    javascript: `function wallsAndGates(rooms) {

}`,
    python: `def wallsAndGates(rooms):
    pass`,
  },
  visibleTests: [
    {
      args: [[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]],
      expected: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]],
    },
    {
      args: [[[-1]]],
      expected: [[-1]],
    },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: [[0]] },
    { args: [[[2147483647]]], expected: [[2147483647]] },
    { args: [[[0,2147483647],[2147483647,2147483647]]], expected: [[0,1],[1,2]] },
    { args: [[[0,-1],[2147483647,2147483647]]], expected: [[0,-1],[1,2]] },
  ],
};
