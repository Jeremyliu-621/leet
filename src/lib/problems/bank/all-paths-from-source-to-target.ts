import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-paths-from-source-to-target',
  title: 'All Paths From Source to Target',
  difficulty: 'medium',
  tags: ['graph', 'backtracking'],
  description: `Given a directed acyclic graph (**DAG**) of \`n\` nodes labeled from \`0\` to \`n - 1\`, find all possible paths from node \`0\` to node \`n - 1\` and return them in **any order**.

The graph is given as follows: \`graph[i]\` is a list of all nodes you can visit from node \`i\` (i.e., there is a directed edge from node \`i\` to node \`graph[i][j]\`).`,
  constraints: [
    '`n == graph.length`',
    '`2 <= n <= 15`',
    '`0 <= graph[i][j] < n`',
    '`graph[i][j] != i` (i.e., no self-loops)',
    'All the elements of `graph[i]` are **unique**.',
    'The input graph is **guaranteed** to be a **DAG**.',
  ],
  examples: [
    {
      input: 'graph = [[1,2],[3],[3],[]]',
      output: '[[0,1,3],[0,2,3]]',
      explanation: 'There are two paths: 0→1→3 and 0→2→3.',
    },
    {
      input: 'graph = [[4,3,1],[3,2,4],[3],[4],[]]',
      output: '[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]',
    },
  ],
  hints: [
    'Use DFS/backtracking from node 0. Maintain a path array; when you reach node n-1, add a copy to results.',
    'Since the graph is a DAG (no cycles), you don\'t need a visited set — every path terminates at the target.',
    'Push the current node before recursing into its neighbors, pop after returning (standard backtracking pattern).',
  ],
  functionName: 'allPathsSourceTarget',
  params: ['graph'],
  starterCode: {
    javascript: `function allPathsSourceTarget(graph) {

}`,
    typescript: 'function allPathsSourceTarget(graph: number[][]): number[][] {\n\n}',
    python: `def allPathsSourceTarget(graph):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3], [3], []]], expected: [[0, 1, 3], [0, 2, 3]] },
    { args: [[[4, 3, 1], [3, 2, 4], [3], [4], []]], expected: [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]] },
  ],
  hiddenTests: [
    { args: [[[1], []]], expected: [[0, 1]] },
    { args: [[[1, 2], [2], []]], expected: [[0, 1, 2], [0, 2]] },
    { args: [[[1], [2], []]], expected: [[0, 1, 2]] },
    { args: [[[1, 2], [3], [3], [4], []]], expected: [[0, 1, 3, 4], [0, 2, 3, 4]] },
  ],
};
