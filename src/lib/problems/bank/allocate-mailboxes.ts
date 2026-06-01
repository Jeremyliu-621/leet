import type { Problem } from '../types';

export const problem: Problem = {
  id: 'allocate-mailboxes',
  title: 'Allocate Mailboxes',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given the array \`houses\` where \`houses[i]\` is the location of the \`i\`-th house along a street and an integer \`k\`, allocate \`k\` mailboxes in the street.

Return the **minimum total distance** between each house and its nearest mailbox.

The answer is guaranteed to fit in a 32-bit signed integer.`,
  constraints: [
    'n == houses.length',
    '1 <= k <= n <= 100',
    '1 <= houses[i] <= 10^4',
  ],
  examples: [
    {
      input: 'houses = [1,4,8,10,20], k = 3',
      output: '5',
      explanation: 'Sort houses: [1,4,8,10,20]. Allocate mailboxes at 4, 9, 20. Distances: 3+0+1+1+0=5.',
    },
    {
      input: 'houses = [2,3,5,12,18], k = 2',
      output: '9',
      explanation: 'Sort: [2,3,5,12,18]. Mailboxes at 3 and 15. Distances: 1+0+2+3+3=9.',
    },
  ],
  hints: [
    'Level 1: Sort houses. The optimal mailbox for a contiguous segment of sorted houses is at the median position. Precompute cost[i][j] = minimum total distance to serve houses[i..j] with one mailbox (placed at median).',
    'Level 2: DP: dp[k][i] = minimum total distance to serve first i houses with k mailboxes. Transition: dp[m][j] = min over i of (dp[m-1][i] + cost[i][j-1]) for the last group being houses[i..j-1].',
    'Level 3: cost[i][j] for sorted houses: place mailbox at median, sum |house - median|. Equivalent to: sum from left (median-houses[left]) + sum from right (houses[right]-median) as two pointers. O(n²) to precompute all costs, then O(n²k) DP.',
  ],
  functionName: 'minDistance',
  params: ['houses', 'k'],
  starterCode: {
    javascript: `function minDistance(houses, k) {
  houses.sort((a, b) => a - b);
  const n = houses.length;
  const cost = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let lo = i, hi = j;
      while (lo < hi) {
        cost[i][j] += houses[hi] - houses[lo];
        lo++;
        hi--;
      }
    }
  }
  const INF = Infinity;
  const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(INF));
  dp[0][0] = 0;
  for (let m = 1; m <= k; m++) {
    for (let j = m; j <= n; j++) {
      for (let i = m - 1; i < j; i++) {
        const prev = dp[m - 1][i];
        if (prev < INF) {
          dp[m][j] = Math.min(dp[m][j], prev + cost[i][j - 1]);
        }
      }
    }
  }
  return dp[k][n];
}`,
    typescript: `function minDistance(houses: number[], k: number): number {
  houses.sort((a, b) => a - b);
  const n = houses.length;
  const cost: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let lo = i, hi = j;
      while (lo < hi) {
        cost[i]![j] = (cost[i]![j] ?? 0) + houses[hi]! - houses[lo]!;
        lo++;
        hi--;
      }
    }
  }
  const INF = Infinity;
  const dp: number[][] = Array.from({ length: k + 1 }, () => new Array<number>(n + 1).fill(INF));
  dp[0]![0] = 0;
  for (let m = 1; m <= k; m++) {
    for (let j = m; j <= n; j++) {
      for (let i = m - 1; i < j; i++) {
        const prev = dp[m - 1]![i]!;
        if (prev < INF) {
          dp[m]![j] = Math.min(dp[m]![j]!, prev + cost[i]![j - 1]!);
        }
      }
    }
  }
  return dp[k]![n]!;
}`,
    python: `def minDistance(houses, k):
    houses.sort()
    n = len(houses)
    cost = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            lo, hi = i, j
            while lo < hi:
                cost[i][j] += houses[hi] - houses[lo]
                lo += 1
                hi -= 1
    INF = float('inf')
    dp = [[INF] * (n + 1) for _ in range(k + 1)]
    dp[0][0] = 0
    for m in range(1, k + 1):
        for j in range(m, n + 1):
            for i in range(m - 1, j):
                if dp[m - 1][i] < INF:
                    dp[m][j] = min(dp[m][j], dp[m - 1][i] + cost[i][j - 1])
    return dp[k][n]`,
  },
  visibleTests: [
    { args: [[1, 4, 8, 10, 20], 3], expected: 5 },
    { args: [[2, 3, 5, 12, 18], 2], expected: 9 },
    { args: [[1], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 0 },
    { args: [[3, 6, 9], 2], expected: 3 },
    { args: [[1, 10], 1], expected: 9 },
    { args: [[1, 10], 2], expected: 0 },
    { args: [[7, 4, 6, 1], 1], expected: 8 },
  ],
};
