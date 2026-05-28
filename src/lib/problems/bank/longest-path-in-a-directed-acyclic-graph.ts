import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-path-in-a-directed-acyclic-graph',
  title: 'Longest Path in a Directed Acyclic Graph with Labels',
  difficulty: 'medium',
  tags: ['graph', 'dynamic-programming', 'strings'],
  description: `You are given a **directed acyclic graph (DAG)** with \`n\` nodes numbered from \`0\` to \`n - 1\`, a string \`s\` where \`s[i]\` is the character assigned to node \`i\`, and a 2D array \`edges\` where \`edges[i] = [u, v]\` represents a directed edge from node \`u\` to node \`v\`.

Return the length of the **longest path** in the graph such that all characters along the path are **consecutive** (i.e., for any two adjacent nodes \`u → v\` on the path, \`s[v] == s[u] + 1\`).`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= edges.length <= 10^5',
    'edges[i].length == 2',
    '0 <= u_i, v_i <= n - 1',
    's.length == n',
    's consists of only lowercase English letters.',
    'The given graph is a DAG.',
  ],
  examples: [
    {
      input: 'edges = [[0,1],[1,2]], n = 3, s = "abc"',
      output: '3',
      explanation: 'Node 0=\'a\', 1=\'b\', 2=\'c\'. Path 0→1→2 has consecutive labels a→b→c. Length = 3.',
    },
    {
      input: 'edges = [[0,1],[1,2]], n = 3, s = "abe"',
      output: '2',
      explanation: 'Node 0=\'a\', 1=\'b\', 2=\'e\'. Path 0→1 has consecutive labels a→b (length 2). Edge 1→2 is not consecutive (b→e). Longest = 2.',
    },
  ],
  hints: [
    'This is a DAG DP problem. Use topological sort (Kahn\'s algorithm) to process nodes in topological order.',
    'For each node v, let dp[v] = length of the longest consecutive path ending at v.',
    'When processing an edge u→v, if s[v] == s[u] + 1, then dp[v] = max(dp[v], dp[u] + 1).',
    'Answer is max(dp[i]) for all i.',
  ],
  functionName: 'longestPath',
  params: ['edges', 'n', 's'],
  starterCode: {
    javascript: `function longestPath(edges, n, s) {

}`,
    typescript: "function longestPath(edges: number[][], n: number, s: string): number {\n\n}",

    python: `def longestPath(edges, n, s):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 2]], 3, 'abc'], expected: 3 },
    { args: [[[0, 1], [1, 2]], 3, 'abe'], expected: 2 },
  ],
  hiddenTests: [
    { args: [[], 1, 'a'], expected: 1 },
    { args: [[[0, 1]], 2, 'ab'], expected: 2 },
    { args: [[[0, 1]], 2, 'ba'], expected: 1 },
    { args: [[[0, 1], [1, 2], [2, 3]], 4, 'abcd'], expected: 4 },
    { args: [[[0, 2], [1, 2], [2, 3]], 4, 'abce'], expected: 2 },
    { args: [[[0, 1], [0, 2], [1, 3], [2, 3]], 4, 'abbc'], expected: 3 },
  ],
};
