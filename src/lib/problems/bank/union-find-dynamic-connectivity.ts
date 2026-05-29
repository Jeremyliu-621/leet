import type { Problem } from '../types';

export const problem: Problem = {
  id: 'union-find-dynamic-connectivity',
  title: 'Dynamic Connectivity Queries',
  difficulty: 'medium',
  tags: ['union-find', 'graph'],
  description: `You are given \`n\` nodes (labeled \`0\` to \`n-1\`) and a list of operations \`ops\` where each operation is:

- \`["union", u, v]\` — connect nodes \`u\` and \`v\` (they become part of the same component).
- \`["connected", u, v]\` — return \`true\` if \`u\` and \`v\` are in the same component, \`false\` otherwise.

Process all operations in order and return an array of boolean results (one per \`"connected"\` query).

Use **Union-Find (Disjoint Set Union)** with path compression and union by rank for O(α(n)) per operation.`,
  constraints: [
    '1 <= n <= 10^4',
    '1 <= ops.length <= 10^4',
    'ops[i][0] is "union" or "connected"',
    '0 <= u, v < n',
  ],
  examples: [
    {
      input: 'n = 5, ops = [["union",0,1],["connected",0,1],["connected",0,2],["union",1,2],["connected",0,2]]',
      output: '[true,false,true]',
      explanation: 'After union(0,1): {0,1},{2},{3},{4}. connected(0,1)=true. connected(0,2)=false. After union(1,2): {0,1,2}. connected(0,2)=true.',
    },
    {
      input: 'n = 3, ops = [["connected",0,1],["union",0,1],["connected",0,1]]',
      output: '[false,true]',
      explanation: 'Initially disconnected; after union, they are connected.',
    },
  ],
  hints: [
    'Maintain a `parent` array (initially `parent[i] = i`) and a `rank` array (initially all 0). `find(x)` returns the root with path compression.',
    '`union(u, v)`: find roots of u and v. If different, attach the smaller-rank root under the larger-rank root (union by rank). If ranks equal, increment the new root\'s rank.',
    'For each "connected" query, return `find(u) === find(v)`. Collect all such results in order.',
  ],
  functionName: 'dynamicConnectivity',
  params: ['n', 'ops'],
  starterCode: {
    javascript: `function dynamicConnectivity(n, ops) {
  // Initialize Union-Find with n nodes.
  // Process "union" and "connected" ops.
  // Return boolean results for all "connected" queries.
}`,
    typescript: `function dynamicConnectivity(n: number, ops: (string | number)[][]): boolean[] {
  // Initialize Union-Find with n nodes.
  // Process "union" and "connected" ops.
  // Return boolean results for all "connected" queries.
}`,
    python: `def dynamicConnectivity(n, ops):
    # Initialize Union-Find with n nodes.
    # Process "union" and "connected" ops.
    # Return boolean results for all "connected" queries.
    pass`,
  },
  visibleTests: [
    {
      args: [5, [['union',0,1],['connected',0,1],['connected',0,2],['union',1,2],['connected',0,2]]],
      expected: [true, false, true],
    },
    {
      args: [3, [['connected',0,1],['union',0,1],['connected',0,1]]],
      expected: [false, true],
    },
  ],
  hiddenTests: [
    { args: [1, [['connected',0,0]]], expected: [true] },
    { args: [2, [['connected',0,1],['union',0,1],['connected',0,1]]], expected: [false,true] },
    { args: [4, [['union',0,1],['union',2,3],['connected',0,2],['union',1,2],['connected',0,3]]], expected: [false,true] },
    { args: [5, [['union',0,1],['union',1,2],['union',2,3],['union',3,4],['connected',0,4]]], expected: [true] },
    { args: [6, [['connected',0,5],['union',0,1],['union',2,3],['union',4,5],['connected',0,2],['union',1,2],['connected',0,3]]], expected: [false,false,true] },
    { args: [3, [['union',0,1],['union',0,2],['connected',1,2],['connected',0,1],['connected',0,2]]], expected: [true,true,true] },
    { args: [4, [['connected',0,3],['union',0,1],['connected',0,3],['union',3,2],['connected',0,3]]], expected: [false,false,false] },
    { args: [5, [['union',0,4],['union',1,3],['connected',0,4],['connected',1,2],['union',2,3],['connected',1,2]]], expected: [true,false,true] },
  ],
};
