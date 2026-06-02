import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cycle-length-queries-in-a-tree',
  title: 'Cycle Length Queries in a Tree',
  difficulty: 'medium',
  tags: ['tree', 'math'],
  description: `You are given an integer \`n\`. There is a **complete binary tree** with \`2^n - 1\` nodes. The root of that tree is the node with value \`1\`, and every node with a value \`val\` has two children, \`2 * val\` (left) and \`2 * val + 1\` (right).

You are also given a 2D integer array \`queries\` of length \`m\`, where \`queries[i] = [ai, bi]\`. For each query, find the length of the cycle formed when you add an edge between nodes \`ai\` and \`bi\` in the tree.

Return *an array* \`answer\` *of length* \`m\` *where* \`answer[i]\` *is the answer to the* \`i\`-th *query*.

**Note:** A cycle is a path that starts and ends at the same node, and each edge in the path is visited only once.`,
  constraints: [
    '2 <= n <= 30',
    'm == queries.length',
    '1 <= m <= 10^5',
    'queries[i].length == 2',
    '1 <= ai, bi <= 2^n - 1',
    'ai != bi',
  ],
  examples: [
    {
      input: 'n = 3, queries = [[5,3]]',
      output: '[4]',
      explanation: 'Path from 5 to 3: 5→2→1→3, length 3. Adding edge (5,3) creates a cycle of length 3+1=4.',
    },
    {
      input: 'n = 2, queries = [[1,2]]',
      output: '[2]',
      explanation: 'Path from 1 to 2: 1→2, length 1. Adding edge (1,2) creates a cycle of length 1+1=2.',
    },
  ],
  hints: [
    'Level 1: The cycle length equals the distance between a and b in the tree, plus 1 (for the added edge). To find the distance, find the LCA (lowest common ancestor) of a and b.',
    'Level 2: In a 1-indexed complete binary tree, the parent of node k is k >> 1 (integer division by 2). To find the LCA: repeatedly move the larger of (a, b) up by one level (divide by 2) until a == b. Count each move as one step in the path.',
    'Level 3: The total steps to reach LCA from both a and b equals the distance between them. Return steps + 1. Time per query O(log(max_node)) = O(n).',
  ],
  functionName: 'cycleLengthQueries',
  params: ['n', 'queries'],
  starterCode: {
    javascript: `function cycleLengthQueries(n, queries) {
  return queries.map(([a, b]) => {
    let len = 1;
    while (a !== b) {
      if (a > b) a >>= 1; else b >>= 1;
      len++;
    }
    return len;
  });
}`,
    typescript: `function cycleLengthQueries(n: number, queries: number[][]): number[] {
  return queries.map(([a, b]) => {
    let len = 1;
    while (a !== b) {
      if (a > b) a >>= 1; else b >>= 1;
      len++;
    }
    return len;
  });
}`,
    python: `def cycleLengthQueries(n, queries):
    result = []
    for a, b in queries:
        length = 1
        while a != b:
            if a > b: a >>= 1
            else: b >>= 1
            length += 1
        result.append(length)
    return result`,
  },
  visibleTests: [
    { args: [3, [[5, 3]]], expected: [4] },
    { args: [2, [[1, 2]]], expected: [2] },
  ],
  hiddenTests: [
    { args: [3, [[1, 7]]], expected: [3] },
    { args: [4, [[5, 6]]], expected: [5] },
    { args: [4, [[12, 15]]], expected: [5] },
    { args: [3, [[4, 7]]], expected: [5] },
    { args: [5, [[3, 16]]], expected: [6] },
    { args: [3, [[2, 3]]], expected: [3] },
    { args: [4, [[8, 15]]], expected: [7] },
    { args: [4, [[1, 15]]], expected: [4] },
  ],
};
