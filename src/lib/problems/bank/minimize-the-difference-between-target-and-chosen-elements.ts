import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-the-difference-between-target-and-chosen-elements',
  title: 'Minimize the Difference Between Target and Chosen Elements',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`m x n\` integer matrix \`mat\` and an integer \`target\`.

Choose one integer from **each row** in the matrix such that the **absolute difference** between \`target\` and the **sum** of the chosen elements is **minimized**.

Return the **minimum absolute difference**.`,
  constraints: [
    '`m == mat.length`',
    '`n == mat[i].length`',
    '`1 <= m, n <= 70`',
    '`1 <= mat[i][j] <= 70`',
    '`1 <= target <= 800`',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]], target = 13',
      output: '0',
      explanation: 'Choose 1, 5, and 7. The sum is 13 with absolute difference 0.',
    },
    {
      input: 'mat = [[1],[2],[3]], target = 100',
      output: '94',
      explanation: 'The best sum is 1+2+3=6, absolute difference is |6-100|=94.',
    },
    {
      input: 'mat = [[1,2,3]], target = 2',
      output: '0',
      explanation: 'Choose element 2. Sum is 2 with absolute difference 0.',
    },
  ],
  hints: [
    'Use dynamic programming: maintain a set of all reachable sums after processing each row.',
    'Start with the set {0}. For each row, create a new set by adding each row element to each existing sum.',
    'To keep the DP tractable, prune sums that can no longer beat the current best. Specifically, after computing new sums, keep only those ≤ min_sum_≥_target (the smallest sum that meets or exceeds target) to avoid redundant states.',
    'After all rows, the answer is min(|s - target|) over all reachable sums.',
  ],
  functionName: 'minimizeTheDifference',
  params: ['mat', 'target'],
  starterCode: {
    javascript: `function minimizeTheDifference(mat, target) {
  const MAX = 70 * 70 + 1;
  let dp = new Uint8Array(MAX);
  dp[0] = 1;
  for (const row of mat) {
    const newDp = new Uint8Array(MAX);
    for (let j = 0; j < MAX; j++) {
      if (!dp[j]) continue;
      for (const v of row) if (j + v < MAX) newDp[j + v] = 1;
    }
    dp = newDp;
  }
  let ans = Infinity;
  for (let j = 0; j < MAX; j++) if (dp[j]) ans = Math.min(ans, Math.abs(j - target));
  return ans;
}`,
    typescript: `function minimizeTheDifference(mat: number[][], target: number): number {
  const MAX = 70 * 70 + 1;
  let dp = new Uint8Array(MAX);
  dp[0] = 1;
  for (const row of mat) {
    const newDp = new Uint8Array(MAX);
    for (let j = 0; j < MAX; j++) {
      if (!dp[j]) continue;
      for (const v of row) if (j + v < MAX) newDp[j + v] = 1;
    }
    dp = newDp;
  }
  let ans = Infinity;
  for (let j = 0; j < MAX; j++) if (dp[j]) ans = Math.min(ans, Math.abs(j - target));
  return ans;
}`,
    python: `def minimizeTheDifference(mat: list[list[int]], target: int) -> int:
    if hasattr(mat, 'to_py'): mat = [[int(x) for x in (row.to_py() if hasattr(row, 'to_py') else row)] for row in mat.to_py()]
    MAX = 70 * 70 + 1
    dp = [False] * MAX; dp[0] = True
    for row in mat:
        new_dp = [False] * MAX
        for j in range(MAX):
            if not dp[j]: continue
            for v in row:
                if j + v < MAX: new_dp[j + v] = True
        dp = new_dp
    return min(abs(j - target) for j in range(MAX) if dp[j])`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 13], expected: 0 },
    { args: [[[1], [2], [3]], 100], expected: 94 },
    { args: [[[1, 2, 3]], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 10], [2, 5]], 8], expected: 2 },
    { args: [[[5, 10, 15], [1, 2, 3]], 12], expected: 0 },
    { args: [[[1, 2, 3], [1, 2, 3], [1, 2, 3]], 3], expected: 0 },
    { args: [[[100], [100], [100]], 50], expected: 250 },
    { args: [[[1]], 1], expected: 0 },
    { args: [[[2, 3], [1, 4]], 5], expected: 1 },
  ],
};
