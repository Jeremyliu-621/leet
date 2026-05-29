import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-total-price-of-trips',
  title: 'Minimum Total Price of Trips',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `There exists an undirected unrooted tree with \`n\` nodes indexed from \`0\` to \`n - 1\`. You are given the integer \`n\` and a 2D integer array \`edges\` of length \`n - 1\`, where \`edges[i] = [ai, bi]\` indicates that there is an edge between nodes \`ai\` and \`bi\` in the tree.

Each node has an associated price represented by \`price[i]\`. The **price sum** of a given path is the sum of the prices of all nodes lying on that path.

Additionally, you are given a 2D integer array \`trips\`, where \`trips[i] = [starti, endi]\` indicates that you start the \`i\`th trip from node \`starti\` and travel to node \`endi\` by any path you like.

Before performing your first trip, you can choose some subset of nodes and **halve** (integer division by 2) their prices. The constraint is that **no two adjacent nodes** can both have their price halved.

Return the **minimum total price sum** to perform all the given trips.`,
  constraints: [
    '1 <= n <= 50',
    'edges.length == n - 1',
    '0 <= ai, bi <= n - 1',
    '1 <= price[i] <= 1000',
    '1 <= trips.length <= 100',
    '0 <= starti, endi <= n - 1',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1],[1,2],[1,3]], price = [2,2,10,6], trips = [[0,3],[2,1],[2,3]]',
      output: '23',
      explanation: 'Node 1 appears on all 3 paths. Halving node 1 (2→1) and node 2 (10→5) is not allowed (adjacent). Halving nodes 1 and 3 gives cost = 0*2 + 3*1 + 3*10 + 3*3 = 42... The optimal is to halve node 2: cost = 1*2 + 3*2 + 3*5 + 3*6 = 2+6+15+18 = 41... Optimal: halve node 1 only: 3*(2+1+10+3)=48? Answer is 23.',
    },
    {
      input: 'n = 2, edges = [[0,1]], price = [2,2], trips = [[0,0]]',
      output: '1',
      explanation: 'Trip [0,0] only visits node 0. Halve price[0]: floor(2/2)*1 = 1.',
    },
  ],
  hints: [
    'First, count how many times each node is visited across all trips using DFS to find each path.',
    'Then use tree DP: for each node, track two states — full price or halved price. Adjacent nodes cannot both be halved.',
    '```\ndp(node, parent) -> [notHalved, halved]\nnotHalved = price[node]*count[node] + sum_children min(childNotH, childH)\nhalved    = floor(price[node]/2)*count[node] + sum_children childNotH\n```',
    'Answer = min(dp(root)[0], dp(root)[1]).',
  ],
  functionName: 'minimumTotalPrice',
  params: ['n', 'edges', 'price', 'trips'],
  starterCode: {
    javascript: `function minimumTotalPrice(n, edges, price, trips) {\n  \n}`,
    typescript: `function minimumTotalPrice(n: number, edges: number[][], price: number[], trips: number[][]): number {\n  \n}`,
    python: `def minimumTotalPrice(n: int, edges: list, price: list, trips: list) -> int:\n    `,
  },
  visibleTests: [
    { args: [4, [[0, 1], [1, 2], [1, 3]], [2, 2, 10, 6], [[0, 3], [2, 1], [2, 3]]], expected: 23 },
    { args: [2, [[0, 1]], [2, 2], [[0, 0]]], expected: 1 },
    { args: [1, [], [4], [[0, 0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, [[0, 1], [1, 2]], [4, 4, 4], [[0, 2]]], expected: 8 },
    { args: [3, [[0, 1], [0, 2]], [4, 4, 4], [[0, 1], [0, 2]]], expected: 12 },
    { args: [1, [], [4], [[0, 0], [0, 0]]], expected: 4 },
    { args: [2, [[0, 1]], [2, 4], [[0, 1], [1, 0]]], expected: 8 },
    { args: [4, [[0, 1], [1, 2], [1, 3]], [2, 2, 10, 6], [[0, 2], [1, 3]]], expected: 13 },
    { args: [2, [[0, 1]], [2, 2], [[0, 0], [1, 1]]], expected: 3 },
  ],
};
