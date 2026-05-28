import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-day-you-have-been-in-all-rooms',
  title: 'First Day Where You Have Been in All the Rooms',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'simulation', 'arrays'],
  description: `There are \`n\` rooms you need to visit, labeled from \`0\` to \`n - 1\`. Each day is labeled, starting from day \`0\`. You will go in and out of rooms according to the following **rules**:

- Initially, you are in room \`0\` on day \`0\`.
- On each day, if you have visited the current room an **odd** number of times, you go to room \`nextVisit[currentRoom]\`.
- On each day, if you have visited the current room an **even** number of times (**not counting the current visit**), you go to room \`(currentRoom + 1) % n\`.

Return the label of the **first** day where you have been in **all** the rooms. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    'n == nextVisit.length',
    '2 <= n <= 10^5',
    '0 <= nextVisit[i] <= i',
  ],
  examples: [
    {
      input: 'nextVisit = [0,0]',
      output: '2',
      explanation: 'Day 0: room 0 (1st visit, odd → go to nextVisit[0]=0). Day 1: room 0 (2nd visit, even → go to room 1). Day 2: room 1 (1st visit). Both rooms visited.',
    },
    {
      input: 'nextVisit = [0,0,2]',
      output: '6',
    },
    {
      input: 'nextVisit = [0,1,2,0]',
      output: '8',
    },
  ],
  hints: [
    'Let dp[i] = the day you FIRST enter room i for the 2nd time (which allows moving to room i+1). dp[0]=1 (you visit room 0 for 2nd time on day 1). dp[i] = dp[i-1] + (dp[i-1] - dp[nextVisit[i-1]] + 1) + 1.',
    'The idea: to enter room i+1, you need to visit room i an even number of times. The extra time needed is the round-trip from room nextVisit[i] back to room i (which is dp[i] - dp[nextVisit[i]] days) + 2.',
    'dp[i] = (dp[i-1] + (dp[i-1] - dp[nextVisit[i-1]]) + 2) mod MOD. The answer is dp[n-1] - 1 (room n-1 is first visited on day dp[n-2]+1, i.e., after room n-2 is visited an even number of times).',
  ],
  functionName: 'firstDayBeenInAllRooms',
  params: ['nextVisit'],
  starterCode: {
    javascript: 'function firstDayBeenInAllRooms(nextVisit) {\n  \n}\n',
    python: 'def firstDayBeenInAllRooms(nextVisit):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,0]], expected: 2 },
    { args: [[0,0,2]], expected: 6 },
    { args: [[0,1,2,0]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[0,0,0]], expected: 6 },
    { args: [[0,0,1]], expected: 6 },
    { args: [[0,0,0,0]], expected: 14 },
    { args: [[0,0,1,2]], expected: 12 },
    { args: [[0,0,2,1]], expected: 8 },
  ],
};
