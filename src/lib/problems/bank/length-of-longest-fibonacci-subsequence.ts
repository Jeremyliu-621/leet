import type { Problem } from '../types';

export const problem: Problem = {
  id: 'length-of-longest-fibonacci-subsequence',
  title: 'Length of Longest Fibonacci Subsequence',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `A sequence \`x1, x2, ..., xn\` is *Fibonacci-like* if \`n >= 3\` and \`xi + xi+1 == xi+2\` for all \`i + 2 <= n\`.

Given a **strictly increasing** array \`arr\`, return the length of the longest Fibonacci-like subsequence of \`arr\`. If one does not exist, return \`0\`.

**Example 1:**
\`\`\`
Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: [1,2,3,5,8]
\`\`\`

**Example 2:**
\`\`\`
Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: [1,11,12] or [3,11,14] or [7,11,18]
\`\`\`

**Constraints:**
- \`3 <= arr.length <= 1000\`
- \`1 <= arr[i] < arr[i+1] <= 10^9\``,
  constraints: ['3 <= arr.length <= 1000', '1 <= arr[i] < arr[i+1] <= 10^9'],
  examples: [
    { input: 'arr = [1,2,3,4,5,6,7,8]', output: '5' },
    { input: 'arr = [1,3,7,11,12,14,18]', output: '3' },
  ],
  hints: [
    'For each pair (i, j), check if arr[j] - arr[i] is in the array and comes before arr[i]. Use a map from value to index.',
    'Use DP: dp[i][j] = length of longest Fibonacci subsequence ending with arr[i] and arr[j]. Transition: if arr[k] = arr[j] - arr[i] exists, dp[i][j] = dp[k][i] + 1.',
    'Initialize dp[k][i] = 2 when first discovered. Return max dp[i][j] if ≥ 3, else 0.',
  ],
  functionName: 'lenLongestFibSubseq',
  params: ['arr'],
  starterCode: {
    javascript: `function lenLongestFibSubseq(arr) {
  const n = arr.length;
  const idx = new Map(arr.map((v, i) => [v, i]));
  const dp = Array.from({ length: n }, () => new Array(n).fill(2));
  let best = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const prev = arr[j] - arr[i];
      if (prev < arr[i] && idx.has(prev)) {
        const k = idx.get(prev);
        dp[i][j] = dp[k][i] + 1;
        best = Math.max(best, dp[i][j]);
      }
    }
  }
  return best >= 3 ? best : 0;
}`,
    typescript: `function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length;
  const idx = new Map(arr.map((v, i) => [v, i]));
  const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(2));
  let best = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const prev = arr[j]! - arr[i]!;
      if (prev < arr[i]! && idx.has(prev)) {
        const k = idx.get(prev)!;
        dp[i]![j] = dp[k]![i]! + 1;
        best = Math.max(best, dp[i]![j]!);
      }
    }
  }
  return best >= 3 ? best : 0;
}`,
    python: `def lenLongestFibSubseq(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    n = len(arr)
    idx = {v: i for i, v in enumerate(arr)}
    dp = [[2] * n for _ in range(n)]
    best = 0
    for j in range(1, n):
        for i in range(j):
            prev = arr[j] - arr[i]
            if prev < arr[i] and prev in idx:
                k = idx[prev]
                dp[i][j] = dp[k][i] + 1
                best = max(best, dp[i][j])
    return best if best >= 3 else 0`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: 5 },
    { args: [[1, 3, 7, 11, 12, 14, 18]], expected: 3 },
    { args: [[1, 2, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]], expected: 5 },
    { args: [[1, 3, 5]], expected: 0 },
    { args: [[1, 2, 4, 8, 16]], expected: 0 },
    { args: [[1, 2, 3, 5, 8, 13, 21]], expected: 7 },
  ],
};
