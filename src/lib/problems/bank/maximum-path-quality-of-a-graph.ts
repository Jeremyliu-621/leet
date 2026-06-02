import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-path-quality-of-a-graph',
  title: 'Maximum Path Quality of a Graph',
  difficulty: 'hard',
  tags: ['graph', 'backtracking'],
  description: `There is an **undirected** graph with \`n\` nodes numbered from \`0\` to \`n - 1\` (**0-indexed**). You are given a **0-indexed** integer array \`values\` where \`values[i]\` is the **value** of the \`i\`th node. You are also given a **0-indexed** 2D integer array \`edges\`, where \`edges[j] = [u_j, v_j, time_j]\` indicates there is an undirected edge between node \`u_j\` and \`v_j\` with a traversal time of \`time_j\` seconds.

Finally, you are given an integer \`maxTime\`.

A **valid path** in the graph is any path that starts at node \`0\`, ends at node \`0\`, and takes **at most** \`maxTime\` seconds to complete. You may visit the same node multiple times. The **quality** of a valid path is the **sum of the values of the unique nodes visited** in the path (each node contributes its value at most once).

Return the **maximum quality** of a valid path.

**Note:** There are at most four edges connected to each node.`,
  constraints: [
    '`n == values.length`',
    '`1 <= n <= 1000`',
    '`0 <= values[i] <= 10^8`',
    '`0 <= edges.length <= 2000`',
    '`edges[j].length == 3`',
    '`0 <= u_j < v_j <= n - 1`',
    '`10 <= time_j, maxTime <= 100`',
    'All pairs `(u_j, v_j)` are **distinct**.',
    'There are at most four edges connected to each node.',
  ],
  examples: [
    {
      input: 'values = [0,32,10,43], edges = [[0,1,10],[1,2,15],[0,3,10]], maxTime = 49',
      output: '75',
      explanation: 'Path 0→3→0→1→0: visits nodes {0,3,1}, quality = 0+43+32 = 75.',
    },
    {
      input: 'values = [1,2,3,4], edges = [[0,1,10],[1,2,11],[0,3,12],[0,2,6]], maxTime = 20',
      output: '4',
      explanation: 'Best path visits only node 2 via 0→2→0: quality = 1+3 = 4.',
    },
  ],
  hints: [
    'Use DFS/backtracking from node 0. At each step, try all neighbors whose edge weight ≤ remaining time.',
    'Update the answer each time you return to node 0.',
    'The constraint of at most 4 edges per node and max edge weight 100 within maxTime ≤ 100 keeps the search space small.',
  ],
  functionName: 'maximalPathQuality',
  params: ['values', 'edges', 'maxTime'],
  starterCode: {
    javascript: `function maximalPathQuality(values, edges, maxTime) {
  const n = values.length;
  const adj = Array.from({length: n}, () => []);
  for (const [u, v, t] of edges) { adj[u].push([v, t]); adj[v].push([u, t]); }
  const count = new Array(n).fill(0);
  count[0] = 1;
  let ans = 0;
  const dfs = (node, timeLeft, quality) => {
    if (node === 0) ans = Math.max(ans, quality);
    for (const [next, t] of adj[node]) {
      if (t <= timeLeft) {
        const add = count[next] === 0 ? values[next] : 0;
        count[next]++;
        dfs(next, timeLeft - t, quality + add);
        count[next]--;
      }
    }
  };
  dfs(0, maxTime, values[0]);
  return ans;
}`,
    typescript: `function maximalPathQuality(values: number[], edges: number[][], maxTime: number): number {
  const n = values.length;
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const e of edges) { adj[e[0]!]!.push([e[1]!, e[2]!]); adj[e[1]!]!.push([e[0]!, e[2]!]); }
  const count = new Array<number>(n).fill(0);
  count[0] = 1;
  let ans = 0;
  const dfs = (node: number, timeLeft: number, quality: number): void => {
    if (node === 0) ans = Math.max(ans, quality);
    for (const [next, t] of adj[node]!) {
      if (t <= timeLeft) {
        const add = count[next]! === 0 ? values[next]! : 0;
        count[next]!++;
        dfs(next, timeLeft - t, quality + add);
        count[next]!--;
      }
    }
  };
  dfs(0, maxTime, values[0]!);
  return ans;
}`,
    python: `def maximalPathQuality(values, edges, maxTime):
    if hasattr(values, 'to_py'): values = list(values.to_py())
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    n = len(values)
    adj = [[] for _ in range(n)]
    for u, v, t in edges: adj[u].append((v, t)); adj[v].append((u, t))
    count = [0] * n
    count[0] = 1
    ans = [0]
    def dfs(node, time_left, quality):
        if node == 0: ans[0] = max(ans[0], quality)
        for nxt, t in adj[node]:
            if t <= time_left:
                add = values[nxt] if count[nxt] == 0 else 0
                count[nxt] += 1
                dfs(nxt, time_left - t, quality + add)
                count[nxt] -= 1
    dfs(0, maxTime, values[0])
    return ans[0]`,
  },
  visibleTests: [
    { args: [[0, 32, 10, 43], [[0, 1, 10], [1, 2, 15], [0, 3, 10]], 49], expected: 75 },
    { args: [[1, 2, 3, 4], [[0, 1, 10], [1, 2, 11], [0, 3, 12], [0, 2, 6]], 20], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 1, 2], [[1, 2, 10]], 10], expected: 0 },
    { args: [[1, 0], [[0, 1, 1]], 2], expected: 1 },
    { args: [[1, 2, 3], [[0, 1, 5], [1, 2, 5]], 15], expected: 3 },
    { args: [[5, 10, 15, 20], [[0, 1, 10], [0, 2, 10], [0, 3, 10]], 11], expected: 5 },
    { args: [[0, 32, 10, 43], [[0, 1, 10], [1, 2, 15], [0, 3, 10]], 20], expected: 43 },
  ],
};
