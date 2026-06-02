import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-cycle-in-graph',
  title: 'Longest Cycle in a Graph',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given a **directed** graph of \`n\` nodes numbered from \`0\` to \`n - 1\`, where each node has **at most one** outgoing edge.

The graph is represented with a given **0-indexed** array \`edges\` of size \`n\`, indicating that there is a directed edge from node \`i\` to node \`edges[i]\`. If there is no outgoing edge from node \`i\`, then \`edges[i] == -1\`.

Return the **length of the longest cycle** in the graph. If no cycle exists, return \`-1\`.

A cycle is a path that starts and ends at the **same node**.`,
  constraints: [
    'n == edges.length',
    '2 <= n <= 10^5',
    '-1 <= edges[i] < n',
    'edges[i] != i',
  ],
  examples: [
    {
      input: 'edges = [3,3,4,2,3]',
      output: '3',
      explanation: 'Cycle: 2 → 4 → 3 → 2, length 3.',
    },
    {
      input: 'edges = [1,2,0]',
      output: '3',
      explanation: 'Cycle: 0 → 1 → 2 → 0, length 3.',
    },
    {
      input: 'edges = [-1,2,1]',
      output: '2',
      explanation: 'Cycle: 1 → 2 → 1, length 2.',
    },
  ],
  hints: [
    'Since each node has at most one outgoing edge, each connected component has at most one cycle.',
    'Use a timestamp-based DFS: record visit time for each node. When you reach a node visited in the current traversal, the cycle length is globalTime - visitTime[node].',
    'Skip nodes already fully processed from previous traversals.',
  ],
  functionName: 'longestCycle',
  params: ['edges'],
  starterCode: {
    javascript: `function longestCycle(edges) {
  const n = edges.length;
  const visited = new Uint8Array(n);
  const time = new Int32Array(n).fill(-1);
  let ans = -1, t = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    let curr = i;
    while (curr !== -1 && !visited[curr]) {
      visited[curr] = 1; time[curr] = t++; curr = edges[curr];
    }
    if (curr !== -1 && visited[curr] === 1) ans = Math.max(ans, t - time[curr]);
    curr = i;
    while (curr !== -1 && visited[curr] === 1) { visited[curr] = 2; curr = edges[curr]; }
  }
  return ans;
}`,
    typescript: `function longestCycle(edges: number[]): number {
  const n = edges.length;
  const visited = new Uint8Array(n);
  const time = new Int32Array(n).fill(-1);
  let ans = -1, t = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    let curr = i;
    while (curr !== -1 && !visited[curr]) {
      visited[curr] = 1; time[curr] = t++; curr = edges[curr];
    }
    if (curr !== -1 && visited[curr] === 1) ans = Math.max(ans, t - time[curr]);
    curr = i;
    while (curr !== -1 && visited[curr] === 1) { visited[curr] = 2; curr = edges[curr]; }
  }
  return ans;
}`,
    python: `def longestCycle(edges):
    n = len(edges)
    visited = [0] * n  # 0=unvisited, 1=in_current, 2=done
    time = [-1] * n
    ans = -1; t = 0
    for i in range(n):
        if visited[i]: continue
        curr = i
        while curr != -1 and not visited[curr]:
            visited[curr] = 1; time[curr] = t; t += 1; curr = edges[curr]
        if curr != -1 and visited[curr] == 1:
            ans = max(ans, t - time[curr])
        curr = i
        while curr != -1 and visited[curr] == 1:
            visited[curr] = 2; curr = edges[curr]
    return ans`,
  },
  visibleTests: [
    { args: [[3,3,4,2,3]], expected: 3 },
    { args: [[1,2,0]], expected: 3 },
    { args: [[-1,2,1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[-1,-1]], expected: -1 },
    { args: [[1,0]], expected: 2 },
    { args: [[1,2,3,4,0]], expected: 5 },
    { args: [[-1,0,-1,4,3]], expected: 2 },
    { args: [[1,2,-1,-1]], expected: -1 },
    { args: [[2,-1,3,1]], expected: -1 },
  ],
};
