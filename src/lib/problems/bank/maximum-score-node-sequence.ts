import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-node-sequence',
  title: 'Maximum Score of a Node Sequence',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `There is an **undirected** graph with \`n\` nodes, numbered from \`0\` to \`n - 1\`.

You are given a **0-indexed** integer array \`scores\` of length \`n\` where \`scores[i]\` denotes the score associated with node \`i\`. You are also given a 2D integer array \`edges\` where \`edges[j] = [a_j, b_j]\` denotes that there exists an **undirected** edge between nodes \`a_j\` and \`b_j\`.

A node sequence is **valid** if it meets the following conditions:
- There is an edge between every pair of **adjacent** nodes in the sequence.
- No node appears more than once in the sequence.

The **score** of a node sequence is defined as the **sum** of the scores of the nodes in the sequence.

Return the **maximum score** of a valid node sequence with a length of **4**. If no such sequence exists, return \`-1\`.`,
  constraints: [
    'n == scores.length',
    '4 <= n <= 5 * 10^4',
    '0 <= scores[i] <= 10^8',
    '0 <= edges.length <= 5 * 10^4',
    'edges[j].length == 2',
    '0 <= a_j, b_j <= n - 1',
    'a_j != b_j',
    'There are no duplicate edges.',
  ],
  examples: [
    {
      input: 'scores = [5,2,9,8,4], edges = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]',
      output: '24',
      explanation:
        'The node sequence [0,1,2,3] has score 5+2+9+8=24. No length-4 sequence has a higher score.',
    },
    {
      input: 'scores = [9,20,6,4,11,12], edges = [[0,3],[5,3],[2,4],[1,3]]',
      output: '-1',
      explanation: 'There is no valid node sequence of length 4.',
    },
  ],
  hints: [
    'Level 1: For each node, precompute the top-3 neighbors by score. Any optimal sequence a→b→c→d must use neighbors of b and c from these top-3 lists.',
    'Level 2: Iterate over every edge (b, c). For each pair of neighbors: pick a from top-3 of b (excluding c), pick d from top-3 of c (excluding b and a). The score is scores[a]+scores[b]+scores[c]+scores[d]. Maximize over all valid (a, b, c, d).',
    'Level 3: Keeping only top-3 per node suffices: if an optimal solution uses a neighbor not in the top-3 of some node, we can swap in a higher-scoring neighbor from the top-3 without breaking distinctness (by pigeonhole, at most 2 nodes in the sequence can block the top-3).',
  ],
  functionName: 'maximumScore',
  params: ['scores', 'edges'],
  starterCode: {
    javascript: `function maximumScore(scores, edges) {
  const n = scores.length;
  const top3 = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { top3[u].push(v); top3[v].push(u); }
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
        ans = Math.max(ans, scores[a] + scores[b] + scores[c] + scores[d]);
      }
    }
  }
  return ans;
}`,
    typescript: `function maximumScore(scores: number[], edges: number[][]): number {
  const n = scores.length;
  const top3: number[][] = Array.from({length: n}, () => []);
  for (const e of edges) { top3[e[0]!]!.push(e[1]!); top3[e[1]!]!.push(e[0]!); }
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
        ans = Math.max(ans, scores[a]! + scores[b]! + scores[c]! + scores[d]!);
      }
    }
  }
  return ans;
}`,
    python: `def maximumScore(scores: list[int], edges: list[list[int]]) -> int:
    if hasattr(scores, 'to_py'): scores = list(scores.to_py())
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    n = len(scores)
    top3 = [[] for _ in range(n)]
    for u, v in edges: top3[u].append(v); top3[v].append(u)
    for i in range(n):
        top3[i].sort(key=lambda x: -scores[x])
        top3[i] = top3[i][:3]
    ans = -1
    for b, c in edges:
        for a in top3[b]:
            if a == c: continue
            for d in top3[c]:
                if d == b or d == a: continue
                ans = max(ans, scores[a] + scores[b] + scores[c] + scores[d])
    return ans`,
  },
  visibleTests: [
    {
      args: [
        [5, 2, 9, 8, 4],
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [0, 2],
          [1, 3],
          [2, 4],
        ],
      ],
      expected: 24,
    },
    {
      args: [
        [9, 20, 6, 4, 11, 12],
        [
          [0, 3],
          [5, 3],
          [2, 4],
          [1, 3],
        ],
      ],
      expected: -1,
    },
  ],
  hiddenTests: [
    {
      args: [
        [1, 2, 3, 4],
        [
          [0, 1],
          [1, 2],
          [2, 3],
        ],
      ],
      expected: 10,
    },
    {
      args: [
        [10, 5, 5, 5, 5],
        [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
          [1, 2],
        ],
      ],
      expected: 25,
    },
    {
      args: [
        [1, 1, 1, 1, 1],
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
        ],
      ],
      expected: 4,
    },
    {
      args: [
        [5, 10, 15, 20],
        [
          [0, 1],
          [0, 2],
          [1, 3],
          [2, 3],
        ],
      ],
      expected: 50,
    },
    {
      args: [
        [100, 100, 100, 100, 1],
        [
          [0, 4],
          [1, 4],
          [2, 4],
          [3, 4],
        ],
      ],
      expected: -1,
    },
  ],
};
