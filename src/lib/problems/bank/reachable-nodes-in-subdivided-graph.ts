import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reachable-nodes-in-subdivided-graph',
  title: 'Reachable Nodes In Subdivided Graph',
  difficulty: 'hard',
  tags: ['shortest-path', 'graph', 'heap'],
  description: `You are given an undirected graph (not necessarily connected) with \`n\` nodes labeled \`0\` to \`n - 1\`. Each edge \`edges[i] = [u_i, v_i, cnt_i]\` represents an edge between nodes \`u_i\` and \`v_i\` with \`cnt_i\` new **subdivision nodes** inserted along it.

You start at node \`0\` with \`maxMoves\` moves. In one move you can travel to any adjacent node. Subdivision nodes along an edge each count as one step.

Return the number of **distinct nodes** you can reach (including node \`0\` and subdivision nodes).`,
  constraints: [
    '0 <= edges.length <= min(n*(n-1)/2, 10^4)',
    'edges[i].length == 3',
    '0 <= u_i, v_i < n',
    'u_i != v_i',
    '0 <= cnt_i <= 10^4',
    '0 <= maxMoves <= 10^9',
    '1 <= n <= 3000',
    'No two edges connect the same pair of nodes.',
  ],
  examples: [
    {
      input: 'edges = [[0,1,10],[0,2,1],[1,2,2]], maxMoves = 6, n = 3',
      output: '13',
      explanation:
        'Starting at 0: can reach node 2 (2 steps), 6 intermediate nodes on edge 0-2, and some intermediates on edges 0-1 and 1-2.',
    },
    {
      input: 'edges = [[0,1,4],[1,2,6],[0,2,8],[1,3,1]], maxMoves = 10, n = 4',
      output: '23',
    },
  ],
  hints: [
    'Run Dijkstra from node 0 to find the shortest distance to each main node (ignoring subdivision nodes — each edge costs cnt+1 to traverse end-to-end).',
    'After Dijkstra, for each main node i: if dist[i] <= maxMoves, count it. For each edge (u,v,cnt): the nodes reachable from side u = min(maxMoves - dist[u], 0), from side v = min(maxMoves - dist[v], 0). Add min(cnt, fromU + fromV) intermediate nodes from that edge.',
    '```js\nfunction reachableNodes(edges, maxMoves, n) {\n  const g = Array.from({length:n}, ()=>[]);\n  for (const [u,v,c] of edges) { g[u].push([v,c]); g[v].push([u,c]); }\n  const dist = new Array(n).fill(Infinity); dist[0] = 0;\n  const pq = [[0,0]];\n  while (pq.length) {\n    pq.sort((a,b)=>a[0]-b[0]);\n    const [d,u] = pq.shift();\n    if (d > dist[u]) continue;\n    for (const [v,c] of g[u]) { const nd=d+c+1; if(nd<dist[v]){dist[v]=nd;pq.push([nd,v]);} }\n  }\n  let ans = dist.filter(d=>d<=maxMoves).length;\n  for (const [u,v,c] of edges) {\n    const fu = dist[u]<=maxMoves?maxMoves-dist[u]:0;\n    const fv = dist[v]<=maxMoves?maxMoves-dist[v]:0;\n    ans += Math.min(c, fu+fv);\n  }\n  return ans;\n}\n```',
  ],
  functionName: 'reachableNodes',
  params: ['edges', 'maxMoves', 'n'],
  starterCode: {
    javascript: 'function reachableNodes(edges, maxMoves, n) {\n  \n}\n',
    python: 'def reachableNodes(edges, maxMoves, n):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3], expected: 13 },
    { args: [[[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4], expected: 23 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5], expected: 1 },
    { args: [[], 0, 1], expected: 1 },
    { args: [[[0, 1, 0]], 1, 2], expected: 2 },
    { args: [[[0, 1, 5]], 3, 2], expected: 4 },
    { args: [[[0, 1, 0], [1, 2, 0]], 2, 3], expected: 3 },
  ],
};
