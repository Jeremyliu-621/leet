import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-bipartite-matching',
  title: 'Maximum Bipartite Matching',
  difficulty: 'hard',
  tags: ['graph', 'arrays'],
  description: `You are given a bipartite graph with \`left\` nodes on one side (0-indexed: 0..left-1) and \`right\` nodes on the other side (0-indexed: 0..right-1), connected by edges \`[u, v]\` meaning left node \`u\` can be matched to right node \`v\`.

Find the **maximum bipartite matching**: the largest set of edges such that no left node and no right node appears more than once.

Return the **size** of the maximum matching.

**Example use-case:** \`left\` workers, \`right\` tasks — each edge means a worker is qualified for a task. Find the maximum number of tasks that can be assigned.`,
  constraints: [
    '1 <= left, right <= 500',
    '0 <= edges.length <= left * right',
    '0 <= u < left',
    '0 <= v < right',
    'No duplicate edges',
  ],
  examples: [
    {
      input: 'left = 3, right = 3, edges = [[0,0],[0,1],[1,1],[1,2],[2,2]]',
      output: '3',
      explanation: 'Perfect matching: 0↔0, 1↔1, 2↔2. Or: 0↔1, 1↔2, 2↔2 (but 2 taken twice). The augmenting path method finds: 0↔0, 1↔1, 2↔2 = 3 pairs.',
    },
    {
      input: 'left = 2, right = 1, edges = [[0,0],[1,0]]',
      output: '1',
      explanation: 'Both workers want task 0; only one can get it.',
    },
    {
      input: 'left = 3, right = 3, edges = [[0,0],[1,0],[2,0]]',
      output: '1',
      explanation: 'All three workers only qualify for task 0; at most 1 match.',
    },
  ],
  hints: [
    'Use **Kuhn\'s augmenting path algorithm** (DFS-based). For each left node u, try to find an augmenting path: a path starting at u, alternating between free edges and matched edges, ending at a free right node. If found, flip matched/free along the path.',
    'Keep matchR[v] = which left node is currently matched to right node v (or -1 if free). For each left node u, run a DFS: try each neighbor v. If v is free (matchR[v] == -1) or we can recursively re-route matchR[v] to another right node, match u to v.',
    `\`\`\`js
const adj = Array.from({length:left},()=>[]);
for (const [u,v] of edges) adj[u].push(v);
const matchR = new Int32Array(right).fill(-1);
function dfs(u, visited) {
  for (const v of adj[u]) {
    if (visited[v]) continue;
    visited[v] = true;
    if (matchR[v]===-1 || dfs(matchR[v], visited)) {
      matchR[v]=u; return true;
    }
  }
  return false;
}
let ans=0;
for (let u=0;u<left;u++) {
  if (dfs(u, new Uint8Array(right))) ans++;
}
return ans;\`\`\``,
  ],
  functionName: 'maximumBipartiteMatching',
  params: ['left', 'right', 'edges'],
  starterCode: {
    javascript: `function maximumBipartiteMatching(left, right, edges) {
  const adj = Array.from({length: left}, () => []);
  for (const [u, v] of edges) adj[u].push(v);
  const matchR = new Int32Array(right).fill(-1);
  function dfs(u, visited) {
    for (const v of adj[u]) {
      if (visited[v]) continue;
      visited[v] = true;
      if (matchR[v] === -1 || dfs(matchR[v], visited)) {
        matchR[v] = u; return true;
      }
    }
    return false;
  }
  let ans = 0;
  for (let u = 0; u < left; u++) {
    if (dfs(u, new Uint8Array(right))) ans++;
  }
  return ans;
}`,
    typescript: `function maximumBipartiteMatching(left: number, right: number, edges: number[][]): number {
  const adj: number[][] = Array.from({length: left}, () => []);
  for (const [u, v] of edges) adj[u]!.push(v);
  const matchR = new Int32Array(right).fill(-1);
  function dfs(u: number, visited: Uint8Array): boolean {
    for (const v of adj[u]!) {
      if (visited[v]) continue;
      visited[v] = 1;
      if (matchR[v] === -1 || dfs(matchR[v]!, visited)) {
        matchR[v] = u; return true;
      }
    }
    return false;
  }
  let ans = 0;
  for (let u = 0; u < left; u++) {
    if (dfs(u, new Uint8Array(right))) ans++;
  }
  return ans;
}`,
    python: `def maximumBipartiteMatching(left: int, right: int, edges: list[list[int]]) -> int:
    adj = [[] for _ in range(left)]
    for u, v in edges:
        adj[u].append(v)
    match_r = [-1] * right
    def dfs(u, visited):
        for v in adj[u]:
            if visited[v]: continue
            visited[v] = True
            if match_r[v] == -1 or dfs(match_r[v], visited):
                match_r[v] = u; return True
        return False
    ans = 0
    for u in range(left):
        if dfs(u, [False] * right):
            ans += 1
    return ans
`,
  },
  visibleTests: [
    {
      args: [3, 3, [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]]],
      expected: 3,
    },
    {
      args: [2, 1, [[0, 0], [1, 0]]],
      expected: 1,
    },
    {
      args: [3, 3, [[0, 0], [1, 0], [2, 0]]],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [4, 4, [[0, 0], [1, 1], [2, 2], [3, 3]]],
      expected: 4,
    },
    {
      args: [3, 3, [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]],
      expected: 3,
    },
    {
      args: [1, 1, [[0, 0]]],
      expected: 1,
    },
    {
      args: [2, 2, []],
      expected: 0,
    },
    {
      args: [4, 3, [[0, 0], [0, 1], [1, 0], [2, 1], [2, 2], [3, 2]]],
      expected: 3,
    },
    {
      args: [3, 2, [[0, 0], [1, 0], [1, 1], [2, 1]]],
      expected: 2,
    },
  ],
};
