import type { Problem } from '../types';

export const problem: Problem = {
  id: 'collect-coins-in-a-tree',
  title: 'Collect Coins in a Tree',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `There exists an undirected and unrooted tree with \`n\` nodes indexed from \`0\` to \`n - 1\`. You are given an integer \`n\` and a 2D integer array \`edges\` of length \`n - 1\`, where \`edges[i] = [a_i, b_i]\` indicates that there is an edge between nodes \`a_i\` and \`b_i\` in the tree. You are also given an array \`coins\` of size \`n\` where \`coins[i]\` can be either \`0\` or \`1\`, where \`1\` indicates the presence of a coin in the vertex \`i\`.

A person can start and end at **any** vertex in the tree. Return the **minimum** number of edges the person needs to traverse to collect **all** the coins and then stop at any vertex.

Note that every edge can be traversed **multiple** times.`,
  constraints: [
    'n == coins.length',
    '1 <= n <= 3 * 10^4',
    '0 <= coins[i] <= 1',
    'edges.length == n - 1',
    '0 <= a_i, b_i < n',
    'a_i != b_i',
    'edges represents a valid tree',
  ],
  examples: [
    {
      input: 'coins = [1,0,0,0,0,1], edges = [[0,1],[1,2],[2,3],[3,4],[4,5]]',
      output: '2',
      explanation: 'Coins are at nodes 0 and 5. A node within 2 hops of the traversal path collects automatically. Start at node 2, traverse edge [2,3], then edge [3,4]—coins at 0 (2 hops from 2) and 5 (2 hops from 3) are collected. Answer: 2 edges.',
    },
    {
      input: 'coins = [0,0,0,1,1,0,0,1], edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[5,6],[5,7]]',
      output: '2',
    },
  ],
  hints: [
    'First, repeatedly remove leaf nodes with coins[leaf]=0. This shrinks the tree to only the "essential" part containing coin nodes.',
    'Then, perform two more rounds of leaf removal on this trimmed tree.',
    'The answer is 2 * (remaining number of edges). We multiply by 2 because each edge must be traversed forward and backward.',
    'After the 2 leaf-removal rounds, any remaining edge must be traversed exactly twice (once in each direction) to collect all coins.',
  ],
  functionName: 'collectCoins',
  params: ['coins', 'edges'],
  starterCode: {
    javascript: `function collectCoins(coins, edges) {
  // Topological leaf removal + count remaining edges
}`,
    typescript: `function collectCoins(coins: number[], edges: number[][]): number {
  // Topological leaf removal + count remaining edges
}`,
    python: `def collectCoins(coins, edges):
    # Topological leaf removal + count remaining edges
    pass`,
  },
  visibleTests: [
    { args: [[1,0,0,0,0,1], [[0,1],[1,2],[2,3],[3,4],[4,5]]], expected: 2 },
    { args: [[0,0,0,1,1,0,0,1], [[0,1],[0,2],[1,3],[1,4],[2,5],[5,6],[5,7]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0], []], expected: 0 },
    { args: [[1], []], expected: 0 },
    { args: [[1,1], [[0,1]]], expected: 0 },
    { args: [[0,1], [[0,1]]], expected: 0 },
    // 7-node path, coins at both ends → after trimming zero-coin leaves (none), trim 2 rounds: remaining 2 edges → answer 4
    { args: [[1,0,0,0,0,0,1], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]], expected: 4 },
    // 8-node path, coins at both ends → remaining 3 edges → answer 6
    { args: [[1,0,0,0,0,0,0,1], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]], expected: 6 },
    // zero-coin leaf gets trimmed first, then rest collapses
    { args: [[0,0,1], [[0,1],[1,2]]], expected: 0 },
    { args: [[1,0,0,0,0,0,0,0,1], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]], expected: 8 },
  ],
};
