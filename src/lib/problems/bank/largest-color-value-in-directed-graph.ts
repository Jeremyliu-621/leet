import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-color-value-in-directed-graph',
  title: 'Largest Color Value in a Directed Graph',
  difficulty: 'hard',
  tags: ['graph'],
  description: `There is a **directed graph** of \`n\` colored nodes (labeled \`0\` to \`n-1\`). Each node has a color given by the string \`colors\` where \`colors[i]\` is a lowercase letter.

You are given a 2D array \`edges\` where \`edges[j] = [aj, bj]\` indicates a directed edge from node \`aj\` to node \`bj\`.

A **valid path** is a sequence of nodes where there is a directed edge between consecutive nodes. The **color value** of a path is the number of occurrences of the **most frequent** color along that path.

Return the **largest color value** of any valid path in the graph, or **-1** if there is a cycle.

**Args:** \`colors: string, edges: number[][]\`

**Example 1:**

Input: \`colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]\`

Output: \`3\`

Explanation: Path 0→2→3→4 has colors a,a,c,a — 'a' appears 3 times.

**Example 2:**

Input: \`colors = "a", edges = [[0,0]]\`

Output: \`-1\`

Explanation: There is a self-loop (cycle).

**Approach:** Topological sort (Kahn's BFS). Track \`dp[node][c]\` = max count of color \`c\` on any path ending at \`node\`. Propagate through edges. If not all nodes are processed, a cycle exists.`,
  constraints: [
    '1 ≤ n ≤ 10^5',
    '0 ≤ edges.length ≤ min(10^5, n*(n-1))',
    'colors.length == n',
    'colors[i] is a lowercase English letter',
    'No duplicate edges',
  ],
  examples: [
    {
      input: 'colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]',
      output: '3',
      explanation: "Path 0→2→3→4 uses colors a,a,c,a. 'a' appears 3 times.",
    },
    {
      input: 'colors = "a", edges = [[0,0]]',
      output: '-1',
      explanation: 'Self-loop creates a cycle.',
    },
  ],
  hints: [
    "Compute in-degrees. Use Kahn's BFS for topological sort. Start with all nodes of in-degree 0.",
    'dp[node] is an array of 26 counts (one per letter). Initialize dp[node][color[node]] = 1.',
    'When processing node u with edge u→v: for each color c, dp[v][c] = max(dp[v][c], dp[u][c] + (colors[v]===c ? 1 : 0)). Track global max.',
    'If the number of processed nodes < n, there is a cycle; return -1.',
  ],
  functionName: 'largestPathValue',
  params: ['colors', 'edges'],
  starterCode: {
    javascript: `function largestPathValue(colors, edges) {
  const n = colors.length;
  const adj = Array.from({length: n}, () => []);
  const indeg = new Array(n).fill(0);
  for (const [u, v] of edges) { adj[u].push(v); indeg[v]++; }
  const dp = Array.from({length: n}, (_, i) => {
    const row = new Array(26).fill(0);
    row[colors.charCodeAt(i) - 97] = 1;
    return row;
  });
  const queue = [];
  for (let i = 0; i < n; i++) if (indeg[i] === 0) queue.push(i);
  let processed = 0, ans = 0;
  while (queue.length) {
    const u = queue.shift();
    processed++;
    for (const c of dp[u]) ans = Math.max(ans, c);
    for (const v of adj[u]) {
      const cv = colors.charCodeAt(v) - 97;
      for (let c = 0; c < 26; c++) dp[v][c] = Math.max(dp[v][c], dp[u][c] + (c === cv ? 1 : 0));
      if (--indeg[v] === 0) queue.push(v);
    }
  }
  return processed < n ? -1 : ans;
}`,
    typescript: `function largestPathValue(colors: string, edges: number[][]): number {
  const n = colors.length;
  const adj: number[][] = Array.from({length: n}, () => []);
  const indeg = new Array(n).fill(0) as number[];
  for (const e of edges) { adj[e[0]!]!.push(e[1]!); indeg[e[1]!]!++; }
  const dp: number[][] = Array.from({length: n}, (_, i) => {
    const row = new Array(26).fill(0) as number[];
    row[colors.charCodeAt(i) - 97] = 1;
    return row;
  });
  const queue: number[] = [];
  for (let i = 0; i < n; i++) if (indeg[i] === 0) queue.push(i);
  let processed = 0, ans = 0;
  while (queue.length) {
    const u = queue.shift()!;
    processed++;
    for (const c of dp[u]!) ans = Math.max(ans, c);
    for (const v of adj[u]!) {
      const cv = colors.charCodeAt(v) - 97;
      for (let c = 0; c < 26; c++) dp[v]![c] = Math.max(dp[v]![c]!, dp[u]![c]! + (c === cv ? 1 : 0));
      if (--indeg[v]! === 0) queue.push(v);
    }
  }
  return processed < n ? -1 : ans;
}`,
    python: `def largestPathValue(colors, edges):
    if hasattr(colors, 'to_py'): colors = colors.to_py()
    if hasattr(edges, 'to_py'): edges = edges.to_py()
    colors = str(colors)
    edges = [[int(x) for x in (e.to_py() if hasattr(e,'to_py') else e)] for e in edges]
    n = len(colors)
    adj = [[] for _ in range(n)]; indeg = [0]*n
    for u, v in edges: adj[u].append(v); indeg[v] += 1
    dp = [[0]*26 for _ in range(n)]
    for i in range(n): dp[i][ord(colors[i])-97] = 1
    from collections import deque
    queue = deque(i for i in range(n) if indeg[i] == 0)
    processed = 0; ans = 0
    while queue:
        u = queue.popleft(); processed += 1; ans = max(ans, max(dp[u]))
        for v in adj[u]:
            cv = ord(colors[v]) - 97
            for c in range(26): dp[v][c] = max(dp[v][c], dp[u][c] + (1 if c == cv else 0))
            indeg[v] -= 1
            if indeg[v] == 0: queue.append(v)
    return -1 if processed < n else ans`,
  },
  visibleTests: [
    { args: ['abaca', [[0, 1], [0, 2], [2, 3], [3, 4]]], expected: 3 },
    { args: ['a', [[0, 0]]], expected: -1 },
  ],
  hiddenTests: [
    { args: ['a', []], expected: 1 },
    { args: ['ab', [[0, 1]]], expected: 1 },
    { args: ['aaab', [[0, 1], [1, 2], [2, 3]]], expected: 3 },
    { args: ['abc', [[0, 1], [1, 2], [0, 2]]], expected: 1 },
    { args: ['abcd', [[0, 1], [1, 2], [2, 3], [3, 1]]], expected: -1 },
  ],
};
