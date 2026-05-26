import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-zero-request-servers',
  title: 'Count Zero Request Servers',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer \`n\` denoting the total number of servers, and a 2D 0-indexed integer array \`logs\`, where \`logs[i] = [server_id, time]\` denotes that server \`server_id\` received a request at time \`time\`.

You are also given an integer \`x\` and a 0-indexed integer array \`queries\`.

Return a 0-indexed integer array \`arr\` of length \`queries.length\` where \`arr[i]\` represents the number of servers that did **not** receive any requests during the time interval \`[queries[i] - x, queries[i]]\` (both endpoints are inclusive).

Note that the server id's are 1-indexed, i.e., server ids are 1 to \`n\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= logs.length <= 10^5',
    '1 <= logs[i][0] <= n',
    '1 <= logs[i][1] <= 10^6',
    '1 <= x <= 10^5',
    '1 <= queries.length <= 10^5',
    '1 <= queries[i] <= 10^6',
  ],
  examples: [
    {
      input: 'n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]',
      output: '[1,2]',
      explanation: 'For query 10: window [5,10]. Server 1 (t=5) and server 2 (t=6) are active. Server 3 is not. Answer = 1. For query 11: window [6,11]. Only server 2 (t=6) is active. Servers 1 and 3 are not. Answer = 2.',
    },
    {
      input: 'n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]',
      output: '[0,1]',
      explanation: 'For query 3: window [1,3]. All 3 servers got requests. Answer = 0. For query 4: window [2,4]. Servers 1 (t=2) and 2 (t=4) got requests. Server 3 did not. Answer = 1.',
    },
  ],
  hints: [
    'Sort the logs by time and the queries by value (keeping track of original indices).',
    'Use a sliding window over sorted logs. For each query [q-x, q], advance a right pointer to include logs with time <= q and advance a left pointer to exclude logs with time < q-x.',
    'Maintain a frequency map of active servers in the current window. The count of distinct active servers gives the servers that DID receive requests; subtract from n to get the answer.',
  ],
  functionName: 'countServers',
  params: ['n', 'logs', 'x', 'queries'],
  starterCode: {
    javascript: `function countServers(n, logs, x, queries) {

}`,
    python: `def countServers(n, logs, x, queries):
    pass`,
  },
  visibleTests: [
    { args: [3, [[1, 3], [2, 6], [1, 5]], 5, [10, 11]], expected: [1, 2] },
    { args: [3, [[2, 4], [2, 1], [1, 2], [3, 1]], 2, [3, 4]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [1, [[1, 1]], 1, [2]], expected: [0] },
    { args: [2, [[1, 1]], 1, [3]], expected: [2] },
    { args: [3, [[1, 1], [2, 2], [3, 3]], 1, [1, 2, 3]], expected: [2, 1, 1] },
    { args: [5, [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5]], 0, [5]], expected: [0] },
    { args: [4, [[1, 1], [2, 3], [3, 5], [4, 7]], 2, [3, 5, 7]], expected: [2, 2, 2] },
  ],
};
