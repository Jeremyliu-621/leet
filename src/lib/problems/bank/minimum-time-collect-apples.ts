import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-collect-apples',
  title: 'Minimum Time to Collect All Apples in a Tree',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `Given an undirected tree consisting of \`n\` vertices numbered from \`0\` to \`n-1\`, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

The edges of the undirected tree are given in the array \`edges\`, where \`edges[i] = [ai, bi]\` means that exists an edge connecting the vertices \`ai\` and \`bi\`. Additionally, there is a boolean array \`hasApple\`, where \`hasApple[i] = true\` means that vertex \`i\` has an apple; otherwise, it does not have any apple.`,
  constraints: [
    '1 <= n <= 10^5',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '0 <= ai < bi <= n - 1',
    'hasApple.length == n',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]',
      output: '8',
      explanation: 'The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is (0,1,4,1,5,1,0,2,3,2,0).',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]',
      output: '6',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]',
      output: '0',
    },
  ],
  hints: [
    'DFS from root 0. For each subtree rooted at child c, if the subtree contains any apple (or c itself has an apple), you must spend 2 seconds on the edge to c.',
    'Accumulate the cost from all subtrees that need visiting.',
    `\`\`\`js
// DFS: for each subtree, cost = sum of children costs + (2 if subtree has apples)
const adj = Array.from({length: n}, ()=>[]);
for (const [u,v] of edges) { adj[u].push(v); adj[v].push(u); }
function dfs(node, parent) {
  let cost = 0;
  for (const nb of adj[node]) {
    if (nb===parent) continue;
    const sub = dfs(nb, node);
    if (sub > 0 || hasApple[nb]) cost += sub + 2;
  }
  return cost;
}
return dfs(0,-1);\`\`\``,
  ],
  functionName: 'minTime',
  params: ['n', 'edges', 'hasApple'],
  starterCode: {
    javascript: 'function minTime(n, edges, hasApple) {\n\n}\n',
    python: 'def minTime(n, edges, hasApple):\n    pass\n',
  },
  visibleTests: [
    { args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, true, true, false]], expected: 8 },
    { args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, false, true, false]], expected: 6 },
    { args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, false, false, false, false, false]], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, [], [false]], expected: 0 },
    { args: [2, [[0, 1]], [false, true]], expected: 2 },
    { args: [3, [[0, 1], [0, 2]], [true, false, false]], expected: 0 },
    { args: [4, [[0, 1], [1, 2], [0, 3]], [true, true, true, false]], expected: 4 },
  ],
};
