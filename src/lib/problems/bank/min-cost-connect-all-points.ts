import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-cost-connect-all-points',
  title: 'Min Cost to Connect All Points',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an array \`points\` representing integer coordinates on a 2D plane, where \`points[i] = [xi, yi]\`.

The **cost** of connecting two points \`[xi, yi]\` and \`[xj, yj]\` is the **Manhattan distance**: \`|xi - xj| + |yi - yj|\`.

Return the **minimum cost** to make all points connected (so that there is exactly one connected component).`,
  constraints: [
    '1 <= points.length <= 1000',
    '-10^6 <= xi, yi <= 10^6',
    'All pairs (xi, yi) are distinct.',
  ],
  examples: [
    {
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'Connect (0,0)-(2,2)=4, (2,2)-(5,2)=3, (5,2)-(7,0)=4, (3,10)-(2,2)=9. Total = 20.',
    },
    {
      input: 'points = [[3,12],[-2,5],[-4,1]]',
      output: '18',
      explanation: 'Connect (-2,5)-(-4,1)=6 and (3,12)-(-2,5)=12. Total = 18.',
    },
  ],
  hints: [
    'This is a Minimum Spanning Tree (MST) problem. You need the cheapest set of edges (Manhattan-distance connections) that spans all n points.',
    "Prim's algorithm works well for dense graphs: maintain a `dist` array where `dist[v]` is the cheapest Manhattan distance from the current MST to point `v`. At each step, pick the unvisited point with the smallest `dist`, add it to the MST, and update `dist` for remaining points.",
    'Initialize `dist[0] = 0`, all others `Infinity`. Loop n times: pick unvisited `u` with min `dist[u]`, mark visited, add `dist[u]` to answer, then for every unvisited `v` set `dist[v] = min(dist[v], manhattan(u, v))`.',
  ],
  functionName: 'minCostConnectPoints',
  params: ['points'],
  starterCode: {
    javascript: `function minCostConnectPoints(points) {
  const n = points.length;
  const dist = new Array(n).fill(Infinity);
  dist[0] = 0;
  const visited = new Array(n).fill(false);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let v = 0; v < n; v++) if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    visited[u] = true;
    ans += dist[u];
    for (let v = 0; v < n; v++) {
      if (!visited[v]) {
        const d = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
        if (d < dist[v]) dist[v] = d;
      }
    }
  }
  return ans;
}`,
    typescript: `function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const dist = new Array<number>(n).fill(Infinity);
  dist[0] = 0;
  const visited = new Array<boolean>(n).fill(false);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let u = -1;
    for (let v = 0; v < n; v++) if (!visited[v] && (u === -1 || dist[v]! < dist[u]!)) u = v;
    visited[u] = true;
    ans += dist[u]!;
    for (let v = 0; v < n; v++) {
      if (!visited[v]) {
        const d = Math.abs(points[u]![0]! - points[v]![0]!) + Math.abs(points[u]![1]! - points[v]![1]!);
        if (d < dist[v]!) dist[v] = d;
      }
    }
  }
  return ans;
}`,
    python: `def minCostConnectPoints(points):
    if hasattr(points, 'to_py'): points = [[int(x) for x in (p.to_py() if hasattr(p, 'to_py') else p)] for p in points.to_py()]
    n = len(points)
    dist = [float('inf')] * n
    dist[0] = 0
    visited = [False] * n
    ans = 0
    for _ in range(n):
        u = min((v for v in range(n) if not visited[v]), key=lambda v: dist[v])
        visited[u] = True
        ans += dist[u]
        for v in range(n):
            if not visited[v]:
                d = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                if d < dist[v]: dist[v] = d
    return ans`,
  },
  visibleTests: [
    {
      args: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]],
      expected: 20,
    },
    {
      args: [[[3, 12], [-2, 5], [-4, 1]]],
      expected: 18,
    },
    {
      args: [[[0, 0]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 0], [1, 1], [1, 0], [0, 1]]],
      expected: 3,
    },
    {
      args: [[[0, 0], [1, 1], [0, 2]]],
      expected: 4,
    },
    {
      args: [[[-1000000, -1000000], [1000000, 1000000]]],
      expected: 4000000,
    },
    {
      args: [[[0, 0], [2, 0], [4, 0], [6, 0], [8, 0]]],
      expected: 8,
    },
    {
      args: [[[1, 3], [2, 1], [4, 5], [0, 0]]],
      expected: 11,
    },
  ],
};
