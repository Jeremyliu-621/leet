import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-points-with-cost',
  title: 'Maximum Number of Points with Cost',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an \`m × n\` integer matrix \`points\` (0-indexed). Starting with 0 points, you must pick exactly one cell from each row. Picking cell \`(r, c)\` adds \`points[r][c]\` to your score. However, for adjacent rows, you subtract \`|c_curr - c_prev|\` from your score.

Return the **maximum** number of points you can achieve.`,
  constraints: [
    '`m == points.length`',
    '`n == points[r].length`',
    '`1 <= m, n <= 10^5`',
    '`1 <= m * n <= 10^5`',
    '`0 <= points[i][j] <= 10^5`',
  ],
  examples: [
    {
      input: 'points = [[1,2,3],[1,5,1],[3,1,1]]',
      output: '9',
      explanation: 'Pick (0,2)=3, (1,1)=5 (penalty |1-2|=1), (0,0)=3 (penalty |0-1|=1): 3+5-1+3-1=9.',
    },
    {
      input: 'points = [[1,5],[2,3],[4,2]]',
      output: '11',
      explanation: 'Pick (0,1)=5, (1,0)=2 (penalty 1), (2,0)=4 (penalty 0): 5+2-1+4=10... actually pick (1,1)=3: 5+3+0+2-1=9. Optimal: col1, col1, col0 = 5+3-0+4-1=11.',
    },
  ],
  hints: [
    'A naive DP is O(mn²). You need to propagate the row\'s best dp values in O(n) per row.',
    'Do a left-to-right sweep to compute left[j] = max(dp[k] - k) for k <= j, giving best top-left contribution. Do right-to-left for right[j] = max(dp[k] + k) for k >= j.',
    'For each cell j in the new row: dp[j] = points[i][j] + max(left[j] + j, right[j] - j).',
  ],
  functionName: 'maxPoints',
  params: ['points'],
  starterCode: {
    javascript: `function maxPoints(points) {
  const m = points.length, n = points[0].length;
  let dp = points[0].slice();
  for (let i = 1; i < m; i++) {
    const left = new Array(n);
    const right = new Array(n);
    left[0] = dp[0];
    for (let j = 1; j < n; j++) left[j] = Math.max(left[j - 1], dp[j] + j);
    right[n - 1] = dp[n - 1] - (n - 1);
    for (let j = n - 2; j >= 0; j--) right[j] = Math.max(right[j + 1], dp[j] - j);
    const ndp = new Array(n);
    for (let j = 0; j < n; j++) ndp[j] = points[i][j] + Math.max(left[j] - j, right[j] + j);
    dp = ndp;
  }
  return Math.max(...dp);
}`,
    typescript: `function maxPoints(points: number[][]): number {
  const m = points.length, n = points[0]!.length;
  let dp = points[0]!.slice();
  for (let i = 1; i < m; i++) {
    const left = new Array<number>(n);
    const right = new Array<number>(n);
    left[0] = dp[0]!;
    for (let j = 1; j < n; j++) left[j] = Math.max(left[j - 1]!, dp[j]! + j);
    right[n - 1] = dp[n - 1]! - (n - 1);
    for (let j = n - 2; j >= 0; j--) right[j] = Math.max(right[j + 1]!, dp[j]! - j);
    const ndp = new Array<number>(n);
    for (let j = 0; j < n; j++) ndp[j] = points[i]![j]! + Math.max(left[j]! - j, right[j]! + j);
    dp = ndp;
  }
  return Math.max(...dp);
}`,
    python: `def maxPoints(points):
    if hasattr(points, 'to_py'): points = points.to_py()
    points = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in points]
    m, n = len(points), len(points[0])
    dp = points[0][:]
    for i in range(1, m):
        left = [0] * n
        right = [0] * n
        left[0] = dp[0]
        for j in range(1, n): left[j] = max(left[j-1], dp[j] + j)
        right[n-1] = dp[n-1] - (n-1)
        for j in range(n-2, -1, -1): right[j] = max(right[j+1], dp[j] - j)
        dp = [points[i][j] + max(left[j] - j, right[j] + j) for j in range(n)]
    return max(dp)`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [1, 5, 1], [3, 1, 1]]], expected: 9 },
    { args: [[[1, 5], [2, 3], [4, 2]]], expected: 11 },
    { args: [[[0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[5, 1, 3], [1, 5, 1], [1, 1, 5]]], expected: 13 },
    { args: [[[1, 2], [3, 4]]], expected: 6 },
    { args: [[[2, 3, 4, 1], [1, 4, 3, 2]]], expected: 7 },
  ],
};
