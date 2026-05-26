import type { Problem } from '../types';

export const problem: Problem = {
  id: 'critical-connections-in-a-network',
  title: 'Critical Connections in a Network',
  difficulty: 'hard',
  tags: ['graph'],
  description: `There are \`n\` servers numbered from \`0\` to \`n - 1\` connected by undirected server-to-server \`connections\` where \`connections[i] = [ai, bi]\` represents a connection between servers \`ai\` and \`bi\`.

A **critical connection** is a connection that, if removed, will make some servers unable to reach other servers.

Return all critical connections in the network in any order.`,
  constraints: [
    '2 <= n <= 10^5',
    'n - 1 <= connections.length <= 10^5',
    '0 <= ai, bi <= n - 1',
    'ai != bi',
    'There are no repeated connections.',
  ],
  examples: [
    {
      input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
      output: '[[1,3]]',
      explanation: '[1,3] is the only critical connection. Removing it disconnects server 3.',
    },
    {
      input: 'n = 2, connections = [[0,1]]',
      output: '[[0,1]]',
      explanation: 'The single connection is critical.',
    },
  ],
  hints: [
    'Use Tarjan\'s bridge-finding algorithm with DFS timestamps (disc) and lowest reachable time (low).',
    'An edge (u, v) is a bridge if low[v] > disc[u] — meaning v cannot reach u or any ancestor of u without traversing this edge.',
    'Return all bridges sorted for determinism.',
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
  ],
  hiddenTests: [
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: [[0, 1], [1, 2], [2, 3]] },
    { args: [5, [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4]]], expected: [[1, 3], [3, 4]] },
    { args: [6, [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [5, 3]]], expected: [[1, 3]] },
  ],
};
