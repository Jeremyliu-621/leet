import type { Problem } from '../types';

const JS_PREAMBLE = `
function allPathsRunner(graph) {
  const paths = allPathsSourceTarget(graph);
  return paths.slice().sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return a.length - b.length;
  });
}
`.trim();

const PY_PREAMBLE = `
def allPathsRunner(graph):
    paths = allPathsSourceTarget(graph)
    return sorted([list(p) for p in paths])
`.trim();

export const problem: Problem = {
  id: 'all-paths-source-target',
  title: 'All Paths From Source to Target',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given a directed acyclic graph (DAG) of \`n\` nodes labeled from \`0\` to \`n - 1\`, find all possible paths from node \`0\` to node \`n - 1\` and return them in **any order**.

The graph is given as \`graph\` where \`graph[i]\` is a list of all nodes you can visit from node \`i\`.

The runner sorts the output paths lexicographically before comparison.`,
  constraints: [
    'n == graph.length',
    '2 <= n <= 15',
    '0 <= graph[i][j] < n',
    'graph[i][j] != i (no self-loops)',
    'All the elements of graph[i] are unique',
    'The input graph is guaranteed to be a DAG',
  ],
  examples: [
    {
      input: 'graph = [[1,2],[3],[3],[]]',
      output: '[[0,1,3],[0,2,3]]',
      explanation: 'Two paths: 0→1→3 and 0→2→3.',
    },
    {
      input: 'graph = [[4,3,1],[3,2,4],[3],[4],[]]',
      output: '[[0,1,2,3,4],[0,1,3,4],[0,1,4],[0,3,4],[0,4]]',
      explanation: 'Five paths from node 0 to node 4, sorted lexicographically.',
    },
  ],
  hints: [
    'Use DFS with backtracking. Start at node 0 and explore all neighbors recursively.',
    'Maintain a current path. When you reach node n-1, add a copy of the current path to results.',
    'Since it\'s a DAG (no cycles), no need to track visited nodes — all paths terminate.',
  ],
  functionName: 'allPathsRunner',
  params: ['graph'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// allPathsRunner wrapper is pre-defined and sorts your output.
function allPathsSourceTarget(graph) {
  // Return array of all paths from node 0 to node n-1
}`,
    typescript: "function allPathsRunner(graph: (number[] | unknown[])[]): number[][] {\n  // Return array of all paths from node 0 to node n-1\n}",

    python: `# allPathsRunner wrapper is pre-defined and sorts your output.
def allPathsSourceTarget(graph):
    # Return list of all paths from node 0 to node n-1
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3], [3], []]], expected: [[0, 1, 3], [0, 2, 3]] },
    { args: [[[4, 3, 1], [3, 2, 4], [3], [4], []]], expected: [[0, 1, 2, 3, 4], [0, 1, 3, 4], [0, 1, 4], [0, 3, 4], [0, 4]] },
    { args: [[[1], []]], expected: [[0, 1]] },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3], [3], [3], []]], expected: [[0, 1, 3], [0, 2, 3], [0, 3]] },
    { args: [[[1, 3], [2], [3], []]], expected: [[0, 1, 2, 3], [0, 3]] },
    { args: [[[1], [2], [3], []]], expected: [[0, 1, 2, 3]] },
    { args: [[[1, 2], [2], []]], expected: [[0, 1, 2], [0, 2]] },
  ],
};
