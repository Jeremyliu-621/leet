import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-day-where-you-have-been-in-all-the-rooms',
  title: 'First Day Where You Have Been in All the Rooms',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `There are \`n\` rooms numbered \`0\` to \`n - 1\`. You start on day **0** in room **0**.

The visit schedule follows these rules:
- If the number of times you have visited room \`i\` is **odd**, the next room you visit is \`nextVisit[i]\` (this will always be a room with index \`<= i\`).
- If the number of times you have visited room \`i\` is **even**, the next room you visit is \`(i + 1) % n\`.

Return the label of the **first day** where you have been in **all** the rooms. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Note: The first visit to room 0 is on day 0 and counts as 1 visit.`,
  constraints: [
    '`n == nextVisit.length`',
    '`2 <= n <= 10^5`',
    '`0 <= nextVisit[i] <= i`',
  ],
  examples: [
    {
      input: 'nextVisit = [0, 0]',
      output: '2',
      explanation:
        'Day 0: visit room 0 (1st visit, odd → go to nextVisit[0]=0). Day 1: visit room 0 (2nd visit, even → go to room 1). Day 2: visit room 1 (1st visit). All rooms visited by day 2.',
    },
    {
      input: 'nextVisit = [0, 0, 2]',
      output: '6',
      explanation:
        'The schedule cycles through rooms. All 3 rooms are first visited by day 6.',
    },
  ],
  hints: [
    'Level 1: Define dp[i] as the day you first visit room i. The key observation is: to enter room i for the first time (even visit count), you must exit room i-1 for the second time.',
    'Level 2: To exit room i-1 for the second time, you visit room i-1 (day dp[i-1]), then go back to nextVisit[i-1] and travel all the way back to room i-1 again. The cost of traveling from nextVisit[i-1] to i-1 is dp[i-1] - dp[nextVisit[i-1]] days.',
    'Level 3: dp[i] = (dp[i-1] + 1 + dp[i-1] - dp[nextVisit[i-1]] + 1) % MOD = (2*dp[i-1] - dp[nextVisit[i-1]] + 2) % MOD. Use modular arithmetic carefully.',
  ],
  functionName: 'firstDayBeenInAllRooms',
  params: ['nextVisit'],
  starterCode: {
    javascript: `function firstDayBeenInAllRooms(nextVisit) {

}`,
    typescript: `function firstDayBeenInAllRooms(nextVisit: number[]): number {

}`,
    python: `def firstDayBeenInAllRooms(nextVisit):
    pass`,
  },
  visibleTests: [
    { args: [[0, 0]], expected: 2 },
    { args: [[0, 0, 2]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 6 },
    { args: [[0, 1, 1]], expected: 4 },
    { args: [[0, 0, 0, 0]], expected: 14 },
    { args: [[0, 0, 2, 2]], expected: 8 },
    { args: [[0, 0, 1, 2]], expected: 12 },
  ],
};
