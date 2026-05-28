import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-path-with-different-adjacent-characters',
  title: 'Longest Path With Different Adjacent Characters',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given a **tree** (i.e. a connected, undirected graph with no cycles) **rooted** at node \`0\` consisting of \`n\` nodes numbered from \`0\` to \`n - 1\`. The tree is given as a **0-indexed** array \`parent\` of size \`n\`, where \`parent[i]\` is the parent of node \`i\`. Since node \`0\` is the root, \`parent[0] == -1\`.

You are also given a string \`s\` of length \`n\`, where \`s[i]\` is the character assigned to node \`i\`.

Return the length of the **longest path** in the tree such that no pair of **adjacent** nodes on the path have the same character assigned to them.`,
  constraints: [
    'n == parent.length == s.length',
    '1 <= n <= 10^5',
    '0 <= parent[i] <= n - 1 for all i >= 1',
    'parent[0] == -1',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'parent = [-1,0,0,1,1,2], s = "abacbe"',
      output: '3',
      explanation: 'The longest path is 0→1→3 (a→b→a, but b≠a so OK) or 0→2→5 (a→a→e, but 0→2 both "a" is NOT OK). Path 0→1→3: a,b,a — all adjacent pairs differ. Length = 3.',
    },
    {
      input: 'parent = [-1,0,0,0], s = "aabc"',
      output: '3',
      explanation: 'Path: 2→0→3 (b→a→c) or 1→0→2 (a→a→b, blocked at 1-0). 2→0→3: "bac" all adjacent differ. Length = 3.',
    },
  ],
  hints: [
    'Build adjacency lists (parent-to-children). Then DFS from the root.',
    'At each node, compute the top-2 longest chains through children (where child character ≠ node character).',
    'Answer at this node = 1 + top1 + top2 (combining two best branches). Update global max.',
  ],
  functionName: 'longestPath',
  params: ['parent', 's'],
  starterCode: {
    javascript: 'function longestPath(parent, s) {\n  \n}\n',
    typescript: "function longestPath(parent: number[], s: string): number {\n  \n}",

    python: 'def longestPath(parent, s):\n    pass\n',
  },
  visibleTests: [
    { args: [[-1,0,0,1,1,2], 'abacbe'], expected: 3 },
    { args: [[-1,0,0,0], 'aabc'], expected: 3 },
    { args: [[-1,0], 'ab'], expected: 2 },
  ],
  hiddenTests: [
    { args: [[-1], 'a'], expected: 1 },
    { args: [[-1,0,0], 'aab'], expected: 2 },
    { args: [[-1,0,0], 'abc'], expected: 3 },
    { args: [[-1,0,1,2], 'abcd'], expected: 4 },
    { args: [[-1,0,1,2], 'aaaa'], expected: 1 },
  ],
};
