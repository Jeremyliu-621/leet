import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-sum-of-node-values',
  title: 'Find the Maximum Sum of Node Values',
  difficulty: 'medium',
  tags: ['tree', 'math'],
  description: `There exists an **undirected tree** with \`n\` nodes numbered \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`nums\` of length \`n\` where \`nums[i]\` represents the value of the \`i\`-th node. You are also given a 2D integer array \`edges\` of length \`n - 1\`, where \`edges[i] = [ai, bi]\` indicates that there is an edge between nodes \`ai\` and \`bi\` in the tree. Lastly, you are given a positive integer \`k\`.

In one **operation**, you can choose any edge \`[u, v]\` and add \`k XOR u.value\` to \`u.value\` and \`k XOR v.value\` to \`v.value\`. In other words, you simultaneously replace \`nums[u]\` with \`nums[u] XOR k\` and \`nums[v]\` with \`nums[v] XOR k\`.

Return the **maximum possible sum** of the values \`nums\` after performing any number of operations (including zero).`,
  constraints: [
    '2 <= n <= 2 * 10^4',
    '1 <= k <= 10^9',
    '0 <= nums[i] <= 10^9',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '0 <= edges[i][0], edges[i][1] <= n - 1',
    'The input is generated such that edges represents a valid tree.',
  ],
  examples: [
    {
      input: 'nums = [1,2,1], k = 3, edges = [[0,1],[0,2]]',
      output: '6',
      explanation: 'Apply op on edge [0,2]: nums = [1 XOR 3, 2, 1 XOR 3] = [2, 2, 2]. Sum = 6.',
    },
    {
      input: 'nums = [2,3], k = 7, edges = [[0,1]]',
      output: '9',
      explanation: 'Apply op on edge [0,1]: nums = [2 XOR 7, 3 XOR 7] = [5, 4]. Sum = 9.',
    },
    {
      input: 'nums = [7,7,7,7,7,7,7,7,7], k = 3, edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8]]',
      output: '63',
      explanation: '7 XOR 3 = 4 < 7, so no operation helps. The maximum sum is the original 63.',
    },
  ],
  hints: [
    'Key insight: any pair of nodes (u, v) in the tree can be "XOR\'d" simultaneously. Path operations compose — if you apply ops along a path, intermediate nodes cancel out (they get XOR\'d twice, restoring their value). So you can effectively XOR any EVEN-sized subset of nodes with k.',
    'For each node i, compute delta[i] = (nums[i] XOR k) - nums[i]. Sort deltas descending. Greedily take pairs of nodes to XOR: take a pair if their combined delta is positive.',
    'Start from the base sum (sum of all nums). For each pair (delta[0], delta[1]), (delta[2], delta[3]), ... add the pair sum if it is positive, else stop. This greedy works because we can only XOR an even number of nodes total.',
  ],
  functionName: 'maximumValueSum',
  params: ['nums', 'k', 'edges'],
  starterCode: {
    javascript: `function maximumValueSum(nums, k, edges) {
  const base = nums.reduce((a, b) => a + b, 0);
  const deltas = nums.map(v => (v ^ k) - v).sort((a, b) => b - a);
  let gain = 0;
  for (let i = 0; i + 1 < deltas.length; i += 2) {
    const pair = deltas[i] + deltas[i + 1];
    if (pair > 0) gain += pair; else break;
  }
  return base + gain;
}`,
    typescript: `function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  const base = nums.reduce((a, b) => a + b, 0);
  const deltas = nums.map(v => (v ^ k) - v).sort((a, b) => b - a);
  let gain = 0;
  for (let i = 0; i + 1 < deltas.length; i += 2) {
    const pair = deltas[i] + deltas[i + 1];
    if (pair > 0) gain += pair; else break;
  }
  return base + gain;
}`,
    python: `def maximumValueSum(nums, k, edges):
    base = sum(nums)
    deltas = sorted([(v ^ k) - v for v in nums], reverse=True)
    gain = 0
    for i in range(0, len(deltas) - 1, 2):
        pair = deltas[i] + deltas[i + 1]
        if pair > 0: gain += pair
        else: break
    return base + gain`,
  },
  visibleTests: [
    { args: [[1, 2, 1], 3, [[0, 1], [0, 2]]], expected: 6 },
    { args: [[2, 3], 7, [[0, 1]]], expected: 9 },
    { args: [[7, 7, 7, 7, 7, 7, 7, 7, 7], 3, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]]], expected: 63 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1, [[0, 1]]], expected: 2 },
    { args: [[0, 0], 5, [[0, 1]]], expected: 10 },
    { args: [[5, 10, 15], 5, [[0, 1], [1, 2]]], expected: 30 },
    { args: [[1, 2, 3, 4, 5], 2, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 19 },
    { args: [[10, 10], 10, [[0, 1]]], expected: 20 },
    { args: [[1000000000, 1000000000], 1, [[0, 1]]], expected: 2000000002 },
  ],
};
