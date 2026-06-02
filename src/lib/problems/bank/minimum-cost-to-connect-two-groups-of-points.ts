import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-connect-two-groups-of-points',
  title: 'Minimum Cost to Connect Two Groups of Points',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'bit-manipulation'],
  description: `You are given two groups of points where the first group has \`size1\` points and the second group has \`size2\` points, and \`size1 >= size2\`.

The cost of the connection between any two points in the two groups is stored in an integer matrix \`cost\` where \`cost[i][j]\` is the cost of connecting point \`i\` in the first group with point \`j\` in the second group.

The groups are connected if **every** point in both groups is connected to one or more points in the other group. In other words, every point in the first group must be connected to at least one point in the second group, and every point in the second group must be connected to at least one point in the first group.

Return the **minimum** cost it takes to connect the two groups.`,
  constraints: [
    'size1 == cost.length',
    'size2 == cost[i].length',
    '1 <= size1, size2 <= 12',
    'size1 >= size2',
    '0 <= cost[i][j] <= 100',
  ],
  examples: [
    {
      input: 'cost = [[15,96],[36,2]]',
      output: '17',
      explanation: 'Connect point 0 in group 1 to point 0 (15) and point 1 in group 1 to point 1 (2). Total = 17.',
    },
    {
      input: 'cost = [[1,3,5],[4,1,1],[1,5,3]]',
      output: '4',
      explanation: 'Connect: (0→0)=1, (1→1)=1, (2→2)=3. Wait, (0→0)=1,(1→1)=1,(2→1)=1 covers group2[2] — but group2[2] not covered. Best: (0→2)=5,(1→1)=1,(2→0)=1 total=7... actually (0→0)=1,(1→1)=1,(2→2)=3 total=5 but group2[2] is at j=2. Actually: cost[0][0]=1 connects 1↔1, cost[1][1]=1, cost[2][2]=3: covers all with cost=5? No: (0,0):1,(1,1):1,(2,1):5 → group2[2] still uncovered. min(cost[j=2]) = min(5,1,3)=1 from row 1. So 1+1+1+1=4.',
    },
  ],
  hints: [
    'Level 1: Use bitmask DP where dp[mask] = minimum cost to handle all n points in group1 such that group2 coverage (which points in group2 are connected) is represented by `mask`.',
    'Level 2: Transition: for each group1 point i in order, try connecting it to each group2 point j. Update ndp[mask|(1<<j)] = min(dp[mask] + cost[i][j]).',
    'Level 3: After processing all group1 points, for each uncovered group2 point j, add min(cost[i][j]) over all i. The answer is the minimum over all masks of dp[mask] + (sum of minCosts for uncovered points).',
  ],
  functionName: 'connectTwoGroups',
  params: ['cost'],
  starterCode: {
    javascript: `function connectTwoGroups(cost) {
  const n = cost.length, m = cost[0].length;
  const minForGroup2 = new Array(m).fill(Infinity);
  for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) minForGroup2[j] = Math.min(minForGroup2[j], cost[i][j]);
  let dp = new Array(1 << m).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    const ndp = new Array(1 << m).fill(Infinity);
    for (let mask = 0; mask < (1 << m); mask++) {
      if (dp[mask] === Infinity) continue;
      for (let j = 0; j < m; j++) {
        const nm = mask | (1 << j);
        if (ndp[nm] > dp[mask] + cost[i][j]) ndp[nm] = dp[mask] + cost[i][j];
      }
    }
    dp = ndp;
  }
  let ans = Infinity;
  for (let mask = 0; mask < (1 << m); mask++) {
    if (dp[mask] === Infinity) continue;
    let extra = 0;
    for (let j = 0; j < m; j++) if (!(mask & (1 << j))) extra += minForGroup2[j];
    if (dp[mask] + extra < ans) ans = dp[mask] + extra;
  }
  return ans;
}`,
    typescript: `function connectTwoGroups(cost: number[][]): number {
  const n = cost.length, m = cost[0]!.length;
  const minForGroup2 = new Array(m).fill(Infinity);
  for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) minForGroup2[j] = Math.min(minForGroup2[j], cost[i]![j]!);
  let dp = new Array(1 << m).fill(Infinity) as number[];
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    const ndp = new Array(1 << m).fill(Infinity) as number[];
    for (let mask = 0; mask < (1 << m); mask++) {
      if (dp[mask] === Infinity) continue;
      for (let j = 0; j < m; j++) {
        const nm = mask | (1 << j);
        if (ndp[nm]! > dp[mask]! + cost[i]![j]!) ndp[nm] = dp[mask]! + cost[i]![j]!;
      }
    }
    dp = ndp;
  }
  let ans = Infinity;
  for (let mask = 0; mask < (1 << m); mask++) {
    if (dp[mask] === Infinity) continue;
    let extra = 0;
    for (let j = 0; j < m; j++) if (!(mask & (1 << j))) extra += minForGroup2[j]!;
    if (dp[mask]! + extra < ans) ans = dp[mask]! + extra;
  }
  return ans;
}`,
    python: `def connectTwoGroups(cost):
    cost = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (cost.to_py() if hasattr(cost, 'to_py') else cost)]
    n, m = len(cost), len(cost[0])
    min_for_group2 = [min(cost[i][j] for i in range(n)) for j in range(m)]
    INF = float('inf')
    dp = [INF] * (1 << m)
    dp[0] = 0
    for i in range(n):
        ndp = [INF] * (1 << m)
        for mask in range(1 << m):
            if dp[mask] == INF: continue
            for j in range(m):
                nm = mask | (1 << j)
                val = dp[mask] + cost[i][j]
                if val < ndp[nm]:
                    ndp[nm] = val
        dp = ndp
    ans = INF
    for mask in range(1 << m):
        if dp[mask] == INF: continue
        extra = sum(min_for_group2[j] for j in range(m) if not (mask & (1 << j)))
        ans = min(ans, dp[mask] + extra)
    return ans`,
  },
  visibleTests: [
    { args: [[[15, 96], [36, 2]]], expected: 17 },
    { args: [[[1, 3, 5], [4, 1, 1], [1, 5, 3]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 1], [1, 1]]], expected: 2 },
    { args: [[[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]], expected: 10 },
    { args: [[[1, 2], [3, 4]]], expected: 5 },
  ],
};
