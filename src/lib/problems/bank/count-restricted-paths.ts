import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-restricted-paths',
  title: 'Count Restricted Paths From First to Last Node',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming', 'shortest-path', 'heap'],
  description: `There is an undirected weighted connected graph with \`n\` nodes labeled \`1\` to \`n\`. Given an array \`edges\` where \`edges[i] = [u_i, v_i, weight_i]\` represents an edge between nodes \`u_i\` and \`v_i\` with a weight of \`weight_i\`.

A path is a **restricted path** if the **distance to the last node** (\`n\`) strictly decreases at each step. Formally, let \`distanceToLastNode(x)\` be the shortest distance from \`x\` to \`n\`. For a path \`v_1 → v_2 → ... → v_m\` where \`v_1 = 1\` and \`v_m = n\`, it is restricted if \`distanceToLastNode(v_i) > distanceToLastNode(v_{i+1})\` for all \`1 ≤ i < m\`.

Return the **number of restricted paths** from node \`1\` to node \`n\`. Since the answer may be large, return it **modulo 10^9 + 7**.`,
  constraints: [
    '1 <= n <= 2 * 10^4',
    'n - 1 <= edges.length <= 4 * 10^4',
    'edges[i].length == 3',
    '1 <= u_i, v_i, weight_i <= n',
    'u_i != v_i',
    'There is at most one edge between any pair of nodes',
    'There is at least one path between any two nodes',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]',
      output: '3',
      explanation:
        'The distances from each node to node 5 are: dist[1]=5, dist[2]=3, dist[3]=2, dist[4]=12, dist[5]=0. Three restricted paths exist from 1 to 5.',
    },
    {
      input: 'n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]',
      output: '1',
      explanation: 'Only one restricted path from node 1 to node 7 exists.',
    },
  ],
  hints: [
    'First compute the shortest distance from every node to node n using Dijkstra\'s algorithm run from node n on the undirected graph.',
    'Then count paths from node 1 to node n where each step goes to a neighbor with a strictly smaller distance to n. Use DFS with memoization.',
    'The subproblem structure is a DAG (edges only go from larger dist to smaller dist), so memoized DFS or bottom-up DP ordered by dist works.',
  ],
  functionName: 'countRestrictedPaths',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countRestrictedPaths(n, edges) {
  // Return number of restricted paths from node 1 to node n, mod 10^9+7
}`,
    typescript: "function countRestrictedPaths(n: number, edges: number[][]): number {\n  // Return number of restricted paths from node 1 to node n, mod 10^9+7\n}",

    python: `def countRestrictedPaths(n: int, edges: list[list[int]]) -> int:
    # Return number of restricted paths from node 1 to node n, mod 10^9+7
    pass`,
  },
  visibleTests: [
    { args: [5, [[1, 2, 3], [1, 3, 3], [2, 3, 1], [1, 4, 2], [5, 2, 2], [3, 5, 1], [5, 4, 10]]], expected: 3 },
    { args: [7, [[1, 3, 1], [4, 1, 2], [7, 3, 4], [2, 5, 3], [5, 6, 1], [6, 7, 2], [7, 5, 3], [2, 6, 4]]], expected: 1 },
    { args: [2, [[1, 2, 5]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [3, [[1, 2, 1], [2, 3, 1], [1, 3, 5]]], expected: 2 },
    { args: [4, [[1, 2, 1], [2, 3, 1], [3, 4, 1], [1, 4, 10]]], expected: 2 },
    { args: [4, [[1, 2, 1], [2, 3, 1], [3, 4, 1], [2, 4, 1]]], expected: 1 },
    { args: [3, [[1, 2, 3], [2, 3, 2], [1, 3, 10]]], expected: 2 },
    { args: [4, [[1, 2, 1], [1, 3, 2], [2, 4, 1], [3, 4, 1]]], expected: 2 },
  ],
};
