import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-zero-request-servers',
  title: 'Count Zero Request Servers',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are given an integer \`n\` denoting the total number of servers (numbered \`1\` to \`n\`), and a **0-indexed** 2D integer array \`logs\` where \`logs[i] = [server_id, time]\` denotes that server \`server_id\` received a request at time \`time\`.

You are also given an integer \`x\` and a **0-indexed** integer array \`queries\`.

For each query \`queries[j]\`, compute the number of servers that did **not receive any requests** during the time range **[queries[j] - x, queries[j]]** (inclusive on both ends).

Return an array \`ans\` of length \`queries.length\` where \`ans[j]\` is the answer to the \`j\`th query.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= logs.length <= 10^5',
    '1 <= x <= 10^5',
    '1 <= queries.length <= 10^5',
    '1 <= logs[i][0] <= n',
    '1 <= logs[i][1] <= 10^6',
    '1 <= queries[j] <= 10^6',
  ],
  examples: [
    {
      input: 'n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]',
      output: '[1,2]',
      explanation: 'For query 10: window [5,10]. Servers 1 (at 5) and 2 (at 6) had requests. Server 3 did not → answer is 1. For query 11: window [6,11]. Server 2 (at 6) had a request. Servers 1 and 3 did not → answer is 2.',
    },
    {
      input: 'n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]',
      output: '[0,1]',
      explanation: 'For query 3: window [1,3]. All 3 servers had requests in that range → 0. For query 4: window [2,4]. Server 3 had request at 1 (outside window). Servers 1 (at 2) and 2 (at 4) had requests → 1 server (server 3) with 0 requests.',
    },
  ],
  hints: [
    'Sort logs and queries. Use a sliding window over logs to maintain the set of active servers in the current time window.',
    'Process queries in sorted order (with original indices to restore order). Use two pointers on sorted logs to add/remove servers as the window slides.',
    'Keep a frequency map of server_id → count within the current window. The number of distinct active servers is the map size. Servers with no requests = n - map size.',
  ],
  functionName: 'countServers',
  params: ['n', 'logs', 'x', 'queries'],
  starterCode: {
    javascript: 'function countServers(n, logs, x, queries) {\n  // your code here\n}\n',
    typescript: "function countServers(n: number, logs: number[][], x: number, queries: number[]): number[] {\n  // your code here\n}",

    python: 'def countServers(n, logs, x, queries):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[1, 3], [2, 6], [1, 5]], 5, [10, 11]], expected: [1, 2] },
    { args: [3, [[2, 4], [2, 1], [1, 2], [3, 1]], 2, [3, 4]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [1, [[1, 1]], 1, [1]], expected: [0] },
    { args: [2, [[1, 1]], 1, [2]], expected: [1] },
    { args: [3, [[1, 1], [2, 2], [3, 3]], 1, [1, 2, 3]], expected: [2, 1, 1] },
    { args: [2, [[1, 5], [2, 5]], 0, [5]], expected: [0] },
    { args: [5, [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]], 10, [10]], expected: [0] },
    { args: [3, [[1, 100]], 5, [50]], expected: [3] },
  ],
};
