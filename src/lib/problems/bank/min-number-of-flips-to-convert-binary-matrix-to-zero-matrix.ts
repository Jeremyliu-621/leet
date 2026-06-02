import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-number-of-flips-to-convert-binary-matrix-to-zero-matrix',
  title: 'Minimum Number of Flips to Convert Binary Matrix to Zero Matrix',
  difficulty: 'hard',
  tags: ['graph', 'simulation', 'arrays'],
  description: `Given a \`m x n\` binary matrix \`mat\`, in one step, you can choose one cell and **flip** it and all of its **four neighbors** (up, down, left, right) if they exist.

Return the **minimum number of steps** required to convert \`mat\` to the **zero matrix**, or \`-1\` if it is impossible.

A binary matrix has only \`0\` and \`1\` values. A zero matrix is all \`0\`s.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 3',
    'mat[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'mat = [[0,0],[0,1]]',
      output: '3',
      explanation: 'Flip (1,1): [[1,1],[1,0]]. Flip (0,1): [[0,0],[1,1]]. Flip (1,0): [[0,0],[0,0]].',
    },
    {
      input: 'mat = [[0]]',
      output: '0',
    },
    {
      input: 'mat = [[1,1,1],[1,0,1],[0,0,0]]',
      output: '6',
    },
  ],
  hints: [
    'The state space is small: m*n ≤ 9, so at most 2^9 = 512 possible states. Encode the matrix as a bitmask.',
    'Use BFS from the initial state toward the zero state. Each flip toggles the selected cell and its neighbors.',
    'BFS guarantees the minimum number of flips to reach state 0.',
  ],
  functionName: 'minFlips',
  params: ['mat'],
  starterCode: {
    javascript: `function minFlips(mat) {
  const m = mat.length, n = mat[0].length;
  let start = 0;
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (mat[i][j]) start |= 1 << (i * n + j);
  if (start === 0) return 0;
  const dirs = [[0,0],[-1,0],[1,0],[0,-1],[0,1]];
  const seen = new Set([start]);
  let queue = [start], steps = 0;
  while (queue.length) {
    steps++;
    const next = [];
    for (const state of queue) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          let ns = state;
          for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) ns ^= 1 << (ni * n + nj);
          }
          if (ns === 0) return steps;
          if (!seen.has(ns)) { seen.add(ns); next.push(ns); }
        }
      }
    }
    queue = next;
  }
  return -1;
}`,
    typescript: `function minFlips(mat: number[][]): number {
  const m = mat.length, n = mat[0]!.length;
  let start = 0;
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (mat[i]![j]) start |= 1 << (i * n + j);
  if (start === 0) return 0;
  const dirs: [number, number][] = [[0,0],[-1,0],[1,0],[0,-1],[0,1]];
  const seen = new Set([start]);
  let queue = [start], steps = 0;
  while (queue.length) {
    steps++;
    const next: number[] = [];
    for (const state of queue) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          let ns = state;
          for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) ns ^= 1 << (ni * n + nj);
          }
          if (ns === 0) return steps;
          if (!seen.has(ns)) { seen.add(ns); next.push(ns); }
        }
      }
    }
    queue = next;
  }
  return -1;
}`,
    python: `def minFlips(mat: list) -> int:
    if hasattr(mat, 'to_py'): mat = [[int(x) for x in (row.to_py() if hasattr(row, 'to_py') else row)] for row in mat.to_py()]
    m, n = len(mat), len(mat[0])
    start = 0
    for i in range(m):
        for j in range(n):
            if mat[i][j]: start |= 1 << (i * n + j)
    if start == 0: return 0
    dirs = [(0,0),(-1,0),(1,0),(0,-1),(0,1)]
    seen = {start}
    queue = [start]; steps = 0
    while queue:
        steps += 1
        next_q = []
        for state in queue:
            for i in range(m):
                for j in range(n):
                    ns = state
                    for di, dj in dirs:
                        ni, nj = i+di, j+dj
                        if 0 <= ni < m and 0 <= nj < n: ns ^= 1 << (ni * n + nj)
                    if ns == 0: return steps
                    if ns not in seen: seen.add(ns); next_q.append(ns)
        queue = next_q
    return -1`,
  },
  visibleTests: [
    { args: [[[0,0],[0,1]]], expected: 3 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1,1,1],[1,0,1],[0,0,0]]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1,0],[0,1]]], expected: 2 },
    { args: [[[0,0],[0,0]]], expected: 0 },
    { args: [[[1,1],[1,1]]], expected: 4 },
  ],
};
