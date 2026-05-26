import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-connected-components-in-an-undirected-graph',
  title: 'Number of Connected Components in an Undirected Graph',
  difficulty: 'medium',
  tags: ['union-find', 'graph'],
  description: `You have a graph of \`n\` nodes labeled from \`0\` to \`n - 1\`. You are given an integer \`n\` and a list of edges where \`edges[i] = [ai, bi]\` indicates that there is an undirected edge between nodes \`ai\` and \`bi\` in the graph.

Return the number of connected components in the graph.`,
  constraints: [
    '`1 <= n <= 2000`',
    '`0 <= edges.length <= 5000`',
    '`edges[i].length == 2`',
    '`0 <= ai, bi < n`',
    '`ai != bi`',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
      output: '2',
      explanation: 'Two components: {0,1,2} and {3,4}.',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
      output: '1',
      explanation: 'All five nodes are connected in one component.',
    },
  ],
  hints: [
    'Use Union-Find (DSU). Initialize each node as its own component (count = n). For each edge, if the two endpoints are in different components, union them and decrement the count.',
    'Alternatively, use BFS/DFS: start from each unvisited node and mark all reachable nodes as visited, counting the number of BFS/DFS starts.',
    '```js\nfunction countComponents(n, edges) {\n  const parent = Array.from({length:n},(_,i)=>i);\n  const rank = new Array(n).fill(0);\n  function find(x) { return parent[x]===x ? x : (parent[x]=find(parent[x])); }\n  let count = n;\n  for (const [a,b] of edges) {\n    const pa=find(a), pb=find(b);\n    if (pa!==pb) {\n      if (rank[pa]<rank[pb]) parent[pa]=pb;\n      else if (rank[pa]>rank[pb]) parent[pb]=pa;\n      else { parent[pb]=pa; rank[pa]++; }\n      count--;\n    }\n  }\n  return count;\n}\n```',
  ],
  functionName: 'countComponents',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countComponents(n, edges) {

}`,
    python: `def countComponents(n: int, edges: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [3, []], expected: 3 },
    { args: [4, [[0, 1], [2, 3]]], expected: 2 },
    { args: [1, []], expected: 1 },
    { args: [6, [[0, 1], [2, 3], [4, 5]]], expected: 3 },
  ],
};
