import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-reach-destination-in-time',
  title: 'Minimum Cost to Reach Destination in Time',
  difficulty: 'hard',
  tags: ['shortest-path', 'dynamic-programming', 'graph'],
  description: `There is a country of \`n\` cities numbered from \`0\` to \`n - 1\` where all cities are connected by bi-directional roads. The roads are represented as a 2D integer array \`edges\` where \`edges[i] = [x_i, y_i, time_i]\` denotes a road between cities \`x_i\` and \`y_i\` that takes \`time_i\` minutes to travel. There may be multiple roads between the same pair of cities, but no road connects a city to itself.

Each time you enter a city, you must pay a **passing fee**. A 0-indexed integer array \`passingFees\` of length \`n\` where \`passingFees[j]\` is the passing fee when you enter city \`j\`.

You want to travel from city \`0\` to city \`n - 1\` in at most \`maxTime\` minutes. Return the **minimum cost** to do so, or \`-1\` if there is no way.

**Note:** You pay \`passingFees[0]\` at the start and \`passingFees[n-1]\` when you arrive.`,
  constraints: [
    '`1 <= maxTime <= 1000`',
    '`n == passingFees.length`',
    '`2 <= n <= 1000`',
    '`0 <= edges.length <= 1000`',
    '`edges[i].length == 3`',
    '`0 <= x_i, y_i <= n - 1`',
    '`1 <= time_i <= 1000`',
    '`1 <= passingFees[j] <= 1000`',
    'The graph may be disconnected.',
  ],
  examples: [
    {
      input:
        'maxTime = 30, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]',
      output: '11',
      explanation:
        'Take path 0→1→2→5 (total time = 30). Cost = passingFees[0]+passingFees[1]+passingFees[2]+passingFees[5] = 5+1+2+3 = 11.',
    },
    {
      input:
        'maxTime = 29, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]',
      output: '48',
      explanation:
        'Path 0→3→4→5 (time = 1+10+15 = 26). Cost = 5+20+20+3 = 48. The cheaper route 0→1→2→5 takes time 30 > 29.',
    },
    {
      input:
        'maxTime = 25, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]',
      output: '-1',
      explanation: 'No path from 0 to 5 can be completed within 25 minutes.',
    },
  ],
  hints: [
    'Define `dp[t][v]` = minimum total cost to be at node `v` at exactly time `t`. Initialize `dp[0][0] = passingFees[0]`, everything else `Infinity`. For each time `t` from 0 to `maxTime`, iterate over each node `v`; for each edge `(v, u, edgeTime)` with `t + edgeTime ≤ maxTime`, update `dp[t+edgeTime][u] = min(..., dp[t][v] + passingFees[u])`.',
    'The answer is `min(dp[0][n-1], dp[1][n-1], ..., dp[maxTime][n-1])`. If all are Infinity, return -1. This DP naturally handles cycles: if revisiting a node at the same time cannot improve cost, that state will never expand.',
    '```js\nfunction minCost(maxTime, edges, passingFees) {\n  const n = passingFees.length;\n  const adj = Array.from({length: n}, () => []);\n  for (const [x, y, t] of edges) { adj[x].push([y, t]); adj[y].push([x, t]); }\n  const dp = Array.from({length: maxTime+1}, () => new Array(n).fill(Infinity));\n  dp[0][0] = passingFees[0];\n  for (let t = 0; t <= maxTime; t++) {\n    for (let v = 0; v < n; v++) {\n      if (dp[t][v] === Infinity) continue;\n      for (const [u, et] of adj[v]) {\n        if (t + et <= maxTime)\n          dp[t+et][u] = Math.min(dp[t+et][u], dp[t][v] + passingFees[u]);\n      }\n    }\n  }\n  const ans = Math.min(...dp.map(row => row[n-1]));\n  return ans === Infinity ? -1 : ans;\n}\n```',
  ],
  functionName: 'minCost',
  params: ['maxTime', 'edges', 'passingFees'],
  starterCode: {
    javascript: `function minCost(maxTime, edges, passingFees) {
  const n = passingFees.length;
  const adj = Array.from({length: n}, () => []);
  for (const [x, y, t] of edges) { adj[x].push([y, t]); adj[y].push([x, t]); }
  const dp = Array.from({length: maxTime+1}, () => new Array(n).fill(Infinity));
  dp[0][0] = passingFees[0];
  for (let t = 0; t <= maxTime; t++) {
    for (let v = 0; v < n; v++) {
      if (dp[t][v] === Infinity) continue;
      for (const [u, et] of adj[v]) if (t + et <= maxTime) dp[t+et][u] = Math.min(dp[t+et][u], dp[t][v] + passingFees[u]);
    }
  }
  const ans = Math.min(...dp.map(row => row[n-1]));
  return ans === Infinity ? -1 : ans;
}`,
    typescript: `function minCost(maxTime: number, edges: number[][], passingFees: number[]): number {
  const n = passingFees.length;
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const [x, y, t] of edges) { adj[x]!.push([y!, t!]); adj[y!]!.push([x!, t!]); }
  const dp = Array.from({length: maxTime+1}, () => new Array<number>(n).fill(Infinity));
  dp[0]![0] = passingFees[0]!;
  for (let t = 0; t <= maxTime; t++) {
    for (let v = 0; v < n; v++) {
      if (dp[t]![v]! === Infinity) continue;
      for (const [u, et] of adj[v]!) if (t + et <= maxTime) dp[t+et]![u] = Math.min(dp[t+et]![u]!, dp[t]![v]! + passingFees[u]!);
    }
  }
  const ans = Math.min(...dp.map(row => row[n-1]!));
  return ans === Infinity ? -1 : ans;
}`,
    python: `def minCost(maxTime: int, edges: list[list[int]], passingFees: list[int]) -> int:
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    if hasattr(passingFees, 'to_py'): passingFees = list(passingFees.to_py())
    n = len(passingFees); adj = [[] for _ in range(n)]
    for x, y, t in edges: adj[x].append((y, t)); adj[y].append((x, t))
    dp = [[float('inf')] * n for _ in range(maxTime + 1)]; dp[0][0] = passingFees[0]
    for t in range(maxTime + 1):
        for v in range(n):
            if dp[t][v] == float('inf'): continue
            for u, et in adj[v]:
                if t + et <= maxTime: dp[t+et][u] = min(dp[t+et][u], dp[t][v] + passingFees[u])
    ans = min(row[n-1] for row in dp)
    return -1 if ans == float('inf') else ans`,
  },
  visibleTests: [
    {
      args: [30, [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]], [5, 1, 2, 20, 20, 3]],
      expected: 11,
    },
    {
      args: [29, [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]], [5, 1, 2, 20, 20, 3]],
      expected: 48,
    },
    {
      args: [25, [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]], [5, 1, 2, 20, 20, 3]],
      expected: -1,
    },
  ],
  hiddenTests: [
    { args: [4, [[0, 1, 2], [1, 2, 2]], [1, 3, 2]], expected: 6 },
    { args: [1, [[0, 1, 2], [1, 2, 2]], [1, 3, 2]], expected: -1 },
    { args: [8, [[0, 1, 2], [1, 2, 2], [0, 2, 8]], [1, 3, 2]], expected: 3 },
    { args: [10, [[0, 1, 5]], [7, 4]], expected: 11 },
    { args: [5, [], [3, 9]], expected: -1 },
  ],
};
