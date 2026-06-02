import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-finish-races',
  title: 'Minimum Time to Finish the Races',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a 0-indexed 2D integer array \`tires\` where \`tires[i] = [fi, ri]\` indicates that the \`i\`-th tire can finish its \`x\`-th consecutive lap in \`fi * ri^(x-1)\` seconds.

- For example, if \`fi = 3\` and \`ri = 2\`, then the tire would finish its \`1\`st lap in \`3\` seconds, its \`2\`nd consecutive lap in \`6\` seconds, its \`3\`rd consecutive lap in \`12\` seconds, etc.

You are also given an integer \`changeTime\` and an integer \`numLaps\`.

The race consists of \`numLaps\` laps. You may start the race on any tire, and after every lap, you can either continue on the same tire or switch to another tire (by spending \`changeTime\` seconds to change).

Return the **minimum** time to finish the race.`,
  constraints: [
    '1 <= tires.length <= 10^5',
    '1 <= fi, changeTime <= 10^5',
    '2 <= ri <= 10^5',
    '1 <= numLaps <= 1000',
  ],
  examples: [
    {
      input: 'tires = [[2,3],[3,4]], changeTime = 5, numLaps = 4',
      output: '21',
      explanation:
        'Lap 1: tire 0 (2s). Lap 2: tire 0 (6s). Lap 3: change to tire 1 (5s) then lap 1 (3s). Lap 4: tire 1 lap 2 (12s). Total = 2+6+5+3+12 = 28? Actually: 2+6+change+3+change+2 is another option. Optimal: start tire 1 (3+12=15), change, tire 0 (2), change, tire 0 (2) = 3+12+5+2+5+2=29. Actually best is tire 0 for 2 laps (2+6=8), change, tire 0 for 2 laps (2+6=8), change total=8+5+8=21. Answer=21.',
    },
    {
      input: 'tires = [[1,10],[2,2],[3,4]], changeTime = 6, numLaps = 5',
      output: '25',
      explanation:
        'Optimal is to use tire 1 for 1 lap (2s) + change (6s) + tire 1 for 1 lap (2s) + change (6s) + tire 1 for 3 laps (2+4+8=14) = 30? Or tire 1 for 2 laps (2+4=6) + change (6) + tire 1 for 2 laps (2+4=6) + change (6) + tire 1 for 1 lap (2) = 26. Better: tire 1 for 3 laps (2+4+8=14) + change (6) + tire 1 for 2 laps (2+4=6) = 26. Best is 25.',
    },
  ],
  hints: [
    'Precompute `best[j]` = the minimum time to complete exactly `j` consecutive laps on a single tire without changing (for j = 1..min(numLaps, ~20)). Since r >= 2, the cost doubles each lap, so beyond 20 laps it exceeds numLaps * changeTime.',
    'Then run DP: let `dp[i]` = minimum time to finish exactly `i` laps. `dp[0] = 0`. Transition: `dp[i] = min(dp[i-j] + changeTime + best[j])` for j in 1..min(i, max_consec). For the very first stint, no changeTime is added: `dp[j] = min(dp[j], best[j])`.',
    'The maximum number of useful consecutive laps on one tire is O(log(numLaps * changeTime / fi)) ~ at most 20-30, since the geometric series quickly exceeds the cost of always switching.',
  ],
  functionName: 'minimumFinishTime',
  params: ['tires', 'changeTime', 'numLaps'],
  starterCode: {
    javascript: `function minimumFinishTime(tires, changeTime, numLaps) {
  const INF = Infinity;
  // best[j] = min time to run j consecutive laps on any single tire (no changeTime)
  const MAX_CONSEC = Math.min(numLaps, 20); // r>=2, so 2^20 >> 10^5
  const best = new Array(MAX_CONSEC + 1).fill(INF);
  for (const [f, r] of tires) {
    let lapCost = f, totalCost = 0;
    for (let j = 1; j <= MAX_CONSEC; j++) {
      totalCost += lapCost;
      if (totalCost >= INF || lapCost > numLaps * (changeTime + f)) break;
      best[j] = Math.min(best[j], totalCost);
      lapCost = Math.round(lapCost * r);
    }
  }
  // dp[i] = min time to finish exactly i laps
  const dp = new Array(numLaps + 1).fill(INF);
  dp[0] = 0;
  for (let i = 1; i <= numLaps; i++) {
    for (let j = 1; j <= Math.min(i, MAX_CONSEC); j++) {
      if (best[j] < INF) {
        dp[i] = Math.min(dp[i], dp[i - j] + (i === j ? 0 : changeTime) + best[j]);
      }
    }
  }
  return dp[numLaps];
}`,
    typescript: `function minimumFinishTime(tires: number[][], changeTime: number, numLaps: number): number {
  const INF = Infinity;
  const MAX_CONSEC = Math.min(numLaps, 20);
  const best = new Array<number>(MAX_CONSEC + 1).fill(INF);
  for (const [f, r] of tires) {
    let lapCost = f!, totalCost = 0;
    for (let j = 1; j <= MAX_CONSEC; j++) {
      totalCost += lapCost;
      if (totalCost >= INF || lapCost > numLaps * (changeTime + f!)) break;
      best[j] = Math.min(best[j]!, totalCost);
      lapCost = Math.round(lapCost * r!);
    }
  }
  const dp = new Array<number>(numLaps + 1).fill(INF);
  dp[0] = 0;
  for (let i = 1; i <= numLaps; i++) {
    for (let j = 1; j <= Math.min(i, MAX_CONSEC); j++) {
      if (best[j]! < INF) {
        dp[i] = Math.min(dp[i]!, dp[i - j]! + (i === j ? 0 : changeTime) + best[j]!);
      }
    }
  }
  return dp[numLaps]!;
}`,
    python: `def minimumFinishTime(tires: list[list[int]], changeTime: int, numLaps: int) -> int:
    INF = float('inf')
    MAX_CONSEC = min(numLaps, 20)
    best = [INF] * (MAX_CONSEC + 1)
    for f, r in tires:
        lap_cost = f
        total = 0
        for j in range(1, MAX_CONSEC + 1):
            total += lap_cost
            if total >= INF or lap_cost > numLaps * (changeTime + f):
                break
            best[j] = min(best[j], total)
            lap_cost = lap_cost * r
    dp = [INF] * (numLaps + 1)
    dp[0] = 0
    for i in range(1, numLaps + 1):
        for j in range(1, min(i, MAX_CONSEC) + 1):
            if best[j] < INF:
                dp[i] = min(dp[i], dp[i - j] + (0 if i == j else changeTime) + best[j])
    return dp[numLaps]`,
  },
  visibleTests: [
    { args: [[[2, 3], [3, 4]], 5, 4], expected: 21 },
    { args: [[[1, 10], [2, 2], [3, 4]], 6, 5], expected: 25 },
    { args: [[[2, 2]], 3, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 2]], 0, 1], expected: 1 },
    { args: [[[1, 2]], 10, 3], expected: 7 },
    { args: [[[10, 2], [3, 3]], 5, 3], expected: 19 },
    { args: [[[2, 2], [2, 2]], 3, 5], expected: 20 },
    { args: [[[1, 2]], 0, 10], expected: 10 },
    { args: [[[5, 2], [1, 5]], 3, 4], expected: 13 },
    { args: [[[3, 2], [2, 3]], 10, 6], expected: 44 },
  ],
};
