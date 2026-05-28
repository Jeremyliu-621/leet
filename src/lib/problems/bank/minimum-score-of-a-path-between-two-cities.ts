import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-of-a-path-between-two-cities',
  title: 'Minimum Score of a Path Between Two Cities',
  difficulty: 'medium',
  tags: ['shortest-path', 'union-find', 'graph'],
  description: `You are given a positive integer \`n\` representing \`n\` cities numbered from \`1\` to \`n\`. You are also given a 2D array \`roads\` where \`roads[i] = [a_i, b_i, d_i]\` indicates that there is a **bidirectional** road between cities \`a_i\` and \`b_i\` with distance \`d_i\`.

The **score** of a path between two cities is defined as the **minimum** distance of a road in this path.

Return the **minimum possible score** of a path between cities \`1\` and \`n\`.

**Note:** A path can contain the same road **multiple times**, and it is guaranteed that there is at least one path between cities \`1\` and \`n\`.`,
  constraints: [
    '`2 <= n <= 10^5`',
    '`1 <= roads.length <= 10^5`',
    '`roads[i].length == 3`',
    '`1 <= a_i, b_i <= n`',
    '`a_i != b_i`',
    '`1 <= d_i <= 10^4`',
    'There are no repeated edges.',
    'There is at least one path between `1` and `n`.',
  ],
  examples: [
    {
      input: 'n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]',
      output: '5',
      explanation:
        'Path 1→2→4 has score min(9,5)=5. No path achieves a lower minimum (all paths must use an edge ≥ 5). Actually the entire graph is one component so min edge weight = 5.',
    },
    {
      input: 'n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]',
      output: '2',
      explanation:
        'Path 1→2→1→3→4 uses edge (1,2) with weight 2 (the minimum). Answer = 2.',
    },
  ],
  hints: [
    'Since paths can revisit nodes and edges, any edge in the connected component containing both city 1 and city n can be included in some path. The answer is simply the **minimum edge weight** within that component.',
    'BFS or DFS from city 1 to find all nodes in its connected component; track the minimum edge weight encountered. The result is that minimum.',
    '```js\nfunction minScore(n, roads) {\n  const adj = Array.from({length: n+1}, () => []);\n  for (const [u,v,w] of roads) { adj[u].push([v,w]); adj[v].push([u,w]); }\n  const vis = new Array(n+1).fill(false);\n  let ans = Infinity;\n  const queue = [1]; vis[1] = true;\n  while (queue.length) {\n    const u = queue.shift();\n    for (const [v,w] of adj[u]) {\n      ans = Math.min(ans, w);\n      if (!vis[v]) { vis[v] = true; queue.push(v); }\n    }\n  }\n  return ans;\n}\n```',
  ],
  functionName: 'minScore',
  params: ['n', 'roads'],
  starterCode: {
    javascript: `function minScore(n, roads) {

}`,
    typescript: "function minScore(n: number, roads: number[][]): number {\n\n}",

    python: `def minScore(n: int, roads: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]], expected: 5 },
    { args: [4, [[1, 2, 2], [1, 3, 4], [3, 4, 7]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, [[1, 2, 5], [2, 3, 3]]], expected: 3 },
    { args: [2, [[1, 2, 10]]], expected: 10 },
    { args: [5, [[1, 2, 3], [2, 3, 1], [3, 4, 4], [4, 5, 2], [1, 5, 6]]], expected: 1 },
    { args: [4, [[1, 2, 8], [2, 3, 2], [3, 4, 5], [2, 4, 1]]], expected: 1 },
  ],
};
