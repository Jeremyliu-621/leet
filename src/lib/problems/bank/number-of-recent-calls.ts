import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-recent-calls',
  title: 'Number of Recent Calls',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You have a \`RecentCounter\` class which counts the number of recent requests within a certain time frame.

Implement the \`RecentCounter\` class:

- \`RecentCounter()\` Initializes the counter with zero recent requests.
- \`int ping(int t)\` Adds a new request at time \`t\`, where \`t\` represents some time in milliseconds, and returns the number of requests that have happened in the past **3000 milliseconds** (inclusive of the current request): the range \`[t - 3000, t]\`.

It is **guaranteed** that every call to \`ping\` uses a strictly larger value of \`t\` than the previous call.

**Input format:** An array of operations \`[["RecentCounter", []], ["ping", [t]], ...]\`. Return an array of results (use \`null\` for the constructor).`,
  constraints: [
    '1 <= t <= 10^9',
    'Each test case will call ping with strictly increasing values of t.',
    'At most 10^4 calls will be made to ping.',
  ],
  examples: [
    {
      input: 'ops = [["RecentCounter",[]],["ping",[1]],["ping",[100]],["ping",[3001]],["ping",[3002]]]',
      output: '[null,1,2,3,3]',
      explanation: 'ping(1): requests in [1-3000,1]=[-2999,1] → only t=1 → 1. ping(100): [-2900,100] → t=1,100 → 2. ping(3001): [1,3001] → t=1,100,3001 → 3. ping(3002): [2,3002] → t=100,3001,3002 → 3 (t=1 dropped).',
    },
  ],
  hints: [
    'Use a queue (array/deque). On each ping, add the timestamp to the queue, then remove all timestamps smaller than `t - 3000` from the front.',
    'The queue size after cleanup is the answer.',
    'Since t is strictly increasing, cleanup always happens from the front of the queue.',
  ],
  functionName: 'recentCounterOps',
  params: ['ops'],
  starterCode: {
    javascript: `function recentCounterOps(ops) {
  const results = [];
  let counter;
  for (const [method, args] of ops) {
    if (method === 'RecentCounter') {
      counter = new RecentCounter();
      results.push(null);
    } else {
      results.push(counter[method](...args));
    }
  }
  return results;
}

class RecentCounter {
  constructor() {
    this.q = [];
  }
  ping(t) {
    this.q.push(t);
    while (this.q.length > 0 && this.q[0] < t - 3000) this.q.shift();
    return this.q.length;
  }
}`,
    typescript: `function recentCounterOps(ops: ((string | unknown[])[] | (string | number[])[])[]): (null | number)[] {
  const results: (null | number)[] = [];
  let counter: RecentCounter | undefined;
  for (const [method, args] of ops) {
    if (method === 'RecentCounter') {
      counter = new RecentCounter();
      results.push(null);
    } else if (method === 'ping' && counter) {
      results.push(counter.ping((args as number[])[0]!));
    }
  }
  return results;
}

class RecentCounter {
  private q: number[] = [];
  ping(t: number): number {
    this.q.push(t);
    while (this.q.length > 0 && this.q[0]! < t - 3000) this.q.shift();
    return this.q.length;
  }
}`,
    python: `def recentCounterOps(ops):
    ops = ops.to_py() if hasattr(ops, 'to_py') else list(ops)
    results = []
    counter = None
    for op in ops:
        op = op.to_py() if hasattr(op, 'to_py') else list(op)
        method = op[0]
        args = list(op[1].to_py() if hasattr(op[1], 'to_py') else op[1])
        if method == 'RecentCounter':
            counter = RecentCounter()
            results.append(None)
        else:
            results.append(getattr(counter, method)(*args))
    return results

class RecentCounter:
    def __init__(self):
        self.q = []
    def ping(self, t):
        self.q.append(t)
        while self.q and self.q[0] < t - 3000:
            self.q.pop(0)
        return len(self.q)`,
  },
  visibleTests: [
    {
      args: [[['RecentCounter', []], ['ping', [1]], ['ping', [100]], ['ping', [3001]], ['ping', [3002]]]],
      expected: [null, 1, 2, 3, 3],
    },
  ],
  hiddenTests: [
    {
      args: [[['RecentCounter', []], ['ping', [1]]]],
      expected: [null, 1],
    },
    {
      args: [[['RecentCounter', []], ['ping', [5000]]]],
      expected: [null, 1],
    },
    {
      args: [[['RecentCounter', []], ['ping', [1]], ['ping', [2]], ['ping', [3]], ['ping', [4]]]],
      expected: [null, 1, 2, 3, 4],
    },
    {
      args: [[['RecentCounter', []], ['ping', [1]], ['ping', [3001]]]],
      expected: [null, 1, 2],
    },
    {
      args: [[['RecentCounter', []], ['ping', [1]], ['ping', [3001]], ['ping', [4001]]]],
      expected: [null, 1, 2, 2],
    },
    {
      args: [[['RecentCounter', []], ['ping', [1000]], ['ping', [2000]], ['ping', [3000]], ['ping', [4001]]]],
      expected: [null, 1, 2, 3, 3],
    },
  ],
};
