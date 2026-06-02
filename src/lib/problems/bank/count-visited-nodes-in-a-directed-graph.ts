import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-visited-nodes-in-a-directed-graph',
  title: 'Count Visited Nodes in a Directed Graph',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming'],
  description: `There is a **directed** graph with \`n\` nodes labeled from \`0\` to \`n - 1\`, where each node has **exactly one** outgoing edge.

The graph is represented with a given **0-indexed** integer array \`edges\` of length \`n\`, where \`edges[i]\` indicates that there is an edge from node \`i\` to node \`edges[i]\`.

Return an integer array \`answer\` of length \`n\` where \`answer[i]\` is the number of nodes visited when starting from node \`i\` until you reach a node you have already visited.`,
  constraints: [
    '`n == edges.length`',
    '`2 <= n <= 10^5`',
    '`0 <= edges[i] <= n - 1`',
    '`edges[i] != i`',
  ],
  examples: [
    {
      input: 'edges = [1,2,0,0]',
      output: '[3,3,3,4]',
      explanation: 'Nodes 0→1→2→0 form a cycle of length 3. Node 3→0→1→2→0 visits 4 nodes before revisiting.',
    },
    {
      input: 'edges = [1,2,3,4,0]',
      output: '[5,5,5,5,5]',
      explanation: 'All 5 nodes form a single cycle. Each node visits all 5.',
    },
    {
      input: 'edges = [2,0,0]',
      output: '[2,3,2]',
      explanation: 'Node 0→2→0: 2 nodes. Node 1→0→2→0: 3 nodes. Node 2→0→2: 2 nodes.',
    },
  ],
  hints: [
    'Each weakly connected component contains exactly one cycle (since each node has exactly one outgoing edge). Nodes on the cycle have answer = cycle length. Nodes leading into the cycle have answer = (distance to cycle) + cycle length.',
    'To find cycles: use a "coloring" DFS/BFS. During traversal, once you hit a node already seen in the current path, you have identified the cycle.',
    'After finding cycle lengths, do a second pass: for each non-cycle node, answer[i] = 1 + answer[edges[i]]. Process in reverse topological order (leaves first) using the cycle nodes as base cases.',
  ],
  functionName: 'countVisitedNodes',
  params: ['edges'],
  starterCode: {
    javascript: `function countVisitedNodes(edges) {
  const n = edges.length;
  const ans = new Array(n).fill(0);
  for (let start = 0; start < n; start++) {
    if (ans[start]) continue;
    const path = [], pos = new Map();
    let cur = start;
    while (!ans[cur] && !pos.has(cur)) {
      pos.set(cur, path.length);
      path.push(cur);
      cur = edges[cur];
    }
    if (ans[cur]) {
      for (let i = path.length - 1; i >= 0; i--) ans[path[i]] = ans[edges[path[i]]] + 1;
    } else {
      const cycleStart = pos.get(cur);
      const cycleLen = path.length - cycleStart;
      for (let i = cycleStart; i < path.length; i++) ans[path[i]] = cycleLen;
      for (let i = cycleStart - 1; i >= 0; i--) ans[path[i]] = ans[edges[path[i]]] + 1;
    }
  }
  return ans;
}`,
    typescript: `function countVisitedNodes(edges: number[]): number[] {
  const n = edges.length;
  const ans = new Array<number>(n).fill(0);
  for (let start = 0; start < n; start++) {
    if (ans[start]) continue;
    const path: number[] = [], pos = new Map<number, number>();
    let cur = start;
    while (!ans[cur] && !pos.has(cur)) {
      pos.set(cur, path.length);
      path.push(cur);
      cur = edges[cur]!;
    }
    if (ans[cur]) {
      for (let i = path.length - 1; i >= 0; i--) {
        ans[path[i]!] = ans[edges[path[i]!]!]! + 1;
      }
    } else {
      const cycleStart = pos.get(cur)!;
      const cycleLen = path.length - cycleStart;
      for (let i = cycleStart; i < path.length; i++) ans[path[i]!] = cycleLen;
      for (let i = cycleStart - 1; i >= 0; i--) ans[path[i]!] = ans[edges[path[i]!]!]! + 1;
    }
  }
  return ans;
}`,
    python: `def countVisitedNodes(edges):
    n = len(edges)
    ans = [0] * n
    for start in range(n):
        if ans[start]: continue
        path, pos = [], {}
        cur = start
        while not ans[cur] and cur not in pos:
            pos[cur] = len(path)
            path.append(cur)
            cur = edges[cur]
        if ans[cur]:
            for i in range(len(path) - 1, -1, -1):
                ans[path[i]] = ans[edges[path[i]]] + 1
        else:
            cycle_start = pos[cur]
            cycle_len = len(path) - cycle_start
            for i in range(cycle_start, len(path)): ans[path[i]] = cycle_len
            for i in range(cycle_start - 1, -1, -1): ans[path[i]] = ans[edges[path[i]]] + 1
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 0, 0]], expected: [3, 3, 3, 4] },
    { args: [[1, 2, 3, 4, 0]], expected: [5, 5, 5, 5, 5] },
    { args: [[2, 0, 0]], expected: [2, 3, 2] },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: [2, 2] },
    { args: [[1, 2, 1]], expected: [3, 2, 2] },
    { args: [[2, 3, 1, 0]], expected: [4, 4, 4, 4] },
    { args: [[1, 2, 3, 1]], expected: [4, 3, 3, 3] },
    { args: [[2, 0, 1]], expected: [3, 3, 3] },
    { args: [[1, 0, 3, 2]], expected: [2, 2, 2, 2] },
    { args: [[1, 2, 0, 4, 3]], expected: [3, 3, 3, 2, 2] },
    { args: [[1, 2, 3, 0, 5, 4]], expected: [4, 4, 4, 4, 2, 2] },
  ],
};
