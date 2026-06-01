import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-cost-to-connect-all-points',
  title: 'Min Cost to Connect All Points',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an array \`points\` representing integer coordinates of some points on a 2D-plane, where \`points[i] = [xi, yi]\`.

The cost of connecting two points \`[xi, yi]\` and \`[xj, yj]\` is the **Manhattan distance** between them: \`|xi - xj| + |yi - yj|\`.

Return the **minimum cost** to make all points connected. All points are connected if there is exactly one simple path between any two points.`,
  constraints: [
    '1 <= points.length <= 1000',
    '-10^6 <= xi, yi <= 10^6',
    'All pairs (xi, yi) are distinct',
  ],
  examples: [
    {
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'The minimum spanning tree connects: (0,0)-(2,2) cost 4, (2,2)-(5,2) cost 3, (5,2)-(7,0) cost 4, (2,2)-(3,10) cost 9. Total = 20.',
    },
    {
      input: 'points = [[3,12],[-2,5],[-4,1]]',
      output: '18',
      explanation: 'Connect all three points: distance(-2,5)-(3,12)=12, distance(-2,5)-(-4,1)=6. Total MST cost = 18.',
    },
  ],
  hints: [
    "Level 1: This is a Minimum Spanning Tree (MST) problem. Build a complete graph where edge weight between i and j equals the Manhattan distance. Then find the MST.",
    "Level 2: Use Prim's algorithm with a min-cost array. Start from node 0. Maintain minDist[i] = minimum distance from i to any node already in the MST. Greedily pick the closest unvisited node.",
    "Level 3: O(n²) Prim's: minDist[0]=0, all others Infinity. Repeat n times: pick unvisited u with minimum minDist[u], mark visited, add minDist[u] to answer, update minDist[v] = min(minDist[v], dist(u,v)) for all unvisited v.",
  ],
  functionName: 'minCostConnectPoints',
  params: ['points'],
  starterCode: {
    javascript: `function minCostConnectPoints(points) {
  const n = points.length;
  const minDist = new Array(n).fill(Infinity);
  const inMST = new Array(n).fill(false);
  minDist[0] = 0;
  let total = 0;
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    for (let i = 0; i < n; i++) {
      if (!inMST[i] && (u === -1 || minDist[i] < minDist[u])) u = i;
    }
    inMST[u] = true;
    total += minDist[u];
    for (let v = 0; v < n; v++) {
      if (!inMST[v]) {
        const d = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
        if (d < minDist[v]) minDist[v] = d;
      }
    }
  }
  return total;
}`,
    typescript: `function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const minDist = new Array<number>(n).fill(Infinity);
  const inMST = new Array<boolean>(n).fill(false);
  minDist[0] = 0;
  let total = 0;
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    for (let i = 0; i < n; i++) {
      if (!inMST[i] && (u === -1 || minDist[i]! < minDist[u]!)) u = i;
    }
    inMST[u] = true;
    total += minDist[u]!;
    for (let v = 0; v < n; v++) {
      if (!inMST[v]) {
        const d = Math.abs(points[u]![0]! - points[v]![0]!) + Math.abs(points[u]![1]! - points[v]![1]!);
        if (d < minDist[v]!) minDist[v] = d;
      }
    }
  }
  return total;
}`,
    python: `def minCostConnectPoints(points):
    n = len(points)
    min_dist = [float('inf')] * n
    in_mst = [False] * n
    min_dist[0] = 0
    total = 0
    for _ in range(n):
        u = min((i for i in range(n) if not in_mst[i]), key=lambda i: min_dist[i])
        in_mst[u] = True
        total += min_dist[u]
        for v in range(n):
            if not in_mst[v]:
                d = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                if d < min_dist[v]:
                    min_dist[v] = d
    return total`,
  },
  visibleTests: [
    { args: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]], expected: 20 },
    { args: [[[3, 12], [-2, 5], [-4, 1]]], expected: 18 },
    { args: [[[0, 0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 1]]], expected: 2 },
    { args: [[[0, 0], [2, 0], [0, 2]]], expected: 4 },
    { args: [[[0, 0], [1, 0], [2, 0], [3, 0]]], expected: 3 },
    { args: [[[-1000000, -1000000], [1000000, 1000000]]], expected: 4000000 },
  ],
};
