import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-finish-the-race',
  title: 'Minimum Time to Finish the Race',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** 2D integer array \`tires\` where \`tires[i] = [fi, ri]\` indicates that the \`i\`th tire can finish its \`x\`th successive lap in \`fi * ri^(x-1)\` seconds.

- For example, if \`fi = 3\` and \`ri = 2\`, then the tire would finish its \`1\`st lap in \`3\` seconds, its \`2\`nd lap in \`3 * 2 = 6\` seconds, its \`3\`rd lap in \`3 * 4 = 12\` seconds, etc.

You are also given an integer \`changeTime\` and an integer \`numLaps\`.

The race consists of \`numLaps\` laps and you may start the race on any tire. You have a **unlimited** supply of each tire and after every lap, you may **change** to any tire (including the current tire type) at the cost of \`changeTime\` seconds.

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
      explanation: 'Lap 1: tire 0 (2s), lap 2: change + tire 0 (5+2=7s), lap 3: change + tire 0 (5+2=7s), lap 4: change + tire 0 (5+2=7s). But optimal: tire 0 laps 1-2 (2+6=8s), change, tire 0 laps 3-4 (5+2+6=13s). Total=21.',
    },
    {
      input: 'tires = [[1,10],[2,2],[3,4]], changeTime = 6, numLaps = 5',
      output: '25',
      explanation: 'Optimal selection of tires and change timing gives 25.',
    },
  ],
  hints: [
    'Precompute best[j] = minimum time to complete exactly j laps on a single tire without changing.',
    'Since ri >= 2, a tire becomes worse than changing after at most ~17 laps (2^17 > 10^5).',
    'Use DP: dp[i] = min time to complete i laps total. dp[i] = min over j of dp[i-j] + changeTime + best[j], where dp[0] = -changeTime to cancel the first change.',
  ],
  functionName: 'minimumFinishTime',
  params: ['tires', 'changeTime', 'numLaps'],
  starterCode: {
    javascript: 'function minimumFinishTime(tires, changeTime, numLaps) {\n  \n}\n',
    python: 'def minimumFinishTime(tires, changeTime, numLaps):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 3], [3, 4]], 5, 4], expected: 21 },
    { args: [[[1, 10], [2, 2], [3, 4]], 6, 5], expected: 25 },
  ],
  hiddenTests: [
    { args: [[[2, 2]], 1, 1], expected: 2 },
    { args: [[[1, 2]], 0, 3], expected: 3 },
    { args: [[[5, 2], [3, 3]], 10, 3], expected: 25 },
    { args: [[[2, 2], [1, 3]], 3, 4], expected: 11 },
    { args: [[[1, 2]], 5, 2], expected: 3 },
  ],
};
