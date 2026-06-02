import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-with-alternating-colors',
  title: 'Shortest Path with Alternating Colors',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You have a directed graph of \`n\` nodes labeled from \`0\` to \`n - 1\`. \`redEdges\` and \`blueEdges\` are arrays of directed edges where each edge is \`[u, v]\`.

Return an array \`answer\` of length \`n\` where \`answer[i]\` is the length of the **shortest path from node 0 to node i** using edges of **alternating colors** (red then blue then red…, or blue then red then blue…). Return -1 if no such path exists.

**Approach:** BFS with state \`(node, lastColor)\`. Start at node 0 with both possible colors. At each step, only traverse edges of the opposite color.`,
  constraints: [
    '1 <= n <= 100',
    '0 <= redEdges.length, blueEdges.length <= 400',
    'redEdges[i].length == blueEdges[j].length == 2',
    '0 <= redEdges[i][j], blueEdges[j][k] < n',
  ],
  examples: [
    {
      input: 'n = 3, redEdges = [[0,1],[1,2]], blueEdges = []',
      output: '[0,1,-1]',
      explanation: 'Node 0 is at distance 0. Node 1 via red edge at distance 1. Node 2 needs alternating but no blue edges exist.',
    },
    {
      input: 'n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]',
      output: '[0,1,-1]',
    },
    {
      input: 'n = 3, redEdges = [[0,1],[0,2]], blueEdges = [[1,0]]',
      output: '[0,1,1]',
    },
  ],
  hints: [
    'BFS state = (node, lastColor). Encode: 0=red, 1=blue. From (node, color), expand via edges of color `1-color`.',
    'Initialize BFS with both (0, red) and (0, blue) at distance 0 (we can start with either color).',
    '```js\nconst adj = Array.from({length:n}, () => [[],[]]);  // adj[u][0]=red, adj[u][1]=blue\nfor (const [u,v] of redEdges) adj[u][0].push(v);\nfor (const [u,v] of blueEdges) adj[u][1].push(v);\nconst dist = Array(n).fill(-1);\nconst visited = Array.from({length:n}, () => [false,false]);\nvisited[0] = [true,true]; dist[0] = 0;\nconst q = [[0,0],[0,1]];\nlet step = 1;\nwhile (q.length) {\n  const size = q.length;\n  for (let i = 0; i < size; i++) {\n    const [node,color] = q.shift();\n    const nc = 1-color;\n    for (const next of adj[node][nc]) {\n      if (!visited[next][nc]) {\n        visited[next][nc] = true;\n        if (dist[next] === -1) dist[next] = step;\n        q.push([next,nc]);\n      }\n    }\n  }\n  step++;\n}\nreturn dist;\n```',
  ],
  functionName: 'shortestAlternatingColors',
  params: ['n', 'redEdges', 'blueEdges'],
  starterCode: {
    javascript: `function shortestAlternatingColors(n, redEdges, blueEdges) {
  const adj = Array.from({length: n}, () => [[], []]); // adj[u][0]=red neighbors, adj[u][1]=blue
  for (const [u, v] of redEdges) adj[u][0].push(v);
  for (const [u, v] of blueEdges) adj[u][1].push(v);
  const dist = new Array(n).fill(-1);
  dist[0] = 0;
  const visited = Array.from({length: n}, () => [false, false]);
  visited[0][0] = visited[0][1] = true;
  const queue = [[0, 0], [0, 1]]; // [node, lastColor]
  let step = 1;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [node, color] = queue.shift();
      const nc = 1 - color;
      for (const next of adj[node][nc]) {
        if (!visited[next][nc]) {
          visited[next][nc] = true;
          if (dist[next] === -1) dist[next] = step;
          queue.push([next, nc]);
        }
      }
    }
    step++;
  }
  return dist;
}`,
    typescript: `function shortestAlternatingColors(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
  const adj: number[][][] = Array.from({length: n}, () => [[], []]);
  for (const [u, v] of redEdges) adj[u]![0]!.push(v!);
  for (const [u, v] of blueEdges) adj[u]![1]!.push(v!);
  const dist = new Array<number>(n).fill(-1);
  dist[0] = 0;
  const visited: boolean[][] = Array.from({length: n}, () => [false, false]);
  visited[0]![0] = visited[0]![1] = true;
  const queue: [number, number][] = [[0, 0], [0, 1]];
  let step = 1;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [node, color] = queue.shift()!;
      const nc = 1 - color;
      for (const next of adj[node]![nc]!) {
        if (!visited[next]![nc]) {
          visited[next]![nc] = true;
          if (dist[next] === -1) dist[next] = step;
          queue.push([next, nc]);
        }
      }
    }
    step++;
  }
  return dist;
}`,
    python: `def shortestAlternatingColors(n: int, redEdges: list, blueEdges: list) -> list:
    from collections import deque
    adj = [[[], []] for _ in range(n)]  # adj[u][0]=red, adj[u][1]=blue
    for u, v in redEdges:
        adj[u][0].append(v)
    for u, v in blueEdges:
        adj[u][1].append(v)
    dist = [-1] * n
    dist[0] = 0
    visited = [[False, False] for _ in range(n)]
    visited[0][0] = visited[0][1] = True
    queue = deque([(0, 0), (0, 1)])
    step = 1
    while queue:
        for _ in range(len(queue)):
            node, color = queue.popleft()
            nc = 1 - color
            for nxt in adj[node][nc]:
                if not visited[nxt][nc]:
                    visited[nxt][nc] = True
                    if dist[nxt] == -1:
                        dist[nxt] = step
                    queue.append((nxt, nc))
        step += 1
    return dist
`,
  },
  visibleTests: [
    { args: [3, [[0, 1], [1, 2]], []], expected: [0, 1, -1] },
    { args: [3, [[0, 1]], [[2, 1]]], expected: [0, 1, -1] },
    { args: [3, [[0, 1], [0, 2]], [[1, 0]]], expected: [0, 1, 1] },
  ],
  hiddenTests: [
    { args: [1, [], []], expected: [0] },
    { args: [4, [[3, 2], [1, 2]], [[1, 3], [0, 3]]], expected: [0, -1, 2, 1] },
    { args: [2, [[0, 1]], [[1, 0]]], expected: [0, 1] },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: [0, 1, 2, 3, 4] },
    { args: [3, [], [[0, 1], [1, 2]]], expected: [0, 1, -1] },
  ],
};
