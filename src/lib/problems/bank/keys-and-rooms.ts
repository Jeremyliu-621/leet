import type { Problem } from '../types';

export const problem: Problem = {
  id: 'keys-and-rooms',
  title: 'Keys and Rooms',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`n\` rooms labeled from \`0\` to \`n - 1\` and all rooms are locked except for room \`0\`. Your goal is to visit all the rooms.

When you visit a room, you may find a set of **distinct keys** in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock other rooms.

Given an array \`rooms\` where \`rooms[i]\` is the list of keys you can find in room \`i\`, return \`true\` if you can visit all the rooms, or \`false\` otherwise.

**Approach:** DFS/BFS from room 0. Start with the keys found in room 0, then use those keys to open more rooms, collecting more keys. Track visited rooms to avoid cycles.`,
  constraints: [
    'n == rooms.length',
    '2 <= n <= 1000',
    '0 <= rooms[i].length <= 1000',
    '1 <= sum(rooms[i].length) <= 3000',
    '0 <= rooms[i][j] < n',
    'All the values of rooms[i] are unique',
  ],
  examples: [
    {
      input: 'rooms = [[1],[2],[3],[]]',
      output: 'true',
      explanation: 'Room 0 has key 1 → open room 1 (has key 2) → room 2 (has key 3) → room 3.',
    },
    {
      input: 'rooms = [[1,3],[3,0,1],[2],[0]]',
      output: 'false',
      explanation: 'Room 2 cannot be entered.',
    },
  ],
  hints: [
    'Start DFS from room 0. Maintain a set of visited rooms.',
    'For each visited room, add its keys to a stack/queue to visit next.',
    'At the end, check if the number of visited rooms equals `rooms.length`.',
  ],
  functionName: 'canVisitAllRooms',
  params: ['rooms'],
  preamble: {},
  starterCode: {
    javascript: 'function canVisitAllRooms(rooms) {\n  \n}\n',
    python: 'def canVisitAllRooms(rooms):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1], [2], [3], []]], expected: true },
    { args: [[[1, 3], [3, 0, 1], [2], [0]]], expected: false },
    { args: [[[1, 2], [], []]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1], [0]]], expected: true },
    { args: [[[1], [], []]], expected: false },
    { args: [[[2], [], []]], expected: false },
    { args: [[[1, 2, 3], [], [], []]], expected: true },
  ],
};
