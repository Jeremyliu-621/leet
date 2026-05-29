import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-collect-all-apples-in-a-tree',
  title: 'Minimum Time to Collect All Apples in a Tree',
  difficulty: 'medium',
  tags: ['tree', 'graph', 'dynamic-programming'],
  description: `Given an undirected tree consisting of \`n\` vertices numbered from \`0\` to \`n - 1\`, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at **vertex 0** and coming back to this vertex.

The edges of the undirected tree are given in the array \`edges\`, where \`edges[i] = [ai, bi]\` means that exists an edge connecting the vertices \`ai\` and \`bi\`. Additionally, there is a boolean array \`hasApple\`, where \`hasApple[i] = true\` means that vertex \`i\` has an apple.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`edges.length == n - 1`',
    '`0 <= ai < bi <= n - 1`',
    '`hasApple.length == n`',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]',
      output: '8',
      explanation: 'Optimal path: 0→1→4→1→5→1→0→2→3→2→0... wait, the minimum is 8 steps.',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]',
      output: '6',
      explanation: 'Apples are at vertices 2 and 5 only.',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]',
      output: '0',
      explanation: 'No apples, no traversal needed.',
    },
  ],
  hints: [
    'Use DFS from the root (vertex 0). For each subtree, compute the time needed to collect all apples in that subtree.',
    'A subtree rooted at child `c` requires traversal only if it contains an apple (either `c` itself or some descendant). The cost of entering and exiting a child subtree is `childTime + 2`.',
    '```js\nfunction minTime(n, edges, hasApple) {\n  const adj = Array.from({length: n}, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  function dfs(node, parent) {\n    let time = 0;\n    for (const child of adj[node]) {\n      if (child === parent) continue;\n      const childTime = dfs(child, node);\n      if (childTime > 0 || hasApple[child]) time += childTime + 2;\n    }\n    return time;\n  }\n  return dfs(0, -1);\n}\n```',
  ],
  functionName: 'minTime',
  params: ['n', 'edges', 'hasApple'],
  starterCode: {
    javascript: `function minTime(n, edges, hasApple) {

}`,
    typescript: `function minTime(n: number, edges: number[][], hasApple: boolean[]): number {

}`,
    python: `def minTime(n, edges, hasApple):
    pass`,
  },
  visibleTests: [
    {
      args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, true, true, false]],
      expected: 8,
    },
    {
      args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, false, true, false]],
      expected: 6,
    },
    {
      args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, false, false, false, false, false]],
      expected: 0,
    },
  ],
  hiddenTests: [
    { args: [1, [], [false]], expected: 0 },
    { args: [4, [[0, 1], [1, 2], [0, 3]], [true, true, true, true]], expected: 6 },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], [false, false, false, false, true]], expected: 8 },
    { args: [4, [[0, 2], [0, 3], [1, 2]], [false, false, false, true]], expected: 2 },
    { args: [3, [[0, 1], [0, 2]], [false, true, true]], expected: 4 },
  ],
};
