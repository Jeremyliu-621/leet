import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-collect-all-apples',
  title: 'Minimum Time to Collect All Apples in a Tree',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `Given an undirected tree consisting of \`n\` vertices numbered from \`0\` to \`n-1\`, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at **vertex 0** and coming back to this vertex.

The edges of the undirected tree are given in the array \`edges\`, where \`edges[i] = [ai, bi]\` means that exists an edge connecting the vertices \`ai\` and \`bi\`. Additionally, there is a boolean array \`hasApple\`, where \`hasApple[i] = true\` means that vertex \`i\` has an apple; otherwise, it does not have any apple.`,
  constraints: [
    '1 <= n <= 10^5',
    'edges.length == n - 1',
    '0 <= ai < bi < n',
    'hasApple.length == n',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]',
      output: '8',
      explanation: 'You need to visit vertices 4, 5 (subtree of 1) and vertex 2. Path costs 8 seconds.',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]',
      output: '6',
      explanation: 'Visit vertices 5 and 2. Cost = 6.',
    },
  ],
  hints: [
    'Build the tree and do a DFS from root 0.',
    'A subtree is worth visiting if it contains an apple (hasApple[node] or any child subtree has an apple).',
    'Each edge to a "useful" subtree costs 2 (go and return). Sum up all such edges.',
  ],
  functionName: 'minTime',
  params: ['n', 'edges', 'hasApple'],
  starterCode: {
    javascript: `function minTime(n, edges, hasApple) {

}`,
    typescript: "function minTime(n: number, edges: number[][], hasApple: boolean[]): number {\n\n}",

    python: `def minTime(n, edges, hasApple):
    pass`,
  },
  visibleTests: [
    { args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, true, true, false]], expected: 8 },
    { args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, false, true, false]], expected: 6 },
  ],
  hiddenTests: [
    { args: [4, [[0, 2], [0, 3], [1, 2]], [false, true, false, false]], expected: 4 },
    { args: [1, [], [false]], expected: 0 },
    { args: [3, [[0, 1], [1, 2]], [false, false, true]], expected: 4 },
  ],
};
