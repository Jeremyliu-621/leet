import type { Problem } from '../types';

export const problem: Problem = {
  id: 'network-delay-time',
  title: 'Network Delay Time',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a network of \`n\` nodes, labeled from \`1\` to \`n\`. You are also given \`times\`, a list of travel times as directed edges \`times[i] = [u, v, w]\`, where \`u\` is the source node, \`v\` is the target node, and \`w\` is the time it takes for a signal to travel from \`u\` to \`v\`.

We will send a signal from a given node \`k\`. Return the **minimum time it takes for all** \`n\` **nodes to receive the signal**. If it is impossible for all \`n\` nodes to receive the signal, return \`-1\`.

**Approach:** Use **Dijkstra's algorithm** starting from node \`k\`. Maintain a min-heap of (distance, node). Once all reachable nodes are finalized, check if the maximum distance equals the answer. If any node is unreachable, return -1.`,
  constraints: [
    '1 <= k <= n <= 100',
    '1 <= times.length <= 6000',
    'times[i].length == 3',
    '1 <= u, v <= n',
    'u != v',
    '0 <= w <= 100',
    'All edges (u, v) are unique',
  ],
  examples: [
    {
      input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2',
      output: '2',
      explanation: 'Nodes 1 and 3 are reached in time 1; node 4 is reached at time 2.',
    },
    {
      input: 'times = [[1,2,1]], n = 2, k = 1',
      output: '1',
      explanation: 'Node 2 is reached from node 1 in 1 unit of time.',
    },
  ],
  hints: [
    'Build an adjacency list from the `times` edges.',
    'Run Dijkstra from node `k` using a min-heap (priority queue). In JS, simulate with a sorted array or simple greedy approach since n ≤ 100.',
    'After Dijkstra, the answer is `max(dist[1..n])`. If any node\'s distance is `Infinity`, return -1.',
  ],
  functionName: 'networkDelayTime',
  params: ['times', 'n', 'k'],
  preamble: {},
  starterCode: {
    javascript: 'function networkDelayTime(times, n, k) {\n  \n}\n',
    python: 'def networkDelayTime(times, n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2], expected: 2 },
    { args: [[[1, 2, 1]], 2, 1], expected: 1 },
    { args: [[[1, 2, 1]], 2, 2], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3, 1], expected: 3 },
    { args: [[[1, 2, 1], [2, 1, 3]], 2, 2], expected: 3 },
    { args: [[[1, 2, 9], [1, 3, 1], [3, 2, 1]], 3, 1], expected: 2 },
    { args: [[[1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 1, 1]], 4, 1], expected: 3 },
  ],
};
