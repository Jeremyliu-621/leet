import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-distance-after-road-addition-queries-ii',
  title: 'Shortest Distance After Road Addition Queries II',
  difficulty: 'hard',
  tags: ['graph', 'union-find', 'arrays'],
  description: `You are given an integer \`n\` and a 2D integer array \`queries\`.

There are \`n\` cities numbered from \`0\` to \`n - 1\`. Initially, there is a **unidirectional** road from city \`i\` to city \`i + 1\` for all \`0 <= i < n - 1\`.

\`queries[i] = [u_i, v_i]\` represents the addition of a new **unidirectional** road from city \`u_i\` to city \`v_i\`. After each query, you need to find the **length** of the **shortest path** from city \`0\` to city \`n - 1\`.

Return an array \`answer\` where for each \`i\` in the range \`[0, queries.length - 1]\`, \`answer[i]\` is the length of the shortest path from city \`0\` to city \`n - 1\` after processing the first \`i + 1\` queries.

**Note:** The query intervals \`[u_i, v_i - 1]\` are guaranteed to be **non-overlapping** (no two intervals share a city as an intermediate node). This guarantee enables an efficient solution.`,
  constraints: [
    '`3 <= n <= 10^5`',
    '`1 <= queries.length <= 10^5`',
    '`queries[i].length == 2`',
    '`0 <= queries[i][0] < queries[i][1] <= n - 1`',
    '`1 < queries[i][1] - queries[i][0]`',
    'There are no repeated roads.',
    'The intervals `[u_i, v_i - 1]` across all queries are pairwise non-overlapping.',
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
    'The key insight: when you add road (u, v), every intermediate node between u+1 and v-1 that was previously a required stop becomes "skippable".',
    'Track the "next active node" after each city using a link array (similar to path compression in Union-Find). `link[i]` = the nearest active node at or after i.',
    'When adding edge (u, v): starting from findNext(u+1), deactivate all active nodes before v by setting link[i] = v. Each deactivation reduces the total path length by 1.',
    'findNext uses path compression for amortized O(α(n)) per query, giving overall O(n + q·α(n)) time.',
  ],
  functionName: 'shortestDistanceAfterQueriesII',
  params: ['n', 'queries'],
  starterCode: {
    javascript: `function shortestDistanceAfterQueriesII(n, queries) {

}`,
    typescript: `function shortestDistanceAfterQueriesII(n: number, queries: number[][]): number[] {

}`,
    python: `def shortestDistanceAfterQueriesII(n, queries):
    pass`,
  },
  visibleTests: [
    { args: [5, [[2, 4], [0, 2], [0, 4]]], expected: [3, 2, 1] },
    { args: [4, [[0, 3], [0, 2]]], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [3, [[0, 2]]], expected: [1] },
    { args: [5, [[0, 4]]], expected: [1] },
    { args: [6, [[0, 5], [1, 3]]], expected: [1, 1] },
    { args: [7, [[1, 5], [0, 6], [2, 4]]], expected: [3, 1, 1] },
    { args: [6, [[0, 3], [3, 5]]], expected: [3, 2] },
    { args: [5, [[0, 3], [0, 4]]], expected: [2, 1] },
  ],
};
