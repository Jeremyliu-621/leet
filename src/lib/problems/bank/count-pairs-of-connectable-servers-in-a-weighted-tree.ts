import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-of-connectable-servers-in-a-weighted-tree',
  title: 'Count Pairs of Connectable Servers in a Weighted Tree',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `There is an unrooted weighted tree with \`n\` nodes labeled from \`0\` to \`n - 1\`.

You are given the integer \`n\` and a 2D integer array \`edges\`, where \`edges[i] = [ai, bi, weighti]\` indicates that there is an edge between nodes \`ai\` and \`bi\` with weight \`weighti\`.

You are also given an integer \`signalSpeed\`.

Two nodes \`a\` and \`b\` are **connectable** through node \`c\` if:

- \`c\` is on the path from \`a\` to \`b\`.
- Both \`dist(a, c)\` and \`dist(b, c)\` are divisible by \`signalSpeed\`.

Return an integer array \`result\` of size \`n\` where \`result[i]\` is the number of pairs of nodes that are connectable through node \`i\`.`,
  constraints: [
    '2 <= n <= 1000',
    'edges.length == n - 1',
    '0 <= ai, bi < n',
    '1 <= weighti <= 10^6',
    '1 <= signalSpeed <= 10^6',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]], signalSpeed = 1',
      output: '[0,4,6,6,4,0]',
      explanation:
        'For node 1, branches to nodes [0] and [2,3,4,5] with signalSpeed=1 all have distances divisible by 1. Pairs = 1×4 = 4.',
    },
    {
      input: 'n = 3, edges = [[0,1,2],[0,2,4]], signalSpeed = 2',
      output: '[1,0,0]',
      explanation: 'Node 0 has two branches each with one reachable node (dist 2 and 4). Pairs = 1×1 = 1.',
    },
  ],
  hints: [
    'For each node k, perform a DFS from each neighboring direction, counting nodes reachable with dist % signalSpeed == 0.',
    'Use the running product trick: for each new branch count c, total += prev * c, then prev += c.',
    'The total for node k is the number of pairs across all pairs of branches.',
  ],
  functionName: 'countPairsOfConnectableServers',
  params: ['edges', 'signalSpeed'],
  starterCode: {
    javascript: `function countPairsOfConnectableServers(edges, signalSpeed) {
  const n = edges.length + 1;
  // Build adjacency list: adj[u] = [[v, weight], ...]
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b, w] of edges) {
    adj[a].push([b, w]);
    adj[b].push([a, w]);
  }
  const result = new Array(n).fill(0);
  for (let k = 0; k < n; k++) {
    // For each neighbor branch of k, count nodes reachable with dist % signalSpeed === 0
    // Use running product: for each new branch count c, pairs += prev * c, prev += c
    // TODO: DFS each branch from k (excluding k) counting valid nodes
  }
  return result;
}`,
    typescript: `function countPairsOfConnectableServers(edges: number[][], signalSpeed: number): number[] {
  const n = edges.length + 1;
  // Build adjacency list: adj[u] = [[v, weight], ...]
  const adj: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [a, b, w] of edges) {
    adj[a].push([b, w]);
    adj[b].push([a, w]);
  }
  const result = new Array(n).fill(0);
  for (let k = 0; k < n; k++) {
    // For each neighbor branch of k, count nodes reachable with dist % signalSpeed === 0
    // Use running product: for each new branch count c, pairs += prev * c, prev += c
    // TODO: DFS each branch from k (excluding k) counting valid nodes
  }
  return result;
}`,
    python: `def countPairsOfConnectableServers(edges: list[list[int]], signal_speed: int) -> list[int]:
    from collections import defaultdict
    n = len(edges) + 1
    # Build adjacency list: adj[u] = [(v, weight), ...]
    adj = defaultdict(list)
    for a, b, w in edges:
        adj[a].append((b, w))
        adj[b].append((a, w))
    result = [0] * n
    for k in range(n):
        # For each neighbor branch of k, count nodes reachable with dist % signal_speed == 0
        # Use running product: for each new branch count c, pairs += prev * c, prev += c
        # TODO: DFS each branch from k (excluding k) counting valid nodes
        pass
    return result`,
  },
  visibleTests: [
    { args: [[[0, 1, 1], [1, 2, 5], [2, 3, 13], [3, 4, 9], [4, 5, 2]], 1], expected: [0, 4, 6, 6, 4, 0] },
    { args: [[[0, 1, 2], [0, 2, 4]], 2], expected: [1, 0, 0] },
  ],
  hiddenTests: [
    { args: [[[0, 1, 1]], 1], expected: [0, 0] },
    { args: [[[0, 1, 4]], 4], expected: [0, 0] },
    { args: [[[0, 1, 4]], 3], expected: [0, 0] },
    { args: [[[0, 1, 1], [0, 2, 1], [0, 3, 1]], 1], expected: [3, 0, 0, 0] },
    { args: [[[0, 1, 3], [0, 2, 3], [1, 3, 3]], 3], expected: [2, 2, 0, 0] },
    { args: [[[0, 1, 2], [1, 2, 2], [2, 3, 2]], 2], expected: [0, 2, 2, 0] },
  ],
};
