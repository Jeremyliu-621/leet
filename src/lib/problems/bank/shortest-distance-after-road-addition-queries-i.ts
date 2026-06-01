import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-distance-after-road-addition-queries-i',
  title: 'Shortest Distance After Road Addition Queries I',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `You are given an integer \`n\` and a 2D integer array \`queries\`.

There are \`n\` cities numbered from \`0\` to \`n - 1\`. Initially, there is a **unidirectional** road from city \`i\` to city \`i + 1\` for all \`0 <= i < n - 1\`.

\`queries[i] = [u_i, v_i]\` represents the addition of a new **unidirectional** road from city \`u_i\` to city \`v_i\`. After each query, you need to find the **length** of the **shortest path** from city \`0\` to city \`n - 1\`.

Return an array \`answer\` where for each \`i\` in the range \`[0, queries.length - 1]\`, \`answer[i]\` is the length of the shortest path from city \`0\` to city \`n - 1\` after processing the first \`i + 1\` queries.`,
  constraints: [
    '`3 <= n <= 500`',
    '`1 <= queries.length <= 500`',
    '`queries[i].length == 2`',
    '`0 <= queries[i][0] < queries[i][1] <= n - 1`',
    '`1 < queries[i][1] - queries[i][0]`',
    'There are no repeated roads.',
  ],
  examples: [
    {
      input: 'n = 5, queries = [[2,4],[0,2],[0,4]]',
      output: '[3,2,1]',
      explanation: 'Initial roads: 0→1→2→3→4 (distance 4). After [2,4]: shortest path 0→1→2→4 (distance 3). After [0,2]: shortest path 0→2→4 (distance 2). After [0,4]: shortest path 0→4 (distance 1).',
    },
    {
      input: 'n = 4, queries = [[0,3],[0,2]]',
      output: '[1,1]',
      explanation: 'After [0,3]: path 0→3 (distance 1). After [0,2]: the direct path 0→3 still gives distance 1.',
    },
  ],
  hints: [
    'After each query, run a BFS from node 0 to find the shortest distance to node n-1.',
    'Maintain an adjacency list. Start with edges i→i+1 for all i. Add each query edge before running BFS.',
    'BFS gives shortest path in an unweighted graph. Each edge has weight 1.',
  ],
  functionName: 'shortestDistanceAfterQueriesI',
  params: ['n', 'queries'],
  starterCode: {
    javascript: `function shortestDistanceAfterQueriesI(n, queries) {

}`,
    typescript: `function shortestDistanceAfterQueriesI(n: number, queries: number[][]): number[] {

}`,
    python: `def shortestDistanceAfterQueriesI(n, queries):
    pass`,
  },
  visibleTests: [
    { args: [5, [[2, 4], [0, 2], [0, 4]]], expected: [3, 2, 1] },
    { args: [4, [[0, 3], [0, 2]]], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [3, [[0, 2]]], expected: [1] },
    { args: [5, [[1, 3]]], expected: [3] },
    { args: [6, [[0, 5], [1, 4]]], expected: [1, 1] },
    { args: [5, [[0, 3], [1, 4]]], expected: [2, 2] },
    { args: [4, [[1, 3], [0, 2]]], expected: [2, 2] },
    { args: [5, [[0, 4], [0, 2], [1, 3]]], expected: [1, 1, 1] },
  ],
};
