import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-path-different-adjacent-characters',
  title: 'Longest Path With Different Adjacent Characters',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given a **tree** (i.e., a connected, undirected graph with no cycles) **rooted at node \`0\`** consisting of \`n\` nodes numbered from \`0\` to \`n - 1\`. The tree is given as a **0-indexed** array \`parent\` of size \`n\`, where \`parent[0] == -1\` (root) and \`parent[i]\` is the parent of node \`i\` for \`i > 0\`.

You are also given a **0-indexed** string \`s\` of length \`n\`, where \`s[i]\` is the character assigned to node \`i\`.

Return the length of the **longest path** in the tree such that no pair of **adjacent** nodes on the path have the same character assigned to them.`,
  constraints: [
    '1 <= s.length <= 10^5',
    'parent.length == s.length',
    '0 <= parent[i] <= n - 1 for all valid i',
    'parent[0] == -1',
    's consists of only lowercase English letters',
    'The given input is guaranteed to be a valid tree.',
  ],
  examples: [
    {
      input: 'parent = [-1,0,0,1,1,2], s = "abacbe"',
      output: '3',
      explanation:
        'The longest valid path is 0→1→3 with characters "a","b","c" (all different), giving length 3.',
    },
    {
      input: 'parent = [-1,0,0,0], s = "aabc"',
      output: '3',
      explanation:
        'Node 0 ("a") has children 1("a"), 2("b"), 3("c"). Nodes 2 and 3 differ from 0 but not from each other directly. Best path: 2→0→3 with characters "b","a","c" (all different), length 3.',
    },
    {
      input: 'parent = [-1,0,1,1,2], s = "abcde"',
      output: '4',
      explanation:
        'Tree: 0("a")→1("b")→2("c")→4("e") and 1→3("d"). The path 3→1→2→4 has characters "d","b","c","e" — all different. Length 4.',
    },
  ],
  hints: [
    'Level 1: Build an adjacency list of children for each node. DFS from the root, returning the length of the longest valid downward path from each node.',
    'Level 2: At each node u, collect the valid downward lengths from all children c where s[c] != s[u]. Sort them descending and take the top two. The longest path passing through u is 1 + top1 + top2.',
    'Level 3: Track a global maximum. For each node u, call dfs(u): iterate over children, recursively compute dfs(child), and collect results where s[child] != s[u]. The longest path through u uses the two longest valid child extensions. Return 1 + longest single extension (for parent to use).',
  ],
  functionName: 'longestPath',
  params: ['parent', 's'],
  starterCode: {
    javascript: `function longestPath(parent, s) {

}`,
    typescript: `function longestPath(parent: number[], s: string): number {

}`,
    python: `def longestPath(parent, s):
    pass`,
  },
  visibleTests: [
    { args: [[-1, 0, 0, 1, 1, 2], 'abacbe'], expected: 3 },
    { args: [[-1, 0, 0, 0], 'aabc'], expected: 3 },
    { args: [[-1, 0, 1, 1, 2], 'abcde'], expected: 4 },
  ],
  hiddenTests: [
    { args: [[-1], 'a'], expected: 1 },
    { args: [[-1, 0], 'ab'], expected: 2 },
    { args: [[-1, 0], 'aa'], expected: 1 },
    { args: [[-1, 0, 0, 0, 0], 'abcde'], expected: 3 },
    { args: [[-1, 0, 1, 2, 3], 'abcde'], expected: 5 },
    { args: [[-1, 0, 1, 2, 3], 'aabcd'], expected: 4 },
    { args: [[-1, 0, 0, 1, 1, 2, 2], 'abcbdce'], expected: 5 },
    { args: [[-1, 0, 0, 0, 0, 0], 'abcdef'], expected: 3 },
  ],
};
