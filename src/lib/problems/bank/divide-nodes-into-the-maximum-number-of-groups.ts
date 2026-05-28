import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-nodes-into-the-maximum-number-of-groups',
  title: 'Divide Nodes Into the Maximum Number of Groups',
  difficulty: 'hard',
  tags: ['union-find', 'graph'],
  description: `You are given a positive integer \`n\` representing the number of nodes in an **undirected** graph. The nodes are labeled from **1** to \`n\`.

You are also given a 2D integer array \`edges\`, where \`edges[i] = [a_i, b_i]\` indicates there is a **bidirectional** edge between nodes \`a_i\` and \`b_i\`. **Notice** that the given graph may be disconnected.

Divide the nodes of the graph into \`m\` groups (**1-indexed**) such that:
- Each node in the graph belongs to **exactly one** group.
- For every pair of nodes in the graph that are connected by an edge \`[a_i, b_i]\`, if \`a_i\` belongs to group \`x_a\` and \`b_i\` belongs to group \`x_b\`, then \`|x_a - x_b| = 1\`.

Return the **maximum** number of groups (i.e., maximum \`m\`) into which you can divide the nodes. Return \`-1\` if no such grouping is possible.`,
  constraints: [
    '`1 <= n <= 500`',
    '`1 <= edges.length <= 10^4`',
    '`edges[i].length == 2`',
    '`1 <= a_i, b_i <= n`',
    '`a_i != b_i`',
    'There is at most one edge between any pair of vertices.',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]',
      output: '4',
      explanation:
        'Assign: node 3 → group 1, node 2 → group 2, nodes 1 and 6 → group 3, nodes 4 and 5 → group 4. All edges connect adjacent groups.',
    },
    {
      input: 'n = 3, edges = [[1,2],[2,3],[3,1]]',
      output: '-1',
      explanation: 'The graph is an odd-length cycle, so it is not bipartite and cannot be grouped.',
    },
  ],
  hints: [
    'The grouping condition (|group(a) − group(b)| = 1 for every edge) is equivalent to requiring each **connected component** to be **bipartite**. If any component is not bipartite, return -1. Use Union-Find or BFS 2-coloring to check.',
    'For each bipartite connected component, the maximum groups is 1 + the maximum BFS depth when BFS is started from each node in the component. Try BFS from every node in the component and take the maximum depth encountered. Sum the per-component maxima.',
    '```js\nfunction magnificentSets(n, edges) {\n  const adj = Array.from({length: n+1}, () => []);\n  for (const [a,b] of edges) { adj[a].push(b); adj[b].push(a); }\n  const color = new Array(n+1).fill(-1);\n  const comp = new Array(n+1).fill(-1);\n  let cid = 0;\n  for (let s = 1; s <= n; s++) {\n    if (color[s] !== -1) continue;\n    const q = [s]; color[s] = 0; comp[s] = cid;\n    let head = 0;\n    while (head < q.length) {\n      const u = q[head++];\n      for (const v of adj[u]) {\n        if (color[v] === -1) { color[v] = color[u]^1; comp[v]=cid; q.push(v); }\n        else if (color[v] === color[u]) return -1;\n      }\n    }\n    cid++;\n  }\n  function bfsDepth(start) {\n    const d = new Array(n+1).fill(-1); d[start]=0;\n    const q=[start]; let head=0, max=0;\n    while(head<q.length){const u=q[head++]; for(const v of adj[u]){if(d[v]===-1){d[v]=d[u]+1;max=Math.max(max,d[v]);q.push(v);}}}\n    return max;\n  }\n  const byComp = Array.from({length:cid},()=>[]);\n  for(let u=1;u<=n;u++) byComp[comp[u]].push(u);\n  let ans=0;\n  for(const nodes of byComp){\n    let best=0;\n    for(const s of nodes) best=Math.max(best, bfsDepth(s)+1);\n    ans+=best;\n  }\n  return ans;\n}\n```',
  ],
  functionName: 'magnificentSets',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function magnificentSets(n, edges) {

}`,
    python: `def magnificentSets(n: int, edges: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [6, [[1, 2], [1, 4], [1, 5], [2, 6], [2, 3], [4, 6]]], expected: 4 },
    { args: [3, [[1, 2], [2, 3], [3, 1]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [4, [[1, 2], [3, 4]]], expected: 4 },
    { args: [4, [[1, 2], [2, 3], [3, 4]]], expected: 4 },
    { args: [2, [[1, 2]]], expected: 2 },
    { args: [5, [[1, 2], [2, 3], [1, 3]]], expected: -1 },
  ],
};
