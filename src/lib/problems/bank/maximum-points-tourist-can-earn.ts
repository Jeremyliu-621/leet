import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-points-tourist-can-earn',
  title: 'Maximum Points Tourist Can Earn',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given two integer arrays \`stayScore\` and \`travelScore\`.

- \`stayScore[day][city]\` is the score you earn if you stay in \`city\` on day \`day\`.
- \`travelScore[cityA][cityB]\` is the score you earn when you travel from \`cityA\` to \`cityB\`.

You start in a city of your choice on day 0 and must spend exactly \`n\` days (0-indexed) in the cities, where \`n == stayScore.length\`. You can **stay** in the same city or **travel** to any other city each day.

Return the **maximum** total points you can earn over all \`n\` days.`,
  constraints: [
    'n == stayScore.length',
    'm == travelScore.length == travelScore[i].length',
    '1 <= n <= 200',
    '1 <= m <= 200',
    '0 <= stayScore[i][j] <= 100',
    '0 <= travelScore[i][j] <= 100',
  ],
  examples: [
    {
      input: 'stayScore = [[2,3],[2,1]], travelScore = [[0,2],[1,0]]',
      output: '4',
      explanation: 'Start in city 1. Day 0: stay (+3). Day 1: travel to city 0 (+1). Total = 4.',
    },
    {
      input: 'stayScore = [[3,4],[2,3]], travelScore = [[0,3],[2,0]]',
      output: '7',
      explanation: 'Start in city 1. Day 0: stay (+4). Day 1: travel to city 0 (+2). Or stay city 1 (+3). Best = 4+3=7 (stay both days in city 1).',
    },
  ],
  hints: [
    'Level 1: Use DP where dp[c] = max points ending at city c after processing the current day.',
    'Level 2: On day 0, dp[c] = stayScore[0][c] for each city c. On each subsequent day d, for each destination city c compute: max(dp[c] + stayScore[d][c], max over c2≠c of dp[c2] + travelScore[c2][c]).',
    'Level 3: Keep a 1D dp array per day. For transition, precompute the global max of dp values, then for each city c use max(dp[c] + stayScore[d][c], globalMax + travelScore[...][c]) — but be careful because travelScore[c2][c] varies by c2, so scan all c2.',
  ],
  functionName: 'maxPoints',
  params: ['stayScore', 'travelScore'],
  starterCode: {
    javascript: `function maxPoints(stayScore, travelScore) {
  const n = stayScore.length, m = travelScore.length;
  let dp = new Array(m).fill(0);
  for (let day = 0; day < n; day++) {
    const ndp = new Array(m).fill(0);
    for (let c = 0; c < m; c++) {
      ndp[c] = dp[c] + stayScore[day][c];
      for (let c2 = 0; c2 < m; c2++) if (c2 !== c) ndp[c] = Math.max(ndp[c], dp[c2] + travelScore[c2][c]);
    }
    dp = ndp;
  }
  return Math.max(...dp);
}`,
    typescript: `function maxPoints(stayScore: number[][], travelScore: number[][]): number {
  const n = stayScore.length, m = travelScore.length;
  let dp = new Array(m).fill(0) as number[];
  for (let day = 0; day < n; day++) {
    const ndp = new Array(m).fill(0) as number[];
    for (let c = 0; c < m; c++) {
      ndp[c] = dp[c]! + stayScore[day]![c]!;
      for (let c2 = 0; c2 < m; c2++) if (c2 !== c) ndp[c] = Math.max(ndp[c]!, dp[c2]! + travelScore[c2]![c]!);
    }
    dp = ndp;
  }
  return Math.max(...dp);
}`,
    python: `def maxPoints(stayScore, travelScore):
    if hasattr(stayScore, 'to_py'): stayScore = stayScore.to_py()
    if hasattr(travelScore, 'to_py'): travelScore = travelScore.to_py()
    stayScore = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in stayScore]
    travelScore = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in travelScore]
    n, m = len(stayScore), len(travelScore)
    dp = [0] * m
    for day in range(n):
        ndp = [0] * m
        for c in range(m):
            ndp[c] = dp[c] + stayScore[day][c]
            for c2 in range(m):
                if c2 != c: ndp[c] = max(ndp[c], dp[c2] + travelScore[c2][c])
        dp = ndp
    return max(dp)`,
  },
  visibleTests: [
    {
      args: [[[2,3],[2,1]], [[0,2],[1,0]]],
      expected: 4,
    },
    {
      args: [[[3,4],[2,3]], [[0,3],[2,0]]],
      expected: 7,
    },
  ],
  hiddenTests: [
    {
      args: [[[5,3,7]], [[0,1,2],[1,0,1],[2,1,0]]],
      expected: 7,
    },
    {
      args: [[[1,2],[3,4],[5,6]], [[0,10],[10,0]]],
      expected: 22,
    },
    {
      args: [[[5],[3],[7]], [[0]]],
      expected: 15,
    },
  ],
};
