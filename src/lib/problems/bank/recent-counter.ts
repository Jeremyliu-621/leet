import type { Problem } from '../types';

export const problem: Problem = {
  id: 'recent-counter',
  title: 'Number of Recent Calls',
  difficulty: 'easy',
  tags: ['design', 'simulation'],
  description: `You have a \`RecentCounter\` class which counts the number of recent requests within a certain time frame.

Implement the \`RecentCounter\` class:

- \`RecentCounter()\` Initializes the counter with zero recent requests.
- \`int ping(t)\` Adds a new request at time \`t\`, where \`t\` represents some time in milliseconds, and returns the number of requests that has happened in the past \`3000\` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range \`[t - 3000, t]\`.

It is **guaranteed** that every call to \`ping\` uses a strictly larger value of \`t\` than the previous call.

Simulate with arrays of operations. Return results (\`null\` for constructor).`,
  constraints: [
    '`1 <= t <= 10^9`',
    'Each test case will call `ping` with **strictly increasing** values of `t`.',
    'At most `10^4` calls will be made to `ping`.',
  ],
  examples: [
    {
      input: 'ops = ["RecentCounter","ping","ping","ping","ping"], args = [[],[1],[100],[3001],[3002]]',
      output: '[null,1,2,3,3]',
      explanation: 'ping(1): [1-3000,1] = [-2999,1] → just [1] → 1. ping(100): [−2900,100] → 1,100 → 2. ping(3001): [1,3001] → 1,100,3001 → 3. ping(3002): [2,3002] → 100,3001,3002 → 3.',
    },
  ],
  hints: [
    'Use a queue. On each ping(t), add t to the queue, then remove all elements from the front that are < t - 3000. The queue size is the answer.',
    'Since pings arrive in strictly increasing order of t, all elements in the queue are also in increasing order. A simple shift() from the front removes the oldest out-of-range elements.',
    'The window [t-3000, t] always moves forward, so elements never re-enter once they are removed. The queue acts as a sliding window of valid timestamps.',
  ],
  functionName: 'recentCounter',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function recentCounter(ops, args) {

}`,
    typescript: 'function recentCounter(ops: string[], args: number[][]): (number | null)[] {\n\n}',
    python: `def recentCounter(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['RecentCounter', 'ping', 'ping', 'ping', 'ping'],
        [[], [1], [100], [3001], [3002]],
      ],
      expected: [null, 1, 2, 3, 3],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['RecentCounter', 'ping'],
        [[], [5000]],
      ],
      expected: [null, 1],
    },
    {
      args: [
        ['RecentCounter', 'ping', 'ping', 'ping'],
        [[], [1], [3001], [6001]],
      ],
      expected: [null, 1, 2, 2],
    },
    {
      args: [
        ['RecentCounter', 'ping', 'ping', 'ping', 'ping', 'ping'],
        [[], [1], [2], [3], [4], [3002]],
      ],
      expected: [null, 1, 2, 3, 4, 4],
    },
    {
      args: [
        ['RecentCounter', 'ping', 'ping', 'ping', 'ping'],
        [[], [1000], [2000], [3000], [4000]],
      ],
      expected: [null, 1, 2, 3, 4],
    },
    {
      args: [
        ['RecentCounter', 'ping', 'ping'],
        [[], [10000], [13001]],
      ],
      expected: [null, 1, 1],
    },
  ],
};
