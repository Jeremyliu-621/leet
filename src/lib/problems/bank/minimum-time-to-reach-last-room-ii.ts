import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-reach-last-room-ii',
  title: 'Find Minimum Time to Reach Last Room II',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `There is a dungeon with \`n x m\` rooms in a grid. You are given a 2D array \`moveTime\` of size \`n x m\`, where \`moveTime[i][j]\` is the earliest time you can **start** moving into room \`(i, j)\`.

You start at room \`(0, 0)\` at time \`t = 0\`. Each move to an adjacent room costs **alternating** time: the 1st move costs 1 second, the 2nd costs 2 seconds, the 3rd costs 1 second, and so on.

Return the **minimum** time to reach room \`(n-1, m-1)\`.`,
  constraints: [
    '2 <= n, m <= 750',
    '0 <= moveTime[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'moveTime = [[0,4],[4,4]]',
      output: '7',
      explanation: 'Move (0,0)→(0,1) at t=4: arrive 4+1=5 (move 1, cost 1). Move (0,1)→(1,1) at t=5: arrive 5+2=7 (move 2, cost 2).',
    },
    {
      input: 'moveTime = [[0,0,0,0],[0,0,0,0]]',
      output: '6',
      explanation: 'One optimal path costs 1+2+1+2=6 seconds to reach (1,3).',
    },
    {
      input: 'moveTime = [[0,2],[2,0]]',
      output: '5',
      explanation: '(0,0)→(0,1): max(0,2)+1=3 (move 1). (0,1)→(1,1): max(3,0)+2=5 (move 2).',
    },
  ],
  hints: [
    'Use Dijkstra with state (time, row, col, parity) where parity tracks even/odd move count.',
    'Move cost is 1 if parity is even (0-indexed even move number), 2 if odd.',
    'Arrival time at neighbor: max(current_time, moveTime[nr][nc]) + move_cost.',
  ],
  functionName: 'minTimeToReach',
  params: ['moveTime'],
  starterCode: {
    javascript: `function minTimeToReach(moveTime) {

}`,
    python: `def minTimeToReach(moveTime):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 4], [4, 4]]], expected: 7 },
    { args: [[[0, 0, 0, 0], [0, 0, 0, 0]]], expected: 6 },
    { args: [[[0, 2], [2, 0]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 3 },
    { args: [[[0, 1, 2], [3, 4, 5]]], expected: 6 },
    { args: [[[0, 3], [3, 5]]], expected: 7 },
    { args: [[[0, 5], [5, 0]]], expected: 8 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 6 },
    { args: [[[0, 4, 4], [4, 4, 4]]], expected: 8 },
  ],
};
