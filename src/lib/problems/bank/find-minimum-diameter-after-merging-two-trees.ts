import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-diameter-after-merging-two-trees',
  title: 'Find Minimum Diameter After Merging Two Trees',
  difficulty: 'hard',
  tags: ['graph', 'tree'],
  description: `There exist two **undirected** trees with \`n\` and \`m\` nodes numbered \`0\` to \`n-1\` and \`0\` to \`m-1\` respectively. You are given two 2D integer arrays \`edges1\` and \`edges2\` of lengths \`n-1\` and \`m-1\`, where \`edges1[i] = [aᵢ, bᵢ]\` indicates an edge in the first tree and \`edges2[i] = [aᵢ, bᵢ]\` indicates an edge in the second tree.

You must connect one node from the first tree with one node from the second tree using an edge.

Return the **minimum** possible **diameter** of the resulting tree.

The **diameter** of a tree is the length of the longest path between any two nodes.`,
  constraints: [
    '`1 <= n, m <= 10^5`',
    '`edges1.length == n - 1`',
    '`edges2.length == m - 1`',
    'The input is generated such that both `edges1` and `edges2` represent valid trees.',
  ],
  examples: [
    {
      input: 'edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]',
      output: '3',
      explanation: 'Tree 1 is a star (diameter 2). Tree 2 is a single edge (diameter 1). Connecting their centers gives diameter max(2, 1, ⌈2/2⌉+⌈1/2⌉+1) = 3.',
    },
    {
      input: 'edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]',
      output: '5',
      explanation: 'Both trees have diameter 4. Connecting centers: max(4, 4, 2+2+1) = 5.',
    },
  ],
  hints: [
    'Compute the diameter of each tree using two BFS passes: BFS from any node to find the farthest node, then BFS from that node to get the true diameter.',
    'The optimal connection attaches the "center" of tree 1 to the center of tree 2. The center minimizes the max depth and is at distance `⌈d/2⌉` from either endpoint of the diameter.',
    'The answer is `max(d1, d2, ⌈d1/2⌉ + ⌈d2/2⌉ + 1)`.',
    `\`\`\`js
function minimumDiameterAfterMerge(edges1, edges2) {
  const getDiameter = (edges, n) => {
    if (n === 1) return 0;
    const adj = Array.from({length: n}, () => []);
    for (const [u,v] of edges) { adj[u].push(v); adj[v].push(u); }
    const bfs = (start) => {
      const dist = new Array(n).fill(-1);
      dist[start] = 0;
      const q = [start];
      let far = start;
      for (let h = 0; h < q.length; h++) {
        for (const v of adj[q[h]]) {
          if (dist[v] === -1) { dist[v] = dist[q[h]] + 1; q.push(v); if (dist[v] > dist[far]) far = v; }
        }
      }
      return [far, dist[far]];
    };
    return bfs(bfs(0)[0])[1];
  };
  const d1 = getDiameter(edges1, edges1.length + 1);
  const d2 = getDiameter(edges2, edges2.length + 1);
  return Math.max(d1, d2, Math.ceil(d1 / 2) + Math.ceil(d2 / 2) + 1);
}\`\`\``,
  ],
  functionName: 'minimumDiameterAfterMerge',
  params: ['edges1', 'edges2'],
  starterCode: {
    javascript: `function minimumDiameterAfterMerge(edges1, edges2) {

}`,
    typescript: 'function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {\n\n}',
    python: `def minimumDiameterAfterMerge(edges1, edges2):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [0, 2], [0, 3]], [[0, 1]]], expected: 3 },
    { args: [[[0, 1], [0, 2], [0, 3], [2, 4], [2, 5], [3, 6], [2, 7]], [[0, 1], [0, 2], [0, 3], [2, 4], [2, 5], [3, 6], [2, 7]]], expected: 5 },
    { args: [[], []], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 1]], []], expected: 2 },
    { args: [[[0, 1], [1, 2]], [[0, 1], [1, 2]]], expected: 3 },
    { args: [[[0, 1], [1, 2], [2, 3]], [[0, 1]]], expected: 4 },
    { args: [[[0, 1], [1, 2], [2, 3], [3, 4]], [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 5 },
    { args: [[[0, 1]], [[0, 1]]], expected: 3 },
  ],
};
