import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-buy-apples',
  title: 'Minimum Cost to Buy Apples',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `You are given a positive integer \`n\` representing \`n\` cities numbered from \`1\` to \`n\`, a 2D array \`roads\` where \`roads[i] = [city1_i, city2_i, cost_i]\` represents a **bidirectional** road between \`city1_i\` and \`city2_i\` with travel cost \`cost_i\`, a 0-indexed array \`appleCost\` where \`appleCost[i]\` is the cost of buying one apple in city \`i + 1\`, and an integer \`k\` such that every traversal of a road costs \`k * cost_i\` (roads can be reused).

Return a 0-indexed integer array \`answer\` of length \`n\` where \`answer[i]\` is the **minimum total cost** to buy one apple if you start at city \`i + 1\`. The total cost is the sum of road traversal costs plus the apple cost at the city where you buy.`,
  constraints: [
    '2 <= n <= 10^5',
    '0 <= roads.length <= 10^5',
    '1 <= cost_i, appleCost[i] <= 10^5',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'n = 4, roads = [[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]], appleCost = [56,42,102,301], k = 3',
      output: '[54,42,48,51]',
      explanation: 'City 1: travel 1→2 (cost 3*4=12) + buy apple in city 2 (42) = 54. City 2: buy in city 2 (42) = 42. City 3: travel 3→2 (3*2=6) + buy (42) = 48. City 4: travel 4→3→2 (3*1+3*2=9) + buy (42) = 51.',
    },
    {
      input: 'n = 2, roads = [[1,2,5]], appleCost = [100,1], k = 2',
      output: '[11,1]',
      explanation: 'City 1: travel 1→2 (2*5=10) + buy in city 2 (1) = 11. City 2: buy in city 2 (1) = 1.',
    },
  ],
  hints: [
    'Level 1: For each starting city i, minimize (k * dist(i, j) + appleCost[j]) over all cities j. Running Dijkstra from each source is O(n × E log V) — too slow.',
    'Level 2: Reverse the problem: run a single multi-source Dijkstra. Initialize dist[j] = appleCost[j] for all j. Edge weights are multiplied by k. The result dist[i] gives the minimum (k * dist(i,j) + appleCost[j]) over all j — exactly what we need.',
    'Level 3: Build the adjacency list with edge weights = k * cost_i. Push (appleCost[i], city) into the priority queue for all cities. Run Dijkstra. Return [dist[1], ..., dist[n]].',
  ],
  functionName: 'minCost',
  params: ['n', 'roads', 'appleCost', 'k'],
  starterCode: {
    javascript: `function minCost(n, roads, appleCost, k) {
  const adj = Array.from({length: n + 1}, () => []);
  for (const [u, v, c] of roads) { adj[u].push([v, c * k]); adj[v].push([u, c * k]); }
  const dist = new Array(n + 1).fill(Infinity);
  for (let i = 1; i <= n; i++) dist[i] = appleCost[i-1];
  const visited = new Array(n + 1).fill(false);
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    for (let v = 1; v <= n; v++) if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    if (dist[u] === Infinity) break;
    visited[u] = true;
    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
  }
  return dist.slice(1);
}`,
    typescript: `function minCost(n: number, roads: number[][], appleCost: number[], k: number): number[] {
  const adj: [number, number][][] = Array.from({length: n + 1}, () => []);
  for (const [u, v, c] of roads) { adj[u]!.push([v!, c! * k]); adj[v]!.push([u!, c! * k]); }
  const dist = new Array<number>(n + 1).fill(Infinity);
  for (let i = 1; i <= n; i++) dist[i] = appleCost[i-1]!;
  const visited = new Array<boolean>(n + 1).fill(false);
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    for (let v = 1; v <= n; v++) if (!visited[v] && (u === -1 || dist[v]! < dist[u]!)) u = v;
    if (dist[u]! === Infinity) break;
    visited[u] = true;
    for (const [v, w] of adj[u]!) if (dist[u]! + w < dist[v]!) dist[v] = dist[u]! + w;
  }
  return dist.slice(1);
}`,
    python: `def minCost(n: int, roads: list[list[int]], appleCost: list[int], k: int) -> list[int]:
    import heapq
    if hasattr(roads, 'to_py'): roads = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in roads.to_py()]
    if hasattr(appleCost, 'to_py'): appleCost = list(appleCost.to_py())
    adj = [[] for _ in range(n + 1)]
    for u, v, c in roads: adj[u].append((v, c * k)); adj[v].append((u, c * k))
    dist = [float('inf')] * (n + 1)
    heap = []
    for i in range(1, n + 1): dist[i] = appleCost[i-1]; heapq.heappush(heap, (appleCost[i-1], i))
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]: continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]: dist[v] = dist[u] + w; heapq.heappush(heap, (dist[v], v))
    return dist[1:]`,
  },
  visibleTests: [
    { args: [4, [[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]], [56,42,102,301], 3], expected: [54,42,48,51] },
    { args: [2, [[1,2,5]], [100,1], 2], expected: [11,1] },
  ],
  hiddenTests: [
    { args: [1, [], [7], 1], expected: [7] },
    { args: [3, [[1,2,2],[2,3,3]], [10,5,1], 1], expected: [6,4,1] },
    { args: [3, [[1,2,2],[2,3,3]], [10,5,1], 2], expected: [9,5,1] },
    { args: [4, [[1,2,1],[2,3,1],[3,4,1]], [10,10,10,1], 1], expected: [4,3,2,1] },
    { args: [3, [[1,2,100],[2,3,100]], [1,1,1], 1], expected: [1,1,1] },
    { args: [2, [[1,2,1]], [100,1], 1], expected: [2,1] },
  ],
};
