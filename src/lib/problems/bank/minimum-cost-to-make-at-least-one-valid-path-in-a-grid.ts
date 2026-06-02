import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-at-least-one-valid-path-in-a-grid',
  title: 'Minimum Cost to Make at Least One Valid Path in a Grid',
  difficulty: 'hard',
  tags: ['shortest-path', 'graph', 'arrays'],
  description: `Given an \`m x n\` grid where each cell \`grid[i][j]\` contains a **direction**:
- \`1\` → right
- \`2\` → left
- \`3\` → down
- \`4\` → up

A **valid path** goes from \`(0, 0)\` to \`(m-1, n-1)\` following the arrows. You may change any cell's direction at cost \`1\`.

Return the **minimum cost** to make at least one valid path exist.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 100',
    '1 <= grid[i][j] <= 4',
  ],
  examples: [
    {
      input: 'grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]',
      output: '3',
      explanation: 'Following arrows: row 0 right (free) → go down (cost 1) → row 2 right (free) → go down (cost 1) → can\'t reach corner without one more change (cost 1). Total: 3.',
    },
    {
      input: 'grid = [[1,1,3],[3,2,2],[1,1,4]]',
      output: '0',
      explanation: '(0,0)→right→(0,1)→right→(0,2)→down→(1,2)→left→(1,1)→left→(1,0)→down→(2,0)→right→(2,1)→right→(2,2). All arrows match, cost 0.',
    },
    {
      input: 'grid = [[1,2],[4,3]]',
      output: '1',
      explanation: '(0,0)→right→(0,1) but (0,1)=2 points left, so can\'t continue freely. Change (0,1) to down (cost 1) → reach (1,1). Total: 1.',
    },
  ],
  hints: [
    'Model this as a shortest-path problem: nodes are cells, edges have weight 0 if moving in the arrow\'s direction and weight 1 if changing direction.',
    'Use 0-1 BFS (deque): when the edge cost is 0, push to the front of the deque; when cost is 1, push to the back. This gives O(m·n) shortest paths without a full Dijkstra.',
    'Initialize dist[0][0] = 0, dist[i][j] = ∞ for all others. Process cells in BFS order, relaxing each of the 4 neighbors. The answer is dist[m-1][n-1].',
  ],
  functionName: 'minCost',
  params: ['grid'],
  starterCode: {
    javascript: `function minCost(grid) {
  const m = grid.length, n = grid[0].length;
  const dist = Array.from({length: m}, () => new Array(n).fill(Infinity));
  dist[0][0] = 0;
  const drs = [0, 0, 1, -1], dcs = [1, -1, 0, 0]; // directions 1,2,3,4
  const deque = [[0, 0]];
  let head = 0;
  while (head < deque.length) {
    const [r, c] = deque[head++];
    for (let d = 0; d < 4; d++) {
      const nr = r + drs[d], nc = c + dcs[d];
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
      const cost = grid[r][c] === d + 1 ? 0 : 1;
      const nt = dist[r][c] + cost;
      if (nt < dist[nr][nc]) {
        dist[nr][nc] = nt;
        if (cost === 0) deque.splice(head, 0, [nr, nc]);
        else deque.push([nr, nc]);
      }
    }
  }
  return dist[m-1][n-1];
}`,
    typescript: `function minCost(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  const dist = Array.from({length: m}, () => new Array<number>(n).fill(Infinity));
  dist[0]![0] = 0;
  const drs = [0, 0, 1, -1], dcs = [1, -1, 0, 0];
  const deque: [number, number][] = [[0, 0]];
  let head = 0;
  while (head < deque.length) {
    const [r, c] = deque[head++]!;
    for (let d = 0; d < 4; d++) {
      const nr = r + drs[d]!, nc = c + dcs[d]!;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
      const cost = grid[r]![c] === d + 1 ? 0 : 1;
      const nt = dist[r]![c]! + cost;
      if (nt < dist[nr]![nc]!) {
        dist[nr]![nc] = nt;
        if (cost === 0) deque.splice(head, 0, [nr, nc]);
        else deque.push([nr, nc]);
      }
    }
  }
  return dist[m-1]![n-1]!;
}`,
    python: `def minCost(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    from collections import deque
    m, n = len(grid), len(grid[0])
    dist = [[float('inf')]*n for _ in range(m)]; dist[0][0] = 0
    drs, dcs = [0,0,1,-1],[1,-1,0,0]
    dq = deque([(0,0)])
    while dq:
        r, c = dq.popleft()
        for d in range(4):
            nr, nc = r+drs[d], c+dcs[d]
            if 0<=nr<m and 0<=nc<n:
                cost = 0 if grid[r][c] == d+1 else 1
                nt = dist[r][c] + cost
                if nt < dist[nr][nc]:
                    dist[nr][nc] = nt
                    if cost == 0: dq.appendleft((nr,nc))
                    else: dq.append((nr,nc))
    return dist[m-1][n-1]`,
  },
  visibleTests: [
    { args: [[[1, 1, 1, 1], [2, 2, 2, 2], [1, 1, 1, 1], [2, 2, 2, 2]]], expected: 3 },
    { args: [[[1, 1, 3], [3, 2, 2], [1, 1, 4]]], expected: 0 },
    { args: [[[1, 2], [4, 3]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[4]]], expected: 0 },
    { args: [[[1]]], expected: 0 },
    { args: [[[1], [2]]], expected: 1 },
    { args: [[[3, 4], [1, 2]]], expected: 0 },
    { args: [[[2, 2, 2], [2, 2, 2]]], expected: 3 },
    { args: [[[1, 1, 1, 1, 1]]], expected: 0 },
    { args: [[[3], [3], [3]]], expected: 0 },
    { args: [[[1, 1, 4], [2, 1, 4], [2, 1, 1]]], expected: 2 },
    { args: [[[1, 2, 3], [3, 1, 2], [2, 3, 1]]], expected: 2 },
    { args: [[[1, 1, 2], [3, 3, 2], [1, 1, 1]]], expected: 1 },
  ],
};
