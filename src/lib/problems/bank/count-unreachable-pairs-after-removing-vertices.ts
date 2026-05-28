import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unreachable-pairs-after-removing-vertices',
  title: 'Count Unreachable Pairs of Nodes in an Undirected Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an integer \`n\`. There is an **undirected** graph with \`n\` nodes, numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\` where \`edges[i] = [a_i, b_i]\` denotes that there exists an **undirected** edge connecting nodes \`a_i\` and \`b_i\`.

Return the number of **pairs** of different nodes that are **unreachable** from each other.`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= edges.length <= 2 * 10^5',
    'edges[i].length == 2',
    '0 <= a_i, b_i < n',
    'a_i != b_i',
    'No duplicate edges.',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1]]',
      output: '2',
      explanation: 'Nodes 0 and 1 are connected. Unreachable pairs: (0,2) and (1,2). Total = 2.',
    },
    {
      input: 'n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]',
      output: '14',
    },
  ],
  hints: [
    'Find all connected components using Union-Find.',
    'For each component of size s, it contributes s × (remaining nodes) unreachable pairs.',
    `\`\`\`js
// Build adjacency list, DFS/BFS to find component sizes
// For each component of size s, it contributes s * (total - s) pairs (but halve at end)
const adj = Array.from({length: n}, ()=>[]);
for (const [u,v] of edges) { adj[u].push(v); adj[v].push(u); }
const vis = new Array(n).fill(false);
const sizes = [];
for (let i = 0; i < n; i++) {
  if (!vis[i]) { /* BFS to find component size */ sizes.push(size); }
}
let res = 0n, rem = BigInt(n);
for (const s of sizes) { rem -= BigInt(s); res += BigInt(s) * rem; }
return Number(res);\`\`\``,
  ],
  functionName: 'countPairs',
  params: ['n', 'edges'],
  starterCode: {
    javascript: 'function countPairs(n, edges) {\n\n}\n',
    typescript: "function countPairs(n: number, edges: number[][]): number {\n\n}",

    python: 'def countPairs(n, edges):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[0,1]]], expected: 2 },
    { args: [7, [[0,2],[0,5],[2,4],[1,6],[5,4]]], expected: 14 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 0 },
    { args: [2, []], expected: 1 },
    { args: [4, [[0,1],[2,3]]], expected: 4 },
    { args: [5, [[0,1],[1,2],[2,3],[3,4]]], expected: 0 },
  ],
};
