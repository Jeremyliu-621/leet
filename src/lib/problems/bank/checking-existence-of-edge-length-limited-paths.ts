import type { Problem } from '../types';

export const problem: Problem = {
  id: 'checking-existence-of-edge-length-limited-paths',
  title: 'Checking Existence of Edge Length Limited Paths',
  difficulty: 'hard',
  tags: ['union-find', 'graph', 'arrays'],
  description: `An undirected graph of \`n\` nodes is defined by \`edgeList\`, where \`edgeList[i] = [ui, vi, disi]\` denotes an edge between nodes \`ui\` and \`vi\` with distance \`disi\`. Note that there may be multiple edges between two nodes.

Given an array \`queries\`, where \`queries[j] = [pj, qj, limitj]\`, your task is to determine for each \`queries[j]\` whether there is a path between \`pj\` and \`qj\` such that every edge on the path has a distance **strictly less than** \`limitj\`.

Return a boolean array \`answer\`, where \`answer.length == queries.length\` and the \`j\`-th value of \`answer\` is \`true\` if there is a path for \`queries[j]\` satisfying the constraint, or \`false\` otherwise.`,
  constraints: [
    '2 <= n <= 10^5',
    '1 <= edgeList.length, queries.length <= 10^5',
    'edgeList[i].length == 3',
    'queries[j].length == 3',
    '0 <= ui, vi, pj, qj <= n - 1',
    'ui != vi',
    'pj != qj',
    '1 <= disi, limitj <= 10^9',
  ],
  examples: [
    {
      input: 'n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8]], queries = [[0,1,2],[0,2,5],[0,2,9]]',
      output: '[false,true,true]',
      explanation: 'Query [0,1,2]: no edge with weight < 2 connects 0 and 1. Query [0,2,5]: edges (0,1,2) and (1,2,4) are both < 5, forming path 0→1→2. Query [0,2,9]: all edges are < 9, direct path via (2,0,8) or via 0→1→2.',
    },
    {
      input: 'n = 5, edgeList = [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], queries = [[0,4,14],[1,4,14]]',
      output: '[true,true]',
      explanation: 'All edges are < 14, so the full path 0→1→2→3→4 is available for both queries.',
    },
  ],
  hints: [
    'Sort the edges by weight and the queries by their limit. Process queries in increasing order of limit using a Union-Find. Add edges whose weight is strictly less than the current query limit before answering the query.',
    'Since queries must be answered in original order, pair each query with its original index before sorting. After processing, place each answer back at the original index.',
    'Union-Find with path compression gives near-O(1) find/union, so the overall complexity is O((E + Q) log(E + Q)) dominated by sorting.',
  ],
  functionName: 'distanceLimitedPathsExist',
  params: ['n', 'edgeList', 'queries'],
  starterCode: {
    javascript: 'function distanceLimitedPathsExist(n, edgeList, queries) {\n  \n}\n',
    typescript: "function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {\n  \n}",

    python: 'def distanceLimitedPathsExist(n, edgeList, queries):\n    pass\n',
  },
  visibleTests: [
    {
      args: [3, [[0,1,2],[1,2,4],[2,0,8]], [[0,1,2],[0,2,5],[0,2,9]]],
      expected: [false, true, true],
    },
    {
      args: [5, [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], [[0,4,14],[1,4,14]]],
      expected: [true, true],
    },
  ],
  hiddenTests: [
    // n=2, single edge weight 3
    // query [0,1,3]: limit=3, edge weight 3 NOT < 3 → false
    // query [0,1,4]: limit=4, edge weight 3 < 4 → true
    { args: [2, [[0,1,3]], [[0,1,3],[0,1,4]]], expected: [false, true] },
    // n=3, chain with weight 5 each
    // [0,2,6]: 5 < 6, path 0→1→2 → true
    // [0,2,5]: no edge < 5 → false
    // [0,1,5]: no edge < 5 → false
    { args: [3, [[0,1,5],[1,2,5]], [[0,2,6],[0,2,5],[0,1,5]]], expected: [true, false, false] },
    // n=4, all edges weight 1
    // [0,3,2]: all edges < 2, path exists → true
    // [0,2,1]: no edge < 1 → false
    { args: [4, [[0,1,1],[1,2,1],[2,3,1]], [[0,3,2],[0,2,1]]], expected: [true, false] },
    // n=2, no edges at all — query asking for a path: impossible
    { args: [2, [], [[0,1,100]]], expected: [false] },
    // n=4, disconnected components: edges only in {0,1} and {2,3}
    // query [0,2,10]: components separate → false
    // query [0,1,10]: edge (0,1,5) < 10 → true
    { args: [4, [[0,1,5],[2,3,5]], [[0,2,10],[0,1,10]]], expected: [false, true] },
  ],
};
