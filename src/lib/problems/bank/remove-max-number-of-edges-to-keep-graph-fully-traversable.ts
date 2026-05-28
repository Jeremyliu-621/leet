import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-max-number-of-edges-to-keep-graph-fully-traversable',
  title: 'Remove Max Number of Edges to Keep Graph Fully Traversable',
  difficulty: 'hard',
  tags: ['union-find', 'graph'],
  description: `Alice and Bob have an undirected graph of \`n\` nodes and three types of edges:
- Type 1: Can be traversed by Alice only.
- Type 2: Can be traversed by Bob only.
- Type 3: Can be traversed by both Alice and Bob.

Given an array \`edges\` where \`edges[i] = [typei, ui, vi]\` represents a bidirectional edge of type \`typei\` between nodes \`ui\` and \`vi\`, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob.

The graph is fully traversable by Alice if there exists a path from every node to every other node using type-1 and type-3 edges. Similarly for Bob using type-2 and type-3 edges.

Return the maximum number of edges you can remove, or return \`-1\` if it's impossible.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= edges.length <= min(0.5 * n * (n - 1), 10^5)',
    'edges[i].length == 3',
    '1 <= edges[i][0] <= 3',
    '1 <= edges[i][1], edges[i][2] <= n',
    'All tuples (typei, ui, vi) are distinct.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]',
      output: '2',
      explanation: 'If we remove the 2 edges [1,1,2] and [1,1,3], the graph is still fully traversable by Alice (via type-1 and type-3 edges) and Bob (via type-2 and type-3 edges). 2 is the maximum number we can remove.',
    },
    {
      input: 'n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]',
      output: '0',
      explanation: 'Notice that removing any edge makes it impossible for Alice or Bob to fully traverse the graph.',
    },
    {
      input: 'n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]',
      output: '-1',
      explanation: 'In the current graph, Alice cannot reach node 4. Therefore it\'s impossible for Alice and Bob to both fully traverse the graph.',
    },
  ],
  hints: [
    'Build two separate Union-Find structures: one for Alice (type-1 + type-3 edges) and one for Bob (type-2 + type-3 edges). Process type-3 edges first since they benefit both.',
    'For each edge, count it as "needed" only if it actually merges two previously disconnected components in the respective DSU(s). Count each edge that does not merge any component as removable.',
    'At the end, verify both DSUs have exactly 1 connected component (n-1 unions performed). If not, return -1.',
  ],
  functionName: 'maxNumEdgesToRemove',
  params: ['n', 'edges'],
  starterCode: {
    javascript: 'function maxNumEdgesToRemove(n, edges) {\n  \n}\n',
    typescript: "function maxNumEdgesToRemove(n: number, edges: number[][]): number {\n  \n}",

    python: 'def maxNumEdgesToRemove(n, edges):\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]], expected: 2 },
    { args: [4, [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]], expected: 0 },
    { args: [4, [[3,2,3],[1,1,2],[2,3,4]]], expected: -1 },
  ],
  hiddenTests: [
    // n=2, single type-3 edge — both can traverse, 0 removable
    { args: [2, [[3,1,2]]], expected: 0 },
    // n=3, all type-3 forming a complete graph (3 edges) — only 2 needed for spanning tree, 1 removable
    { args: [3, [[3,1,2],[3,2,3],[3,1,3]]], expected: 1 },
    // n=2, separate type-1 and type-2 edges both connecting same nodes —
    // Alice: {1,2} connected via type-1. Bob: {1,2} connected via type-2. No type-3 needed. 0 removable.
    { args: [2, [[1,1,2],[2,1,2]]], expected: 0 },
    // n=3, triangle with type-3: [3,1,2],[3,2,3],[3,1,3] — 3 edges for 2 spanning trees but shared.
    // Alice and Bob both need spanning tree. Type-3 edges serve both.
    // With 3 nodes: need 2 type-3 edges for a spanning tree shared by both. 3rd is removable.
    // Already tested above as expected: 1.
    // n=4, type-3 chain 1-2-3-4 plus redundant type-1 edge 1-4
    // type-3 edges cover all nodes for both. type-1 edge 1-4 redundant for Alice (already connected).
    // 3 type-3 edges (chain) + 1 type-1 = 4 edges total. 1 removable.
    { args: [4, [[3,1,2],[3,2,3],[3,3,4],[1,1,4]]], expected: 1 },
    // impossible: Alice can't reach node 3 (no type-1 or type-3 edge connects to 3)
    { args: [3, [[1,1,2],[2,2,3]]], expected: -1 },
  ],
};
