import type { Problem } from '../types';

export const problem: Problem = {
  id: 'time-to-cross-a-bridge',
  title: 'Time to Cross a Bridge',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'simulation'],
  description: `There are \`n\` workers numbered \`0\` through \`n - 1\`, all starting on the **right bank**. They need to retrieve old rocks from a warehouse on the **left bank** and bring them to the right bank. The bridge can only be used by **one worker at a time**.

Each worker \`i\` is described by \`time[i] = [leftToRight, pickOldRock, putNewRock, rightToLeft]\`:
- \`leftToRight\`: minutes to cross the bridge from **left to right**
- \`pickOldRock\`: minutes to **pick** a rock on the left bank
- \`putNewRock\`: minutes to **put** a rock on the right bank
- \`rightToLeft\`: minutes to cross the bridge from **right to left**

When the bridge is free and multiple workers are waiting on the **same side**, the worker with the **lowest efficiency** (highest \`leftToRight + rightToLeft\`) crosses first. Ties are broken by **highest index**.

When workers are waiting on **both sides**, workers on the **left side** (returning with rocks) have priority.

Workers keep making trips until \`k\` rocks have been delivered to the right bank. Return the time the **last worker reaches the right bank** after delivering the k-th rock.`,
  constraints: [
    '1 <= n, k <= 10^4',
    'time.length == n',
    'time[i].length == 4',
    '1 <= time[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'n = 1, k = 1, time = [[1,1,2,1]]',
      output: '3',
      explanation:
        'The single worker crosses right→left (1 min), picks a rock (1 min), then crosses left→right (1 min), arriving at the right bank at time 3.',
    },
    {
      input: 'n = 1, k = 2, time = [[1,1,1,1]]',
      output: '7',
      explanation:
        'Trip 1: crosses r→l (1), picks (1), crosses l→r (1) — arrives right at t=3. Puts rock (1) until t=4. Trip 2: crosses r→l (1), picks (1), crosses l→r (1) — arrives right at t=7.',
    },
    {
      input: 'n = 2, k = 2, time = [[1,1,1,1],[2,2,2,2]]',
      output: '7',
      explanation:
        'Worker 1 has lower efficiency (sum=4 vs 2) and goes first. Both workers cross r→l and both finish picking at t=4. Worker 1 (lower efficiency) crosses l→r first arriving t=6, then worker 0 crosses l→r arriving t=7.',
    },
  ],
  hints: [
    'Level 1: Use four data structures: two max-heaps for workers waiting on each side (keyed by efficiency descending), and two min-heaps for workers currently working on each side (keyed by finish time). Simulate time advancing to the next meaningful event.',
    'Level 2: At each step: (1) move any workers whose work (picking or putting) is done into the appropriate waiting heap; (2) if the bridge is free, give it to a left-side waiter first (they have rocks), then right-side; (3) if nobody is waiting, jump the clock to the earliest work-completion time.',
    'Level 3: Stop sending workers right→left once k rocks have been committed (k workers are already en route or done). The answer is the timestamp when the k-th worker finishes their left→right crossing. Track the answer each time a l→r crossing completes.',
  ],
  functionName: 'findCrossingTime',
  params: ['n', 'k', 'time'],
  starterCode: {
    javascript: `function findCrossingTime(n, k, time) {

}`,
    typescript: `function findCrossingTime(n: number, k: number, time: number[][]): number {

}`,
    python: `def findCrossingTime(n, k, time):
    pass`,
  },
  visibleTests: [
    { args: [1, 1, [[1, 1, 2, 1]]], expected: 3 },
    { args: [1, 2, [[1, 1, 1, 1]]], expected: 7 },
    { args: [2, 2, [[1, 1, 1, 1], [2, 2, 2, 2]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [1, 1, [[2, 3, 1, 2]]], expected: 7 },
    { args: [2, 1, [[1, 1, 1, 1], [1, 1, 1, 1]]], expected: 3 },
    { args: [3, 3, [[1, 2, 3, 1], [2, 3, 2, 2], [3, 3, 3, 3]]], expected: 12 },
    { args: [1, 3, [[1, 1, 1, 1]]], expected: 11 },
    { args: [2, 3, [[1, 1, 1, 1], [2, 2, 2, 2]]], expected: 14 },
    { args: [1, 2, [[2, 1, 1, 2]]], expected: 11 },
  ],
};
