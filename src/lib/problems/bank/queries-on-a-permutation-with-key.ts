import type { Problem } from '../types';

export const problem: Problem = {
  id: 'queries-on-a-permutation-with-key',
  title: 'Queries on a Permutation With Key',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'simulation', 'arrays'],
  description: `Given the integer \`m\` and the integer array \`queries\`, process each query as follows:

1. Find the **position** of \`queries[i]\` in the current permutation (0-indexed).
2. Record that position.
3. Move \`queries[i]\` to the **beginning** of the permutation.

The initial permutation is \`[1, 2, 3, ..., m]\`.

Return an array of the recorded positions.`,
  constraints: [
    '1 <= m <= 10^3',
    '1 <= queries.length <= m',
    '1 <= queries[i] <= m',
  ],
  examples: [
    {
      input: 'queries = [3,1,2,1], m = 5',
      output: '[2,1,2,1]',
      explanation: 'Permutation starts as [1,2,3,4,5]. Query 3→pos 2, move to front: [3,1,2,4,5]. Query 1→pos 1, front: [1,3,2,4,5]. Query 2→pos 2, front: [2,1,3,4,5]. Query 1→pos 1.',
    },
    {
      input: 'queries = [4,1,2,2], m = 4',
      output: '[3,1,2,0]',
      explanation: 'Permutation [1,2,3,4]. Query 4→3, front: [4,1,2,3]. Query 1→1, front: [1,4,2,3]. Query 2→2, front: [2,1,4,3]. Query 2→0.',
    },
    {
      input: 'queries = [1], m = 3',
      output: '[0]',
      explanation: 'Query 1 is at position 0 in [1,2,3]. Moving it to front leaves the list unchanged.',
    },
  ],
  hints: [
    'A naïve simulation is O(m * Q) — find the element then shift the array. For larger inputs, track element positions using a Binary Indexed Tree.',
    'Assign each element a numeric "slot" in a BIT. Initially value v occupies slot (Q + v) where Q = len(queries). When moving to front, assign the next available front slot (counting down from Q). The BIT maintains a prefix-count of occupied slots.',
    'For a query on value v with current slot pos[v]: the 0-indexed position in the permutation is BIT.prefixSum(pos[v]) − 1. Then clear pos[v], set pos[v] = front--, and update the BIT.',
  ],
  functionName: 'processQueries',
  params: ['queries', 'm'],
  starterCode: {
    javascript: `function processQueries(queries, m) {

}`,
    typescript: `function processQueries(queries: number[], m: number): number[] {

}`,
    python: `def processQueries(queries, m):
    pass
`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 1], 5], expected: [2, 1, 2, 1] },
    { args: [[4, 1, 2, 2], 4], expected: [3, 1, 2, 0] },
    { args: [[1], 3], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [0] },
    { args: [[1, 2], 2], expected: [0, 1] },
    { args: [[2, 1], 2], expected: [1, 1] },
    { args: [[3, 3, 3], 5], expected: [2, 0, 0] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [0, 1, 2, 3, 4] },
    { args: [[5, 4, 3, 2, 1], 5], expected: [4, 4, 4, 4, 4] },
    { args: [[7, 5, 5, 8, 3], 8], expected: [6, 5, 0, 7, 5] },
    { args: [[2, 2, 2], 3], expected: [1, 0, 0] },
    { args: [[1, 3, 2], 4], expected: [0, 2, 2] },
    { args: [[4, 3, 2, 1], 4], expected: [3, 3, 3, 3] },
  ],
};
