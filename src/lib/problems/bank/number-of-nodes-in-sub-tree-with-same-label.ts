import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-nodes-in-sub-tree-with-same-label',
  title: 'Number of Nodes in the Sub-Tree With the Same Label',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of \`n\` nodes numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` edges. The root of the tree is the node \`0\`, and each node of the tree has a label which is a **lowercase character** given in the string \`labels\` (i.e. \`labels[i]\` is the label of the \`i\`th node).

The \`edges\` array is given on the form \`edges[i] = [ai, bi]\`, which means there is an edge between nodes \`ai\` and \`bi\` in the tree.

Return an array of size \`n\` where \`ans[i]\` is the number of nodes in the subtree of the \`i\`th node which have the same label as node \`i\`.`,
  constraints: [
    '1 <= n <= 10^5',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '0 <= ai, bi < n',
    'ai != bi',
    'labels.length == n',
    'labels is consisting of only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"',
      output: '[2,1,1,1,1,1,1]',
      explanation: 'Node 0 (label a) has subtree nodes 0,1,2,3,4,5,6 — 2 have label a (nodes 0 and 2). Each other node has exactly 1 match (itself).',
    },
    {
      input: 'n = 4, edges = [[0,1],[1,2],[0,3]], labels = "bbbb"',
      output: '[4,2,1,1]',
      explanation: 'Node 0 has all 4 nodes with label b. Node 1 has subtree {1,2} with 2 nodes labeled b.',
    },
    {
      input: 'n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = "aabab"',
      output: '[3,2,1,1,1]',
      explanation: 'Node 0 (label a) has nodes 0,1,3 in its subtree with label a → 3. Node 1 (label a) has nodes 1,3 → 2.',
    },
  ],
  hints: [
    'Level 1: Post-order DFS: return the frequency array for each subtree. For each node, merge all children\'s frequency arrays.',
    'Level 2: ans[node] = freq[label_of_node] after merging all descendant frequencies.',
    'Level 3: The tree is undirected, so track the parent to avoid revisiting. Adjacency list + recursive DFS is clean.',
  ],
  functionName: 'countSubTrees',
  params: ['n', 'edges', 'labels'],
  starterCode: {
    javascript: `function countSubTrees(n, edges, labels) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const ans = new Array(n).fill(0);
  function dfs(node, parent) {
    const freq = new Array(26).fill(0);
    freq[labels.charCodeAt(node) - 97]++;
    for (const next of adj[node]) {
      if (next === parent) continue;
      const child = dfs(next, node);
      for (let i = 0; i < 26; i++) freq[i] += child[i];
    }
    ans[node] = freq[labels.charCodeAt(node) - 97];
    return freq;
  }
  dfs(0, -1);
  return ans;
}`,
    typescript: `function countSubTrees(n: number, edges: number[][], labels: string): number[] {
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u]!.push(v!);
    adj[v!]!.push(u!);
  }
  const ans = new Array(n).fill(0);
  function dfs(node: number, parent: number): number[] {
    const freq = new Array(26).fill(0);
    freq[labels.charCodeAt(node) - 97]++;
    for (const next of adj[node]!) {
      if (next === parent) continue;
      const child = dfs(next, node);
      for (let i = 0; i < 26; i++) freq[i] += child[i];
    }
    ans[node] = freq[labels.charCodeAt(node) - 97];
    return freq;
  }
  dfs(0, -1);
  return ans;
}`,
    python: `def countSubTrees(n, edges, labels):
    from collections import defaultdict
    adj = defaultdict(list)
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    ans = [0] * n
    def dfs(node, parent):
        freq = [0] * 26
        freq[ord(labels[node]) - ord('a')] += 1
        for nxt in adj[node]:
            if nxt == parent:
                continue
            child = dfs(nxt, node)
            for i in range(26):
                freq[i] += child[i]
        ans[node] = freq[ord(labels[node]) - ord('a')]
        return freq
    dfs(0, -1)
    return ans`,
  },
  visibleTests: [
    {
      args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], 'abaedcd'],
      expected: [2, 1, 1, 1, 1, 1, 1],
    },
    {
      args: [4, [[0, 1], [1, 2], [0, 3]], 'bbbb'],
      expected: [4, 2, 1, 1],
    },
    {
      args: [5, [[0, 1], [0, 2], [1, 3], [0, 4]], 'aabab'],
      expected: [3, 2, 1, 1, 1],
    },
  ],
  hiddenTests: [
    {
      args: [1, [], 'a'],
      expected: [1],
    },
    {
      args: [2, [[0, 1]], 'aa'],
      expected: [2, 1],
    },
    {
      args: [3, [[0, 1], [0, 2]], 'abc'],
      expected: [1, 1, 1],
    },
    {
      args: [6, [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]], 'aaabbb'],
      expected: [3, 1, 1, 1, 1, 1],
    },
    {
      args: [4, [[0, 1], [1, 2], [2, 3]], 'abab'],
      expected: [2, 2, 1, 1],
    },
  ],
};
