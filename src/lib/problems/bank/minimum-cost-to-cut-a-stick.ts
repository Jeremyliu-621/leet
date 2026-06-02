import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-cut-a-stick',
  title: 'Minimum Cost to Cut a Stick',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given a wooden stick of length \`n\` units. The stick is labelled from \`0\` to \`n\`.

You are given an integer array \`cuts\` where \`cuts[i]\` denotes a position you should perform a cut at.

You should perform the cuts in order, you can change the order of the cuts as you wish.

The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (the sum of their lengths is the length of the current stick). Please refer to the first example for further details.

Return the **minimum total cost** of the cuts.`,
  constraints: [
    '2 <= n <= 10^6',
    '1 <= cuts.length <= min(n - 1, 100)',
    '1 <= cuts[i] <= n - 1',
    'All the integers in cuts array are distinct.',
  ],
  examples: [
    {
      input: 'n = 7, cuts = [1,3,4,5]',
      output: '16',
      explanation: 'Cut order [3,5,1,4] costs 7+4+4+1=16. This is optimal.',
    },
    {
      input: 'n = 9, cuts = [5,6,1,4,2]',
      output: '22',
      explanation: 'Minimum cost is achieved with a specific ordering that totals 22.',
    },
  ],
  hints: [
    'Add 0 and n to the cuts array and sort it. Now the problem becomes: interval DP on adjacent cut points.',
    'Let dp[i][j] = minimum cost to make all cuts between cuts[i] and cuts[j]. The cost for the last cut in this interval is cuts[j] - cuts[i].',
    'Recurrence: dp[i][j] = min over k in (i+1..j-1) of (dp[i][k] + dp[k][j] + cuts[j] - cuts[i]).',
  ],
  functionName: 'minCost',
  params: ['n', 'cuts'],
  starterCode: {
    javascript: `function minCost(n, cuts) {
  const arr = [...cuts, 0, n].sort((a, b) => a - b);
  const m = arr.length;
  const dp = Array.from({length: m}, () => new Array(m).fill(0));
  for (let len=2;len<m;len++) {
    for (let i=0;i+len<m;i++) {
      const j=i+len; dp[i][j]=Infinity;
      for (let k=i+1;k<j;k++) dp[i][j]=Math.min(dp[i][j],dp[i][k]+dp[k][j]+arr[j]-arr[i]);
    }
  }
  return dp[0][m-1];
}`,
    typescript: `function minCost(n: number, cuts: number[]): number {
  const arr = [...cuts, 0, n].sort((a, b) => a - b);
  const m = arr.length;
  const dp = Array.from({length: m}, () => new Array<number>(m).fill(0));
  for (let len=2;len<m;len++) {
    for (let i=0;i+len<m;i++) {
      const j=i+len; dp[i]![j]=Infinity;
      for (let k=i+1;k<j;k++) dp[i]![j]=Math.min(dp[i]![j]!,dp[i]![k]!+dp[k]![j]!+arr[j]!-arr[i]!);
    }
  }
  return dp[0]![m-1]!;
}`,
    python: `def minCost(n, cuts):
    if hasattr(cuts, 'to_py'): cuts = list(cuts.to_py())
    arr = sorted(cuts + [0, n]); m = len(arr)
    dp = [[0] * m for _ in range(m)]
    for length in range(2, m):
        for i in range(m - length):
            j = i + length; dp[i][j] = float('inf')
            for k in range(i + 1, j): dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + arr[j] - arr[i])
    return dp[0][m-1]`,
  },
  visibleTests: [
    { args: [7, [1, 3, 4, 5]], expected: 16 },
    { args: [9, [5, 6, 1, 4, 2]], expected: 22 },
  ],
  hiddenTests: [
    { args: [3, [1, 2]], expected: 5 },
    { args: [10, [3]], expected: 10 },
    { args: [10, [2, 4, 7]], expected: 20 },
    { args: [20, [10]], expected: 20 },
    { args: [5, [2, 3]], expected: 8 },
    { args: [100, [50, 25, 75]], expected: 200 },
  ],
};
