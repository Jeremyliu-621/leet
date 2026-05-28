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
  // your code here
}`,
    typescript: "function largestPathValue(colors: string, edges: number[][]): number {\n  // your code here\n}",

    python: `def largestPathValue(colors: str, edges: list) -> int:
    # your code here
    pass`,
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
