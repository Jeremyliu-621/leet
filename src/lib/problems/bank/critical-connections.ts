import type { Problem } from '../types';

export const problem: Problem = {
  id: 'critical-connections',
  title: 'Critical Connections in a Network',
  difficulty: 'hard',
  tags: ['graph'],
  description: `There are \`n\` servers numbered from \`0\` to \`n - 1\` connected by undirected server-to-server connections. A **critical connection** is a connection that, if removed, will make some servers unable to reach some other server.

Return all critical connections in the network. Each connection \`[u, v]\` should have \`u < v\`, and the list may be returned in any order.

Your function receives \`n\` (number of servers) and \`connections\` (array of \`[u, v]\` pairs).`,
  constraints: [
    '2 <= n <= 10^5',
    'n - 1 <= connections.length <= 10^5',
    '0 <= u_i, v_i < n',
    'u_i != v_i',
    'There are no repeated connections',
  ],
  examples: [
    {
      input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
      output: '[[1,3]]',
      explanation:
        'Nodes 0, 1, 2 form a cycle so edges among them are not critical. Edge [1,3] is the only bridge — removing it disconnects node 3.',
    },
    {
      input: 'n = 2, connections = [[0,1]]',
      output: '[[0,1]]',
      explanation: 'The single edge is the only connection, so it is critical.',
    },
  ],
  hints: [
    'Use Tarjan\'s bridge-finding algorithm. Do a single DFS, assigning each node a discovery time `disc[u]` and a `low[u]` value representing the earliest-discovered node reachable from the subtree rooted at u.',
    'When processing neighbor v of u: if v is unvisited, recurse and then set `low[u] = min(low[u], low[v])`. If v is already visited (and is not the parent), set `low[u] = min(low[u], disc[v])`.',
    'An edge (u, v) is a bridge if `low[v] > disc[u]` after the DFS returns from v — meaning no node in v\'s subtree has a back-edge reaching u or any ancestor of u.',
  ],
  functionName: 'criticalConnections',
  params: ['n', 'connections'],
  starterCode: {
    javascript: 'function criticalConnections(n, connections) {\n  \n}\n',
    python: 'def criticalConnections(n, connections):\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[0, 1], [1, 2], [2, 0], [1, 3]]], expected: [[1, 3]] },
    { args: [2, [[0, 1]]], expected: [[0, 1]] },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
  ],
  hiddenTests: [
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: [[0, 1], [1, 2], [2, 3], [3, 4]] },
    { args: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: [] },
    { args: [5, [[0, 1], [1, 2], [2, 0], [3, 4], [0, 3]]], expected: [[0, 3], [3, 4]] },
  ],
};
