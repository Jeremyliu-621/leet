import type { Problem } from '../types';

export const problem: Problem = {
  id: '01-matrix',
  title: '01 Matrix',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given an \`m × n\` binary matrix \`mat\`, return a matrix of the same dimensions where each cell contains the **distance to the nearest 0**. The distance between two adjacent cells is 1.`,
  constraints: [
    '`m == mat.length`',
    '`n == mat[i].length`',
    '`1 <= m, n <= 10⁴`',
    '`1 <= m * n <= 10⁴`',
    '`mat[i][j]` is either `0` or `1`',
    'There is at least one `0` in `mat`',
  ],
  examples: [
    {
      input: 'mat = [[0,0,0],[0,1,0],[0,0,0]]',
      output: '[[0,0,0],[0,1,0],[0,0,0]]',
    },
    {
      input: 'mat = [[0,0,0],[0,1,0],[1,1,1]]',
      output: '[[0,0,0],[0,1,0],[1,2,1]]',
    },
  ],
  hints: [
    'Start BFS from **all zeros simultaneously** (multi-source BFS). Initialize the queue with every zero cell and set the distance of all 1-cells to Infinity.',
    'As BFS expands, each 1-cell is reached for the first time via the shortest path from a 0.',
    'This is more efficient than running BFS from each 0 separately.',
  ],
  functionName: 'updateMatrix',
  params: ['mat'],
  starterCode: {
    javascript: `function updateMatrix(mat) {
  const m = mat.length, n = mat[0].length;
  const dist = mat.map(r => r.map(v => v === 0 ? 0 : Infinity));
  const queue = [];
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (mat[r][c] === 0) queue.push([r, c]);
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  let qi = 0;
  while (qi < queue.length) {
    const [r, c] = queue[qi++];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr][nc] > dist[r][c] + 1) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
  return dist;
}`,
    typescript: `function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length, n = mat[0]!.length;
  const dist = mat.map(r => r.map(v => v === 0 ? 0 : Infinity));
  const queue: [number, number][] = [];
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (mat[r]![c] === 0) queue.push([r, c]);
  const dirs: [number, number][] = [[1,0],[-1,0],[0,1],[0,-1]];
  let qi = 0;
  while (qi < queue.length) {
    const [r, c] = queue[qi++]!;
    for (const [dr, dc] of dirs) {
      const nr = r + dr!, nc = c + dc!;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr]![nc]! > dist[r]![c]! + 1) {
        dist[nr]![nc] = dist[r]![c]! + 1;
        queue.push([nr, nc]);
      }
    }
  }
  return dist;
}`,
    python: `def updateMatrix(mat):
    from collections import deque
    m, n = len(mat), len(mat[0])
    dist = [[0 if mat[r][c] == 0 else float('inf') for c in range(n)] for r in range(m)]
    queue = deque((r, c) for r in range(m) for c in range(n) if mat[r][c] == 0)
    for r, c in queue:
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and dist[nr][nc] > dist[r][c] + 1:
                dist[nr][nc] = dist[r][c] + 1
                queue.append((nr, nc))
    return dist`,
  },
  visibleTests: [
    {
      args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
      expected: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
    },
    {
      args: [[[0, 0, 0], [0, 1, 0], [1, 1, 1]]],
      expected: [[0, 0, 0], [0, 1, 0], [1, 2, 1]],
    },
    { args: [[[0]]], expected: [[0]] },
  ],
  hiddenTests: [
    { args: [[[1, 0]]], expected: [[1, 0]] },
    {
      args: [[[0, 1, 1], [1, 1, 1], [1, 1, 0]]],
      expected: [[0, 1, 2], [1, 2, 1], [2, 1, 0]],
    },
    {
      args: [[[0, 0], [1, 1]]],
      expected: [[0, 0], [1, 1]],
    },
  ],
};
