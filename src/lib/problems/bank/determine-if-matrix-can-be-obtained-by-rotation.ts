import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-matrix-can-be-obtained-by-rotation',
  title: 'Determine if Matrix Can Be Obtained By Rotation',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given two \`n × n\` binary matrices \`mat\` and \`target\`, return \`true\` if it is possible to make \`mat\` equal to \`target\` by **rotating** \`mat\` in **90-degree increments**, or \`false\` otherwise.

A 90-degree clockwise rotation transforms position \`(i, j)\` to \`(j, n - 1 - i)\`.`,
  constraints: [
    'n == mat.length == mat[i].length',
    'n == target.length == target[i].length',
    '1 <= n <= 10',
    'mat[i][j] and target[i][j] are either 0 or 1.',
  ],
  examples: [
    {
      input: 'mat = [[0,1],[1,0]], target = [[1,0],[0,1]]',
      output: 'true',
      explanation: 'We can rotate mat 90 degrees clockwise to get [[1,0],[0,1]] which equals target.',
    },
    {
      input: 'mat = [[0,1],[1,1]], target = [[1,0],[0,1]]',
      output: 'false',
      explanation: 'No rotation of mat produces target.',
    },
    {
      input: 'mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]',
      output: 'true',
      explanation: 'Two 90-degree rotations (180 degrees total) give the target.',
    },
  ],
  hints: [
    'Try all 4 possible rotations (0°, 90°, 180°, 270°) and check if any matches target.',
    'To rotate a matrix 90° clockwise: new[j][n-1-i] = old[i][j]. Or equivalently, transpose then reverse each row.',
    'Repeat the rotation up to 3 times, checking equality at each step.',
  ],
  functionName: 'findRotation',
  params: ['mat', 'target'],
  starterCode: {
    javascript: `function findRotation(mat, target) {
  const n = mat.length;
  function rotate90(m) {
    const r = Array.from({length: n}, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        r[j][n - 1 - i] = m[i][j];
    return r;
  }
  function equal(a, b) {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (a[i][j] !== b[i][j]) return false;
    return true;
  }
  let cur = mat;
  for (let k = 0; k < 4; k++) {
    if (equal(cur, target)) return true;
    cur = rotate90(cur);
  }
  return false;
}`,
    typescript: `function findRotation(mat: number[][], target: number[][]): boolean {
  const n = mat.length;
  function rotate90(m: number[][]): number[][] {
    const r = Array.from({length: n}, () => new Array(n).fill(0) as number[]);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        r[j]![n - 1 - i] = m[i]![j]!;
    return r;
  }
  function equal(a: number[][], b: number[][]): boolean {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (a[i]![j] !== b[i]![j]) return false;
    return true;
  }
  let cur = mat;
  for (let k = 0; k < 4; k++) {
    if (equal(cur, target)) return true;
    cur = rotate90(cur);
  }
  return false;
}`,
    python: `def findRotation(mat: list[list[int]], target: list[list[int]]) -> bool:
    mat = [list(row) for row in mat]
    target = [list(row) for row in target]
    n = len(mat)
    def rotate90(m):
        r = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                r[j][n - 1 - i] = m[i][j]
        return r
    cur = mat
    for _ in range(4):
        if cur == target:
            return True
        cur = rotate90(cur)
    return False`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]], [[1, 0], [0, 1]]], expected: true },
    { args: [[[0, 1], [1, 1]], [[1, 0], [0, 1]]], expected: false },
    { args: [[[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1]], [[1]]], expected: true },
    { args: [[[0]], [[1]]], expected: false },
    { args: [[[1, 0], [0, 0]], [[0, 1], [0, 0]]], expected: true },
    { args: [[[1, 0], [0, 1]], [[1, 0], [0, 1]]], expected: true },
    { args: [[[1, 1], [0, 0]], [[1, 1], [0, 0]]], expected: true },
    { args: [[[1, 0], [1, 0]], [[0, 0], [1, 1]]], expected: true },
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: true },
    { args: [[[0, 1, 0], [1, 1, 1], [0, 1, 0]], [[0, 1, 0], [1, 1, 1], [0, 1, 0]]], expected: true },
    { args: [[[1, 0, 1], [0, 0, 0], [1, 0, 1]], [[1, 0, 1], [0, 0, 0], [1, 0, 1]]], expected: true },
    { args: [[[1, 1, 0], [0, 0, 0], [0, 0, 1]], [[1, 0, 0], [1, 0, 0], [0, 0, 1]]], expected: false },
  ],
};
