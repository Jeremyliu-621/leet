import type { Problem } from '../types';

export const problem: Problem = {
  id: 'network-becomes-idle',
  title: 'The Time When the Network Becomes Idle',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `There is a network of \`n\` servers, labeled from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\`, where \`edges[i] = [ui, vi]\` indicates there is a message channel between servers \`ui\` and \`vi\`, and they can pass **one** message to each other every second. **Server 0** is the master server.

Every server (except the master server) needs to send a message to the master server and is waiting for a reply. Messages travel along the **shortest path**.

At second \`0\`, each data server \`i\` (i.e., where \`i != 0\`) sends its message to the master server.

Each data server \`i\` will re-send a new message every \`patience[i]\` seconds **if it has not received a reply** yet.

Return the **earliest second** starting from which the network **becomes idle**, i.e., all data servers have received a reply and there are no messages in transit.`,
  constraints: [
    'n == patience.length',
    '2 <= n <= 10^5',
    'patience[0] == 0',
    '1 <= patience[i] <= 10^5 for i != 0',
    '1 <= edges.length <= min(10^5, n*(n-1)/2)',
    'edges[i].length == 2',
    '0 <= ui, vi < n',
    'ui != vi',
    'There are no duplicate edges',
    'Each server can directly or indirectly reach the master server',
  ],
  examples: [
    {
      input: 'edges = [[0,1],[1,2]], patience = [0,2,1]',
      output: '8',
      explanation: 'Server 1 dist=1 (round trip=2), patience=2 resends at t=2,4. Reply arrives at t=2. Server 2 dist=2 (round trip=4), patience=1 resends at t=1,2,3. Last reply arrives at t=7.',
    },
    {
      input: 'edges = [[0,1],[0,2],[1,2]], patience = [0,10,10]',
      output: '3',
      explanation: 'Both servers have dist=1, round trip=2. They resend at t=10 (which never happens). Network becomes idle at t=3.',
    },
  ],
  hints: [
    'Use BFS from node 0 to find the shortest distance `d[i]` from the master to each data server. The round-trip time for server `i` is `2*d[i]`.',
    'Server `i` will send its first message at t=0, then resend every `patience[i]` seconds while waiting. The last resend happens at `t = floor((2*d[i]-1)/patience[i]) * patience[i]`. The last reply arrives at `t + 2*d[i]`.',
    'The network becomes idle at `max over all i of (last_reply[i] + 1)`. Compute this for all servers and return the maximum + 1.',
  ],
  functionName: 'networkBecomesIdle',
  params: ['edges', 'patience'],
  starterCode: {
    javascript: 'function networkBecomesIdle(edges, patience) {\n  \n}\n',
    python: 'def networkBecomesIdle(edges, patience):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[0, 1], [1, 2]], [0, 2, 1]],
      expected: 8,
    },
    {
      args: [[[0, 1], [0, 2], [1, 2]], [0, 10, 10]],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 1]], [0, 1]],
      expected: 4,
    },
    {
      args: [[[0, 1], [1, 2], [2, 3]], [0, 1, 2, 1]],
      expected: 12,
    },
    {
      args: [[[0, 1], [0, 2], [0, 3]], [0, 2, 3, 4]],
      expected: 3,
    },
    {
      args: [[[0, 1], [1, 2], [0, 3], [3, 4]], [0, 3, 2, 4, 1]],
      expected: 8,
    },
  ],
};
