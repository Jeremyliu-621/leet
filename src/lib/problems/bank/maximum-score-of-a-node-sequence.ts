import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-of-a-node-sequence',
  title: 'Maximum Score of a Node Sequence',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `There is an **undirected** graph with \`n\` nodes, numbered from \`0\` to \`n - 1\`.

You are given a **0-indexed** integer array \`scores\` of length \`n\` where \`scores[i]\` denotes the score associated with that particular node. You are also given a 2D integer array \`edges\` where \`edges[i] = [aᵢ, bᵢ]\` denotes that there exists an **undirected** edge connecting nodes \`aᵢ\` and \`bᵢ\`.

A node sequence is **valid** if it meets the following conditions:

- There is an edge connecting every pair of **adjacent** nodes in the sequence.
- No node appears more than once in the sequence.

The **score** of a node sequence is defined as the **sum** of the scores of the nodes in the sequence.

Return the **maximum score** of a valid node sequence with a length of \`4\`. If no such sequence exists, return \`-1\`.`,
  constraints: [
    'n == scores.length',
    '4 <= n <= 5 * 10^4',
    '1 <= scores[i] <= 10^8',
    '0 <= edges.length <= 5 * 10^4',
    'edges[i].length == 2',
    '0 <= edges[i][j] <= n - 1',
    'edges[i][0] != edges[i][1]',
    'There are no duplicate edges',
  ],
  examples: [
    {
      input: 'scores = [5,2,9,8], edges = [[0,1],[1,2],[2,3],[0,2]]',
      output: '24',
      explanation: 'The node sequence 0 → 1 → 2 → 3 has score 5+2+9+8=24, and uses edges (0,1), (1,2), (2,3). All nodes are distinct.',
    },
    {
      input: 'scores = [9,20,6,4], edges = [[1,2],[0,1],[0,2]]',
      output: '-1',
      explanation: 'Nodes 0,1,2 form a triangle; node 3 is isolated with no edges. No valid 4-node sequence exists.',
    },
  ],
  hints: [
    'For a valid 4-node sequence a–b–c–d, the middle edge is (b,c). For each edge (b,c), we need the best neighbor of b (call it a) and the best neighbor of c (call it d), where a≠c, d≠b, and a≠d.',
    'Store the top 3 highest-scoring neighbors for each node. For each edge (b,c), try all 3×3=9 combinations of top neighbors of b and c, checking distinctness.',
    'We only need top 3 (not just top 1 or 2) because the optimal a or d might be eliminated by the distinctness constraints in up to 2 of the 9 combinations.',
  ],
  functionName: 'maximumScore',
  params: ['scores', 'edges'],
  starterCode: {
    javascript: `function maximumScore(scores, edges) {
  const n = scores.length;
  const top3 = Array.from({length: n}, () => []);
  for (const [u, v] of edges) {
    top3[u].push(v);
    top3[v].push(u);
  }
  for (let i = 0; i < n; i++) {
    top3[i].sort((a, b) => scores[b] - scores[a]);
    top3[i] = top3[i].slice(0, 3);
  }
  let ans = -1;
  for (const [b, c] of edges) {
    for (const a of top3[b]) {
      if (a === c) continue;
      for (const d of top3[c]) {
        if (d === b || d === a) continue;
        const s = scores[a] + scores[b] + scores[c] + scores[d];
        if (s > ans) ans = s;
      }
    }
  }
  return ans;
}`,
    typescript: `function maximumScore(scores: number[], edges: number[][]): number {
  const n = scores.length;
  const top3: number[][] = Array.from({length: n}, () => []);
  for (const e of edges) {
    top3[e[0]!]!.push(e[1]!);
    top3[e[1]!]!.push(e[0]!);
  }
  for (let i = 0; i < n; i++) {
    top3[i]!.sort((a, b) => scores[b]! - scores[a]!);
    top3[i] = top3[i]!.slice(0, 3);
  }
  let ans = -1;
  for (const e of edges) {
    const b = e[0]!, c = e[1]!;
    for (const a of top3[b]!) {
      if (a === c) continue;
      for (const d of top3[c]!) {
        if (d === b || d === a) continue;
        const s = scores[a]! + scores[b]! + scores[c]! + scores[d]!;
        if (s > ans) ans = s;
      }
    }
  }
  return ans;
}`,
    python: `def maximumScore(scores, edges):
    if hasattr(scores, 'to_py'): scores = list(scores.to_py())
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    n = len(scores)
    top3 = [[] for _ in range(n)]
    for u, v in edges:
        top3[u].append(v)
        top3[v].append(u)
    for i in range(n):
        top3[i].sort(key=lambda x: -scores[x])
        top3[i] = top3[i][:3]
    ans = -1
    for b, c in edges:
        for a in top3[b]:
            if a == c: continue
            for d in top3[c]:
                if d == b or d == a: continue
                s = scores[a] + scores[b] + scores[c] + scores[d]
                if s > ans: ans = s
    return ans`,
  },
  visibleTests: [
    { args: [[5, 2, 9, 8], [[0, 1], [1, 2], [2, 3], [0, 2]]], expected: 24 },
    { args: [[9, 20, 6, 4], [[1, 2], [0, 1], [0, 2]]], expected: -1 },
    { args: [[1, 2, 3, 4, 5], [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 14 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], [[0, 1], [1, 2], [2, 3]]], expected: 4 },
    { args: [[100, 1, 1, 100], [[0, 1], [1, 2], [2, 3]]], expected: 202 },
    { args: [[5, 10, 15, 20], [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: 50 },
    { args: [[1, 2, 3, 4], [[0, 1], [2, 3]]], expected: -1 },
    { args: [[10, 10, 10, 10, 10], [[0, 1], [1, 2], [2, 3], [3, 4], [0, 4]]], expected: 40 },
  ],
};
