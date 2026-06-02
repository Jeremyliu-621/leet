import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-there-is-a-path-with-equal-number-of-0s-and-1s',
  title: 'Check if There is a Path With Equal Number of 0s And 1s',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** \`m x n\` **binary** matrix \`grid\`. You can move from a cell to the adjacent cells **rightward** or **downward**.

Return \`true\` *if there is a path from \`(0, 0)\` to \`(m - 1, n - 1)\` such that the path has an **equal** number of \`0\`s and \`1\`s, and return* \`false\` *otherwise*.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '2 <= m, n <= 100',
    'grid[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'grid = [[0,1,0],[1,0,1]]',
      output: 'true',
      explanation: 'Path (0,0)→(0,1)→(0,2)→(1,2) visits cells 0,1,0,1 — 2 zeros and 2 ones.',
    },
    {
      input: 'grid = [[0,0,0],[0,0,0]]',
      output: 'false',
      explanation: 'Path length is 4, needing 2 ones, but the all-zero grid has max 0 ones.',
    },
  ],
  hints: [
    'Level 1: Any path from (0,0) to (m-1,n-1) has length m+n-1. If that is odd, return false immediately (can\'t split evenly).',
    'Level 2: Use DP to track the minimum and maximum number of ones achievable on any path to each cell: dp_min[i][j] = min(dp_min[i-1][j], dp_min[i][j-1]) + grid[i][j], similarly for dp_max.',
    'Level 3: Answer is true iff dp_min[m-1][n-1] ≤ (m+n-1)/2 ≤ dp_max[m-1][n-1].',
  ],
  functionName: 'isThereAPath',
  params: ['grid'],
  starterCode: {
    javascript: `function isThereAPath(grid) {
  const m = grid.length, n = grid[0].length;
  const len = m + n - 1;
  if (len % 2 === 1) return false;
  const target = len / 2;
  const mn = Array.from({length: m}, () => new Array(n).fill(Infinity));
  const mx = Array.from({length: m}, () => new Array(n).fill(-Infinity));
  mn[0][0] = mx[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) { mn[i][0] = mn[i-1][0] + grid[i][0]; mx[i][0] = mx[i-1][0] + grid[i][0]; }
  for (let j = 1; j < n; j++) { mn[0][j] = mn[0][j-1] + grid[0][j]; mx[0][j] = mx[0][j-1] + grid[0][j]; }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      mn[i][j] = Math.min(mn[i-1][j], mn[i][j-1]) + grid[i][j];
      mx[i][j] = Math.max(mx[i-1][j], mx[i][j-1]) + grid[i][j];
    }
  }
  return mn[m-1][n-1] <= target && target <= mx[m-1][n-1];
}`,
    typescript: `function isThereAPath(grid: number[][]): boolean {
  const m = grid.length, n = grid[0]!.length;
  const len = m + n - 1;
  if (len % 2 === 1) return false;
  const target = len / 2;
  const mn = Array.from({length: m}, () => new Array(n).fill(Infinity));
  const mx = Array.from({length: m}, () => new Array(n).fill(-Infinity));
  mn[0]![0] = mx[0]![0] = grid[0]![0]!;
  for (let i = 1; i < m; i++) { mn[i]![0] = mn[i-1]![0]! + grid[i]![0]!; mx[i]![0] = mx[i-1]![0]! + grid[i]![0]!; }
  for (let j = 1; j < n; j++) { mn[0]![j] = mn[0]![j-1]! + grid[0]![j]!; mx[0]![j] = mx[0]![j-1]! + grid[0]![j]!; }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      mn[i]![j] = Math.min(mn[i-1]![j]!, mn[i]![j-1]!) + grid[i]![j]!;
      mx[i]![j] = Math.max(mx[i-1]![j]!, mx[i]![j-1]!) + grid[i]![j]!;
    }
  }
  return mn[m-1]![n-1]! <= target && target <= mx[m-1]![n-1]!;
}`,
    python: `def isThereAPath(grid):
    grid = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    m, n = len(grid), len(grid[0])
    length = m + n - 1
    if length % 2 == 1: return False
    target = length // 2
    INF = float('inf')
    mn = [[INF]*n for _ in range(m)]
    mx = [[-INF]*n for _ in range(m)]
    mn[0][0] = mx[0][0] = grid[0][0]
    for i in range(1, m):
        mn[i][0] = mn[i-1][0] + grid[i][0]
        mx[i][0] = mx[i-1][0] + grid[i][0]
    for j in range(1, n):
        mn[0][j] = mn[0][j-1] + grid[0][j]
        mx[0][j] = mx[0][j-1] + grid[0][j]
    for i in range(1, m):
        for j in range(1, n):
            mn[i][j] = min(mn[i-1][j], mn[i][j-1]) + grid[i][j]
            mx[i][j] = max(mx[i-1][j], mx[i][j-1]) + grid[i][j]
    return mn[m-1][n-1] <= target <= mx[m-1][n-1]`,
  },
  visibleTests: [
    { args: [[[0, 1, 0], [1, 0, 1]]], expected: true },
    { args: [[[0, 0, 0], [0, 0, 0]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: false },
    { args: [[[1, 0]]], expected: true },
    { args: [[[1, 1], [1, 1]]], expected: false },
    { args: [[[0, 1, 1], [1, 0, 0]]], expected: true },
    { args: [[[0, 0, 0], [1, 1, 1]]], expected: true },
    { args: [[[1, 1, 1], [0, 0, 0]]], expected: true },
  ],
};
