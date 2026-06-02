import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-reach-city-with-discounts',
  title: 'Minimum Cost to Reach City With Discounts',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `A series of highways connect \`n\` cities numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`highways\` where \`highways[i] = [city1i, city2i, tolli]\` indicates that there is a highway between \`city1i\` and \`city2i\` that costs \`tolli\` to travel.

You are also given an integer \`discounts\` which represents the number of discounts you have. You can apply **at most one** discount per highway, which gives you **half the toll** for that highway (rounded down). You can apply at most \`discounts\` discounts.

Return the **minimum total cost** to go from city \`0\` to city \`n - 1\`, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= highways.length <= 1000',
    'highways[i].length == 3',
    '0 <= city1i, city2i <= n - 1',
    'city1i != city2i',
    '0 <= tolli <= 10^5',
    '0 <= discounts <= 500',
    'There are no duplicate highways.',
  ],
  examples: [
    {
      input: 'n = 5, highways = [[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], discounts = 1',
      output: '9',
      explanation: 'Use 1 discount on highway 1→4 (toll 11 → 5). Path 0→1→4 costs 4+5=9.',
    },
    {
      input: 'n = 4, highways = [[1,3,17],[0,1,11],[3,2,5],[0,3,23]], discounts = 0',
      output: '23',
      explanation: 'No discounts. Shortest path 0→3 costs 23.',
    },
  ],
  hints: [
    'Level 1: Model this as Dijkstra with state (city, discountsUsed). The state space is O(n * discounts).',
    'Level 2: From state (city, k), for each neighbor with toll w: transition to (neighbor, k) with cost w, or (neighbor, k+1) with cost floor(w/2) if k < discounts.',
    'Level 3: Use a min-heap ordered by cost. Skip stale states where dist[city][k] < current cost.',
  ],
  functionName: 'minimumCost',
  params: ['n', 'highways', 'discounts'],
  starterCode: {
    javascript: `function minimumCost(n, highways, discounts) {
  const adj = Array.from({length: n}, () => []);
  for (const [u, v, w] of highways) { adj[u].push([v, w]); adj[v].push([u, w]); }
  const dist = Array.from({length: n}, () => new Array(discounts + 1).fill(Infinity));
  dist[0][0] = 0;
  const heap = [[0, 0, 0]]; // [cost, city, discountsUsed]
  while (heap.length) {
    heap.sort((a, b) => a[0] - b[0]);
    const [cost, city, k] = heap.shift();
    if (dist[city][k] < cost) continue;
    if (city === n - 1) return cost;
    for (const [nb, w] of adj[city]) {
      if (cost + w < dist[nb][k]) {
        dist[nb][k] = cost + w;
        heap.push([cost + w, nb, k]);
      }
      if (k < discounts && cost + Math.floor(w / 2) < dist[nb][k + 1]) {
        dist[nb][k + 1] = cost + Math.floor(w / 2);
        heap.push([cost + Math.floor(w / 2), nb, k + 1]);
      }
    }
  }
  return -1;
}`,
    typescript: `function minimumCost(n: number, highways: number[][], discounts: number): number {
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const [u, v, w] of highways) { adj[u]!.push([v!, w!]); adj[v!]!.push([u!, w!]); }
  const dist = Array.from({length: n}, () => new Array(discounts + 1).fill(Infinity)) as number[][];
  dist[0]![0] = 0;
  const heap: [number, number, number][] = [[0, 0, 0]];
  while (heap.length) {
    heap.sort((a, b) => a[0] - b[0]);
    const [cost, city, k] = heap.shift()!;
    if (dist[city]![k]! < cost) continue;
    if (city === n - 1) return cost;
    for (const [nb, w] of adj[city]!) {
      if (cost + w < dist[nb]![k]!) { dist[nb]![k] = cost + w; heap.push([cost + w, nb, k]); }
      if (k < discounts && cost + Math.floor(w / 2) < dist[nb]![k + 1]!) {
        dist[nb]![k + 1] = cost + Math.floor(w / 2);
        heap.push([cost + Math.floor(w / 2), nb, k + 1]);
      }
    }
  }
  return -1;
}`,
    python: `def minimumCost(n, highways, discounts):
    highways = [list(h.to_py() if hasattr(h, 'to_py') else h) for h in (highways.to_py() if hasattr(highways, 'to_py') else highways)]
    n, discounts = int(n), int(discounts)
    import heapq
    adj = [[] for _ in range(n)]
    for u, v, w in highways:
        adj[u].append((v, w))
        adj[v].append((u, w))
    dist = [[float('inf')] * (discounts + 1) for _ in range(n)]
    dist[0][0] = 0
    heap = [(0, 0, 0)]  # (cost, city, discounts_used)
    while heap:
        cost, city, k = heapq.heappop(heap)
        if dist[city][k] < cost: continue
        if city == n - 1: return cost
        for nb, w in adj[city]:
            nc = cost + w
            if nc < dist[nb][k]:
                dist[nb][k] = nc
                heapq.heappush(heap, (nc, nb, k))
            if k < discounts:
                nc2 = cost + w // 2
                if nc2 < dist[nb][k + 1]:
                    dist[nb][k + 1] = nc2
                    heapq.heappush(heap, (nc2, nb, k + 1))
    return -1`,
  },
  visibleTests: [
    { args: [5, [[0, 1, 4], [2, 1, 3], [1, 4, 11], [3, 2, 3], [3, 4, 2]], 1], expected: 9 },
    { args: [4, [[1, 3, 17], [0, 1, 11], [3, 2, 5], [0, 3, 23]], 0], expected: 23 },
  ],
  hiddenTests: [
    { args: [4, [[1, 3, 17], [0, 1, 11], [3, 2, 5], [0, 3, 23]], 2], expected: 11 },
    { args: [2, [[0, 1, 100]], 1], expected: 50 },
    { args: [2, [[0, 1, 100]], 0], expected: 100 },
    { args: [3, [[0, 1, 10], [1, 2, 10]], 1], expected: 15 },
    { args: [2, [], 5], expected: -1 },
  ],
};
